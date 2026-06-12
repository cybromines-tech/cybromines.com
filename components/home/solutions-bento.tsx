import Link from "next/link";
import { ArrowUpRight, ArrowRight, Code2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { Container } from "@/components/site/container";
import { SectionHeading } from "@/components/site/section-heading";
import { Reveal } from "@/components/site/reveal";
import { AiBadge } from "@/components/site/ai-badge";
import { SystemMockup } from "@/components/site/system-mockup";
import { solutions, type Solution } from "@/lib/data/solutions";

function SolutionCard({ solution }: { solution: Solution }) {
  const Icon = solution.icon;
  return (
    <Link
      href={`/solutions/${solution.slug}`}
      className="group flex h-full flex-col rounded-card border border-border bg-surface p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-border-strong"
    >
      <SystemMockup variant={solution.mockup} />
      <div className="mt-5 flex items-start justify-between gap-3">
        <span className="flex items-center gap-2.5">
          <span className="inline-flex size-9 items-center justify-center rounded-lg border border-border bg-surface-elevated text-cyan transition-colors group-hover:border-border-strong">
            <Icon className="size-[18px]" />
          </span>
          <h3 className="font-display text-base font-medium tracking-tight text-foreground">
            {solution.name}
          </h3>
        </span>
        <ArrowUpRight className="size-4 shrink-0 text-muted-subtle transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-foreground" />
      </div>
      <p className="mt-2 flex-1 text-[14px] leading-relaxed text-muted">{solution.tagline}</p>
      <div className="mt-4 flex items-center gap-2 border-t border-border pt-3.5">
        <AiBadge />
        <span className="truncate text-[12px] text-muted-subtle">{solution.aiHook}</span>
      </div>
    </Link>
  );
}

function FlagshipCard({ solution }: { solution: Solution }) {
  const Icon = solution.icon;
  return (
    <Link
      href={`/solutions/${solution.slug}`}
      className="border-gradient-top group flex h-full flex-col gap-5 rounded-card border border-border bg-surface p-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-border-strong md:flex-row md:items-center md:gap-7"
    >
      <div className="flex flex-1 flex-col">
        <span className="flex items-center gap-2.5">
          <span className="inline-flex size-10 items-center justify-center rounded-xl border border-border bg-surface-elevated text-cyan">
            <Icon className="size-5" />
          </span>
          <h3 className="font-display text-xl font-medium tracking-tight text-foreground">
            {solution.name}
          </h3>
          <span className="rounded-full border border-border bg-surface-elevated px-2 py-0.5 font-mono text-[10px] uppercase tracking-wide text-muted-subtle">
            Flagship
          </span>
        </span>
        <p className="mt-3 text-[15px] leading-relaxed text-muted">{solution.promise}</p>
        <ul className="mt-4 flex flex-col gap-2">
          {solution.features.slice(0, 3).map((f) => (
            <li key={f.title} className="flex items-center gap-2 text-sm text-foreground/90">
              <span className="size-1.5 rounded-full bg-accent-gradient" />
              {f.title}
            </li>
          ))}
        </ul>
        <div className="mt-5 flex items-center gap-2">
          <AiBadge />
          <span className="inline-flex items-center gap-1 text-sm font-medium text-foreground">
            Explore the ERP
            <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </span>
        </div>
      </div>
      <div className="md:w-[44%]">
        <SystemMockup variant={solution.mockup} />
      </div>
    </Link>
  );
}

export function SolutionsBento() {
  const flagship = solutions.find((s) => s.flagship)!;
  const rest = solutions.filter((s) => !s.flagship);

  return (
    <section className="py-24 md:py-32">
      <Container>
        <SectionHeading
          eyebrow="Solutions"
          title="Every system. One platform. AI everywhere."
          subtitle="Stop stitching together a dozen vendors. Cybromines builds and integrates the systems your business runs on — each one AI-native from day one."
        />

        <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <Reveal as="div" className="md:col-span-2">
            <FlagshipCard solution={flagship} />
          </Reveal>
          {rest.map((solution, i) => (
            <Reveal key={solution.slug} delay={(i % 3) + 1} as="div">
              <SolutionCard solution={solution} />
            </Reveal>
          ))}

          {/* Bespoke CTA tile fills the grid */}
          <Reveal as="div" delay={1}>
            <Link
              href="/services/custom-software"
              className={cn(
                "group flex h-full flex-col justify-between rounded-card border border-dashed border-border-strong bg-surface/40 p-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-cyan/40",
              )}
            >
              <span className="inline-flex size-10 items-center justify-center rounded-xl border border-border bg-surface-elevated text-cyan">
                <Code2 className="size-5" />
              </span>
              <div className="mt-6">
                <h3 className="font-display text-base font-medium tracking-tight text-foreground">
                  Need something bespoke?
                </h3>
                <p className="mt-2 text-[14px] leading-relaxed text-muted">
                  We build custom software and mobile apps around the way your
                  business actually works.
                </p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-foreground">
                  Custom development
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
                </span>
              </div>
            </Link>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
