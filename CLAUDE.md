# FPDI Policy Conference 2026 — Website

Production build of the **2026 Policy Conference for Youth** site for FPDI
(Future Pathways Development Initiative). The design is finished and lives in
`/design-reference` — your job is to faithfully port it to a production Vite +
React app, one task at a time. **Do not redesign anything.**

## Source of truth

- `/design-reference/pages/*.jsx` — the exact component source for every page.
  Port these as-is; only adapt the module system (see "Porting rules").
- `/design-reference/design-system/fpdi-components.bundle.js` — the FPDI design
  system (Badge, Button, Card, Icon, IconButton, Tag, Checkbox, Input, Radio,
  Select, Switch, Tabs, Dialog, Toast, Tooltip). Port each into
  `src/components/` as an importable module, preserving styles and props exactly.
- `/design-reference/fpdi-design-system.css` — all design tokens and base
  styles. Load it globally, unmodified, before anything else.
- `/design-reference/public/` — brand SVGs (`assets/`) and event photos
  (`gallery/`). Copy into the Vite `public/` folder with the same paths.

## Tech stack

- Vite + React 18 (JavaScript, not TypeScript)
- Plain CSS via the provided stylesheet — **no Tailwind, no CSS-in-JS libraries**
  (components use inline `style={{}}` objects + CSS custom properties; keep that)
- `lucide-react` for icons (reference code uses `window.lucide` / `<Icon>` from
  the design system — map icon names 1:1)
- React state routing is used in the reference (`page` state). Port to
  `react-router-dom` with routes: `/` (home), `/about`, `/program`, `/register`,
  `/volunteer`. Preserve the scroll-to-top-on-navigate behaviour.

## Porting rules

1. Reference components use globals: `window.FPDIDesignSystem_ca687e`,
   `window.asset('gallery/g01.webp')`, `window.Nav`, etc. Convert to ES module
   imports. `window.asset('x')` becomes `/x` (files are in `public/`).
2. Copy JSX structure, inline styles, copy text, animation classes (`rise`,
   `rise-1..4`, `card-hover`), and CSS variable usage **verbatim**. Sentence
   case everywhere. Never invent new copy.
3. Design-token discipline: colors only via `var(--...)` tokens. Gold is an
   accent (~10% of any view); never gold text on white — use
   `var(--text-gold-safe)`. White text on green. Buttons are pill-shaped, mono
   font, uppercase, letter-spacing 0.12em.
4. Fonts: Bricolage Grotesque (display), Figtree (body), IBM Plex Mono
   (eyebrows/labels/buttons) — loaded via Google Fonts `@import` already in the CSS.
5. Responsive: layouts use `clamp()` and CSS grid `auto-fit` patterns from the
   reference. Every page must work at 375px wide. Test mentally at 375 / 768 / 1200.
6. Respect `prefers-reduced-motion` (the `.rise` animation is already gated —
   keep it that way for anything you add).
7. Forms (Register, Volunteer): client-side validation as in the reference,
   success toast on submit via the design-system `Toast`. No backend yet — a
   `submitForm()` stub in `src/lib/submit.js` that logs and resolves, so wiring
   a real endpoint later is a one-file change.
8. Accessibility: keep semantic headings (one `h1` per page), `alt` text on
   images, `:focus-visible` gold focus ring (already in the CSS), labels tied
   to inputs.

## Site map

| Route        | Component | Notes                                              |
|--------------|-----------|----------------------------------------------------|
| `/`          | Home      | Hero slideshow (8 gallery photos, 5s cycle), facts strip, tracks, key moments, CTA |
| `/about`     | About     | FPDI story + conference framing                    |
| `/program`   | Program   | Full-day programme / agenda                        |
| `/register`  | Register  | Delegate application form (multi-field, validated) |
| `/volunteer` | Volunteer | Volunteer application form                         |
| shared       | Nav       | Transparent-over-hero on home, solid + sticky elsewhere; scroll-aware |
| shared       | Footer    | Site footer with navigation                        |
| in-page      | VenueMap  | Used inside Home — venue/map block                 |

## Definition of done (every task)

- `npm run build` passes with zero errors and zero console warnings.
- The rendered result is visually identical to the reference component.
- No design tokens hardcoded that exist as CSS variables.
- Works at 375px, 768px, and 1200px.
- Commit messages: `feat(scope): description` — one scope per PR.

## Out of scope (do not do unless asked)

- New sections, copy changes, color changes, layout "improvements"
- Backend/API integration, analytics, CMS
- TypeScript migration
