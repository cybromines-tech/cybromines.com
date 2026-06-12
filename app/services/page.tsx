import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { services } from "@/lib/data/services";
import { buildMetadata } from "@/lib/seo/metadata";
import { PageHero } from "@/components/site/page-hero";
import { Container } from "@/components/site/container";
import { Reveal } from "@/components/site/reveal";
import { CTABand } from "@/components/site/cta-band";

export const metadata: Metadata = buildMetadata({
  title: "Services — custom software, SEO, and mobile apps",
  description:
    "Beyond the platform: Cybromines builds custom software and mobile apps, and runs SEO programs that grow qualified organic traffic for enterprises.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="An engineering team that works as part of yours"
        subtitle="When the off-the-shelf platform isn't enough, our team designs, builds, and grows the software that gives you an edge — on the same standards we hold our own product to."
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
        ]}
        primary={{ label: "Start a project", href: "/contact" }}
        secondary={{ label: "View solutions", href: "/solutions" }}
      />

      <section className="py-24 md:py-32">
        <Container>
          <div className="flex flex-col gap-6">
            {services.map((service, i) => {
              const Icon = service.icon;
              return (
                <Reveal key={service.slug} delay={i} as="article">
                  <Link
                    href={`/services/${service.slug}`}
                    className="group grid gap-6 rounded-card border border-border bg-surface p-7 transition-all duration-300 hover:-translate-y-0.5 hover:border-border-strong md:grid-cols-[auto_1fr_auto] md:items-center md:p-9"
                  >
                    <span className="inline-flex size-14 items-center justify-center rounded-2xl border border-border bg-surface-elevated text-cyan transition-colors group-hover:border-border-strong">
                      <Icon className="size-6" />
                    </span>
                    <div>
                      <h2 className="font-display text-2xl font-medium tracking-tight text-foreground">
                        {service.name}
                      </h2>
                      <p className="mt-2 max-w-2xl text-[15px] leading-relaxed text-muted">
                        {service.promise}
                      </p>
                      <div className="mt-4 flex flex-wrap gap-2">
                        {service.included.slice(0, 4).map((inc) => (
                          <span
                            key={inc.title}
                            className="rounded-full border border-border bg-surface-elevated px-3 py-1 text-[13px] text-muted"
                          >
                            {inc.title}
                          </span>
                        ))}
                      </div>
                    </div>
                    <span className="inline-flex items-center gap-1.5 justify-self-start text-sm font-medium text-foreground md:justify-self-end">
                      Learn more
                      <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
                    </span>
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </Container>
      </section>

      <CTABand
        title="Have something specific in mind?"
        subtitle="Custom build, an SEO program, or a new mobile app — tell us the goal and we'll scope it."
        primary={{ label: "Start a project", href: "/contact" }}
        secondary={{ label: "Talk to sales", href: "/contact" }}
      />
    </>
  );
}
