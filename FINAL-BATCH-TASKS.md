# Final batch — four changes

Run these in Claude Code. Upload the kit files first (see UPLOAD.md), then run
the tasks. Each opens a PR; merge and Vercel auto-deploys.

---

## Task 1 — Add the Speakers page

> First pull the latest main. Then read CLAUDE.md. Add a new Speakers page:
>
> 1. Port `/design-reference/pages/Speakers.jsx` into `src/pages/Speakers.jsx`
>    verbatim, converting globals to imports per the porting rules. It has one
>    confirmed speaker (Hon. Seyi Adisa — full bio, photo at
>    `assets/speaker-seyi-adisa.webp`, already in public/) and 13 "to be
>    announced" placeholder rows, with an expandable bio row pattern. Keep the
>    rising-arc header, the expand/collapse bio behaviour, and all styling exactly.
> 2. Add the route `/speakers` in `src/App.jsx`, matching how the other pages
>    are wired (include the scroll-to-top and page-enter behaviour).
> 3. Update the nav: `/design-reference/pages/Nav.jsx` in this kit is the updated
>    version that includes a "Speakers" link. Add the Speakers link to
>    `src/layout/Nav.jsx` in the same position, matching the existing nav-link
>    styling and active-state behaviour. Add it to the mobile nav menu too.
> 4. The Speakers page has the same responsive concern as other pages — ensure
>    the speaker rows and any grids collapse cleanly at 375px (no horizontal
>    overflow), consistent with the responsive treatment already in the site.
>
> Don't change other pages. `npm run build` must pass.

## Task 2 — Prefill phone fields with +234

> First pull the latest main. Then read CLAUDE.md. In both `src/pages/Register.jsx`
> and `src/pages/Volunteer.jsx`, prefill the phone field with the Nigerian
> country code so it starts as "+234 " in the form's initial state (the phone
> key in the useState initial object). Keep the placeholder and validation as
> they are; the user types their number after the prefilled code. Make sure the
> submitted value still works (a phone of just "+234 " with nothing after should
> still fail the existing required/validation check, so empty submissions are
> caught). Don't change any other field. `npm run build` must pass.

## Task 3 — Move the success message into view

> First pull the latest main. Then read CLAUDE.md. The success toast currently
> appears fixed at the bottom-right (`#toast-host { bottom: 24px; right: 24px }`
> in the stylesheet), which is below the fold after submitting — users don't see
> it. Change the toast host position so it appears at the TOP of the viewport,
> centred or top-right, and clearly in view regardless of scroll position — e.g.
> `top: 88px` (below the fixed nav) with appropriate horizontal placement, still
> `position: fixed` and above other content. Ensure it doesn't overlap the nav.
> Keep the toast's own styling and auto-dismiss behaviour. Test that after
> submitting Register and Volunteer, the success message is immediately visible
> without scrolling. `npm run build` must pass.

## Task 4 — Fix footer contact details

> First pull the latest main. Then read CLAUDE.md. In `src/layout/Footer.jsx`,
> update the CONTACT section. Replace the two placeholder emails
> (conference@fpdi.org, delegates@fpdi.org) with a single real email
> `info@futurepathways.ng`, and replace the placeholder phone
> "+234 800 000 0000" with "+234 813 397 7784". Make the email a
> `mailto:info@futurepathways.ng` link and the phone a `tel:+2348133977784` link
> (no spaces in the tel: href; display text keeps the spaces). Keep the existing
> footer layout, icons, and styling — only change the contact values. Don't touch
> any other file. `npm run build` must pass.

---

## After merging all four
Vercel auto-deploys. Then verify on the live site:
- `/speakers` loads, shows Hon. Seyi Adisa with an expandable bio, placeholders
  below, and appears in the nav (desktop + mobile).
- Register and Volunteer phone fields start with "+234 ".
- Submitting a form shows the success message at the top, in view.
- Footer shows info@futurepathways.ng (opens mail) and +234 813 397 7784 (dials).
