import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Per-route document title + meta description. Copy is drawn from each page's
// own reference text — nothing invented. Past tense throughout: the conference
// has happened and the site is now its record.
const META = {
  '/': {
    title: '2026 Policy Conference for Youth — the record | FPDI',
    description:
      'The record of the 2026 Policy Conference for Youth — a full working day on rebuilding trust in the Nigerian state, held Wednesday, 12 August 2026 at the KAAF Auditorium, University of Ibadan. About 300 delegates, three winning reforms and ₦3.75m awarded.',
  },
  '/about': {
    title: 'About FPDI — Policy Conference for Youth 2026',
    description:
      'Future Pathways Development Initiative is an independent, pan-African organization strengthening governance through citizen-centred policy and youth leadership. The 2026 Policy Conference for Youth was its working answer to Nigeria’s trust deficit.',
  },
  '/program': {
    title: 'Programme — Policy Conference for Youth 2026',
    description:
      'One working day in four acts, 9:00 AM – 3:40 PM on 12 August 2026 — a keynote and panel, a Founder’s session and fireside chat, an hour of Model National Assembly, the Policy Challenge finals and three SpotOn talks, exactly as it ran.',
  },
  '/challenge': {
    title: 'The Policy Challenge — Policy Conference for Youth 2026',
    description:
      'A landmark year, and a decided one: 1,371 expressions of interest, 322 submissions across 33 of 36 states and 67 tertiary institutions, and ₦3.75m awarded to three teams. Team SMETrust took the ₦2m grand prize. Read the 2026 compendium.',
  },
  '/speakers': {
    title: 'Speakers — Policy Conference for Youth 2026',
    description:
      'Who took the stage at the 2026 Policy Conference for Youth on 12 August in Ibadan — Hon. Seyi Adisa on the keynote, and the full line-up of policymakers, practitioners and changemakers who led the conversations.',
  },
  '/gallery': {
    title: 'Gallery — Policy Conference for Youth 2026',
    description:
      'The 2026 Policy Conference for Youth in photographs — registration, the keynote, the panel, the Model National Assembly floor and the awards, 12 August 2026 at the KAAF Auditorium, University of Ibadan.',
  },
};

const NOT_FOUND = {
  title: 'Page not found — Policy Conference for Youth 2026',
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
