import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Database, KeyRound, Sparkles } from "lucide-react";

import { solutions } from "@/lib/data/solutions";
import { buildMetadata } from "@/lib/seo/metadata";
import { PageHero } from "@/components/site/page-hero";
import { Container } from "@/components/site/container";
import { SectionHeading } from "@/components/site/section-heading";
import { Reveal } from "@/components/site/reveal";
import { SystemMockup } from "@/components/site/system-mockup";
import { AiBadge } from "@/components/site/ai-badge";
import { CTABand } from "@/components/site/cta-band";

export const metadata: Metadata = buildMetadata({
  title: "Solutions — every system your business runs on",
  description:
    "Explore the Cybromines platform: ERP, CRM, POS, inventory, production, property, and queue management systems — each AI-native and built to integrate.",
  path: "/solutions",
});

const why = [
  {
    icon: Database,
    title: "One data model",
    description:
      "Every system shares the same data. A sale, a stock move, a lease payment — recorded once, visible everywhere.",
  },
  {
    icon: Sparkles,
    title: "One AI layer",
    description:
      "The same agents work across every product, so automation compounds instead of fragmenting across vendors.",
  },
  {
    icon: KeyRound,
    title: "One partner",
    description:
      "Design, build, integrate, and support — all from one team that owns the outcome, not just a module.",
  },
];

export default function SolutionsPage() {
  return (
    <>
      <PageHero
        eyebrow="The Cybromines platform"
        title="Every system your business runs on"
        subtitle="Most companies buy a different vendor for every system, then pay to glue them together. We build them as one AI-native platform — so your data, and your automation, finally work as a whole."
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "Solutions", path: "/solutions" },
        ]}
        primary={{ label: "Book a demo", href: "/contact" }}
        secondary={{ label: "See the AI layer", href: "/ai-agents" }}
      />

      {/* All systems */}
      <section className="py-24 md:py-32">
        <Container>
          <SectionHeading
            eyebrow="Systems"
            title="Pick what you need. Add the rest when you're ready."
            subtitle="Each system stands on its own and integrates with the rest — start anywhere and grow into the full platform."
          />
          <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {solutions.map((sol, i) => {
              const Icon = sol.icon;
              return (
                <Reveal key={sol.slug} delay={i % 3} as="div">
                  <Link
                    href={`/solutions/${sol.slug}`}
                    className="group flex h-full flex-col rounded-card border border-border bg-surface p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-border-strong"
                  >
                    <SystemMockup variant={sol.mockup} />
                    <div className="mt-5 flex items-start justify-between gap-3">
                      <span className="flex items-center gap-2.5">
                        <span className="inline-flex size-9 items-center justify-center rounded-lg border border-border bg-surface-elevated text-cyan transition-colors group-hover:border-border-strong">
                          <Icon className="size-[18px]" />
                        </span>
                        <h3 className="font-display text-base font-medium tracking-tight text-foreground">
                          {sol.name}
                        </h3>
                      </span>
                      <ArrowUpRight className="size-4 shrink-0 text-muted-subtle transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-foreground" />
                    </div>
                    <p className="mt-2 flex-1 text-[14px] leading-relaxed text-muted">
                      {sol.tagline}
                    </p>
                    <div className="mt-4 border-t border-border pt-3.5">
                      <AiBadge />
                    </div>
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Why one platform */}
      <section className="border-y border-border bg-surface/30 py-24 md:py-32">
        <Container>
          <SectionHeading
            eyebrow="Why one platform"
            title="The advantage isn't the systems. It's that they're one."
          />
          <div className="mt-14 grid gap-4 md:grid-cols-3">
            {why.map((item, i) => (
              <Reveal key={item.title} delay={i} as="div">
                <div className="surface-card h-full p-7">
                  <span className="inline-flex size-11 items-center justify-center rounded-xl border border-border bg-surface-elevated text-cyan">
                    <item.icon className="size-5" />
                  </span>
                  <h3 className="mt-5 font-display text-lg font-medium tracking-tight">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-muted">
                    {item.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <CTABand
        title="Design your platform with us"
        subtitle="Tell us which systems you run today. We'll map a path to one AI-native platform — without ripping everything out overnight."
        primary={{ label: "Book a demo", href: "/contact" }}
        secondary={{ label: "Talk to sales", href: "/contact" }}
      />
    </>
  );
}
