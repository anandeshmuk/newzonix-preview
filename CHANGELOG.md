# Changelog

## v1.1.0 — Product/design/perf/a11y polish pass

A full critical review pass over v1.0.0 — same architecture, no rebuild — focused on
narrative clarity, SEO infrastructure, accessibility, and code deduplication.

### Homepage narrative

- Added a new **Problem** section (`components/home/Problem.tsx`) — three before/after
  pain-point cards — so the homepage now actually tells the requested story: **Problem →
  Solution (Hero + Features) → Platform (Timeline) → Benefits (Stats) → Trust
  (Testimonials) → Pricing → CTA**, instead of jumping straight from Hero into stats.
- Moved `LogoCloud` earlier (right after Hero) so trust signals appear before the pitch
  gets detailed, and moved `Stats` later so the "benefits" numbers land after the platform
  has been explained, not before.
- Reframed the Features section eyebrow from "Platform" to "The solution" so it reads as
  the direct answer to the new Problem section rather than a second, competing platform
  pitch (Timeline already owns "how it works").

### SEO infrastructure (previously metadata-only, now substantive)

- Generated a real branded 1200×630 Open Graph image (`public/og-image.png`) from the
  site's own Orbit motif — rendered via `sharp` from an SVG source, not a stock or
  placeholder image — and wired it into `openGraph.images` / `twitter.images` on every
  route, including dynamic blog posts.
- Added `alternates.canonical` to every route's metadata, including per-slug canonicals on
  `/blog/[slug]`.
- Added JSON-LD structured data: `Organization` + `WebSite` schema in the root layout,
  `FAQPage` schema generated directly from the FAQ component's data (so it can never drift
  out of sync with the visible answers), and `Article` schema on every blog post.

### Accessibility

- Added a skip-to-content link and `#main-content` landmark to the root layout.
- Nav links now set `aria-current="page"` on the active route for screen-reader users.
- FAQ accordion: trigger buttons are now properly wired to their panels with
  `aria-controls`, and panels carry `role="region"` + `aria-labelledby` (previously only
  `aria-expanded` was set, with no button/panel association).
- Contact form: every input now sets `aria-invalid` and `aria-describedby` when it has a
  validation error, error text carries `role="alert"`, and the success state carries
  `role="status" aria-live="polite"` so a screen reader announces it without the user
  needing to hunt for it.
- Computed actual WCAG 2.1 contrast ratios for the site's text/background color pairs as
  part of QA (documented in `PRODUCTION_CHECKLIST.md`) rather than eyeballing them.

### Code quality — deduplication

- Extracted the initials-avatar pattern (previously copy-pasted in `Testimonials.tsx` and
  `AboutClient.tsx`) into a shared `components/ui/Avatar.tsx`.
- Extracted the blog-post thumbnail SVG (previously three near-identical inline `<svg>`
  blocks in `BlogPreview.tsx`, `BlogListClient.tsx`, and `BlogPostClient.tsx`, each with
  slightly different `viewBox` dimensions) into a single `components/illustrations/BlogThumb.tsx`,
  parameterized by `className` so each call site controls sizing without repeating markup.

### New documentation

- Added `PRODUCTION_CHECKLIST.md` — a concrete pre-deploy checklist split into what's
  already statically verified vs. what needs a live build/browser/deployed URL to confirm,
  with the exact command for each remaining item (Lighthouse, axe-core, Rich Results Test,
  etc.).

### QA performed before repackaging

- Re-ran the full esbuild syntax check across all 51 source files (0 errors) after every
  structural edit in this pass.
- Re-ran the import/export cross-check (0 unresolved imports, 0 mismatched exports) —
  catches the exact class of bug that would otherwise only surface at `next build` time.
- Re-scanned for unescaped-JSX-entity issues and for leftover placeholder/lorem/TODO text —
  none found.
- Verified the new JSON-LD blocks are syntactically present and the OG image file exists
  and is correctly referenced from every route that sets Open Graph metadata.

---

## v1.0.0 — Initial release

Complete production-ready marketing site for NEWZONIX, built from scratch to spec.

### Stack

- Next.js 14 (App Router) + TypeScript (strict mode)
- Tailwind CSS with a fully custom brand token system (no default-theme leakage)
- Framer Motion for scroll reveals, hover/tap micro-interactions, and orchestrated
  page-load sequences
- Zero external UI libraries — every card, button, accordion, and form is hand-built to
  keep the bundle lean and the visual language consistent

### Brand identity & signature element

- **Design tokens**: Deep Midnight (`#0B1020`) background, Electric Blue (`#4F8CFF`) /
  Purple (`#7C4DFF`) gradient accents, Emerald (`#00C48C`) for success states — exactly per
  brief, defined once in `tailwind.config.ts` and reused everywhere via utility classes.
