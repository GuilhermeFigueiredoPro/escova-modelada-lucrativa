# Static deployment

The home page has no backend, cookies, personal data, database or server functions. It is prerendered as HTML using the existing TanStack Start build integration. Interactive elements hydrate in the browser.

For Cloudflare Pages, publish only the static client output directory containing `index.html` and `assets/` (typically `dist/client`; use the path reported by the build). Do not deploy the server bundle as a Pages Function. No SPA fallback is needed for this single-page site; section links are anchors.

Before publishing, fill the explicit placeholders in `src/config/offer.ts` and supply licensed authentic photos there. Every checkout action uses `offer.checkoutUrl`. While missing, buttons open a non-payment notice instead of navigating to a fake URL.

The page title, search description and social descriptions are defined in the same configuration. There is no fabricated social photo; an absolute HTTPS hero photo enables both image tags. Supply a compressed share-suitable rendition before enabling it. The provisional favicon follows the typographic course identity.

Use the platform's normal build command; there is no second framework or server requirement for the prerendered page.