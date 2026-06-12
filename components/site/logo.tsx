import { cn } from "@/lib/utils";

/** Cybromines wordmark with a geometric "node" glyph in the brand gradient. */
export function Logo({
  className,
  showWordmark = true,
}: {
  className?: string;
  showWordmark?: boolean;
}) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <svg
        width="28"
        height="28"
        viewBox="0 0 28 28"
        fill="none"
        aria-hidden="true"
        className="shrink-0"
      >
        <defs>
          <linearGradient id="logo-grad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#7C3AED" />
            <stop offset="100%" stopColor="#22D3EE" />
          </linearGradient>
        </defs>
        <rect
          x="1"
          y="1"
          width="26"
          height="26"
          rx="8"
          stroke="url(#logo-grad)"
          strokeWidth="1.5"
          opacity="0.45"
        />
        {/* three connected nodes */}
        <circle cx="9" cy="9" r="2.4" fill="url(#logo-grad)" />
        <circle cx="19" cy="11" r="2.4" fill="url(#logo-grad)" />
        <circle cx="13" cy="19" r="2.4" fill="url(#logo-grad)" />
        <path
          d="M9 9 L19 11 L13 19 Z"
          stroke="url(#logo-grad)"
          strokeWidth="1.25"
          fill="none"
          opacity="0.8"
        />
      </svg>
      {showWordmark && (
        <span className="font-display text-[1.2rem] font-semibold tracking-tight text-foreground">
          Cybromines
        </span>
      )}
    </span>
  );
}