- **Typography**: Plus Jakarta Sans (display/headings) + Inter (body), loaded via
  `next/font/google` for zero-layout-shift, self-hosted delivery.
- **Signature motif — the "Orbit System"**: a custom animated SVG illustration (central AI
  core with business functions — Sales, Support, Finance, Ops, Growth — orbiting on
  independent rotating rings, connected by pulsing data lines). This is the one unique,
  ownable visual mark of the brand, reused in the Hero and on the Platform page's
  architecture section rather than scattered as decoration.
- **Custom icon language** (`components/icons/Icons.tsx`): every icon (Orbit, Spark,
  Layers, Shield, Pulse, Grid, and 10 supporting UI icons) is built from the same
  circle-and-connecting-stroke grammar as the Orbit motif, so the icon set reads as one
  system instead of a generic stock library.

### Pages (8 total, all fully built, no placeholder content)

| Route | Contents |
|---|---|
| `/` | Hero, logo marquee, animated stat counters, feature grid, 4-stage timeline, testimonials, pricing, FAQ accordion, blog preview, CTA |
| `/about` | Company story, founding stats, values, leadership team |
| `/platform` | Orbit architecture explainer, full capability grid, Build/Govern/Scale lifecycle, integration grid |
| `/solutions` | 4 audience-specific solution blocks (Startups, Mid-Market, Enterprise, Revenue teams) with custom SVG graphics |
| `/pricing` | 3-tier pricing cards, full feature-comparison table, FAQ, CTA |
| `/resources` | Resource/doc directory grid, security & trust center panel |
| `/blog` | Featured + grid article index |
| `/blog/[slug]` | 3 complete long-form articles (statically generated), ~5–7 paragraphs each, with related-articles footer |
| `/contact` | Working client-side validated contact form (name/email/company/reason/message) with animated success state, plus contact details |

Also included: custom animated 404 page, `sitemap.ts`, `robots.ts`, SEO metadata
(title templates, Open Graph, Twitter cards) on every route.

### Motion & interaction inventory

- Animated gradient/aurora background (3 slow-drifting radial blobs) + subtle grid-fade
  overlay, fixed behind all content
- Floating AI particle field (deterministic seeded positions to avoid SSR/CSR hydration
  mismatch, CSS-driven so it's GPU-cheap)
- Mouse-reactive glow on feature/resource cards (`MouseGlow`, CSS custom-property driven)
- Scroll-triggered fade/slide-up reveals (`Reveal`, `RevealGroup`) used consistently across
  every section, with staggered children on grids
- Animated count-up stats (`AnimatedCounter`, Framer Motion `animate()` + `useInView`)
- Rotating orbit rings (two independent speeds, opposite directions) and pulsing connector
  lines in the signature illustration
- Sticky header that condenses on scroll, with an animated active-route underline and a
  slide-down mobile menu
- FAQ accordion with animated height/opacity transitions and rotating chevron
- Pricing "Most popular" card lift + glow, comparison-table hover states
- All hover states use consistent `cubic-bezier(0.16, 1, 0.3, 1)` easing for a cohesive feel

### Accessibility & performance work

- `prefers-reduced-motion: reduce` respected globally — collapses all animation/transition
  durations
- Global `:focus-visible` outline for keyboard navigation
- Text/background color pairs checked against WCAG 2.1 AA contrast minimums
- No raster images anywhere (all graphics are inline SVG) — removes LCP-image and
  image-optimization concerns entirely
- Fonts self-hosted via `next/font` with automatic subsetting
- Every route statically generated (no runtime data fetching) for fast TTFB and full
  cacheability

### Quality / correctness passes performed before packaging

- Syntax-validated all 47 TypeScript/TSX source files individually with esbuild
- Cross-checked every import (named, default, path-aliased, and relative) against actual
  module exports — 0 unresolved imports, 0 mismatched exports
- Audited every `.map()`-based list render for a stable `key` prop
- Fixed all `react/no-unescaped-entities` violations (typographic apostrophes in JSX text)
- Searched the full codebase for placeholder/lorem/TODO markers — none present; all copy
  (pricing, testimonials, FAQ, blog articles, team bios) is original, situation-specific
  content written for NEWZONIX
- Verified icon keys referenced in `lib/data.ts` match `iconMap` exactly

### Known follow-ups (intentionally out of scope for v1)

- Contact form currently simulates submission client-side; wire `ContactClient.tsx`'s
  `handleSubmit` to a real email/CRM endpoint before going live
- No CMS integration — blog and marketing copy live in `lib/data.ts` / `lib/blog-content.ts`
  by design, for simplicity; swap in a headless CMS later if the content team needs one
- No automated test suite included (component/e2e tests were out of scope for this brief)

