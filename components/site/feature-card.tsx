import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface FeatureCardProps {
  icon?: LucideIcon;
  title: string;
  description: string;
  className?: string;
  /** Adds the gradient top-border accent (featured cards only). */
  featured?: boolean;
}

export function FeatureCard({
  icon: Icon,
  title,
  description,
  className,
  featured,
}: FeatureCardProps) {
  return (
    <div
      className={cn(
        "surface-card group relative h-full overflow-hidden p-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-border-strong",
        featured && "border-gradient-top",
        className,
      )}
    >
      {Icon ? (
        <span className="mb-5 inline-flex size-11 items-center justify-center rounded-xl border border-border bg-surface-elevated text-cyan transition-colors group-hover:border-border-strong">
          <Icon className="size-5" />
        </span>
      ) : null}
      <h3 className="mb-2 font-display text-lg font-medium tracking-tight text-foreground">
        {title}
      </h3>
      <p className="text-[15px] leading-relaxed text-muted">{description}</p>
    </div>
  );
}
