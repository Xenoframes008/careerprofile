"use client";

import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface IconCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  index?: number;
  className?: string;
}

export function IconCard({
  icon: Icon,
  title,
  description,
  index = 0,
  className,
}: IconCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: (index % 6) * 0.08, ease: "easeOut" }}
      className={cn(
        "glass group relative flex h-full flex-col gap-4 overflow-hidden rounded-2xl p-6 transition-colors duration-300 hover:border-border-strong",
        className,
      )}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-16 -right-16 h-32 w-32 rounded-full bg-accent/0 blur-2xl transition-colors duration-500 group-hover:bg-accent/20"
      />

      <span className="relative flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-linear-to-br from-accent to-accent-secondary text-accent-foreground shadow-[0_8px_20px_-8px_var(--accent)] transition-transform duration-300 group-hover:scale-110">
        <Icon className="h-5 w-5" aria-hidden="true" />
      </span>

      <div className="relative">
        <h3 className="text-base font-semibold text-foreground">{title}</h3>
        <p className="mt-2 text-sm leading-6 text-foreground-muted">
          {description}
        </p>
      </div>
    </motion.div>
  );
}
