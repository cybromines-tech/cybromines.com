import { Info, Lightbulb, AlertTriangle, type LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

type CalloutType = "note" | "tip" | "warning";

const config: Record<CalloutType, { icon: LucideIcon; className: string }> = {
  note: { icon: Info, className: "border-cyan/30 bg-cyan/5" },
  tip: { icon: Lightbulb, className: "border-violet/30 bg-violet/5" },
  warning: { icon: AlertTriangle, className: "border-amber-500/30 bg-amber-500/5" },
};

export function Callout({
  type = "note",
  title,
  children,
}: {
  type?: CalloutType;
  title?: string;
  children: React.ReactNode;
}) {
  const { icon: Icon, className } = config[type];
  return (
    <div
      className={cn(
        "my-6 flex gap-3 rounded-xl border p-4 text-[15px] leading-relaxed",
        className,
      )}
    >
      <Icon className="mt-0.5 size-5 shrink-0 text-foreground" />
      <div className="[&>p]:m-0">
        {title ? <p className="mb-1 font-medium text-foreground">{title}</p> : null}
        <div className="text-muted">{children}</div>
      </div>
    </div>
  );
}
