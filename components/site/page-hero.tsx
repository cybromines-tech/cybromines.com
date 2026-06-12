import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import { ArrowRight } from "lucide-react";
import { Container } from "./container";
import { Button } from "@/components/ui/button";
import { NeuralBeam } from "./neural-beam";
import { Breadcrumbs, type Crumb } from "./breadcrumbs";

interface PageHeroProps {
  eyebrow: string;
  title: React.ReactNode;
  subtitle: string;
  icon?: LucideIcon;
  breadcrumbs?: Crumb[];
  primary?: { label: string; href: string };
  secondary?: { label: string; href: string };
  /** Show the neural-beam background (default true). */
  beam?: boolean;
}

export function PageHero({
  eyebrow,
  title,
  subtitle,
  icon: Icon,
  breadcrumbs,
  primary = { label: "Book a demo", href: "/contact" },
  secondary,
  beam = true,
}: PageHeroProps) {
  return (
    <section className="relative overflow-hidden pt-28 md:pt-36">
      {beam && (
        <div
          className="pointer-events-none absolute inset-0 -z-10 opacity-50 [mask-image:radial-gradient(ellipse_60%_55%_at_50%_0%,black,transparent_80%)]"
          aria-hidden
        >
          <NeuralBeam />
        </div>
      )}
      <Container>
        {breadcrumbs ? <Breadcrumbs items={breadcrumbs} /> : null}
        <div className="max-w-3xl">
          <span className="eyebrow inline-flex items-center gap-2.5">
            {Icon ? (
              <span className="inline-flex size-7 items-center justify-center rounded-lg border border-border bg-surface text-cyan">
                <Icon className="size-4" />
              </span>
            ) : (
              <span className="size-1.5 rounded-full bg-accent-gradient" aria-hidden />
            )}
            {eyebrow}
          </span>
          <h1 className="mt-5 text-[length:var(--text-hero)] font-semibold leading-[1.05] tracking-[-0.03em] text-foreground">
            {title}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted md:text-xl">
            {subtitle}
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg">
              <Link href={primary.href}>
                {primary.label}
                <ArrowRight className="size-4" />
              </Link>
            </Button>
            {secondary ? (
              <Button asChild size="lg" variant="secondary">
                <Link href={secondary.href}>{secondary.label}</Link>
              </Button>
            ) : null}
          </div>
        </div>
      </Container>
    </section>
  );
}
