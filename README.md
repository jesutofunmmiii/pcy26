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
public/                     Brand SVGs (assets/) and event photos (gallery/)
src/
  main.jsx                  App entry — loads the design system CSS + router
  App.jsx                   Route shell + scroll-to-top on navigate
  styles/
    fpdi-design-system.css  Design tokens and base styles (loaded globally)
  lib/
    submit.js               Backend-less form submission stub
```

## Routes

| Route        | Page      |
|--------------|-----------|
| `/`          | Home      |
| `/about`     | About     |
| `/program`   | Programme |
| `/register`  | Register  |
| `/volunteer` | Volunteer |

> The pages currently render placeholders. Each is ported from
> `/design-reference` in its own task per [`TASKS.md`](./TASKS.md).
