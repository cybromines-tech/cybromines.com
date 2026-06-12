import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import { ArrowUpRight } from "lucide-react";
import { Container } from "./container";
import { SectionHeading } from "./section-heading";
import { Reveal } from "./reveal";

export interface CrossSellItem {
  name: string;
  href: string;
  tagline: string;
  icon: LucideIcon;
}

export function CrossSell({
  eyebrow = "Explore the suite",
  title,
  items,
}: {
  eyebrow?: string;
  title: string;
  items: CrossSellItem[];
}) {
  return (
    <section className="border-t border-border py-24 md:py-32">
      <Container>
        <SectionHeading eyebrow={eyebrow} title={title} align="left" />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item, i) => {
            const Icon = item.icon;
            return (
              <Reveal key={item.href} delay={i} as="div">
                <Link
                  href={item.href}
                  className="group flex h-full flex-col rounded-card border border-border bg-surface p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-border-strong"
                >
                  <div className="flex items-center justify-between">
                    <span className="inline-flex size-10 items-center justify-center rounded-lg border border-border bg-surface-elevated text-cyan">
                      <Icon className="size-[18px]" />
                    </span>
                    <ArrowUpRight className="size-4 text-muted-subtle transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-foreground" />
                  </div>
                  <h3 className="mt-4 font-display text-base font-medium tracking-tight text-foreground">
                    {item.name}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted">
                    {item.tagline}
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
