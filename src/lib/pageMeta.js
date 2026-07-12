import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Per-route document title + meta description. Copy is drawn from each page's
// own reference text — nothing invented.
const META = {
  '/': {
    title: 'FPDI Policy Conference 2026 — Rebuilding trust in the Nigerian state',
    description:
      'The 2026 Policy Conference for Youth — a full-day working session on rebuilding trust in the Nigerian state. Wednesday, 12 August 2026, Trenchard Hall, University of Ibadan.',
  },
  '/about': {
    title: 'About FPDI — Policy Conference 2026',
    description:
      'Future Pathways Development Initiative is an independent, pan-African organization strengthening governance through citizen-centred policy and youth leadership.',
  },
  '/program': {
    title: 'Programme — FPDI Policy Conference 2026',
    description:
      'The full-day programme for the 2026 Policy Conference for Youth — a ministerial keynote, a panel, five breakout tracks, Open House talks and the Policy Challenge finals.',
  },
  '/register': {
    title: 'Apply as a delegate — FPDI Policy Conference 2026',
    description:
      'Apply for a delegate seat at the 2026 Policy Conference for Youth. Applications are free and selection is competitive.',
  },
  '/volunteer': {
    title: 'Volunteer — FPDI Policy Conference 2026',
    description:
      'Volunteer for the 2026 Policy Conference for Youth — join the execution team across eight roles on Wednesday, 12 August 2026.',
  },
};

const NOT_FOUND = {
  title: 'Page not found — FPDI Policy Conference 2026',
  description: 'The page you were looking for could not be found.',
};

function setMetaDescription(content) {
  let tag = document.querySelector('meta[name="description"]');
  if (!tag) {
    tag = document.createElement('meta');
    tag.setAttribute('name', 'description');
    document.head.appendChild(tag);
  }
  tag.setAttribute('content', content);
}

export function usePageMeta() {
  const { pathname } = useLocation();
  useEffect(() => {
    const meta = META[pathname] || NOT_FOUND;
    document.title = meta.title;
    setMetaDescription(meta.description);
  }, [pathname]);
}
