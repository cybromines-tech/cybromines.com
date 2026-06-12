"use client";

import * as React from "react";
import { Check, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

/** Lightweight prefers-reduced-motion hook (replaces Framer's useReducedMotion). */
function useReducedMotion() {
  const [reduced, setReduced] = React.useState(false);
  React.useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setReduced(mq.matches);
    const onChange = () => setReduced(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);
  return reduced;
}

interface Command {
  sys: string;
  cmd: string;
  result: string;
}

// Cross-portfolio commands — surfaces AI woven through every system.
const COMMANDS: Command[] = [
  { sys: "CRM", cmd: "agent: qualify new whatsapp leads", result: "3 qualified · 1 demo booked · 2 nurturing" },
  { sys: "ERP", cmd: "reconcile today's supplier invoices", result: "38 matched · 2 flagged for review" },
  { sys: "Inventory", cmd: "forecast reorder · warehouse JBL", result: "12 SKUs below reorder point · POs drafted" },
  { sys: "Queue", cmd: "predict branch wait times", result: "counter 4 understaffed · supervisor alerted" },
  { sys: "Production", cmd: "optimise line B schedule", result: "throughput +6% · bottleneck at station 3" },
  { sys: "Property", cmd: "chase leases expiring this month", result: "9 renewals · notices sent on whatsapp" },
  { sys: "POS", cmd: "scan transactions for anomalies", result: "2 suspicious voids flagged for audit" },
];

interface HistoryLine {
  sys: string;
  cmd: string;
  result: string;
}

function Frame({ children }: { children: React.ReactNode }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-border-strong bg-[#0b0b10] shadow-2xl">
      <div className="flex items-center gap-2 border-b border-border bg-surface-elevated/60 px-4 py-2.5">
        <span className="size-2.5 rounded-full bg-[#ff5f57]" />
        <span className="size-2.5 rounded-full bg-[#febc2e]" />
        <span className="size-2.5 rounded-full bg-[#28c840]" />
        <span className="ml-2 font-mono text-[11px] text-muted-subtle">cybromines — ai console</span>
        <span className="ml-auto flex items-center gap-1.5 font-mono text-[10px] text-success">
          <span className="size-1.5 rounded-full bg-success" /> live
        </span>
      </div>
      <div className="h-[280px] px-4 py-3.5 font-mono text-[12.5px] leading-relaxed">
        {children}
      </div>
    </div>
  );
}

function ResultRow({ line }: { line: HistoryLine }) {
  return (
    <div className="mb-2.5">
      <div className="flex items-start gap-2 text-foreground/90">
        <span className="select-none text-violet">❯</span>
        <span className="text-muted-subtle">[{line.sys}]</span>
        <span>{line.cmd}</span>
      </div>
      <div className="mt-0.5 flex items-start gap-2 pl-4 text-success">
        <Check className="mt-[3px] size-3 shrink-0" />
        <span className="text-muted">{line.result}</span>
      </div>
    </div>
  );
}

export function AiConsole({ className }: { className?: string }) {
  const reduce = useReducedMotion();
  const [history, setHistory] = React.useState<HistoryLine[]>([]);
  const [idx, setIdx] = React.useState(0);
  const [typed, setTyped] = React.useState("");
  const [phase, setPhase] = React.useState<"typing" | "running">("typing");

  const current = COMMANDS[idx % COMMANDS.length];

  React.useEffect(() => {
    if (reduce) return;
    let t: ReturnType<typeof setTimeout>;

    if (phase === "typing") {
      if (typed.length < current.cmd.length) {
        t = setTimeout(() => setTyped(current.cmd.slice(0, typed.length + 1)), 34);
      } else {
        t = setTimeout(() => setPhase("running"), 420);
      }
    } else {
      // running → commit result, advance, keep last 3 in view
      t = setTimeout(() => {
        setHistory((h) => [...h.slice(-2), { sys: current.sys, cmd: current.cmd, result: current.result }]);
        setIdx((i) => i + 1);
        setTyped("");
        setPhase("typing");
      }, 780);
    }
    return () => clearTimeout(t);
  }, [phase, typed, current, reduce]);

  // Reduced motion: render a static, complete transcript.
  if (reduce) {
    return (
      <div className={className}>
        <Frame>
          <div className="flex h-full flex-col justify-end">
            {COMMANDS.slice(0, 4).map((c) => (
              <ResultRow key={c.cmd} line={c} />
            ))}
          </div>
        </Frame>
      </div>
    );
  }

  return (
    <div className={cn(className)}>
      <Frame>
        <div className="flex h-full flex-col justify-end">
          {history.map((line, i) => (
            <ResultRow key={`${line.cmd}-${i}`} line={line} />
          ))}
          {/* active line */}
          <div>
            <div className="flex items-start gap-2 text-foreground">
              <span className="select-none text-violet">❯</span>
              <span className="text-muted-subtle">[{current.sys}]</span>
              <span>
                {typed}
                <span
                  className="ml-0.5 inline-block h-[1.05em] w-[7px] translate-y-[2px] bg-cyan"
                  style={{ animation: "caret-blink 1s step-end infinite" }}
                />
              </span>
            </div>
            {phase === "running" && (
              <div className="mt-0.5 flex items-center gap-2 pl-4 text-muted">
                <Loader2 className="size-3 animate-spin text-cyan" />
                <span>agent running…</span>
              </div>
            )}
          </div>
        </div>
      </Frame>
    </div>
  );
}
