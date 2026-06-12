import { cn } from "@/lib/utils";

/**
 * Signature "neural beam" — a dot grid whose connection lines pulse a violet→cyan
 * beam along paths, suggesting agents passing messages.
 *
 * Pure SVG + CSS animation (keyframes in globals.css). No JS runtime, no canvas,
 * no WebGL. Deterministic coordinates (no Math.random) so it is SSR-safe.
 * prefers-reduced-motion freezes all animation → a static grid (handled globally).
 */

// Deterministic dot grid.
const COLS = 14;
const ROWS = 8;
const GAP_X = 100 / (COLS - 1);
const GAP_Y = 100 / (ROWS - 1);

const dots: { x: number; y: number }[] = [];
for (let r = 0; r < ROWS; r++) {
  for (let c = 0; c < COLS; c++) {
    dots.push({ x: c * GAP_X, y: r * GAP_Y });
  }
}

function dot(c: number, r: number) {
  return { x: c * GAP_X, y: r * GAP_Y };
}

// A handful of beam paths threaded through the grid (col,row pairs).
const beams: { points: [number, number][]; delay: number }[] = [
  { points: [[1, 1], [4, 1], [4, 3], [8, 3], [8, 1], [12, 1]], delay: 0 },
  { points: [[0, 6], [3, 6], [3, 4], [7, 4], [7, 6], [11, 6]], delay: 1.1 },
  { points: [[2, 3], [5, 3], [5, 5], [9, 5], [9, 2], [13, 2]], delay: 2.2 },
  { points: [[1, 7], [6, 7], [6, 2], [10, 2], [10, 5], [13, 5]], delay: 3.1 },
];

function pathFrom(points: [number, number][]) {
  return points
    .map(([c, r], i) => {
      const p = dot(c, r);
      return `${i === 0 ? "M" : "L"} ${p.x.toFixed(2)} ${p.y.toFixed(2)}`;
    })
    .join(" ");
}

interface NeuralBeamProps {
  className?: string;
  variant?: "hero" | "mini";
}

export function NeuralBeam({ className, variant = "hero" }: NeuralBeamProps) {
  const dotR = variant === "hero" ? 0.35 : 0.5;

  return (
    <svg
      aria-hidden="true"
      className={cn("h-full w-full", className)}
      viewBox="0 0 100 100"
      preserveAspectRatio="xMidYMid slice"
      fill="none"
    >
      <defs>
        <linearGradient id={`beam-grad-${variant}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#7C3AED" />
          <stop offset="100%" stopColor="#22D3EE" />
        </linearGradient>
      </defs>

      {/* Faint static base lines so the grid reads even at rest */}
      <g stroke="var(--beam-line)" strokeWidth="0.15">
        {beams.map((b, i) => (
          <path key={`base-${i}`} d={pathFrom(b.points)} />
        ))}
      </g>

      {/* Dot grid */}
      <g fill="var(--beam-dot)">
        {dots.map((d, i) => (
          <circle key={i} cx={d.x} cy={d.y} r={dotR} />
        ))}
      </g>

      {/* Animated beams: a gradient dash travels each path while it pulses */}
      <g
        stroke={`url(#beam-grad-${variant})`}
        strokeWidth={variant === "hero" ? 0.45 : 0.7}
        strokeLinecap="round"
      >
        {beams.map((b, i) => (
          <path
            key={`beam-${i}`}
            d={pathFrom(b.points)}
            strokeDasharray="6 200"
            style={{
              animation: `beam-dash 3.2s linear ${b.delay}s infinite, beam-pulse 3.2s ease-in-out ${b.delay}s infinite`,
            }}
          />
        ))}
      </g>

      {/* Brighter endpoint nodes that glow in time with the beams */}
      <g fill={`url(#beam-grad-${variant})`}>
        {beams.map((b, i) => {
          const end = dot(b.points[b.points.length - 1][0], b.points[b.points.length - 1][1]);
          return (
            <circle
              key={`node-${i}`}
              cx={end.x}
              cy={end.y}
              r={variant === "hero" ? 0.7 : 1}
              style={{ animation: `node-glow 3.2s ease-in-out ${b.delay}s infinite` }}
            />
          );
        })}
      </g>
    </svg>
  );
}
