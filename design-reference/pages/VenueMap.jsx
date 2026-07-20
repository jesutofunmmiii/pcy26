function VenueMap() {
  const { Button, Icon } = window.FPDIDesignSystem_ca687e;

  // ---- illustrated-map helpers ----
  const paper = '#EDF1E7';
  const lawn = '#DBE9D6';
  const lawnDeep = '#CBDFC6';
  const roadFill = '#FBFCFA';
  const roadCase = '#D3DCCE';
  const bldg = '#C6D3C1';
  const bldgEdge = '#A7BAA1';
  const bldgShadow = '#B4C4AE';

  const Tree = ({ x, y, r = 12 }) => (
    <g>
      <ellipse cx={x} cy={y + r * 0.9} rx={r * 0.75} ry={r * 0.28} fill="rgba(6,46,16,0.10)" />
      <circle cx={x} cy={y} r={r} fill="#5E9873" />
      <circle cx={x - r * 0.35} cy={y - r * 0.2} r={r * 0.62} fill="#6FAA83" />
      <circle cx={x + r * 0.3} cy={y + r * 0.1} r={r * 0.5} fill="#4E8763" />
    </g>
  );

  const Grove = ({ pts, r }) => pts.map((p, i) => <Tree key={i} x={p[0]} y={p[1]} r={r || p[2] || 12} />);

  // building with a little cast shadow + roof line
  const Bldg = ({ x, y, w, h, rx = 4 }) => (
    <g>
      <rect x={x + 4} y={y + 5} width={w} height={h} rx={rx} fill={bldgShadow} />
      <rect x={x} y={y} width={w} height={h} rx={rx} fill={bldg} stroke={bldgEdge} strokeWidth="1.5" />
    </g>
  );

  const Label = ({ x, y, children, anchor = 'middle', size = 18 }) => (
    <text x={x} y={y} textAnchor={anchor}
      style={{ fontFamily: 'var(--font-mono)', fontSize: size, fontWeight: 600, letterSpacing: '0.02em', textTransform: 'uppercase' }}
      fill="#0A3D16" stroke={paper} strokeWidth="5" paintOrder="stroke" strokeLinejoin="round">{children}</text>
  );

  const directions = [
    { icon: 'car', head: 'By car', body: 'Enter through the UI Main Gate on Oyo Road; KAAF Auditorium is 1.2 km in, just past Zik’s Roundabout.' },
    { icon: 'bus', head: 'Campus shuttle', body: 'Free delegate shuttles run from the Main Gate every 15 minutes on conference day.' },
    { icon: 'square-parking', head: 'Parking', body: 'Reserved delegate parking at the KAAF Auditorium forecourt and the adjacent lot.' },
  ];

  return (
    <section style={{ background: 'var(--surface-green-tint)', padding: 'var(--space-9) 0' }}>
      <style>{`
        @keyframes mapsecPulse { 0% { r: 12; opacity: .55; } 70% { r: 40; opacity: 0; } 100% { r: 40; opacity: 0; } }
        @keyframes mapsecDrop { 0% { transform: translateY(-14px); opacity: 0; } 60% { transform: translateY(2px); opacity: 1; } 100% { transform: translateY(0); opacity: 1; } }
        .mapsec-pin-ring { animation: mapsecPulse 2600ms var(--ease-out) infinite; }
        .mapsec-pin { transform-box: fill-box; transform-origin: center bottom; animation: mapsecDrop 700ms var(--ease-out) both; }
        @media (prefers-reduced-motion: reduce) { .mapsec-pin-ring { animation: none; } .mapsec-pin { animation: none; } }
        .mapsec-grid { display: grid; grid-template-columns: 355px 1fr; gap: var(--space-7); align-items: stretch; }
        @media (max-width: 900px) { .mapsec-grid { grid-template-columns: 1fr; } }
      `}</style>
      <div className="section">
        <div className="mapsec-grid">
          {/* ---- info column ---- */}
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <p className="eyebrow">Getting there</p>
            <h2 style={{ margin: 'var(--space-3) 0 var(--space-4)', maxWidth: '14ch' }}>Find us at KAAF Auditorium.</h2>
            <p style={{ color: 'var(--text-body)', margin: '0 0 var(--space-5)' }}>
              University of Ibadan, Oduduwa Road, Ibadan, Oyo State — the country’s oldest university, at the heart of the campus.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
              {directions.map((d) => (
                <div key={d.head} style={{ display: 'flex', gap: 14, alignItems: 'flex-start' }}>
                  <div style={{ flex: '0 0 auto', width: 40, height: 40, borderRadius: 'var(--radius-md)', background: '#fff', border: '1px solid var(--border-default)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Icon name={d.icon} size={19} color="var(--green-700)" />
                  </div>
                  <div>
                    <div style={{ fontWeight: 600, color: 'var(--text-heading)', fontSize: 15 }}>{d.head}</div>
                    <div style={{ color: 'var(--text-body)', fontSize: 14, lineHeight: 1.55, marginTop: 2 }}>{d.body}</div>
                  </div>
                </div>
              ))}
            </div>
            <div style={{ marginTop: 'var(--space-6)' }}>
              <a href="https://www.google.com/maps/search/?api=1&query=KAAF+Auditorium%2C+Department+of+Human+Nutrition+and+Dietetics%2C+University+of+Ibadan%2C+Ibadan%2C+Oyo+State" target="_blank" rel="noopener noreferrer">
                <Button variant="accent" icon="arrow-up-right" iconPosition="end" style={{ borderRadius: 'var(--radius-pill)' }}>Get directions</Button>
              </a>
            </div>
          </div>

          {/* ---- illustrated map ---- */}
          <div style={{ borderRadius: 'var(--radius-lg)', overflow: 'hidden', border: '1px solid var(--border-default)', boxShadow: 'var(--shadow-card)', background: paper }}>
            <svg viewBox="0 0 880 600" width="100%" style={{ display: 'block' }} role="img" aria-label="Illustrated map of University of Ibadan showing KAAF Auditorium">
              <rect x="0" y="0" width="880" height="600" fill={paper} />

              {/* faint plot lines */}
              <g stroke="#DDE4D6" strokeWidth="1">
                {[120, 240, 360, 480, 600, 720].map((x) => <line key={'v' + x} x1={x} y1="0" x2={x} y2="600" />)}
                {[120, 240, 360, 480].map((y) => <line key={'h' + y} x1="0" y1={y} x2="880" y2={y} />)}
              </g>

              {/* green areas */}
              <path d="M-10 40 Q 130 10 250 60 Q 300 130 210 190 Q 90 220 -10 180 Z" fill={lawn} />
              <path d="M600 -10 Q 780 30 900 10 L900 200 Q 760 180 640 150 Q 590 70 600 -10 Z" fill={lawn} />
              <path d="M560 380 Q 720 360 900 420 L900 610 L520 610 Q 500 470 560 380 Z" fill={lawnDeep} />
              {/* central quad around the venue */}
              <rect x="300" y="210" width="300" height="220" rx="30" fill={lawn} />

              {/* ---- roads (casing then fill) ---- */}
              <g fill="none" strokeLinecap="round">
                {/* main avenue */}
                <path d="M-20 470 C 200 430 300 400 440 330 S 760 200 900 160" stroke={roadCase} strokeWidth="30" />
                <path d="M-20 470 C 200 430 300 400 440 330 S 760 200 900 160" stroke={roadFill} strokeWidth="23" />
                {/* vertical parliament road */}
                <path d="M330 -20 C 350 160 300 300 340 630" stroke={roadCase} strokeWidth="26" />
                <path d="M330 -20 C 350 160 300 300 340 630" stroke={roadFill} strokeWidth="19" />
                {/* lower cross road */}
                <path d="M120 610 C 260 520 460 500 620 520 S 840 520 900 500" stroke={roadCase} strokeWidth="24" />
                <path d="M120 610 C 260 520 460 500 620 520 S 840 520 900 500" stroke={roadFill} strokeWidth="17" />
                {/* dashed centre lines */}
                <path d="M-20 470 C 200 430 300 400 440 330 S 760 200 900 160" stroke="#CBD4C4" strokeWidth="2" strokeDasharray="2 12" />
                <path d="M330 -20 C 350 160 300 300 340 630" stroke="#CBD4C4" strokeWidth="2" strokeDasharray="2 12" />
              </g>

              {/* roundabout (Zik's) */}
              <g>
                <circle cx="330" cy="248" r="30" fill={roadFill} stroke={roadCase} strokeWidth="6" />
                <circle cx="330" cy="248" r="12" fill={lawnDeep} />
                <Tree x={330} y={248} r={9} />
              </g>

              {/* buildings */}
              <Bldg x={120} y={300} w={92} h={62} />
              <Bldg x={150} y={90} w={64} h={104} />
              <Bldg x={690} y={250} w={96} h={66} />
              <Bldg x={640} y={70} w={70} h={58} />
              <Bldg x={110} y={470} w={80} h={50} />
              <Bldg x={700} y={430} w={74} h={54} />

              {/* tree groves */}
              <Grove pts={[[700,470,13],[735,455,12],[760,486,14],[724,500,11],[688,504,12]]} />
              <Grove pts={[[625,410,12],[660,398,11],[610,440,13]]} />
              <Grove pts={[[60,120,13],[95,150,12],[50,185,12]]} />
              <Grove pts={[[250,150,12],[280,120,11]]} />

              {/* ===== Venue: KAAF Auditorium ===== */}
              <g>
                <ellipse cx="440" cy="356" rx="86" ry="16" fill="rgba(6,46,16,0.12)" />
                {/* body */}
                <rect x="372" y="300" width="136" height="58" rx="4" fill="var(--gold-500)" stroke="#B38800" strokeWidth="2" />
                {/* portico pediment */}
                <path d="M366 300 L440 268 L514 300 Z" fill="#FFD64D" stroke="#B38800" strokeWidth="2" strokeLinejoin="round" />
                {/* columns */}
                <g fill="#F5F1E4" stroke="#C9A22E" strokeWidth="1">
                  {[388,410,432,454,476,498].map((cx) => <rect key={cx} x={cx} y="304" width="7" height="50" rx="1.5" />)}
                </g>
                <rect x="372" y="349" width="136" height="9" fill="#E6AF00" />
              </g>

              {/* pin above venue */}
              <g>
                <circle className="mapsec-pin-ring" cx="440" cy="230" r="12" fill="none" stroke="var(--gold-500)" strokeWidth="3" />
                <g className="mapsec-pin">
                  <path d="M440 196 C 421 196 407 210 407 228 C 407 250 440 276 440 276 C 440 276 473 250 473 228 C 473 210 459 196 440 196 Z"
                    fill="var(--gold-500)" stroke="#8A6A00" strokeWidth="2" />
                  <circle cx="440" cy="227" r="10" fill="#062E10" />
                </g>
              </g>

              {/* labels */}
              <Label x={440} y={398} size={23}>KAAF Auditorium</Label>
              <Label x={330} y={202} size={16}>Zik’s Roundabout</Label>
              <Label x={182} y={74} anchor="middle" size={16}>Kenneth Dike Library</Label>
              <Label x={745} y={520} size={16}>Botanical Garden</Label>
              <Label x={166} y={288} size={16}>Faculty of Arts</Label>
              <Label x={150} y={562} anchor="start" size={16}>UI Main Gate →</Label>

              {/* main gate marker */}
              <g transform="translate(120,540)">
                <rect x="-7" y="-14" width="6" height="20" fill={bldgEdge} />
                <rect x="9" y="-14" width="6" height="20" fill={bldgEdge} />
                <rect x="-9" y="-18" width="26" height="6" rx="2" fill="var(--green-700)" />
              </g>

              {/* compass */}
              <g transform="translate(818,70)">
                <circle r="22" fill="#fff" stroke={roadCase} strokeWidth="1.5" />
                <path d="M0 -15 L6 4 L0 -1 L-6 4 Z" fill="var(--green-700)" />
                <text x="0" y="-26" textAnchor="middle" style={{ fontFamily: 'var(--font-mono)', fontSize: 15, fontWeight: 700 }} fill="#0A3D16">N</text>
              </g>

              {/* scale bar */}
              <g transform="translate(40,566)">
                <rect x="0" y="0" width="70" height="5" fill="#0A3D16" />
                <rect x="0" y="0" width="35" height="5" fill={paper} stroke="#0A3D16" strokeWidth="1" />
                <text x="0" y="-7" style={{ fontFamily: 'var(--font-mono)', fontSize: 14, fontWeight: 600 }} fill="#0A3D16">0</text>
                <text x="70" y="-7" textAnchor="end" style={{ fontFamily: 'var(--font-mono)', fontSize: 14, fontWeight: 600 }} fill="#0A3D16">500 m</text>
              </g>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}

window.VenueMap = VenueMap;
