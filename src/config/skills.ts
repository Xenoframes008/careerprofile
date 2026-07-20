import {
  Cloud,
  ClipboardCheck,
  Cog,
  Code2,
  Database,
  Gauge,
  Plug,
  RefreshCcw,
  Wrench,
  type LucideIcon,
} from "lucide-react";
import type { SkillCategoryData } from "@/types";

export interface SkillCategory extends SkillCategoryData {
  icon: LucideIcon;
}

export const skillCategories: SkillCategory[] = [
  {
    id: "manual-testing",
    title: "Manual Testing",
    icon: ClipboardCheck,
    skills: [
      { name: "Functional Testing", level: 5 },
      { name: "Regression Testing", level: 5 },
      { name: "Test Case Design", level: 5 },
      { name: "Defect Lifecycle Management", level: 5 },
      { name: "Exploratory / Ad-hoc Testing", level: 4 },
      { name: "Smoke & Sanity Testing", level: 4 },
    ],
  },
  {
    id: "automation",
    title: "Automation",
    icon: Cog,
    skills: [
      { name: "Selenium WebDriver", level: 4 },
      { name: "Cucumber (BDD)", level: 4 },
      { name: "Page Object Model", level: 4 },
      { name: "Playwright", level: 3 },
    ],
  },
  {
    id: "api-testing",
    title: "API Testing",
    icon: Plug,
    skills: [
      { name: "Postman", level: 5 },
      { name: "REST API Validation", level: 4 },
      { name: "Backend Verification", level: 4 },
    ],
  },
  {
    id: "performance",
    title: "Performance",
    icon: Gauge,
    skills: [
      { name: "Load & Performance Testing", level: 3 },
      { name: "Build Verification & Crash Testing", level: 4 },
      { name: "Stability Testing", level: 4 },
    ],
  },
  {
    id: "sql",
    title: "SQL",
    icon: Database,
    skills: [
      { name: "SQL Querying", level: 5 },
      { name: "Oracle SQL Developer", level: 4 },
      { name: "SSMS", level: 4 },
      { name: "Teradata", level: 4 },
    ],
  },
  {
    id: "programming",
    title: "Programming",
    icon: Code2,
    skills: [
      { name: "Java", level: 3 },
      { name: "Python", level: 3 },
      { name: "TypeScript", level: 2 },
      { name: "HTML / CSS", level: 2 },
    ],
  },
  {
    id: "cloud",
    title: "Cloud",
    icon: Cloud,
    skills: [
      { name: "Microsoft Azure", level: 3 },
      { name: "Cloud Environment Validation", level: 3 },
    ],
  },
  {
    id: "agile",
    title: "Agile",
    icon: RefreshCcw,
    skills: [
      { name: "Agile / Scrum", level: 5 },
      { name: "Waterfall Delivery", level: 4 },
      { name: "Sprint & Release Planning", level: 4 },
      { name: "Cross-Functional Collaboration", level: 5 },
    ],
  },
  {
    id: "tools",
    title: "Tools",
    icon: Wrench,
    skills: [
      { name: "Jira", level: 5 },
      { name: "Postman", level: 5 },
      { name: "GitHub", level: 3 },
      { name: "Git", level: 3 },
    ],
  },
];
