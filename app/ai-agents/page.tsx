import type { Metadata } from "next";
import {
  FileText,
  MessagesSquare,
  Keyboard,
  FileBarChart,
  Workflow,
  BellRing,
  Plug,
  GraduationCap,
  Bot,
  Activity,
  ShieldCheck,
  ScrollText,
  Lock,
} from "lucide-react";

import Link from "next/link";

import { buildMetadata } from "@/lib/seo/metadata";
import { serviceSchema } from "@/lib/seo/jsonld";
import { solutions } from "@/lib/data/solutions";
import { JsonLd } from "@/components/site/json-ld";
import { PageHero } from "@/components/site/page-hero";
import { Container } from "@/components/site/container";
import { SectionHeading } from "@/components/site/section-heading";
import { Reveal } from "@/components/site/reveal";
import { FeatureCard } from "@/components/site/feature-card";
import { ProcessTimeline } from "@/components/site/process-timeline";
import { AgentNetwork } from "@/components/site/agent-network";
import { CTABand } from "@/components/site/cta-band";

export const metadata: Metadata = buildMetadata({
  title: "AI Agents — one AI layer across every system",
  description:
    "Cybromines puts AI at the core of every system — agents that process documents, answer customers, move data, and flag anomalies inside your ERP, CRM, POS, and more.",
  path: "/ai-agents",
});

const capabilities = [
  {
    icon: FileText,
    title: "Document processing",
    description:
      "Agents read invoices, POs, and contracts, extract the fields that matter, and post them into your ERP for approval — accurately, at volume.",
  },
  {
    icon: MessagesSquare,
    title: "Conversational support",
    description:
      "Answer routine customer and employee questions instantly across WhatsApp, email, and chat, with full context from your systems.",
  },
  {
    icon: Keyboard,
    title: "Data entry automation",
    description:
      "Move data between systems, reconcile records, and keep master data clean without a human copying fields between screens.",
  },
  {
    icon: FileBarChart,
    title: "Report generation",
    description:
      "Produce the daily, weekly, and board reports your team builds by hand — on schedule, formatted, and ready to send.",
  },
  {
    icon: Workflow,
    title: "Workflow orchestration",
    description:
      "Chain steps across departments — approve, notify, update, escalate — so a process runs end to end without manual handoffs.",
  },
  {
    icon: BellRing,
    title: "Anomaly alerts",
    description:
      "Watch transactions for duplicate payments, margin drops, or unusual patterns, and flag them to the right person before they cost you.",
  },
];

const steps = [
  {
    icon: Plug,
    title: "Connect",
    description:
      "Securely connect the agent to your ERP, inbox, and tools through governed, read-and-write integrations.",
  },
  {
    icon: GraduationCap,
    title: "Train on your data",
    description:
      "Ground the agent in your processes, documents, and rules so it acts the way your best operator would.",
  },
  {
    icon: Bot,
    title: "Automate",
    description:
      "Hand off whole tasks. The agent executes within the limits you set and escalates anything outside them.",
  },
  {
    icon: Activity,
    title: "Monitor",
    description:
      "Every action is logged and reviewable. Tune behaviour, expand scope, and measure hours saved over time.",
  },
];

const useCases = [
  {
    dept: "Finance",
    items: ["Invoice capture & matching", "Payment run preparation", "Duplicate & fraud flags"],
  },
  {
    dept: "Sales",
    items: ["Instant lead qualification", "Quote drafting", "Follow-up sequences"],
  },
  {
    dept: "Support",
    items: ["Ticket triage & routing", "First-response answers", "CSAT follow-ups"],
  },
  {
    dept: "Operations",
    items: ["Stock reorder suggestions", "Status reporting", "Exception escalation"],
  },
];

const security = [
  {
    icon: Lock,
    title: "Data isolation",
    description:
      "Your data stays yours. Each deployment runs in an isolated tenant — never pooled with other customers or used to train shared models.",
  },
  {
    icon: ScrollText,
    title: "Full audit logs",
    description:
      "Every action an agent takes is recorded with inputs, outputs, and timestamps, so you always have a reviewable trail.",
  },
  {
    icon: ShieldCheck,
    title: "Human-in-the-loop",
    description:
      "You decide what runs autonomously and what needs sign-off. Approval gates keep high-stakes actions under human control.",
  },
];

