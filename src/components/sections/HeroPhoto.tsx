"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { ShieldCheck, TestTube2 } from "lucide-react";
import { FloatingBadge } from "@/components/ui/FloatingBadge";
import { siteConfig } from "@/config/site";

export function HeroPhoto() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      initial={{ scale: 0.94 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
      className="relative mx-auto w-full max-w-[300px] sm:max-w-[360px] lg:mx-0"
    >
      <div
        aria-hidden="true"
        className="animate-glow absolute -inset-6 -z-10 rounded-[2.5rem] bg-linear-to-br from-accent/40 via-accent-secondary/20 to-transparent blur-2xl"
      />

      <motion.div
        animate={
          prefersReducedMotion ? undefined : { y: [0, -8, 0] }
        }
        transition={
          prefersReducedMotion
            ? undefined
            : { duration: 6, repeat: Infinity, ease: "easeInOut" }
        }
        className="glass-strong relative aspect-square overflow-hidden rounded-[2rem]"
      >
        <Image
          src="/profile.jpg"
          alt={`${siteConfig.name} — ${siteConfig.role}`}
          fill
          priority
          sizes="(min-width: 1024px) 360px, 300px"
          className="object-cover object-top"
        />
        <div className="absolute inset-0 bg-linear-to-t from-background/40 via-transparent to-transparent" />

        <div className="absolute inset-0 rounded-[2rem] ring-1 ring-inset ring-border-strong" />
      </motion.div>

      <FloatingBadge
        icon={ShieldCheck}
        label="ISTQB® Certified"
        sublabel="CTFL 4.0"
        duration={5}
        delay={0.6}
        className="-top-4 -right-4 sm:-right-8"
      />

      <FloatingBadge
        icon={TestTube2}
        label="5+ Years"
        sublabel="Test Automation"
        duration={4.5}
        delay={0.9}
        className="-bottom-5 -left-4 sm:-left-8"
      />

      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1.1 }}
        className="glass-strong absolute top-1/2 right-0 flex -translate-y-1/2 translate-x-[35%] items-center gap-2 rounded-full px-3 py-1.5 sm:translate-x-[45%]"
      >
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
        </span>
        <span className="text-[11px] font-medium text-foreground-muted">
          Open to work
        </span>
      </motion.div>
    </motion.div>
  );
}
