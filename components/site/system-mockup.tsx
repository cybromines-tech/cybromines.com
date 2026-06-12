import { cn } from "@/lib/utils";

/**
 * Compact, distinct CSS mockups for each system — gives every solution card a
 * unique "living" preview. Abstract on purpose: crisp, themeable, no images.
 */

function Shell({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <div
      className={cn(
        "relative h-40 w-full overflow-hidden rounded-xl border border-border bg-background p-3",
        className,
      )}
    >
      {children}
    </div>
  );
}

function Erp() {
  return (
    <Shell>
      <div className="grid grid-cols-3 gap-1.5">
        {["AED 4.8M", "31.6%", "1,284"].map((v) => (
          <div key={v} className="rounded-md border border-border bg-surface p-1.5">
            <p className="font-mono text-[9px] text-muted-subtle">KPI</p>
            <p className="font-mono text-[10px] font-medium text-foreground">{v}</p>
          </div>
        ))}
      </div>
      <div className="mt-2 flex h-16 items-end gap-1">
        {[40, 62, 50, 78, 64, 90, 72, 96].map((h, i) => (
          <span key={i} className="flex-1 rounded-t bg-accent-gradient" style={{ height: `${h}%`, opacity: 0.5 + h / 200 }} />
        ))}
      </div>
    </Shell>
  );
}

function Crm() {
  const cols = [
    { t: "New", n: 2, c: "bg-cyan/60" },
    { t: "Qualified", n: 3, c: "bg-violet/60" },
    { t: "Won", n: 1, c: "bg-success/60" },
  ];
  return (
    <Shell>
      <div className="grid h-full grid-cols-3 gap-1.5">
        {cols.map((col) => (
          <div key={col.t} className="flex flex-col gap-1.5">
            <span className="flex items-center gap-1 font-mono text-[9px] text-muted-subtle">
              <span className={cn("size-1.5 rounded-full", col.c)} /> {col.t}
            </span>
            {Array.from({ length: col.n }).map((_, i) => (
              <div key={i} className="rounded-md border border-border bg-surface p-1.5">
                <div className="h-1.5 w-3/4 rounded bg-border-strong" />
                <div className="mt-1 h-1 w-1/2 rounded bg-border" />
              </div>
            ))}
          </div>
        ))}
      </div>
    </Shell>
  );
}

function Pos() {
  const lines = [
    ["Flat white ×2", "AED 34"],
    ["Croissant", "AED 14"],
    ["Still water", "AED 6"],
  ];
  return (
    <Shell>
      <div className="flex h-full flex-col">
        <p className="font-mono text-[9px] uppercase tracking-wide text-muted-subtle">Order #4821</p>
        <div className="mt-1.5 flex flex-1 flex-col gap-1">
          {lines.map(([a, b]) => (
            <div key={a} className="flex items-center justify-between border-b border-border pb-1 text-[10px]">
              <span className="text-muted">{a}</span>
              <span className="font-mono text-foreground">{b}</span>
            </div>
          ))}
        </div>
        <div className="mt-1.5 flex items-center justify-between rounded-md bg-accent-gradient px-2 py-1.5 text-white">
          <span className="text-[10px] font-medium">Total</span>
          <span className="font-mono text-[11px] font-semibold">AED 54</span>
        </div>
      </div>
    </Shell>
  );
}

function Inventory() {
  const items = [
    ["SKU-1042", "240", true],
    ["SKU-2310", "18", false],
    ["SKU-7781", "512", true],
    ["SKU-0090", "6", false],
  ] as const;
  return (
    <Shell>
      <div className="flex h-full flex-col gap-1.5">
        {items.map(([sku, qty, ok]) => (
          <div key={sku} className="flex items-center justify-between rounded-md border border-border bg-surface px-2 py-1.5 text-[10px]">
            <span className="font-mono text-muted">{sku}</span>
            <span className="flex items-center gap-1.5">
              <span className="font-mono text-foreground">{qty}</span>
              <span className={cn("size-1.5 rounded-full", ok ? "bg-success" : "bg-amber-400")} />
            </span>
          </div>
        ))}
      </div>
    </Shell>
  );
}

function Production() {
  const orders = [
    ["WO-118", 80],
    ["WO-119", 45],
    ["WO-120", 22],
  ] as const;
  return (
    <Shell>
      <div className="flex h-full flex-col gap-2">
        {orders.map(([wo, pct]) => (
          <div key={wo}>
            <div className="flex items-center justify-between text-[10px]">
              <span className="font-mono text-muted">{wo}</span>
              <span className="font-mono text-muted-subtle">{pct}%</span>
            </div>
            <div className="mt-1 h-1.5 overflow-hidden rounded-full bg-surface">
              <span className="block h-full rounded-full bg-accent-gradient" style={{ width: `${pct}%` }} />
            </div>
          </div>
        ))}
        <div className="mt-auto flex items-center gap-1 font-mono text-[9px] text-muted-subtle">
          <span className="size-1.5 rounded-full bg-success" /> line B running
        </div>
      </div>
    </Shell>
  );
}

function Property() {
  // occupancy grid
  const cells = [1, 1, 0, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0];
  return (
    <Shell>
      <div className="flex h-full flex-col">
        <div className="flex items-center justify-between">
          <p className="font-mono text-[9px] uppercase tracking-wide text-muted-subtle">Tower A</p>
          <p className="font-mono text-[10px] text-success">81% occupied</p>
        </div>
        <div className="mt-2 grid flex-1 grid-cols-8 gap-1">
          {cells.map((c, i) => (
            <span
              key={i}
              className={cn(
                "rounded-[3px]",
                c ? "bg-accent-gradient opacity-80" : "border border-border bg-surface",
              )}
            />
          ))}
        </div>
      </div>
    </Shell>
  );
}

function Queue() {
  return (
    <Shell>
      <div className="flex h-full flex-col items-center justify-center gap-2">
        <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-muted-subtle">Now serving</p>
        <p className="font-mono text-3xl font-semibold tracking-tight text-gradient">A-104</p>
        <div className="flex gap-1.5">
          {["A-105", "A-106", "B-12"].map((t) => (
            <span key={t} className="rounded border border-border bg-surface px-1.5 py-0.5 font-mono text-[9px] text-muted">
              {t}
            </span>
          ))}
        </div>
        <p className="font-mono text-[9px] text-cyan">~4 min wait · counter 3</p>
      </div>
    </Shell>
  );
}

const VARIANTS = {
  erp: Erp,
  crm: Crm,
  pos: Pos,
  inventory: Inventory,
  production: Production,
  property: Property,
  queue: Queue,
};

export type SystemMockupVariant = keyof typeof VARIANTS;

export function SystemMockup({ variant }: { variant: SystemMockupVariant }) {
  const Component = VARIANTS[variant];
  return <Component />;
}
