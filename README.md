# Cybromines — Marketing Website

The production marketing site for **Cybromines** (legal entity: _Cybromines Private Limited_) — an **AI‑native software house** that builds and integrates every system a business runs on (ERP, CRM, POS, inventory, production, property, and queue management), all powered by AI agents. Built as a **fully static** Next.js 16 export that deploys to any static host.

The signature elements: the **AI Core** (hero — systems orbiting an AI brain), the **AI Console** (live command stream across the portfolio), and a **living‑systems bento** (each product with its own mini live‑mockup).

- **Framework:** Next.js 16 (App Router, TypeScript strict) — static export (`output: 'export'`)
- **Styling:** Tailwind CSS v4 (CSS‑first `@theme` tokens)
- **UI primitives:** shadcn‑style components on Radix (hand‑authored to match the token system)
- **Animation:** Framer Motion via the `motion` package (`LazyMotion` + `m`)
- **Theming:** `next-themes` — dark default, light toggle, no flash
- **Blog:** MDX in `/content/blog`, `gray-matter` + `next-mdx-remote/rsc`, Shiki code highlighting
- **Icons:** lucide-react (+ inline brand glyphs)
- **Fonts:** Space Grotesk, Inter, JetBrains Mono (self‑hosted via `next/font`)

---

## Getting started

```bash
pnpm install
cp .env.example .env.local   # then edit values
pnpm dev                     # http://localhost:3000
```

### Scripts

| Script | What it does |
| --- | --- |
| `pnpm dev` | Start the dev server |
| `pnpm build` | Production build → static export in `out/`, then sitemap + RSS |
| `pnpm start` | Serve the built `out/` locally (`npx serve out`) |
| `pnpm check` | `tsc --noEmit` + ESLint — the quality gate |
| `pnpm lint` | ESLint only |
| `pnpm format` | Prettier write |

`pnpm build` runs three steps: `next build` → `next-sitemap` (emits `sitemap.xml` + `robots.txt`) → `scripts/generate-rss.mjs` (emits `rss.xml`). The full static site lands in **`out/`**.

---

## Environment variables

All are build‑time inlined (`NEXT_PUBLIC_*`). Edit in `.env.local`; see `.env.example`.

| Variable | Purpose | Fallback |
| --- | --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Canonical origin — metadata, canonical URLs, sitemap, OG, RSS | `https://cybromines.com` |
| `NEXT_PUBLIC_CONTACT_ENDPOINT` | Contact form POST target (e.g. Formspree). If empty, the form falls back to a `mailto:` link | _(empty → mailto)_ |
| `NEXT_PUBLIC_WHATSAPP_NUMBER` | WhatsApp number, digits only (no `+`/spaces) | `971500000000` |
| `NEXT_PUBLIC_GA_ID` | GA4 Measurement ID. Analytics only loads when set | _(empty → no GA)_ |

> Because values are inlined at build time, **you must rebuild** after changing any env var.

---

## Project structure

```
app/                      Routes (App Router) + metadata image routes (og, icons)
  solutions/              Solutions catalog + /solutions/[slug] (7 systems)
  products/[module]/      ERP module deep-dives (Trading, Inventory, Finance, HRM, POS)
  ai-agents/              The AI hub ("AI across every system")
  integrations/           WhatsApp CRM, Facebook Ads
  services/[service]/     Data-driven service pages (3)
  blog/[slug]/            MDX blog post template + per-post OG image
  dev/components/         Component gallery for visual QA (noindex, sitemap-excluded)
components/
  ui/                     shadcn-style primitives (button, input, select, accordion…)
  site/                   Navbar, footer, AI core, AI console, system mockups, etc.
  home/                   Home-page-only sections (hero, solutions bento, AI band…)
  mdx/                    MDX component mapping + renderer
  blog/                   Blog listing (client tag filter)
  contact/                Contact form (react-hook-form + zod)
content/blog/             *.mdx posts (the blog source of truth)
lib/
  data/                   Typed content: solutions, modules, services, nav, stats, …
  seo/                    metadata + JSON-LD builders
  blog.ts, toc.ts         MDX loader (Zod frontmatter) + TOC extraction
  site.ts, utils.ts       Site config + helpers
styles/globals.css        @theme tokens, signature animations, prose theming
scripts/generate-rss.mjs  Build-time RSS generation
```

**Convention:** all copy/data lives in typed objects under `lib/data/` so editing content never touches JSX.

---

## Editing content

### Change copy or data

