import { Sparkles, ArrowDown, Webhook } from "lucide-react";
import { cn } from "@/lib/utils";

interface Mail {
  from: string;
  subject: string;
  lead?: boolean;
}

const mails: Mail[] = [
  { from: "Ahmed K. — Gulf Retail", subject: "Request for a demo + pricing", lead: true },
  { from: "newsletter@stripe", subject: "Your weekly product digest" },
  { from: "Layla M. — Meridian", subject: "Interested in 200 licenses", lead: true },
  { from: "no-reply@calendar", subject: "Reminder: standup at 9:00" },
];

/**
 * CSS-built inbox showing the Email Agent flagging leads and forwarding them
 * to a webhook/CRM. Crisp, themeable, no image.
 */
export function InboxMockup({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "mx-auto w-full max-w-md overflow-hidden rounded-2xl border border-border-strong bg-surface shadow-2xl",
        className,
      )}
    >
      {/* header */}
      <div className="flex items-center justify-between border-b border-border bg-surface-elevated/60 px-4 py-3">
        <span className="font-display text-sm font-semibold text-foreground">Inbox</span>
        <span className="flex items-center gap-1.5 rounded-full border border-violet/30 bg-violet/10 px-2.5 py-1 font-mono text-[10px] uppercase tracking-wide text-foreground">
          <Sparkles className="size-3 text-cyan" /> agent on
        </span>
      </div>

      {/* messages */}
      <ul className="flex flex-col">
        {mails.map((m, i) => (
          <li
            key={i}
            className={cn(
              "flex items-center justify-between gap-3 border-b border-border px-4 py-3",
              m.lead && "bg-violet/[0.06]",
            )}
          >
            <span className="flex min-w-0 flex-col">
              <span className="truncate text-[13px] font-medium text-foreground">{m.from}</span>
              <span className="truncate text-[12px] text-muted">{m.subject}</span>
            </span>
            {m.lead ? (
              <span className="inline-flex shrink-0 items-center gap-1 rounded-full bg-accent-gradient px-2 py-0.5 text-[10px] font-semibold text-white">
                <Sparkles className="size-2.5" /> Lead
              </span>
            ) : (
              <span className="size-1.5 shrink-0 rounded-full bg-border-strong" />
            )}
          </li>
        ))}
      </ul>

      {/* delivery */}
      <div className="flex flex-col items-center gap-2 bg-surface-elevated/40 px-4 py-3">
        <ArrowDown className="size-4 text-muted-subtle" />
        <span className="flex items-center gap-2 rounded-lg border border-border bg-background px-3 py-2 font-mono text-[11px] text-foreground">
          <Webhook className="size-3.5 text-success" />
          2 leads → POST /webhook · 200 OK
        </span>
      </div>
    </div>
  );
}
