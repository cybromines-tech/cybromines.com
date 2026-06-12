import Link from "next/link";
import { ArrowRight, FileText, Headset, Radar, FileBarChart } from "lucide-react";
import { Container } from "@/components/site/container";
import { Reveal } from "@/components/site/reveal";
import { Button } from "@/components/ui/button";
import { AiConsole } from "@/components/site/ai-console";

const capabilities = [
  { icon: FileText, title: "Reads & processes documents", description: "Invoices, POs, contracts — extracted and posted." },
  { icon: Headset, title: "Answers customers", description: "Across WhatsApp, web, and chat, with real data." },
  { icon: Radar, title: "Watches for anomalies", description: "Duplicate payments, margin drops, fraud — flagged." },
  { icon: FileBarChart, title: "Generates reports", description: "On schedule, formatted, ready to send." },
];

export function AiConsoleBand() {
  return (
    <section className="border-y border-border bg-surface/30 py-24 md:py-32">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <span className="eyebrow inline-flex items-center gap-2">
              <span className="size-1.5 rounded-full bg-accent-gradient" aria-hidden />
              AI, working across your stack
            </span>
            <h2 className="mt-4 text-[length:var(--text-section)] font-semibold leading-[1.1] tracking-tight">
              One AI brain, every system
            </h2>
            <p className="mt-4 max-w-lg text-base text-muted md:text-lg">
              The same AI layer runs across every product we ship. It doesn&apos;t
              just answer questions — it does the work, hands off to your team when
              judgement is needed, and logs every action.
            </p>

            <ul className="mt-8 grid gap-4 sm:grid-cols-2">
              {capabilities.map((cap) => (
                <li key={cap.title} className="flex gap-3">
                  <span className="flex size-9 shrink-0 items-center justify-center rounded-lg border border-border bg-surface text-cyan">
                    <cap.icon className="size-[18px]" />
                  </span>
                  <span className="flex flex-col">
                    <span className="text-sm font-medium text-foreground">{cap.title}</span>
                    <span className="text-[13px] text-muted">{cap.description}</span>
                  </span>
                </li>
              ))}
            </ul>

            <Button asChild className="mt-8" variant="secondary">
              <Link href="/ai-agents">
                Explore AI agents
                <ArrowRight className="size-4" />
              </Link>
            </Button>
          </Reveal>

          <Reveal delay={1}>
            <AiConsole />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
