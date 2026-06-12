import type { Metadata } from "next";
import { siteConfig, absoluteUrl } from "@/lib/site";

interface PageMetaInput {
  title: string;
  description: string;
  /** Route path, e.g. "/products/trading". Used for canonical + OG url. */
  path: string;
  /** Override the default OG image (e.g. a blog cover). Absolute or root-relative. */
  ogImage?: string;
  type?: "website" | "article";
  publishedTime?: string;
  noIndex?: boolean;
}

/**
 * Single source of truth for per-page metadata: unique title, hand-written
 * description, canonical URL, and OpenGraph + Twitter cards.
 */
export function buildMetadata({
  title,
  description,
  path,
  ogImage,
  type = "website",
  publishedTime,
  noIndex,
}: PageMetaInput): Metadata {
  const url = absoluteUrl(path);
  // When no explicit override is given, the `opengraph-image` file convention
  // supplies the og:image / twitter:image automatically (generated at build).
  const overrideImage = ogImage
    ? ogImage.startsWith("http")
      ? ogImage
      : absoluteUrl(ogImage)
    : undefined;

  return {
    title,
    description,
    alternates: { canonical: url },
    robots: noIndex ? { index: false, follow: false } : undefined,
    openGraph: {
      title,
      description,
      url,
      siteName: siteConfig.name,
      type,
      ...(publishedTime ? { publishedTime } : {}),
      ...(overrideImage
        ? { images: [{ url: overrideImage, width: 1200, height: 630, alt: title }] }
        : {}),
      locale: "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      ...(overrideImage ? { images: [overrideImage] } : {}),
      creator: "@cybromines",
    },
  };
}
