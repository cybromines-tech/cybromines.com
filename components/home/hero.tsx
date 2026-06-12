"use client";

import Link from "next/link";
import { m, useReducedMotion } from "motion/react";
import { ArrowRight, Sparkles } from "lucide-react";
import { Container } from "@/components/site/container";
import { Button } from "@/components/ui/button";
import { AiCore } from "@/components/site/ai-core";

const systems = ["ERP", "CRM", "POS", "Inventory", "Production", "Property", "Queue"];

export function Hero() {
  const reduce = useReducedMotion();

  const container = {
    hidden: {},
    show: { transition: { staggerChildren: reduce ? 0 : 0.08, delayChildren: 0.05 } },
  };
  const item = {
    hidden: reduce ? { opacity: 0 } : { opacity: 0, y: 14 },
    show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const } },
  };

  return (
    <section className="relative overflow-hidden pt-28 md:pt-36">
      {/* atmosphere */}
      <div className="bg-grid pointer-events-none absolute inset-0 -z-10 opacity-60" aria-hidden />
      <div
        className="pointer-events-none absolute left-1/2 top-[-10%] -z-10 h-[520px] w-[900px] max-w-full -translate-x-1/2 rounded-full bg-violet/10 blur-[130px]"
        aria-hidden
      />

      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_1fr] lg:gap-8">
          {/* Copy */}
          <m.div variants={container} initial="hidden" animate="show" className="flex flex-col">
            <m.span
              variants={item}
              className="inline-flex w-fit items-center gap-2 rounded-full border border-border bg-surface/60 px-3.5 py-1.5 text-[13px] text-muted backdrop-blur"
            >
              <Sparkles className="size-3.5 text-cyan" />
              AI-native software house
            </m.span>

            <m.h1
              variants={item}
              className="mt-6 text-[length:var(--text-hero)] font-semibold leading-[1.04] tracking-[-0.03em] text-foreground"
            >
              Every system your business runs on, built with{" "}
              <span className="text-gradient">AI at the core</span>
            </m.h1>

            <m.p
              variants={item}
              className="mt-6 max-w-xl text-lg leading-relaxed text-muted md:text-xl"
            >
              Cybromines designs, builds, and integrates the software your operation
              depends on — ERP, CRM, POS, inventory, production, property, and queue
              systems — with autonomous AI agents working across all of it.
            </m.p>

            <m.div variants={item} className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg">
                <Link href="/solutions">
                  Explore solutions
                  <ArrowRight className="size-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="secondary">
                <Link href="/contact">Book a demo</Link>
              </Button>
            </m.div>

            <m.ul variants={item} className="mt-9 flex flex-wrap gap-2">
              {systems.map((s) => (
                <li
                  key={s}
                  className="rounded-full border border-border bg-surface/50 px-3 py-1 font-mono text-[11px] text-muted"
                >
                  {s}
                </li>
              ))}
            </m.ul>
          </m.div>

          {/* Signature AI core */}
          <m.div
            initial={reduce ? { opacity: 0 } : { opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: reduce ? 0 : 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <AiCore />
          </m.div>
        </div>
      </Container>
    </section>
  );
}
