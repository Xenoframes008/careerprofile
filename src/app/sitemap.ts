import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";

// Required for `output: "export"` — without this, Next.js treats metadata
// routes as dynamic and the static export build fails to collect page data.
export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteConfig.url,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
      images: [`${siteConfig.url}${siteConfig.ogImage}`],
    },
  ];
}
