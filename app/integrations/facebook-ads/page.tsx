import type { Metadata } from "next";
import Link from "next/link";
import {
  Megaphone,
  Zap,
  Users,
  LineChart,
  MousePointerClick,
  UserPlus,
  MessageSquare,
  TrendingUp,
} from "lucide-react";

import { buildMetadata } from "@/lib/seo/metadata";
import { serviceSchema, faqSchema } from "@/lib/seo/jsonld";
import { facebookFaqs } from "@/lib/data/faqs";
import { JsonLd } from "@/components/site/json-ld";
import { PageHero } from "@/components/site/page-hero";
import { Container } from "@/components/site/container";
import { SectionHeading } from "@/components/site/section-heading";
import { Reveal } from "@/components/site/reveal";
import { FeatureCard } from "@/components/site/feature-card";
import { FAQAccordion } from "@/components/site/faq-accordion";
import { CTABand } from "@/components/site/cta-band";

export const metadata: Metadata = buildMetadata({
  title: "Facebook Ads integration & lead sync",
  description:
    "Sync Facebook and Instagram lead forms to your CRM in real time, send server-side conversions, build audiences, and trigger instant WhatsApp follow-up.",
  path: "/integrations/facebook-ads",
});

const features = [
  {
    icon: Zap,
    title: "Lead-form sync",
    description:
      "Facebook and Instagram lead forms flow into your CRM the instant they're submitted — no CSV exports, no leads going cold overnight.",
  },
  {
    icon: TrendingUp,
    title: "Conversion API",
    description:
      "Send conversions server-side through Meta's Conversions API to restore tracking accuracy and feed the algorithm cleaner signal.",
  },
  {
    icon: Users,
    title: "Audience sync",
    description:
      "Build segments from your CRM — high-value customers, recent buyers, churn risks — and sync them to Meta as custom and lookalike audiences.",
  },
  {
    icon: LineChart,
    title: "ROI reporting",
    description:
      "Tie ad spend to pipeline and revenue, so you can see which campaigns produce customers, not just clicks.",
  },
];

const flow = [
  { icon: Megaphone, title: "Ad", description: "A prospect sees your Facebook or Instagram ad." },
  { icon: MousePointerClick, title: "Lead", description: "They submit the lead form in one tap." },
  { icon: UserPlus, title: "CRM", description: "The lead lands in your pipeline instantly." },
  { icon: MessageSquare, title: "WhatsApp follow-up", description: "An automated WhatsApp message reaches them in seconds." },
];

export default function FacebookAdsPage() {
  return (
    <>
      <JsonLd
        schema={[
          serviceSchema({
            name: "Facebook Ads Integration",
            description:
              "Lead-form sync, Conversions API, CRM audience sync, and ROI reporting connecting Meta ads to the Cybromines CRM.",
            path: "/integrations/facebook-ads",
          }),
          faqSchema(facebookFaqs),
        ]}
      />

      <PageHero
        eyebrow="Integrations · Facebook Ads"
        icon={Megaphone}
        title="Every ad click becomes a tracked lead"
        subtitle="Stop losing leads between Meta and your sales team. Cybromines syncs lead forms and conversions in real time, then hands each lead straight to your follow-up flow."
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "Integrations", path: "/integrations/whatsapp-crm" },
          { name: "Facebook Ads", path: "/integrations/facebook-ads" },
        ]}
        primary={{ label: "Book a demo", href: "/contact" }}
        secondary={{ label: "See WhatsApp CRM", href: "/integrations/whatsapp-crm" }}
      />

      {/* Features */}
      <section className="py-24 md:py-32">
        <Container>
          <SectionHeading
            eyebrow="Capabilities"
            title="Connect the ad to the outcome"
            subtitle="Close the loop between what you spend on Meta and the revenue it produces."
          />
          <div className="mt-14 grid gap-4 md:grid-cols-2">
            {features.map((f, i) => (
              <Reveal key={f.title} delay={i % 2} as="div">
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

      {/* Flow diagram */}
      <section className="border-y border-border bg-surface/30 py-24 md:py-32">
        <Container>
          <SectionHeading
            eyebrow="The lead journey"
            title="From ad to answered, in seconds"
            subtitle="Speed wins leads. This is the path every prospect takes the moment they tap your ad."
          />
          <div className="mt-14 grid gap-4 md:grid-cols-4">
            {flow.map((step, i) => (
              <Reveal key={step.title} delay={i} as="div">
                <div className="surface-card relative flex h-full flex-col gap-3 p-6">
                  <span className="inline-flex size-11 items-center justify-center rounded-xl border border-border bg-surface-elevated text-cyan">
                    <step.icon className="size-5" />
                  </span>
                  <h3 className="font-display text-base font-medium tracking-tight">
                    {step.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted">
                    {step.description}
                  </p>
                  {i < flow.length - 1 && (
                    <span className="absolute -right-2.5 top-1/2 hidden -translate-y-1/2 font-mono text-muted-subtle md:block">
                      →
                    </span>
                  )}
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-8 text-center">
            <p className="text-sm text-muted">
              The follow-up runs through{" "}
              <Link
                href="/integrations/whatsapp-crm"
                className="font-medium text-foreground underline-offset-4 hover:underline"
              >
                WhatsApp CRM
              </Link>{" "}
              — or any channel you connect.
            </p>
          </Reveal>
        </Container>
      </section>

      {/* FAQ */}
      <section className="py-24 md:py-32">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            <SectionHeading eyebrow="FAQ" title="Common questions" align="left" />
            <FAQAccordion items={facebookFaqs} />
          </div>
        </Container>
      </section>

      <CTABand
        title="Make every dirham of ad spend count"
        subtitle="We'll connect your ad account, sync your first leads live, and show the follow-up firing in seconds."
        primary={{ label: "Book a demo", href: "/contact" }}
        secondary={{ label: "Talk to sales", href: "/contact" }}
      />
    </>
  );
}
