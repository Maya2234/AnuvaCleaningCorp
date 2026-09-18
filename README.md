# Anuva Cleaning Corporation — website starter

Plain HTML/CSS/JS. No build step. Open the folder in VS Code and run **Live Server** (right-click `index.html` → *Open with Live Server*).

## Structure
- `*.html` — the 11 pages from the Master Brief sitemap. Header/footer are repeated in each file; edit all 11 when nav changes (or move to Eleventy/Astro later for shared partials).
- `css/styles.css` — design tokens live in `:root` (Brief §16). Change colors/fonts there first.
- `js/main.js` — mobile menu + footer year.
- `assets/img/` — `logo-mark.svg` (navy) and `logo-mark-light.svg` (white, for the navy header). Drop `hero.jpg` here and the home hero picks it up.
- `assets/docs/` — put the Capability Statement PDF here and update the `href="#"` links.

## Decisions to review
- **Tagline:** used the brief's "Clean Environments. Built to Perform." (the inspo image says "Cleaner Spaces. Stronger Communities.").
- **Badges:** text-only credential band. The inspo's WOSB / MBE / SAM / OSHA badges are NOT recreated — the brief says to use only official logos for credentials Anuva holds.
- **Testimonial** in the inspo was left out (unverified). Placeholder phone/email are marked `[VERIFY]`.
- Search the project for `VERIFY` to find every item the brief says to confirm before launch.
- Fonts: Montserrat (headings) + Open Sans (body), per the inspo slide, via Google Fonts.

## Next steps
Real photography (brief avoids AI/stock), service dropdowns, form handler, schema markup, sitemap/robots, analytics.
