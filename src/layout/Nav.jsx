import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Button } from '../components/index.js';

// Maps a route path to the reference's `page` id, used for active-link styling
// and to decide the transparent-over-hero overlay (home only).
const PATH_TO_ID = {
  '/': 'home',
  '/about': 'about',
  '/program': 'program',
  '/register': 'register',
  '/volunteer': 'volunteer',
};

export function Nav() {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const page = PATH_TO_ID[pathname] || '';
  const overlay = pathname === '/';
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    if (!overlay) {
      setScrolled(false);
      return;
    }
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, [overlay]);

  const transparent = overlay && !scrolled;

  const links = [
    { id: 'home', label: 'Home', to: '/' },
    { id: 'about', label: 'About', to: '/about' },
    { id: 'program', label: 'Programme', to: '/program' },
    { id: 'volunteer', label: 'Volunteer', to: '/volunteer' },
  ];

  const linkColor = (l) => {
    if (transparent) return page === l.id ? 'var(--gold-500)' : 'rgba(255,255,255,0.88)';
    return page === l.id ? 'var(--green-700)' : 'var(--text-body)';
  };

  return (
    <header
      style={{
        position: overlay ? 'fixed' : 'sticky',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        background: transparent ? 'transparent' : 'rgba(252,253,251,0.94)',
        backdropFilter: transparent ? 'none' : 'saturate(1.1)',
        borderBottom: transparent ? '1px solid transparent' : '1px solid var(--border-default)',
        transition: 'background 300ms var(--ease-out), border-color 300ms var(--ease-out)',
      }}
    >
      <div
        style={{
          maxWidth: 'none',
          margin: 0,
          padding: '0 clamp(24px, 6vw, 120px)',
          height: 76,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 24,
        }}
      >
        <Link
          to="/"
          aria-label="FPDI home"
          style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}
        >
          <img
            src={transparent ? '/assets/fpdi-emblem-white.svg' : '/assets/fpdi-emblem.svg'}
            alt="FPDI"
            style={{ height: 42, width: 'auto' }}
          />
        </Link>
        <nav style={{ display: 'flex', gap: 30, alignItems: 'center' }}>
          {links.map((l) => (
            <Link
              key={l.id}
              to={l.to}
              className="nav-link"
              style={{
                fontFamily: 'var(--font-body)',
                fontWeight: 600,
                fontSize: 15,
                cursor: 'pointer',
                color: linkColor(l),
              }}
            >
              {l.label}
            </Link>
          ))}
          <Button
            variant="accent"
            size="sm"
            icon="arrow-right"
            iconPosition="end"
            onClick={() => navigate('/register')}
          >
            Apply now
          </Button>
        </nav>
      </div>
    </header>
  );
}

export default Nav;
