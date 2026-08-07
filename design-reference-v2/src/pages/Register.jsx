const EVENTBRITE_URL = 'https://www.eventbrite.com/e/the-policy-conference-for-youths-2026-tickets-1996803816969?keep_tld=true';

function Register({ onNavigate }) {
  const { Button, Card, Icon, Badge } = window.FPDIDesignSystem_ca687e;

  const online = [
    { icon: 'radio', text: 'Live stream of all four acts, from the keynote to the closing awards' },
    { icon: 'message-square', text: 'Put questions to speakers through the moderated stream chat' },
  ];

  return (
    <div>
      {/* header */}
      <section style={{ position: 'relative', overflow: 'hidden', background: 'var(--green-900)' }}>
        <img src={window.asset('assets/rising-arc.svg')} alt="" style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', height: '58%', objectFit: 'cover', opacity: 0.4 }} />
        <div style={{ position: 'relative', padding: 'var(--space-9) clamp(24px, 6vw, 120px) var(--space-8)' }}>
          <p className="rise rise-1" style={{ display: 'inline-block', fontFamily: 'var(--font-mono)', fontSize: 12, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--gold-500)', border: '1px solid rgba(255,195,0,0.5)', borderRadius: 'var(--radius-pill)', padding: '8px 18px', fontWeight: 600 }}>Delegate application · Closed</p>
          <h1 className="rise rise-2" style={{ color: '#fff', fontSize: 'var(--text-4xl)', fontWeight: 500, lineHeight: 'var(--leading-tight)', maxWidth: '18ch', margin: 'var(--space-4) 0 var(--space-5)' }}>
            The hall is full. <span style={{ color: 'var(--gold-500)' }}>The conversation isn't.</span>
          </h1>
          <p className="rise rise-3" style={{ color: 'rgba(255,255,255,0.82)', fontSize: 'var(--text-lg)', maxWidth: '62ch' }}>
            Every physical seat at the KAAF Auditorium has been allocated, and delegate applications are now closed. The full day still reaches you: register for online participation and follow the keynote, the panel, the Model National Assembly and the SpotOn talks live.
          </p>
          <div className="rise rise-4" style={{ marginTop: 'var(--space-6)' }}>
            <a href={EVENTBRITE_URL} target="_blank" rel="noopener noreferrer">
              <Button variant="accent" size="lg" icon="arrow-right" iconPosition="end" className="glow-cta">Register for online participation</Button>
            </a>
          </div>
        </div>
      </section>

      <section className="section" style={{ padding: 'var(--space-8) var(--layout-margin) var(--space-9)' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1.7fr 1fr', gap: 'var(--space-8)', alignItems: 'flex-start' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-6)' }}>
            <Card featureCorner corner="top-right" padding="var(--space-7)" style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-5)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 16, flexWrap: 'wrap' }}>
                <p className="eyebrow" style={{ margin: 0 }}>Online participation · Open</p>
                <Badge variant="success">Free</Badge>
              </div>
              <div>
                <h2 style={{ margin: '0 0 12px' }}>Attend from wherever you are</h2>
                <p style={{ margin: 0, maxWidth: 'var(--measure-max)', color: 'var(--text-body)' }}>
                  Online registration takes a minute and closes when the stream opens on the morning of 12 August. You will receive your stream link by email the day before, and a reminder an hour before the opening plenary.
                </p>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 14, borderTop: '1px solid var(--border-default)', paddingTop: 'var(--space-5)' }}>
                {online.map((it) => (
                  <div key={it.text} style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                    <Icon name={it.icon} size={18} color="var(--green-500)" />
                    <span style={{ fontSize: 15, color: 'var(--text-body)' }}>{it.text}</span>
                  </div>
                ))}
              </div>
              <div style={{ display: 'flex', gap: 16, alignItems: 'center', flexWrap: 'wrap' }}>
                <a href={EVENTBRITE_URL} target="_blank" rel="noopener noreferrer">
                  <Button variant="primary" size="lg" icon="arrow-right" iconPosition="end">Register for online participation</Button>
                </a>
                <span style={{ fontSize: 13.5, color: 'var(--text-muted)' }}>Registration is handled on Eventbrite.</span>
              </div>
            </Card>

            <Card style={{ display: 'flex', gap: 14, alignItems: 'flex-start' }}>
              <Icon name="users" size={20} color="var(--green-700)" />
              <div>
                <h4 style={{ margin: '0 0 6px' }}>Already applied for a physical seat?</h4>
                <p style={{ margin: 0, fontSize: 14.5, color: 'var(--text-body)' }}>
                  Your application still stands. Decisions were emailed to every applicant — check the inbox and spam folder of the address you applied with. If nothing arrived, write to the secretariat and we will confirm your status.
                </p>
              </div>
            </Card>
          </div>

          {/* sidebar */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-5)', position: 'sticky', top: 92 }}>
            <Card style={{ background: 'var(--surface-green-tint)', border: 'none', display: 'flex', flexDirection: 'column', gap: 8 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <Icon name="calendar-check" size={20} color="var(--green-700)" />
                <span style={{ fontWeight: 600, color: 'var(--text-heading)' }}>Wed, 12 August 2026</span>
              </div>
              <p style={{ margin: 0, fontSize: 14, color: 'var(--text-body)' }}>9:00 AM – 3:40 PM · KAAF Auditorium, University of Ibadan — streamed live.</p>
            </Card>
            <Card style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--text-gold-safe)' }}>While you wait</div>
              <p style={{ margin: 0, fontSize: 14, color: 'var(--text-body)' }}>Read the running order and the speakers you will hear from before the stream opens.</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10, alignItems: 'flex-start' }}>
                <Button variant="secondary" onClick={() => onNavigate('program')} icon="arrow-right" iconPosition="end">See the programme</Button>
                <Button variant="secondary" onClick={() => onNavigate('speakers')} icon="arrow-right" iconPosition="end">Meet the speakers</Button>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}

window.Register = Register;
