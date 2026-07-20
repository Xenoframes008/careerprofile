"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Briefcase,
  CheckCircle2,
  ChevronDown,
  MapPin,
  Trophy,
  Wrench,
} from "lucide-react";
import type { ExperienceItem } from "@/types";
import { cn } from "@/lib/utils";

interface TimelineItemProps {
  item: ExperienceItem;
  index: number;
}

function TagList({ items, tone }: { items: string[]; tone: "tech" | "tool" }) {
  return (
    <ul className="flex flex-wrap gap-2">
      {items.map((tag) => (
        <li
          key={tag}
          className={cn(
            "rounded-full px-3 py-1 text-xs font-medium",
            tone === "tech"
              ? "bg-accent/10 text-accent-secondary ring-1 ring-inset ring-accent/20"
              : "glass text-foreground-muted",
          )}
        >
          {tag}
        </li>
      ))}
    </ul>
  );
}

export function TimelineItem({ item, index }: TimelineItemProps) {
  const [isOpen, setIsOpen] = useState(index === 0);
  const panelId = `experience-panel-${index}`;

  return (
    <motion.li
      initial={{ opacity: 0, x: -24 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, ease: "easeOut", delay: (index % 5) * 0.06 }}
      className="relative pl-14 sm:pl-16"
    >
      <span
        aria-hidden="true"
        className={cn(
          "absolute top-1.5 left-[13px] flex h-4 w-4 items-center justify-center rounded-full sm:left-[17px]",
          item.current
            ? "bg-linear-to-br from-accent to-accent-secondary shadow-[0_0_0_4px_var(--background),0_0_16px_-2px_var(--accent-secondary)]"
            : "bg-background shadow-[0_0_0_4px_var(--background)] ring-2 ring-border-strong",
        )}
      >
        {item.current && (
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-secondary opacity-60" />
        )}
      </span>

      <div className="glass overflow-hidden rounded-2xl transition-colors duration-300 hover:border-border-strong">
        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-expanded={isOpen}
          aria-controls={panelId}
          className="focus-ring flex w-full flex-col gap-3 p-5 text-left sm:flex-row sm:items-center sm:justify-between sm:gap-4 sm:p-6"
        >
          <div className="min-w-0">
            <div className="flex flex-wrap items-center gap-2">
              <h3 className="text-base font-semibold text-foreground sm:text-lg">
                {item.role}
              </h3>
              {item.current && (
                <span className="rounded-full bg-accent/15 px-2.5 py-0.5 text-[11px] font-semibold tracking-wide text-accent-secondary">
                  CURRENT
                </span>
              )}
            </div>
            <div className="mt-1.5 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-foreground-muted">
              <span className="inline-flex items-center gap-1.5 font-medium text-foreground">
                <Briefcase className="h-3.5 w-3.5 text-accent-secondary" aria-hidden="true" />
                {item.company}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
                {item.location}
              </span>
            </div>
          </div>

          <div className="flex items-center justify-between gap-3 sm:flex-col sm:items-end sm:justify-normal sm:gap-2">
            <span className="font-mono text-xs text-foreground-muted sm:text-sm">
              {item.startDate} — {item.endDate}
            </span>
            <motion.span
              animate={{ rotate: isOpen ? 180 : 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-surface/[0.06] text-foreground-muted"
            >
              <ChevronDown className="h-4 w-4" aria-hidden="true" />
            </motion.span>
          </div>
        </button>

        <AnimatePresence initial={false}>
          {isOpen && (
            <motion.div
              key="content"
              id={panelId}
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.35, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <div className="grid gap-6 border-t border-border p-5 sm:p-6 lg:grid-cols-2">
                <div>
                  <h4 className="flex items-center gap-2 text-sm font-semibold text-foreground">
                    <CheckCircle2 className="h-4 w-4 text-accent-secondary" aria-hidden="true" />
                    Responsibilities
                  </h4>
                  <ul className="mt-3 space-y-2.5">
                    {item.responsibilities.map((responsibility) => (
                      <li
                        key={responsibility}
                        className="flex gap-2.5 text-sm leading-6 text-foreground-muted"
                      >
                        <span
                          className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent-secondary"
                          aria-hidden="true"
                        />
                        {responsibility}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="flex items-center gap-2 text-sm font-semibold text-foreground">
                    <Trophy className="h-4 w-4 text-accent-secondary" aria-hidden="true" />
                    Achievements
                  </h4>
                  <ul className="mt-3 space-y-2.5">
                    {item.achievements.map((achievement) => (
                      <li
                        key={achievement}
                        className="flex gap-2.5 text-sm leading-6 text-foreground-muted"
                      >
                        <span
                          className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent"
                          aria-hidden="true"
                        />
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-foreground">
                    Technologies
                  </h4>
                  <div className="mt-3">
                    <TagList items={item.technologies} tone="tech" />
                  </div>
                </div>

                <div>
                  <h4 className="flex items-center gap-2 text-sm font-semibold text-foreground">
                    <Wrench className="h-4 w-4 text-accent-secondary" aria-hidden="true" />
                    Tools Used
                  </h4>
                  <div className="mt-3">
                    <TagList items={item.tools} tone="tool" />
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.li>
  );
}