export default function AIAgentsPage() {
  return (
    <>
      <JsonLd
        schema={serviceSchema({
          name: "AI Agents for business automation",
          description:
            "Autonomous AI agents that automate document processing, support, data entry, reporting, and anomaly detection on enterprise data.",
          path: "/ai-agents",
        })}
      />

      <PageHero
        eyebrow="The AI layer"
        icon={Bot}
        title="One AI layer, running across every system"
        subtitle="AI isn't a feature we bolt on — it's the core of everything we build. The same agents work inside your ERP, CRM, POS, and every other system: reading documents, answering customers, moving data, and flagging problems, grounded in your data and supervised on your terms."
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "AI", path: "/ai-agents" },
        ]}
        primary={{ label: "Book a demo", href: "/contact" }}
        secondary={{ label: "Explore solutions", href: "/solutions" }}
      />

      {/* Capability grid */}
      <section className="py-24 md:py-32">
        <Container>
          <SectionHeading
            eyebrow="What an agent can do"
            title="Whole tasks, not just suggestions"
            subtitle="Each capability is a job an agent can own end to end, escalating to your team only when it should."
          />
          <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {capabilities.map((cap, i) => (
              <Reveal key={cap.title} delay={i % 3} as="div">
                <FeatureCard
                  icon={cap.icon}
                  title={cap.title}
                  description={cap.description}
                  featured={i === 0}
                />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* AI inside every system */}
      <section id="everywhere" className="scroll-mt-24 border-y border-border bg-surface/30 py-24 md:py-32">
        <Container>
          <SectionHeading
            eyebrow="AI everywhere"
            title="The same intelligence, inside every system"
            subtitle="Wherever your work happens, an agent is already there. Here's a taste of what AI does inside each system we build."
          />
          <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {solutions.map((sol, i) => {
              const Icon = sol.icon;
              return (
                <Reveal key={sol.slug} delay={i % 3} as="div">
                  <Link
                    href={`/solutions/${sol.slug}`}
                    className="group flex h-full flex-col rounded-card border border-border bg-surface p-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-border-strong"
                  >
                    <div className="flex items-center gap-2.5">
                      <span className="inline-flex size-9 items-center justify-center rounded-lg border border-border bg-surface-elevated text-cyan transition-colors group-hover:border-border-strong">
                        <Icon className="size-[18px]" />
                      </span>
                      <h3 className="font-display text-base font-medium tracking-tight text-foreground">
                        {sol.name}
                      </h3>
                    </div>
                    <p className="mt-3 flex-1 text-[14px] leading-relaxed text-muted">
                      {sol.aiHook}
                    </p>
                    <ul className="mt-4 flex flex-col gap-1.5 border-t border-border pt-4">
                      {sol.aiCapabilities.map((cap) => (
                        <li key={cap} className="flex items-center gap-2 text-[13px] text-muted">
                          <span className="size-1 shrink-0 rounded-full bg-accent-gradient" />
                          {cap}
                        </li>
                      ))}
                    </ul>
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </Container>
      </section>

      <ProcessTimeline
        eyebrow="How it works"
        title="From connection to autonomy in four steps"
        subtitle="A governed path from first integration to agents you trust with real work."
        steps={steps}
      />

      {/* Use cases by department + visual */}
      <section className="border-y border-border bg-surface/30 py-24 md:py-32">
        <Container>
          <div className="grid items-center gap-14 lg:grid-cols-2">
            <Reveal>
              <span className="eyebrow">By department</span>
              <h2 className="mt-4 text-[length:var(--text-section)] font-semibold leading-[1.1] tracking-tight">
                A team of agents, working in parallel
              </h2>
              <p className="mt-4 max-w-lg text-base text-muted md:text-lg">
                Orchestrated from one place, agents cover the repetitive work
                across every department — so your people focus on the decisions
                that need them.
              </p>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {useCases.map((uc) => (
                  <div key={uc.dept} className="rounded-xl border border-border bg-surface p-5">
                    <p className="font-mono text-xs uppercase tracking-widest text-cyan">
                      {uc.dept}
                    </p>
                    <ul className="mt-3 flex flex-col gap-2">
                      {uc.items.map((item) => (
                        <li
                          key={item}
                          className="flex items-center gap-2 text-sm text-muted"
                        >
                          <span className="size-1.5 shrink-0 rounded-full bg-accent-gradient" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </Reveal>
            <Reveal delay={1} className="mx-auto w-full max-w-md lg:max-w-none">
              <AgentNetwork />
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Security & compliance */}
      <section className="py-24 md:py-32">
        <Container>
          <SectionHeading
            eyebrow="Security & compliance"
            title="Autonomy you can actually govern"
            subtitle="Agents only earn more responsibility once you trust them. The controls are built in from day one."
          />
          <div className="mt-14 grid gap-4 md:grid-cols-3">
            {security.map((item, i) => (
              <Reveal key={item.title} delay={i} as="div">
                <div className="surface-card h-full p-7">
                  <span className="inline-flex size-11 items-center justify-center rounded-xl border border-border bg-surface-elevated text-cyan">
                    <item.icon className="size-5" />
                  </span>
                  <h3 className="mt-5 font-display text-lg font-medium tracking-tight">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-muted">
                    {item.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <CTABand
        title="Put your first agent to work"
        subtitle="Tell us your most repetitive process. We'll show you an agent that can run it — on your data, with your guardrails."
        primary={{ label: "Book a demo", href: "/contact" }}
        secondary={{ label: "See WhatsApp CRM", href: "/integrations/whatsapp-crm" }}
      />
    </>
  );
}
