import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Icon } from '../components/index.js';

// Maps the reference's `page` ids to router paths.
const PAGE_PATHS = {
  home: '/',
  about: '/about',
  program: '/program',
  speakers: '/speakers',
  register: '/delegate',
  volunteer: '/volunteer',
};

export default function Speakers() {
  const navigate = useNavigate();
  const onNavigate = (page) => navigate(PAGE_PATHS[page] || '/');

  const [openBio, setOpenBio] = React.useState(null);
  const toggleBio = (name) => setOpenBio((cur) => (cur === name ? null : name));

  // Speaker 1 is confirmed; the rest are placeholders to be announced.
  const speakers = [
    {
      name: 'Mr Ayokunnu Ojeniyi',
      role: 'Convener & Founder, Future Pathways Development Initiative (FPDI)',
      org: 'Managing Partner, Reverso Business Services · Founder, FPDI',
      photo: 'assets/speaker-ayokunnu-ojeniyi.webp',
      instagram: 'https://www.instagram.com/ayokunnuojeniyi/',
      instagramHandle: '@ayokunnuojeniyi',
      bio: [
        "Mr Ayokunnu Ojeniyi is a public policy expert, entrepreneur, and nation-builder with over a decade of experience driving systems-level reform across Nigeria's public and private sectors. He believes, unapologetically, that Nigeria can work, and has spent his career making that belief actionable.",
        "As Project Manager at the Presidential Enabling Business Environment Council (PEBEC) and Technical Adviser in the Office of the Vice President, he was instrumental in reforms that moved Nigeria up 39 places on the World Bank's Ease of Doing Business Index, one of the most significant jumps in the country's history. That work touched everything from business registration and land documentation to digital public services and MSME credit access.",
        'With a track record spanning multimillion-dollar reform programmes across North and West Africa, Ayokunnu is known for blending policy intelligence with on-the-ground execution. His expertise sits at the intersection of public policy, product management, and business climate reform, with a particular focus on making government work better for the people it serves.',
        'He is Managing Partner at Reverso Business Services, a boutique advisory firm focused on public sector reform and governance, and Founder of the Future Pathways Development Initiative (FPDI), a Pan-African for-impact organisation equipping young Nigerians to co-create better policies and lead public sector transformation.',
        'Ayokunnu continues to advise development agencies, state governments, and reform-focused institutions across the continent. His north star remains the same: building a functional Nigeria from the inside out.',
        'We are pleased to welcome Mr Ayokunnu Ojeniyi as a speaker at the Policy Conference for Youth 2026.',
      ],
    },
    {
      name: 'Hon. Seyi Adisa',
      role: 'Founder, African Governance Institute for Development (AGID)',
      photo: 'assets/speaker-seyi-adisa.webp',
      instagram: 'https://www.instagram.com/seyiadisa_/',
      instagramHandle: '@seyiadisa_',
      teaser: 'Lawyer, public administrator, and John Maxwell Leadership coach. Former Honourable Member for Afijio Constituency in the Oyo State House of Assembly and Principal Private Secretary to the late Governor Abiola Ajimobi — both before the age of 40.',
      bio: [
        'Seyi Adisa is a public administrator, lawyer, inspirational speaker, and John Maxwell Leadership coach whose work sits at the intersection of law, policy, and people.',
        "He read law at the University of Birmingham, completed the Legal Practice Course at BPP Law School, and holds a Master's degree in Public Administration, also from Birmingham. He is a Fellow of the Institute of Chartered Secretaries and Administrators (ICSAN).",
        'He served as Honourable Member representing Afijio Constituency in the Oyo State House of Assembly (2019–2023), and as Principal Private Secretary to the Governor of Oyo State, Sen. Abiola Ajimobi (2011–2019) — both before the age of 40. In 2025 he was nominated to the Governing Council of Abiola Ajimobi Technical University.',
        'He is Co-Founder and Partner at Tunde & Adisa Legal Practitioners, where he leads the Public Policy and Government Advisory practice, advising Ministries, Departments and Agencies on complex legal and policy matters. In 2023 he founded the African Governance Institute for Development (AGID) to train leaders and educate citizens on good governance.',
        "He was named among MIPAD's Top 100 Most Influential People of African Descent Under 40 in the Politics and Governance category, and in 2023 was selected as one of only 22 leaders across Africa for the Archbishop Desmond Tutu Fellowship.",
      ],
    },
    {
      name: 'Khalil Nur Khalil',
      role: 'Economic Adviser, Katsina State Government',
      photo: 'assets/speaker-khalil-nur-khalil.webp',
      instagram: 'https://www.instagram.com/khalilnk92/',
      instagramHandle: '@khalilnk92',
      teaser: "Economic Adviser to the Katsina State Government and former Executive Secretary of the Kaduna Investment Promotion Agency, where he became Nigeria's youngest parastatal chief executive at 28.",
      bio: [
        'Khalil Nur Khalil is the Economic Adviser to the Katsina State Government, appointed in October 2023, where he is working to build a globally competitive subnational economy for job creation and inclusive, sustainable growth.',
        'He graduated first class (High Honours) in Economics from the Eastern Mediterranean University, Famagusta, where he was the best graduating student in his department. He began his career at the Kaduna Investment Promotion Agency (KADIPA), rising from Technical Assistant to Manager, Investor Relations, and then Acting Head of Investor Relations — a period in which he helped facilitate more than $600 million in investment in the first quarter of 2020 alone, the largest non-oil FDI inflow in Nigeria at the time.',
        "In March 2021 he was appointed substantive Director of Investment Intelligence at KADIPA, making him the youngest director of a public institution in Nigeria's civil service at 28. Seven months later he became Executive Secretary of KADIPA and the youngest chief executive of a government parastatal in Nigeria. In that role he attracted over $1.8 billion into Kaduna State, supported the creation of more than 25,000 jobs, and drove the passage of the amended KADIPA law and the adoption of the National Startup Act — making Kaduna the first state government in Nigeria to do so.",
        'He is a recipient of The Future Awards Africa Prize for Professional Services (2022) and the Under 30 CEOs Award for Politics and Governance (2022), and was named by StateCraft Inc among the 100 most influential "Powers Behind the State" in 2023.',
      ],
    },
  ];

  const PLACEHOLDER_COUNT = 11;

  return (
    <div>
      {/* header */}
      <section style={{ position: 'relative', overflow: 'hidden', background: 'var(--green-900)' }}>
        <img src="/assets/rising-arc.svg" alt="" style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', height: '58%', objectFit: 'cover', opacity: 0.4 }} />
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
              <div className="speaker-row qa-speaker-row" style={{
                display: 'grid', gridTemplateColumns: '132px 1fr auto', gap: 'var(--space-6)',
                alignItems: 'center', padding: 'var(--space-6) 0',
              }}>
                <div style={{ width: 132, height: 156, borderRadius: 'var(--radius-md)', overflow: 'hidden', background: 'var(--surface-green-tint)' }}>
                  <img src={`/${s.photo}`} alt={s.name} style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top center' }} />
                </div>
                <div>
                  <h3 style={{ margin: '0 0 8px', color: 'var(--green-700)', fontSize: 'var(--text-2xl)' }}>{s.name}</h3>
                  <p style={{ margin: '0 0 14px', color: 'var(--text-heading)', fontWeight: 600, fontSize: 15 }}>{s.role}</p>
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
                  margin: '0 0 var(--space-6)', maxWidth: 760,
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
            <div key={'ph' + i} className="qa-speaker-row" style={{
              display: 'grid', gridTemplateColumns: '132px 1fr auto', gap: 'var(--space-6)',
              alignItems: 'center', padding: 'var(--space-6) 0', borderBottom: '1px solid var(--border-default)',
              opacity: 0.55,
            }}>
              <div style={{ width: 132, height: 156, borderRadius: 'var(--radius-md)', background: 'var(--surface-sunken)', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px dashed var(--border-default)' }}>
                <Icon name="user-round" size={40} color="var(--border-strong)" />
              </div>
              <div>
                <h3 style={{ margin: '0 0 8px', color: 'var(--text-muted)', fontSize: 'var(--text-2xl)', fontWeight: 500 }}>To be announced</h3>
                <p style={{ margin: 0, fontFamily: 'var(--font-mono)', fontSize: 12, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--text-muted)' }}>Speaker {String(i + 4).padStart(2, '0')}</p>
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
