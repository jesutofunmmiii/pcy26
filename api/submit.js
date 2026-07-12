// FPDI Conference — form submission handler (Vercel serverless function)
// Receives a POST from the Register or Volunteer form and fans out to:
//   1. HubSpot  — create/update contact (first/last split, custom properties, application_type)
//   2. Google Sheet — append a row via the Apps Script Web App
//   3. Resend   — instant confirmation email from info@futurepathways.ng
//
// All secrets come from environment variables (set in Vercel, never in the repo):
//   HUBSPOT_TOKEN         pat-...
//   RESEND_API_KEY        re_...
//   SHEET_WEBAPP_URL      https://script.google.com/macros/s/.../exec
//   SHEET_SHARED_SECRET   the string in the Apps Script
//   CONFIRM_FROM          info@futurepathways.ng   (optional; defaults below)
//
// Design notes:
// - Each destination is wrapped so one failing does NOT block the others; the
//   applicant still gets confirmed and lands wherever possible. Failures are
//   logged and returned in the response for debugging, but the form still
//   shows success as long as at least the core capture worked.
// - HubSpot custom-property creation is best-effort: if the schema scope is
//   missing or a property already exists, it's skipped gracefully.

import { delegateEmail, volunteerEmail } from './emails.js';

const HUBSPOT_TOKEN = process.env.HUBSPOT_TOKEN;
const RESEND_API_KEY = process.env.RESEND_API_KEY;
const SHEET_WEBAPP_URL = process.env.SHEET_WEBAPP_URL;
const SHEET_SHARED_SECRET = process.env.SHEET_SHARED_SECRET;
const CONFIRM_FROM = process.env.CONFIRM_FROM || 'FPDI Policy Conference <info@futurepathways.ng>';

// Which form fields become HubSpot custom properties (segmentable),
// mapped to snake_case property names. Everything else is folded into a note.
const HUBSPOT_PROPERTY_MAP = {
  register: {
    institution: 'fpdi_institution',
    travelFrom: 'fpdi_travelling_from',
    convoy: 'fpdi_transit_convoy',
    room: 'fpdi_room_allocation',
    hub: 'fpdi_hub',
    pillar: 'fpdi_reform_pillar',
    heard: 'fpdi_heard_about',
  },
  volunteer: {
    institution: 'fpdi_institution',
    location: 'fpdi_current_location',
    team: 'fpdi_volunteer_team',
    medical: 'fpdi_medical_background',
    onboarding: 'fpdi_onboarding_available',
    eventDay: 'fpdi_event_day_available',
  },
};

// Long free-text fields → collected into a HubSpot note instead of a property
const NOTE_FIELDS = {
  register: ['heardOther'],
  volunteer: ['why', 'portfolio'],
};

export default async function handler(req, res) {
  // CORS + method guard
  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ ok: false, error: 'Method not allowed' });

  try {
    const { formType, data } = req.body || {};
    if (!formType || !data || !data.email || !data.name) {
      return res.status(400).json({ ok: false, error: 'Missing formType, name, or email' });
    }
    const type = formType === 'volunteer' ? 'volunteer' : 'register';
    const { first, last } = splitName(data.name);

    // Fire all three in parallel; capture per-destination outcome
    const [hubspot, sheet, email] = await Promise.allSettled([
      pushToHubSpot(type, data, first, last),
      pushToSheet(type, data),
      sendConfirmation(type, data, first),
    ]);

    const results = {
      hubspot: settle(hubspot),
      sheet: settle(sheet),
      email: settle(email),
    };

    // Success for the user as long as the submission was captured somewhere
    const captured = results.hubspot.ok || results.sheet.ok;
    return res.status(captured ? 200 : 502).json({ ok: captured, results });
  } catch (err) {
    return res.status(500).json({ ok: false, error: String(err) });
  }
}

// ---------- helpers ----------

function splitName(full) {
  const parts = String(full).trim().split(/\s+/);
  const first = parts.shift() || '';
  const last = parts.join(' ');
  return { first, last };
}

function settle(r) {
  if (r.status === 'fulfilled') return { ok: true, ...(r.value || {}) };
  return { ok: false, error: String(r.reason && r.reason.message ? r.reason.message : r.reason) };
}

// ---------- HubSpot ----------

