# FPDI Policy Conference 2026 — Website

Production build of the **2026 Policy Conference for Youth** site for FPDI
(Future Pathways Development Initiative). Built with Vite + React 18 by porting
the finished design in [`/design-reference`](./design-reference) — see
[`CLAUDE.md`](./CLAUDE.md) for the full brief and porting rules.

## Tech stack

- **Vite** + **React 18** (JavaScript)
- **react-router-dom** for routing (`/`, `/about`, `/program`, `/register`, `/volunteer`)
- **lucide-react** for icons
- Plain CSS via the FPDI design system tokens in
  [`src/styles/fpdi-design-system.css`](./src/styles/fpdi-design-system.css) —
  no Tailwind, no CSS-in-JS
- **Self-hosted fonts** (Bricolage Grotesque, Figtree, IBM Plex Mono) served
  from `public/fonts/` via `@font-face` in
  [`src/styles/fpdi-fonts.css`](./src/styles/fpdi-fonts.css) — no external font
  calls, no Google Fonts network dependency

## Prerequisites

- [Node.js](https://nodejs.org/) 18+ and npm

## Getting started

```bash
# Install dependencies
npm install

# Start the dev server (http://localhost:5173)
npm run dev

# Create a production build in dist/
npm run build

# Preview the production build locally
npm run preview
```

## Project structure

```
public/
  assets/                   Brand SVGs
  gallery/                  Event photos
  fonts/                    Self-hosted woff2 webfonts
src/
  main.jsx                  App entry — loads fonts + design system CSS, router
  App.jsx                   Route shell, scroll effects, per-route meta, 404
  components/               Ported FPDI design system (core/forms/nav/overlays)
  layout/                   Nav (scroll-aware + mobile menu) and Footer
  pages/                    Home, About, Program, Register, Volunteer, NotFound
  data/                     ngUniversities.js (Register/Volunteer dropdown)
  styles/
    fpdi-fonts.css          @font-face for the self-hosted webfonts
    fpdi-design-system.css  Design tokens and base styles (loaded globally)
  lib/
    submit.js               Backend-less form submission stub
    scrollEffects.jsx       Scroll-progress bar + reveal-on-scroll
    pageMeta.js             Per-route document title + meta description
```

## Routes

| Route        | Page      |
|--------------|-----------|
| `/`          | Home      |
| `/about`     | About     |
| `/program`   | Programme |
| `/register`  | Register  |
| `/volunteer` | Volunteer |
| `*`          | 404       |

## Deployment

The site is a static SPA — any static host works. It ships with
[`vercel.json`](./vercel.json), whose catch-all rewrite (`/(.*)` → `/index.html`)
ensures deep links like `/about` and `/register` resolve on refresh instead of
404ing.

### Vercel (recommended)

1. Push this repo to GitHub.
2. In Vercel, **Add New → Project** and import the repo.
3. Vercel auto-detects Vite (build command `npm run build`, output `dist`) — no
   configuration needed. Click **Deploy**.
4. Every push to the default branch then auto-deploys.

Fonts are self-hosted (served from `/fonts/`), so the deployed site makes **no
external font requests** — nothing to configure for fonts.

### Any other static host

Run `npm run build` and serve the generated `dist/` folder. Configure a
SPA fallback so all paths serve `dist/index.html` (e.g. a `netlify.toml`
redirect `/* /index.html 200`, or the equivalent for your host).
