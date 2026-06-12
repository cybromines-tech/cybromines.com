import type { Metadata } from "next";
import Link from "next/link";
import { Target, ShieldCheck, Zap, HeartHandshake, MapPin } from "lucide-react";

import { buildMetadata } from "@/lib/seo/metadata";
import { siteConfig } from "@/lib/site";
import { PageHero } from "@/components/site/page-hero";
import { Container } from "@/components/site/container";
import { SectionHeading } from "@/components/site/section-heading";
import { Reveal } from "@/components/site/reveal";
import { StatBar } from "@/components/site/stat-bar";
import { CTABand } from "@/components/site/cta-band";

export const metadata: Metadata = buildMetadata({
  title: "About Cybromines",
  description:
    "Cybromines builds AI-native enterprise software from Dubai — a modular ERP suite, autonomous agents, and the integrations that run operations across the GCC.",
  path: "/about",
});

const values = [
  {
    icon: Target,
    title: "Specific over impressive",
    description:
      "We'd rather say exactly what our software does than dress it in buzzwords. Every claim we make is one you can hold us to.",
  },
  {
    icon: Zap,
    title: "Ship what works",
    description:
      "We measure ourselves by what's running in production for customers, not by roadmaps and demos. Working software is the only proof.",
  },
  {
    icon: ShieldCheck,
    title: "Earn the trust",
    description:
      "We're asking enterprises to run their core operations on us. We treat that responsibility — and their data — with the seriousness it deserves.",
  },
  {
    icon: HeartHandshake,
    title: "Partners, not vendors",
    description:
      "We win when our customers do. We stay close after launch, because the real work of getting value from software starts at go-live.",
  },
];

