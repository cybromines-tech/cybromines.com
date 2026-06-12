import { Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";
import { solutions } from "@/lib/data/solutions";

/**
 * THE signature visual: a central AI "core" with every business system orbiting
 * it, data beams pulsing inward. Communicates the whole positioning at a glance —
 * many systems, one AI mind. Pure SVG + CSS animation (keyframes in globals.css),
 * no JS runtime, reduced-motion safe.
 */

// Deterministic polar layout of the system nodes around the core.
const CENTER = { x: 50, y: 50 };
const RADIUS = { x: 41, y: 38 };

const nodes = solutions.map((s, i) => {
  const angle = (-90 + i * (360 / solutions.length)) * (Math.PI / 180);
  return {
    icon: s.icon,
    label: s.shortName,
    href: `/solutions/${s.slug}`,
    x: CENTER.x + RADIUS.x * Math.cos(angle),
    y: CENTER.y + RADIUS.y * Math.sin(angle),
    delay: (i * 0.32).toFixed(2),
  };
});

export function AiCore({ className }: { className?: string }) {
  return (
    <div className={cn("relative mx-auto aspect-square w-full max-w-[36rem]", className)}>
      {/* ambient glow */}
      <div
        className="pointer-events-none absolute inset-[18%] -z-10 rounded-full bg-violet/20 blur-[60px]"
        aria-hidden
      />

      {/* Beams behind everything */}
      <svg
        viewBox="0 0 100 100"
        className="absolute inset-0 h-full w-full"
        fill="none"
        aria-hidden
      >
        <defs>
          <linearGradient id="core-beam" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#7C3AED" />
            <stop offset="100%" stopColor="#22D3EE" />
          </linearGradient>
        </defs>
        {/* faint static connections */}
        <g stroke="var(--beam-line)" strokeWidth="0.25">
          {nodes.map((n, i) => (
            <line key={`base-${i}`} x1={n.x} y1={n.y} x2={CENTER.x} y2={CENTER.y} />
          ))}
        </g>
        {/* animated beams flowing toward the core */}
        <g stroke="url(#core-beam)" strokeWidth="0.5" strokeLinecap="round">
          {nodes.map((n, i) => (
            <line
              key={`beam-${i}`}
              x1={n.x}
              y1={n.y}
              x2={CENTER.x}
              y2={CENTER.y}
              strokeDasharray="3 60"
              style={{
                animation: `core-flow 2.6s linear ${n.delay}s infinite, beam-pulse 2.6s ease-in-out ${n.delay}s infinite`,
              }}
            />
          ))}
        </g>
      </svg>

      {/* Rotating orbit rings */}
      <div className="absolute inset-[8%] animate-[spin_38s_linear_infinite] rounded-full border border-dashed border-border" aria-hidden />
      <div className="absolute inset-[20%] animate-[spin_26s_linear_infinite_reverse] rounded-full border border-border" aria-hidden />

      {/* The AI core */}
      <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-2">
        <div className="relative">
          <span className="absolute -inset-4 animate-[core-breathe_3s_ease-in-out_infinite] rounded-full bg-accent-gradient opacity-40 blur-xl" aria-hidden />
          <span className="relative flex size-[clamp(4.5rem,12vw,6rem)] items-center justify-center rounded-[28%] bg-accent-gradient text-white shadow-[0_0_50px_-6px_rgba(124,58,237,0.7)]">
            <Sparkles className="size-1/2" />
          </span>
        </div>
        <span className="rounded-full border border-border bg-background/80 px-3 py-1 font-mono text-[11px] uppercase tracking-[0.18em] text-foreground backdrop-blur">
          AI Core
        </span>
      </div>

      {/* System nodes */}
      {nodes.map((n) => {
        const Icon = n.icon;
        return (
          <div
            key={n.label}
            className="group absolute -translate-x-1/2 -translate-y-1/2"
            style={{ left: `${n.x}%`, top: `${n.y}%` }}
          >
            <div className="flex flex-col items-center gap-1.5 transition-transform duration-300 group-hover:-translate-y-0.5">
              <span className="flex size-[clamp(2.5rem,7vw,3.25rem)] items-center justify-center rounded-2xl border border-border-strong bg-surface-elevated/90 text-cyan shadow-lg backdrop-blur transition-colors group-hover:border-cyan/50">
                <Icon className="size-[45%]" />
              </span>
              <span className="hidden rounded-md border border-border bg-surface/80 px-1.5 py-0.5 text-[10px] font-medium text-foreground backdrop-blur sm:block">
                {n.label}
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
}
