# Design update — changes from the original export

Second Claude Design export, diffed against the first. **Design tokens are
unchanged.** Nav, Footer, Home, Program, and VenueMap are byte-identical and
need no changes. Everything below is additive and lands only in pages not yet
built (About, Register, Volunteer) plus one CSS addition.

## 1. CSS — new scroll effects (additive; no existing rule changed)

`design-reference/fpdi-design-system.css` gained, all inside
`prefers-reduced-motion: no-preference`:

- **Scroll-progress bar** — `#scroll-progress`, a 3px green→gold bar fixed at
  the top of the viewport (z-index 3000), width driven by scroll position.
- **Scroll reveals** — `.reveal` / `.reveal.in` (fade + rise as elements enter
  the viewport) and `.reveal-stagger` (per-child stagger, for gallery figures
  and grid cards).
- **Page transition** — `.page-enter` keyframe (content fades up on route change).
- `html { scroll-behavior: smooth; }`.

These classes are **inert without JS** — something must toggle `.in` on reveal
elements when they enter the viewport, set `#scroll-progress` width on scroll,
and add `.page-enter` on route change. That wiring is new scope; it is handled
in the revised Task 9 (see TASKS-UPDATE.md). With no JS, everything is simply
visible (no broken state), so it is safe to ship the CSS ahead of the wiring.

## 2. About page — real photo replaces placeholder

`pages/About.jsx`: the empty `<image-slot id="about-photo">` is now a real
`<img>` using `gallery/about-minister.jpg` (Minister of Industry, Trade and
Investment greeting a delegate), `object-fit: cover`, full alt text.

**New asset:** `design-reference/public/gallery/about-minister.jpg`

## 3. Register page — university field is now a dropdown

`pages/Register.jsx`: the institutional-affiliation field changed from a
free-text `Input` to a `Select` backed by `window.NG_UNIVERSITY_OPTIONS` — 180
NUC-recognised Nigerian universities (federal, state, private), alphabetically
sorted, with "Other (not listed)" appended last.

**New data file:** `design-reference/data/ng-universities.js`. Note: the
reference attaches `window.NG_UNIVERSITIES` / `window.NG_UNIVERSITY_OPTIONS`.
When porting, convert to an ES module — e.g. `src/data/ngUniversities.js`
exporting `NG_UNIVERSITY_OPTIONS` — and import it into Register.

## 4. Volunteer page — expanded application (largest change)

`pages/Volunteer.jsx` went from 6 fields to 11 and is now a real volunteer
application. Removed: t-shirt size. Added: current location; "why do you want
to volunteer" (textarea); portfolio / past work / social handles; medical or
first-aid background; virtual-onboarding availability; explicit event-day
commitment (10:00 AM–4:00 PM, **Wednesday 12 August 2026**).

Two new local helpers are defined inside the file because the design system has
no textarea or radio-group primitive: `VolTextarea` (styled to match the DS
Input) and `VolRadioGroup` (built from the DS Radio). Port them as-is.

New state shape:
`{ name, email, phone, location, institution, team, why, portfolio, medical, onboarding, eventDay }`

## Note on the event date

The expanded Volunteer form pins the event date as **Wednesday, 12 August
2026**. The original export never stated it. If any already-built or
yet-to-build section shows a placeholder date, this is the source of truth —
worth a check during Task 9 QA.
