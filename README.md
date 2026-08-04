# NEWZONIX — The AI Business Platform

A production-ready marketing website for **NEWZONIX**, an AI business platform that helps
companies launch, automate, and scale their operations. Built with Next.js 14 (App Router),
TypeScript, Tailwind CSS, and Framer Motion.

Live sections include an animated hero, mouse-reactive glass cards, floating particle fields,
a signature animated "Orbit System" illustration, animated counters, a scroll-triggered
timeline, testimonials, pricing, FAQ accordion, blog (list + full articles), and a working
contact form — across 8 fully built pages (Home, About, Platform, Solutions, Pricing,
Resources, Blog, Contact).

---

## 1. Requirements

- Node.js **18.18+** (Node 20 LTS recommended)
- npm 9+ (or pnpm / yarn if you prefer — see note below)

## 2. Install & run locally

```bash
# 1. Unzip the project, then move into it
cd newzonix

# 2. Install dependencies
npm install

# 3. Start the dev server
npm run dev
```

Visit **http://localhost:3000**. The app hot-reloads as you edit files.

### Build for production

```bash
npm run build
npm run start
```

`npm run build` performs Next.js's production build, which includes type-checking and
ESLint. If you're using pnpm or yarn instead of npm, delete `package-lock.json` (if present)
and run `pnpm install` / `yarn install` instead — the `package.json` has no npm-specific
lockstep requirements.

### A note on this sandbox

This project was authored in an offline sandbox with no npm registry access, so the build
could not be executed here end-to-end. Every file was instead verified statically:

- All 47 TypeScript/TSX files individually syntax-checked with esbuild (0 errors)
- Every `@/...` and relative import cross-checked against actual exports (0 unresolved,
  0 mismatched named/default imports)
- All `.map()` list renders checked for `key` props
- All JSX text checked for unescaped entities (`react/no-unescaped-entities`) and fixed
- Copy checked for leftover placeholder/lorem/TODO text (none found)
- Color pairs checked against WCAG 2.1 contrast requirements (see §6)

Run `npm run build` after installing to get the final, authoritative confirmation — the
codebase is structured so this should complete cleanly.

---

## 3. Project structure

```
newzonix/
├─ app/                        # Next.js App Router — one folder per route
│  ├─ layout.tsx                # Root layout: fonts, metadata, JSON-LD, header/footer shell
│  ├─ page.tsx                  # Home
│  ├─ about/page.tsx
│  ├─ platform/page.tsx
│  ├─ solutions/page.tsx
│  ├─ pricing/page.tsx
│  ├─ resources/page.tsx
│  ├─ blog/page.tsx             # Blog index
│  ├─ blog/[slug]/page.tsx      # Individual article (statically generated, Article JSON-LD)
│  ├─ contact/page.tsx
│  ├─ not-found.tsx             # Custom 404
│  ├─ sitemap.ts / robots.ts    # SEO
│  └─ globals.css               # Design system tokens & utility classes
├─ components/
│  ├─ layout/                   # Header, Footer
│  ├─ home/                     # Hero, Problem, Features, Pricing, FAQ, Timeline, etc.
│  ├─ pages/                    # Client-side content for each non-home route
│  ├─ ui/                       # Button, GlassCard, Avatar, Reveal, PageHero, etc.
│  ├─ icons/                    # Custom "orbit" icon language (Icons.tsx)
│  └─ illustrations/            # Signature OrbitSystem SVG + shared BlogThumb
├─ lib/
│  ├─ data.ts                   # All site copy: nav, features, pricing, FAQ, etc.
│  └─ blog-content.ts           # Full long-form article bodies
├─ public/
│  ├─ favicon.svg
│  └─ og-image.png              # Real generated 1200×630 Open Graph image
├─ tailwind.config.ts           # Brand color/type/animation tokens
├─ PRODUCTION_CHECKLIST.md      # Pre-deploy checklist
└─ next.config.js
```

**Why routes are split into `app/*/page.tsx` + `components/pages/*Client.tsx`:** Next.js
Server Components can export page `metadata`, but Framer Motion needs `"use client"`. Each
route's `page.tsx` stays a server component (for SEO metadata) and simply renders a client
component that holds the animated content — the standard App Router pattern for this.

---

## 4. Editing content

All copy lives in **`lib/data.ts`** (and `lib/blog-content.ts` for full article bodies) —
you generally never need to touch component files to change text, prices, FAQ answers,
testimonials, or add a blog post. To add a new article:

1. Add an entry to the `blogPosts` array in `lib/data.ts` (needs a unique `slug`).
2. Add the paragraph array under that same `slug` key in `lib/blog-content.ts`.
3. The `/blog` index and `/blog/[slug]` route pick it up automatically — no other changes.

## 5. Design system reference

