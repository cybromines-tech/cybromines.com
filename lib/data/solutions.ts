import {
  LayoutGrid,
  Contact,
  ScanLine,
  Boxes,
  Factory,
  Building2,
  TicketCheck,
  type LucideIcon,
} from "lucide-react";

export interface SolutionFeature {
  title: string;
  description: string;
}

export interface Solution {
  slug: string;
  name: string;
  /** Short label used in nav and chips. */
  shortName: string;
  category: "Platform" | "System";
  icon: LucideIcon;
  /** One-line value prop for cards. */
  tagline: string;
  /** Longer promise for the solution hero. */
  promise: string;
  metaDescription: string;
  /** The single most important AI capability — surfaced as an "AI inside" line. */
  aiHook: string;
  /** Visual mockup variant rendered on cards / hero. */
  mockup:
    | "erp"
    | "crm"
    | "pos"
    | "inventory"
    | "production"
    | "property"
    | "queue";
  features: SolutionFeature[];
  /** AI-specific capabilities for this system. */
  aiCapabilities: string[];
  /** Marks the flagship card in the bento. */
  flagship?: boolean;
}

export const solutions: Solution[] = [
  {
    slug: "erp",
    name: "ERP System",
    shortName: "ERP",
    category: "Platform",
    icon: LayoutGrid,
    flagship: true,
    tagline: "Run your entire operation on one connected ledger.",
    promise:
      "A modular ERP that unifies trading, inventory, finance, HR, and point of sale — with AI agents working across all of it.",
    metaDescription:
      "Cybromines ERP unifies trading, inventory, finance, HR, and POS on one ledger — with built-in GCC compliance and AI agents automating the work.",
    aiHook: "AI agents reconcile, report, and flag anomalies across every module.",
    mockup: "erp",
    features: [
      {
        title: "Five integrated modules",
        description:
          "Trading, Inventory, Finance, HRM, and POS share one data model — a sale, a stock move, and a journal entry are the same event.",
      },
      {
        title: "GCC compliance built in",
        description:
          "UAE & KSA VAT, ZATCA e-invoicing, WPS payroll, and end-of-service — standard, not a costly customisation.",
      },
      {
        title: "Real-time reporting",
        description:
          "Drill from a board-level KPI to the source transaction in two clicks, across any company or branch.",
      },
      {
        title: "Multi-company & multi-currency",
        description:
          "Run unlimited legal entities with inter-company eliminations and consolidated statements across currencies.",
      },
    ],
    aiCapabilities: [
      "Invoice capture & three-way matching",
      "Automated month-end reconciliation",
      "Margin & cash-flow anomaly alerts",
    ],
  },
  {
    slug: "crm",
    name: "CRM System",
    shortName: "CRM",
    category: "System",
    icon: Contact,
    tagline: "Turn every conversation into a tracked, AI-nurtured deal.",
    promise:
      "An omnichannel CRM that runs your pipeline from WhatsApp, web, and ads — with AI qualifying, replying, and following up around the clock.",
    metaDescription:
      "Cybromines CRM runs your sales pipeline across WhatsApp, web, and ads with a shared inbox, automation, and AI agents that qualify and follow up.",
    aiHook: "An AI agent qualifies leads and drafts replies before your team wakes up.",
    mockup: "crm",
    features: [
      {
        title: "WhatsApp-native pipeline",
        description:
          "Every WhatsApp chat becomes a deal with a stage, owner, and value — built on the official Business Cloud API.",
      },
      {
        title: "Shared team inbox",
        description:
          "Your whole team works one business number with assignment, tagging, and internal notes. Nothing slips.",
      },
      {
        title: "Omnichannel capture",
        description:
          "Leads from WhatsApp, web forms, and Meta ads flow into one pipeline with full source attribution.",
      },
      {
        title: "Broadcasts & automations",
        description:
          "Template campaigns, chatbots, and follow-up sequences that respect every channel's rules.",
      },
    ],
    aiCapabilities: [
      "AI lead scoring & routing",
      "Auto-drafted, on-brand replies",
      "Conversation sentiment & next-best-action",
    ],
  },
  {
    slug: "pos",
    name: "POS System",
    shortName: "POS",
    category: "System",
    icon: ScanLine,
    tagline: "Sell fast at the counter — online or off.",
    promise:
      "A resilient, multi-branch point of sale that keeps ringing sales through outages and syncs every terminal back to head office.",
    metaDescription:
      "Cybromines POS is an offline-capable, multi-branch point of sale with promotions, integrated payments, and AI-driven upsell and fraud detection.",
    aiHook: "AI suggests upsells at checkout and flags suspicious transactions in real time.",
    mockup: "pos",
    features: [
      {
        title: "Offline-capable",
        description:
          "Keep selling when the internet drops. Transactions queue locally and sync the moment you're back online.",
      },
      {
        title: "Multi-branch control",
        description:
          "Run every outlet from one back office with central pricing, promotions, and consolidated reporting.",
      },
      {
        title: "Integrated payments",
        description:
          "Cash, card, and wallet with split tenders and instant reconciliation to your finance ledger.",
      },
      {
        title: "Live inventory link",
        description:
          "Every sale decrements stock in real time, so the counter, warehouse, and books never disagree.",
      },
    ],
    aiCapabilities: [
      "Basket-level upsell suggestions",
      "Real-time fraud & void anomaly alerts",
      "Demand-based reorder triggers",
    ],
  },
  {
    slug: "inventory",
    name: "Inventory System",
    shortName: "Inventory",
    category: "System",
    icon: Boxes,
    tagline: "Know exactly what you hold, where, and what it's worth.",
    promise:
      "Real-time stock across every warehouse with barcode accuracy, valuation you can trust, and AI that reorders before you run out.",
    metaDescription:
      "Cybromines Inventory delivers real-time multi-warehouse stock, barcode operations, serial/batch tracking, accurate valuation, and AI-driven reordering.",
    aiHook: "AI forecasts demand and raises purchase requests before stockouts happen.",
    mockup: "inventory",
    features: [
      {
        title: "Multi-warehouse, real time",
        description:
          "Quantity on hand, reserved, and in transit across unlimited locations and bins from one screen.",
      },
      {
        title: "Barcode & mobile",
        description:
          "Scan to receive, pick, count, and transfer — any phone becomes a rugged scanner.",
      },
      {
        title: "Serial & batch tracking",
        description:
          "Full traceability with expiry handling and FEFO picking for recalls and warranties.",
      },
      {
        title: "Accurate valuation",
        description:
          "FIFO, moving average, or standard cost — reconciled to the general ledger at any point in time.",
      },
    ],
    aiCapabilities: [
      "Demand forecasting per SKU & location",
      "Automated reorder-point tuning",
      "Dead-stock & shrinkage detection",
    ],
  },
  {
    slug: "production",
    name: "Production System",
    shortName: "Production",
    category: "System",
    icon: Factory,
    tagline: "Plan, build, and track every work order on the floor.",
    promise:
      "A production management system covering BOMs, work orders, and shop-floor tracking — with AI scheduling and predictive maintenance.",
    metaDescription:
      "Cybromines Production manages BOMs, work orders, and shop-floor tracking with capacity planning and AI-driven scheduling and predictive maintenance.",
    aiHook: "AI optimises the production schedule and predicts equipment failures before they stop the line.",
    mockup: "production",
    features: [
      {
        title: "BOM & routing",
        description:
          "Multi-level bills of materials and routings that cost a product accurately before you build it.",
      },
      {
        title: "Work-order tracking",
        description:
          "Release, schedule, and track work orders through every operation with real-time shop-floor status.",
      },
      {
        title: "Capacity planning",
        description:
          "Balance load across machines and shifts so you commit to delivery dates you can actually hit.",
      },
      {
        title: "Quality & yield",
        description:
          "Capture scrap, rework, and yield at each step, with traceability from raw material to finished goods.",
      },
    ],
    aiCapabilities: [
      "AI production scheduling & sequencing",
      "Predictive maintenance alerts",
      "Yield & bottleneck root-cause analysis",
    ],
  },
  {
    slug: "property",
    name: "Property System",
    shortName: "Property",
    category: "System",
    icon: Building2,
    tagline: "Manage units, leases, and tenants on one platform.",
    promise:
      "A property management system for units, leases, tenants, and maintenance — with AI handling renewals, collections, and request triage.",
    metaDescription:
      "Cybromines Property manages units, leases, tenants, rent collection, and maintenance — with AI that handles renewals, reminders, and request triage.",
    aiHook: "An AI agent chases renewals and rent, and triages every maintenance request.",
    mockup: "property",
    features: [
      {
        title: "Units & portfolio",
        description:
          "Model buildings, units, and amenities with occupancy, availability, and valuation at a glance.",
      },
      {
        title: "Leases & contracts",
        description:
          "Generate, renew, and track leases with automated reminders, escalations, and document storage.",
      },
      {
        title: "Rent & collections",
        description:
          "Schedule invoices, accept payments, and reconcile to finance — with overdue chasing built in.",
      },
      {
        title: "Maintenance requests",
        description:
          "Tenants raise requests from an app; jobs are assigned, tracked, and closed with full history.",
      },
    ],
    aiCapabilities: [
      "Automated lease-renewal outreach",
      "Smart rent reminders & collections",
      "Maintenance request triage & routing",
    ],
  },
  {
    slug: "queue",
    name: "Queue Management",
    shortName: "Queue",
    category: "System",
    icon: TicketCheck,
    tagline: "Turn waiting lines into a smooth, measured experience.",
    promise:
      "A queue management system with token issuing, counter routing, and live displays — plus AI that predicts wait times and staffing needs.",
    metaDescription:
      "Cybromines Queue Management handles token issuing, counter routing, digital displays, and analytics — with AI predicting wait times and staffing.",
    aiHook: "AI predicts wait times and tells you exactly when to open another counter.",
    mockup: "queue",
    features: [
      {
        title: "Token & appointment",
        description:
          "Issue tickets from kiosks, web, or WhatsApp, and let customers book appointments to skip the wait.",
      },
      {
        title: "Counter routing",
        description:
          "Route customers to the right counter by service, priority, and language — automatically.",
      },
      {
        title: "Digital displays",
        description:
          "Drive in-branch screens and audio announcements with live now-serving status.",
      },
      {
        title: "Flow analytics",
        description:
          "Measure wait time, service time, and no-shows by branch, counter, and hour.",
      },
    ],
    aiCapabilities: [
      "Predictive wait-time estimates",
      "Dynamic staffing recommendations",
      "Peak-hour & abandonment forecasting",
    ],
  },
];

export function getSolution(slug: string) {
  return solutions.find((s) => s.slug === slug);
}

export const solutionSlugs = solutions.map((s) => s.slug);
