function Nav({ page, onNavigate, overlay }) {
  const { Button } = window.FPDIDesignSystem_ca687e;
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    if (!overlay) { setScrolled(false); return; }
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, [overlay]);

  const transparent = overlay && !scrolled;

  const links = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'program', label: 'Programme' },
    { id: 'speakers', label: 'Speakers' },
    { id: 'volunteer', label: 'Volunteer' },
  ];

  const linkColor = (l) => {
    if (transparent) return page === l.id ? 'var(--gold-500)' : 'rgba(255,255,255,0.88)';
    return page === l.id ? 'var(--green-700)' : 'var(--text-body)';
  };

  return (
    <header style={{
      position: overlay ? 'fixed' : 'sticky', top: 0, left: 0, right: 0, zIndex: 100,
      background: transparent ? 'transparent' : 'rgba(252,253,251,0.94)',
      backdropFilter: transparent ? 'none' : 'saturate(1.1)',
      borderBottom: transparent ? '1px solid transparent' : '1px solid var(--border-default)',
      transition: 'background 300ms var(--ease-out), border-color 300ms var(--ease-out)',
    }}>
      <div style={{
        maxWidth: 'none', margin: 0, padding: '0 clamp(24px, 6vw, 120px)',
        height: 76, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 24,
      }}>
        <div onClick={() => onNavigate('home')} style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
          <img src={window.asset(transparent ? 'assets/fpdi-emblem-white.svg' : 'assets/fpdi-emblem.svg')} alt="FPDI" style={{ height: 42, width: 'auto' }} />
        </div>
        <nav style={{ display: 'flex', gap: 30, alignItems: 'center' }}>
          {links.map((l) => (
            <span
              key={l.id}
              className="nav-link"
              onClick={() => onNavigate(l.id)}
              style={{
                fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: 15, cursor: 'pointer',
                color: linkColor(l),
              }}
            >
              {l.label}
            </span>
          ))}
          <Button variant="accent" size="sm" icon="arrow-right" iconPosition="end" onClick={() => onNavigate('register')}>Apply now</Button>
        </nav>
      </div>
    </header>
  );
}

window.Nav = Nav;
