import Link from "next/link";
import { ArrowRight, Radar, Blocks, GraduationCap } from "lucide-react";
import { Container } from "@/components/site/container";
import { Reveal } from "@/components/site/reveal";
import { Button } from "@/components/ui/button";
import { AiToolsHub } from "@/components/site/ai-tools-hub";

const points = [
  { icon: Radar, title: "Find the use cases", description: "We pinpoint where AI delivers the fastest ROI in your business." },
  { icon: Blocks, title: "Integrate your tools", description: "We connect the right AI tools into the systems you already run." },
  { icon: GraduationCap, title: "Get your team using it", description: "Hands-on training so adoption actually sticks." },
];

export function AiConsultingBand() {
  return (
    <section className="py-24 md:py-32">
      <Container>
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal delay={1} className="order-2 mx-auto w-full max-w-md lg:order-1 lg:max-w-none">
            <AiToolsHub />
          </Reveal>

          <Reveal className="order-1 lg:order-2">
            <span className="eyebrow inline-flex items-center gap-2">
              <span className="size-1.5 rounded-full bg-accent-gradient" aria-hidden />
              AI consulting
            </span>
            <h2 className="mt-4 text-[length:var(--text-section)] font-semibold leading-[1.1] tracking-tight">
              Not building software? We&apos;ll still make you AI-powered.
            </h2>
            <p className="mt-4 max-w-lg text-base text-muted md:text-lg">
              Beyond our own systems, we act as your AI partner — helping you adopt
              and use AI across the tools you already have, so your whole team gets
              more productive.
            </p>

            <ul className="mt-8 flex flex-col gap-4">
              {points.map((p) => (
                <li key={p.title} className="flex gap-3.5">
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-lg border border-border bg-surface text-cyan">
                    <p.icon className="size-5" />
                  </span>
                  <span className="flex flex-col">
                    <span className="text-sm font-medium text-foreground">{p.title}</span>
                    <span className="text-sm text-muted">{p.description}</span>
                  </span>
                </li>
              ))}
            </ul>

            <Button asChild className="mt-8" variant="secondary">
              <Link href="/ai-consulting">
                Explore AI consulting
                <ArrowRight className="size-4" />
              </Link>
            </Button>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
