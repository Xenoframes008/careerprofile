import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  // Pins the workspace root to this project directory. Without this, Next.js
  // walks up the filesystem looking for lockfiles and can pick the wrong
  // root if a stray package-lock.json/pnpm-lock.yaml exists in a parent
  // directory (e.g. a user's home folder), which then breaks file tracing
  // for serverless output. Safe to remove if that's no longer the case in
  // your environment.
  outputFileTracingRoot: path.join(__dirname),
  poweredByHeader: false,
};

export default nextConfig;
