import type { MetadataRoute } from "next";
import fs from "node:fs";
import path from "node:path";
import { libraryItems } from "@/lib/libraryItems";

const SITE_URL = "https://www.transforminglandscapes.ca";

const scopeSlugs = [
  "indigenous-land-and-development",
  "international-indigenous-led-development",
  "leadership-voices-in-indigenous-real-estate",
  "truth-reconciliation-real-estate",
];

const NOW = new Date();

function clampToPast(date: Date): Date {
  return date.getTime() > NOW.getTime() ? NOW : date;
}

function fileMtime(relativePath: string): Date {
  try {
    const stat = fs.statSync(path.join(process.cwd(), relativePath));
    return clampToPast(stat.mtime);
  } catch {
    return NOW;
  }
}

function parseArticleDate(date: string | undefined): Date | undefined {
  if (!date) return undefined;
  const parsed = new Date(date);
  if (!Number.isNaN(parsed.getTime())) return parsed;
  const match = date.match(/^([A-Za-z]+)\s+(\d{4})$/);
  if (match) {
    const fallback = new Date(`${match[1]} 1, ${match[2]}`);
    if (!Number.isNaN(fallback.getTime())) return fallback;
  }
  return undefined;
}

const libraryItemsMtime = fileMtime("lib/libraryItems.ts");

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: `${SITE_URL}/`,
      lastModified: fileMtime("app/page.tsx"),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${SITE_URL}/about`,
      lastModified: fileMtime("app/about/page.tsx"),
      changeFrequency: "yearly",
      priority: 0.6,
    },
    {
      url: `${SITE_URL}/contact`,
      lastModified: fileMtime("app/contact/page.tsx"),
      changeFrequency: "yearly",
      priority: 0.5,
    },
    {
      url: `${SITE_URL}/library`,
      lastModified: clampToPast(
        new Date(
          Math.max(
            fileMtime("app/library/page.tsx").getTime(),
            libraryItemsMtime.getTime(),
          ),
        ),
      ),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/library/executive-summary`,
      lastModified: fileMtime("app/library/executive-summary/page.tsx"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];

  const scopeRoutes: MetadataRoute.Sitemap = scopeSlugs.map((slug) => ({
    url: `${SITE_URL}/scope/${slug}`,
    lastModified: fileMtime(`app/scope/${slug}/page.tsx`),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const articleRoutes: MetadataRoute.Sitemap = libraryItems.map((item) => {
    const articleDate = parseArticleDate(item.date);
    const lastModified = articleDate
      ? clampToPast(
          new Date(
            Math.max(articleDate.getTime(), libraryItemsMtime.getTime()),
          ),
        )
      : libraryItemsMtime;
    return {
      url: `${SITE_URL}/library/${item.slug}`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    };
  });

  return [...staticRoutes, ...scopeRoutes, ...articleRoutes];
}
