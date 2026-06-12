import { Check, CheckCheck } from "lucide-react";
import { cn } from "@/lib/utils";
import { WhatsAppIcon } from "./brand-icons";

interface Bubble {
  from: "them" | "us";
  text: string;
  time: string;
}

const thread: Bubble[] = [
  { from: "them", text: "Hi! Do you have the 12mm steel pipes in stock?", time: "09:41" },
  { from: "us", text: "Hello Ahmed 👋 Yes — 240 units available in Jebel Ali.", time: "09:41" },
  { from: "us", text: "Want me to send a quote for 200 units?", time: "09:42" },
  { from: "them", text: "Yes please, with delivery to Sharjah.", time: "09:43" },
  { from: "us", text: "Quote #Q-4821 sent. AED 18,400 incl. delivery. Valid 7 days.", time: "09:44" },
];

/**
 * A WhatsApp-style chat thread, built in CSS. WhatsApp brand green is used
 * ONLY inside this mockup, never as a page accent.
 */
export function ChatMockup({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "mx-auto w-full max-w-sm overflow-hidden rounded-2xl border border-border-strong bg-surface shadow-2xl",
        className,
      )}
    >
      {/* header */}
      <div className="flex items-center gap-3 bg-[#075E54] px-4 py-3 text-white">
        <span className="flex size-9 items-center justify-center rounded-full bg-white/15">
          <WhatsAppIcon className="size-5" />
        </span>
        <div className="flex flex-col leading-tight">
          <span className="text-sm font-medium">Ahmed — Al Noor Trading</span>
          <span className="text-[11px] text-white/70">online</span>
        </div>
      </div>

      {/* messages */}
      <div className="flex flex-col gap-2 bg-[#0b141a] px-3 py-4">
        {thread.map((b, i) => (
          <div
            key={i}
            className={cn(
              "flex",
              b.from === "us" ? "justify-end" : "justify-start",
            )}
          >
            <div
              className={cn(
                "max-w-[80%] rounded-2xl px-3 py-2 text-[13px] leading-snug shadow-sm",
                b.from === "us"
                  ? "rounded-br-sm bg-[#005c4b] text-white"
                  : "rounded-bl-sm bg-[#202c33] text-white/90",
              )}
            >
              <p>{b.text}</p>
              <span
                className={cn(
                  "mt-1 flex items-center justify-end gap-1 text-[10px]",
                  b.from === "us" ? "text-white/60" : "text-white/40",
                )}
              >
                {b.time}
                {b.from === "us" &&
                  (i === thread.length - 1 ? (
                    <Check className="size-3" />
                  ) : (
                    <CheckCheck className="size-3 text-[#53bdeb]" />
                  ))}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* CRM tag bar */}
      <div className="flex items-center justify-between border-t border-border bg-surface px-4 py-3">
        <span className="font-mono text-[11px] uppercase tracking-wide text-muted-subtle">
          Pipeline
        </span>
        <span className="rounded-full border border-violet/40 bg-violet/10 px-2.5 py-1 text-[11px] font-medium text-foreground">
          Quote sent · AED 18.4k
        </span>
      </div>
    </div>
  );
}
