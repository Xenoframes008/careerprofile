import { siteConfig, navItems } from "@/config/site";

const PERSON_ID = `${siteConfig.url}/#person`;
const WEBSITE_ID = `${siteConfig.url}/#website`;

export function getPersonJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": PERSON_ID,
    name: siteConfig.name,
    url: siteConfig.url,
    image: `${siteConfig.url}/profile.jpg`,
    jobTitle: siteConfig.role,
    description: siteConfig.description,
    email: siteConfig.author.email,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Dublin",
      addressCountry: "IE",
    },
    worksFor: {
      "@type": "Organization",
      name: siteConfig.company,
    },
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "National College of Ireland",
    },
    hasCredential: {
      "@type": "EducationalOccupationalCredential",
      name: "ISTQB® Certified Tester — Foundation Level (CTFL) 4.0",
      credentialCategory: "certification",
    },
    knowsAbout: [
      "Software Quality Assurance",
      "Manual Testing",
      "Test Automation",
      "Playwright",
      "Selenium WebDriver",
      "API Testing",
      "SQL Testing",
      "Regression Testing",
      "Agile Testing",
    ],
    sameAs: [siteConfig.links.linkedin, siteConfig.links.github],
  };
}

export function getWebsiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    url: siteConfig.url,
    name: `${siteConfig.name} | ${siteConfig.role}`,
    description: siteConfig.description,
    inLanguage: "en-IE",
    publisher: { "@id": PERSON_ID },
  };
}

export function getProfilePageJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    "@id": `${siteConfig.url}/#profilepage`,
    url: siteConfig.url,
    name: `${siteConfig.name} | ${siteConfig.role}`,
    isPartOf: { "@id": WEBSITE_ID },
    about: { "@id": PERSON_ID },
    mainEntity: { "@id": PERSON_ID },
  };
}

export function getBreadcrumbJsonLd() {
  const items = [{ name: "Home", href: "/" }, ...navItems.map((item) => ({ name: item.label, href: item.href }))];

  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${siteConfig.url}${item.href === "/" ? "" : item.href}`,
    })),
  };
}
