import React from 'react';
import { createPortal } from 'react-dom';
import { useNavigate } from 'react-router-dom';
import { Input, Select, Radio, Button, Card, Icon, Toast } from '../components/index.js';
import { NG_UNIVERSITY_OPTIONS } from '../data/ngUniversities.js';
import { submitForm } from '../lib/submit.js';

// Lightweight textarea styled to match the DS Input (no Textarea primitive exists in the kit).
function VolTextarea({ label, placeholder, value, onChange, error, helperText, rows = 4, note }) {
  const [focused, setFocused] = React.useState(false);
  const id = React.useId();
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 6, width: '100%' }}>
      {label ? (
        <label htmlFor={id} style={{ fontSize: 'var(--text-sm)', fontWeight: 500, color: 'var(--text-heading)' }}>{label}</label>
      ) : null}
      {note ? <span style={{ fontSize: 'var(--text-xs)', color: 'var(--text-muted)', marginTop: -2 }}>{note}</span> : null}
      <textarea
        id={id}
        rows={rows}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        style={{
          padding: '10px 14px',
          borderRadius: 'var(--radius-sm)',
          border: `1.5px solid ${error ? 'var(--status-error)' : focused ? 'var(--green-500)' : 'var(--border-default)'}`,
          background: '#fff',
          fontFamily: 'var(--font-body)',
          fontSize: 'var(--text-md)',
          color: 'var(--text-body)',
          lineHeight: 1.6,
          outline: 'none',
          resize: 'vertical',
          boxShadow: focused ? '0 0 0 3px var(--surface-green-tint)' : 'none',
          transition: 'border-color var(--duration-fast) var(--ease-out), box-shadow var(--duration-fast) var(--ease-out)',
        }}
      />
      {(error || helperText) ? (
        <span style={{ fontSize: 'var(--text-xs)', color: error ? 'var(--status-error)' : 'var(--text-muted)' }}>{error || helperText}</span>
      ) : null}
    </div>
  );
}

// Radio group built from the DS Radio primitive.
function VolRadioGroup({ label, name, value, onChange, options, error, direction = 'column' }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
      {label ? <span style={{ fontSize: 'var(--text-sm)', fontWeight: 500, color: 'var(--text-heading)' }}>{label}</span> : null}
      <div style={{ display: 'flex', flexDirection: direction, gap: direction === 'row' ? 24 : 10, flexWrap: 'wrap' }}>
        {options.map((o) => (
          <Radio key={o.value} name={name} label={o.label} checked={value === o.value} onChange={() => onChange(o.value)} />
        ))}
      </div>
      {error ? <span style={{ fontSize: 'var(--text-xs)', color: 'var(--status-error)' }}>{error}</span> : null}
    </div>
  );
}