- **Solutions** (the 7 systems: ERP, CRM, POS, Inventory, Production, Property, Queue): `lib/data/solutions.ts` — drives the home bento, the AI hub's per‑system grid, the AI Core nodes, and every `/solutions/[slug]` page. Add a system by adding an entry (with a `mockup` key) here.
- **ERP modules** (Trading, Inventory, Finance, HRM, POS): `lib/data/modules.ts`
- **Services** (Custom software, SEO, Mobile apps): `lib/data/services.ts`
- **Navigation** (header mega‑menus, footer columns): `lib/data/nav.ts`
- **Stats / testimonials / FAQs**: `lib/data/stats.ts`, `testimonials.ts`, `faqs.ts`
- **Global site info** (name, address, email, socials, WhatsApp): `lib/site.ts`
- **AI Console commands** (the live terminal stream): the `COMMANDS` array in `components/site/ai-console.tsx`

Edit the object, save, rebuild. The pages are generated from these — no JSX changes needed.

### Swap client logos

Edit the `clients` array in `components/site/logo-marquee.tsx` (neutral wordmarks; swap for real logos/SVGs as needed).

### Add a blog post

1. Create `content/blog/my-post-slug.mdx`.
2. Add frontmatter (validated by Zod — the build fails on a bad shape):

   ```mdx
   ---
   title: "Your post title"
   description: "140–160 char summary for SEO and cards."
   date: "2026-06-15"           # YYYY-MM-DD
   tags: ["ERP", "AI"]
   cover: "/blog/my-post.png"    # required field (covers render as CSS, value is metadata)
   author:
     name: "Author Name"
     role: "Their role"
   draft: false                  # true → excluded from production build
   ---

   Your MDX content. Use ## and ### headings (auto-anchored + table of contents).
   ```

   Inside the body you can use fenced code blocks (Shiki highlighting) and the
   `<Callout type="note|tip|warning" title="…">…</Callout>` component.

3. `pnpm build`. The post is auto-added to the blog listing, home preview, sitemap, RSS, related posts, and gets its own build-time OG image. Covers are generated from the slug (deterministic gradient) — no image file required.

---

## Deploying

The output is a plain static site in `out/`. Trailing slashes are on, so routes map to `route/index.html`.

### Vercel (static)

Vercel detects Next.js automatically. Set the env vars in project settings. No server runtime is used. (Vercel serves the generated OG image routes with the correct `image/png` content type natively.)

### Nginx (or any static host: S3 + CloudFront, etc.)

Upload the contents of `out/` to your web root, then:

```nginx
server {
  listen 80;
  server_name cybromines.com www.cybromines.com;
  root /var/www/cybromines/out;
  index index.html;

  # Trailing-slash routes: try the directory's index.html
  location / {
    try_files $uri $uri/ $uri.html /404.html;
  }

  # Long-cache hashed static assets
  location /_next/static/ {
    expires 1y;
    add_header Cache-Control "public, immutable";
  }

  # Metadata image routes export without a file extension —
  # serve them (and the manifest) with the correct content type.
  location = /opengraph-image      { default_type image/png; }
  location = /apple-icon           { default_type image/png; }
  location ~* /opengraph-image$    { default_type image/png; }
  location = /manifest.webmanifest { default_type application/manifest+json; }

  error_page 404 /404.html;
}
```

> **Why the image-route blocks?** Next’s `opengraph-image`/`apple-icon` routes export as extensionless files (real PNG bytes). Generic hosts guess content type from the extension, so we set it explicitly. Vercel handles this automatically.

---

## Notes & decisions

- **Next 16, not 15.** The spec said “Next.js 15 (latest stable)”; the current latest stable is 16, which `create-next-app` installed. The site uses the App Router and static export identically.
- **`images.unoptimized: true`.** Static export (`output: 'export'`) has no runtime image optimizer. Nearly all visuals are built in HTML/CSS (dashboard, chat, phone frames, blog covers, neural beam) so there are essentially no raster images to optimize; everything is explicitly sized for zero layout shift.
- **shadcn primitives are hand‑authored** on Radix to fit the Tailwind v4 token system (the CLI’s interactive init conflicts with the custom `@theme` setup). They are functionally equivalent to generated shadcn `new-york` components.
- **lucide v1 removed brand icons** (LinkedIn, GitHub, YouTube, X, etc.); those ship as inline SVGs in `components/site/brand-icons.tsx`.
- **OG images** are generated at build by `app/opengraph-image.tsx` (default) and `app/blog/[slug]/opengraph-image.tsx` (per‑post) using `next/og`.
