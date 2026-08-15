function Home({ onNavigate }) {
  const { Button, Card, Badge, Icon } = window.FPDIDesignSystem_ca687e;

  // Hero background slideshow — photographs from the conference floor
  // 1600px hero frames (~150-260KB each); only the first is eager, the rest load after it.
  const heroSlides = ['2026/w-01.jpg', '2026/w-02.jpg', '2026/w-04.jpg', '2026/w-03.jpg', '2026/w-07.jpg', '2026/w-05.jpg'];
  const [slide, setSlide] = React.useState(0);
  React.useEffect(() => {
    const t = setInterval(() => setSlide((s) => (s + 1) % heroSlides.length), 5000);
    return () => clearInterval(t);
  }, []);

  const facts = [
    { icon: 'calendar-check', label: 'Held', value: 'Wed, 12 August 2026' },
    { icon: 'users-round', label: 'Delegates', value: 'About 300 in the hall' },
    { icon: 'map-pin', label: 'Venue', value: 'KAAF Auditorium, U. of Ibadan' },
    { icon: 'banknote', label: 'Awarded', value: '₦3.75m across three teams' },
  ];

  const tracks = [
    { icon: 'sunrise', title: 'Arrival and framing', room: 'Act one', when: '9:00 – 11:00', desc: 'Registration and breakfast, a theatre performance that opened the day in performance rather than speech, the welcome, and Seyi Adisa’s keynote.' },
    { icon: 'landmark', title: 'The long working session', room: 'Act two', when: '11:00 – 1:40', feature: true, desc: 'The panel, the Founder’s session, the Policy Challenge finals, a fireside chat, and an hour on the floor of a Model National Assembly.' },
    { icon: 'presentation', title: 'Lunch and the SpotOn talks', room: 'Act three', when: '1:40 – 3:05', desc: 'Lunch and a reconvene, then three TEDx-style SpotOn talks from Daniel Otabor, Arinola Daniel and Adebayo Akande.' },
    { icon: 'trophy', title: 'Awards and close', room: 'Act four', when: '3:05 – 3:40', desc: 'Team SMETrust took the grand prize, followed by vision casting and closing networking.' },
  ];

  const quotes = [
    { text: 'We are angry but we have not been able to channel this anger meaningfully to the people in government. The Policy Challenge exists to change that.', who: 'Ayokunnu Ojeniyi', role: 'Founder & Executive Director, FPDI' },
    { text: 'A government can win on performance and still be distrusted. A win not felt by everyone is a win for no one.', who: 'Hon. Seyi Adisa', role: 'Keynote · Founder, African Governance Institute for Development' },
    { text: 'When young Nigerians from 33 states sit down to research, write, and defend reform proposals, that is not just participation. That is the beginning of the end of apathy.', who: 'Arinola Daniel', role: 'Executive Director, FPDI' },
  ];

  return (
    <div>
      {/* ============ HERO ============ */}
      <section style={{ position: 'relative', overflow: 'hidden', background: 'var(--green-900)', minHeight: '100vh', display: 'flex', alignItems: 'center' }}>
        {heroSlides.map((src, i) => (
          <img key={src} data-no-reveal src={window.asset('gallery/' + src)} alt="" loading={i === 0 ? 'eager' : 'lazy'} decoding={i === 0 ? 'sync' : 'async'} fetchpriority={i === 0 ? 'high' : 'low'} style={{
            position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 28%',
            opacity: i === slide ? 1 : 0, transition: 'opacity 1200ms ease-in-out',
          }} />
        ))}
        <div data-no-reveal style={{ position: 'absolute', inset: 0, opacity: 1, background: 'linear-gradient(100deg, rgba(6,46,16,0.90) 0%, rgba(6,46,16,0.70) 45%, rgba(6,46,16,0.42) 100%)' }} />
        <div style={{ position: 'relative', padding: 'var(--space-8) clamp(24px, 6vw, 120px)', width: '100%' }}>
          <div style={{ maxWidth: 700 }}>
            <span className="rise rise-1" style={{ display: 'inline-block', fontFamily: 'var(--font-mono)', fontSize: 12, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--gold-500)', border: '1px solid rgba(255,195,0,0.5)', borderRadius: 'var(--radius-pill)', padding: '8px 18px', fontWeight: 600 }}>
              PCY 2026 · Held 12 August, University of Ibadan
            </span>
            <h1 className="rise rise-2" style={{ color: '#fff', fontSize: 'var(--text-5xl)', fontWeight: 500, lineHeight: 'var(--leading-tight)', maxWidth: '16ch', margin: 'var(--space-5) 0 var(--space-5)' }}>
              Six hours of policy. <span style={{ color: 'var(--gold-500)' }}>Three winning reforms.</span>
            </h1>
            <p className="rise rise-3" style={{ color: 'rgba(255,255,255,0.85)', fontSize: 'var(--text-lg)', maxWidth: '56ch', lineHeight: 1.7 }}>
              About 300 delegates filled the KAAF Auditorium for the second Policy Conference for Youth, and thousands more followed the stream. Team SMETrust won the ₦2 million grand prize. The proposals the room argued for are now published — read them.
            </p>
            <div className="rise rise-4" style={{ display: 'flex', gap: 16, marginTop: 'var(--space-6)', flexWrap: 'wrap', alignItems: 'center' }}>
              <Button variant="accent" size="sm" icon="download" iconPosition="end" onClick={window.downloadCompendium} className="glow-cta" style={{ borderRadius: 'var(--radius-pill)' }}>Download the compendium</Button>
              <Button variant="secondary" size="sm" style={{ color: '#fff', borderColor: 'rgba(255,255,255,0.5)', background: 'transparent', borderRadius: 'var(--radius-pill)' }} onClick={() => onNavigate('challenge')}>See who won</Button>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.6)' }}>PDF · Free</span>
            </div>
          </div>
        </div>
        {/* scroll cue + slide dots */}
        <div style={{ position: 'absolute', left: 0, right: 0, bottom: 'var(--space-6)', padding: '0 clamp(24px, 6vw, 120px)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <span style={{ width: 32, height: 1, background: 'rgba(255,255,255,0.5)' }}></span>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.6)' }}>Scroll</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            {heroSlides.map((_, i) => (
              <button key={i} aria-label={'Slide ' + (i + 1)} onClick={() => setSlide(i)} style={{
                width: i === slide ? 22 : 8, height: 8, borderRadius: 'var(--radius-pill)', border: 'none', padding: 0, cursor: 'pointer',
                background: i === slide ? 'var(--gold-500)' : 'rgba(255,255,255,0.4)', transition: 'all 300ms var(--ease-out)',
              }}></button>
            ))}
          </div>
        </div>
      </section>

      {/* ============ WHAT HAPPENED + RECORD CARD ============ */}
      <section className="section" style={{ padding: 'var(--space-6) var(--layout-margin) var(--space-9)' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 'var(--space-6)', paddingBottom: 'var(--space-7)', marginBottom: 'var(--space-8)', borderBottom: '1px solid var(--border-default)' }}>
          {facts.map((f) => (
            <div key={f.label} style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
              <Icon name={f.icon} size={22} color="var(--green-700)" />
              <div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--text-muted)' }}>{f.label}</div>
                <div style={{ color: 'var(--text-heading)', fontWeight: 600, fontSize: 15, marginTop: 2 }}>{f.value}</div>
              </div>
            </div>
          ))}
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr', gap: 'var(--space-8)', alignItems: 'flex-start' }}>
          <div>
            <p className="eyebrow">What happened</p>
            <h2 style={{ margin: 'var(--space-3) 0 var(--space-5)', maxWidth: '18ch' }}>It was not a conference of just talks. It was a working session.</h2>
            <p style={{ color: 'var(--text-body)' }}>
              Under the theme <strong style={{ color: 'var(--text-heading)' }}>Rebuilding Trust in the Nigerian State</strong>, policymakers, academics, civil society and young reformers spent six hours and forty minutes on the trust deficit facing Nigerian institutions — a keynote, an unscripted panel, a Founder’s session, a fireside chat, an hour of Model National Assembly, three SpotOn talks and the Policy Challenge finals.
            </p>
            <p style={{ color: 'var(--text-body)' }}>
              Three finalist teams, drawn from 322 submissions and 1,371 expressions of interest across 33 states, defended their reform proposals before a live panel of judges. ₦3.75 million was awarded on stage, and all three teams left with pathways into paid policy internships.
            </p>
            <div style={{ display: 'flex', gap: 16, marginTop: 'var(--space-5)', flexWrap: 'wrap' }}>
              <Button variant="primary" icon="download" iconPosition="end" onClick={window.downloadCompendium}>Download the compendium</Button>
              <Button variant="secondary" onClick={() => onNavigate('program')}>How the day ran</Button>
            </div>
          </div>

          <Card featureCorner corner="top-right" padding="var(--space-6)" style={{ position: 'sticky', top: 92, background: 'linear-gradient(160deg, var(--green-900) 0%, #0c3016 100%)', border: '1px solid rgba(240,193,75,0.18)', boxShadow: '0 24px 60px -24px rgba(4,34,12,0.55)' }}>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: 12, fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#F4C95D', marginBottom: 'var(--space-4)' }}>Conference record</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              {[
                ['Theme', 'Rebuilding Trust in the Nigerian State'],
                ['Date', 'Wednesday, 12 August 2026'],
                ['Time', '9:00 AM – 3:40 PM'],
                ['Venue', 'KAAF Auditorium, University of Ibadan'],
                ['Delegates', 'About 300, plus a live stream audience'],
                ['Edition', 'Second — the first was held in Abuja in 2025'],
                ['Host', 'Future Pathways Development Initiative'],
              ].map(([k, v]) => (
                <div key={k} style={{ display: 'flex', justifyContent: 'space-between', gap: 16, alignItems: 'baseline', borderBottom: '1px solid rgba(255,255,255,0.12)', paddingBottom: 10 }}>
                  <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.6)' }}>{k}</span>
                  <span style={{ fontSize: 14, fontWeight: 600, color: '#fff', textAlign: 'right', maxWidth: '62%' }}>{v}</span>
                </div>
              ))}
            </div>
            <Button variant="accent" size="lg" icon="download" iconPosition="end" onClick={window.downloadCompendium} style={{ width: '100%', marginTop: 'var(--space-5)', justifyContent: 'center' }}>Download the compendium</Button>
            <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.55)', textAlign: 'center', margin: '10px 0 0' }}>Free PDF. Planning for the 2027 edition is under way.</p>
          </Card>
        </div>
      </section>

      {/* ============ WINNERS ============ */}
      <Winners onNavigate={onNavigate} />

      {/* ============ HOW THE DAY RAN ============ */}
      <section style={{ background: 'var(--surface-green-tint)', padding: 'var(--space-9) 0' }}>
        <div className="section">
          <p className="eyebrow">The day in four acts</p>
          <h2 style={{ margin: 'var(--space-3) 0 var(--space-2)', maxWidth: '22ch' }}>How the working day ran.</h2>
          <p style={{ color: 'var(--text-muted)', marginBottom: 'var(--space-7)' }}>Six hours and forty minutes, paced so the argument built instead of repeating.</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 'var(--space-5)' }}>
            {tracks.map((t) => (
              <Card key={t.title} className="card-hover" featureCorner={t.feature} corner="top-left" style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                  <Icon name={t.icon} size={28} color="var(--green-500)" />
                  <Badge variant="neutral">{t.room}</Badge>
                </div>
                <div>
                  <h4 style={{ margin: '0 0 4px' }}>{t.title}</h4>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--text-muted)' }}>{t.when}</span>
                </div>
                <p style={{ margin: 0, fontSize: 14, color: 'var(--text-body)' }}>{t.desc}</p>
              </Card>
            ))}
          </div>
          <div style={{ marginTop: 'var(--space-6)' }}>
            <Button variant="secondary" icon="arrow-right" iconPosition="end" onClick={() => onNavigate('program')}>See every session</Button>
          </div>
        </div>
      </section>

      {/* ============ WHAT WAS SAID ============ */}
      <section className="section" style={{ padding: 'var(--space-9) var(--layout-margin)' }}>
        <p className="eyebrow">What was said</p>
        <h2 style={{ margin: 'var(--space-3) 0 var(--space-7)', maxWidth: '20ch' }}>Three lines that framed the room.</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 'var(--space-5)' }}>
          {quotes.map((q) => (
            <Card key={q.who} className="card-hover" padding="var(--space-6)" style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
              <Icon name="quote" size={22} color="var(--green-500)" />
              <p style={{ margin: 0, fontFamily: 'var(--font-display)', fontSize: 'var(--text-lg)', fontWeight: 500, lineHeight: 1.45, color: 'var(--text-heading)' }}>“{q.text}”</p>
              <div style={{ marginTop: 'auto', paddingTop: 6 }}>
                <div style={{ fontWeight: 600, fontSize: 14.5, color: 'var(--text-heading)' }}>{q.who}</div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10.5, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--text-muted)', marginTop: 4 }}>{q.role}</div>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* ============ IN THE NEWS ============ */}
      <Press />

      {/* ============ WATCH ============ */}
      <Watch />

      {/* ============ GALLERY PREVIEW ============ */}
      <GalleryPreview onNavigate={onNavigate} />

      {/* ============ CLOSING CTA BAND ============ */}
      <HomeCta onNavigate={onNavigate} />
    </div>
  );
}