export default function Volunteer() {
  const navigate = useNavigate();
  const onNavigate = () => navigate('/register');

  const [form, setForm] = React.useState({
    name: '', email: '', phone: '+234 ', location: '', institution: '',
    team: '', why: '', portfolio: '', medical: '', onboarding: '', eventDay: '',
  });
  const [submitted, setSubmitted] = React.useState(false);
  const [toast, setToast] = React.useState(null);
  const set = (k) => (e) => setForm({ ...form, [k]: e.target.value });
  const setVal = (k) => (v) => setForm({ ...form, [k]: v });

  const showToast = (title, description, variant = 'success') => {
    setToast({ title, description, variant });
    setTimeout(() => setToast(null), 5000);
  };

  const teams = [
    { icon: 'clipboard-check', title: 'Registration & accreditation', desc: 'Check in delegates, issue name badges and lanyards, manage the attendance register, handle walk-ins and the waitlist.' },
    { icon: 'navigation', title: 'Ushering & floor management', desc: 'Guide delegates to their seats, manage crowd flow, direct people, and manage latecomers.' },
    { icon: 'shield-check', title: 'Protocol', desc: 'Receive and escort dignitaries, manage VIP seating, coordinate with security on movement, handle gifts and flowers.' },
    { icon: 'megaphone', title: 'Social media & communications', desc: 'Live-tweet sessions, post updates, capture behind-the-scenes content, manage the hashtag and delegate quotes.', cat: 'media' },
    { icon: 'camera', title: 'Photography & videography', desc: 'Photograph sessions, capture candid moments, assist the professional crew, and manage the photo-upload system.', cat: 'media' },
    { icon: 'coffee', title: 'Catering & refreshments', desc: 'Assist with food distribution, manage tea-break stations, keep food areas clean, and manage queues.' },
    { icon: 'heart-pulse', title: 'Medical & first aid support', desc: 'Assist the first aider or nurse, escort delegates who feel unwell, and keep the first aid station stocked and accessible.', cat: 'medical' },
    { icon: 'hammer', title: 'Décor & setup', desc: 'Set up the venue, arrange tables, chairs, banners and décor, reset rooms between sessions, and pack down after.' },
  ];

  const selIdx = form.team ? parseInt(form.team.replace('t', ''), 10) : -1;
  const selCat = selIdx >= 0 ? teams[selIdx].cat : null;

  const emailOk = /.+@.+\..+/.test(form.email);
  const valid =
    form.name.trim() && emailOk && form.phone.trim() && form.phone.trim() !== '+234' && form.location &&
    form.team && form.why.trim() && form.onboarding && form.eventDay &&
    (selCat !== 'medical' || form.medical);

  const submit = async (e) => {
    e.preventDefault();
    if (!valid) { setSubmitted(true); return; }
    try {
      const res = await submitForm('volunteer', form);
      if (res && res.ok) {
        showToast('Volunteer application received', 'Thank you for stepping up — we’ll be in touch about the onboarding briefing and your team assignment.');
        setForm({ name: '', email: '', phone: '+234 ', location: '', institution: '', team: '', why: '', portfolio: '', medical: '', onboarding: '', eventDay: '' });
        setSubmitted(false);
      } else {
        showToast('Something went wrong', 'Please try again or email info@futurepathways.ng', 'error');
      }
    } catch {
      showToast('Something went wrong', 'Please try again or email info@futurepathways.ng', 'error');
    }
  };

  return (
    <div>
      {/* header */}
      <section style={{ position: 'relative', overflow: 'hidden', background: 'var(--green-900)' }}>
        <img src="/assets/rising-arc.svg" alt="" style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', height: '58%', objectFit: 'cover', opacity: 0.4 }} />
        <div style={{ position: 'relative', padding: 'var(--space-9) clamp(24px, 6vw, 120px) var(--space-8)' }}>
          <p className="rise rise-1" style={{ display: 'inline-block', fontFamily: 'var(--font-mono)', fontSize: 12, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--gold-500)', border: '1px solid rgba(255,195,0,0.5)', borderRadius: 'var(--radius-pill)', padding: '8px 18px', fontWeight: 600 }}>Call for volunteers</p>
          <h1 className="rise rise-2" style={{ color: '#fff', fontSize: 'var(--text-4xl)', fontWeight: 500, lineHeight: 'var(--leading-tight)', maxWidth: '16ch', margin: 'var(--space-4) 0 var(--space-5)' }}>
            Be the <span style={{ color: 'var(--gold-500)' }}>operational backbone.</span>
          </h1>
          <p className="rise rise-3" style={{ color: 'rgba(255,255,255,0.82)', fontSize: 'var(--text-lg)', maxWidth: '62ch' }}>
            We’re building the execution team for the Policy Conference for Youth 2026 — Wednesday, 12 August at Trenchard Hall, University of Ibadan. Eight teams keep the day moving, from accreditation and floor management to media, catering and setup. It’s a volunteer role, but the standard is strictly professional. Find where you deliver the most impact and apply below.
          </p>
        </div>
      </section>

      {/* teams */}
      <section className="section" style={{ padding: 'var(--space-9) var(--layout-margin) var(--space-8)' }}>
        <p className="eyebrow">Volunteer teams</p>
        <h2 style={{ margin: 'var(--space-3) 0 var(--space-7)', maxWidth: '20ch' }}>Eight ways to be part of it.</h2>
        <div className="qa-cards reveal-stagger" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 'var(--space-5)' }}>
          {teams.map((t, i) => (
            <Card key={t.title} className="card-hover" featureCorner={i === 0} corner="top-left" style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <div style={{ width: 44, height: 44, borderRadius: 'var(--radius-md)', background: 'var(--surface-green-tint)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <Icon name={t.icon} size={22} color="var(--green-700)" />
                </div>
                <h4 style={{ margin: 0, fontSize: 'var(--text-lg)' }}>{t.title}</h4>
              </div>
              <p style={{ margin: 0, fontSize: 14, color: 'var(--text-body)' }}>{t.desc}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* sign-up form */}
      <section style={{ background: 'var(--surface-green-tint)', padding: 'var(--space-9) 0' }}>
        <div className="section">
          <div className="qa-stack" style={{ display: 'grid', gridTemplateColumns: '1.7fr 1fr', gap: 'var(--space-8)', alignItems: 'flex-start' }}>
            <div>
              <p className="eyebrow">Apply to volunteer</p>
              <h2 style={{ margin: 'var(--space-3) 0 var(--space-6)' }}>Tell us where you fit.</h2>
              <form onSubmit={submit} style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-6)' }}>

                {/* Section 1 — About you */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-5)' }}>
                  <p style={{ margin: 0, fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--text-gold-safe)' }}>1 — About you</p>
                  <div className="qa-stack-sm" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-5)' }}>
                    <Input label="Full name" placeholder="e.g. Tunde Bello" value={form.name} onChange={set('name')} error={submitted && !form.name.trim() ? 'Please enter your name' : undefined} />
                    <Input label="Email address" type="email" placeholder="you@example.com" value={form.email} onChange={set('email')} error={submitted && !emailOk ? 'Enter a valid email' : undefined} />
                  </div>
                  <div className="qa-stack-sm" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-5)' }}>
                    <Input label="Phone number (WhatsApp accessible)" placeholder="+234 800 000 0000" value={form.phone} onChange={set('phone')} error={submitted && (!form.phone.trim() || form.phone.trim() === '+234') ? 'Please enter a phone number' : undefined} />
                    <Select label="Current affiliation / institution" placeholder="Select your university" value={form.institution} onChange={set('institution')} options={NG_UNIVERSITY_OPTIONS} />
                  </div>
                  <VolRadioGroup
                    label="Current location"
                    name="location"
                    direction="row"
                    value={form.location}
                    onChange={setVal('location')}
                    error={submitted && !form.location ? 'Please select your location' : undefined}
                    options={[
                      { value: 'in', label: 'Ibadan (In-state)' },
                      { value: 'out', label: 'Outside Ibadan (Out-of-state)' },
                    ]}
                  />
                </div>

                {/* Section 2 — Team selection */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-5)', borderTop: '1px solid var(--border-default)', paddingTop: 'var(--space-6)' }}>
                  <p style={{ margin: 0, fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--text-gold-safe)' }}>2 — Team selection</p>
                  <Select label="Which team are you applying to volunteer for?" placeholder="Select your top choice" value={form.team} onChange={set('team')}
                    error={submitted && !form.team ? 'Please choose a team' : undefined}
                    options={teams.map((t, i) => ({ value: 't' + i, label: t.title }))} />
                </div>

                {/* Section 3 — Role fit */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-5)', borderTop: '1px solid var(--border-default)', paddingTop: 'var(--space-6)' }}>
                  <p style={{ margin: 0, fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--text-gold-safe)' }}>3 — Role fit</p>
                  <VolTextarea label="Why are you interested in volunteering for your selected team?" placeholder="Tell us what draws you to this role and what you’d bring to it." value={form.why} onChange={set('why')} error={submitted && !form.why.trim() ? 'Please tell us why' : undefined} />
                  {selCat === 'media' ? (
                    <VolTextarea
                      label="Portfolio, past work or social handles"
                      note="For media applicants (social media / photography / videography). Share a link if applicable."
                      placeholder="Links to a portfolio, past work, or accounts you’ve managed."
                      value={form.portfolio}
                      onChange={set('portfolio')}
                      rows={3}
                    />
                  ) : null}
                  {selCat === 'medical' ? (
                    <VolRadioGroup
                      label="Do you have a medical background or a valid first-aid certification?"
                      name="medical"
                      value={form.medical}
                      onChange={setVal('medical')}
                      error={submitted && !form.medical ? 'Please choose one' : undefined}
                      options={[
                        { value: 'yes', label: 'Yes' },
                        { value: 'no', label: 'No' },
                        { value: 'studying', label: 'Currently studying a medical-related field' },
                      ]}
                    />
                  ) : null}
                </div>

                {/* Section 4 — Availability */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-5)', borderTop: '1px solid var(--border-default)', paddingTop: 'var(--space-6)' }}>
                  <p style={{ margin: 0, fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--text-gold-safe)' }}>4 — Availability & commitment</p>
                  <VolRadioGroup
                    label="Are you available for a mandatory virtual onboarding briefing before the conference?"
                    name="onboarding"
                    direction="row"
                    value={form.onboarding}
                    onChange={setVal('onboarding')}
                    error={submitted && !form.onboarding ? 'Please choose one' : undefined}
                    options={[{ value: 'yes', label: 'Yes' }, { value: 'no', label: 'No' }]}
                  />
                  <VolRadioGroup
                    label="Can you commit to being fully available from 10:00 AM to 4:00 PM on Wednesday, 12 August (Event Day)?"
                    name="eventDay"
                    direction="row"
                    value={form.eventDay}
                    onChange={setVal('eventDay')}
                    error={submitted && !form.eventDay ? 'Please choose one' : undefined}
                    options={[{ value: 'yes', label: 'Yes' }, { value: 'no', label: 'No' }]}
                  />
                </div>

                <Button variant="primary" type="submit" size="lg" icon="arrow-right" iconPosition="end" style={{ alignSelf: 'flex-start' }}>Submit volunteer application</Button>
              </form>
            </div>

            <Card featureCorner corner="top-right" style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              <Icon name="hand-heart" size={26} color="var(--green-500)" />
              <h4 style={{ margin: 0 }}>What to expect</h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                {[
                  ['calendar-days', 'One full day — Wed, 12 August 2026, 10:00 AM to 4:00 PM.'],
                  ['video', 'A mandatory virtual onboarding briefing before the conference.'],
                  ['users', 'A clear role within your assigned team.'],
                  ['shirt', 'A branded volunteer T-shirt, meals and refreshments.'],
                  ['file-badge', 'A certificate recognising your contribution.'],
                ].map(([icon, text]) => (
                  <div key={text} style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                    <Icon name={icon} size={18} color="var(--green-500)" />
                    <span style={{ fontSize: 14, color: 'var(--text-body)' }}>{text}</span>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* delegate cross-CTA (keeps gold = delegate registration) */}
      <section style={{ background: 'var(--green-900)' }}>
        <div className="section" style={{ padding: 'var(--space-8) var(--layout-margin)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 24, flexWrap: 'wrap' }}>
          <div>
            <h3 style={{ color: '#fff', margin: '0 0 6px' }}>Prefer to attend as a delegate?</h3>
            <p style={{ color: 'rgba(255,255,255,0.8)', margin: 0 }}>Delegate applications are free and open now.</p>
          </div>
          <Button variant="accent" size="lg" icon="arrow-right" iconPosition="end" onClick={() => onNavigate('register')}>Apply now</Button>
        </div>
      </section>

      {toast && createPortal(
        <div id="toast-host">
          <Toast variant={toast.variant || 'success'} title={toast.title} description={toast.description} onClose={() => setToast(null)} />
        </div>,
        document.body
      )}
    </div>
  );
}
