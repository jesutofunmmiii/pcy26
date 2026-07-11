# Build tasks — run these one at a time on claude.ai/code

Copy-paste each prompt as a new task. Review the PR, merge, then start the
next one. Don't run two tasks that touch the same files in parallel.

---

## Task 1 — Scaffold

> Read CLAUDE.md fully. Scaffold the project: Vite + React 18 (JavaScript),
> react-router-dom, lucide-react. Copy `/design-reference/public/` into
> `public/` (same paths), and load `/design-reference/fpdi-design-system.css`
> globally as `src/styles/fpdi-design-system.css`. Create the route shell in
> `src/App.jsx` with placeholder pages for /, /about, /program, /register,
> /volunteer and scroll-to-top on route change. Add a README with run
> instructions. `npm run build` must pass.

## Task 2 — Design system components

> Read CLAUDE.md. Port the FPDI design system from
> `/design-reference/design-system/fpdi-components.bundle.js` into individual
> modules under `src/components/` (core/, forms/, navigation/, overlays/ — same
> grouping as the bundle's sourcePath manifest). Preserve every prop, style and
> variant exactly. Create `src/components/index.js` exporting all 15. Add a
> temporary `/dev/components` route that renders each component in all its
> variants so I can eyeball them, and remove it in the final task.

## Task 3 — Nav + Footer

> Read CLAUDE.md. Port `/design-reference/pages/Nav.jsx` and `Footer.jsx` into
> `src/layout/`. Nav: fixed and transparent over the home hero, turning solid
> after 80px scroll; sticky solid variant on all other routes; active link
> colors per the reference (gold on transparent, green-700 on solid). Wire both
> into the route shell so they render on every page. Convert onNavigate to
> router links.

## Task 4 — Home page

> Read CLAUDE.md. Port `/design-reference/pages/Home.jsx` (and `VenueMap.jsx`,
> which it uses) into `src/pages/Home.jsx` and `src/pages/VenueMap.jsx`. Keep
> the hero slideshow exactly: the 8 listed gallery photos, 5-second interval,
> 1200ms cross-fade, green gradient overlay, rise-in entrance animations.
> Port every section in order — hero, facts strip, tracks grid, key moments,
> venue map, CTA — verbatim. Don't touch any other page.

## Task 5 — About page

> Read CLAUDE.md. Port `/design-reference/pages/About.jsx` into
> `src/pages/About.jsx` verbatim, converting globals to imports per the porting
> rules. Don't touch any other page.

## Task 6 — Programme page

> Read CLAUDE.md. Port `/design-reference/pages/Program.jsx` into
> `src/pages/Program.jsx` verbatim. Preserve the agenda structure, timing
> layout, and any tabs/filters exactly as the reference implements them. Don't
> touch any other page.

## Task 7 — Register page

> Read CLAUDE.md. Port `/design-reference/pages/Register.jsx` into
> `src/pages/Register.jsx`. Use the ported design-system form components
> (Input, Select, Radio, Checkbox). Keep every field, label, placeholder and
> validation rule identical. On valid submit: call the `submitForm()` stub
> (create `src/lib/submit.js` if Task 1 didn't) and show the success Toast.
> Don't touch any other page.

## Task 8 — Volunteer page

> Read CLAUDE.md. Port `/design-reference/pages/Volunteer.jsx` into
> `src/pages/Volunteer.jsx`, same rules as the Register task: identical fields
> and validation, submit stub + success toast. Don't touch any other page.

## Task 9 — QA + polish pass

> Read CLAUDE.md. Full QA pass: (1) compare every route against its
> design-reference source and fix any drift in spacing, tokens, copy, or
> animation; (2) verify mobile at 375px on all five routes — nav must be usable
> on mobile (add the reference's mobile treatment, or a minimal disclosure menu
> using existing tokens if the reference has none); (3) add per-route document
> titles and meta description; (4) add a 404 route styled with existing tokens;
> (5) remove the /dev/components route; (6) `npm run build` clean, no console
> warnings.

## Task 10 — Deploy

> Read CLAUDE.md. Prepare for static deployment: verify the production build,
> add a `vercel.json` (or `netlify.toml`) with SPA rewrite rules so deep links
> to /about etc. work, and document the deploy steps in the README.

---

**After Task 10:** connect the repo to Vercel or Netlify (free tier), import
the project, and every merged PR auto-deploys. Test the live URL on your phone.
