// FPDI — branded confirmation email templates (delegate + volunteer)
// Email-safe HTML: table layout, inline styles, hosted PNG emblem.
// Brand fonts are named with graceful fallbacks — clients that block web
// fonts (Gmail, Outlook) render the fallback; Apple Mail etc. show the brand.
//
// EMBLEM_URL must be a publicly reachable PNG (SVG is unreliable in email).
// After deploying, the white emblem lives at: <site>/emblem-white.png

const BRAND = {
  green: '#028226',
  greenDark: '#062E10',
  gold: '#FFC300',
  goldSafe: '#B38800',
  ink: '#121A12',
  body: '#333B31',
  muted: '#6B7568',
  line: '#D5DCD2',
  tintGreen: '#E9F6EE',
  pageBg: '#F4F7F3',
  card: '#FFFFFF',
};

// Web font with a system fallback stack (fallback is what most clients show)
const FONT_DISPLAY = `'Bricolage Grotesque', 'Segoe UI', Roboto, Helvetica, Arial, sans-serif`;
const FONT_BODY = `'Figtree', 'Segoe UI', Roboto, Helvetica, Arial, sans-serif`;
const FONT_MONO = `'IBM Plex Mono', 'Courier New', Courier, monospace`;

const SITE_URL = 'https://pcy26.vercel.app/';
const PROGRAM_URL = 'https://pcy26.vercel.app/program';
const HEADER_URL = process.env.EMAIL_HEADER_URL || 'https://pcy26.vercel.app/email-header.png';
const SOCIALS = {
  youtube: 'https://www.youtube.com/@fpdiafrica',
  instagram: 'https://www.instagram.com/fpdiafrica/',
  x: 'https://x.com/FPDIAfrica',
};

function shell(inner) {
  return `<!DOCTYPE html>
<html lang="en"><head><meta charset="utf-8"/>
<meta name="viewport" content="width=device-width,initial-scale=1"/>
<meta name="color-scheme" content="light"/>
<title>Policy Conference for Youth 2026</title></head>
<body style="margin:0;padding:0;background:${BRAND.pageBg};">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:${BRAND.pageBg};padding:24px 0;">
<tr><td align="center">
  <table role="presentation" width="560" cellpadding="0" cellspacing="0" style="width:560px;max-width:92%;background:${BRAND.card};border-radius:16px;overflow:hidden;border:1px solid ${BRAND.line};">

    <!-- Header banner (single baked image: rising-arc panel + icon) -->
    <tr><td style="padding:0;font-size:0;line-height:0;">
      <img src="${HEADER_URL}" width="560" alt="Policy Conference for Youth 2026"
        style="display:block;width:100%;max-width:560px;height:auto;border:0;outline:none;text-decoration:none;"/>
    </td></tr>

    ${inner}

    <!-- Footer -->
    <tr><td style="background:${BRAND.greenDark};padding:26px 32px;text-align:center;">
      <div style="font-family:${FONT_BODY};color:#FFFFFF;font-size:13px;line-height:1.6;margin-bottom:14px;">
        Future Pathways Development Initiative
      </div>
      <table role="presentation" cellpadding="0" cellspacing="0" align="center"><tr>
        <td style="padding:0 5px;">
          <a href="${SOCIALS.instagram}" style="display:inline-block;width:34px;height:34px;border:1px solid rgba(255,255,255,0.35);border-radius:999px;text-align:center;line-height:34px;font-family:${FONT_MONO};font-size:11px;font-weight:600;letter-spacing:0.04em;color:#FFFFFF;text-decoration:none;">IG</a>
        </td>
        <td style="padding:0 5px;">
          <a href="${SOCIALS.youtube}" style="display:inline-block;width:34px;height:34px;border:1px solid rgba(255,255,255,0.35);border-radius:999px;text-align:center;line-height:34px;font-family:${FONT_MONO};font-size:11px;font-weight:600;letter-spacing:0.04em;color:#FFFFFF;text-decoration:none;">YT</a>
        </td>
        <td style="padding:0 5px;">
          <a href="${SOCIALS.x}" style="display:inline-block;width:34px;height:34px;border:1px solid rgba(255,255,255,0.35);border-radius:999px;text-align:center;line-height:34px;font-family:${FONT_MONO};font-size:11px;font-weight:600;letter-spacing:0.04em;color:#FFFFFF;text-decoration:none;">X</a>
        </td>
      </tr></table>
      <div style="font-family:${FONT_BODY};color:#9FB3A2;font-size:11px;margin-top:14px;">
        Wed 12 August 2026 · Trenchard Hall, University of Ibadan
      </div>
    </td></tr>

  </table>
</td></tr></table>
</body></html>`;
}