function Winners({ onNavigate }) {
  const { Button, Card, Badge, Icon } = window.FPDIDesignSystem_ca687e;
  const winners = [
    { place: 'Grand prize', prize: '₦2,000,000', team: 'Team SMETrust', title: 'Rebuilding trust in Nigeria’s tax system', body: 'A National SME Digital Compliance Interface — making compliance legible and fair for small businesses.', feature: true },
    { place: 'First runner-up', prize: '₦1,000,000', team: 'Team Astrum', title: 'Fixing Nigeria’s electricity sector', body: 'Three institutional reforms aimed at the structures behind unreliable power.' },
    { place: 'Second runner-up', prize: '₦750,000', team: 'Team Nikao', title: 'Closing the gap between motto and reality', body: 'A reform proposal on the distance between what the Nigeria Police Force says it is and what citizens meet.' },
  ];
  return (
    <section style={{ background: 'var(--green-900)', padding: 'var(--space-9) 0' }}>
      <div className="section">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: 20, marginBottom: 'var(--space-7)' }}>
          <div>
            <p className="eyebrow" style={{ color: 'var(--gold-500)' }}>The 2026 Policy Challenge winners</p>
            <h2 style={{ color: '#fff', margin: 'var(--space-3) 0 0', maxWidth: '22ch' }}>Three teams, three reforms, ₦3.75 million awarded.</h2>
          </div>
          <Button variant="accent" icon="arrow-right" iconPosition="end" onClick={() => onNavigate('challenge')}>See the full result</Button>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 'var(--space-5)' }}>
          {winners.map((w) => (
            <Card key={w.team} className="card-hover" featureCorner={w.feature} corner="top-right" padding="var(--space-6)" style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 12 }}>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: 10.5, letterSpacing: '0.1em', textTransform: 'uppercase', fontWeight: 600, color: 'var(--text-gold-safe)' }}>{w.place}</span>
                <Badge variant={w.feature ? 'gold' : 'neutral'}>{w.prize}</Badge>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <Icon name={w.feature ? 'trophy' : 'award'} size={22} color="var(--green-500)" />
                <h3 style={{ margin: 0, fontSize: 'var(--text-xl)' }}>{w.team}</h3>
              </div>
              <div>
                <div style={{ fontWeight: 600, fontSize: 15, color: 'var(--text-heading)', marginBottom: 6 }}>{w.title}</div>
                <p style={{ margin: 0, fontSize: 14, color: 'var(--text-body)' }}>{w.body}</p>
              </div>
            </Card>
          ))}
        </div>
        <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: 14.5, margin: 'var(--space-6) 0 0', maxWidth: '68ch' }}>
          Beyond the prize money, all three teams received pathways into paid policy internships and continued engagement with FPDI’s network of policy practitioners and governance reform professionals.
        </p>
      </div>
    </section>
  );
}

