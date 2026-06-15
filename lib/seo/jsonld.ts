import { siteConfig, absoluteUrl, pageUrl } from "@/lib/site";

const ORG_ID = `${siteConfig.url}/#organization`;
const WEBSITE_ID = `${siteConfig.url}/#website`;

/** Reusable reference to the Organization node (so schemas link, not duplicate). */
const orgRef = { "@id": ORG_ID };

/** Sitewide Organization schema (rich, with contact points and authority signals). */
export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": ORG_ID,
    name: siteConfig.name,
    legalName: siteConfig.legalName,
    url: pageUrl("/"),
    logo: {
      "@type": "ImageObject",
      url: absoluteUrl("/icon.svg"),
      width: 512,
      height: 512,
    },
    image: absoluteUrl(siteConfig.ogImage),
    description: siteConfig.description,
    slogan: siteConfig.tagline,
    email: siteConfig.email,
    telephone: siteConfig.phone,
    foundingDate: siteConfig.foundingYear,
    knowsAbout: [...siteConfig.knowsAbout],
    address: {
      "@type": "PostalAddress",
      streetAddress: `${siteConfig.address.line1}, ${siteConfig.address.line2}`,
      addressLocality: siteConfig.address.city,
      addressCountry: "AE",
    },
    areaServed: siteConfig.areaServed.map((c) => ({
      "@type": "Country",
      identifier: c,
    })),
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "sales",
        email: siteConfig.salesEmail,
        telephone: siteConfig.phone,
        areaServed: [...siteConfig.areaServed],
        availableLanguage: [...siteConfig.availableLanguages],
      },
      {
        "@type": "ContactPoint",
        contactType: "customer support",
        email: siteConfig.email,
        availableLanguage: [...siteConfig.availableLanguages],
      },
    ],
    sameAs: [
      siteConfig.social.linkedin,
      siteConfig.social.x,
      siteConfig.social.github,
      siteConfig.social.youtube,
    ],
  };
}

/** WebSite schema with a SearchAction (sitewide). */
export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    name: siteConfig.name,
    url: pageUrl("/"),
    description: siteConfig.description,
    inLanguage: "en",
    publisher: orgRef,
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${siteConfig.url}/blog/?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };
}

export function softwareApplicationSchema(input: {
  name: string;
  description: string;
  path: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: input.name,
    description: input.description,
    url: pageUrl(input.path),
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web, iOS, Android",
    inLanguage: "en",
    offers: {
      "@type": "Offer",
      priceCurrency: "USD",
      price: "0",
      description: "Custom enterprise pricing — request a demo.",
    },
    provider: orgRef,
    publisher: orgRef,
  };
}

export function serviceSchema(input: {
  name: string;
  description: string;
  path: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: input.name,
    name: input.name,
    description: input.description,
    url: pageUrl(input.path),
    provider: orgRef,
    areaServed: siteConfig.areaServed.map((c) => ({
      "@type": "Country",
      identifier: c,
    })),
    availableChannel: {
      "@type": "ServiceChannel",
      serviceUrl: pageUrl(input.path),
    },
  };
}

export function faqSchema(items: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((i) => ({
      "@type": "Question",
      name: i.question,
      acceptedAnswer: { "@type": "Answer", text: i.answer },
    })),
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: pageUrl(item.path),
    })),
  };
}

export function blogPostingSchema(input: {
  title: string;
  description: string;
  path: string;
  date: string;
  modified?: string;
  cover: string;
  author: string;
  authorRole?: string;
  tags?: string[];
  wordCount?: number;
}) {
  const url = pageUrl(input.path);
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: input.title,
    description: input.description,
    url,
    datePublished: input.date,
    dateModified: input.modified ?? input.date,
    inLanguage: "en",
    image: input.cover.startsWith("http") ? input.cover : absoluteUrl(input.cover),
    author: {
      "@type": "Person",
      name: input.author,
      ...(input.authorRole ? { jobTitle: input.authorRole } : {}),
    },
    publisher: {
      "@type": "Organization",
      "@id": ORG_ID,
      name: siteConfig.name,
      logo: { "@type": "ImageObject", url: absoluteUrl("/icon.svg") },
    },
    ...(input.tags && input.tags.length
      ? { keywords: input.tags.join(", "), articleSection: input.tags[0] }
      : {}),
    ...(input.wordCount ? { wordCount: input.wordCount } : {}),
    isPartOf: { "@id": WEBSITE_ID },
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
  };
}
