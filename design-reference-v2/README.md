# PCY26 — Design Reference v2

Extracted from the Claude Design standalone export
`FPDI_Policy_Conference_2026__standalone___3_.html`.

This is the **target state**. It is reference material, not drop-in code:
the JSX here uses `window.FPDIDesignSystem_ca687e` and `window.asset()` because
that is how the Claude Design runtime works. Port it to the repo's existing
imports and conventions.

## Contents

| Path | What it is |
|---|---|
| `src/pages/Home.jsx` | Home — full-bleed hero slideshow (8 gallery images), fact row, four-acts, highlights, gallery, venue map, closing CTA |
| `src/pages/About.jsx` | About FPDI — vision/mission/goal, theory of change, minister photo |
| `src/pages/Program.jsx` | Programme — four acts, full run of show, deep dives |
| `src/pages/PolicyChallenge.jsx` | **NEW PAGE** — metrics, prizes, two compendia |
| `src/pages/Register.jsx` | Registration — now **virtual/streaming only**, Eventbrite CTA |
| `src/components/Nav.jsx` | Nav — 6 links + "Watch it live" accent button, overlay/scroll behaviour |
| `src/components/Footer.jsx` | Footer — 4 columns. **Contact details are placeholders.** |
| `src/components/VenueMap.jsx` | Illustrated SVG venue map (KAAF Auditorium, UI) |
| `src/data/universities.js` | 180 NUC-recognised institutions |
| `src/styles/fpdi-design-system.css` | Full token set + base resets + global stylesheet (@font-face stripped) |
| `src/components/fpdi-design-system.bundle.js` | The 15 DS primitives as exported |
| `public/assets/`, `public/gallery/` | All SVGs + 13 gallery photos + minister photo + Seyi Adisa portrait |

## Deliberately excluded

`Speakers.jsx` and `Volunteer.jsx` are **not** included. The live Speakers page and the
live Volunteer page (form, copy and backend wiring) stay exactly as they are.

## Known gaps in the export

- `assets/policy-challenge-2026-compendium.pdf` and `...-2025-...pdf` are referenced
  but not bundled; the download buttons ship `disabled`.
- Footer contact block is placeholder (`conference@fpdi.org`, `+234 800 000 0000`, `href="#"` socials).
- Programme lists **"Dr Ayokunnu Ojeniyi"** in two places — the live site was
  corrected to **"Mr Ayokunnu Ojeniyi"**.