| Token | Value |
|---|---|
| Primary background | `#0B1020` (Deep Midnight) |
| Background gradient | `#050816` → `#10172D` |
| Secondary / links | `#4F8CFF` (Electric Blue) |
| Accent | `#7C4DFF` (Purple) |
| Success | `#00C48C` (Emerald) |
| Headings | Plus Jakarta Sans |
| Body | Inter |

All tokens are defined once in `tailwind.config.ts` (`colors`, `fontFamily`, `keyframes`) and
`app/globals.css` (`.glass`, `.btn-*`, `.section`, `.text-gradient*` utility classes) — change
a value there and it propagates everywhere.

---

## 6. Performance & accessibility

- **Fonts** are loaded via `next/font/google` (Plus Jakarta Sans, Inter), which self-hosts
  and subsets them at build time — no external font requests, no layout shift.
- **No raster images** are used anywhere on the site; all graphics (icons, the Orbit System,
  blog thumbnails, illustrations) are hand-built inline SVG, so there's no image-decode or
  LCP-image cost and nothing to optimize later.
- Every route is statically generated (no server data-fetching), so pages ship as fast,
  cacheable HTML with client-side JS hydrating the animations on top.
- `prefers-reduced-motion: reduce` is respected globally (`app/globals.css`) — all animation
  durations collapse to near-zero for users who request it.
- Visible keyboard focus (`:focus-visible`) is set globally; interactive elements (mobile
  menu, FAQ accordion, form fields) carry `aria-label` / `aria-expanded` as appropriate.
- Text color pairs were checked against WCAG 2.1 contrast minimums — body text on the dark
  background runs 5.3–18.9:1, comfortably clearing the 4.5:1 AA threshold for normal text.
- To validate the 95+ Lighthouse target yourself once built:
  ```bash
  npm run build && npm run start
  # in another terminal:
  npx lighthouse http://localhost:3000 --view
  ```

## 7. Responsiveness

Every section is built mobile-first with Tailwind breakpoints (`sm` / `md` / `lg`):
navigation collapses into a slide-down mobile menu below `lg`, grids drop from 3/4 columns to
1–2 columns, the hero stacks the illustration under the copy, and the pricing comparison
table scrolls horizontally on narrow viewports. Check it with your browser's device toolbar,
or resize the window at `npm run dev` — no separate mobile build is needed.

---

## 8. Push to GitHub

```bash
cd newzonix
git init
git add .
git commit -m "Initial commit: NEWZONIX marketing site"

# Create an empty repo on GitHub first (via github.com/new), then:
git branch -M main
git remote add origin https://github.com/<your-username>/newzonix.git
git push -u origin main
```

`.gitignore` is already configured to exclude `node_modules`, `.next`, and local env files.

---

## 9. Deploy on Coolify

[Coolify](https://coolify.io) can deploy this as a Node.js/Nixpacks app directly from your
GitHub repo:

1. **Push the repo to GitHub** (see §8) — Coolify deploys from a git remote, not a local zip.
2. In Coolify, choose **+ New Resource → Application → Public/Private Git Repository** and
   select this repo and the `main` branch.
3. **Build pack:** choose **Nixpacks** (auto-detected for Next.js) — no Dockerfile required.
   Nixpacks will run `npm install` and `npm run build` automatically.
4. **Port:** set the exposed port to **3000** (Next.js's default with `next start`).
5. **Start command:** Nixpacks auto-detects `npm run start` from `package.json`; you shouldn't
   need to override it. If you do, set it explicitly to `npm run start`.
6. **Environment variables:** none are required for this project as shipped. If you later
   wire up the contact form to a real email/CRM API, add those secrets here.
7. **Domain:** attach your domain under the application's **Domains** tab and enable
   **Automatic HTTPS** (Coolify provisions a Let's Encrypt certificate for you).
8. Click **Deploy**. Coolify will build the image and start the container; watch the build
   log for the `✓ Compiled successfully` line from Next.js.
9. For future updates, enable **Auto Deploy on push** in the application's Git settings so
   every push to `main` redeploys automatically — or click **Redeploy** manually.

### Optional: Dockerfile-based deploy

If you'd rather use Coolify's Dockerfile build pack instead of Nixpacks, add this
`Dockerfile` to the project root:

```dockerfile
FROM node:20-alpine AS base
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "run", "start"]
```

Then choose **Dockerfile** as the build pack in Coolify instead of Nixpacks — everything
else in the steps above stays the same.

---

## 10. Production checklist

See `PRODUCTION_CHECKLIST.md` for a concrete pre-deploy checklist — it separates what's
already been statically verified (imports, syntax, accessibility wiring, SEO metadata)
from what needs a live build or browser to confirm (Lighthouse score, screen-reader pass,
structured-data validators), with the exact command for each.

## 11. License / ownership

All copy, illustrations, and code in this project were authored for NEWZONIX as an original
brand identity — nothing is copied from the design inspirations referenced in the brief
(Apple, Stripe, OpenAI, Anthropic, Notion, Vercel, Framer). Replace this section with your
own license before publishing publicly if needed.