function HomeCta({ onNavigate }) {
  const { Button } = window.FPDIDesignSystem_ca687e;
  return (
    <section style={{ position: 'relative', overflow: 'hidden', background: 'var(--green-900)' }}>
      <img data-no-reveal src={window.asset('assets/rising-arc-line.svg')} alt="" style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', height: '70%', objectFit: 'cover', opacity: 0.4 }} />
      <div className="section" style={{ position: 'relative', padding: 'var(--space-9) var(--layout-margin)', textAlign: 'center' }}>
        <p className="eyebrow" style={{ color: 'var(--gold-500)', textAlign: 'center', margin: '0 auto' }}>12 August 2026 · KAAF Auditorium, Ibadan</p>
        <h2 style={{ color: '#fff', margin: 'var(--space-4) auto var(--space-5)', maxWidth: '20ch' }}>Read what the room proposed.</h2>
        <p style={{ color: 'rgba(255,255,255,0.8)', maxWidth: '54ch', margin: '0 auto var(--space-6)' }}>
          The 2026 Policy Challenge Compendium collects the strongest proposals from the cycle and goes to government officials, development partners and newsrooms as a formal record. Planning for the 2027 edition is already under way.
        </p>
        <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
          <Button variant="accent" size="lg" icon="download" iconPosition="end" onClick={window.downloadCompendium}>Download the compendium</Button>
          <Button variant="secondary" size="lg" style={{ color: '#fff', borderColor: 'rgba(255,255,255,0.5)', background: 'transparent' }} onClick={() => onNavigate('gallery')}>See the photographs</Button>
        </div>
      </div>
    </section>
  );
}

