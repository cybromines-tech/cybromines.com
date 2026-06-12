import { Apple, Check, Play } from "lucide-react";
import { Container } from "./container";
import { Reveal } from "./reveal";
import type { AppCapability } from "@/lib/data/modules";

function StoreBadge({
  icon: Icon,
  top,
  bottom,
}: {
  icon: React.ElementType;
  top: string;
  bottom: string;
}) {
  return (
    <a
      href="#"
      className="inline-flex items-center gap-2.5 rounded-xl border border-border-strong bg-surface px-4 py-2.5 transition-colors hover:bg-surface-elevated"
      aria-label={`${bottom} (placeholder link)`}
    >
      <Icon className="size-6 text-foreground" />
      <span className="flex flex-col leading-none">
        <span className="text-[10px] uppercase tracking-wide text-muted">{top}</span>
        <span className="font-display text-sm font-medium text-foreground">{bottom}</span>
      </span>
    </a>
  );
}

function PhoneFrame({
  moduleName,
  capabilities,
}: {
  moduleName: string;
  capabilities: AppCapability[];
}) {
  return (
    <div className="relative mx-auto w-[260px]">
      {/* glow */}
      <div
        className="absolute -inset-8 -z-10 rounded-full bg-violet/20 blur-3xl"
        aria-hidden
      />
      <div className="rounded-[2.4rem] border border-border-strong bg-surface-elevated p-2.5 shadow-2xl">
        <div className="relative overflow-hidden rounded-[1.9rem] border border-border bg-background">
          {/* notch */}
          <div className="absolute left-1/2 top-2 z-10 h-5 w-24 -translate-x-1/2 rounded-full bg-surface-elevated" />
          {/* screen */}
          <div className="flex flex-col gap-3 px-4 pb-6 pt-9">
            <div className="flex items-center justify-between">
              <span className="font-display text-sm font-semibold text-foreground">
                {moduleName}
              </span>
              <span className="size-7 rounded-full bg-accent-gradient" />
            </div>
            <div className="border-gradient-top relative overflow-hidden rounded-xl border border-border bg-surface p-3">
              <p className="font-mono text-[10px] uppercase tracking-wide text-muted-subtle">
                Today
              </p>
              <p className="mt-1 font-mono text-2xl font-medium text-foreground">
                AED 48.2k
              </p>
              <div className="mt-2 flex h-9 items-end gap-1">
                {[40, 65, 50, 80, 60, 95, 72].map((h, i) => (
                  <span
                    key={i}
                    className="flex-1 rounded-sm bg-accent-gradient opacity-80"
                    style={{ height: `${h}%` }}
                  />
                ))}
              </div>
            </div>
            <ul className="flex flex-col gap-2">
              {capabilities.map((cap) => (
                <li
                  key={cap.title}
                  className="flex items-center gap-2.5 rounded-lg border border-border bg-surface px-3 py-2.5"
                >
                  <span className="inline-flex size-6 shrink-0 items-center justify-center rounded-md bg-success/15 text-success">
                    <Check className="size-3.5" />
                  </span>
                  <span className="text-xs font-medium text-foreground">{cap.title}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export function MobileAppShowcase({
  moduleName,
  headline,
  subline,
  capabilities,
}: {
  moduleName: string;
  headline: string;
  subline: string;
  capabilities: AppCapability[];
}) {
  return (
    <section className="py-24 md:py-32">
      <Container>
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2">
          <Reveal className="order-2 lg:order-1">
            <span className="eyebrow">Mobile app — iOS &amp; Android</span>
            <h2 className="mt-4 text-[length:var(--text-section)] font-semibold leading-[1.1] tracking-tight">
              {headline}
            </h2>
            <p className="mt-4 max-w-lg text-base text-muted md:text-lg">{subline}</p>
            <ul className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {capabilities.map((cap) => (
                <li key={cap.title} className="flex flex-col gap-1">
                  <span className="flex items-center gap-2 text-sm font-medium text-foreground">
                    <span className="size-1.5 rounded-full bg-accent-gradient" />
                    {cap.title}
                  </span>
                  <span className="pl-3.5 text-sm text-muted">{cap.description}</span>
                </li>
              ))}
            </ul>
            <div className="mt-9 flex flex-wrap gap-3">
              <StoreBadge icon={Apple} top="Download on the" bottom="App Store" />
              <StoreBadge icon={Play} top="Get it on" bottom="Google Play" />
            </div>
          </Reveal>
          <Reveal delay={1} className="order-1 lg:order-2">
            <PhoneFrame moduleName={moduleName} capabilities={capabilities} />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
