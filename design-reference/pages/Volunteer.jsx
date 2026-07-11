function Volunteer({ showToast, onNavigate }) {
  const { Input, Select, Checkbox, Button, Card, Icon, Badge } = window.FPDIDesignSystem_ca687e;
  const [form, setForm] = React.useState({ name: '', email: '', phone: '', institution: '', team: '', shirt: '' });
  const [avail, setAvail] = React.useState(false);
  const [consent, setConsent] = React.useState(false);
  const [submitted, setSubmitted] = React.useState(false);
  const set = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  const valid = form.name.trim() && /.+@.+\..+/.test(form.email) && form.team && consent;

  const submit = (e) => {
    e.preventDefault();
    if (!valid) { setSubmitted(true); return; }
    showToast('Volunteer application received', "Thank you for stepping up — the team lead will be in touch about briefing and roles.");
    setForm({ name: '', email: '', phone: '', institution: '', team: '', shirt: '' });
    setAvail(false); setConsent(false); setSubmitted(false);
  };

  const teams = [
    { icon: 'clipboard-check', title: 'Registration & accreditation', desc: 'Check in delegates, issue name badges and lanyards, manage the attendance register, handle walk-ins and the waitlist.' },
    { icon: 'navigation', title: 'Ushering & floor management', desc: 'Guide delegates to their seats, manage crowd flow, direct people, and manage latecomers.' },
    { icon: 'shield-check', title: 'Protocol & VIP liaison', desc: 'Receive and escort dignitaries, manage VIP seating, coordinate with security on movement, handle gifts and flowers.' },
    { icon: 'megaphone', title: 'Social media & communications', desc: 'Live-tweet sessions, post updates, capture behind-the-scenes content, manage the hashtag and delegate quotes.' },
    { icon: 'camera', title: 'Photography & videography', desc: 'Photograph sessions, capture candid moments, assist the professional crew, and manage the photo-upload system.' },
    { icon: 'coffee', title: 'Catering & refreshments', desc: 'Assist with food distribution, manage tea-break stations, keep food areas clean, and manage queues.' },
    { icon: 'bus', title: 'Transport coordination', desc: 'Coordinate transport per university — delegate buses, VIP and speaker cars, and airport pickups.' },
    { icon: 'heart-pulse', title: 'Medical & first aid support', desc: 'Assist the first aider or nurse, escort delegates who feel unwell, and keep the first aid station stocked and accessible.' },
    { icon: 'hammer', title: 'Décor & setup', desc: 'Set up the venue, arrange tables, chairs, banners and décor, reset rooms between sessions, and pack down after.' },
  ];

  return (
    <div>
      {/* header */}
      <section style={{ position: 'relative', overflow: 'hidden', background: 'var(--green-900)' }}>
        <img src={window.asset('assets/rising-arc.svg')} alt="" style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', height: '58%', objectFit: 'cover', opacity: 0.4 }} />
        <div style={{ position: 'relative', padding: 'var(--space-9) clamp(24px, 6vw, 120px) var(--space-8)' }}>
          <p className="rise rise-1" style={{ display: 'inline-block', fontFamily: 'var(--font-mono)', fontSize: 12, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--gold-500)', border: '1px solid rgba(255,195,0,0.5)', borderRadius: 'var(--radius-pill)', padding: '8px 18px', fontWeight: 600 }}>Volunteer with us</p>
          <h1 className="rise rise-2" style={{ color: '#fff', fontSize: 'var(--text-4xl)', fontWeight: 500, lineHeight: 'var(--leading-tight)', maxWidth: '16ch', margin: 'var(--space-4) 0 var(--space-5)' }}>
            Help us <span style={{ color: 'var(--gold-500)' }}>run the day.</span>
          </h1>
          <p className="rise rise-3" style={{ color: 'rgba(255,255,255,0.82)', fontSize: 'var(--text-lg)', maxWidth: '58ch' }}>
            The conference runs on its volunteers. Nine teams keep the day moving — from accreditation and floor management to photography, catering and setup. Find where you fit and sign up below.
          </p>
        </div>
      </section>

      {/* teams */}
      <section className="section" style={{ padding: 'var(--space-9) var(--layout-margin) var(--space-8)' }}>
        <p className="eyebrow">Volunteer teams</p>
        <h2 style={{ margin: 'var(--space-3) 0 var(--space-7)', maxWidth: '20ch' }}>Nine ways to be part of it.</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 'var(--space-5)' }}>
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
          <div style={{ display: 'grid', gridTemplateColumns: '1.7fr 1fr', gap: 'var(--space-8)', alignItems: 'flex-start' }}>
            <div>
              <p className="eyebrow">Sign up to volunteer</p>
              <h2 style={{ margin: 'var(--space-3) 0 var(--space-6)' }}>Tell us where you'd like to help.</h2>
              <form onSubmit={submit} style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-5)' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-5)' }}>
                  <Input label="Full name" placeholder="e.g. Tunde Bello" value={form.name} onChange={set('name')} error={submitted && !form.name.trim() ? 'Please enter your name' : undefined} />
                  <Input label="Email address" type="email" placeholder="you@example.com" value={form.email} onChange={set('email')} error={submitted && !/.+@.+\..+/.test(form.email) ? 'Enter a valid email' : undefined} />
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-5)' }}>
                  <Input label="Phone number" placeholder="+234 800 000 0000" value={form.phone} onChange={set('phone')} />
                  <Input label="University or institution" placeholder="University of Ibadan" value={form.institution} onChange={set('institution')} />
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-5)' }}>
                  <Select label="Preferred team" placeholder="Choose a team" value={form.team} onChange={set('team')}
                    error={submitted && !form.team ? 'Please choose a team' : undefined}
                    options={teams.map((t, i) => ({ value: 't' + i, label: t.title }))} />
                  <Select label="T-shirt size" placeholder="Select size" value={form.shirt} onChange={set('shirt')}
                    options={[
                      { value: 's', label: 'Small' }, { value: 'm', label: 'Medium' },
                      { value: 'l', label: 'Large' }, { value: 'xl', label: 'Extra large' }, { value: 'xxl', label: '2XL' },
                    ]} />
                </div>
                <Checkbox label="I'm available for the full day (setup from early morning through pack-down)." checked={avail} onChange={(e) => setAvail(e.target.checked)} />
                <Checkbox label="I consent to FPDI storing my details for volunteer coordination." checked={consent} onChange={(e) => setConsent(e.target.checked)} />
                {submitted && !consent && <span style={{ color: 'var(--status-error)', fontSize: 13, marginTop: -8 }}>Please confirm consent to continue.</span>}
                <Button variant="primary" type="submit" size="lg" icon="arrow-right" iconPosition="end" style={{ alignSelf: 'flex-start' }}>Submit volunteer application</Button>
              </form>
            </div>

            <Card featureCorner corner="top-right" style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              <Icon name="hand-heart" size={26} color="var(--green-500)" />
              <h4 style={{ margin: 0 }}>What to expect</h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                {[
                  ['calendar-days', 'One full day — Wed, 12 August 2026, from setup to pack-down.'],
                  ['users', 'A briefing and a clear role within your assigned team.'],
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
    </div>
  );
}

window.Volunteer = Volunteer;
