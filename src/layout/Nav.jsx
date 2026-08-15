import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button, Icon } from '../components/index.js';
import { downloadCompendium } from '../lib/compendium.js';

// Maps a route path to the reference's `page` id, used for active-link styling
// and to decide the transparent-over-hero overlay (home only).
const PATH_TO_ID = {
  '/': 'home',
  '/about': 'about',
  '/program': 'program',
  '/challenge': 'challenge',
  '/speakers': 'speakers',
  '/gallery': 'gallery',
};

export function Nav() {
  const { pathname } = useLocation();
  const page = PATH_TO_ID[pathname] || '';
  const overlay = pathname === '/';
  const [scrolled, setScrolled] = React.useState(false);
  const [menuOpen, setMenuOpen] = React.useState(false);

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

  // Close the mobile menu whenever the route changes.
  React.useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  const transparent = overlay && !scrolled;

  const links = [
    { id: 'home', label: 'Home', to: '/' },
    { id: 'about', label: 'About', to: '/about' },
    { id: 'program', label: 'Programme', to: '/program' },
    { id: 'challenge', label: 'Policy Challenge', to: '/challenge' },
    { id: 'speakers', label: 'Speakers', to: '/speakers' },
    { id: 'gallery', label: 'Gallery', to: '/gallery' },
  ];

  // Desktop link colour: gold/white over the transparent hero, green/body on solid.
  const linkColor = (l) => {
    if (transparent) return page === l.id ? 'var(--gold-500)' : 'rgba(255,255,255,0.88)';
    return page === l.id ? 'var(--green-700)' : 'var(--text-body)';
  };
  // The mobile panel always sits on a light surface, so links use solid colours.
  const panelLinkColor = (l) => (page === l.id ? 'var(--green-700)' : 'var(--text-body)');

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

        {/* Desktop links */}
        <nav className="nav-desktop-links" style={{ display: 'flex', gap: 30, alignItems: 'center' }}>
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
            icon="download"
            iconPosition="end"
            onClick={downloadCompendium}
          >
            Download TPC 26 Compendium
          </Button>
        </nav>

        {/* Mobile hamburger toggle */}
        <button
          type="button"
          className="nav-mobile-toggle"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((o) => !o)}
          style={{
            width: 44,
            height: 44,
            alignItems: 'center',
            justifyContent: 'center',
            background: 'transparent',
            border: 'none',
            cursor: 'pointer',
            color: transparent ? '#fff' : 'var(--text-heading)',
          }}
        >
          <Icon name={menuOpen ? 'x' : 'menu'} size={24} />
        </button>
      </div>

      {/* Mobile disclosure panel */}
      <div className={`nav-mobile-panel${menuOpen ? ' open' : ''}`}>
        {links.map((l) => (
          <Link
            key={l.id}
            to={l.to}
            onClick={() => setMenuOpen(false)}
            style={{
              fontFamily: 'var(--font-body)',
              fontWeight: 600,
              fontSize: 16,
              padding: '10px 0',
              color: panelLinkColor(l),
            }}
          >
            {l.label}
          </Link>
        ))}
        <Button
          variant="accent"
          size="sm"
          icon="download"
          iconPosition="end"
          onClick={() => {
            setMenuOpen(false);
            downloadCompendium();
          }}
          style={{ alignSelf: 'flex-start', marginTop: 'var(--space-2)' }}
        >
          Download TPC 26 Compendium
        </Button>
      </div>
    </header>
  );
}

export default Nav;
