import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";

// Required for `output: "export"` — without this, Next.js treats metadata
// routes as dynamic and the static export build fails to collect page data.
export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${siteConfig.url}/sitemap.xml`,
    host: siteConfig.url,
  };
}
