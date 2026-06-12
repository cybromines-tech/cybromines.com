import type { Metadata } from "next";
import Link from "next/link";
import {
  Inbox,
  Send,
  Bot,
  GitBranch,
  LayoutTemplate,
  Cloud,
  ArrowRight,
} from "lucide-react";

import { buildMetadata } from "@/lib/seo/metadata";
import { serviceSchema, faqSchema } from "@/lib/seo/jsonld";
import { whatsappFaqs } from "@/lib/data/faqs";
import { JsonLd } from "@/components/site/json-ld";
import { Container } from "@/components/site/container";
import { SectionHeading } from "@/components/site/section-heading";
import { Reveal } from "@/components/site/reveal";
import { FeatureCard } from "@/components/site/feature-card";
import { FAQAccordion } from "@/components/site/faq-accordion";
import { ChatMockup } from "@/components/site/chat-mockup";
import { Breadcrumbs } from "@/components/site/breadcrumbs";
import { NeuralBeam } from "@/components/site/neural-beam";
import { Button } from "@/components/ui/button";
import { CTABand } from "@/components/site/cta-band";
import { WhatsAppIcon } from "@/components/site/brand-icons";

export const metadata: Metadata = buildMetadata({
  title: "WhatsApp CRM & Business API integration",
  description:
    "Turn WhatsApp into a sales engine: a shared team inbox, broadcasts, chatbots, and a CRM pipeline driven from conversations — on the official Cloud API.",
  path: "/integrations/whatsapp-crm",
});

const features = [
  {
    icon: Inbox,
    title: "Shared team inbox",
    description:
      "Your whole team works one business number. Assign chats, leave internal notes, tag conversations, and never drop a customer message again.",
  },
  {
    icon: Send,
    title: "Broadcast campaigns",
    description:
      "Send template messages to opt-in audiences, schedule sends, and track delivery, reads, and replies — fully within WhatsApp's rules.",
  },
  {
    icon: Bot,
    title: "Chatbot flows",
    description:
      "Build automated flows that qualify leads, answer FAQs, and book demos around the clock, handing off to a human at the right moment.",
  },
  {
    icon: GitBranch,
    title: "Pipeline from chats",
    description:
      "Every conversation becomes a deal with a stage, owner, and value, so your WhatsApp activity rolls straight into your sales forecast.",
  },
  {
    icon: LayoutTemplate,
    title: "Template management",
    description:
      "Create, submit, and reuse approved message templates with variables, so campaigns and notifications go out compliant and on brand.",
  },
  {
    icon: Cloud,
    title: "Cloud API native",
    description:
      "Built directly on the WhatsApp Business Cloud API — verified messaging, green-tick eligibility, and reliability with no grey-market tooling.",
  },
];

const erpFlow = [
  { label: "Customer messages on WhatsApp" },
  { label: "Agent sees full order & balance history" },
  { label: "Quote created in the ERP, sent in chat" },
  { label: "Deal advances in the CRM pipeline" },
];

export default function WhatsAppCRMPage() {
  return (
    <>
      <JsonLd
        schema={[
          serviceSchema({
            name: "WhatsApp CRM & Business API Integration",
            description:
              "Shared inbox, broadcasts, chatbots, and CRM pipeline built on the official WhatsApp Business Cloud API.",
            path: "/integrations/whatsapp-crm",
          }),
          faqSchema(whatsappFaqs),
        ]}
      />

      {/* Hero with chat mockup */}
      <section className="relative overflow-hidden pt-28 md:pt-36">
        <div
          className="pointer-events-none absolute inset-0 -z-10 opacity-50 [mask-image:radial-gradient(ellipse_60%_55%_at_50%_0%,black,transparent_80%)]"
          aria-hidden
        >
          <NeuralBeam />
        </div>
        <Container>
          <Breadcrumbs
            items={[
              { name: "Home", path: "/" },
              { name: "Integrations", path: "/integrations/whatsapp-crm" },
              { name: "WhatsApp CRM", path: "/integrations/whatsapp-crm" },
            ]}
          />
          <div className="grid items-center gap-14 lg:grid-cols-2">
            <Reveal>
              <span className="eyebrow inline-flex items-center gap-2.5">
                <span className="inline-flex size-7 items-center justify-center rounded-lg border border-border bg-surface text-[#25D366]">
                  <WhatsAppIcon className="size-4" />
                </span>
                WhatsApp CRM
              </span>
              <h1 className="mt-5 text-[length:var(--text-hero)] font-semibold leading-[1.05] tracking-[-0.03em]">
                Turn WhatsApp chats into a sales pipeline
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted md:text-xl">
                Your customers already message you on WhatsApp. Cybromines turns
                that inbox into a managed CRM — shared, automated, and connected
                to your ERP.
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Button asChild size="lg">
                  <Link href="/contact">
                    Book a demo
                    <ArrowRight className="size-4" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="secondary">
                  <Link href="/integrations/facebook-ads">Pair with Facebook Ads</Link>
                </Button>
              </div>
            </Reveal>
            <Reveal delay={1}>
              <ChatMockup />
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Features */}
      <section className="py-24 md:py-32">
        <Container>
          <SectionHeading
            eyebrow="Capabilities"
            title="Everything you need to sell on WhatsApp"
            subtitle="From the first message to a closed deal, every step lives in one connected system."
          />
          <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {features.map((f, i) => (
              <Reveal key={f.title} delay={i % 3} as="div">
                <FeatureCard
                  icon={f.icon}
                  title={f.title}
                  description={f.description}
                  featured={i === 0}
                />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* How it connects to your ERP */}
      <section className="border-y border-border bg-surface/30 py-24 md:py-32">
        <Container>
          <SectionHeading
            eyebrow="Connected to your ERP"
            title="One conversation, your whole system behind it"
            subtitle="Because WhatsApp CRM runs on the same platform as your ERP, agents answer with real data — not guesses."
          />
          <div className="mt-14 grid gap-3 md:grid-cols-4">
            {erpFlow.map((step, i) => (
              <Reveal key={step.label} delay={i} as="div">
                <div className="relative flex h-full flex-col gap-3 rounded-card border border-border bg-surface p-6">
                  <span className="font-mono text-sm text-muted-subtle">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="text-[15px] font-medium text-foreground">
                    {step.label}
                  </p>
                  {i < erpFlow.length - 1 && (
                    <ArrowRight className="absolute -right-2 top-1/2 hidden size-4 -translate-y-1/2 text-muted-subtle md:block" />
                  )}
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* FAQ */}
      <section className="py-24 md:py-32">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            <SectionHeading eyebrow="FAQ" title="Common questions" align="left" />
            <FAQAccordion items={whatsappFaqs} />
          </div>
        </Container>
      </section>

      <CTABand
        title="Make WhatsApp your best sales channel"
        subtitle="See the shared inbox, chatbots, and CRM pipeline working on a live demo number."
        primary={{ label: "Book a demo", href: "/contact" }}
        secondary={{ label: "Explore AI agents", href: "/ai-agents" }}
      />
    </>
  );
}
