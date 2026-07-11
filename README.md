# FPDI Policy Conference 2026 — build kit

Everything Claude Code on the web needs to build the production site from the
finished Claude Design export.

## What's in here

- `CLAUDE.md` — the project brief Claude Code reads on every session (stack,
  porting rules, design-token discipline, definition of done).
- `TASKS.md` — 10 numbered prompts to copy-paste into claude.ai/code, one at a time.
- `design-reference/` — the extracted design source:
  - `pages/` — App, Nav, Footer, Home, About, Program, VenueMap, Register, Volunteer (exact JSX)
  - `design-system/fpdi-components.bundle.js` — the 15 FPDI components
  - `fpdi-design-system.css` — all tokens (colors, type, spacing, shape, motion)
  - `public/assets/` — brand SVGs · `public/gallery/` — 13 event photos

## How to use

1. Create a new GitHub repo (e.g. `fpdi-conference-2026`).
2. Upload the entire contents of this kit to the repo root (GitHub web UI:
   "Add file → Upload files", drag everything in, commit to main).
3. Go to claude.ai/code, connect GitHub, select the repo.
4. Run Task 1 from TASKS.md. Review the PR, merge, move to Task 2. Repeat.
5. After Task 10, connect the repo to Vercel/Netlify for auto-deploys.