async function pushToHubSpot(type, data, first, last) {
  const propMap = HUBSPOT_PROPERTY_MAP[type];

  // Best-effort: ensure custom properties exist (needs crm.schemas.contacts.write).
  // If the scope is missing, these fail silently and we proceed with core fields.
  await ensureProperties(Object.values(propMap).concat(['fpdi_application_type']));

  // Build the contact properties payload
  const properties = {
    email: data.email,
    firstname: first,
    lastname: last,
    phone: data.phone || '',
    fpdi_application_type: type === 'volunteer' ? 'Volunteer' : 'Delegate',
  };
  for (const [field, prop] of Object.entries(propMap)) {
    if (data[field] !== undefined && data[field] !== '') properties[prop] = String(data[field]);
  }

  // Upsert by email: try create, and if it already exists, update instead
  const createRes = await fetch('https://api.hubapi.com/crm/v3/objects/contacts', {
    method: 'POST',
    headers: hsHeaders(),
    body: JSON.stringify({ properties }),
  });

  let contactId;
  if (createRes.status === 409) {
    // Contact exists — extract id and PATCH
    const body = await createRes.json();
    const existingId = (body.message || '').match(/Existing ID:\s*(\d+)/);
    contactId = existingId ? existingId[1] : null;
    if (contactId) {
      await fetch(`https://api.hubapi.com/crm/v3/objects/contacts/${contactId}`, {
        method: 'PATCH', headers: hsHeaders(), body: JSON.stringify({ properties }),
      });
    }
  } else if (createRes.ok) {
    const body = await createRes.json();
    contactId = body.id;
  } else {
    throw new Error(`HubSpot ${createRes.status}: ${await createRes.text()}`);
  }

  // Attach a note for the free-text fields, if any have content
  const noteFields = NOTE_FIELDS[type] || [];
  const noteLines = noteFields
    .filter((f) => data[f] && String(data[f]).trim())
    .map((f) => `${f}: ${data[f]}`);
  if (contactId && noteLines.length) {
    await createNote(contactId, noteLines.join('\n'));
  }

  return { contactId };
}

function hsHeaders() {
  return { 'Content-Type': 'application/json', Authorization: `Bearer ${HUBSPOT_TOKEN}` };
}

async function ensureProperties(propNames) {
  // Create each property in the "contactinformation" group if missing. Best-effort.
  for (const name of propNames) {
    try {
      const check = await fetch(
        `https://api.hubapi.com/crm/v3/properties/contacts/${name}`,
        { headers: hsHeaders() }
      );
      if (check.ok) continue; // already exists
      await fetch('https://api.hubapi.com/crm/v3/properties/contacts', {
        method: 'POST', headers: hsHeaders(),
        body: JSON.stringify({
          name,
          label: name.replace(/^fpdi_/, 'FPDI ').replace(/_/g, ' '),
          type: 'string', fieldType: 'text', groupName: 'contactinformation',
        }),
      });
    } catch (_) { /* scope missing or race — ignore, core capture still works */ }
  }
}

async function createNote(contactId, body) {
  const noteRes = await fetch('https://api.hubapi.com/crm/v3/objects/notes', {
    method: 'POST', headers: hsHeaders(),
    body: JSON.stringify({
      properties: { hs_note_body: body, hs_timestamp: Date.now() },
      associations: [{
        to: { id: contactId },
        types: [{ associationCategory: 'HUBSPOT_DEFINED', associationTypeId: 202 }],
      }],
    }),
  });
  if (!noteRes.ok) throw new Error(`Note ${noteRes.status}`);
}

// ---------- Google Sheet ----------

async function pushToSheet(type, data) {
  const r = await fetch(SHEET_WEBAPP_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ secret: SHEET_SHARED_SECRET, formType: type, data }),
  });
  const body = await r.json().catch(() => ({}));
  if (!body.ok) throw new Error(`Sheet: ${body.error || r.status}`);
  return {};
}

// ---------- Resend confirmation ----------

async function sendConfirmation(type, data, first) {
  const isVol = type === 'volunteer';
  const subject = isVol
    ? 'Thanks for stepping up'
    : 'Your delegate application is in';
  const html = isVol ? volunteerEmail(first) : delegateEmail(first);

  const r = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${RESEND_API_KEY}` },
    body: JSON.stringify({ from: CONFIRM_FROM, to: [data.email], subject, html }),
  });
  if (!r.ok) throw new Error(`Resend ${r.status}: ${await r.text()}`);
  return {};
}

