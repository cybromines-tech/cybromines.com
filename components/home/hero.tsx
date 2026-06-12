import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { Container } from "@/components/site/container";
import { Button } from "@/components/ui/button";
import { AiCore } from "@/components/site/ai-core";

const systems = ["ERP", "CRM", "POS", "Inventory", "Production", "Property", "Queue"];

// Orchestrated entrance is pure CSS (.hero-rise + animation-delay) — no JS,
// so the hero paints and animates without waiting on hydration.
const rise = (delay: number) => ({ style: { animationDelay: `${delay}ms` } });

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-28 md:pt-36">
      {/* atmosphere */}
      <div className="bg-grid pointer-events-none absolute inset-0 -z-10 opacity-60" aria-hidden />
      <div
        className="pointer-events-none absolute left-1/2 top-[-10%] -z-10 h-[520px] w-[900px] max-w-full -translate-x-1/2 rounded-full bg-violet/10 blur-[130px]"
        aria-hidden
      />

      <Container>
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[1.05fr_1fr] lg:gap-8">
          {/* Copy */}
          <div className="flex flex-col">
            <span
              {...rise(40)}
              className="hero-rise inline-flex w-fit items-center gap-2 rounded-full border border-border bg-surface/60 px-3.5 py-1.5 text-[13px] text-muted backdrop-blur"
            >
              <Sparkles className="size-3.5 text-cyan" />
              AI-native software house
            </span>

            <h1
              {...rise(120)}
              className="hero-rise mt-6 text-[length:var(--text-hero)] font-semibold leading-[1.04] tracking-[-0.03em] text-foreground"
            >
              Every system your business runs on, built with{" "}
              <span className="text-gradient">AI at the core</span>
            </h1>

            <p
              {...rise(200)}
              className="hero-rise mt-6 max-w-xl text-lg leading-relaxed text-muted md:text-xl"
            >
              Cybromines designs, builds, and integrates the software your operation
              depends on — ERP, CRM, POS, inventory, production, property, and queue
              systems — with autonomous AI agents working across all of it.
            </p>

            <div {...rise(280)} className="hero-rise mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg">
                <Link href="/solutions">
                  Explore solutions
                  <ArrowRight className="size-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="secondary">
                <Link href="/contact">Book a demo</Link>
              </Button>
            </div>

            <ul {...rise(360)} className="hero-rise mt-9 flex flex-wrap gap-2">
              {systems.map((s) => (
                <li
                  key={s}
                  className="rounded-full border border-border bg-surface/50 px-3 py-1 font-mono text-[11px] text-muted"
                >
                  {s}
                </li>
              ))}
            </ul>
          </div>

          {/* Signature AI core */}
          <div className="hero-core-in relative">
            <AiCore />
          </div>
        </div>
      </Container>
    </section>
  );
}
