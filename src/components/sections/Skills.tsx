"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { LayoutGrid } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SkillChip } from "@/components/ui/SkillChip";
import { skillCategories } from "@/config/skills";
import { cn } from "@/lib/utils";

export function Skills() {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const visibleCategories = useMemo(
    () =>
      activeCategory === "all"
        ? skillCategories
        : skillCategories.filter((category) => category.id === activeCategory),
    [activeCategory],
  );

  return (
    <section id="skills" className="relative py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="Skills Dashboard"
          title="Toolkit, at a glance"
          description="Filter by category to explore the tools and techniques I rely on day to day. Hover any skill to see its proficiency."
        />

        <div className="mt-10 flex flex-wrap items-center justify-center gap-2.5 lg:justify-start">
          <button
            type="button"
            onClick={() => setActiveCategory("all")}
            className={cn(
              "focus-ring inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-colors duration-300",
              activeCategory === "all"
                ? "glass-strong text-foreground"
                : "glass text-foreground-muted hover:text-foreground",
            )}
          >
            <LayoutGrid className="h-3.5 w-3.5" aria-hidden="true" />
            All
          </button>

          {skillCategories.map((category) => {
            const Icon = category.icon;
            const isActive = activeCategory === category.id;

            return (
              <button
                key={category.id}
                type="button"
                onClick={() => setActiveCategory(category.id)}
                aria-pressed={isActive}
                className={cn(
                  "focus-ring inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-colors duration-300",
                  isActive
                    ? "glass-strong text-foreground"
                    : "glass text-foreground-muted hover:text-foreground",
                )}
              >
                <Icon className="h-3.5 w-3.5" aria-hidden="true" />
                {category.title}
              </button>
            );
          })}
        </div>

        <motion.div
          layout
          className="mt-10 grid gap-6 lg:grid-cols-2"
        >
          <AnimatePresence mode="popLayout">
            {visibleCategories.map((category) => {
              const Icon = category.icon;

              return (
                <motion.div
                  key={category.id}
                  layout
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                  className={cn(
                    "glass rounded-3xl p-6 sm:p-7",
                    activeCategory === "all" && "lg:col-span-1",
                    visibleCategories.length === 1 && "lg:col-span-2",
                  )}
                >
                  <div className="flex items-center gap-3">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-linear-to-br from-accent to-accent-secondary text-accent-foreground shadow-[0_8px_20px_-8px_var(--accent)]">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <div>
                      <h3 className="text-base font-semibold text-foreground">
                        {category.title}
                      </h3>
                      <p className="text-xs text-foreground-muted">
                        {category.skills.length} skills
                      </p>
                    </div>
                  </div>

                  <div className="mt-5 flex flex-wrap gap-3">
                    {category.skills.map((skill, index) => (
                      <SkillChip key={skill.name} skill={skill} index={index} />
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </Container>
    </section>
  );
}
