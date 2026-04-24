import type { MetadataRoute } from "next";
import { posts } from "@/lib/blog";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    {
      url: site.url,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1.0,
      alternates: { languages: { "es-MX": site.url } },
    },
    {
      url: `${site.url}/blog`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    ...posts.map((p) => ({
      url: `${site.url}/blog/${p.slug}`,
      lastModified: new Date(p.dateISO),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}
