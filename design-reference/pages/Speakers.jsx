function Speakers({ onNavigate }) {
  const { Button, Icon, Badge } = window.FPDIDesignSystem_ca687e;
  const [openBio, setOpenBio] = React.useState(null);
  const toggleBio = (name) => setOpenBio((cur) => (cur === name ? null : name));

  // Speaker 1 is confirmed; the rest are placeholders to be announced.
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

  const PLACEHOLDER_COUNT = 13;

  return (
    <div>
      {/* header */}
      <section style={{ position: 'relative', overflow: 'hidden', background: 'var(--green-900)' }}>
        <img src={window.asset('assets/rising-arc.svg')} alt="" style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', height: '58%', objectFit: 'cover', opacity: 0.4 }} />
        <div style={{ position: 'relative', padding: 'var(--space-9) clamp(24px, 6vw, 120px) var(--space-8)' }}>
          <p className="rise rise-1" style={{ display: 'inline-block', fontFamily: 'var(--font-mono)', fontSize: 12, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--gold-500)', border: '1px solid rgba(255,195,0,0.5)', borderRadius: 'var(--radius-pill)', padding: '8px 18px', fontWeight: 600 }}>Voices at PCY 2026</p>
          <h1 className="rise rise-2" style={{ color: '#fff', fontSize: 'var(--text-4xl)', fontWeight: 500, lineHeight: 'var(--leading-tight)', maxWidth: '16ch', margin: 'var(--space-4) 0 var(--space-5)' }}>
            Meet the <span style={{ color: 'var(--gold-500)' }}>speakers.</span>
          </h1>
          <p className="rise rise-3" style={{ color: 'rgba(255,255,255,0.82)', fontSize: 'var(--text-lg)', maxWidth: '60ch' }}>
            Policymakers, practitioners and changemakers who will lead the conversations at the Policy Conference for Youth 2026. More voices are being confirmed — check back as the line-up grows.
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

          {/* to-be-announced placeholders */}
          {Array.from({ length: PLACEHOLDER_COUNT }).map((_, i) => (
            <div key={'ph' + i} style={{
              display: 'grid', gridTemplateColumns: '132px 1fr auto', gap: 'var(--space-6)',
              alignItems: 'center', padding: 'var(--space-6) 0', borderBottom: '1px solid var(--border-default)',
              opacity: 0.55,
            }}>
              <div style={{ width: 132, height: 156, borderRadius: 'var(--radius-md)', background: 'var(--surface-sunken)', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px dashed var(--border-default)' }}>
                <Icon name="user-round" size={40} color="var(--border-strong)" />
              </div>
              <div>
                <h3 style={{ margin: '0 0 8px', color: 'var(--text-muted)', fontSize: 'var(--text-2xl)', fontWeight: 500 }}>To be announced</h3>
                <p style={{ margin: 0, fontFamily: 'var(--font-mono)', fontSize: 12, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--text-muted)' }}>Speaker {String(i + 2).padStart(2, '0')}</p>
              </div>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--text-muted)', border: '1px solid var(--border-default)', borderRadius: 'var(--radius-pill)', padding: '8px 18px' }}>Coming soon</span>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: 'var(--green-900)' }}>
        <div className="section" style={{ padding: 'var(--space-8) var(--layout-margin)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 24, flexWrap: 'wrap' }}>
          <div>
            <h3 style={{ color: '#fff', margin: '0 0 6px' }}>Want a seat in the room?</h3>
            <p style={{ color: 'rgba(255,255,255,0.8)', margin: 0 }}>Delegate applications are free and open now.</p>
          </div>
          <Button variant="accent" size="lg" icon="arrow-right" iconPosition="end" onClick={() => onNavigate('register')}>Apply now</Button>
        </div>
      </section>

    </div>
  );
}

window.Speakers = Speakers;
