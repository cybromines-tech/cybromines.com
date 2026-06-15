import type { Metadata } from "next";
import Link from "next/link";
import {
  Plug,
  Sparkles,
  Webhook,
  Building2,
  RefreshCw,
  ShieldCheck,
  ArrowRight,
  Mail,
  Filter,
  Send,
  Activity,
  Briefcase,
  Headset,
  UserPlus,
} from "lucide-react";

import { buildMetadata } from "@/lib/seo/metadata";
import { siteConfig } from "@/lib/site";
import { softwareApplicationSchema, faqSchema } from "@/lib/seo/jsonld";
import { JsonLd } from "@/components/site/json-ld";
import { Container } from "@/components/site/container";
import { Breadcrumbs } from "@/components/site/breadcrumbs";
import { NeuralBeam } from "@/components/site/neural-beam";
import { SectionHeading } from "@/components/site/section-heading";
import { Reveal } from "@/components/site/reveal";
import { FeatureCard } from "@/components/site/feature-card";
import { ProcessTimeline } from "@/components/site/process-timeline";
import { FAQAccordion } from "@/components/site/faq-accordion";
import { InboxMockup } from "@/components/site/inbox-mockup";
import { AiBadge } from "@/components/site/ai-badge";
import { CTABand } from "@/components/site/cta-band";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = buildMetadata({
  title: "Email Agent — AI Lead Detection From Your Inbox",
  description:
    "Cybromines Email Agent (CEA) connects any inbox, uses AI to detect leads and important emails in real time, and delivers them straight to your CRM or webhook.",
  path: "/email-agent",
});

const features = [
  {
    icon: Plug,
    title: "Connect any inbox",
    description:
      "Link Gmail in one click or connect any provider over IMAP. The agent starts reading new mail the moment you connect — no IT project required.",
  },
  {
    icon: Sparkles,
    title: "AI lead detection",
    description:
      "Every incoming email is read by AI that understands intent — demo requests, pricing questions, and buying signals are flagged as leads automatically.",
  },
  {
    icon: Webhook,
    title: "Instant webhook delivery",
    description:
      "Detected leads are pushed to your CRM, Slack, or any endpoint via webhook in real time — so nothing sits unseen in a shared inbox.",
  },
  {
    icon: Building2,
    title: "Multi-inbox & multi-org",
    description:
      "Run many inboxes across multiple organisations from one place, each isolated, with its own rules and delivery destinations.",
  },
  {
    icon: RefreshCw,
    title: "Continuous & real-time",
    description:
      "Ingestion runs around the clock on a reliable queue, so leads are captured and delivered within seconds of landing in the inbox.",
  },
  {
    icon: ShieldCheck,
    title: "Private & secure",
    description:
      "Inbox credentials are encrypted at rest, tenants are fully isolated, and the agent only ever reads — it never sends from your account.",
  },
];

const steps = [
  { title: "Connect", description: "Securely link your inbox via Gmail OAuth or IMAP in under a minute." },
  { title: "Detect", description: "AI reads each new email and classifies leads and intent on arrival." },
  { title: "Deliver", description: "Qualified leads are POSTed to your CRM or webhook in real time." },
  { title: "Monitor", description: "Track what was detected and delivered, and tune the rules over time." },
];

const useCases = [
  { icon: UserPlus, dept: "Sales", text: "Capture every lead that lands in shared info@ and sales@ inboxes before it goes cold." },
  { icon: Briefcase, dept: "Agencies", text: "Route client enquiries from many mailboxes into the right CRM automatically." },
  { icon: Headset, dept: "Support", text: "Surface high-intent or escalation emails and forward them where they belong." },
];

const faqs = [
  {
    question: "Which email providers does the Email Agent support?",
    answer:
      "Gmail and Google Workspace connect with a single OAuth click, and any other provider — Outlook, Zoho, custom domains — connects over IMAP. If it's an inbox, the agent can read it.",
  },
  {
    question: "Where do detected leads go?",
    answer:
      "Anywhere you can receive a webhook: your CRM, the Cybromines platform, Slack, a Google Sheet via Zapier, or your own API. Leads are delivered as structured JSON in real time.",
  },
  {
    question: "Is my email data secure?",
    answer:
      "Yes. Inbox access tokens are encrypted at rest, each organisation's data is isolated, and the agent has read-only access — it detects and forwards, it never sends mail from your account.",
  },
];

