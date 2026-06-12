import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowUpRight, Sparkles, Check } from "lucide-react";

import { solutions, getSolution, solutionSlugs } from "@/lib/data/solutions";
import { modules } from "@/lib/data/modules";
import { buildMetadata } from "@/lib/seo/metadata";
import { softwareApplicationSchema } from "@/lib/seo/jsonld";
import { JsonLd } from "@/components/site/json-ld";
import { Container } from "@/components/site/container";
import { Breadcrumbs } from "@/components/site/breadcrumbs";
import { NeuralBeam } from "@/components/site/neural-beam";
import { SectionHeading } from "@/components/site/section-heading";
import { Reveal } from "@/components/site/reveal";
import { FeatureCard } from "@/components/site/feature-card";
import { SystemMockup } from "@/components/site/system-mockup";
import { AiBadge } from "@/components/site/ai-badge";
import { CrossSell } from "@/components/site/cross-sell";
import { CTABand } from "@/components/site/cta-band";
import { Button } from "@/components/ui/button";

export const dynamicParams = false;

export function generateStaticParams() {
  return solutionSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const sol = getSolution(slug);
  if (!sol) return {};
  return buildMetadata({
    title: `${sol.name} — AI-native ${sol.shortName}`,
    description: sol.metaDescription,
    path: `/solutions/${sol.slug}`,
  });
}

export default async function SolutionPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const sol = getSolution(slug);
  if (!sol) notFound();

  const Icon = sol.icon;
  const others = solutions
    .filter((s) => s.slug !== sol.slug)
    .slice(0, 4)
    .map((s) => ({ name: s.name, href: `/solutions/${s.slug}`, tagline: s.tagline, icon: s.icon }));

  return (
    <>
      <JsonLd
        schema={softwareApplicationSchema({
          name: `Cybromines ${sol.name}`,
          description: sol.metaDescription,
          path: `/solutions/${sol.slug}`,
        })}
      />

      {/* Hero with system mockup */}
      <section className="relative overflow-hidden pt-28 md:pt-36">
        <div
          className="pointer-events-none absolute inset-0 -z-10 opacity-50 [mask-image:radial-gradient(ellipse_60%_55%_at_50%_0%,black,transparent_80%)]"
          aria-hidden
        >
          <NeuralBeam />
        </div>
        <Container>
          <Breadcrumbs
            items={[
              { name: "Home", path: "/" },
              { name: "Solutions", path: "/solutions" },
              { name: sol.name, path: `/solutions/${sol.slug}` },
            ]}
          />
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            <Reveal>
              <span className="eyebrow inline-flex items-center gap-2.5">
                <span className="inline-flex size-7 items-center justify-center rounded-lg border border-border bg-surface text-cyan">
                  <Icon className="size-4" />
                </span>
                {sol.category} · {sol.shortName}
              </span>
              <h1 className="mt-5 text-[length:var(--text-hero)] font-semibold leading-[1.04] tracking-[-0.03em]">
                {sol.tagline}
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted md:text-xl">
                {sol.promise}
              </p>
              <div className="mt-7">
                <span className="inline-flex items-start gap-2.5 rounded-xl border border-violet/25 bg-violet/5 px-4 py-3">
                  <Sparkles className="mt-0.5 size-4 shrink-0 text-cyan" />
                  <span className="text-sm text-foreground">{sol.aiHook}</span>
                </span>
              </div>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button asChild size="lg">
                  <Link href="/contact">Book a demo</Link>
                </Button>
                <Button asChild size="lg" variant="secondary">
                  <Link href="/solutions">All solutions</Link>
                </Button>
              </div>
            </Reveal>
            <Reveal delay={1}>
              <div className="rounded-2xl border border-border-strong bg-surface/60 p-3 shadow-2xl backdrop-blur">
                <SystemMockup variant={sol.mockup} />
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Features */}
      <section className="py-24 md:py-32">
        <Container>
          <SectionHeading
            eyebrow="Capabilities"
            title={`What ${sol.name} gives you`}
            subtitle={`Purpose-built for how ${sol.shortName.toLowerCase()} actually runs in a real business.`}
          />
          <div className="mt-14 grid grid-cols-1 gap-4 md:grid-cols-2">
            {sol.features.map((f, i) => (
              <Reveal key={f.title} delay={i % 2} as="div">
                <FeatureCard title={f.title} description={f.description} featured={i === 0} />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* AI inside this system */}
      <section className="border-y border-border bg-surface/30 py-24 md:py-32">
        <Container>
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            <Reveal>
              <AiBadge label="AI inside" />
              <h2 className="mt-4 text-[length:var(--text-section)] font-semibold leading-[1.1] tracking-tight">
                Intelligence built into {sol.shortName}
              </h2>
              <p className="mt-4 max-w-lg text-base text-muted md:text-lg">
                This isn&apos;t AI bolted on. Agents work inside {sol.name} on your
                data, automating the repetitive work and escalating only what needs
                a human.
              </p>
            </Reveal>
            <Reveal delay={1}>
              <ul className="flex flex-col gap-3">
                {sol.aiCapabilities.map((cap) => (
                  <li
                    key={cap}
                    className="flex items-center gap-3 rounded-xl border border-border bg-surface p-4"
                  >
                    <span className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-accent-gradient text-white">
                      <Check className="size-4" />
                    </span>
                    <span className="text-[15px] font-medium text-foreground">{cap}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* ERP-only: module strip */}
      {sol.slug === "erp" && (
        <section className="py-24 md:py-32">
          <Container>
            <SectionHeading
              eyebrow="ERP modules"
              title="Five modules, one ledger"
              subtitle="Start with one module and expand — they all share the same data and login."
            />
            <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
              {modules.map((m, i) => {
                const MIcon = m.icon;
                return (
                  <Reveal key={m.slug} delay={i} as="div">
                    <Link
                      href={`/products/${m.slug}`}
                      className="group flex h-full flex-col rounded-card border border-border bg-surface p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-border-strong"
                    >
                      <div className="flex items-center justify-between">
                        <span className="inline-flex size-9 items-center justify-center rounded-lg border border-border bg-surface-elevated text-cyan">
                          <MIcon className="size-[18px]" />
                        </span>
                        <ArrowUpRight className="size-4 text-muted-subtle transition-all group-hover:text-foreground" />
                      </div>
                      <h3 className="mt-4 font-display text-base font-medium tracking-tight">
                        {m.name}
                      </h3>
                      <p className="mt-1.5 text-[13px] leading-relaxed text-muted">{m.tagline}</p>
                    </Link>
                  </Reveal>
                );
              })}
            </div>
          </Container>
        </section>
      )}

      <CrossSell eyebrow="More solutions" title="The rest of the platform" items={others} />

      <CTABand
        title={`See ${sol.name} on your data`}
        subtitle="Book a demo and we'll show you the system — and its AI — working on a real workflow from your business."
        primary={{ label: "Book a demo", href: "/contact" }}
        secondary={{ label: "Talk to sales", href: "/contact" }}
      />
    </>
  );
}
