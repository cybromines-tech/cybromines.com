import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Handshake } from "lucide-react";

import { services, getService, serviceSlugs } from "@/lib/data/services";
import { buildMetadata } from "@/lib/seo/metadata";
import { serviceSchema } from "@/lib/seo/jsonld";
import { JsonLd } from "@/components/site/json-ld";
import { PageHero } from "@/components/site/page-hero";
import { Container } from "@/components/site/container";
import { SectionHeading } from "@/components/site/section-heading";
import { Reveal } from "@/components/site/reveal";
import { FeatureCard } from "@/components/site/feature-card";
import { ProcessTimeline } from "@/components/site/process-timeline";
import { CrossSell } from "@/components/site/cross-sell";
import { CTABand } from "@/components/site/cta-band";

export const dynamicParams = false;

export function generateStaticParams() {
  return serviceSlugs.map((service) => ({ service }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ service: string }>;
}): Promise<Metadata> {
  const { service } = await params;
  const svc = getService(service);
  if (!svc) return {};
  return buildMetadata({
    title: svc.name,
    description: svc.metaDescription,
    path: `/services/${svc.slug}`,
  });
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ service: string }>;
}) {
  const { service } = await params;
  const svc = getService(service);
  if (!svc) notFound();

  const others = services
    .filter((s) => s.slug !== svc.slug)
    .map((s) => ({
      name: s.name,
      href: `/services/${s.slug}`,
      tagline: s.tagline,
      icon: s.icon,
    }));

  return (
    <>
      <JsonLd
        schema={serviceSchema({
          name: svc.name,
          description: svc.metaDescription,
          path: `/services/${svc.slug}`,
        })}
      />

      <PageHero
        eyebrow={`Services · ${svc.name}`}
        icon={svc.icon}
        title={svc.promise}
        subtitle={svc.tagline}
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
          { name: svc.name, path: `/services/${svc.slug}` },
        ]}
        primary={{ label: "Start a project", href: "/contact" }}
        secondary={{ label: "All services", href: "/services" }}
      />

      {/* What's included */}
      <section className="py-24 md:py-32">
        <Container>
          <SectionHeading
            eyebrow="What's included"
            title="A complete engagement, end to end"
            subtitle="No surprises and no gaps — here's exactly what you get when you work with us."
          />
          <div className="mt-14 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {svc.included.map((item, i) => (
              <Reveal key={item.title} delay={i % 3} as="div">
                <FeatureCard
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
        eyebrow="Process"
        title="A clear path from idea to impact"
        subtitle="Every engagement follows the same proven five-stage process."
        steps={svc.process}
      />

      {/* Tech stack + engagement */}
      <section className="border-y border-border bg-surface/30 py-24 md:py-32">
        <Container>
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
            {svc.stack ? (
              <Reveal>
                <span className="eyebrow">Tech we build on</span>
                <h2 className="mt-4 text-2xl font-semibold tracking-tight md:text-3xl">
                  A modern, maintainable stack
                </h2>
                <p className="mt-3 text-[15px] text-muted">
                  We choose tools that your team can hire for and that will still
                  be a good decision in five years.
                </p>
                <div className="mt-6 flex flex-wrap gap-2.5">
                  {svc.stack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-border bg-surface px-3.5 py-1.5 font-mono text-[13px] text-muted"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </Reveal>
            ) : (
              <Reveal>
                <span className="eyebrow">How we measure success</span>
                <h2 className="mt-4 text-2xl font-semibold tracking-tight md:text-3xl">
                  Outcomes, not output
                </h2>
                <p className="mt-3 text-[15px] text-muted">
                  We agree on the metrics that matter before we start — rankings,
                  traffic, qualified leads — and report against them every month.
                </p>
              </Reveal>
            )}

            <Reveal delay={1}>
              <div className="surface-card flex h-full flex-col justify-center gap-4 p-8">
                <span className="inline-flex size-11 items-center justify-center rounded-xl border border-border bg-surface-elevated text-cyan">
                  <Handshake className="size-5" />
                </span>
                <h3 className="font-display text-xl font-medium tracking-tight">
                  Engagement model
                </h3>
                <p className="text-[15px] leading-relaxed text-muted">{svc.engagement}</p>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <CrossSell
        eyebrow="More services"
        title="Other ways we can help"
        items={others}
      />

      <CTABand
        title="Let's build it together"
        subtitle="Tell us what you're trying to ship. We'll come back with a clear plan, timeline, and price."
        primary={{ label: "Start a project", href: "/contact" }}
        secondary={{ label: "Talk to sales", href: "/contact" }}
      />
    </>
  );
}
