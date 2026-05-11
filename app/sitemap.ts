import type { MetadataRoute } from "next";
import { libraryItems } from "@/lib/libraryItems";

const SITE_URL = "https://transforminglandscapes.ca";

const scopeSlugs = [
  "indigenous-land-and-development",
  "international-indigenous-led-development",
  "leadership-voices-in-indigenous-real-estate",
  "truth-reconciliation-real-estate",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${SITE_URL}/`, lastModified: now, changeFrequency: "monthly", priority: 1 },
    { url: `${SITE_URL}/about`, lastModified: now, changeFrequency: "yearly", priority: 0.6 },
    { url: `${SITE_URL}/contact`, lastModified: now, changeFrequency: "yearly", priority: 0.5 },
    { url: `${SITE_URL}/library`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${SITE_URL}/library/executive-summary`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
  ];

  const scopeRoutes: MetadataRoute.Sitemap = scopeSlugs.map((slug) => ({
    url: `${SITE_URL}/scope/${slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const articleRoutes: MetadataRoute.Sitemap = libraryItems.map((item) => ({
    url: `${SITE_URL}/library/${item.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...staticRoutes, ...scopeRoutes, ...articleRoutes];
}