function Press() {
  const { Icon } = window.FPDIDesignSystem_ca687e;

  const numbers = [
    ['≈300', 'Delegates in the hall'],
    ['1,371', 'Expressions of interest'],
    ['322', 'Policy submissions'],
    ['33', 'States represented'],
    ['₦3.75m', 'Awarded on stage'],
  ];

  const items = [
    {
      outlet: 'Independent', domain: 'independent.ng', date: '13 Aug 2026',
      title: 'Nigeria’s most competitive youth policy platform crowns its 2026 champions at University of Ibadan',
      quote: '“approximately 300 delegates in attendance and viewers joining the live stream from across Nigeria and beyond.”',
      href: 'https://independent.ng/nigerias-most-competitive-youth-policy-platform-crowns-its-2026-champions-at-university-of-ibadan/',
    },
    {
      outlet: 'ThisDay', domain: 'thisdaylive.com', date: '13 Aug 2026',
      title: 'Youth Policy Challenge crowns 2026 winners at University of Ibadan',
      quote: '“Team SMETrust as the winner of its 2026 Policy Challenge, with the team receiving a N2 million grand prize.”',
      href: 'https://www.thisdaylive.com/2026/08/13/youth-policy-challenge-crowns-2026-winners-at-university-of-ibadan/',
    },
    {
      outlet: 'The Guardian', domain: 'guardian.ng', date: '14 Aug 2026',
      title: 'Team wins ₦2m in youth policy challenge',
      quote: 'The Guardian reports the awards, the runners-up and the internship pathways attached to each prize.',
      href: 'https://guardian.ng/news/team-wins-n2m-in-youth-policy-challenge/',
    },
    {
      outlet: 'Times Reporters', domain: 'timesreporters.com', date: '13 Aug 2026',
      title: 'Youth policy: Nigeria’s most competitive platform crowns 2026 champions at University of Ibadan',
      quote: 'Coverage of the finals, the judges’ panel and the decision to bring the conference to Ibadan.',
      href: 'https://timesreporters.com/youth-policy-nigerias-most-competitive-platform-crowns-2026-champions-at-university-of-ibadan/',
    },
  ];

  const mono = { fontFamily: 'var(--font-mono)', textTransform: 'uppercase', letterSpacing: '0.12em', fontSize: 11, fontWeight: 600 };

  const card = (m, i) => (
    <a key={m.outlet + i} href={m.href} target="_blank" rel="noopener noreferrer" className="press-card" style={{
      width: 320, flex: '0 0 320px', minHeight: 460, display: 'flex', flexDirection: 'column', gap: 16, color: 'inherit',
      background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.18)',
      borderRadius: 'var(--radius-lg)', padding: 'var(--space-6)',
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 12, paddingBottom: 14, borderBottom: '1px solid rgba(255,255,255,0.16)' }}>
        <span style={{ ...mono, color: 'var(--gold-500)' }}>{m.outlet}</span>
        <span style={{ ...mono, fontSize: 10, color: 'rgba(255,255,255,0.55)' }}>{m.date}</span>
      </div>
      <h4 style={{ margin: 0, color: '#fff', fontSize: 'var(--text-xl)', lineHeight: 1.3 }}>{m.title}</h4>
      <p style={{ margin: 0, fontSize: 14, lineHeight: 1.7, color: 'rgba(255,255,255,0.72)' }}>{m.quote}</p>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', gap: 12, marginTop: 'auto', paddingTop: 16, borderTop: '1px solid rgba(255,255,255,0.16)' }}>
        <span style={{ ...mono, fontSize: 10, color: 'rgba(255,255,255,0.78)', display: 'inline-flex', alignItems: 'center', gap: 6 }}>
          Read the report <Icon name="arrow-up-right" size={13} color="var(--gold-500)" />
        </span>
      </div>
    </a>
  );

  return (
    <section style={{ position: 'relative', overflow: 'hidden', background: 'var(--green-900)', padding: 'var(--space-9) 0' }}>
      <img data-no-reveal src={window.asset('assets/press-bg.png')} alt="" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 40%' }} />
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(6,46,16,0.94) 0%, rgba(6,46,16,0.86) 40%, rgba(6,46,16,0.96) 100%)' }} />
      <div style={{ position: 'relative' }}>
        <div className="section">
          <p className="eyebrow" style={{ color: 'var(--gold-500)' }}>PCY2026 in the news</p>
          <h2 style={{ color: '#fff', margin: 'var(--space-3) 0 var(--space-4)', maxWidth: '20ch' }}>The day, as it was reported.</h2>
          <p style={{ color: 'rgba(255,255,255,0.82)', margin: 0, maxWidth: '58ch' }}>
            National newsrooms covered the finals, the winners and the case for taking the policy conversation out of Abuja.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 'var(--space-5)', padding: 'var(--space-6) 0', borderTop: '1px solid rgba(255,255,255,0.18)', borderBottom: '1px solid rgba(255,255,255,0.18)', margin: 'var(--space-7) 0 var(--space-7)' }}>
            {numbers.map(([n, label]) => (
              <div key={label}>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-3xl)', fontWeight: 500, color: 'var(--gold-500)', lineHeight: 1.1 }}>{n}</div>
                <div style={{ ...mono, fontSize: 10, letterSpacing: '0.1em', color: 'rgba(255,255,255,0.6)', marginTop: 6 }}>{label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="press-marquee">
          <div className="press-track">
            {items.map(card)}
            {items.map((m, i) => card(m, 'dup' + i))}
            {items.map((m, i) => card(m, 'trip' + i))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Watch() {
  const { Icon } = window.FPDIDesignSystem_ca687e;
  const vid = 'XTEz-rvS8hs';
  const fallback = (e) => { if (!e.target.dataset.fb) { e.target.dataset.fb = 1; e.target.src = 'https://img.youtube.com/vi/' + vid + '/hqdefault.jpg'; } };
  return (
    <section className="section" style={{ padding: 'var(--space-9) var(--layout-margin) 0' }}>
      <p className="eyebrow">Watch</p>
      <h2 style={{ margin: 'var(--space-3) 0 var(--space-7)', maxWidth: '24ch' }}>The conference, on the news.</h2>
      <a href={'https://www.youtube.com/watch?v=' + vid} target="_blank" rel="noopener noreferrer"
        className="card-hover" style={{ display: 'block', background: 'var(--surface-card)', border: 'var(--border-card)', borderRadius: 'var(--radius-lg)', overflow: 'hidden', boxShadow: 'var(--shadow-card)', color: 'inherit' }}>
        <div style={{ position: 'relative', aspectRatio: '16 / 9', background: 'var(--green-900)' }}>
          <img src={'https://img.youtube.com/vi/' + vid + '/maxresdefault.jpg'} onError={fallback} alt="Broadcast report on the 2026 Policy Conference for Youth"
            style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
          <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div style={{ width: 84, height: 84, borderRadius: '50%', background: 'rgba(6,46,16,0.78)', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: 'var(--shadow-raised)' }}>
              <Icon name="play" size={34} color="#fff" />
            </div>
          </div>
        </div>
        <div style={{ padding: 'var(--space-6)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 20, flexWrap: 'wrap' }}>
          <div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10.5, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--text-gold-safe)', marginBottom: 8 }}>Broadcast report · Highlights</div>
            <h3 style={{ margin: 0, fontSize: 'var(--text-2xl)', maxWidth: '30ch' }}>Policy Conference for Youth 2026 — the news report</h3>
          </div>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-gold-safe)', whiteSpace: 'nowrap' }}>
            Watch on YouTube <Icon name="external-link" size={14} color="var(--text-gold-safe)" />
          </span>
        </div>
      </a>
    </section>
  );
}

function GalleryPreview({ onNavigate }) {
  const { Button } = window.FPDIDesignSystem_ca687e;
  const photos = window.PCY_GALLERY.slice(0, 15);
  const mono = { fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.12em', textTransform: 'uppercase' };
  return (
    <section style={{ background: 'var(--green-900)', marginTop: 'var(--space-9)' }}>
      <div className="section" style={{ padding: 'var(--space-9) var(--layout-margin)' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: 20, marginBottom: 'var(--space-7)' }}>
          <div>
            <p className="eyebrow" style={{ color: 'var(--gold-500)' }}>PCY·2026</p>
            <h2 style={{ color: '#fff', margin: 'var(--space-3) 0 var(--space-3)', maxWidth: '20ch' }}>Moments from the conference floor.</h2>
            <p style={{ ...mono, color: 'rgba(255,255,255,0.6)', margin: 0 }}>12 August 2026 · KAAF Auditorium, University of Ibadan</p>
          </div>
          <Button variant="accent" icon="arrow-right" iconPosition="end" onClick={() => onNavigate('gallery')}>See the full gallery</Button>
        </div>
        <div className="pcy-masonry">
          {photos.map((src, i) => (
            <figure key={src}>
              <img src={window.asset('gallery/' + src)} alt={'Policy Conference for Youth 2026 — moment ' + (i + 1)} loading="lazy" decoding="async" />
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

window.Home = Home;
