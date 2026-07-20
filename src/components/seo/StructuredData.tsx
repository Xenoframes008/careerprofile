import {
  getBreadcrumbJsonLd,
  getPersonJsonLd,
  getProfilePageJsonLd,
  getWebsiteJsonLd,
} from "@/lib/structuredData";

export function StructuredData() {
  const schemas = [
    getPersonJsonLd(),
    getWebsiteJsonLd(),
    getProfilePageJsonLd(),
    getBreadcrumbJsonLd(),
  ];

  return (
    <>
      {schemas.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  );
}
