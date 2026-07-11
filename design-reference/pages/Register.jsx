function Register({ showToast, onNavigate }) {
  const { Input, Select, Radio, Checkbox, Button, Card, Icon, Badge } = window.FPDIDesignSystem_ca687e;

  const BLANK = {
    name: '', email: '', phone: '', institution: '', delegateType: '',
    travelFrom: '', convoy: '', room: '',        // standard out-of-state
    hub: '',                                      // policy hub delegation
    pillar: '', pitch: '',                        // statecraft alignment
    heard: '', heardOther: '', agree: false,      // final declaration
  };
  const [form, setForm] = React.useState(BLANK);
  const [step, setStep] = React.useState(0);      // 0..3
  const [tried, setTried] = React.useState(false);
  const set = (k, v) => setForm((f) => ({ ...f, [k]: v }));
  const setE = (k) => (e) => set(k, e.target.value);

  const emailOk = /.+@.+\..+/.test(form.email);
  const pitchWords = form.pitch.trim() ? form.pitch.trim().split(/\s+/).length : 0;

  // steps: personal → logistics → statecraft → declaration
  const steps = ['Personal information', 'Logistics', 'Statecraft alignment', 'Final declaration'];

  const stepValid = (s) => {
    if (s === 0) return form.name.trim() && emailOk && form.phone.trim() && form.institution.trim() && form.delegateType;
    if (s === 1) {
      if (form.delegateType === 'out-of-state') return form.travelFrom && form.convoy && form.room;
      if (form.delegateType === 'policy-hub') return form.hub;
      return true; // in-state has nothing to fill
    }
    if (s === 2) return form.pitch.trim() && pitchWords <= 50;
    if (s === 3) return form.heard && form.agree && (form.heard !== 'other' || form.heardOther.trim());
    return true;
  };

  const next = () => {
    setTried(true);
    if (!stepValid(step)) return;
    setTried(false);
    setStep((s) => Math.min(s + 1, 3));
    document.getElementById('reg-top') && document.getElementById('reg-top').scrollIntoView ? null : null;
    window.scrollTo({ top: 320, behavior: 'smooth' });
  };
  const back = () => { setTried(false); setStep((s) => Math.max(s - 1, 0)); window.scrollTo({ top: 320, behavior: 'smooth' }); };

  const submit = (e) => {
    e.preventDefault();
    setTried(true);
    if (!stepValid(3)) return;
    showToast('Delegate application submitted', "Selection is competitive — we'll review your statecraft pitch and email your decision before 12 August.");
    setForm(BLANK); setStep(0); setTried(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const included = [
    { icon: 'ticket', text: 'Full-day access to every plenary, breakout and Open House talk' },
    { icon: 'utensils', text: 'Networking lunch and refreshments' },
    { icon: 'notebook-pen', text: 'Delegate pack: programme, policy briefs and notepad' },
    { icon: 'file-badge', text: 'Certificate of participation' },
    { icon: 'file-text', text: 'The published conference communiqué' },
  ];

  const err = (cond) => tried && cond;

  return (
    <div>
      {/* header */}
      <section style={{ position: 'relative', overflow: 'hidden', background: 'var(--green-900)' }}>
        <img src={window.asset('assets/rising-arc.svg')} alt="" style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', height: '58%', objectFit: 'cover', opacity: 0.4 }} />
        <div style={{ position: 'relative', padding: 'var(--space-9) clamp(24px, 6vw, 120px) var(--space-8)' }}>
          <p className="rise rise-1" style={{ display: 'inline-block', fontFamily: 'var(--font-mono)', fontSize: 12, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--gold-500)', border: '1px solid rgba(255,195,0,0.5)', borderRadius: 'var(--radius-pill)', padding: '8px 18px', fontWeight: 600 }}>Delegate application · Selection is competitive</p>
          <h1 className="rise rise-2" style={{ color: '#fff', fontSize: 'var(--text-4xl)', fontWeight: 500, lineHeight: 'var(--leading-tight)', maxWidth: '17ch', margin: 'var(--space-4) 0 var(--space-5)' }}>
            Apply for your <span style={{ color: 'var(--gold-500)' }}>delegate seat.</span>
          </h1>
          <p className="rise rise-3" style={{ color: 'rgba(255,255,255,0.82)', fontSize: 'var(--text-lg)', maxWidth: '60ch' }}>
            We're not looking for passive attendees. We select delegates ready to move from theoretical advocacy to designing rigorous, structural blueprints for institutional reform. Complete the application below — incomplete or superficial submissions are set aside.
          </p>
        </div>
      </section>

      <section className="section" style={{ padding: 'var(--space-8) var(--layout-margin) var(--space-9)' }} id="reg-top">
        <div style={{ display: 'grid', gridTemplateColumns: '1.7fr 1fr', gap: 'var(--space-8)', alignItems: 'flex-start' }}>
          {/* wizard */}
          <div>
            {/* stepper */}
            <div style={{ display: 'flex', gap: 8, marginBottom: 'var(--space-6)', flexWrap: 'wrap' }}>
              {steps.map((label, i) => {
                const active = i === step, done = i < step;
                return (
                  <div key={label} style={{ display: 'flex', alignItems: 'center', gap: 10, flex: '1 1 0', minWidth: 120 }}>
                    <div style={{
                      width: 28, height: 28, borderRadius: '50%', flexShrink: 0,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontFamily: 'var(--font-mono)', fontSize: 13, fontWeight: 600,
                      background: done ? 'var(--green-500)' : active ? 'var(--green-900)' : 'var(--surface-sunken)',
                      color: (done || active) ? '#fff' : 'var(--text-muted)',
                      border: active ? '2px solid var(--gold-500)' : '1px solid var(--border-default)',
                    }}>
                      {done ? <Icon name="check" size={15} color="#fff" /> : i + 1}
                    </div>
                    <span style={{ fontSize: 12.5, fontWeight: active ? 600 : 500, color: active ? 'var(--text-heading)' : 'var(--text-muted)', lineHeight: 1.2 }}>{label}</span>
                  </div>
                );
              })}
            </div>

            <Card padding="var(--space-7)">
              <form onSubmit={submit}>
                {/* ---------- STEP 0: PERSONAL INFORMATION ---------- */}
                {step === 0 && (
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-5)' }}>
                    <div>
                      <p className="eyebrow" style={{ marginBottom: 4 }}>Section 1 of 4</p>
                      <h3 style={{ margin: 0 }}>Personal information</h3>
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-5)' }}>
                      <Input label="Full name *" placeholder="e.g. Adaeze Okonkwo" value={form.name} onChange={setE('name')} error={err(!form.name.trim()) ? 'Required' : undefined} />
                      <Input label="Email address *" type="email" placeholder="you@example.com" value={form.email} onChange={setE('email')} error={err(!emailOk) ? 'Enter a valid email' : undefined} />
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-5)' }}>
                      <Input label="Phone number (WhatsApp accessible) *" placeholder="+234 800 000 0000" value={form.phone} onChange={setE('phone')} error={err(!form.phone.trim()) ? 'Required' : undefined} />
                      <Select label="Institutional or university affiliation *" placeholder="Select your university" value={form.institution} onChange={setE('institution')} options={window.NG_UNIVERSITY_OPTIONS} />
                    </div>
                    <div>
                      <p style={{ fontSize: 'var(--text-sm)', fontWeight: 600, color: 'var(--text-heading)', margin: '0 0 12px' }}>Type of delegate *</p>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                        {[
                          ['in-state', 'In-state delegate', 'I am resident in, or will be commuting locally from within, Ibadan.'],
                          ['out-of-state', 'Standard out-of-state delegate', 'Travelling in from another state.'],
                          ['policy-hub', 'Official Policy Hub delegation', 'Pre-registered through a recognised Policy Hub.'],
                        ].map(([val, label, desc]) => (
                          <label key={val} onClick={() => set('delegateType', val)} style={{
                            display: 'flex', gap: 12, padding: 'var(--space-4)', cursor: 'pointer',
                            border: `1.5px solid ${form.delegateType === val ? 'var(--green-500)' : 'var(--border-default)'}`,
                            background: form.delegateType === val ? 'var(--surface-green-tint)' : '#fff',
                            borderRadius: 'var(--radius-md)', transition: 'all var(--duration-fast) var(--ease-out)',
                          }}>
                            <Radio name="delegateType" checked={form.delegateType === val} onChange={() => set('delegateType', val)} />
                            <div>
                              <div style={{ fontWeight: 600, color: 'var(--text-heading)', fontSize: 15 }}>{label}</div>
                              <div style={{ fontSize: 13, color: 'var(--text-muted)' }}>{desc}</div>
                            </div>
                          </label>
                        ))}
                      </div>
                      {err(!form.delegateType) && <span style={{ color: 'var(--status-error)', fontSize: 13 }}>Please choose a delegate type.</span>}
                    </div>
                  </div>
                )}

                {/* ---------- STEP 1: LOGISTICS (branching) ---------- */}
                {step === 1 && (
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-5)' }}>
                    <div>
                      <p className="eyebrow" style={{ marginBottom: 4 }}>Section 2 of 4</p>
                      <h3 style={{ margin: 0 }}>
                        {form.delegateType === 'out-of-state' ? 'Standard out-of-state delegate'
                          : form.delegateType === 'policy-hub' ? 'The Policy Hub delegation'
                          : 'Logistics'}
                      </h3>
                    </div>

                    {form.delegateType === 'out-of-state' && (
                      <React.Fragment>
                        <Select label="Where are you travelling from?" placeholder="Select your state / city" value={form.travelFrom} onChange={setE('travelFrom')}
                          options={[
                            { value: 'ilorin', label: 'Ilorin' }, { value: 'osogbo', label: 'Osogbo' },
                            { value: 'lagos', label: 'Lagos' }, { value: 'ekiti', label: 'Ekiti' }, { value: 'ondo', label: 'Ondo' },
                          ]} />
                        {err(!form.travelFrom) && <span style={{ color: 'var(--status-error)', fontSize: 13, marginTop: -10 }}>Required</span>}
                        <RadioGroup
                          label="To ensure safe and coordinated transit, the secretariat is linking regional delegates with the official Policy Hub travel convoys. Do you wish to be absorbed into the Hub's subsidised transit arrangement from your state? *"
                          name="convoy" value={form.convoy} onChange={(v) => set('convoy', v)} error={err(!form.convoy)}
                          options={[['yes', 'Yes, connect me with the Hub convoy'], ['no', 'No, I am handling my private transit']]} />
                        <RadioGroup
                          label="The conference secretariat is providing allocated rooms for regional delegates travelling down. Do you require a room allocation in Ibadan? *"
                          name="room" value={form.room} onChange={(v) => set('room', v)} error={err(!form.room)}
                          options={[['yes', 'Yes, I require a room'], ['no', 'No, my lodging is sorted']]} />
                      </React.Fragment>
                    )}

                    {form.delegateType === 'policy-hub' && (
                      <RadioGroup
                        label="Hub identification *"
                        name="hub" value={form.hub} onChange={(v) => set('hub', v)} error={err(!form.hub)}
                        options={[['lasu', 'Lagos State University'], ['osun', 'Osun State University'], ['unilorin', 'University of Ilorin']]} />
                    )}

                    {form.delegateType === 'in-state' && (
                      <Card style={{ background: 'var(--surface-green-tint)', border: 'none', display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                        <Icon name="map-pin" size={20} color="var(--green-700)" />
                        <p style={{ margin: 0, fontSize: 14, color: 'var(--text-body)' }}>
                          As an in-state delegate, no travel or lodging arrangements are needed. Continue to the statecraft alignment section.
                        </p>
                      </Card>
                    )}
                  </div>
                )}

                {/* ---------- STEP 2: STATECRAFT ALIGNMENT ---------- */}
                {step === 2 && (
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-5)' }}>
                    <div>
                      <p className="eyebrow" style={{ marginBottom: 4 }}>Section 3 of 4 · The policy pitch</p>
                      <h3 style={{ margin: 0 }}>The statecraft alignment</h3>
                    </div>
                    <Select label="Which reform pillar are you addressing?" placeholder="Choose a pillar" value={form.pillar} onChange={setE('pillar')}
                      options={[
                        { value: 'judicial', label: 'Judicial reform & rule of law' },
                        { value: 'electoral', label: 'Electoral integrity & accountability' },
                        { value: 'finance', label: 'Public finance & anti-corruption' },
                        { value: 'federalism', label: 'Federalism & local governance' },
                        { value: 'civic', label: 'Civic engagement & the social contract' },
                      ]} />
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                      <label style={{ fontSize: 'var(--text-sm)', fontWeight: 500, color: 'var(--text-heading)' }}>
                        Identify one structural failure in the Nigerian public sector within your chosen pillar, and briefly state how you would design a policy mechanism to fix it. (Max 50 words) *
                      </label>
                      <textarea
                        value={form.pitch}
                        onChange={setE('pitch')}
                        rows={6}
                        placeholder="Name the failure, then the mechanism. Precision over breadth."
                        style={{
                          padding: '12px 14px', borderRadius: 'var(--radius-sm)',
                          border: `1.5px solid ${err(!form.pitch.trim() || pitchWords > 50) ? 'var(--status-error)' : 'var(--border-default)'}`,
                          background: '#fff', fontFamily: 'var(--font-body)', fontSize: 'var(--text-md)',
                          color: 'var(--text-body)', outline: 'none', resize: 'vertical', lineHeight: 'var(--leading-body)',
                        }}
                      />
                      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 'var(--text-xs)' }}>
                        <span style={{ color: err(!form.pitch.trim()) ? 'var(--status-error)' : 'var(--text-muted)' }}>
                          {err(!form.pitch.trim()) ? 'A pitch is required' : 'One failure. One mechanism.'}
                        </span>
                        <span style={{ fontFamily: 'var(--font-mono)', color: pitchWords > 50 ? 'var(--status-error)' : 'var(--text-muted)' }}>{pitchWords} / 50 words</span>
                      </div>
                    </div>
                  </div>
                )}

                {/* ---------- STEP 3: FINAL DECLARATION ---------- */}
                {step === 3 && (
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-5)' }}>
                    <div>
                      <p className="eyebrow" style={{ marginBottom: 4 }}>Section 4 of 4</p>
                      <h3 style={{ margin: 0 }}>Final declaration</h3>
                    </div>
                    <RadioGroup
                      label="How did you hear about us? *"
                      name="heard" value={form.heard} onChange={(v) => set('heard', v)} error={err(!form.heard)}
                      options={[
                        ['hub', 'A recognised Policy Hub'],
                        ['social', 'Social media (X/Twitter, LinkedIn, Instagram)'],
                        ['referral', 'Direct referral from a colleague, mentor, or speaker'],
                        ['other', 'Other'],
                      ]} />
                    {form.heard === 'other' && (
                      <Input label="Please specify" placeholder="How did you hear about us?" value={form.heardOther} onChange={setE('heardOther')} error={err(!form.heardOther.trim()) ? 'Required' : undefined} />
                    )}
                    <div style={{ borderTop: '1px solid var(--border-default)', paddingTop: 'var(--space-5)' }}>
                      <Checkbox
                        label="I understand that selection is highly competitive and that as a delegate, I am expected to conduct myself with the utmost professionalism, intellectual rigor, and respect for the strategic objectives of the convergence."
                        checked={form.agree} onChange={(e) => set('agree', e.target.checked)} />
                      {err(!form.agree) && <span style={{ color: 'var(--status-error)', fontSize: 13 }}>You must agree to submit.</span>}
                    </div>
                  </div>
                )}

                {/* nav buttons */}
                <div style={{ display: 'flex', justifyContent: 'space-between', gap: 16, marginTop: 'var(--space-7)', flexWrap: 'wrap' }}>
                  <Button variant="secondary" type="button" onClick={back} disabled={step === 0} icon="arrow-left" style={step === 0 ? { visibility: 'hidden' } : undefined}>Back</Button>
                  {step < 3
                    ? <Button variant="primary" type="button" onClick={next} icon="arrow-right" iconPosition="end">Continue</Button>
                    : <Button variant="accent" type="submit" size="lg" icon="arrow-right" iconPosition="end">Submit delegate application</Button>}
                </div>
              </form>
            </Card>
          </div>

          {/* sidebar */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-5)', position: 'sticky', top: 92 }}>
            <Card featureCorner corner="top-right" style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--text-gold-safe)' }}>What's included</div>
                <Badge variant="success">Free</Badge>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                {included.map((it) => (
                  <div key={it.text} style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                    <Icon name={it.icon} size={18} color="var(--green-500)" />
                    <span style={{ fontSize: 14, color: 'var(--text-body)' }}>{it.text}</span>
                  </div>
                ))}
              </div>
            </Card>
            <Card style={{ background: 'var(--surface-green-tint)', border: 'none', display: 'flex', flexDirection: 'column', gap: 8 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <Icon name="calendar-check" size={20} color="var(--green-700)" />
                <span style={{ fontWeight: 600, color: 'var(--text-heading)' }}>Wed, 12 August 2026</span>
              </div>
              <p style={{ margin: 0, fontSize: 14, color: 'var(--text-body)' }}>10:00 AM – 4:00 PM · Trenchard Hall, University of Ibadan.</p>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}

// Card-style radio group used across the branching sections.
function RadioGroup({ label, name, value, onChange, options, error }) {
  const { Radio } = window.FPDIDesignSystem_ca687e;
  return (
    <div>
      <p style={{ fontSize: 'var(--text-sm)', fontWeight: 600, color: 'var(--text-heading)', margin: '0 0 12px', maxWidth: '62ch' }}>{label}</p>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
        {options.map(([val, text]) => (
          <label key={val} onClick={() => onChange(val)} style={{
            display: 'flex', gap: 12, alignItems: 'center', padding: '12px var(--space-4)', cursor: 'pointer',
            border: `1.5px solid ${value === val ? 'var(--green-500)' : 'var(--border-default)'}`,
            background: value === val ? 'var(--surface-green-tint)' : '#fff',
            borderRadius: 'var(--radius-md)', transition: 'all var(--duration-fast) var(--ease-out)',
          }}>
            <Radio name={name} checked={value === val} onChange={() => onChange(val)} />
            <span style={{ fontSize: 14.5, color: 'var(--text-heading)' }}>{text}</span>
          </label>
        ))}
      </div>
      {error && <span style={{ color: 'var(--status-error)', fontSize: 13 }}>Please select an option.</span>}
    </div>
  );
}

window.Register = Register;
