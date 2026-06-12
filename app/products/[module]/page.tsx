import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { modules, getModule, moduleSlugs } from "@/lib/data/modules";
import { buildMetadata } from "@/lib/seo/metadata";
import {
  softwareApplicationSchema,
  faqSchema,
} from "@/lib/seo/jsonld";
import { JsonLd } from "@/components/site/json-ld";
import { PageHero } from "@/components/site/page-hero";
import { Container } from "@/components/site/container";
import { SectionHeading } from "@/components/site/section-heading";
import { Reveal } from "@/components/site/reveal";
import { FeatureCard } from "@/components/site/feature-card";
import { MobileAppShowcase } from "@/components/site/mobile-app-showcase";
import { FAQAccordion } from "@/components/site/faq-accordion";
import { CrossSell } from "@/components/site/cross-sell";
import { CTABand } from "@/components/site/cta-band";

export const dynamicParams = false;

export function generateStaticParams() {
  return moduleSlugs.map((module) => ({ module }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ module: string }>;
}): Promise<Metadata> {
  const { module } = await params;
  const mod = getModule(module);
  if (!mod) return {};
  return buildMetadata({
    title: `${mod.name} module — Cybromines ERP`,
    description: mod.metaDescription,
    path: `/products/${mod.slug}`,
  });
}

export default async function ModulePage({
  params,
}: {
  params: Promise<{ module: string }>;
}) {
  const { module } = await params;
  const mod = getModule(module);
  if (!mod) notFound();

  const others = modules
    .filter((m) => m.slug !== mod.slug)
    .map((m) => ({
      name: m.name,
      href: `/products/${m.slug}`,
      tagline: m.tagline,
      icon: m.icon,
    }));

  return (
    <>
      <JsonLd
        schema={[
          softwareApplicationSchema({
            name: `Cybromines ${mod.name}`,
            description: mod.metaDescription,
            path: `/products/${mod.slug}`,
          }),
          faqSchema(mod.faqs),
        ]}
      />

      <PageHero
        eyebrow={`ERP System · ${mod.name}`}
        icon={mod.icon}
        title={mod.promise}
        subtitle={mod.tagline}
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "Solutions", path: "/solutions" },
          { name: "ERP System", path: "/solutions/erp" },
          { name: mod.name, path: `/products/${mod.slug}` },
        ]}
        primary={{ label: "Book a demo", href: "/contact" }}
        secondary={{ label: "Back to ERP", href: "/solutions/erp" }}
      />

      {/* Feature grid */}
      <section className="py-24 md:py-32">
        <Container>
          <SectionHeading
            eyebrow="Capabilities"
            title={`Everything ${mod.name} gives your team`}
            subtitle={`Purpose-built for how ${mod.name.toLowerCase()} actually runs in a mid-to-large enterprise.`}
          />
          <div className="mt-14 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {mod.features.map((feature, i) => (
              <Reveal key={feature.title} delay={i % 3} as="div">
                <FeatureCard
                  title={feature.title}
                  description={feature.description}
                  featured={i === 0}
                />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <MobileAppShowcase
        moduleName={mod.name}
        headline={mod.app.headline}
        subline={mod.app.subline}
        capabilities={mod.app.capabilities}
      />

      {/* Mini FAQ */}
      <section className="border-t border-border py-24 md:py-32">
        <Container>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            <SectionHeading
              eyebrow="FAQ"
              title={`${mod.name}, answered`}
              align="left"
            />
            <div>
              <FAQAccordion items={mod.faqs} />
            </div>
          </div>
        </Container>
      </section>

      <CrossSell
        title="The rest of the suite"
        items={others}
      />

      <CTABand
        eyebrow="Ready when you are"
        title={`Run ${mod.name} on one connected platform`}
        subtitle="Book a demo and see how the module fits the rest of your operations — with data flowing in real time."
        primary={{ label: "Book a demo", href: "/contact" }}
        secondary={{ label: "Talk to sales", href: "/contact" }}
      />
    </>
  );
}
