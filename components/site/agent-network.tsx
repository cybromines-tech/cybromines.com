import { FileText, Headset, UserPlus, AlertTriangle, Cpu } from "lucide-react";
import { cn } from "@/lib/utils";
import { NeuralBeam } from "./neural-beam";

const nodes = [
  { icon: FileText, label: "Invoice agent", pos: "left-3 top-6" },
  { icon: Headset, label: "Support agent", pos: "right-3 top-6" },
  { icon: UserPlus, label: "Lead agent", pos: "left-3 bottom-6" },
  { icon: AlertTriangle, label: "Anomaly agent", pos: "right-3 bottom-6" },
];

/** Mini neural beam framed as an agent mesh with labelled nodes. */
export function AgentNetwork({ className }: { className?: string }) {
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

      {/* central hub */}
      <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-1.5">
        <span className="flex size-16 items-center justify-center rounded-2xl bg-accent-gradient text-white shadow-[0_0_40px_-8px_rgba(124,58,237,0.6)]">
          <Cpu className="size-7" />
        </span>
        <span className="rounded-full border border-border bg-surface px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-wide text-muted">
          Orchestrator
        </span>
      </div>

      {/* satellite nodes */}
      {nodes.map((node) => (
        <div key={node.label} className={cn("absolute flex items-center gap-2", node.pos)}>
          <span className="flex size-9 items-center justify-center rounded-xl border border-border-strong bg-surface-elevated text-cyan">
            <node.icon className="size-4" />
          </span>
          <span className="hidden rounded-md border border-border bg-surface/80 px-2 py-1 text-[11px] font-medium text-foreground backdrop-blur sm:inline">
            {node.label}
          </span>
        </div>
      ))}
    </div>
  );
}