export default function EmailAgentPage() {
  return (
    <>
      <JsonLd
        schema={[
          softwareApplicationSchema({
            name: "Cybromines Email Agent",
            description:
              "AI email agent that connects any inbox, detects leads and important emails in real time, and delivers them to your CRM or webhook.",
            path: "/email-agent",
          }),
          faqSchema(faqs),
        ]}
      />

      {/* Hero */}
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
              { name: "AI", path: "/ai-agents" },
              { name: "Email Agent", path: "/email-agent" },
            ]}
          />
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            <Reveal>
              <span className="eyebrow inline-flex items-center gap-2.5">
                <span className="inline-flex size-7 items-center justify-center rounded-lg border border-border bg-surface text-cyan">
                  <Mail className="size-4" />
                </span>
                Cybromines Email Agent · CEA
              </span>
              <h1 className="mt-5 text-[length:var(--text-hero)] font-semibold leading-[1.04] tracking-[-0.03em]">
                Turn your inbox into a{" "}
                <span className="text-gradient">lead pipeline</span>
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted md:text-xl">
                Cybromines Email Agent connects any inbox, reads every incoming
                email with AI, and delivers the leads straight to your CRM or
                webhook — so no opportunity ever gets buried again.
              </p>
              <div className="mt-7">
                <span className="inline-flex items-start gap-2.5 rounded-xl border border-violet/25 bg-violet/5 px-4 py-3">
                  <Sparkles className="mt-0.5 size-4 shrink-0 text-cyan" />
                  <span className="text-sm text-foreground">
                    Connect Gmail or any IMAP inbox → AI flags leads → delivered to
                    your webhook in seconds.
                  </span>
                </span>
              </div>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button asChild size="lg">
                  <a
                    href={siteConfig.emailAgentUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Try it free
                    <ArrowRight className="size-4" />
                  </a>
                </Button>
                <Button asChild size="lg" variant="secondary">
                  <Link href="/contact">Book a demo</Link>
                </Button>
              </div>
            </Reveal>
            <Reveal delay={1} className="mx-auto w-full max-w-md lg:max-w-none">
              <InboxMockup />
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Features */}
      <section className="py-24 md:py-32">
        <Container>
          <SectionHeading
            eyebrow="What it does"
            title="An AI teammate that never misses an email"
            subtitle="It watches your inbox so your team doesn't have to — reading, qualifying, and routing every message that matters."
          />
          <div className="mt-14 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
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

      <ProcessTimeline
        eyebrow="How it works"
        title="From inbox to CRM in four steps"
        subtitle="Set it up once; it works in the background from then on."
        steps={steps}
      />

      {/* Use cases */}
      <section className="border-y border-border bg-surface/30 py-24 md:py-32">
        <Container>
          <SectionHeading
            eyebrow="Who it's for"
            title="Built for any team that lives in a shared inbox"
          />
          <div className="mt-14 grid grid-cols-1 gap-4 md:grid-cols-3">
            {useCases.map((uc, i) => (
              <Reveal key={uc.dept} delay={i} as="div">
                <div className="surface-card h-full p-7">
                  <span className="inline-flex size-11 items-center justify-center rounded-xl border border-border bg-surface-elevated text-cyan">
                    <uc.icon className="size-5" />
                  </span>
                  <h3 className="mt-5 font-display text-lg font-medium tracking-tight">
                    {uc.dept}
                  </h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-muted">{uc.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Pipeline / pairs with CRM */}
      <section className="py-24 md:py-32">
        <Container>
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            <Reveal>
              <AiBadge label="Better together" />
              <h2 className="mt-4 text-[length:var(--text-section)] font-semibold leading-[1.1] tracking-tight">
                Plug it into your whole stack
              </h2>
              <p className="mt-4 max-w-lg text-base text-muted md:text-lg">
                The Email Agent delivers leads anywhere — but it really shines
                wired into the Cybromines{" "}
                <Link
                  href="/solutions/crm"
                  className="font-medium text-foreground underline-offset-4 hover:underline"
                >
                  CRM
                </Link>{" "}
                and{" "}
                <Link
                  href="/integrations/whatsapp-crm"
                  className="font-medium text-foreground underline-offset-4 hover:underline"
                >
                  WhatsApp CRM
                </Link>
                , so an email lead can trigger an instant WhatsApp follow-up.
              </p>
              <ul className="mt-6 flex flex-col gap-3">
                {[
                  { icon: Filter, t: "Detects intent, not just keywords" },
                  { icon: Send, t: "Delivers structured JSON to any endpoint" },
                  { icon: Activity, t: "Full visibility into what was captured" },
                ].map((x) => (
                  <li key={x.t} className="flex items-center gap-3 text-[15px] text-foreground/90">
                    <span className="flex size-8 items-center justify-center rounded-lg border border-border bg-surface text-cyan">
                      <x.icon className="size-4" />
                    </span>
                    {x.t}
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={1} className="mx-auto w-full max-w-md lg:max-w-none">
              <InboxMockup />
            </Reveal>
          </div>
        </Container>
      </section>

      {/* FAQ */}
      <section className="border-t border-border py-24 md:py-32">
        <Container>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            <SectionHeading eyebrow="FAQ" title="Email Agent, answered" align="left" />
            <FAQAccordion items={faqs} />
          </div>
        </Container>
      </section>

      <CTABand
        title="Never lose a lead in your inbox again"
        subtitle="Connect an inbox and watch the Email Agent surface and deliver leads in minutes — try it free, no credit card."
        primary={{ label: "Try it free", href: siteConfig.emailAgentUrl }}
        secondary={{ label: "Book a demo", href: "/contact" }}
      />
    </>
  );
}
