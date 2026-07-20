import {
  BookOpen,
  Bot,
  Bug,
  ClipboardList,
  Code2,
  Database,
  Gamepad2,
  GraduationCap,
  Handshake,
  MessagesSquare,
  RefreshCcw,
  Rocket,
  ShieldCheck,
  Sparkles,
  Target,
  Users,
  Workflow,
  type LucideIcon,
} from "lucide-react";

export interface AboutCardData {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const professionalSummary =
  "With over five years in software quality assurance, I've built my career at the intersection of meticulous testing and pragmatic engineering. I currently lead QA delivery for an enterprise Workforce Management platform at Expleo, coordinating release readiness across two international markets. My path started in game testing at Ubisoft — where I learned that quality means protecting the player's experience — and has since grown into enterprise-grade functional, regression and API testing, backed by SQL validation and Python/AI-assisted automation tooling. I'm ISTQB® Certified and based in Dublin, Ireland, where I continue to mentor QA engineers and champion testing as a craft, not a checkbox.";

export const careerHighlights: AboutCardData[] = [
  {
    icon: Rocket,
    title: "QA Lead, Workforce Management Programme",
    description:
      "Leading end-to-end test strategy, release planning and deployment verification for an enterprise WFM platform across two international markets.",
  },
  {
    icon: ShieldCheck,
    title: "ISTQB® Certified Tester (CTFL) 4.0",
    description:
      "Certified in 2024, reinforcing a structured, standards-based approach to test design, coverage and quality process.",
  },
  {
    icon: Gamepad2,
    title: "From Game QA to Enterprise QA",
    description:
      "Started at Ubisoft testing PC and console titles, then carried that rigour into enterprise software quality at Accenture and Expleo.",
  },
  {
    icon: Bot,
    title: "AI-Assisted QA Automation",
    description:
      "Designed a Python-based utility that uses AI to automate repetitive QA workflows, cutting manual test-prep effort.",
  },
  {
    icon: Users,
    title: "Mentors Junior QA Engineers",
    description:
      "Reviews test cases and provides technical guidance to junior testers as part of day-to-day delivery.",
  },
  {
    icon: GraduationCap,
    title: "MSc in Cybersecurity",
    description:
      "National College of Ireland — a security-conscious lens applied to everyday software quality decisions.",
  },
];

export const strengths: AboutCardData[] = [
  {
    icon: ClipboardList,
    title: "Test Strategy & Planning",
    description:
      "Owns estimation, planning and coverage across functional, integration and regression testing.",
  },
  {
    icon: Database,
    title: "SQL & API Validation",
    description:
      "Backend verification using Teradata, Oracle SQL Developer, SSMS and Postman to prove test results at the data layer.",
  },
  {
    icon: Bug,
    title: "Defect Triage & Root Cause Analysis",
    description:
      "Facilitates triage, prioritises business-critical defects, and drives issues to resolution with development teams.",
  },
  {
    icon: MessagesSquare,
    title: "Cross-Functional Communication",
    description:
      "Coordinates BAs, developers, product owners and stakeholders to keep delivery milestones on track.",
  },
  {
    icon: Workflow,
    title: "Agile & Waterfall Delivery",
    description:
      "Comfortable adapting test process and cadence to Agile sprints or structured Waterfall releases.",
  },
  {
    icon: Target,
    title: "Attention to Detail",
    description:
      "An analytical, detail-driven approach that catches the edge cases before customers ever see them.",
  },
];

export const workPhilosophy: AboutCardData[] = [
  {
    icon: Handshake,
    title: "Quality is a team sport",
    description:
      "I work alongside BAs, developers and product owners from day one — testing works best as collaboration, not a gate at the end.",
  },
  {
    icon: Sparkles,
    title: "Automate the repeatable, think through the risky",
    description:
      "Automation and AI-assisted tooling handle the repetitive checks, freeing up human judgment for the edge cases that matter.",
  },
  {
    icon: RefreshCcw,
    title: "Every defect is a learning loop",
    description:
      "Root cause analysis matters as much as the fix — understanding why something broke helps prevent it from breaking again.",
  },
];

export const personalInterests: AboutCardData[] = [
  {
    icon: Code2,
    title: "Building Automation Frameworks",
    description:
      "Currently building a personal Selenium + Cucumber (Java) framework with the Page Object Model, just to keep automation skills sharp.",
  },
  {
    icon: Bot,
    title: "AI-Assisted Engineering",
    description:
      "Exploring how AI copilots can speed up test case generation, scripting and everyday QA workflows.",
  },
  {
    icon: Gamepad2,
    title: "Gaming, from the Other Side of the Screen",
    description:
      "A former game tester who still plays with a critical eye — narrative-driven titles like The Witcher 3 remain a favourite.",
  },
  {
    icon: BookOpen,
    title: "Continuous Learning",
    description:
      "Recently completed an MBA alongside full-time QA leadership — a firm believer that learning never really stops.",
  },
];
