import type { MetadataRoute } from "next";
import { getAllCourseSlugs, CATALOG_UPDATED } from "@/lib/courses";

export default function sitemap(): MetadataRoute.Sitemap {
  const base: MetadataRoute.Sitemap = [
    {
      url: "https://atomcode.dev",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: "https://atomcode.dev/courses",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
  ];

  const courseEntries: MetadataRoute.Sitemap = getAllCourseSlugs().map(
    (slug) => ({
      url: `https://atomcode.dev/courses/${slug}`,
      lastModified: new Date(CATALOG_UPDATED),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })
  );

  return [...base, ...courseEntries];
}
