import './PressSection.css'

const STATS = [
  { n: '1,371', l: 'Expressions of interest' },
  { n: '322', l: 'Policy submissions' },
  { n: '33', l: 'States represented' },
  { n: '67', l: 'Tertiary institutions' },
  { n: '5', l: 'Finalists' },
]

const COVERAGE = [
  {
    outlet: 'Vanguard',
    domain: 'vanguardngr.com',
    date: '6 Aug 2026',
    title: 'FPDI moves youth policy conference to Ibadan as entries hit 1,371',
    href: 'https://www.vanguardngr.com/2026/08/fpdi-moves-youth-policy-conference-to-ibadan-as-entries-hit-1371/',
  },
  {
    outlet: 'The Guardian',
    domain: 'guardian.ng',
    date: '6 Aug 2026',
    title: 'Entries for youth policy reform challenge hit 1,371',
    href: 'https://guardian.ng/news/entries-for-youth-policy-reform-challenge-hit-1371/',
  },
  {
    outlet: 'Leadership',
    domain: 'leadership.ng',
    date: '6 Aug 2026',
    title: 'Record 1,371 contestants enter FPDI 2026 Policy Challenge',
    href: 'https://leadership.ng/record-1371-contestants-enter-fpdi-2026-policy-challenge/',
  },
  {
    outlet: 'Peoples Daily',
    domain: 'peoplesdaily.ng',
    date: '6 Aug 2026',
    title: 'FPDI moves Youth Policy Conference 2026 to Ibadan as entries hits 1,371',
    href: 'https://peoplesdaily.ng/fpdi-moves-youth-policy-conference-2026-to-ibadan-as-entries-hits-1371/',
  },
  {
    outlet: 'InsideOut News',
    domain: 'insideoutnewsng.com',
    date: '6 Aug 2026',
    title: 'FPDI relocates 2026 Youth Policy Conference to Ibadan, reports strong nationwide participation',
    href: 'https://insideoutnewsng.com/2026/08/06/fpdi-relocates-2026-youth-policy-conference-to-ibadan-reports-strong-nationwide-participation/',
  },
  {
    outlet: 'The Voice',
    domain: 'thevoice.com.ng',
    date: '6 Aug 2026',
    title: 'FPDI moves Youth Policy Conference 2026 to Ibadan as entries hits 1,371',
    href: 'https://thevoice.com.ng/fpdi-moves-youth-policy-conference-2026-to-ibadan-as-entries-hits-1371/',
  },
  {
    outlet: 'Times Reporters',
    domain: 'timesreporters.com',
    date: '6 Aug 2026',
    title: 'FPDI moves Youth Policy Conference 2026 to Ibadan as entries hits 1,371',
    href: 'https://timesreporters.com/fpdi-moves-youth-policy-conference-2026-to-ibadan-as-entries-hits-1371/',
  },
]

function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M7 17 17 7" />
      <path d="M8 7h9v9" />
    </svg>
  )
}

function PressCard({ item, ariaHidden }) {
  return (
    <a
      className="press-card"
      href={item.href}
      target="_blank"
      rel="noopener noreferrer"
      aria-hidden={ariaHidden || undefined}
      tabIndex={ariaHidden ? -1 : undefined}
    >
      <div className="press-card__head">
        <span className="press-card__outlet">{item.outlet}</span>
        <span className="press-card__date">{item.date}</span>
      </div>
      <h3 className="press-card__title">{item.title}</h3>
      <div className="press-card__foot">
        <span className="press-card__cta">
          Read the report <ArrowIcon />
        </span>
        <img
          className="press-card__icon"
          src={`https://www.google.com/s2/favicons?sz=64&domain=${item.domain}`}
          alt=""
          loading="lazy"
          onError={(e) => {
            e.currentTarget.style.display = 'none'
          }}
        />
      </div>
    </a>
  )
}

export default function PressSection() {
  return (
    <section className="pcy-press" aria-labelledby="pcy-press-title">
      <img className="pcy-press__bg" src="/assets/press-bg.webp" alt="" aria-hidden="true" />
      <div className="pcy-press__wash" />

      <div className="pcy-press__inner">
        <div className="section">
          <p className="pcy-press__eyebrow">PCY2026 in the News</p>
          <h2 className="pcy-press__title" id="pcy-press-title">
            Why the conference moved to Ibadan.
          </h2>
          <p className="pcy-press__lede">
            A surge in Policy Challenge entries took the 2026 edition out of Abuja and into the
            University of Ibadan. National newsrooms covered the decision and the numbers behind it.
          </p>

          <div className="pcy-press__stats">
            {STATS.map((s) => (
              <div key={s.l}>
                <div className="pcy-press__stat-n">{s.n}</div>
                <div className="pcy-press__stat-l">{s.l}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="press-marquee">
          <div className="press-track">
            {COVERAGE.map((item) => (
              <PressCard key={item.domain} item={item} />
            ))}
            {COVERAGE.map((item) => (
              <PressCard key={`${item.domain}-dup`} item={item} ariaHidden />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
