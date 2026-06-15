import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo/metadata";

import { Hero } from "@/components/home/hero";
import { LogoMarquee } from "@/components/site/logo-marquee";
import { SolutionsBento } from "@/components/home/solutions-bento";
import { AiConsoleBand } from "@/components/home/ai-console-band";
import { AiConsultingBand } from "@/components/home/ai-consulting-band";
import { IntegrationsDuo } from "@/components/home/integrations-duo";
import { ServicesRow } from "@/components/home/services-row";
import { ProcessTimeline } from "@/components/site/process-timeline";
import { StatBar } from "@/components/site/stat-bar";
import { TestimonialsSection } from "@/components/home/testimonials-section";
import { BlogPreview } from "@/components/home/blog-preview";
import { CTABand } from "@/components/site/cta-band";

export const metadata: Metadata = buildMetadata({
  title: "Cybromines — AI-Native ERP, CRM & POS Software House",
  titleAbsolute: true,
  description:
    "Cybromines is an AI-native software house. We build and integrate ERP, CRM, POS, inventory, production, property, and queue systems — powered by AI agents.",
  path: "/",
});

const deliverySteps = [
  { title: "Discover", description: "We map your workflows, systems, and goals into a clear, prioritised plan." },
  { title: "Design", description: "Architecture and interfaces your team signs off on before we build." },
  { title: "Build", description: "Iterative delivery in two-week sprints with working demos throughout." },
  { title: "Integrate", description: "We connect every system — and the AI layer — so your data flows as one." },
  { title: "Support", description: "We stay on after launch: monitoring, tuning, and evolving the platform." },
];

export default function Home() {
  return (
    <>
      <Hero />
      <LogoMarquee />
      <SolutionsBento />
      <AiConsoleBand />
      <AiConsultingBand />
      <IntegrationsDuo />
      <ServicesRow />
      <ProcessTimeline
        eyebrow="How we deliver"
        title="From first conversation to live system"
        subtitle="We work as your technology partner end to end — not a vendor who disappears after go-live."
        steps={deliverySteps}
      />
      <StatBar />
      <TestimonialsSection />
      <BlogPreview />
      <CTABand
        title="Build your business on AI-native systems"
        subtitle="Tell us what you're trying to run better. We'll show you the systems — and the AI — that can do it, on your data."
        primary={{ label: "Book a demo", href: "/contact" }}
        secondary={{ label: "Explore solutions", href: "/solutions" }}
      />
    </>
  );
}
