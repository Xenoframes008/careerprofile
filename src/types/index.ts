import type { LucideIcon } from "lucide-react";

export interface NavItem {
  label: string;
  href: string;
}

/** Shared shape for the icon + title + description cards used across the
 * About and Why-Hire-Me sections (rendered via `IconCard`). */
export interface IconCardData {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface ContactFormValues {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface SocialLink {
  label: string;
  href: string;
  icon: "github" | "linkedin" | "mail" | "twitter";
}

export interface ExperienceItem {
  company: string;
  role: string;
  startDate: string;
  endDate: string;
  current?: boolean;
  location: string;
  responsibilities: string[];
  achievements: string[];
  technologies: string[];
  tools: string[];
}

export type ProficiencyLevel = 1 | 2 | 3 | 4 | 5;

export interface Skill {
  name: string;
  level: ProficiencyLevel;
}

export interface SkillCategoryData {
  id: string;
  title: string;
  skills: Skill[];
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  issueDate: string;
  credentialUrl?: string;
  credentialLabel?: string;
  technology: string[];
  summary: string;
}

export type ProjectTag =
  | "Manual Testing"
  | "Automation"
  | "Playwright"
  | "Selenium"
  | "API"
  | "SQL"
  | "AI Testing";

export type ProjectStatus = "Public Repo" | "In Progress" | "Internal / Confidential";

export interface Project {
  id: string;
  title: string;
  tagline: string;
  problem: string;
  solution: string;
  achievements: string[];
  techStack: string[];
  tags: ProjectTag[];
  status: ProjectStatus;
  githubUrl?: string;
  liveUrl?: string;
}

export interface StatItem {
  value: string;
  label: string;
}
