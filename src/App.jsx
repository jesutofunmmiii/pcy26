import { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Nav from './layout/Nav.jsx';
import Footer from './layout/Footer.jsx';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import DevComponents from './pages/DevComponents.jsx';

// Scrolls to the top of the page on every route change (matches the
// scroll-to-top-on-navigate behaviour from the design reference).
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, [pathname]);
  return null;
}

// Temporary placeholder until each page is ported in its own task.
function Placeholder({ title }) {
  return (
    <main
      style={{
        minHeight: '60vh',
        display: 'grid',
        placeItems: 'center',
        padding: 'var(--space-8)',
        textAlign: 'center',
      }}
    >
      <div>
        <p
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: 'var(--text-xs)',
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: 'var(--text-gold-safe)',
            marginBottom: 'var(--space-3)',
          }}
        >
          FPDI Policy Conference 2026
        </p>
        <h1
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'var(--text-4xl)',
            lineHeight: 'var(--leading-heading)',
            color: 'var(--text-heading)',
            margin: 0,
          }}
        >
          {title}
        </h1>
        <p style={{ color: 'var(--text-muted)', marginTop: 'var(--space-3)' }}>
          This page is coming soon.
        </p>
      </div>
    </main>
  );
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/program" element={<Placeholder title="Programme" />} />
        <Route path="/register" element={<Placeholder title="Register" />} />
        <Route path="/volunteer" element={<Placeholder title="Volunteer" />} />
        {/* TEMPORARY: design-system showcase, removed in the final QA task. */}
        <Route path="/dev/components" element={<DevComponents />} />
      </Routes>
      <Footer />
    </>
  );
}
