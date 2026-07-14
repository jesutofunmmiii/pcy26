import { useEffect } from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Nav from './layout/Nav.jsx';
import Footer from './layout/Footer.jsx';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Program from './pages/Program.jsx';
import Speakers from './pages/Speakers.jsx';
import Register from './pages/Register.jsx';
import Volunteer from './pages/Volunteer.jsx';
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

export default function App() {
  const { pathname } = useLocation();
  usePageMeta();
  useScrollReveal();
  return (
    <>
      <ScrollToTop />
      <ScrollProgress />
      <Nav />
      {/* Keyed by route so the page-enter transition replays on navigation. */}
      <div key={pathname} className="page-enter">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/program" element={<Program />} />
          <Route path="/speakers" element={<Speakers />} />
          <Route path="/delegate" element={<Register />} />
          {/* Old path kept as a redirect so existing links/bookmarks still work. */}
          <Route path="/register" element={<Navigate to="/delegate" replace />} />
          <Route path="/volunteer" element={<Volunteer />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}
