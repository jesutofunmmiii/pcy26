# Revised build tasks — after the design update

You're merged through **Task 3 (Nav + Footer)**. Nothing you've built is
affected — Nav, Footer, Home, Program, and VenueMap are unchanged. These
revisions cover the updated pages and fold the new scroll effects into the
existing Task 9 QA pass (Option A).

**Before running any of these:** upload the changed reference files to the repo
(see UPLOAD-FIRST.md), so the tasks below build the new versions directly.

Tasks 4 (Home) and 6 (Program) are unchanged — use the prompts in your
original TASKS.md as-is. Task 5, 7, 8, and 9 are replaced below.

---

## Task 5 — About page  (revised: real photo)

> First pull the latest main. Then read CLAUDE.md and CHANGELOG.md. Port
> `/design-reference/pages/About.jsx` into `src/pages/About.jsx` verbatim,
> converting globals to imports per the porting rules. Note the About photo is
> now a real `<img>` using `gallery/about-minister.jpg` (already in `public/`) —
> keep its alt text and object-fit exactly. Don't touch any other page.

## Task 7 — Register page  (revised: university dropdown)

> First pull the latest main. Then read CLAUDE.md and CHANGELOG.md. Port
> `/design-reference/pages/Register.jsx` into `src/pages/Register.jsx` using the
> ported design-system form components. The institutional-affiliation field is
> now a Select backed by the Nigerian universities list: port
> `/design-reference/data/ng-universities.js` into `src/data/ngUniversities.js`
> as an ES module exporting `NG_UNIVERSITY_OPTIONS` (convert the `window.*`
> globals to a proper export), and import it into Register. Keep every other
> field, label, placeholder and validation rule identical. On valid submit call
> the `submitForm()` stub and show the success Toast. Don't touch any other page.

## Task 8 — Volunteer page  (revised: expanded 11-field form)

> First pull the latest main. Then read CLAUDE.md and CHANGELOG.md. Port
> `/design-reference/pages/Volunteer.jsx` into `src/pages/Volunteer.jsx`
> verbatim. This is the expanded application: 11 fields including a "why
> volunteer" textarea, portfolio/socials, medical/first-aid, onboarding
> availability, and the event-day commitment (10 AM–4 PM, Wed 12 August 2026).
> Port the two local helper components (`VolTextarea`, `VolRadioGroup`) as-is —
> they exist because the design system has no textarea/radio-group primitive.
> Keep all fields and validation identical; submit stub + success toast. Don't
> touch any other page.

## Task 9 — QA + polish + scroll effects  (revised: adds the scroll wiring)

> Read CLAUDE.md and CHANGELOG.md. Full QA + polish pass:
>
> 1. **Scroll effects wiring** (new CSS classes are already in the stylesheet
>    but inert — wire them up, all gated on `prefers-reduced-motion`):
>    - Scroll-progress bar: render a `#scroll-progress` element and set its
>      width from scroll position on scroll.
>    - Reveals: use an IntersectionObserver to add `.in` to `.reveal` and
>      `.reveal-stagger` elements as they enter the viewport; apply the classes
>      to the section wrappers and grid/gallery containers that should animate.
>    - Page transition: add `.page-enter` on route change.
>    Reduced-motion users must see everything immediately (no hidden state).
> 2. Compare every route against its design-reference source; fix any drift in
>    spacing, tokens, copy, or animation.
> 3. Mobile at 375px on all five routes; add the mobile nav treatment (the
>    reference Nav has none — add a minimal disclosure menu using existing
>    tokens).
> 4. Confirm the event date reads **Wednesday, 12 August 2026** anywhere a date
>    appears.
> 5. Per-route document titles + meta description; a 404 route styled with
>    existing tokens; remove the `/dev/components` route.
> 6. `npm run build` clean, no console warnings.

Task 10 (deploy) is unchanged — use your original TASKS.md prompt.
