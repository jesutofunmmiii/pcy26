function Footer({ onNavigate }) {
  const cols = [
    { head: 'Conference', links: [['Home', 'home'], ['About the conference', 'about'], ['Full programme', 'program'], ['Apply as a delegate', 'register']] },
    { head: 'Get involved', links: [['Volunteer with us', 'volunteer'], ['Apply as a delegate', 'register'], ['The Policy Challenge', 'program']] },
  ];
  return (
    <footer style={{ background: '#04220C', color: 'rgba(255,255,255,0.72)' }}>
      <div style={{
        maxWidth: 'none', margin: 0, padding: 'var(--space-8) clamp(24px, 6vw, 120px) var(--space-6)',
        display: 'grid', gridTemplateColumns: '1.6fr 1fr 1fr 1fr', gap: 'var(--space-7)',
      }}>
        <div>
          <img src={window.asset('assets/fpdi-logo-white.svg')} alt="Future Pathways Development Initiative" style={{ height: 96, width: 'auto', display: 'block', marginBottom: 'var(--space-4)' }} />
          <p style={{ fontSize: 14, maxWidth: '34ch', color: 'rgba(255,255,255,0.7)', margin: 0 }}>
            An independent, pan-African organization strengthening governance through citizen-centred policy and youth leadership.
          </p>
        </div>
        {cols.map((c) => (
          <div key={c.head}>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--gold-500)', marginBottom: 'var(--space-4)' }}>{c.head}</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {c.links.map(([label, id]) => (
                <span key={label} onClick={() => onNavigate(id)} style={{ fontSize: 14, cursor: 'pointer', color: 'rgba(255,255,255,0.78)' }}>{label}</span>
              ))}
            </div>
          </div>
        ))}
        <div>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--gold-500)', marginBottom: 'var(--space-4)' }}>Contact</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 'var(--space-6)' }}>
            <a href="mailto:conference@fpdi.org" style={{ fontSize: 14, color: 'rgba(255,255,255,0.78)' }}>conference@fpdi.org</a>
            <a href="mailto:delegates@fpdi.org" style={{ fontSize: 14, color: 'rgba(255,255,255,0.78)' }}>delegates@fpdi.org</a>
            <a href="tel:+2348000000000" style={{ fontSize: 14, color: 'rgba(255,255,255,0.78)' }}>+234 800 000 0000</a>
          </div>
          <div style={{ display: 'flex', gap: 10 }}>
            {['IG', 'YT', 'X'].map((s) => (
              <a key={s} href="#" aria-label={s} style={{
                width: 38, height: 38, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center',
                border: '1px solid rgba(255,255,255,0.2)', color: 'rgba(255,255,255,0.7)',
                fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.04em', textDecoration: 'none',
              }}>{s}</a>
            ))}
          </div>
        </div>
      </div>
      <div style={{ borderTop: '1px solid rgba(255,255,255,0.12)' }}>
        <div style={{
          maxWidth: 'none', margin: 0, padding: 'var(--space-4) clamp(24px, 6vw, 120px)',
          display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12,
          fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.04em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.5)',
        }}>
          <span>KAAF Auditorium, Department of Human Nutrition and Dietetics, University of Ibadan · 12 August 2026</span>
          <span>© 2026 FPDI · Paths that rise</span>
        </div>
      </div>
    </footer>
  );
}

window.Footer = Footer;
