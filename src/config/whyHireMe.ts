import {
  Compass,
  Lightbulb,
  MessageSquare,
  ScanSearch,
  ShieldCheck,
  Sparkles,
  TrendingUp,
} from "lucide-react";
import type { IconCardData, StatItem } from "@/types";

export const recruiterTraits: IconCardData[] = [
  {
    icon: ScanSearch,
    title: "Attention to Detail",
    description:
      "Catches the edge cases and inconsistencies that get missed under deadline pressure — before customers ever see them.",
  },
  {
    icon: TrendingUp,
    title: "Analytical Thinking",
    description:
      "Breaks down complex requirements and data into clear, testable scenarios, backed by SQL-driven validation.",
  },
  {
    icon: Sparkles,
    title: "Automation Mindset",
    description:
      "Automates the repeatable so human judgement can focus on the risky, high-impact areas that actually need it.",
  },
  {
    icon: MessageSquare,
    title: "Communication",
    description:
      "Translates technical defects into business impact for BAs, developers and stakeholders — no jargon lost in translation.",
  },
  {
    icon: Lightbulb,
    title: "Problem Solving",
    description:
      "Gets to root cause, not just the symptom — treating every defect as a learning loop that prevents the next one.",
  },
  {
    icon: ShieldCheck,
    title: "Quality First",
    description:
      "ISTQB®-grounded rigor applied consistently across functional, regression, integration and release validation.",
  },
  {
    icon: Compass,
    title: "Testing Strategy",
    description:
      "Owns estimation, planning and coverage end-to-end — from test design through release sign-off and beyond.",
  },
];

export const recruiterStats: StatItem[] = [
  { value: "5+", label: "Years in Software QA" },
  { value: "2", label: "International Markets Led" },
  { value: "9", label: "Testing & QA Specializations" },
  { value: "ISTQB®", label: "Certified Tester (CTFL 4.0)" },
];
