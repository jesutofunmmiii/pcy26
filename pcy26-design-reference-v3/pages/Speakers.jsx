function Speakers({ onNavigate }) {
  const { Button, Card, Icon, Badge } = window.FPDIDesignSystem_ca687e;
  const [openBio, setOpenBio] = React.useState(null);
  const toggleBio = (name) => setOpenBio((cur) => (cur === name ? null : name));

  // Hon. Seyi Adisa is the one speaker we hold a photograph and full profile for.
  // The rest of the line-up is recorded from the run of show; add headshots as they come in.
  const speakers = [
    {
      name: 'Hon. Seyi Adisa',
      role: 'Public administrator, lawyer & governance expert',
      org: 'Founder, African Governance Institute for Development (AGID)',
      photo: 'assets/speaker-seyi-adisa.webp',
      instagram: 'https://www.instagram.com/seyiadisa_/',
      instagramHandle: '@seyiadisa_',
      bio: [
        'Seyi Adisa is a prominent figure in public governance, leadership, and politics, dedicated to the development of people and communities. As a public administrator, accomplished lawyer, inspirational speaker, and John Maxwell Leadership coach, his name is synonymous with distinction in nation-building.',
        'His legal career began at the University of Birmingham, where he earned his law degree, followed by a distinguished completion of the Legal Practice Course at BPP Law School. He further augmented his expertise with a Master\u2019s degree in Public Administration from the University of Birmingham and honed his strategic acumen through Harvard\u2019s Continuing Education Program.',
        'In his pursuit of excellence, Seyi became an Associate and later a Fellow of the Institute of Chartered Secretaries and Administrators (ICSAN), underscoring his dedication to governance and administration.',
        'Seyi\u2019s political career is marked by significant contributions, including serving as the Honourable Member representing Afijio state constituency in the Oyo State House of Assembly (2019\u20132023), and as Principal Private Secretary to the Governor of Oyo State, Sen. Abiola Ajimobi (2011\u20132019), both before the age of 40. In 2025 he was nominated by the Governor of Oyo State as a member of the Governing Council of Abiola Ajimobi Technical University.',
        'Beyond his contributions in public office, Seyi Adisa is a co-founder and partner at Tunde & Adisa Legal Practitioners (T&A Legal) \u2014 a thriving commercial law firm with over 16 years of consistent practice and impact. Under his leadership, the firm has grown to house over 30 lawyers across three major Nigerian cities \u2014 Lagos, Ibadan, and Abuja. Seyi oversees the Public Policy and Government Advisory Department, where he leverages his extensive experience and networks in government to provide strategic counsel to both public and private sector clients.',
        'In 2023, he founded the African Governance Institute for Development (AGID) to train leaders and educate citizens on good governance. His philanthropic efforts through the Seyi Adisa Development Initiative (SADI) and 7Eleven Foundation focus on entrepreneurship, education, health, youth empowerment, and infrastructure.',
        'Seyi\u2019s impact has been globally recognized, with accolades such as being named among the Top 100 Most Influential People of African Descent (MIPAD) under 40 (Politics & Governance category) by the United Nations-affiliate in 2020, and being nominated as the Most Influential Young Person in Oyo State in the Governance category in 2022. In 2023, he was selected as one of only 22 leaders across Africa for the prestigious Archbishop Desmond Tutu Fellowship.',
        'Seyi Adisa embodies the principles of leadership, governance, and sustainable development \u2014 building bridges between law, policy, and people to create a more just and effective society. He is happily married to Tolu Adisa and blessed with a daughter, and is also a Minister at his local church, Global Harvest Church Agodi GRA.',
        'We are happy to welcome Hon. Seyi Adisa as a Speaker at the Policy Conference for Youth 2026.',
      ],
    },
  ];

  // Everyone else who held the floor on 12 August, in the order they appeared.
  const lineup = [
    { name: 'Arinola Daniel', role: 'Executive Director, FPDI', did: 'Welcome & conference opening · Fireside chat · SpotOn talk · Awards' },
    { name: 'Dr Ayokunnu Ojeniyi', role: 'Founder & Executive Director, FPDI', did: "Panellist · Founder's session · Vision casting" },
    { name: 'Gloria Babarinde', role: 'Panel moderator', did: 'Moderated “Real Talk: Rebuilding Trust in The Nigerian State”' },
    { name: 'Damilola O. Adefulire', role: 'Panellist', did: 'Real Talk: Rebuilding Trust in The Nigerian State' },
    { name: 'Abolaji Olaleye Joy', role: 'Panellist', did: 'Real Talk: Rebuilding Trust in The Nigerian State' },
    { name: 'Daniel Otabor', role: 'Panellist & SpotOn speaker', did: 'Real Talk panel · SpotOn 1' },
    { name: 'Khalil Nur Khalil', role: 'Fireside chat', did: '“The Smallest Unit of Trust: Character, Relationships, and the Rebuilding of the State”' },
    { name: 'Adebayo Akande', role: 'SpotOn speaker', did: 'SpotOn 3 — TEDx-style talk' },
    { name: 'Centre for Governance Development', role: 'Session partner', did: 'Ran the hour-long Model National Assembly session', org: true },
  ];
  const TITLES = ['dr', 'hon', 'mr', 'mrs', 'ms', 'prof', 'engr', 'barr'];
  const initials = (n) => {
    const words = n.replace(/\./g, '').split(/\s+/).filter((w) => /^[A-Za-z]/.test(w) && !TITLES.includes(w.toLowerCase()));
    const picked = words.length > 1 ? [words[0], words[words.length - 1]] : words.slice(0, 1);
    return picked.map((w) => w[0].toUpperCase()).join('');
  };

  return (
    <div>
      {/* header */}
      <section style={{ position: 'relative', overflow: 'hidden', background: 'var(--green-900)' }}>
        <img data-no-reveal src={window.asset('assets/rising-arc.svg')} alt="" style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', height: '58%', objectFit: 'cover', opacity: 0.4 }} />
        <div style={{ position: 'relative', padding: 'var(--space-9) clamp(24px, 6vw, 120px) var(--space-8)' }}>
          <p className="rise rise-1" style={{ display: 'inline-block', fontFamily: 'var(--font-mono)', fontSize: 12, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--gold-500)', border: '1px solid rgba(255,195,0,0.5)', borderRadius: 'var(--radius-pill)', padding: '8px 18px', fontWeight: 600 }}>Voices at PCY 2026</p>
          <h1 className="rise rise-2" style={{ color: '#fff', fontSize: 'var(--text-4xl)', fontWeight: 500, lineHeight: 'var(--leading-tight)', maxWidth: '16ch', margin: 'var(--space-4) 0 var(--space-5)' }}>
            Who took the <span style={{ color: 'var(--gold-500)' }}>stage.</span>
          </h1>
          <p className="rise rise-3" style={{ color: 'rgba(255,255,255,0.82)', fontSize: 'var(--text-lg)', maxWidth: '60ch' }}>
The policymakers, practitioners and changemakers who led the conversations at the Policy Conference for Youth 2026 on 12 August, at the KAAF Auditorium, University of Ibadan.
          </p>
        </div>
      </section>

      {/* speaker list */}
      <section className="section" style={{ padding: 'var(--space-9) var(--layout-margin)' }}>
        <div style={{ borderTop: '1px solid var(--border-default)' }}>
          {speakers.map((s) => {
            const isOpen = openBio === s.name;
            return (
            <div key={s.name} style={{ borderBottom: '1px solid var(--border-default)' }}>
              <div className="speaker-row" style={{
                display: 'grid', gridTemplateColumns: '132px 1fr auto', gap: 'var(--space-6)',
                alignItems: 'center', padding: 'var(--space-6) 0',
              }}>
                <div style={{ width: 132, height: 156, borderRadius: 'var(--radius-md)', overflow: 'hidden', background: 'var(--surface-green-tint)' }}>
                  <img src={window.asset(s.photo)} alt={s.name} style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top center' }} />
                </div>
                <div>
                  <h3 style={{ margin: '0 0 8px', color: 'var(--green-700)', fontSize: 'var(--text-2xl)' }}>{s.name}</h3>
                  <p style={{ margin: '0 0 4px', color: 'var(--text-heading)', fontWeight: 600, fontSize: 15 }}>{s.role}</p>
                  <p style={{ margin: '0 0 14px', color: 'var(--text-muted)', fontSize: 14 }}>{s.org}</p>
                  {s.instagram ? (
                    <a className="ig-link" href={s.instagram} target="_blank" rel="noopener noreferrer" style={{
                      display: 'inline-flex', alignItems: 'center', gap: 8, textDecoration: 'none',
                      padding: '7px 14px 7px 12px', borderRadius: 'var(--radius-pill)',
                      border: '1px solid var(--border-default)', background: 'var(--surface-card)',
                      color: 'var(--text-heading)', fontSize: 13, fontWeight: 600,
                      transition: 'border-color var(--duration-fast) var(--ease-out), background var(--duration-fast) var(--ease-out), transform var(--duration-fast) var(--ease-out)',
                    }}>
                      <Icon name="instagram" size={16} color="var(--green-700)" />
                      <span>{s.instagramHandle}</span>
                    </a>
                  ) : null}
                </div>
                <Button variant={isOpen ? 'primary' : 'secondary'} size="md" icon={isOpen ? 'chevron-up' : 'chevron-down'} iconPosition="end" onClick={() => toggleBio(s.name)}>Biography</Button>
              </div>

              {isOpen ? (
                <div className="bio-panel" style={{
                  background: 'var(--surface-green-tint)', border: '1px solid var(--border-default)',
                  borderRadius: 'var(--radius-lg)', padding: 'var(--space-6)',
                  margin: '0 0 var(--space-6)',
                }}>
                  <p style={{ margin: '0 0 var(--space-4)', fontFamily: 'var(--font-mono)', fontSize: 12, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--text-gold-safe)' }}>About {s.name}</p>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
                    {s.bio.map((para, i) => (
                      <p key={i} style={{ margin: 0, color: 'var(--text-body)', fontSize: 15, lineHeight: 1.75 }}>{para}</p>
                    ))}
                  </div>
                  {s.instagram ? (
                    <a href={s.instagram} target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, marginTop: 'var(--space-5)', color: 'var(--green-700)', fontWeight: 600, fontSize: 14, textDecoration: 'none' }}>
                      <Icon name="instagram" size={16} /> Follow on Instagram
                    </a>
                  ) : null}
                </div>
              ) : null}
            </div>
            );
          })}

        </div>

        <div style={{ marginTop: 'var(--space-8)' }}>
          <p className="eyebrow">Also on the programme</p>
          <h2 style={{ margin: 'var(--space-3) 0 var(--space-6)', maxWidth: '24ch' }}>The rest of the line-up.</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 'var(--space-5)' }}>
            {lineup.map((p) => (
              <Card key={p.name} className="card-hover" padding="var(--space-6)" style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                <div style={{
                  width: 52, height: 52, borderRadius: 'var(--radius-pill)', background: 'var(--surface-green-tint)',
                  border: '1px solid var(--border-default)', display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontFamily: 'var(--font-mono)', fontSize: 15, fontWeight: 600, color: 'var(--green-700)', letterSpacing: '0.04em',
                }}>{p.org ? <Icon name="landmark" size={24} color="var(--green-700)" /> : initials(p.name)}</div>
                <div>
                  <h4 style={{ margin: '0 0 4px', fontSize: 'var(--text-lg)', color: 'var(--green-700)' }}>{p.name}</h4>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10.5, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-muted)' }}>{p.role}</div>
                </div>
                <p style={{ margin: 0, fontSize: 14, color: 'var(--text-body)', lineHeight: 1.65 }}>{p.did}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: 'var(--green-900)' }}>
        <div className="section" style={{ padding: 'var(--space-8) var(--layout-margin)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 24, flexWrap: 'wrap' }}>
          <div>
            <h3 style={{ color: '#fff', margin: '0 0 6px' }}>Read what they argued for.</h3>
            <p style={{ color: 'rgba(255,255,255,0.8)', margin: 0 }}>The 2026 Policy Challenge Compendium is free to download.</p>
          </div>
          <Button variant="accent" size="lg" icon="download" iconPosition="end" onClick={window.downloadCompendium}>Download the compendium</Button>
        </div>
      </section>

    </div>
  );
}

window.Speakers = Speakers;
