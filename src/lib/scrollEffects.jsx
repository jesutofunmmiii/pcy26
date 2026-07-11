import React from 'react';
import { useLocation } from 'react-router-dom';

const reduceMotion = () =>
  typeof window !== 'undefined' &&
  window.matchMedia &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// Thin scroll-progress bar fixed to the top of the viewport. Its width tracks
// how far the page is scrolled. Gated on prefers-reduced-motion — reduced-motion
// users get no bar at all.
export function ScrollProgress() {
  const [reduced] = React.useState(reduceMotion);
  React.useEffect(() => {
    if (reduced) return;
    const bar = document.getElementById('scroll-progress');
    if (!bar) return;
    const onScroll = () => {
      const doc = document.documentElement;
      const max = doc.scrollHeight - doc.clientHeight;
      bar.style.width = (max > 0 ? (doc.scrollTop / max) * 100 : 0) + '%';
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });
    onScroll();
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, [reduced]);

  if (reduced) return null;
  return <div id="scroll-progress" />;
}

// Adds `.in` to `.reveal` / `.reveal-stagger` elements as they enter the
// viewport, re-scanning on each route change. Gated on prefers-reduced-motion:
// under reduced motion the CSS never hides these elements, so we simply do
// nothing and everything stays visible. A short fallback also reveals anything
// still hidden, so content can never get stuck off-screen.
export function useScrollReveal() {
  const { pathname } = useLocation();
  React.useEffect(() => {
    if (reduceMotion()) return;
    let els = [];
    let io;
    let fallback;
    const raf = requestAnimationFrame(() => {
      els = Array.from(document.querySelectorAll('.reveal, .reveal-stagger'));
      if (els.length === 0) return;
      io = new IntersectionObserver(
        (entries, obs) => {
          entries.forEach((e) => {
            if (e.isIntersecting) {
              e.target.classList.add('in');
              obs.unobserve(e.target);
            }
          });
        },
        { rootMargin: '0px 0px -8% 0px', threshold: 0.05 }
      );
      els.forEach((el) => io.observe(el));
      // Safety net: never leave content hidden if the observer misses anything.
      fallback = window.setTimeout(() => {
        els.forEach((el) => el.classList.add('in'));
      }, 1400);
    });
    return () => {
      cancelAnimationFrame(raf);
      if (io) io.disconnect();
      if (fallback) clearTimeout(fallback);
    };
  }, [pathname]);
}
