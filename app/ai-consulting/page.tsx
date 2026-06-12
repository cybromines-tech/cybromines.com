import type { Metadata } from "next";
import Link from "next/link";
import {
  Radar,
  Blocks,
  Bot,
  GraduationCap,
  ShieldCheck,
  TrendingUp,
  ArrowRight,
  Sparkles,
} from "lucide-react";

import { buildMetadata } from "@/lib/seo/metadata";
import { serviceSchema } from "@/lib/seo/jsonld";
import { JsonLd } from "@/components/site/json-ld";
import { Container } from "@/components/site/container";
import { Breadcrumbs } from "@/components/site/breadcrumbs";
import { NeuralBeam } from "@/components/site/neural-beam";
import { SectionHeading } from "@/components/site/section-heading";
import { Reveal } from "@/components/site/reveal";
import { FeatureCard } from "@/components/site/feature-card";
import { ProcessTimeline } from "@/components/site/process-timeline";
import { AiToolsHub } from "@/components/site/ai-tools-hub";
import { AiBadge } from "@/components/site/ai-badge";
import { CTABand } from "@/components/site/cta-band";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = buildMetadata({
  title: "AI Consulting — make your business AI-powered",
  description:
    "Cybromines is your AI partner: we find your highest-impact use cases, integrate the right AI tools into your existing stack, build agents and automations, and train your team to use them.",
  path: "/ai-consulting",
});

const whatWeDo = [
  {
    icon: Radar,
    title: "AI opportunity assessment",
    description:
      "We audit how your teams actually work and pinpoint the use cases where AI delivers the biggest, fastest return — no guesswork, no hype.",
  },
  {
    icon: Blocks,
    title: "Tool selection & integration",
    description:
      "We choose the right AI tools and wire them into the systems you already use — CRM, ERP, email, chat, spreadsheets — so they work as one.",
  },
  {
    icon: Bot,
    title: "Custom agents & automations",
    description:
      "We build AI agents and automations around your real processes, not generic templates, so they fit the way your business runs.",
  },
  {
    icon: GraduationCap,
    title: "Team enablement & training",
    description:
      "We get your people confidently using AI day to day, with role-specific playbooks, prompts, and hands-on sessions.",
  },
  {
    icon: ShieldCheck,
    title: "Governance & safety",
    description:
      "Clear guardrails, data controls, and audit trails so AI adoption is secure, compliant, and something you can stand behind.",
  },
  {
    icon: TrendingUp,
    title: "Measure & scale",
    description:
      "We track the hours saved and the outcomes delivered, then expand what works across more teams and more workflows.",
  },
];

const steps = [
  { title: "Discover", description: "Workshops to surface your highest-impact AI use cases and quick wins." },
  { title: "Map", description: "A prioritised roadmap and the right tool stack for each opportunity." },
  { title: "Integrate", description: "We connect the tools and build the agents and automations." },
  { title: "Adopt", description: "Hands-on training and rollout so your team actually uses it." },
  { title: "Optimise", description: "Measure impact, refine, and scale what works across the company." },
];

const toolGroups = [
  { group: "AI models", items: ["OpenAI / ChatGPT", "Anthropic / Claude", "Google Gemini"] },
  { group: "Automation", items: ["n8n", "Zapier", "Make"] },
  { group: "Work tools", items: ["Slack", "WhatsApp", "Google Workspace", "Microsoft 365", "Notion"] },
  { group: "Business systems", items: ["HubSpot", "Salesforce", "Your ERP & CRM", "Cybromines platform"] },
];

const useCases = [
  { dept: "Sales", items: ["Lead qualification & follow-up", "Proposal & quote drafting", "Pipeline insights"] },
  { dept: "Support", items: ["First-response answers", "Ticket triage & routing", "Knowledge-base search"] },
  { dept: "Marketing", items: ["Content drafting & repurposing", "Campaign analysis", "SEO research"] },
  { dept: "Finance", items: ["Invoice capture & matching", "Report generation", "Anomaly detection"] },
  { dept: "Operations", items: ["Document processing", "Status reporting", "Process automation"] },
  { dept: "HR", items: ["CV screening", "Policy Q&A", "Onboarding assistants"] },
];

