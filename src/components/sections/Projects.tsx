"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { LayoutGrid, SearchX } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProjectCard } from "@/components/sections/ProjectCard";
import { projects } from "@/config/projects";
import type { ProjectTag } from "@/types";
import { cn } from "@/lib/utils";

const FILTERS: ProjectTag[] = [
  "Manual Testing",
  "Automation",
  "Playwright",
  "Selenium",
  "API",
  "SQL",
  "AI Testing",
];

export function Projects() {
  const [activeFilter, setActiveFilter] = useState<ProjectTag | "all">("all");

  const filteredProjects = useMemo(
    () =>
      activeFilter === "all"
        ? projects
        : projects.filter((project) => project.tags.includes(activeFilter)),
    [activeFilter],
  );

  return (
    <section id="projects" className="relative py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="Projects"
          title="Quality work, in practice"
          description="Case studies from enterprise QA delivery and personal automation projects. Filter by discipline to see relevant work."
        />

        <div className="mt-10 flex flex-wrap items-center justify-center gap-2.5 lg:justify-start">
          <button
            type="button"
            onClick={() => setActiveFilter("all")}
            className={cn(
              "focus-ring inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-colors duration-300",
              activeFilter === "all"
                ? "glass-strong text-foreground"
                : "glass text-foreground-muted hover:text-foreground",
            )}
          >
            <LayoutGrid className="h-3.5 w-3.5" aria-hidden="true" />
            All
          </button>

          {FILTERS.map((filter) => (
            <button
              key={filter}
              type="button"
              onClick={() => setActiveFilter(filter)}
              aria-pressed={activeFilter === filter}
              className={cn(
                "focus-ring inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-colors duration-300",
                activeFilter === filter
                  ? "glass-strong text-foreground"
                  : "glass text-foreground-muted hover:text-foreground",
              )}
            >
              {filter}
            </button>
          ))}
        </div>

        <motion.div layout className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            className="glass mt-10 flex flex-col items-center gap-3 rounded-2xl p-12 text-center"
          >
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-surface/[0.08] text-accent-secondary">
              <SearchX className="h-5 w-5" aria-hidden="true" />
            </span>
            <p className="text-sm font-medium text-foreground">
              No projects tagged &ldquo;{activeFilter}&rdquo; yet
            </p>
            <p className="max-w-sm text-xs leading-5 text-foreground-muted">
              This is on the roadmap — new projects are added here as they&apos;re completed.
            </p>
          </motion.div>
        )}
      </Container>
    </section>
  );
}
