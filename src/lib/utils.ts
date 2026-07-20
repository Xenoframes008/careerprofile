import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import type { ProficiencyLevel } from "@/types";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
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
