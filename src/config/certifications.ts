import type { Certification } from "@/types";

/**
 * Add new certifications by appending an object to this array —
 * the Certifications section, cards and preview modal all render
 * dynamically from this list, so no component changes are needed.
 */
export const certifications: Certification[] = [
  {
    id: "istqb-ctfl-4",
    title: "ISTQB® Certified Tester — Foundation Level (CTFL) 4.0",
    issuer: "ISTQB® (International Software Testing Qualifications Board)",
    issueDate: "2024",
    credentialUrl: "https://www.istqb.org/",
    credentialLabel: "View issuing body",
    technology: ["Test Design", "Test Management", "Risk-Based Testing", "SDLC"],
    summary:
      "Validates a standards-based foundation in software testing principles — test design techniques, static and dynamic testing, test management and the role of testing across the software development lifecycle.",
  },
];
