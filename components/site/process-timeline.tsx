import { Container } from "./container";
import { SectionHeading } from "./section-heading";
import { Reveal } from "./reveal";

export interface ProcessStep {
  title: string;
  description: string;
}

/** Horizontal (desktop) / vertical (mobile) numbered stepper. */
export function ProcessTimeline({
  eyebrow = "How we work",
  title,
  subtitle,
  steps,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  steps: ProcessStep[];
}) {
  return (
    <section className="py-24 md:py-32">
      <Container>
        <SectionHeading eyebrow={eyebrow} title={title} subtitle={subtitle} />
        <div className="relative mt-14">
          {/* connecting line (desktop) */}
          <div
            className="absolute left-0 right-0 top-5 hidden h-px bg-border lg:block"
            aria-hidden
          />
          <ol className="flex flex-col gap-8 lg:flex-row lg:gap-6">
            {steps.map((step, i) => (
              <Reveal
                key={step.title}
                delay={i}
                as="li"
                className="relative flex flex-1 flex-col gap-3"
              >
                <span className="relative z-10 flex size-10 items-center justify-center rounded-full border border-border-strong bg-surface font-mono text-sm text-foreground">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="font-display text-base font-medium tracking-tight text-foreground">
                  {step.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted">{step.description}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </Container>
    </section>
  );
}
