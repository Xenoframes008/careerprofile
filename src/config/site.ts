import type { NavItem, SocialLink } from "@/types";

export const siteConfig = {
  name: "Atanu Samadder",
  role: "Senior Software Quality Assurance Analyst",
  location: "Dublin, Ireland",
  company: "Expleo Group",
  tagline: "Building confidence in software, one test at a time.",
  description:
    "Portfolio of Atanu Samadder, a Senior Software Quality Assurance Analyst and Acting QA Lead based in Dublin, Ireland, specializing in test automation, manual & exploratory testing, and quality-first software delivery.",
  /** Hero-only copy — kept short so recruiters grasp value in ~5 seconds. */
  hero: {
    title: "Senior Software Quality Assurance Analyst",
    subtitle: "Acting QA Lead · Current Client Engagement",
    headline: "5+ years delivering enterprise software quality — currently leading QA on a client programme.",
    specialties: [
      "Manual Testing",
      "Test Automation",
      "SQL Validation",
      "REST API Testing",
      "Playwright",
      "ISTQB Certified",
    ],
  },
  // Overridable via NEXT_PUBLIC_SITE_URL so preview/staging deployments
  // (e.g. on Vercel) generate correct canonical URLs, OG images and JSON-LD
  // without a code change — falls back to the production domain.
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://atanusamadder.dev",
  ogImage: "/opengraph-image",
  resumeUrl: "/resume.pdf",
  keywords: [
    "Atanu Samadder",
    "Senior Software Quality Assurance Analyst Dublin",
    "QA Analyst Ireland",
    "Acting QA Lead",
    "Software Test Analyst",
    "Manual Tester",
    "Automation Tester",
    "Playwright Tester",
    "Selenium Tester",
    "ISTQB Certified",
    "Software Testing Portfolio",
    "QA Automation Analyst",
    "Test Automation",
    "Manual Testing",
    "API Testing",
    "SQL Testing",
    "Quality Assurance Portfolio",
  ],
  author: {
    name: "Atanu Samadder",
    email: "atanu.samadder008@outlook.com",
  },
  links: {
    github: "https://github.com/Xenoframes008",
    linkedin: "https://www.linkedin.com/in/atanusamadder2022/",
    email: "mailto:atanu.samadder008@outlook.com",
  },
} as const;

export const navItems: NavItem[] = [
  { label: "About", href: "/#about" },
  { label: "Skills", href: "/#skills" },
  { label: "Experience", href: "/#experience" },
  { label: "Certifications", href: "/#certifications" },
  { label: "Projects", href: "/#projects" },
  { label: "Why Hire Me", href: "/#why-hire-me" },
  { label: "Contact", href: "/#contact" },
];

export const socialLinks: SocialLink[] = [
  { label: "GitHub", href: siteConfig.links.github, icon: "github" },
  { label: "LinkedIn", href: siteConfig.links.linkedin, icon: "linkedin" },
  { label: "Email", href: siteConfig.links.email, icon: "mail" },
];
