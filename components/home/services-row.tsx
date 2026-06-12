import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/site/container";
import { SectionHeading } from "@/components/site/section-heading";
import { Reveal } from "@/components/site/reveal";
import { services } from "@/lib/data/services";

export function ServicesRow() {
  return (
    <section className="border-y border-border bg-surface/30 py-24 md:py-32">
      <Container>
        <SectionHeading
          eyebrow="Services"
          title="Beyond the platform"
          subtitle="When you need something built, found, or shipped, our team works as an extension of yours."
        />

        <div className="mt-14 grid grid-cols-1 gap-4 md:grid-cols-3">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <Reveal key={service.slug} delay={i} as="div">
                <Link
                  href={`/services/${service.slug}`}
                  className="group flex h-full flex-col rounded-card border border-border bg-surface p-7 transition-all duration-300 hover:-translate-y-0.5 hover:border-border-strong"
                >
                  <div className="flex items-start justify-between">
                    <span className="inline-flex size-11 items-center justify-center rounded-xl border border-border bg-surface-elevated text-cyan transition-colors group-hover:border-border-strong">
                      <Icon className="size-5" />
                    </span>
                    <ArrowUpRight className="size-5 text-muted-subtle transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-foreground" />
                  </div>
                  <h3 className="mt-5 font-display text-lg font-medium tracking-tight text-foreground">
                    {service.name}
                  </h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-muted">
                    {service.tagline}
                  </p>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
