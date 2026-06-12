import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";
import { solutions } from "@/lib/data/solutions";
import { moduleSlugs } from "@/lib/data/modules";
import { serviceSlugs } from "@/lib/data/services";
import { getPublishedSlugs } from "@/lib/blog";

export const dynamic = "force-static";

// Routes map to /path/ (trailingSlash: true). List final URLs to avoid 308s.
function url(path: string) {
  if (path === "/") return `${siteConfig.url}/`;
  return `${siteConfig.url}${path}/`;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticPaths = [
    "/",
    "/solutions",
    "/ai-agents",
    "/integrations/whatsapp-crm",
    "/integrations/facebook-ads",
    "/services",
    "/blog",
    "/about",
    "/contact",
    "/privacy",
    "/terms",
  ];

  const solutionPaths = solutions.map((s) => `/solutions/${s.slug}`);
  const modulePaths = moduleSlugs.map((m) => `/products/${m}`);
  const servicePaths = serviceSlugs.map((s) => `/services/${s}`);
  const blogPaths = getPublishedSlugs().map((slug) => `/blog/${slug}`);

  const entries: MetadataRoute.Sitemap = [
    ...staticPaths.map((p) => ({
      url: url(p),
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: p === "/" ? 1.0 : 0.8,
    })),
    ...solutionPaths.map((p) => ({
      url: url(p),
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    ...modulePaths.map((p) => ({
      url: url(p),
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
    ...servicePaths.map((p) => ({
      url: url(p),
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
    ...blogPaths.map((p) => ({
      url: url(p),
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
  ];

  return entries;
}