const leadership = [
  { name: "Founder & CEO", role: "Product & vision", initials: "CE" },
  { name: "CTO", role: "Engineering & platform", initials: "CT" },
  { name: "Head of Delivery", role: "Implementation & success", initials: "HD" },
  { name: "Head of AI", role: "Agents & automation", initials: "HA" },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="We build the systems that run your business"
        subtitle="Cybromines is an AI-native software house based in Dubai. We design, build, and integrate the full stack of systems ambitious companies run on — and put AI at the core of every one."
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "About", path: "/about" },
        ]}
        primary={{ label: "Work with us", href: "/contact" }}
        secondary={{ label: "See our solutions", href: "/solutions" }}
      />

      {/* Story */}
      <section className="py-24 md:py-32">
        <Container>
          <div className="mx-auto max-w-3xl">
            <SectionHeading eyebrow="Our story" title="Why we started" align="left" />
            <div className="mt-8 flex flex-col gap-5 text-lg leading-relaxed text-muted">
              <p>
                Cybromines began with a frustration shared by everyone who has
                tried to run a growing business on enterprise software: the tools
                meant to help were getting in the way. Disconnected systems,
                endless reconciliation, compliance bolted on as an afterthought,
                and not a hint of intelligence anywhere.
              </p>
              <p>
                We believed a better approach was possible — one AI-native
                platform where every system a business runs on, from ERP and CRM
                to POS and queue management, shares the same data and the same
                intelligence. So we built it.
              </p>
              <p>
                Today, Cybromines powers operations for enterprises across the
                GCC, from trading houses to multi-branch retailers. The mission
                that started it all hasn&apos;t changed:{" "}
                <span className="text-foreground">
                  make enterprise software that earns its place in the business.
                </span>
              </p>
            </div>
          </div>
        </Container>
      </section>

      <StatBar />

      {/* Values */}
      <section className="py-24 md:py-32">
        <Container>
          <SectionHeading
            eyebrow="What we value"
            title="The principles behind the product"
          />
          <div className="mt-14 grid grid-cols-1 gap-4 md:grid-cols-2">
            {values.map((value, i) => (
              <Reveal key={value.title} delay={i % 2} as="div">
                <div className="surface-card flex h-full gap-5 p-7">
                  <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-xl border border-border bg-surface-elevated text-cyan">
                    <value.icon className="size-5" />
                  </span>
                  <div>
                    <h3 className="font-display text-lg font-medium tracking-tight">
                      {value.title}
                    </h3>
                    <p className="mt-2 text-[15px] leading-relaxed text-muted">
                      {value.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* HQ */}
      <section className="border-y border-border bg-surface/30 py-24 md:py-32">
        <Container>
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            <Reveal>
              <span className="eyebrow inline-flex items-center gap-2">
                <MapPin className="size-3.5 text-cyan" /> Headquarters
              </span>
              <h2 className="mt-4 text-[length:var(--text-section)] font-semibold leading-[1.1] tracking-tight">
                Built in Dubai, for the region and beyond
              </h2>
              <p className="mt-4 max-w-lg text-base text-muted md:text-lg">
                Our home in Downtown Dubai puts us at the centre of one of the
                world&apos;s most ambitious business hubs — close to the enterprises
                we serve and the regulations they navigate.
              </p>
              <address className="mt-6 not-italic text-muted">
                {siteConfig.address.line1}
                <br />
                {siteConfig.address.line2}
                <br />
                {siteConfig.address.city}, {siteConfig.address.country}
              </address>
            </Reveal>
            <Reveal delay={1}>
              <div className="relative aspect-[4/3] overflow-hidden rounded-card border border-border bg-surface">
                {/* Stylised locale element (CSS map grid) */}
                <div
                  className="absolute inset-0"
                  style={{
                    backgroundImage:
                      "linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)",
                    backgroundSize: "32px 32px",
                  }}
                  aria-hidden
                />
                <div
                  className="absolute inset-0"
                  style={{
                    backgroundImage:
                      "linear-gradient(115deg, transparent 40%, var(--surface-elevated) 40% 44%, transparent 44%), linear-gradient(200deg, transparent 60%, var(--surface-elevated) 60% 63%, transparent 63%)",
                  }}
                  aria-hidden
                />
                <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-2">
                  <span className="relative flex size-4">
                    <span className="absolute inline-flex size-full animate-ping rounded-full bg-cyan/40" />
                    <span className="relative inline-flex size-4 rounded-full bg-accent-gradient" />
                  </span>
                  <span className="rounded-full border border-border bg-background/80 px-3 py-1 font-mono text-[11px] text-foreground backdrop-blur">
                    Downtown Dubai · 25.20°N, 55.27°E
                  </span>
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Leadership */}
      <section className="py-24 md:py-32">
        <Container>
          <SectionHeading
            eyebrow="Leadership"
            title="The team behind the platform"
            subtitle="A senior team of product, engineering, and domain experts who've built and run enterprise systems before."
          />
          <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {leadership.map((person, i) => (
              <Reveal key={person.name} delay={i} as="div">
                <div className="surface-card flex h-full flex-col items-center gap-3 p-7 text-center">
                  <span className="inline-flex size-16 items-center justify-center rounded-full bg-accent-gradient font-display text-lg font-medium text-white">
                    {person.initials}
                  </span>
                  <div>
                    <p className="font-display text-base font-medium tracking-tight">
                      {person.name}
                    </p>
                    <p className="mt-1 text-sm text-muted">{person.role}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-10 text-center">
            <p className="text-muted">
              Want to join us?{" "}
              <Link
                href={`mailto:${siteConfig.careersEmail}`}
                className="font-medium text-foreground underline-offset-4 hover:underline"
              >
                {siteConfig.careersEmail}
              </Link>
            </p>
          </Reveal>
        </Container>
      </section>

      <CTABand
        title="Let's build something that lasts"
        subtitle="Whether you're evaluating a platform or looking to join the team, we'd like to hear from you."
        primary={{ label: "Get in touch", href: "/contact" }}
        secondary={{ label: "Explore solutions", href: "/solutions" }}
      />
    </>
  );
}
