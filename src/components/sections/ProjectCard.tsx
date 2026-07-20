"use client";

import { useId, useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Github, Layers } from "lucide-react";
import { ProjectThumbnail } from "@/components/ui/ProjectThumbnail";
import { ProjectDetailsModal } from "@/components/sections/ProjectDetailsModal";
import type { Project } from "@/types";

interface ProjectCardProps {
  project: Project;
  index?: number;
}

export function ProjectCard({ project, index = 0 }: ProjectCardProps) {
  const [isOpen, setIsOpen] = useState(false);
  const titleId = useId();

  return (
    <>
      <motion.div
        layout
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -12 }}
        whileHover={{ y: -6 }}
        transition={{ duration: 0.4, delay: (index % 6) * 0.06, ease: "easeOut" }}
        className="glass group flex h-full flex-col overflow-hidden rounded-2xl transition-colors duration-300 hover:border-border-strong"
      >
        <div className="p-4 pb-0 sm:p-5 sm:pb-0">
          <ProjectThumbnail title={project.title} status={project.status} />
        </div>

        <div className="flex flex-1 flex-col gap-4 p-5 sm:p-6">
          <div>
            <h3 className="text-base font-semibold text-foreground">{project.title}</h3>
            <p className="mt-1.5 text-sm leading-6 text-foreground-muted">
              {project.tagline}
            </p>
          </div>

          <ul className="flex flex-wrap gap-2">
            {project.techStack.slice(0, 4).map((tech) => (
              <li
                key={tech}
                className="rounded-full bg-accent/10 px-2.5 py-1 text-xs font-medium text-accent-secondary ring-1 ring-inset ring-accent/20"
              >
                {tech}
              </li>
            ))}
            {project.techStack.length > 4 && (
              <li className="rounded-full px-2.5 py-1 text-xs font-medium text-foreground-muted">
                +{project.techStack.length - 4} more
              </li>
            )}
          </ul>

          <div className="mt-auto flex items-center gap-2 pt-1">
            <button
              type="button"
              onClick={() => setIsOpen(true)}
              className="focus-ring inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-surface/[0.08] px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-surface/[0.14]"
            >
              <Layers className="h-4 w-4" aria-hidden="true" />
              View Details
            </button>

            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub repository"
                className="focus-ring flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-foreground-muted transition-colors hover:text-foreground"
              >
                <Github className="h-4 w-4" aria-hidden="true" />
              </a>
            )}

            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Live demo"
                className="focus-ring flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-foreground-muted transition-colors hover:text-foreground"
              >
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </a>
            )}
          </div>
        </div>
      </motion.div>

      <ProjectDetailsModal
        project={project}
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        titleId={titleId}
      />
    </>
  );
}
