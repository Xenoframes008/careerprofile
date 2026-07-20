# Atanu Samadder — Portfolio

A premium, single-page portfolio for **Atanu Samadder**, a Senior Software Quality Assurance
Analyst and Acting QA Lead based in Dublin, Ireland. Built with Next.js 15 (App Router),
TypeScript, Tailwind CSS v4 and Framer Motion — dark-mode-first, glassmorphic,
fully responsive, accessible and SEO-optimized.

**Live site:** [atanusamadder.dev](https://atanusamadder.dev) — statically exported and hosted on **GitHub Pages**, deployed automatically via GitHub Actions on every push to `main`.

## Features

- **Sections**: Hero, About, Skills Dashboard, Experience timeline,
  Certifications (with preview modal), Projects (filterable, with detail
  modal), "Why Recruiters Hire Me", and a working Contact form.
- **Design**: dark theme, blue/cyan accent, glassmorphism, animated gradient
  blobs, a subtle particle field, and a consistent card "spotlight" hover
  effect that tracks the pointer.
- **Motion**: Framer Motion throughout — staggered scroll reveals, hover
  lifts, an animated skills/projects filter, expandable timeline items, a
  page-transition wrapper, and a slim top-of-page loading bar. Everything
  respects `prefers-reduced-motion`.
- **Accessibility**: skip link, semantic landmarks, keyboard-operable modal
  with a focus trap and focus restoration, `aria-live` status regions on the
  contact form, and a deliberate heading hierarchy (single `h1`, one `h2` per
  section).
- **SEO**: per-page metadata, Open Graph + Twitter cards, a generated OG
  image, `robots.ts`, `sitemap.ts`, `manifest.ts`, and JSON-LD for `Person`,
  `WebSite`, `ProfilePage` and `BreadcrumbList`.
- **Performance**: transform-only entrance animations on above-the-fold
  content (no opacity fades) to avoid delaying Largest Contentful Paint;
  scored 95+ across Lighthouse's Performance/Accessibility/Best
  Practices/SEO categories in local audits.

## Tech Stack

| Layer      | Choice                                             |
| ---------- | --------------------------------------------------- |
| Framework  | [Next.js 15](https://nextjs.org) (App Router)      |
| Language   | TypeScript (strict mode)                           |
| Styling    | [Tailwind CSS v4](https://tailwindcss.com) (CSS-first config) |
| Animation  | [Framer Motion](https://www.framer.com/motion/)    |
| Icons      | [lucide-react](https://lucide.dev)                 |
| Utilities  | `clsx` + `tailwind-merge` (via a shared `cn()` helper) |

## Getting Started

Requires **Node.js ≥ 20.9**.

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site. It
hot-reloads as you edit files under `src/`.

### Available Scripts

| Script               | Purpose                                      |
| --------------------- | --------------------------------------------- |
| `npm run dev`         | Start the dev server                          |
| `npm run build`       | Static export build (also type-checks) → `out/` |
| `npm run start`       | Serve the exported `out/` folder locally      |
| `npm run lint`        | Run ESLint                                    |
| `npm run lint:fix`    | Run ESLint and auto-fix issues                |
| `npm run type-check`  | Run `tsc --noEmit` on its own                 |

## Project Structure

```
src/
├── app/                    # Routes, metadata & SEO endpoints (App Router)
│   ├── layout.tsx          # Root layout, fonts, global metadata, providers
│   ├── template.tsx        # Page-transition wrapper (remounts on navigation)
│   ├── page.tsx            # Home page — composes all sections
│   ├── globals.css         # Tailwind v4 theme tokens + global CSS
│   ├── manifest.ts         # Web app manifest
│   ├── opengraph-image.tsx # Dynamically generated OG image
│   ├── robots.ts           # robots.txt
│   └── sitemap.ts          # sitemap.xml
├── components/
│   ├── ui/                 # Generic, reusable primitives (Button, Modal,
│   │                       # Reveal, Spotlight, IconCard, ProficiencyRing…)
│   ├── sections/            # Page sections (Hero, About, Experience…)
│   ├── layout/              # Navbar, Footer, BackgroundDecor
│   └── seo/                 # JSON-LD structured data renderer
├── config/                  # Content/data (site.ts, experience.ts, skills.ts…)
├── lib/                      # `cn()`, contact validation, JSON-LD builders
└── types/                    # Shared TypeScript types
```

Content lives entirely in `src/config/*.ts` — update those files to change
copy, add a certification, a project, or a role, without touching component
code.

### Key reusable primitives

- **`Reveal`** (`components/ui/Reveal.tsx`) — the shared scroll-entrance
  animation (fade + rise, with optional horizontal/scale variants and
  stagger) used by nearly every card and section.
- **`Spotlight`** (`components/ui/Spotlight.tsx`) — wraps a card with a
  pointer-tracked radial glow; pure CSS-variable updates, no re-renders.
- **`Modal`** (`components/ui/Modal.tsx`) — accessible dialog with a focus
  trap, initial focus, focus restoration, and portal rendering.
- **`Button`** (`components/ui/Button.tsx`) — one component that renders as
  either a `<Link>` or `<button>` depending on whether an `href` is passed.

## Environment Variables

None are required to run the site locally or in production. One optional
variable is supported — copy `.env.example` to `.env.local` to override it:

| Variable                | Default                        | Purpose                                                                 |
| ------------------------ | ------------------------------- | ------------------------------------------------------------------------ |
| `NEXT_PUBLIC_SITE_URL`   | `https://atanusamadder.dev`     | Base URL used for canonical links, OG/Twitter images, sitemap, robots.txt and JSON-LD. Set this per-environment so metadata always points at the right domain. |

The site is a **static export** (`output: "export"` in `next.config.ts`),
so there's no server at runtime — the contact form doesn't POST to an API
route. Instead, submitting it opens the visitor's own email client via a
pre-filled `mailto:` link to `src/config/site.ts`'s `author.email`. If you
later move to a host that supports server functions (Vercel, Netlify, etc.),
you can restore a real API route and swap in a provider like
[Resend](https://resend.com) or SendGrid.

## Deploying to GitHub Pages (current setup)

The repo already includes everything needed — `.github/workflows/deploy.yml`
builds and publishes the site on every push to `main`:

1. **Enable Pages**: in the GitHub repo, go to **Settings → Pages** and set
   **Source** to **GitHub Actions** (not "Deploy from a branch").
2. **Push to `main`**: the `Deploy to GitHub Pages` workflow runs
   automatically — lint, type-check, `next build` (static export to `out/`),
   then `actions/deploy-pages`. Check progress under the **Actions** tab.
3. **Custom domain**: `public/CNAME` already contains `atanusamadder.dev`,
   so it's included in every export and GitHub picks it up automatically.
   If you use a different domain, edit that file (and `NEXT_PUBLIC_SITE_URL`
   in `.env.example` / your environment, plus the fallback in
   `src/config/site.ts`) to match.
4. **DNS**: at your domain registrar, point the apex domain at GitHub Pages:
   - Add four **A** records for `@` (or the domain root) to:
     `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
   - Optionally add **AAAA** records for IPv6:
     `2606:50c0:8000::153`, `2606:50c0:8001::153`, `2606:50c0:8002::153`, `2606:50c0:8003::153`
   - If you'd rather use `www.atanusamadder.dev`, use a **CNAME** record
     pointing to `<your-github-username>.github.io` instead, and update
     `public/CNAME` to the `www` host.
5. Back in **Settings → Pages**, once DNS resolves, GitHub verifies the
   domain and offers **Enforce HTTPS** — enable it (certificate
   provisioning can take a little while after DNS first propagates).

DNS propagation can take anywhere from a few minutes to ~24 hours. You can
check status with `dig atanusamadder.dev +noall +answer`.

### Deploying to Vercel instead

Because this app is configured for static export, `next dev`/`next build`
still work identically on Vercel — it's a zero-config Next.js app there too.
If you switch back to Vercel (e.g. to restore a real server-side contact
form), just remove `output: "export"` / `images.unoptimized` from
`next.config.ts`, import the repo at [vercel.com/new](https://vercel.com/new),
and set `NEXT_PUBLIC_SITE_URL` under **Project Settings → Environment
Variables**.

### Updating personal content before your own deploy

- `public/profile.jpg`, `public/resume.pdf` — replace with your own.
- `src/config/site.ts` — name, role, links, keywords, canonical URL.
- `src/config/{about,experience,skills,certifications,projects,whyHireMe}.ts`
  — all page copy and data.

## Accessibility & Performance Notes

- All decorative motion (background blobs, particles, the top loading bar)
  is disabled automatically under `prefers-reduced-motion: reduce`, via
  Framer Motion's `MotionConfig reducedMotion="user"` plus a CSS media query
  for the pure-CSS background effects.
- Above-the-fold content (the Hero) animates only `transform` properties,
  never `opacity`, so the browser can paint it immediately rather than
  waiting for JS hydration — this was the single biggest Lighthouse
  Performance win during development.
- Run `npm run build` (outputs the static export to `out/`), serve it with
  any static file server (e.g. `npx serve out`), then audit with Lighthouse
  against that build — the dev server includes unminified/HMR overhead that
  skews scores.

## License

Personal portfolio — content and imagery belong to Atanu Samadder. Feel
free to use the code structure as a reference for your own portfolio.
