function About({ onNavigate }) {
  const { Button, Card, Icon } = window.FPDIDesignSystem_ca687e;

  const ifWe = [
    'Invest in building ethical, visionary youth leadership',
    'Equip youth and citizens to engage meaningfully in policymaking',
    'Embed young professionals in governance structures',
    'Provide platforms for continuous learning, dialogue and co-creation',
  ];
  const thenWe = [
    'Strengthen the legitimacy, responsiveness and effectiveness of African institutions',
    'Create a new generation of policy leaders across the continent',
    'Catalyze a governance culture rooted in accountability, innovation and equity',
  ];

  return (
    <div>
      {/* header */}
      <section style={{ position: 'relative', overflow: 'hidden', background: 'var(--green-900)' }}>
        <img src={window.asset('assets/rising-arc.svg')} alt="" style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', height: '60%', objectFit: 'cover', opacity: 0.4 }} />
        <div style={{ position: 'relative', padding: 'var(--space-9) clamp(24px, 6vw, 120px) var(--space-8)' }}>
          <p className="rise rise-1" style={{ display: 'inline-block', fontFamily: 'var(--font-mono)', fontSize: 12, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--gold-500)', border: '1px solid rgba(255,195,0,0.5)', borderRadius: 'var(--radius-pill)', padding: '8px 18px', fontWeight: 600 }}>About FPDI</p>
          <h1 className="rise rise-2" style={{ color: '#fff', fontSize: 'var(--text-4xl)', fontWeight: 500, lineHeight: 'var(--leading-tight)', maxWidth: '16ch', margin: 'var(--space-4) 0 var(--space-5)' }}>
            Because policy defines power — and <span style={{ color: 'var(--gold-500)' }}>leadership</span> shapes how it's used.
          </h1>
          <p className="rise rise-3" style={{ color: 'rgba(255,255,255,0.82)', fontSize: 'var(--text-lg)', maxWidth: '60ch' }}>
            Future Pathways Development Initiative (FPDI) is an independent, pan-African organization established in 2022 to inspire reforms and strengthen governance outcomes across Africa through impactful, citizen-centred policy.
          </p>
        </div>
      </section>

      {/* why we exist */}
      <section className="section" style={{ padding: 'var(--space-9) var(--layout-margin)' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-8)', alignItems: 'center' }}>
          <div>
            <p className="eyebrow">Why we exist</p>
            <h2 style={{ margin: 'var(--space-3) 0 var(--space-5)', maxWidth: '16ch' }}>Africa is at a turning point.</h2>
            <p style={{ color: 'var(--text-body)' }}>
              Despite abundant resources and a growing youth population, the continent continues to grapple with weak governance systems, ineffective policy implementation and low citizen engagement.
            </p>
            <p style={{ color: 'var(--text-body)' }}>
              Poor governance in Africa often stems not from a lack of vision but from a lack of inclusive leadership and effective policymaking. By empowering youth to take on leadership roles and engage with policy, we lay the foundation for long-term governance reform.
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginTop: 'var(--space-5)', color: 'var(--text-heading)', fontWeight: 600 }}>
              <Icon name="map-pin" size={18} color="var(--green-500)" />
              <span style={{ fontSize: 15 }}>Headquartered in FCT, Abuja</span>
            </div>
          </div>
          <div style={{ height: 400, borderRadius: 'var(--radius-lg)', overflow: 'hidden', boxShadow: 'var(--shadow-raised)' }}>
            <img src={window.asset('gallery/about-minister.jpg')} alt="The Honourable Minister of Industry, Trade and Investment greeting a delegate at the Policy Conference for Youth" style={{ display: 'block', width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
        </div>
      </section>

      {/* vision / mission / goal */}
      <section style={{ background: 'var(--surface-green-tint)', padding: 'var(--space-9) 0' }}>
        <div className="section">
          <p className="eyebrow">What guides us</p>
          <h2 style={{ margin: 'var(--space-3) 0 var(--space-7)' }}>Vision, mission and goal.</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 'var(--space-5)' }}>
            {[
              { icon: 'eye', head: 'Our vision', body: 'To strengthen good governance through developing and implementing effective, citizen-driven policies — and to inspire and strengthen citizen action and engagement in Africa.' },
              { icon: 'target', head: 'Our mission', body: 'To catalyze a generation of African youth leaders who can influence, design and implement inclusive, forward-thinking public policies across the continent.', feature: true },
              { icon: 'flag', head: 'Our goal', body: 'To embed young professionals in governance structures and build a policy leadership pipeline that makes institutions more legitimate, responsive and effective.' },
            ].map((c) => (
              <Card key={c.head} featureCorner={c.feature} corner="top-left" style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                <Icon name={c.icon} size={30} color="var(--green-500)" />
                <h4 style={{ margin: 0 }}>{c.head}</h4>
                <p style={{ margin: 0, fontSize: 14, color: 'var(--text-body)' }}>{c.body}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* theory of change */}
      <section style={{ background: 'var(--green-900)', color: '#fff' }}>
        <div className="section" style={{ padding: 'var(--space-9) var(--layout-margin)' }}>
          <p className="eyebrow" style={{ color: 'var(--gold-500)' }}>Our theory of change</p>
          <h2 style={{ color: '#fff', margin: 'var(--space-3) 0 var(--space-7)', maxWidth: '20ch' }}>How change actually happens.</h2>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-7)' }}>
            <div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: 12, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--gold-500)', marginBottom: 'var(--space-4)' }}>If we —</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                {ifWe.map((t, i) => (
                  <div key={i} style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                    <Icon name="arrow-up-right" size={18} color="var(--gold-500)" />
                    <span style={{ color: 'rgba(255,255,255,0.86)' }}>{t}</span>
                  </div>
                ))}
              </div>
            </div>
            <div style={{ borderLeft: '1px solid rgba(255,255,255,0.16)', paddingLeft: 'var(--space-7)' }}>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: 12, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--gold-500)', marginBottom: 'var(--space-4)' }}>Then we will —</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                {thenWe.map((t, i) => (
                  <div key={i} style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                    <Icon name="check" size={18} color="var(--gold-500)" />
                    <span style={{ color: 'rgba(255,255,255,0.86)' }}>{t}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* legitimacy problem — why this conference */}
      <section className="section" style={{ padding: 'var(--space-9) var(--layout-margin)' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.3fr', gap: 'var(--space-8)', alignItems: 'flex-start' }}>
          <div>
            <p className="eyebrow">Why we're hosting this</p>
            <h2 style={{ margin: 'var(--space-3) 0 0', maxWidth: '14ch' }}>The legitimacy problem.</h2>
          </div>
          <div>
            <p style={{ color: 'var(--text-body)' }}>
              Institutional legitimacy is not simply about whether a government is democratically elected; it is about whether citizens believe their state is capable, fair and genuinely responsive to their needs. When that belief erodes, the social contract frays.
            </p>
            <p style={{ color: 'var(--text-body)' }}>
              The trust deficit is a governance problem with real consequences: low tax compliance, disengagement from civic processes, and a legitimacy gap that emboldens those who profit from dysfunction. Nigeria stands at a critical juncture where a credible reform agenda — backed by political will and civic pressure — could meaningfully shift this trajectory.
            </p>
            <p style={{ color: 'var(--text-body)' }}>
              The 2026 Policy Conference for Youth is FPDI's working answer: convene the people who can move the agenda, and hand young leaders a real seat at the table.
            </p>
            <div style={{ display: 'flex', gap: 16, marginTop: 'var(--space-5)', flexWrap: 'wrap' }}>
              <Button variant="accent" size="lg" icon="arrow-right" iconPosition="end" onClick={() => onNavigate('register')}>Apply now</Button>
              <Button variant="secondary" size="lg" onClick={() => onNavigate('program')}>See the programme</Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

window.About = About;
