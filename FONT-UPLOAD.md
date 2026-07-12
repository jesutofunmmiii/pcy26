# Upload the font kit to the repo first

Drag these into your `pcy26` repo (Add file → Upload files), keeping the paths.
Commit to `main`.

New files (no conflicts):
- `design-reference/public/fonts/` — 9 woff2 files (Bricolage 400/500/600/700,
  Figtree 400/500/600, IBM Plex Mono 500/600)
- `design-reference/fpdi-fonts.css` — the @font-face stylesheet
- `TASK-10-REVISED.md` — the revised deploy task

Then run TASK-10-REVISED.md. That task copies the fonts into the app's public/
folder, wires in the @font-face CSS, removes the Google @import, and adds
preload hints — so the live site has zero external font calls.

Fonts are the Latin subset, woff2 only, ~168 KB total for all nine — sourced
from Fontsource (the same open-source files Google Fonts serves; all three
families are under the SIL Open Font License).
