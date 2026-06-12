import { Container } from "./container";
import { Reveal } from "./reveal";
import { stats as defaultStats, type Stat } from "@/lib/data/stats";

export function StatBar({ stats = defaultStats }: { stats?: Stat[] }) {
  return (
    <section className="border-y border-border bg-surface/40 py-16">
      <Container>
        <dl className="grid grid-cols-2 gap-x-6 gap-y-10 md:grid-cols-4">
          {stats.map((stat, i) => (
            <Reveal key={stat.label} delay={i} className="flex flex-col items-center text-center">
              <dt className="sr-only">{stat.label}</dt>
              <dd className="font-mono text-4xl font-medium tracking-tight text-foreground md:text-5xl">
                {stat.value}
              </dd>
              <p className="mt-2 text-sm text-muted">{stat.label}</p>
            </Reveal>
          ))}
        </dl>
      </Container>
    </section>
  );
}
