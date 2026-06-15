import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "./container";
import { Button } from "@/components/ui/button";
import { NeuralBeam } from "./neural-beam";
import { Reveal } from "./reveal";

interface CTABandProps {
  eyebrow?: string;
  title: string;
  subtitle: string;
  primary?: { label: string; href: string };
  secondary?: { label: string; href: string };
}

/** Renders a Next <Link> for internal hrefs, or a new-tab <a> for external. */
function CTALink({ href, children }: { href: string; children: React.ReactNode }) {
  if (/^https?:\/\//.test(href)) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    );
  }
  return <Link href={href}>{children}</Link>;
}

export function CTABand({
  eyebrow = "Get started",
  title,
  subtitle,
  primary = { label: "Book a demo", href: "/contact" },
  secondary = { label: "Talk to sales", href: "/contact" },
}: CTABandProps) {
  return (
    <section className="py-24 md:py-32">
      <Container>
        <Reveal className="relative overflow-hidden rounded-[28px] border border-border bg-surface px-6 py-16 text-center md:px-16 md:py-24">
          <div className="pointer-events-none absolute inset-0 opacity-50" aria-hidden>
            <NeuralBeam />
          </div>
          <div
            className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-violet to-transparent"
            aria-hidden
          />
          <div className="relative mx-auto flex max-w-2xl flex-col items-center gap-5">
            <span className="eyebrow">{eyebrow}</span>
            <h2 className="text-[length:var(--text-section)] font-semibold leading-[1.1] tracking-tight">
              {title}
            </h2>
            <p className="text-base text-muted md:text-lg">{subtitle}</p>
            <div className="mt-3 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg">
                <CTALink href={primary.href}>
                  {primary.label}
                  <ArrowRight className="size-4" />
                </CTALink>
              </Button>
              <Button asChild size="lg" variant="secondary">
                <CTALink href={secondary.href}>{secondary.label}</CTALink>
              </Button>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
