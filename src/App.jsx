import { useEffect, useState } from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Nav from './layout/Nav.jsx';
import LogoIntro from './components/LogoIntro.jsx';
import Footer from './layout/Footer.jsx';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Program from './pages/Program.jsx';
import PolicyChallenge from './pages/PolicyChallenge.jsx';
import Speakers from './pages/Speakers.jsx';
import GalleryPage from './pages/GalleryPage.jsx';
import NotFound from './pages/NotFound.jsx';
import { ScrollProgress, useScrollReveal } from './lib/scrollEffects.jsx';
import { usePageMeta } from './lib/pageMeta.js';

// Scrolls to the top of the page on every route change (matches the
// scroll-to-top-on-navigate behaviour from the design reference).
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, [pathname]);
  return null;
}

// Decide once, at load, whether the logo intro should play: only when it
// hasn't been seen this browser session and reduced motion isn't requested.
// Computed in the parent so <LogoIntro /> never mounts when it should be skipped.
function shouldPlayIntro() {
  if (typeof window === 'undefined') return false;
  try {
    if (sessionStorage.getItem('fpdi_intro_seen')) return false;
  } catch {
    return false;
  }
  return !window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

export default function App() {
  const { pathname } = useLocation();
  const [playIntro, setPlayIntro] = useState(shouldPlayIntro);
  usePageMeta();
  useScrollReveal();
  return (
    <>
      {pathname === '/' && playIntro && (
        <LogoIntro onDone={() => setPlayIntro(false)} />
      )}
      <ScrollToTop />
      <ScrollProgress />
      <Nav />
      {/* Keyed by route so the page-enter transition replays on navigation. */}
      <div key={pathname} className="page-enter">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/program" element={<Program />} />
          <Route path="/challenge" element={<PolicyChallenge />} />
          <Route path="/speakers" element={<Speakers />} />
          <Route path="/gallery" element={<GalleryPage />} />
          {/* Old challenge path kept as a redirect so existing links/bookmarks still work. */}
          <Route path="/policy-challenge" element={<Navigate to="/challenge" replace />} />
          {/* Registration for the 2026 conference is closed and the event has passed;
              the delegate/volunteer/virtual routes now redirect home. The /api/submit
              backend is left untouched. */}
          <Route path="/delegate" element={<Navigate to="/" replace />} />
          <Route path="/volunteer" element={<Navigate to="/" replace />} />
          <Route path="/register" element={<Navigate to="/" replace />} />
          <Route path="/virtual" element={<Navigate to="/" replace />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}
