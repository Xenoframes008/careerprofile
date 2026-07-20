"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

/**
 * Next.js remounts `template.tsx` on every navigation (unlike layout.tsx),
 * making it the right place for page-transition animation. Deliberately
 * transform-only (no opacity) so it never hides the Largest Contentful
 * Paint element behind a fade while hydration finishes.
 */
export default function Template({ children }: { children: ReactNode }) {
  return (
    <motion.div
      initial={{ y: 14 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}
