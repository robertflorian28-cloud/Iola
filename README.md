# IOLA

Next.js App Router portfolio. Use pnpm; preserve `pnpm-lock.yaml`.

## Local development

- `pnpm install --frozen-lockfile`
- `pnpm dev` serves the site at http://localhost:3000.
- `pnpm build` validates TypeScript and produces the production build.
- `pnpm start --port 3001` previews that build separately.

Development writes to `.next-dev`; production writes to `.next`. This lets a production build run without overwriting the live development server's CSS and JavaScript. Both directories are generated and ignored.

## Performance and accessibility

- Images use Next Image, responsive sizes and modern formats. Only above-the-fold images are prioritized; galleries warm the next slide when near the viewport and respect data-saving mode.
- The homepage opens directly on its content, without an intro overlay or session-based entry animation.
- The manifesto uses native CSS scroll timelines, with readable static text in unsupported browsers and reduced-motion mode. It no longer adds GSAP to the homepage bundle.
- The mobile menu excludes hidden links from navigation, supports Escape and focus cycling, and releases the scroll lock when closed or resized to desktop.
- Preserve project image order and Romanian content in `lib/site-data.ts`.

## Verification

`pnpm build` is the required check. No standalone lint or automated test runner is configured.

Verify 390px, 768px and 1440px widths, navigation anchors, keyboard/mobile menu, gallery arrows and wrapping, FAQ controls, legal routes and contact destinations. After building while dev is running, reload localhost:3000 and verify its CSS still loads.

Optional production audit (temporary CLI; no dependency changes):

```powershell
pnpm dlx lighthouse http://localhost:3001/ --chrome-flags="--headless --no-first-run" --output=html --output-path=.artifacts/lighthouse.html
```

Create `.artifacts` first. Lighthouse results are local lab measurements, not field Core Web Vitals.

## SEO

- `lib/seo.ts` centralizes canonical URLs, page metadata and homepage JSON-LD. The default public origin is `https://iola.ro`; set `SITE_URL` in the hosting environment **before building** if it changes. Use the final HTTPS origin, without a path. Rebuild after changing it.
- Each page supplies its own title, description, canonical, Open Graph and Twitter metadata. Keep using `pageMetadata` for new public routes and add those routes to `app/sitemap.ts`.
- `/robots.txt` allows crawling and points to `/sitemap.xml`. The sitemap includes all three public pages and portfolio image URLs, including carousel images. Add `lastModified` only when a reliable content modification date is available.
- `/social-image` serves a static 1200×630 PNG using the supplied IOLA logo. Homepage JSON-LD describes the organization, website and listed services. No unverified address, location, ratings or social profiles are published.
- Confirm the public domain and contact details before deployment. Verify the production property in Google Search Console, submit `/sitemap.xml`, and inspect the homepage URL after publishing. Search Console verification requires access to the domain or hosting account. Indexing and rankings are controlled by search engines.
- Preview deployments should be access protected or receive an `X-Robots-Tag: noindex` header through the hosting provider. `robots.txt` alone does not prevent indexing.
