# Upload these to the repo first

Drag these into your `pcy26` repo (GitHub → Add file → Upload files), letting
them **replace** the existing files at the same paths. Commit to `main`.

Files that overwrite existing ones:

- `design-reference/pages/About.jsx`
- `design-reference/pages/Register.jsx`
- `design-reference/pages/Volunteer.jsx`
- `design-reference/fpdi-design-system.css`

New files (no conflict):

- `design-reference/public/gallery/about-minister.jpg`
- `design-reference/data/ng-universities.js`
- `CHANGELOG.md`
- `TASKS-UPDATE.md`  (this update's task prompts)

**How GitHub handles the folder paths:** when you drag a file, GitHub's upload
box lets you type the path. Easiest method: drag each file, and if it lands at
the root, rename it in the path field to include its folder, e.g.
`design-reference/pages/About.jsx`. GitHub creates/updates the right file when
the path matches. Uploading a file to an existing path replaces it (recorded as
a normal commit — your old version stays in history).

After committing, your repo's `design-reference/` should still have the same
structure, now with a `data/` folder added and the `about-minister.jpg` photo
in `public/gallery/`.

Then continue with TASKS-UPDATE.md (Task 5 onward). Nothing you've already
merged (Tasks 1–3) is affected.
