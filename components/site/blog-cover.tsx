import { cn } from "@/lib/utils";

/** Deterministic hash → hue, so each post gets a stable, distinct cover. */
function hash(str: string) {
  let h = 0;
  for (let i = 0; i < str.length; i++) h = (h << 5) - h + str.charCodeAt(i);
  return Math.abs(h);
}

/**
 * CSS-built blog cover: a gradient mesh + dot grid keyed off the post slug.
 * Crisp at any size, theme-aware, zero layout shift, and no raster asset to ship.
 */
export function BlogCover({
  seed,
  tag,
  className,
}: {
  seed: string;
  tag?: string;
  className?: string;
}) {
  const h = hash(seed);
  const angle = h % 360;
  const hue1 = 258; // violet
  const hue2 = 187; // cyan
  const shift = (h % 40) - 20;

  return (
    <div
      className={cn("relative overflow-hidden bg-surface-elevated", className)}
      aria-hidden="true"
      style={{
        backgroundImage: `radial-gradient(120% 120% at ${20 + (h % 60)}% 0%, hsl(${hue1} 70% 55% / 0.5), transparent 55%), radial-gradient(120% 120% at ${80 - (h % 50)}% 100%, hsl(${hue2 + shift} 75% 55% / 0.45), transparent 55%)`,
      }}
    >
      <div
        className="absolute inset-0 opacity-60"
        style={{
          backgroundImage:
            "radial-gradient(currentColor 1px, transparent 1px)",
          backgroundSize: "22px 22px",
          color: "rgba(255,255,255,0.10)",
        }}
      />
      <div
        className="absolute inset-0 mix-blend-overlay"
        style={{
          background: `linear-gradient(${angle}deg, transparent, rgba(255,255,255,0.06))`,
        }}
      />
      {tag ? (
        <span className="absolute bottom-3 left-3 rounded-full bg-background/60 px-2.5 py-1 font-mono text-[10px] uppercase tracking-widest text-foreground backdrop-blur">
          {tag}
        </span>
      ) : null}
    </div>
  );
}
