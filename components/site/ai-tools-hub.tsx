import { Cpu } from "lucide-react";
import { cn } from "@/lib/utils";
import { NeuralBeam } from "./neural-beam";

// The tools we wire into a client's stack — shown orbiting the AI core.
const tools = [
  { label: "ChatGPT", pos: "left-2 top-5" },
  { label: "Claude", pos: "right-2 top-5" },
  { label: "n8n", pos: "left-0 top-1/2 -translate-y-1/2" },
  { label: "Zapier", pos: "right-0 top-1/2 -translate-y-1/2" },
  { label: "Your CRM", pos: "left-2 bottom-5" },
  { label: "WhatsApp", pos: "right-2 bottom-5" },
];

/** "Integration hub" visual — your AI layer wiring tools into one workflow. */
export function AiToolsHub({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "relative aspect-square w-full overflow-hidden rounded-2xl border border-border bg-surface",
        className,
      )}
    >
      <div className="absolute inset-0 opacity-70" aria-hidden>
        <NeuralBeam variant="mini" />
      </div>

      {/* center: the AI layer */}
      <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-1.5">
        <span className="flex size-16 items-center justify-center rounded-2xl bg-accent-gradient text-white shadow-[0_0_40px_-8px_rgba(124,58,237,0.6)]">
          <Cpu className="size-7" />
        </span>
        <span className="rounded-full border border-border bg-surface px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-wide text-muted">
          AI layer
        </span>
      </div>

      {/* orbiting tool chips */}
      {tools.map((t) => (
        <div key={t.label} className={cn("absolute", t.pos)}>
          <span className="inline-flex items-center gap-1.5 rounded-lg border border-border-strong bg-surface-elevated/90 px-2.5 py-1.5 text-[11px] font-medium text-foreground shadow-lg backdrop-blur">
            <span className="size-1.5 rounded-full bg-accent-gradient" />
            {t.label}
          </span>
        </div>
      ))}
    </div>
  );
}
