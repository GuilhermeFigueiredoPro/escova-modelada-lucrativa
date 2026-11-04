# Cloudflare Pages deployment

The home page has no database or server functions. Static prerendering is disabled; the existing TanStack Start server entry renders the page through Nitro's Cloudflare Pages Worker. Interactive elements hydrate in the browser.

For external Cloudflare Pages builds, Nitro uses the explicit `cloudflare-pages` preset and outputs public assets and the `_worker.js` Worker directory under `dist`. Publish the entire `dist` directory, not just `dist/client`. No SPA fallback is needed for this single-page site; section links are anchors.

The ten authentic course photos are repository files under `public/assets` and use stable `/assets/*.webp` paths in the offer configuration. Vite copies them unchanged to the public build output (`dist/assets` for external Pages builds); no external photo service is required.

- Build command: `npm run build`
- Build output directory: `dist`
- Deploy command: empty
- Preview command: empty

Lovable's managed build overrides the preset and output layout inside the editor. A successful editor build does not independently verify the external Pages output; confirm that the Cloudflare Pages build reports `cloudflare-pages` and produces `dist/_worker.js/index.js` plus public assets. No prerender pass should run or try to import `dist/server/server.js`.

Before publishing, fill the explicit placeholders in `src/config/offer.ts` and supply licensed authentic photos there. Every checkout action uses `offer.checkoutUrl`. While missing, buttons open a non-payment notice instead of navigating to a fake URL.

The page title, search description and social descriptions are defined in the same configuration. There is no fabricated social photo; an absolute HTTPS hero photo enables both image tags. Supply a compressed share-suitable rendition before enabling it. The provisional favicon follows the typographic course identity.

Keep the existing TanStack Start, React, Vite and custom server entry. No separate deployment command or `npx wrangler deploy` is required for Cloudflare Pages Git builds.