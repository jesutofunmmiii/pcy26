# Task 10 — Deploy config + self-hosted fonts (revised)

Run this instead of the original Task 10. It does the deploy prep AND swaps the
Google Fonts network dependency for the self-hosted files now in the repo.

**Before running:** upload the font kit to the repo (see FONT-UPLOAD.md) so the
woff2 files and `fpdi-fonts.css` are present for the task to wire in.

> First pull the latest main. Then read CLAUDE.md.
>
> **Self-host fonts (replace the Google Fonts network dependency):**
> 1. Copy `/design-reference/public/fonts/` (9 woff2 files) into the app's
>    `public/fonts/` so they deploy as static assets.
> 2. Copy `/design-reference/fpdi-fonts.css` into `src/styles/fpdi-fonts.css`
>    and import it so it loads BEFORE `fpdi-design-system.css`.
> 3. In `src/styles/fpdi-design-system.css`, remove the two Google Fonts
>    `@import url('https://fonts.googleapis.com/...')` lines at the top (the
>    self-hosted @font-face now provides those families). Leave the
>    `--font-display / --font-body / --font-mono` variables and everything else
>    untouched — the family names are identical, so no other change is needed.
> 4. Add `<link rel="preload" as="font" type="font/woff2" crossorigin>` tags in
>    index.html for the above-the-fold fonts: Bricolage Grotesque 600 and 700
>    (hero + headings) and Figtree 400 (body). Point them at the /fonts/ paths.
>
> **Deploy config:**
> 5. Verify the production build (`npm run build`).
> 6. Add `vercel.json` with an SPA catch-all rewrite (all routes →
>    `/index.html`) so deep links like /about and /register work on refresh.
> 7. Update the README with deploy steps (Vercel: import repo → it auto-detects
>    Vite → Deploy) and note the fonts are self-hosted (no external font calls).
>
> **Verify:** `npm run build` clean, no warnings; the built `dist/` contains the
> font files under `fonts/`; no remaining reference to fonts.googleapis.com
> anywhere in the source; all five routes still render with the correct
> typefaces. Confirm the preload tags resolve to real files.

## Why this matters
Self-hosted fonts load from your own server instead of Google's — faster first
paint (no third-party round-trip), no external dependency, and no "flash of
fallback font." Especially noticeable on mobile networks. The build sandbox has
no internet, which is why the fonts had to be fetched and committed rather than
downloaded during the task.
