"use client";

import { motion } from "framer-motion";
import type { StatItem } from "@/types";

interface StatCardProps {
  stat: StatItem;
  index?: number;
}

export function StatCard({ stat, index = 0 }: StatCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: (index % 4) * 0.08, ease: "easeOut" }}
      className="glass rounded-2xl px-6 py-7 text-center"
    >
      <p className="text-gradient text-3xl font-bold tracking-tight sm:text-4xl">
        {stat.value}
      </p>
      <p className="mt-2 text-sm text-foreground-muted">{stat.label}</p>
    </motion.div>
  );
}
