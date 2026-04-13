import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://mizania.uz/sitemap.xml",
    host: "https://mizania.uz",
  };
}
