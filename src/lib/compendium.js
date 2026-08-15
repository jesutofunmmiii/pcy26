// The 2026 Policy Challenge Compendium — the single PDF offered from every
// "Download the compendium" CTA across the site (nav, hero, record card, About,
// Challenge, Gallery, footer). Kept in one place so wiring a different file or a
// tracked download endpoint later is a one-line change.
//
// Ports the reference's `window.downloadCompendium` global into repo idiom
// (no `window.*` globals, per the rebuild brief).
export const COMPENDIUM_URL = '/assets/policy-challenge-2026-compendium.pdf';

export function downloadCompendium() {
  const a = document.createElement('a');
  a.href = COMPENDIUM_URL;
  a.target = '_blank';
  a.rel = 'noopener noreferrer';
  document.body.appendChild(a);
  a.click();
  a.remove();
}
