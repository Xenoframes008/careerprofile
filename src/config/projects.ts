import type { Project } from "@/types";

/**
 * Add new projects by appending an object here — the filter pills,
 * grid and details modal all render dynamically from this list.
 */
export const projects: Project[] = [
  {
    id: "ai-assisted-qa-toolkit",
    title: "AI-Assisted QA Automation Toolkit",
    tagline: "Cutting repetitive test-prep effort with AI-assisted Python tooling",
    problem:
      "Preparing test data and repetitive test-prep tasks across a large Workforce Management programme consumed significant manual QA effort every release, slowing down test cycles.",
    solution:
      "Designed and built a Python-based utility that uses AI to generate and prepare test scenarios and data, automating the repetitive parts of test preparation so the team could focus on higher-value exploratory and risk-based testing.",
    achievements: [
      "Cut manual test-prep effort across recurring release cycles.",
      "Adopted as part of the standard QA workflow for the WFM programme.",
      "Freed up QA capacity for exploratory and risk-based testing.",
    ],
    techStack: ["Python", "AI / LLM APIs", "Jira", "SQL"],
    tags: ["Automation", "AI Testing", "Manual Testing"],
    status: "Internal / Confidential",
  },
  {
    id: "api-db-validation-suite",
    title: "API & Database Validation Suite",
    tagline: "Repeatable backend verification across releases",
    problem:
      "Cross-checking API responses against underlying database state was a manual, error-prone process repeated for every regression cycle across custom development projects.",
    solution:
      "Built a reusable library of Postman collections paired with SQL validation scripts (Teradata, SSMS, Oracle SQL Developer) to verify API responses against database state consistently across releases.",
    achievements: [
      "Standardised backend verification across multiple release cycles.",
      "Reduced time spent on manual cross-checking of API and DB data.",
      "Strengthened release confidence through consistent, repeatable checks.",
    ],
    techStack: ["Postman", "SQL", "Teradata", "SSMS", "Oracle SQL Developer"],
    tags: ["API", "SQL", "Automation"],
    status: "Internal / Confidential",
  },
  {
    id: "selenium-cucumber-framework",
    title: "Personal Test Automation Framework",
    tagline: "Selenium + Cucumber (Java) with the Page Object Model",
    problem:
      "Wanted a hands-on way to keep automation skills sharp outside of day-to-day manual and enterprise QA work, with a framework built the right way from the ground up.",
    solution:
      "Building a personal end-to-end test automation framework using Selenium WebDriver and Cucumber (BDD) in Java, structured around the Page Object Model for maintainability and reuse.",
    achievements: [
      "Applies BDD-style, business-readable test scenarios with Gherkin.",
      "Maintainable page-object structure ready to extend to new test suites.",
      "Ongoing personal project, actively evolving alongside new tooling.",
    ],
    techStack: ["Java", "Selenium WebDriver", "Cucumber", "Page Object Model"],
    tags: ["Automation", "Selenium"],
    status: "In Progress",
    githubUrl: "https://github.com/atanusamadder",
  },
];
