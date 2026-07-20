import type { NavItem, SocialLink } from "@/types";

export const siteConfig = {
  name: "Atanu Samadder",
  role: "Senior Software QA Engineer",
  location: "Dublin, Ireland",
  company: "Expleo Group",
  tagline: "Building confidence in software, one test at a time.",
  description:
    "Portfolio of Atanu Samadder, a Senior Software QA Engineer based in Dublin, Ireland, specializing in test automation, manual & exploratory testing, and quality-first software delivery.",
  introduction:
    "I'm a Senior Software QA Engineer based in Dublin, Ireland, with 5+ years of experience delivering enterprise-grade quality across the full testing lifecycle. ISTQB® Certified, I specialize in functional & regression testing, SQL-driven data validation, defect triage, and building resilient automation frameworks with Playwright and Selenium that help teams ship with confidence.",
  roles: [
    "Software QA Engineer",
    "Test Automation Specialist",
    "ISTQB® Certified Tester",
    "Quality Advocate",
  ],
  // Overridable via NEXT_PUBLIC_SITE_URL so preview/staging deployments
  // (e.g. on Vercel) generate correct canonical URLs, OG images and JSON-LD
  // without a code change — falls back to the production domain.
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://atanusamadder.dev",
  ogImage: "/opengraph-image",
  resumeUrl: "/resume.pdf",
  keywords: [
    "Atanu Samadder",
    "Software QA Engineer Dublin",
    "QA Engineer Ireland",
    "Software Test Engineer",
    "Manual Tester",
    "Automation Tester",
    "Playwright Engineer",
    "Selenium Engineer",
    "ISTQB Certified",
    "Software Testing Portfolio",
    "QA Automation Engineer",
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
