import { Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

/** Small "AI-powered" pill with a shimmering gradient border. */
export function AiBadge({
  label = "AI-powered",
  className,
}: {
  label?: string;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border border-brand/30 bg-brand/10 px-2.5 py-1 font-mono text-[10px] uppercase tracking-wide text-foreground",
        className,
      )}
    >
      <Sparkles className="size-3 text-brand-bright" />
      <span className="bg-[linear-gradient(110deg,var(--brand),var(--brand-bright),var(--brand))] bg-[length:200%_100%] bg-clip-text text-transparent [animation:shimmer_3s_linear_infinite]">
        {label}
      </span>
    </span>
  );
}
