/**
 * Global, environment-driven site configuration.
 * Every external touchpoint (URL, contact endpoint, WhatsApp, GA) is read
 * from NEXT_PUBLIC_* env vars with safe fallbacks so the site builds anywhere.
 */

const rawUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://cybromines.com";

export const siteConfig = {
  name: "Cybromines",
  legalName: "Cybromines Private Limited",
  // Trailing slash trimmed for consistent canonical/OG URLs.
  url: rawUrl.replace(/\/$/, ""),
  description:
    "Cybromines is an AI-native software house. We build and integrate the systems your business runs on — ERP, CRM, POS, inventory, production, property, and queue management — all powered by AI agents.",
  tagline: "One AI-native partner for every system your business runs on",
  email: "hello@cybromines.com",
  salesEmail: "sales@cybromines.com",
  careersEmail: "careers@cybromines.com",
  phone: "+971 4 000 0000",
  phoneHref: "+97140000000",
  address: {
    line1: "Level 14, Boulevard Plaza Tower 1",
    line2: "Downtown Dubai",
    city: "Dubai",
    country: "United Arab Emirates",
  },
  whatsappNumber: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "971500000000",
  contactEndpoint: process.env.NEXT_PUBLIC_CONTACT_ENDPOINT ?? "",
  gaId: process.env.NEXT_PUBLIC_GA_ID ?? "",
  social: {
    linkedin: "https://www.linkedin.com/company/cybromines",
    x: "https://x.com/cybromines",
    github: "https://github.com/cybromines",
    youtube: "https://www.youtube.com/@cybromines",
  },
  // Default OG image is generated at build by app/opengraph-image.tsx.
  ogImage: "/opengraph-image",
} as const;

export type SiteConfig = typeof siteConfig;

export function absoluteUrl(path = "") {
  const clean = path.startsWith("/") ? path : `/${path}`;
  return `${siteConfig.url}${clean === "/" ? "" : clean}`;
}

export function whatsappLink(message?: string) {
  const base = `https://wa.me/${siteConfig.whatsappNumber}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}
