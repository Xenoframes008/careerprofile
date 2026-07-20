# Atanu Samadder — Portfolio

A premium, single-page portfolio for **Atanu Samadder**, a Senior Software QA
Engineer based in Dublin, Ireland. Built with Next.js 15 (App Router),
TypeScript, Tailwind CSS v4 and Framer Motion — dark-mode-first, glassmorphic,
fully responsive, accessible and SEO-optimized.

**Live site:** [atanusamadder.dev](https://atanusamadder.dev) _(update once deployed)_

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
| `npm run build`       | Production build (also type-checks)           |
| `npm run start`       | Serve the production build                    |
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
│   ├── sitemap.ts          # sitemap.xml
│   └── api/contact/route.ts# Contact form submission endpoint
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
| `NEXT_PUBLIC_SITE_URL`   | `https://atanusamadder.dev`     | Base URL used for canonical links, OG/Twitter images, sitemap, robots.txt and JSON-LD. Set this per-environment (e.g. a Vercel preview URL) so metadata always points at the right domain. |

The contact form (`src/app/api/contact/route.ts`) currently validates and
logs submissions server-side. To send real emails, wire in a provider (e.g.
[Resend](https://resend.com), SendGrid, or SMTP via Nodemailer) inside that
route and add whatever API key it needs as an additional environment
variable.

## Deploying to Vercel

This is a zero-config Next.js app — no `vercel.json` needed.

1. Push the repository to GitHub/GitLab/Bitbucket.
2. In the [Vercel dashboard](https://vercel.com/new), import the repository.
   Vercel auto-detects Next.js and sets the correct build (`next build`) and
   output settings.
3. Add the `NEXT_PUBLIC_SITE_URL` environment variable set to your production
   domain (e.g. `https://atanusamadder.dev`) under **Project Settings →
   Environment Variables**, for Production (and Preview, if you want preview
   deployments to self-reference correctly).
4. Deploy. Every push to the default branch redeploys Production; every PR
   gets a Preview deployment automatically.
5. Once you have a custom domain, add it under **Project Settings →
   Domains** and update `NEXT_PUBLIC_SITE_URL` (and the fallback in
   `src/config/site.ts`) to match.

Alternatively, via the CLI:

```bash
npm i -g vercel
vercel        # first deploy, links the project
vercel --prod # promote to production
```

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
- Run `npm run build && npm run start`, then audit with Lighthouse (Chrome
  DevTools → Lighthouse, or `npx lighthouse http://localhost:3000 --view`)
  against the production build — the dev server includes unminified/HMR
  overhead that skews scores.

## License

Personal portfolio — content and imagery belong to Atanu Samadder. Feel
free to use the code structure as a reference for your own portfolio.
