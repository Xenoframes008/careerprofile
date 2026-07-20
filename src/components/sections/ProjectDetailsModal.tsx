"use client";

import { BarChart3, FileCheck2, Github, Sparkles, Target, Trophy } from "lucide-react";
import { Modal } from "@/components/ui/Modal";
import { ProjectThumbnail } from "@/components/ui/ProjectThumbnail";
import type { Project } from "@/types";

interface ProjectDetailsModalProps {
  project: Project;
  isOpen: boolean;
  onClose: () => void;
  titleId: string;
}

const PREVIEW_TILES = [
  { icon: BarChart3, label: "Reporting & Metrics" },
  { icon: FileCheck2, label: "Test Execution" },
];

export function ProjectDetailsModal({
  project,
  isOpen,
  onClose,
  titleId,
}: ProjectDetailsModalProps) {
  return (
    <Modal isOpen={isOpen} onClose={onClose} labelledBy={titleId} className="max-w-3xl">
      <ProjectThumbnail title={project.title} status={project.status} />

      <h3 id={titleId} className="mt-6 text-xl font-semibold text-foreground">
        {project.title}
      </h3>
      <p className="mt-1 text-sm text-foreground-muted">{project.tagline}</p>

      <div className="mt-6 grid gap-6 sm:grid-cols-2">
        <div>
          <h4 className="flex items-center gap-2 text-sm font-semibold text-foreground">
            <Target className="h-4 w-4 text-accent-secondary" aria-hidden="true" />
            Problem
          </h4>
          <p className="mt-2 text-sm leading-6 text-foreground-muted">{project.problem}</p>
        </div>
        <div>
          <h4 className="flex items-center gap-2 text-sm font-semibold text-foreground">
            <Sparkles className="h-4 w-4 text-accent-secondary" aria-hidden="true" />
            Solution
          </h4>
          <p className="mt-2 text-sm leading-6 text-foreground-muted">{project.solution}</p>
        </div>
      </div>

      <div className="mt-6">
        <h4 className="flex items-center gap-2 text-sm font-semibold text-foreground">
          <Trophy className="h-4 w-4 text-accent-secondary" aria-hidden="true" />
          Achievements
        </h4>
        <ul className="mt-3 space-y-2.5">
          {project.achievements.map((achievement) => (
            <li key={achievement} className="flex gap-2.5 text-sm leading-6 text-foreground-muted">
              <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" aria-hidden="true" />
              {achievement}
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-6">
        <h4 className="text-sm font-semibold text-foreground">Tech Stack</h4>
        <ul className="mt-3 flex flex-wrap gap-2">
          {project.techStack.map((tech) => (
            <li
              key={tech}
              className="rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent-secondary ring-1 ring-inset ring-accent/20"
            >
              {tech}
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-6">
        <h4 className="text-sm font-semibold text-foreground">Preview</h4>
        <div className="mt-3 grid grid-cols-2 gap-3">
          {PREVIEW_TILES.map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="bg-grid flex aspect-video flex-col items-center justify-center gap-2 rounded-xl border border-border-strong bg-background-secondary"
            >
              <Icon className="h-6 w-6 text-accent-secondary" aria-hidden="true" />
              <span className="text-xs font-medium text-foreground-muted">{label}</span>
            </div>
          ))}
        </div>
      </div>

      {(project.githubUrl || project.liveUrl) && (
        <div className="mt-7 flex flex-wrap gap-3 border-t border-border pt-6">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="focus-ring inline-flex items-center gap-2 rounded-full bg-surface/[0.08] px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-surface/[0.14]"
            >
              <Github className="h-4 w-4" aria-hidden="true" />
              GitHub
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="focus-ring inline-flex items-center gap-2 rounded-full bg-linear-to-r from-accent to-accent-secondary px-5 py-2.5 text-sm font-medium text-accent-foreground transition-transform hover:brightness-110"
            >
              Live Demo
            </a>
          )}
        </div>
      )}
    </Modal>
  );
}
