import type { Certification } from "@/types";

/**
 * Add new certifications by appending an object to this array —
 * the Certifications section, cards and preview modal all render
 * dynamically from this list, so no component changes are needed.
 *
 * Optional fields:
 * - `credentialId` — board / personal credential number
 * - `downloadUrl` — PDF or image in `/public` (e.g. `/certificates/istqb.pdf`)
 * - `previewImage` — photo of the certificate for the large modal preview
 * - `credentialUrl` — verification / issuer link
 */
export const certifications: Certification[] = [
  {
    id: "istqb-ctfl-4",
    title: "ISTQB® Certified Tester — Foundation Level (CTFL) 4.0",
    issuer: "ISTQB® (International Software Testing Qualifications Board)",
    issueDate: "2024",
    credentialId: "CTFL 4.0",
    credentialUrl: "https://www.istqb.org/",
    credentialLabel: "Verify with issuer",
    // Drop a PDF at public/certificates/istqb-ctfl-4.pdf and uncomment:
    // downloadUrl: "/certificates/istqb-ctfl-4.pdf",
    technology: ["Test Design", "Test Management", "Risk-Based Testing", "SDLC"],
    summary:
      "Validates a standards-based foundation in software testing principles — test design techniques, static and dynamic testing, test management and the role of testing across the software development lifecycle.",
  },
];
