<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Keep variable offer facts, legal URLs, SEO text and authentic photo slots in `src/config/offer.ts`; a single source avoids inconsistent sales claims and checkout destinations.
- All purchase actions use `CheckoutButton`, validating the official Hotmart URL and showing an accessible confirmation notice until it is supplied; never navigate to a placeholder.
- Keep the existing TanStack Start bootstrap and custom server entry; disable prerender and target Nitro's Cloudflare Pages Worker in `dist` for external deployment to avoid importing a nonexistent prerender server entry.
- Use reusable Embla gallery navigation with no autoplay and an explicit empty state; the same structure must support authentic photos when supplied.
- Keep course photos as real WebP files in `public/assets` and reference their public paths from the offer configuration so external Cloudflare Pages deployments do not depend on Lovable asset serving.
- Keep presentation media and reveal timing in the offer configuration; the opening owns a single elapsed-time timer independent of playback, pauses, seeks or player retries, while sales content remains in static HTML hidden until release.
- Use the official YouTube IFrame API from a client-mounted component, with cleanup and a user-gesture sound fallback; browser autoplay policies cannot be bypassed and the player must not control page release timing.
- Use a single cleaned-up IntersectionObserver for one-time section accents after sales content release; content remains accessible without motion and animations honor reduced-motion preferences.
- The illustrative countdown stores only its demo deadline in browser localStorage after hydration, never resets expired deadlines, and never represents a real offer restriction; no backend is needed for this non-commercial preview preference.
- Render a configuration-driven placeholder line only when its value has content (trim before testing); an empty value must leave no element and no gap, so a filled block never shows dead space once the real text arrives.
