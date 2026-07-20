"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface FloatingBadgeProps {
  icon: LucideIcon;
  label: string;
  sublabel?: string;
  className?: string;
  duration?: number;
  delay?: number;
  distance?: number;
}

export function FloatingBadge({
  icon: Icon,
  label,
  sublabel,
  className,
  duration = 4,
  delay = 0,
  distance = 10,
}: FloatingBadgeProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={
        prefersReducedMotion
          ? { opacity: 1, y: 0 }
          : { opacity: 1, y: [0, -distance, 0] }
      }
      transition={
        prefersReducedMotion
          ? { duration: 0.5, delay }
          : {
              opacity: { duration: 0.5, delay },
              y: {
                duration,
                delay,
                repeat: Infinity,
                ease: "easeInOut",
              },
            }
      }
      className={cn(
        "glass-strong absolute flex items-center gap-2.5 rounded-2xl px-3.5 py-2.5 shadow-[0_12px_32px_-12px_rgba(0,0,0,0.55)]",
        className,
      )}
    >
      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-linear-to-br from-accent to-accent-secondary text-accent-foreground">
        <Icon className="h-4 w-4" aria-hidden="true" />
      </span>
      <span className="flex flex-col leading-tight">
        <span className="text-xs font-semibold text-foreground">{label}</span>
        {sublabel ? (
          <span className="text-[11px] text-foreground-muted">{sublabel}</span>
        ) : null}
      </span>
    </motion.div>
  );
}
