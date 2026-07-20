import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import type { ProficiencyLevel } from "@/types";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/** Prefix a root-absolute path with the GitHub Pages project base path when set. */
export function withBasePath(path: string) {
  const base = (process.env.NEXT_PUBLIC_BASE_PATH ?? "").replace(/\/$/, "");
  if (!path.startsWith("/") || path.startsWith("//") || path.startsWith("http")) {
    return path;
  }
  return `${base}${path}`;
}

const PROFICIENCY_LABELS: Record<ProficiencyLevel, string> = {
  1: "Beginner",
  2: "Familiar",
  3: "Proficient",
  4: "Advanced",
  5: "Expert",
};

export function proficiencyLabel(level: ProficiencyLevel) {
  return PROFICIENCY_LABELS[level];
}
