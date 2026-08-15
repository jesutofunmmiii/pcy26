# PCY26 design reference v3 — post-conference rebuild

Extracted from the Claude Design standalone export
`PCY_2026_Conference_Site__standalone_.html` (15 Aug 2026).

This is the **target state**: the conference site rewritten as a record of an
event that has happened, replacing the pre-conference/registration site.

## Contents

    pages/            Home, About, Program, Speakers, PolicyChallenge, GalleryPage (JSX)
    components/       Nav, Footer, App shell, scroll-motion.js
    design-system/    FPDI design system bundle (Button, Card, Badge, Icon, Toast)
    styles/           tokens-and-site.css  ← use this one
                      original-standalone-BROKEN-IMPORT.css  ← reference only, see note
    public/           every asset, at the exact paths the JSX expects

## Asset paths

The JSX calls `window.asset('gallery/2026/t-01.jpg')` etc. In the Vite repo these
should resolve from `public/`, so `public/gallery/...` and `public/assets/...`
map 1:1. Nothing needs renaming.

    public/gallery/2026/t-01…t-50.jpg   50 grid thumbnails (~700px long edge)
    public/gallery/2026/w-01…w-07.jpg   7 hero frames (~1600px)
    public/gallery/g01…g11 + about-minister.jpg
    public/assets/                       FPDI marks, rising-arc SVGs, press-bg.png,
                                         speaker-seyi-adisa.webp,
                                         policy-challenge-2026-compendium.pdf

## Note on the CSS

`original-standalone-BROKEN-IMPORT.css` is the file as exported. Its `@import`
is corrupted — the fonts.css comment block got spliced into the middle of the
import statement, so a browser drops the Google Fonts import entirely. Do not
ship it. Use `tokens-and-site.css`, and keep the repo's existing self-hosted
Fontsource setup for Bricolage Grotesque / Figtree / IBM Plex Mono.
