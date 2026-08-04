# NEWZONIX — Production Checklist

Use this before every deploy. Items already verified as part of this v1.1.0 pass are
checked; items that require your live environment (real npm registry, a browser, or a
deployed URL) are left unchecked with the exact command to run.

## Build & types

- [x] All 51 TypeScript/TSX source files individually syntax-verified (esbuild, 0 errors)
- [x] Every import (named, default, path-aliased `@/…`, and relative `../`) cross-checked
      against actual module exports — 0 unresolved imports, 0 mismatched exports
- [ ] `npm install && npm run build` completes with zero errors in your environment
      (this sandbox has no npm registry access — see README §2 for why)
- [ ] `npm run lint` reports zero errors

## Content

- [x] Zero placeholder / lorem ipsum / TODO / "dummy" text anywhere in `app/`, `components/`,
      or `lib/`
- [x] All 8 routes carry real, situation-specific copy (not generic filler)
- [x] Icon keys referenced in `lib/data.ts` (`orbit`, `spark`, `layers`, `shield`, `pulse`,
      `grid`) match `iconMap` in `components/icons/Icons.tsx` exactly

## Accessibility (WCAG 2.1 AA target)

- [x] Skip-to-content link + `#main-content` landmark in root layout
- [x] Visible `:focus-visible` outline globally (`app/globals.css`)
- [x] `prefers-reduced-motion: reduce` collapses all animation/transition durations globally
- [x] Nav marks the active route with `aria-current="page"`
- [x] FAQ accordion: trigger buttons wired to panels via `aria-controls`/`aria-expanded`,
      panels carry `role="region"` + `aria-labelledby`
- [x] Contact form: every field has an associated `<label htmlFor>`, invalid fields set
      `aria-invalid` + `aria-describedby`, error text uses `role="alert"`, success state
      uses `role="status" aria-live="polite"`
- [x] Text/background contrast pairs computed against WCAG formulas — body text runs
      5.3–18.9:1 against the dark background (AA minimum is 4.5:1 for normal text)
- [ ] Run an automated pass to catch anything static analysis can't:
      `npx @axe-core/cli http://localhost:3000` (after `npm run build && npm run start`)
- [ ] Manually tab through each page with a keyboard only — confirm focus order is logical
      and nothing is trapped
- [ ] Spot-check with a screen reader (VoiceOver on macOS: Cmd+F5) on the homepage and the
      contact form

## SEO

- [x] Per-page `<title>` via the `%s | NEWZONIX` template and unique `description` on
      every route
- [x] `alternates.canonical` set on every route, including dynamic blog posts
- [x] Open Graph + Twitter Card metadata on every route, backed by a real generated
      1200×630 `og-image.png` (not a placeholder image)
- [x] JSON-LD structured data: `Organization` + `WebSite` (root layout), `FAQPage` (FAQ
      component, appears on Home and Pricing), `Article` (each blog post)
- [x] `app/sitemap.ts` includes all static routes plus every blog post slug
- [x] `app/robots.ts` allows crawling and points to the sitemap
- [ ] After deploying, validate structured data with Google's Rich Results Test and the
      Schema.org validator, and confirm the OG image renders correctly with the
      Twitter Card Validator / Facebook Sharing Debugger (these tools need a live URL)

## Performance (target: 95+ Lighthouse)

- [x] Zero raster images used for icons/illustrations — everything is inline SVG, so
      there's no LCP-image weight or image-optimization pipeline to configure
- [x] Fonts self-hosted and subset automatically via `next/font/google` — no external font
      requests, no font-swap layout shift
- [x] Every route is statically generated (no runtime data fetching / no `dynamic = "force-dynamic"`
      anywhere) — pages ship as cacheable static HTML
- [x] Particle/background animations are pure CSS transforms (GPU-composited), not
      JS `requestAnimationFrame` loops
- [ ] Run Lighthouse against the production build to get the actual score:
      ```bash
      npm run build && npm run start
      npx lighthouse http://localhost:3000 --view
      ```
- [ ] Repeat for `/blog/governed-automation-vs-black-box-ai` (representative content page)
      and `/pricing` (heaviest page — pricing cards + comparison table + FAQ)

## Responsive design

- [x] Every section built mobile-first with `sm:` / `md:` / `lg:` breakpoints; no
      fixed-pixel-width layouts
- [x] Header collapses into a slide-down mobile menu below `lg`
- [x] Pricing comparison table wrapped in `overflow-x-auto` for narrow viewports
- [ ] Manually check at 375px (mobile), 768px (tablet), 1280px (laptop), and 1920px+
      (large display) in your browser's device toolbar — pay particular attention to the
      Hero (illustration should stack cleanly under the copy below `lg`) and the pricing
      cards (the "Most popular" card should not overflow at `lg` breakpoint edges)

## Routes

- [x] `/`, `/about`, `/platform`, `/solutions`, `/pricing`, `/resources`, `/blog`,
      `/contact` all present with real content
- [x] `/blog/[slug]` statically generated for all 3 seeded articles via
      `generateStaticParams`
- [x] Custom `not-found.tsx` for unmatched routes
- [ ] After deploying, click through every link in the header, footer, and inline body
      copy once to confirm nothing 404s

## Deployment

- [ ] Repo pushed to GitHub (README §8)
- [ ] Coolify application created and pointed at the repo (README §9)
- [ ] Domain attached with automatic HTTPS enabled
- [ ] First deploy's build log shows Next.js's `✓ Compiled successfully`
- [ ] Auto-deploy on push enabled (or a manual redeploy habit agreed on with the team)
