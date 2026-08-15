function Program({ onNavigate }) {
  const { Button, Card, Badge, Icon } = window.FPDIDesignSystem_ca687e;

  // Full-day run of show, 9:00 AM – 3:40 PM, in four acts.
  const acts = [
    {
      act: 'Act one', window: '9:00 – 11:00', title: 'Arrival and framing',
      items: [
        { time: '9:00', end: '10:00', mins: '60 min', type: 'Logistics', title: 'Registration + breakfast', lead: 'Ushers / DJ' },
        { time: '10:00', end: '10:10', mins: '10 min', type: 'Ceremony', title: 'National anthem & introduction', lead: 'MC' },
        { time: '10:10', end: '10:25', mins: '15 min', type: 'Performance', title: 'Theatre performance', lead: 'Theatre group' },
        { time: '10:25', end: '10:35', mins: '10 min', type: 'Welcome', title: 'Welcome & conference opening', lead: 'Arinola Daniel' },
        { time: '10:35', end: '10:55', mins: '20 min', type: 'Keynote', title: 'Keynote address', lead: 'Seyi Adisa' },
        { time: '10:55', end: '11:00', mins: '5 min', type: 'Transition', title: 'Audience polls open', lead: 'MC' },
      ],
    },
    {
      act: 'Act two', window: '11:00 – 1:40', title: 'The long working session',
      items: [
        { time: '11:00', end: '11:30', mins: '30 min', type: 'Panel', title: 'Panel discussion — "Real Talk: Rebuilding Trust in The Nigerian State"', lead: 'Ayokunnu Ojeniyi · Damilola O. Adefulire · Abolaji Olaleye Joy · Daniel Otabor · Gloria Babarinde (moderator)' },
        { time: '11:30', end: '12:00', mins: '30 min', type: 'Keynote', title: "Founder's session", lead: 'Dr Ayokunnu Ojeniyi' },
        { time: '12:00', end: '12:20', mins: '20 min', type: 'Competition', title: 'Policy Challenge finals', lead: 'Top 3 teams' },
        { time: '12:20', end: '12:40', mins: '20 min', type: 'Fireside', title: 'Fireside chat — "The Smallest Unit of Trust: Character, Relationships, and the Rebuilding of the State"', lead: 'Arinola Daniel & Khalil Nur Khalil' },
        { time: '12:40', end: '1:40', mins: '60 min', type: 'Simulation', title: 'Model National Assembly session', lead: 'Centre for Governance Development' },
      ],
    },
    {
      act: 'Act three', window: '1:40 – 3:05', title: 'Lunch and the SpotOn talks',
      items: [
        { time: '1:40', end: '2:10', mins: '30 min', type: 'Break', title: 'Lunch break', lead: '—' },
        { time: '2:10', end: '2:20', mins: '10 min', type: 'Transition', title: 'Reconvene + energizer + ads', lead: 'MC' },
        { time: '2:20', end: '2:35', mins: '15 min', type: 'SpotOn', title: 'SpotOn 1 — TEDx-style talk', lead: 'Daniel Otabor' },
        { time: '2:35', end: '2:50', mins: '15 min', type: 'SpotOn', title: 'SpotOn 2 — TEDx-style talk', lead: 'Arinola Daniel' },
        { time: '2:50', end: '3:05', mins: '15 min', type: 'SpotOn', title: 'SpotOn 3 — TEDx-style talk', lead: 'Adebayo Akande' },
      ],
    },
    {
      act: 'Act four', window: '3:05 – 3:40', title: 'Awards and close',
      items: [
        { time: '3:05', end: '3:20', mins: '15 min', type: 'Awards', title: 'Policy Challenge awards', lead: 'AO / Arinola Daniel + judges' },
        { time: '3:20', end: '3:30', mins: '10 min', type: 'Closing', title: 'Vision casting', lead: 'Dr Ayokunnu Ojeniyi' },
        { time: '3:30', end: '3:40', mins: '10 min', type: 'Closing', title: 'Closing ceremony & networking', lead: 'Arinola Daniel / MC' },
      ],
    },
  ];

  const typeColor = {
    Logistics: 'var(--text-muted)', Ceremony: 'var(--green-500)', Performance: 'var(--gold-700)',
    Welcome: 'var(--green-500)', Keynote: 'var(--green-700)', Panel: 'var(--green-500)',
    Competition: 'var(--gold-700)', Fireside: 'var(--green-500)', Simulation: 'var(--green-700)',
    SpotOn: 'var(--gold-700)', Awards: 'var(--gold-700)', Closing: 'var(--green-700)',
    Transition: 'var(--text-muted)', Break: 'var(--text-muted)',
  };

  const deepDives = [
    { icon: 'mic', tag: 'Keynote', time: '20 mins', title: 'Keynote address', lead: 'Seyi Adisa', body: 'The morning\u2019s framing address: what the erosion of institutional trust costs Nigeria, and where the work of rebuilding it has to begin. \u201cA win not felt by everyone is a win for no one.\u201d' },
    { icon: 'users-round', tag: 'Panel', time: '30 mins', title: 'Real talk: rebuilding trust in the Nigerian state', lead: 'Moderated by Gloria Babarinde', body: 'Four voices from governance, development and civic practice took the theme apart on stage, unscripted.', points: ['Ayokunnu Ojeniyi', 'Damilola O. Adefulire', 'Abolaji Olaleye Joy', 'Daniel Otabor'] },
    { icon: 'flame', tag: 'Keynote', time: '30 mins', title: "Founder's session", lead: 'Dr Ayokunnu Ojeniyi', body: 'The founder spoke to the room as the person who began this work \u2014 why the convening exists, and what it asks of the people in it.' },
    { icon: 'message-circle', tag: 'Fireside', time: '20 mins', title: 'The smallest unit of trust', lead: 'Arinola Daniel & Khalil Nur Khalil', body: 'A conversation that scaled the theme down: character, relationships, and how personal trust compounds into institutional trust.' },
    { icon: 'landmark', tag: 'Simulation', time: '60 mins', title: 'Model National Assembly session', lead: 'Centre for Governance Development', body: 'An hour on the floor. Delegates took legislative roles and moved a bill through debate, testing how reform survives contact with process.' },
    { icon: 'trophy', tag: 'Competition', time: 'Finals + awards', title: 'Policy Challenge', lead: 'Top 3 teams · Judges', body: 'The three finalist teams presented their reform proposals before lunch; Team SMETrust took the \u20a62m grand prize when the awards closed the day in act four.' },
    { icon: 'presentation', tag: 'SpotOn', time: '3 × 15 mins', title: 'SpotOn talks', lead: 'Daniel Otabor · Arinola Daniel · Adebayo Akande', body: 'Three TEDx-style talks carried the afternoon. One argument each, made tightly.' },
    { icon: 'drama', tag: 'Performance', time: '15 mins', title: 'Theatre performance', lead: 'Theatre group', body: 'The day opened in performance rather than in speech \u2014 the trust deficit as it is actually lived.' },
  ];

  return (
    <div>
      {/* header */}
      <section style={{ position: 'relative', overflow: 'hidden', background: 'var(--green-900)' }}>
        <img src={window.asset('assets/rising-arc.svg')} alt="" style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', height: '60%', objectFit: 'cover', opacity: 0.4 }} />
        <div style={{ position: 'relative', padding: 'var(--space-9) clamp(24px, 6vw, 120px) var(--space-8)' }}>
          <p className="rise rise-1" style={{ display: 'inline-block', fontFamily: 'var(--font-mono)', fontSize: 12, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--gold-500)', border: '1px solid rgba(255,195,0,0.5)', borderRadius: 'var(--radius-pill)', padding: '8px 18px', fontWeight: 600 }}>Run of show · 12 August 2026</p>
          <h1 className="rise rise-2" style={{ color: '#fff', fontSize: 'var(--text-4xl)', fontWeight: 500, lineHeight: 'var(--leading-tight)', maxWidth: '15ch', margin: 'var(--space-4) 0 var(--space-5)' }}>
            One working day, <span style={{ color: 'var(--gold-500)' }}>in four acts.</span>
          </h1>
          <p className="rise rise-3" style={{ color: 'rgba(255,255,255,0.82)', fontSize: 'var(--text-lg)', maxWidth: '62ch' }}>
A keynote and a panel framed the argument, a Founder's session and a fireside chat sharpened it, an hour on the floor of a Model National Assembly tested it against process, and the Policy Challenge finals settled it. This is how the day ran on Wednesday, 12 August at the KAAF Auditorium, University of Ibadan.
          </p>
        </div>
      </section>

      {/* timeline */}
      <section className="section" style={{ padding: 'var(--space-9) var(--layout-margin) var(--space-8)' }}>
        <p className="eyebrow">Run of show</p>
        <h2 style={{ margin: 'var(--space-3) 0 var(--space-7)' }}>The full programme, as it ran.</h2>

        {acts.map((a) => (
          <div key={a.act} style={{ marginBottom: 'var(--space-7)' }}>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: 16, flexWrap: 'wrap', paddingBottom: 'var(--space-3)', borderBottom: '1.5px solid var(--green-500)' }}>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.16em', textTransform: 'uppercase', fontWeight: 600, color: 'var(--text-gold-safe)' }}>{a.act}</span>
              <h3 style={{ margin: 0, fontSize: 'var(--text-xl)' }}>{a.title}</h3>
              <span style={{ marginLeft: 'auto', fontFamily: 'var(--font-mono)', fontSize: 13, color: 'var(--text-muted)' }}>{a.window}</span>
            </div>
            {a.items.map((s, i) => {
              const muted = s.type === 'Transition' || s.type === 'Break' || s.type === 'Logistics';
              return (
                <div key={i} style={{
                  display: 'grid', gridTemplateColumns: '132px 132px 1fr', gap: 'var(--space-5)',
                  padding: muted ? '14px 0' : 'var(--space-5) 0', borderBottom: '1px solid var(--border-default)', alignItems: 'start',
                }}>
                  <div>
                    <div style={{ fontFamily: 'var(--font-mono)', fontSize: 14, fontWeight: 600, color: muted ? 'var(--text-muted)' : 'var(--green-700)', whiteSpace: 'nowrap' }}>
                      {s.time}<span style={{ color: 'var(--text-muted)', fontWeight: 500 }}>–{s.end}</span>
                    </div>
                    <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--text-muted)', marginTop: 3 }}>{s.mins}</div>
                  </div>
                  <div>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.06em', textTransform: 'uppercase', fontWeight: 600, color: typeColor[s.type] }}>{s.type}</span>
                  </div>
                  <div>
                    <div style={{ fontFamily: 'var(--font-display)', fontWeight: muted ? 500 : 600, fontSize: muted ? 15 : 'var(--text-lg)', color: muted ? 'var(--text-body)' : 'var(--text-heading)', maxWidth: '48ch' }}>{s.title}</div>
                    {s.lead !== '—' && <div style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--text-muted)', margin: '6px 0 0', textTransform: 'uppercase', letterSpacing: '0.04em', maxWidth: '62ch', lineHeight: 1.5 }}>{s.lead}</div>}
                  </div>
                </div>
              );
            })}
          </div>
        ))}
      </section>

      {/* session deep-dives */}
      <section style={{ background: 'var(--surface-green-tint)', padding: 'var(--space-9) 0' }}>
        <div className="section">
          <p className="eyebrow">Session deep-dives</p>
          <h2 style={{ margin: 'var(--space-3) 0 var(--space-7)', maxWidth: '20ch' }}>What each session did.</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 'var(--space-5)' }}>
            {deepDives.map((d) => (
              <Card key={d.title} className="card-hover" style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 12 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                    <Icon name={d.icon} size={26} color="var(--green-500)" />
                    <h4 style={{ margin: 0 }}>{d.title}</h4>
                  </div>
                  <Badge variant="gold">{d.time}</Badge>
                </div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11.5, letterSpacing: '0.06em', textTransform: 'uppercase', color: 'var(--text-muted)' }}>{d.lead}</div>
                <p style={{ margin: 0, fontSize: 14, color: 'var(--text-body)' }}>{d.body}</p>
                {d.points && (
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 8, borderTop: '1px solid var(--border-default)', paddingTop: 14 }}>
                    {d.points.map((p, i) => (
                      <div key={i} style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                        <Icon name="chevron-right" size={16} color="var(--green-500)" />
                        <span style={{ fontSize: 13.5, color: 'var(--text-body)' }}>{p}</span>
                      </div>
                    ))}
                  </div>
                )}
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: 'var(--green-900)' }}>
        <div className="section" style={{ padding: 'var(--space-9) var(--layout-margin)', textAlign: 'center' }}>
          <h2 style={{ color: '#fff', margin: '0 auto var(--space-5)', maxWidth: '22ch' }}>Every session, on the record.</h2>
          <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Button variant="accent" size="lg" icon="download" iconPosition="end" onClick={window.downloadCompendium}>Download the compendium</Button>
            <Button variant="secondary" size="lg" style={{ color: '#fff', borderColor: 'rgba(255,255,255,0.5)', background: 'transparent' }} onClick={() => onNavigate('gallery')}>See the photographs</Button>
          </div>
        </div>
      </section>
    </div>
  );
}

window.Program = Program;