export default function AiConsultingPage() {
  return (
    <>
      <JsonLd
        schema={serviceSchema({
          name: "AI Consulting & Adoption",
          description:
            "AI adoption services: opportunity assessment, tool integration, custom agents and automations, team training, and governance.",
          path: "/ai-consulting",
        })}
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
              { name: "AI Consulting", path: "/ai-consulting" },
            ]}
          />
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            <Reveal>
              <span className="eyebrow inline-flex items-center gap-2.5">
                <span className="inline-flex size-7 items-center justify-center rounded-lg border border-border bg-surface text-cyan">
                  <Sparkles className="size-4" />
                </span>
                AI consulting &amp; integration
              </span>
              <h1 className="mt-5 text-[length:var(--text-hero)] font-semibold leading-[1.04] tracking-[-0.03em]">
                Make your whole business{" "}
                <span className="text-gradient">AI-powered</span>
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted md:text-xl">
                You don&apos;t need to build software to win with AI. We find your
                highest-impact use cases, integrate the right AI tools into the
                systems you already run, automate the busywork, and get your team
                confidently using AI — so productivity actually goes up.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button asChild size="lg">
                  <Link href="/contact">
                    Book an AI consultation
                    <ArrowRight className="size-4" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="secondary">
                  <Link href="/ai-agents">See our AI agents</Link>
                </Button>
              </div>
            </Reveal>
            <Reveal delay={1} className="mx-auto w-full max-w-md lg:max-w-none">
              <AiToolsHub />
            </Reveal>
          </div>
        </Container>
      </section>

      {/* What we do */}
      <section className="py-24 md:py-32">
        <Container>
          <SectionHeading
            eyebrow="What we do"
            title="An AI partner, not just an advisor"
            subtitle="We don't hand you a slide deck and leave. We assess, integrate, build, and train — then stay to measure and scale."
          />
          <div className="mt-14 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {whatWeDo.map((item, i) => (
              <Reveal key={item.title} delay={i % 3} as="div">
                <FeatureCard
                  icon={item.icon}
                  title={item.title}
                  description={item.description}
                  featured={i === 0}
                />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <ProcessTimeline
        eyebrow="How we work"
        title="From first workshop to measurable productivity"
        subtitle="A practical, low-risk path to AI adoption — starting with quick wins, scaling to transformation."
        steps={steps}
      />

      {/* Tools we integrate */}
      <section className="border-y border-border bg-surface/30 py-24 md:py-32">
        <Container>
          <div className="flex flex-col items-center gap-4 text-center">
            <AiBadge label="We meet your stack where it is" />
            <h2 className="max-w-3xl text-[length:var(--text-section)] font-semibold leading-[1.1] tracking-tight">
              We integrate the tools you already use
            </h2>
            <p className="max-w-2xl text-base text-muted md:text-lg">
              The value isn&apos;t one tool — it&apos;s connecting the right ones around
              your real use cases. We wire leading AI models and automation
              platforms into your existing systems so intelligence flows across
              everything.
            </p>
          </div>
          <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {toolGroups.map((g, i) => (
              <Reveal key={g.group} delay={i} as="div">
                <div className="surface-card h-full p-6">
                  <p className="font-mono text-xs uppercase tracking-widest text-cyan">
                    {g.group}
                  </p>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {g.items.map((item) => (
                      <li
                        key={item}
                        className="rounded-full border border-border bg-surface-elevated px-3 py-1 text-[13px] text-foreground"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Use cases by function */}
      <section className="py-24 md:py-32">
        <Container>
          <SectionHeading
            eyebrow="Where it pays off"
            title="Use cases across every function"
            subtitle="A starting menu of where AI delivers fast — we tailor the exact mix to your business."
          />
          <div className="mt-14 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {useCases.map((uc, i) => (
              <Reveal key={uc.dept} delay={i % 3} as="div">
                <div className="surface-card h-full p-6">
                  <p className="font-mono text-xs uppercase tracking-widest text-cyan">
                    {uc.dept}
                  </p>
                  <ul className="mt-3 flex flex-col gap-2">
                    {uc.items.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-sm text-muted">
                        <span className="size-1.5 shrink-0 rounded-full bg-accent-gradient" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <CTABand
        eyebrow="Start small, win fast"
        title="Not sure where AI fits? That's exactly where we start."
        subtitle="Book a consultation and we'll map two or three high-ROI AI use cases for your business — and show you how we'd ship them."
        primary={{ label: "Book an AI consultation", href: "/contact" }}
        secondary={{ label: "Explore our solutions", href: "/solutions" }}
      />
    </>
  );
}
