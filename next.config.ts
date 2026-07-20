import type { NextConfig } from "next";
import path from "path";

// Project sites on GitHub Pages are served under `/<repo>/` (e.g.
// `https://xenoframes008.github.io/careerprofile/`). Without matching
// basePath/assetPrefix, CSS/JS/fonts resolve to `/_next/...` on the domain
// root and 404 — leaving an unstyled page with no animations. Leave the env
// unset (or empty) when hosting at a custom-domain apex like atanusamadder.dev.
const basePath = (process.env.NEXT_PUBLIC_BASE_PATH ?? "").replace(/\/$/, "");
// Prefer an absolute asset CDN/prefix so stylesheets never resolve relative to
// the wrong origin path (helps when a tab still has a stale document cached).
const assetPrefix = (
  process.env.NEXT_PUBLIC_ASSET_PREFIX ??
  process.env.NEXT_PUBLIC_SITE_URL ??
  basePath
).replace(/\/$/, "");

const nextConfig: NextConfig = {
  // Pins the workspace root to this project directory. Without this, Next.js
  // walks up the filesystem looking for lockfiles and can pick the wrong
  // root if a stray package-lock.json/pnpm-lock.yaml exists in a parent
  // directory (e.g. a user's home folder), which then breaks file tracing
  // for serverless output. Safe to remove if that's no longer the case in
  // your environment.
  outputFileTracingRoot: path.join(__dirname),
  poweredByHeader: false,
  // Hosted as a static site on GitHub Pages — there's no Node server to run
  // Next's Image Optimization API or dynamic API routes, so both are
  // disabled/avoided in favor of static-export-compatible equivalents.
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  ...(basePath ? { basePath } : {}),
  ...(assetPrefix ? { assetPrefix } : {}),
};

export default nextConfig;
