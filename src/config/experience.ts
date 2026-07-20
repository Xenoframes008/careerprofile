import type { ExperienceItem } from "@/types";

export const experience: ExperienceItem[] = [
  {
    company: "Expleo Group",
    role: "Senior Software Quality Assurance Analyst — Acting QA Lead",
    startDate: "Jan 2025",
    endDate: "Present",
    current: true,
    location: "Dublin, Ireland",
    responsibilities: [
      "Coordinate end-to-end testing activities across multiple releases for an enterprise Workforce Management (WFM) programme.",
      "Own test planning, estimation, execution tracking and reporting across the full project lifecycle.",
      "Facilitate defect triage meetings, prioritising business-critical issues and driving resolution with development teams.",
      "Review business requirements to ensure complete functional, integration and regression test coverage.",
      "Manage release validation, deployment verification and post-deployment production support.",
    ],
    achievements: [
      "Led QA delivery for successful deployments into two international markets.",
      "Improved QA efficiency by introducing AI-assisted Python utilities that automate repetitive testing tasks.",
      "Mentored junior QA engineers through test case reviews and technical guidance.",
    ],
    technologies: ["SQL", "Python", "REST APIs", "Agile / Scrum"],
    tools: ["Jira", "Postman"],
  },
  {
    company: "Expleo Group",
    role: "Associate Software QA Analyst",
    startDate: "Apr 2022",
    endDate: "Jan 2025",
    location: "Dublin, Ireland",
    responsibilities: [
      "Designed and executed test plans and test cases for custom development projects in Agile environments.",
      "Performed functional, regression, integration, backend and API testing across multiple releases.",
      "Interrogated underlying databases via SQL to extract test data and validate results.",
      "Verified cloud-based implementations across Azure environments for stability and reliability.",
      "Identified, documented and tracked defects in Jira, supporting triage and resolution.",
    ],
    achievements: [
      "Contributed test metrics and QA reporting that informed release-readiness decisions.",
      "Strengthened release confidence through rigorous backend and API validation.",
    ],
    technologies: ["SQL", "Azure", "REST APIs", "Agile"],
    tools: ["Jira", "Postman", "Teradata", "SSMS", "Oracle SQL Developer"],
  },
  {
    company: "Accenture",
    role: "DevOps",
    startDate: "Dec 2021",
    endDate: "Jan 2022",
    location: "Ireland",
    responsibilities: [
      "Reviewed applications against platform guidelines and quality standards to ensure compliance.",
      "Investigated issues, applied policy decisions and handled developer appeals accurately and efficiently.",
      "Processed high volumes of requests while consistently meeting quality and productivity targets.",
    ],
    achievements: [
      "Identified process-improvement opportunities that helped strengthen compliance workflows.",
    ],
    technologies: ["Policy & Compliance Review"],
    tools: ["Internal Case Management Tools"],
  },
  {
    company: "Accenture",
    role: "Risk Agent",
    startDate: "Jun 2021",
    endDate: "Dec 2021",
    location: "Ireland",
    responsibilities: [
      "Delivered quality risk review services while consistently meeting SLA and productivity targets.",
      "Identified fraud patterns and trends, assessing risk and supporting issue resolution through detailed analysis.",
      "Assisted users with workflow and process-related queries, ensuring accuracy and timely resolution.",
    ],
    achievements: [
      "Recommended and implemented process improvements that increased efficiency and quality outcomes.",
    ],
    technologies: ["Risk & Quality Analysis"],
    tools: ["Case Management Systems"],
  },
  {
    company: "Ubisoft",
    role: "Software Tester",
    startDate: "Nov 2016",
    endDate: "Jul 2019",
    location: "Pune, India",
    responsibilities: [
      "Tested game features across development stages on PC and console titles, ensuring functionality, stability and gameplay quality.",
      "Identified, reproduced, categorised and reported gameplay, UI/UX, design and performance issues to a high standard.",
      "Executed functional, regression, smoke, sanity, ad-hoc and retesting across multiple builds and milestones.",
      "Performed build verification and crash testing, preparing stability and bug reports for development teams.",
    ],
    achievements: [
      "Delivered consistently high-quality releases within tight milestone deadlines.",
      "Provided gameplay feedback that shaped usability and quality improvements pre-launch.",
    ],
    technologies: ["Game QA", "Build Verification"],
    tools: ["Jira"],
  },
];
