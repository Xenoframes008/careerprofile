import { FolderGit2, Lock, Rocket, type LucideIcon } from "lucide-react";
import type { ProjectStatus } from "@/types";
import { cn } from "@/lib/utils";

const STATUS_STYLES: Record<ProjectStatus, { icon: LucideIcon; label: string }> = {
  "Public Repo": { icon: FolderGit2, label: "Public Repo" },
  "In Progress": { icon: Rocket, label: "In Progress" },
  "Internal / Confidential": { icon: Lock, label: "Internal / Confidential" },
};

interface ProjectThumbnailProps {
  title: string;
  status: ProjectStatus;
  className?: string;
}

export function ProjectThumbnail({ title, status, className }: ProjectThumbnailProps) {
  const StatusIcon = STATUS_STYLES[status].icon;

  return (
    <div
      className={cn(
        "bg-grid relative isolate aspect-video overflow-hidden rounded-2xl border border-border-strong bg-background-secondary",
        className,
      )}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-16 -right-10 h-48 w-48 rounded-full bg-accent/25 blur-3xl transition-transform duration-500 group-hover:scale-125"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-16 -left-10 h-48 w-48 rounded-full bg-accent-secondary/20 blur-3xl transition-transform duration-500 group-hover:scale-125"
      />

      <span className="glass absolute top-3 left-3 inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[11px] font-medium text-foreground-muted">
        <StatusIcon className="h-3 w-3" aria-hidden="true" />
        {STATUS_STYLES[status].label}
      </span>

      <div className="relative flex h-full items-center justify-center p-6">
        <p
          aria-hidden="true"
          className="text-gradient max-w-[85%] text-center text-lg font-bold tracking-tight transition-transform duration-500 group-hover:scale-105 sm:text-xl"
        >
          {title}
        </p>
      </div>
    </div>
  );
}
