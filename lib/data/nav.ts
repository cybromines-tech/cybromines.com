import { solutions } from "./solutions";
import { services } from "./services";
import { MessageCircle, Megaphone, Bot, Workflow, type LucideIcon } from "lucide-react";

export interface NavChild {
  label: string;
  href: string;
  description: string;
  icon: LucideIcon;
}

export interface NavItem {
  label: string;
  href: string;
  children?: NavChild[];
  /** Render the mega-menu in two columns (for long lists). */
  wide?: boolean;
}

export const solutionNavChildren: NavChild[] = solutions.map((s) => ({
  label: s.name,
  href: `/solutions/${s.slug}`,
  description: s.tagline,
  icon: s.icon,
}));

export const aiNavChildren: NavChild[] = [
  {
    label: "AI Agents",
    href: "/ai-agents",
    description: "Autonomous agents that run your operations.",
    icon: Bot,
  },
  {
    label: "AI in every system",
    href: "/ai-agents#everywhere",
    description: "Intelligence built into every product we ship.",
    icon: Workflow,
  },
];

export const integrationNavChildren: NavChild[] = [
  {
    label: "WhatsApp CRM",
    href: "/integrations/whatsapp-crm",
    description: "Turn WhatsApp chats into a managed sales pipeline.",
    icon: MessageCircle,
  },
  {
    label: "Facebook Ads",
    href: "/integrations/facebook-ads",
    description: "Sync leads and conversions straight into your CRM.",
    icon: Megaphone,
  },
];

export const serviceNavChildren: NavChild[] = services.map((s) => ({
  label: s.name,
  href: `/services/${s.slug}`,
  description: s.tagline,
  icon: s.icon,
}));

export const mainNav: NavItem[] = [
  { label: "Solutions", href: "/solutions", children: solutionNavChildren, wide: true },
  { label: "AI", href: "/ai-agents", children: aiNavChildren },
  {
    label: "Integrations",
    href: "/integrations/whatsapp-crm",
    children: integrationNavChildren,
  },
  { label: "Services", href: "/services", children: serviceNavChildren },
  { label: "Blog", href: "/blog" },
  { label: "About", href: "/about" },
];

export const footerNav = {
  Solutions: [
    ...solutions.map((s) => ({ label: s.name, href: `/solutions/${s.slug}` })),
    { label: "All solutions", href: "/solutions" },
  ],
  Capabilities: [
    { label: "AI Agents", href: "/ai-agents" },
    { label: "WhatsApp CRM", href: "/integrations/whatsapp-crm" },
    { label: "Facebook Ads", href: "/integrations/facebook-ads" },
    { label: "Custom software", href: "/services/custom-software" },
    { label: "Mobile apps", href: "/services/mobile-apps" },
    { label: "SEO services", href: "/services/seo" },
  ],
  Company: [
    { label: "About", href: "/about" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
    { label: "Careers", href: "/contact" },
  ],
  Legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
  ],
} as const;
