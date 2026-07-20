"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

/**
 * A slim top-of-viewport bar that sweeps in on first load, evoking the
 * "page is loading" feel of premium sites (Linear, Vercel) without a
 * blocking splash screen — it never covers content, so it can't delay LCP.
 */
export function TopProgressBar() {
  const [stage, setStage] = useState<"filling" | "done">("filling");
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const timer = setTimeout(() => setStage("done"), 550);
    return () => clearTimeout(timer);
  }, []);

  if (prefersReducedMotion) return null;

  return (
    <motion.div
      aria-hidden="true"
      className="fixed inset-x-0 top-0 z-[200] h-[3px] origin-left bg-linear-to-r from-accent via-accent-secondary to-accent"
      initial={{ scaleX: 0, opacity: 1 }}
      animate={
        stage === "filling"
          ? { scaleX: 0.75, opacity: 1 }
          : { scaleX: 1, opacity: 0 }
      }
      transition={
        stage === "filling"
          ? { duration: 0.6, ease: "easeOut" }
          : { duration: 0.35, ease: "easeIn" }
      }
    />
  );
}
