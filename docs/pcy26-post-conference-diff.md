# PCY26 — post-conference rebuild: diff report (Task 0)

**Reference:** `pcy26-design-reference-v3/` (target state, "record of an event that
has happened").
**Repo working branch:** `claude/design-reference-folder-r2s3t3`. Nothing has been
changed yet — this is the walk-through only.

The good news up front: the repo is already 80 % of the way to the reference's
_shape_. Routing, the design-system components, the Fontsource setup, the scroll
motion (`#scroll-progress`, `.reveal-stagger`, `.page-enter`, `.rise`,
`.card-hover`, `.pcy-masonry`, `--space-9: 132px`, `.glow-cta`, the mobile nav) all
already exist in `src/styles/fpdi-design-system.css` and `src/lib/scrollEffects.jsx`.
What changes is almost entirely **copy (upcoming → past tense), two new pages, one
big batch of photos, and a handful of small wiring items.** No re-architecture.

---

## 1. Existing routes / pages — survives, changes, or retires

| Route (repo) | Component | Fate | Notes |
|---|---|---|---|
| `/` | `Home` | **Replace entirely** | Reference Home is a completely new page (hero photo slideshow, fact strip, "what happened", winners band, four-act recap, pull-quotes, press marquee, YouTube, gallery preview, closing CTA). Current Home (`VenueMap`, "Watch it live") is retired. |
| `/about` | `About` | **Changes (light)** | Body mostly intact; closing section flips to past tense ("was FPDI's working answer", "did exactly that in Ibadan on 12 August", "now published"); CTAs become **Download the compendium** / **How the day ran**. Reference also drops the current "Watch it live" / venue-map framing. |
| `/program` | `Program` | **Changes (rewrite copy, same structure)** | Same 4-act table + deep-dive cards the repo already renders, but rewritten to past tense ("One working day, in four acts", "as it ran"). Confirmed times/names/titles from `pages/Program.jsx`. **Two name conflicts — see §6.** |
| `/policy-challenge` | `PolicyChallenge` | **Changes + route rename → `/challenge`** | Reference nav/footer/links all point at `challenge`. Content resolves to the final result: winners named, **₦3.75m** (repo currently says "≈₦4 million"), 2026 compendium live + 2025 archive card disabled. **Route decision — see §5.** |
| `/speakers` | `Speakers` | **Changes** | "Who took the stage." Hon. Seyi Adisa keeps photo + 8-para bio + IG + expandable row. Everyone else becomes a 9-card "Also on the programme" line-up with initials-avatars. **Every "TBA/Coming soon" placeholder removed.** |
| `/delegate` | `Register` | **No reference counterpart — decision needed** | Live `/api/submit` form (currently a closed-registration/streaming notice). See §5. |
| `/volunteer` | `Volunteer` | **No reference counterpart — decision needed** | Live `/api/submit` volunteer form. See §5. |
| `/register` → `/delegate` | (redirect) | Tied to the `/delegate` decision | React-router `Navigate`. |
| `/virtual` → `/delegate` | (vercel redirect) | Tied to the `/delegate` decision | In `vercel.json`. |
| `*` | `NotFound` | **Keep** | Reference is silent; leave alone. |

---

## 2. New pages / sections with no counterpart in the repo

| New | Where | Source |
|---|---|---|
| **`/challenge`** — Policy Challenge results page | new route | `pages/PolicyChallenge.jsx` (this is the renamed target of `/policy-challenge`; treat the *page* as a rewrite, the *path* as new) |
| **`/gallery`** — photo gallery + Drive archive card | new route | `pages/GalleryPage.jsx` |
| Home **hero photo slideshow** (6 frames, 5 s, 1200 ms fade) | in Home | `pages/Home.jsx` |
| Home **"In the news"** — 5-up number row + infinite press marquee (4 outlets, tripled) | in Home | `pages/Home.jsx` `Press()` |
| Home **"Watch"** YouTube card (`XTEz-rvS8hs`, maxres→hqdefault fallback) | in Home | `pages/Home.jsx` `Watch()` |
| Home **winners band** / **gallery preview (first 15)** / **"what was said" pull-quotes** | in Home | `pages/Home.jsx` |
| Nav **"Gallery"** item + gold **"Compendium"** download button (replaces "Watch it live") | Nav | `components/Nav.jsx` |
| Footer **"The record"** column + past-tense bottom bar | Footer | `components/Footer.jsx` |

### New non-visual modules the reference assumes exist
These are globals in the reference (`window.*`) that must be adapted to repo idiom
(the brief forbids introducing the `window.*` pattern):

- **`window.PCY_GALLERY`** → a new data module (e.g. `src/data/galleryPhotos.js`)
  listing the 50 thumbnails `2026/t-01.jpg … 2026/t-50.jpg`. Home uses `.slice(0,15)`;
  Gallery uses all 50.
- **`window.downloadCompendium`** → a small helper that opens
  `/assets/policy-challenge-2026-compendium.pdf` (the repo already downloads this exact
  file from the Challenge page). Wanted from **8 CTAs**: nav, hero, record card, About,
  Challenge ×3, Gallery, footer.
- **`window.asset('x')`** → `/x` (already the repo convention; files live in `public/`).

---

## 3. Assets in `design-reference-v3/public/` not already in the repo

**Must copy (≈57 images, the ~10 MB payload):**

- `public/gallery/2026/t-01.jpg … t-50.jpg` — **50 grid thumbnails** (none in repo).
- `public/gallery/2026/w-01, w-02, w-03, w-04, w-05, w-07.jpg` — **6 hero frames**
  (none in repo; note there is no `w-06`, and the hero cycles them as
  `w-01, w-02, w-04, w-03, w-07, w-05`).
- `public/assets/press-bg.png` — **format mismatch:** the reference Home references
  `assets/press-bg.png`, but the repo only has `press-bg.webp`. Copy the `.png` (or
  repoint the reference to the existing `.webp`). Flag in §6.

**Already in the repo (identical paths, no action):** `assets/fpdi-emblem.svg`,
`fpdi-emblem-white.svg`, `fpdi-logo-white.svg`, `rising-arc.svg`,
`rising-arc-line.svg`, `speaker-seyi-adisa.webp`,
`assets/policy-challenge-2026-compendium.pdf`, and `gallery/g01…g13` +
`gallery/about-minister.jpg`.

**Referenced but intentionally absent (do NOT invent):**
`assets/policy-challenge-2025-compendium.pdf` — the 2025 archive card's button is
**disabled** ("Available shortly"). Leave it disabled.

---

## 4. In the repo but the reference has no opinion about — LEAVE ALONE

- `src/pages/VenueMap.jsx` — used only by the current Home; becomes unreferenced once
  Home is replaced (not deleted).
- `src/components/LogoIntro.jsx` + the intro-play logic in `App.jsx` — reference `App`
  has no intro; keep unless you tell me to drop it.
- `src/pages/Register.jsx`, `src/pages/Volunteer.jsx`, `src/data/ngUniversities.js`,
  `src/lib/submit.js` — registration/volunteer stack (see §5).
- `api/submit.js`, `api/emails.js` — **untouched either way**, per brief.
- `public/Delegate Mailer.pdf`, `public/email-header.png`,
  `public/assets/The Policy Challenge 2026 Compendium.pdf` (space-named duplicate),
  and the extra speaker webps (`speaker-adebayo-akande`, `-arinola-addo-daniel`,
  `-ayokunnu-ojeniyi`, `-damilola-adefulire`, `-daniel-otabor`, `-khalil-nur-khalil`) —
  the reference Speakers uses **initials-avatars** for everyone except Seyi, so these
  photos go unused. Leaving them costs nothing; not deleting them.
- `src/components/PressSection.{jsx,css}` — the repo's existing press marquee. The
  reference inlines its own `Press()` in Home; we can either reuse this component or
  port the reference's inline version. Flagging as an implementation choice for Task 2.

---

## 5. Decisions I need from you

### 5a. `/policy-challenge` → `/challenge` (route rename)
The reference names the route `challenge` everywhere (nav, footer, all inter-page
links). The repo currently serves it at `/policy-challenge`.
**Recommendation:** rename to `/challenge` and add a permanent redirect
`/policy-challenge → /challenge` (router + `vercel.json`) so existing links/press don't
404. Confirm and I'll do that in Task 1.

### 5b. The registration routes (`/delegate`, `/volunteer`, `/register`, `/virtual`)
The reference has **no counterpart** for any of them, but they're wired to the live
`/api/submit` backend (HubSpot, Google Sheets, Resend). Per the brief the handler and
its credentials stay untouched regardless. The three options:

| Option | What happens | Trade-offs |
|---|---|---|
| **A. Retire → redirect to `/`** | `/delegate`, `/volunteer`, `/register`, `/virtual` all 302 to home | Cleanest "the event is over" story; but any inbound press/social link to those paths lands on Home with no explanation, and the working `/api/submit` form is mothballed. |
| **B. Keep, replace body with a closed notice** *(recommended)* | Pages stay live but the forms become a short "Registration for PCY 2026 has closed — read the compendium / see the gallery" card with onward CTAs | Preserves the URLs and gives late visitors a real answer; keeps `/api/submit` intact but dormant; small amount of new copy (I'll keep it sentence-case and minimal, flagged as "not in brief"). |
| **C. Leave live and unlinked** | Forms keep working; just no nav/footer link | Zero work, but a live "apply as a delegate" form on a site that says the event already happened is contradictory and could collect real submissions for a closed event. |

**My recommendation: B** — it's the least surprising for anyone holding an old link and
doesn't throw away the backend. Tell me A/B/C.

### 5c. LogoIntro
Keep the emblem intro animation on Home, or drop it to match the reference's plain
`App` shell? (Recommendation: keep — it's on-brand and reduced-motion-gated.)

---

## 6. Reference vs. live production data — CONFLICTS (flagging, not resolving)

1. **"Dr" vs "Mr" Ayokunnu Ojeniyi.** A prior correction in this repo established
   **"Mr Ayokunnu Ojeniyi", not "Dr"** (see `src/pages/Speakers.jsx:25`,
   `src/pages/Program.jsx:37,57`). The reference has **reintroduced "Dr"** in:
   - `pages/Program.jsx:21` — Founder's session lead → `Dr Ayokunnu Ojeniyi`
   - `pages/Program.jsx:41` — Vision casting lead → `Dr Ayokunnu Ojeniyi`
   - `pages/Program.jsx:58` — deep-dive Founder's session lead → `Dr Ayokunnu Ojeniyi`
   - `pages/Speakers.jsx:33` — line-up card → `Dr Ayokunnu Ojeniyi`

   (The panel row `Program.jsx:20`, the deep-dive panel point `:57`, and the Home
   quote use the bare "Ayokunnu Ojeniyi", no title.)
   **Do NOT write "Dr" until you confirm.** Default, unless you say otherwise: keep the
   established **"Mr"** everywhere the reference says "Dr".

2. **Panel moderator name.** Repo says **"Chimchetaram Okoli"**
   (`src/pages/Program.jsx:36,73`); the reference says **"Gloria Babarinde"**
   (`pages/Program.jsx:20`, `pages/Speakers.jsx:34`, `pages/Program.jsx:57`
   deep-dive "Moderated by Gloria Babarinde"). These are two different people. Which is
   correct for the record?

3. **Prize total ₦4m → ₦3.75m.** Repo copy says "approximately ₦4 million"
   (`src/pages/PolicyChallenge.jsx`); the reference states **₦3.75 million**
   (2,000,000 + 1,000,000 + 750,000). I read this as the *intended* update (the actual
   awarded figure), not an error — but flagging since it changes a headline number.
   Confirm ₦3.75m is the number of record.

4. **`press-bg` asset format.** Reference references `assets/press-bg.png`; repo ships
   `assets/press-bg.webp`. Decide: copy the `.png` from the reference, or repoint the
   port to the existing `.webp`. (Recommendation: repoint to `.webp` — smaller, already
   there — unless the `.png` differs visually.)

5. **Venue string wording.** Footer bottom bar: repo = "KAAF Auditorium, Department of
   Human Nutrition and Dietetics, University of Ibadan"; reference = "KAAF Auditorium,
   University of Ibadan". Reference is the shorter authoritative form; not a factual
   conflict, just confirming we adopt the reference wording.

---

## 7. Pre-merge verification gates (carried forward, not done in Task 0)

The brief attaches hard checks to later tasks. Recording them here so none is missed:

- **Press URLs (Task 2):** verify all four resolve before merge — Independent, ThisDay,
  The Guardian, Times Reporters (`pages/Home.jsx` `Press()`). Flag any 404 instead of
  shipping a dead link.
- **Drive folder (Task 4):** confirm
  `https://drive.google.com/drive/u/0/folders/1UtZhvmWKdPOBtPP_2V4eG9mHDOYVCV_N` is
  publicly shared — the copy invites press/partners to download.
- **Compendium download (before PR):** confirm the PDF downloads from all 8 CTAs.
- **Social links (Task 8):** the reference footer icons are `href="#"` placeholders.
  **The real URLs are already in the repo** (`src/layout/Footer.jsx`):
  IG `https://www.instagram.com/fpdiafrica/`, YT `https://www.youtube.com/@fpdiafrica`,
  X `https://x.com/FPDIAfrica`. I'll reuse those unless you have newer ones.
- **The shadow fix (Task 9):** confirmed real and currently broken in the live repo.
  `src/styles/fpdi-design-system.css:87` sets `--shadow-color: 137, 24%, 27%` and
  lines 165–167 use `hsla(var(--shadow-color) / 0.08)`, which expands to the invalid
  `hsla(137, 24%, 27% / 0.08)` (comma list + slash alpha) — the whole declaration is
  dropped and cards render flat. Fix: re-declare `--shadow-card` / `--shadow-raised`
  with all-comma `hsla()` in a stylesheet that loads after the design system (the
  reference documents the exact fix in
  `styles/original-standalone-BROKEN-IMPORT.css:252`).
- **Responsive (before PR):** reference uses fixed `repeat(3,1fr)` / `repeat(4,1fr)`
  grids and a 132px `--space-9` with no mobile breakpoints. Add responsive fallbacks;
  test every route at 375 / 768 / 1440. (The repo already has some `@media` fallbacks —
  they'll need extending to the new grids.)
- **Metadata (Task 10):** `index.html` has only `<title>` + a JS-set description
  (`src/lib/pageMeta.js`); **no OG/Twitter tags and no OG image exist yet.** Task 10
  adds title `2026 Policy Conference for Youth — the record | FPDI`, past-tense
  description, OG/Twitter tags, and an OG image set to a conference photograph (pick one
  hero frame, e.g. `gallery/2026/w-01.jpg`).

---

## 8. Anything I'd change that isn't spelled out in the brief

- Adding a `/policy-challenge → /challenge` redirect (§5a).
- A tiny amount of new copy **only** if you pick registration option B (§5b) — a
  closed-registration notice. Sentence case, minimal, and I'll list it explicitly.
- A `PCY_GALLERY` data module and a `downloadCompendium` helper (§2) — pure ports of
  reference globals into repo idiom, no new user-facing copy.

**Stopping here per Task 0. Say "go" (with your calls on §5 and §6) and I'll start
Task 1.**
