# Anuva Cleaning Corporation
- This site has been built for Anuva Cleaning Corporation by Maya Tomarchio. For any questions or comments feel free to contact me at 216-213-4834 or mayato223@gmail.com

## Caching
- Every page links the stylesheet and script with a date tag, for example `css/styles.css?v=2026-10-16`.
- When you change `css/styles.css` or `js/main.js`, bump that date on all pages. Without a new URL, browsers and the host's CDN keep serving the previous file, and a new page paired with an old stylesheet renders broken: icons and photos lose their sizing and blow up to full size.
