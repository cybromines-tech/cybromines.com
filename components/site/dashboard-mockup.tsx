import {
  LayoutDashboard,
  ArrowLeftRight,
  Boxes,
  Landmark,
  Users,
  ScanLine,
  TrendingUp,
  TrendingDown,
} from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { icon: LayoutDashboard, label: "Dashboard", active: true },
  { icon: ArrowLeftRight, label: "Trading" },
  { icon: Boxes, label: "Inventory" },
  { icon: Landmark, label: "Finance" },
  { icon: Users, label: "HRM" },
  { icon: ScanLine, label: "POS" },
];

const kpis = [
  { label: "Revenue", value: "AED 4.82M", delta: "+12.4%", up: true },
  { label: "Gross margin", value: "31.6%", delta: "+1.8pt", up: true },
  { label: "Open orders", value: "1,284", delta: "−3.1%", up: false },
  { label: "Cash position", value: "AED 9.1M", delta: "+6.2%", up: true },
];

// Deterministic bar heights for the chart skeleton.
const bars = [42, 58, 47, 70, 55, 82, 64, 90, 73, 96, 68, 88];

/**
 * A crisp, theme-aware ERP dashboard built entirely in HTML/CSS — no image,
 * so it stays sharp at any DPR and never causes layout shift.
 */
export function DashboardMockup({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "w-full overflow-hidden rounded-2xl border border-border-strong bg-surface shadow-2xl",
        className,
      )}
    >
      {/* window chrome */}
      <div className="flex items-center gap-2 border-b border-border bg-surface-elevated px-4 py-3">
        <span className="size-2.5 rounded-full bg-[#ff5f57]" />
        <span className="size-2.5 rounded-full bg-[#febc2e]" />
        <span className="size-2.5 rounded-full bg-[#28c840]" />
        <span className="ml-3 rounded-md bg-background px-3 py-1 font-mono text-[11px] text-muted-subtle">
          app.cybromines.com
        </span>
      </div>

      <div className="grid grid-cols-[auto_1fr]">
        {/* sidebar */}
        <aside className="hidden flex-col gap-1 border-r border-border bg-surface-elevated/50 p-3 sm:flex">
          {navItems.map((item) => (
            <span
              key={item.label}
              className={cn(
                "flex items-center gap-2.5 rounded-lg px-3 py-2 text-[13px]",
                item.active
                  ? "bg-accent-gradient text-white"
                  : "text-muted",
              )}
            >
              <item.icon className="size-4" />
              {item.label}
            </span>
          ))}
        </aside>

        {/* main */}
        <div className="flex flex-col gap-4 p-4 md:p-5">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-display text-sm font-semibold text-foreground">
                Operations overview
              </p>
              <p className="font-mono text-[11px] text-muted-subtle">
                Q2 2026 · All branches
              </p>
            </div>
            <span className="rounded-md border border-border bg-surface px-2.5 py-1 font-mono text-[11px] text-muted">
              Live
            </span>
          </div>

          {/* KPI cards */}
          <div className="grid grid-cols-2 gap-2.5 lg:grid-cols-4">
            {kpis.map((kpi) => (
              <div
                key={kpi.label}
                className="rounded-xl border border-border bg-background p-3"
              >
                <p className="text-[11px] text-muted-subtle">{kpi.label}</p>
                <p className="mt-1 font-mono text-base font-medium text-foreground">
                  {kpi.value}
                </p>
                <p
                  className={cn(
                    "mt-1 flex items-center gap-1 text-[11px]",
                    kpi.up ? "text-success" : "text-muted",
                  )}
                >
                  {kpi.up ? (
                    <TrendingUp className="size-3" />
                  ) : (
                    <TrendingDown className="size-3" />
                  )}
                  {kpi.delta}
                </p>
              </div>
            ))}
          </div>

          {/* chart + side list */}
          <div className="grid grid-cols-1 gap-2.5 lg:grid-cols-[1.6fr_1fr]">
            <div className="rounded-xl border border-border bg-background p-4">
              <div className="mb-3 flex items-center justify-between">
                <p className="text-[12px] font-medium text-foreground">
                  Revenue vs. target
                </p>
                <p className="font-mono text-[11px] text-muted-subtle">12 mo</p>
              </div>
              <div className="flex h-28 items-end gap-1.5">
                {bars.map((h, i) => (
                  <span
                    key={i}
                    className="flex-1 rounded-t bg-accent-gradient"
                    style={{ height: `${h}%`, opacity: 0.55 + (h / 100) * 0.45 }}
                  />
                ))}
              </div>
            </div>
            <div className="rounded-xl border border-border bg-background p-4">
              <p className="mb-3 text-[12px] font-medium text-foreground">
                AI agent activity
              </p>
              <ul className="flex flex-col gap-2.5">
                {[
                  "Reconciled 38 invoices",
                  "Routed 12 support tickets",
                  "Flagged 2 margin anomalies",
                  "Synced 64 new leads",
                ].map((row) => (
                  <li key={row} className="flex items-center gap-2 text-[12px] text-muted">
                    <span className="size-1.5 shrink-0 rounded-full bg-accent-gradient" />
                    {row}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