function button(label, url) {
  return `<table role="presentation" cellpadding="0" cellspacing="0" style="margin:8px auto 0;"><tr>
    <td style="background:${BRAND.gold};border-radius:999px;">
      <a href="${url}" style="display:inline-block;padding:12px 26px;font-family:${FONT_DISPLAY};font-size:12px;font-weight:600;letter-spacing:0.12em;text-transform:uppercase;color:${BRAND.ink};text-decoration:none;">
        ${label}
      </a>
    </td></tr></table>`;
}

// ---- Delegate (Register) ----
export function delegateEmail(first) {
  const hi = first ? `Hi ${first},` : 'Hello,';
  const inner = `
    <tr><td style="padding:32px 32px 8px;">
      <p style="font-family:${FONT_BODY};color:${BRAND.body};font-size:15px;line-height:1.7;margin:0 0 16px;">
        ${hi}
      </p>
      <p style="font-family:${FONT_BODY};color:${BRAND.body};font-size:15px;line-height:1.7;margin:0 0 16px;">
        Thank you for applying to be a delegate at the <strong>Policy Conference for Youth 2026</strong>,
        holding <strong>Wednesday, 12 August 2026</strong> at Trenchard Hall, University of Ibadan.
      </p>
      <p style="font-family:${FONT_BODY};color:${BRAND.body};font-size:15px;line-height:1.7;margin:0 0 20px;">
        Selection is competitive. Your submission is now under review, and the secretariat
        will be in touch with next steps. Please keep an eye on this inbox.
      </p>
      ${button('Explore the conference', SITE_URL)}
      <p style="font-family:${FONT_BODY};color:${BRAND.body};font-size:15px;line-height:1.7;margin:24px 0 8px;">
        Regards,<br/>Policy Conference for Youth 26.
      </p>
    </td></tr>`;
  return shell(inner);
}

// ---- Volunteer ----
export function volunteerEmail(first) {
  const hi = first ? `Hi ${first},` : 'Hello,';
  const inner = `
    <tr><td style="padding:32px 32px 8px;">
      <p style="font-family:${FONT_BODY};color:${BRAND.body};font-size:15px;line-height:1.7;margin:0 0 16px;">
        ${hi}
      </p>
      <p style="font-family:${FONT_BODY};color:${BRAND.body};font-size:15px;line-height:1.7;margin:0 0 16px;">
        Thank you for offering to volunteer at the <strong>Policy Conference for Youth 2026</strong>,
        holding <strong>Wednesday, 12 August 2026</strong> at Trenchard Hall, University of Ibadan.
        Volunteers are the engine of the day, and we're glad you want to be part of it.
      </p>
      <p style="font-family:${FONT_BODY};color:${BRAND.body};font-size:15px;line-height:1.7;margin:0 0 20px;">
        We've received your application and will review it against the team you selected.
        If there's a fit, the secretariat will reach out with onboarding details ahead of the conference.
      </p>
      ${button('Learn about the day', PROGRAM_URL)}
      <p style="font-family:${FONT_BODY};color:${BRAND.body};font-size:15px;line-height:1.7;margin:24px 0 8px;">
        Regards,<br/>Policy Conference for Youth 26.
      </p>
    </td></tr>`;
  return shell(inner);
}
