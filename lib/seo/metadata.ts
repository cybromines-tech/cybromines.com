import type { Metadata } from "next";
import { siteConfig, absoluteUrl, pageUrl } from "@/lib/site";

interface PageMetaInput {
  title: string;
  /** Bypass the "%s | Cybromines" template (e.g. the home page). */
  titleAbsolute?: boolean;
  description: string;
  /** Route path, e.g. "/solutions/crm". Used for canonical + OG url. */
  path: string;
  /** Override the default OG image (e.g. a blog cover). Absolute or root-relative. */
  ogImage?: string;
  type?: "website" | "article";
  publishedTime?: string;
  modifiedTime?: string;
  /** Article author name (for og:article). */
  authorName?: string;
  /** Article section/tags (for og:article). */
  section?: string;
  tags?: string[];
  noIndex?: boolean;
}

// Allow search engines to show full snippets and large image/video previews.
const richResultRobots = {
  index: true,
  follow: true,
  "max-image-preview": "large" as const,
  "max-snippet": -1,
  "max-video-preview": -1,
};

/**
 * Single source of truth for per-page metadata: unique title, hand-written
 * description, trailing-slash canonical, hreflang, OpenGraph + Twitter, and
 * rich-result robots directives.
 */
export function buildMetadata({
  title,
  titleAbsolute,
  description,
  path,
  ogImage,
  type = "website",
  publishedTime,
  modifiedTime,
  authorName,
  section,
  tags,
  noIndex,
}: PageMetaInput): Metadata {
  const canonical = pageUrl(path);
  // When no explicit override is given, the `opengraph-image` file convention
  // supplies the og:image / twitter:image automatically (generated at build).
  const overrideImage = ogImage
    ? ogImage.startsWith("http")
      ? ogImage
      : absoluteUrl(ogImage)
    : undefined;

  return {
    title: titleAbsolute ? { absolute: title } : title,
    description,
    alternates: {
      canonical,
      // International targeting: declare the language + a default.
      languages: {
        en: canonical,
        "x-default": canonical,
      },
    },
    robots: noIndex
      ? { index: false, follow: false, nocache: true }
      : richResultRobots,
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: siteConfig.name,
      type,
      locale: "en_US",
      ...(type === "article"
        ? {
            ...(publishedTime ? { publishedTime } : {}),
            ...(modifiedTime ? { modifiedTime } : {}),
            ...(authorName ? { authors: [authorName] } : {}),
            ...(section ? { section } : {}),
            ...(tags && tags.length ? { tags } : {}),
          }
        : {}),
      ...(overrideImage
        ? { images: [{ url: overrideImage, width: 1200, height: 630, alt: title }] }
        : {}),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      ...(overrideImage ? { images: [overrideImage] } : {}),
      creator: "@cybromines",
      site: "@cybromines",
    },
  };
}
