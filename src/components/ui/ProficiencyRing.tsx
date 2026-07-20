"use client";

import { useId } from "react";
import { motion } from "framer-motion";
import type { ProficiencyLevel } from "@/types";

const LABELS: Record<ProficiencyLevel, string> = {
  1: "Beginner",
  2: "Familiar",
  3: "Proficient",
  4: "Advanced",
  5: "Expert",
};

interface ProficiencyRingProps {
  level: ProficiencyLevel;
  size?: number;
  delay?: number;
}

export function proficiencyLabel(level: ProficiencyLevel) {
  return LABELS[level];
}

export function ProficiencyRing({ level, size = 26, delay = 0 }: ProficiencyRingProps) {
  const gradientId = useId();
  const radius = 15;
  const circumference = 2 * Math.PI * radius;

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 36 36"
      className="-rotate-90 shrink-0"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="var(--accent)" />
          <stop offset="100%" stopColor="var(--accent-secondary)" />
        </linearGradient>
      </defs>
      <circle
        cx="18"
        cy="18"
        r={radius}
        fill="none"
        stroke="var(--border-strong)"
        strokeWidth="3.5"
      />
      <motion.circle
        cx="18"
        cy="18"
        r={radius}
        fill="none"
        stroke={`url(#${gradientId})`}
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeDasharray={circumference}
        initial={{ strokeDashoffset: circumference }}
        whileInView={{ strokeDashoffset: circumference * (1 - level / 5) }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, ease: "easeOut", delay }}
      />
    </svg>
  );
}
