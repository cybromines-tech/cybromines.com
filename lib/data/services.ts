import {
  Code2,
  Search,
  Smartphone,
  type LucideIcon,
} from "lucide-react";

export interface ServiceProcessStep {
  title: string;
  description: string;
}

export interface Service {
  slug: string;
  name: string;
  icon: LucideIcon;
  tagline: string;
  promise: string;
  metaDescription: string;
  included: { title: string; description: string }[];
  process: ServiceProcessStep[];
  /** Optional tech-stack badges shown on the detail page. */
  stack?: string[];
  engagement: string;
}

export const services: Service[] = [
  {
    slug: "custom-software",
    name: "Custom software development",
    icon: Code2,
    tagline: "Bespoke web and mobile systems, engineered to last.",
    promise:
      "When off-the-shelf won't fit, we design and build software around the way your business actually runs.",
    metaDescription:
      "Custom web and mobile software development by Cybromines — discovery to launch, built on a modern, maintainable stack with long-term support.",
    included: [
      {
        title: "Product discovery",
        description:
          "We map your workflows, users, and constraints into a clear, prioritised specification before a line of code is written.",
      },
      {
        title: "UX & UI design",
        description:
          "Interface design that your team adopts without training — clean, fast, and consistent across web and mobile.",
      },
      {
        title: "Web application engineering",
        description:
          "Robust, type-safe applications built on a modern stack and tested to enterprise standards.",
      },
      {
        title: "Mobile applications",
        description:
          "Native-quality iOS and Android apps from one codebase, published to both stores under your brand.",
      },
      {
        title: "Integrations & APIs",
        description:
          "We connect your new system to ERPs, payment gateways, and third-party services with documented, versioned APIs.",
      },
      {
        title: "Support & SLAs",
        description:
          "Post-launch we monitor, patch, and evolve the product under a support agreement sized to your needs.",
      },
    ],
    process: [
      { title: "Discover", description: "Workshops to define scope, users, and success metrics." },
      { title: "Design", description: "Prototypes and a validated architecture you sign off on." },
      { title: "Build", description: "Iterative delivery in two-week sprints with working demos." },
      { title: "Launch", description: "Production rollout, data migration, and team training." },
      { title: "Support", description: "Ongoing maintenance, monitoring, and enhancements." },
    ],
    stack: [
      "TypeScript",
      "Next.js",
      "React Native",
      "Node.js",
      "PostgreSQL",
      "AWS",
    ],
    engagement:
      "Fixed-scope projects or dedicated squads on a monthly retainer — whichever fits your roadmap.",
  },
  {
    slug: "seo",
    name: "SEO services",
    icon: Search,
    tagline: "Rank for the searches that bring you revenue.",
    promise:
      "Technical SEO, content strategy, and performance work that compounds into durable organic growth.",
    metaDescription:
      "Cybromines SEO services: technical SEO audits, content strategy, Core Web Vitals optimisation, and link building that grows qualified organic traffic.",
    included: [
      {
        title: "Technical SEO audit",
        description:
          "A full crawl of your site to fix indexation, structured data, canonical, and architecture issues holding you back.",
      },
      {
        title: "Keyword & intent research",
        description:
          "We find the high-intent searches your buyers use and map them to pages worth ranking.",
      },
      {
        title: "Content strategy",
        description:
          "An editorial plan that targets those terms with content your audience and search engines both reward.",
      },
      {
        title: "Core Web Vitals",
        description:
          "We tune LCP, CLS, and INP so speed stops being a ranking handicap and starts being an advantage.",
      },
      {
        title: "On-page & schema",
        description:
          "Titles, metadata, internal linking, and JSON-LD implemented to current best practice on every key page.",
      },
      {
        title: "Reporting & iteration",
        description:
          "Transparent monthly reporting on rankings, traffic, and conversions — with a clear plan for the next sprint.",
      },
    ],
    process: [
      { title: "Discover", description: "Audit, benchmark, and competitor analysis." },
      { title: "Design", description: "Keyword map and a prioritised content and fix plan." },
      { title: "Build", description: "Technical fixes, content production, and on-page work." },
      { title: "Launch", description: "Ship changes and submit for re-indexing." },
      { title: "Support", description: "Measure, refine, and scale what's working." },
    ],
    engagement:
      "Monthly retainer with a fixed scope of deliverables, or a one-off technical audit and roadmap.",
  },
  {
    slug: "mobile-apps",
    name: "Mobile apps",
    icon: Smartphone,
    tagline: "iOS and Android apps your customers keep.",
    promise:
      "From idea to the App Store and Google Play — fast, polished mobile apps backed by a real product process.",
    metaDescription:
      "Cybromines builds native-quality iOS and Android apps — strategy, design, development, store launch, and ongoing support from one accountable team.",
    included: [
      {
        title: "App strategy",
        description:
          "We pressure-test the idea, define the MVP, and plan a release path that gets you to market fast.",
      },
      {
        title: "Native-quality UX",
        description:
          "Interfaces that feel right on each platform, with the polish users expect from a top-tier app.",
      },
      {
        title: "Cross-platform build",
        description:
          "One codebase, both platforms — lower cost and faster updates without compromising performance.",
      },
      {
        title: "Offline & sync",
        description:
          "Apps that work without a signal and reconcile cleanly when the connection returns.",
      },
      {
        title: "Store submission",
        description:
          "We handle App Store and Play Console setup, review, and release under your developer accounts.",
      },
      {
        title: "Analytics & updates",
        description:
          "Usage analytics, crash reporting, and a steady cadence of updates after launch.",
      },
    ],
    process: [
      { title: "Discover", description: "Define the MVP, users, and platform strategy." },
      { title: "Design", description: "Interactive prototype validated with real users." },
      { title: "Build", description: "Sprint-based development with TestFlight and internal builds." },
      { title: "Launch", description: "Store submission, review, and public release." },
      { title: "Support", description: "Monitoring, updates, and feature iterations." },
    ],
    stack: ["React Native", "Expo", "TypeScript", "Swift", "Kotlin", "Firebase"],
    engagement:
      "Fixed-scope MVP builds or an ongoing product partnership with a dedicated mobile squad.",
  },
];

export function getService(slug: string) {
  return services.find((s) => s.slug === slug);
}

export const serviceSlugs = services.map((s) => s.slug);
