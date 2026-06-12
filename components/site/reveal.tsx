"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  /** Stagger index — multiplies the delay (×80ms). */
  delay?: number;
  as?: "div" | "li" | "section" | "article";
}

/**
 * Scroll-triggered reveal: fade + 8px rise, once-only. Uses a tiny
 * IntersectionObserver + CSS (see globals.css) instead of Framer Motion,
 * which keeps the JS bundle small and hydration fast. Content stays visible
 * if JS never runs (the hidden state only applies under html.js).
 */
export function Reveal({ children, className, delay = 0, as: Tag = "div" }: RevealProps) {
  const ref = React.useRef<HTMLElement | null>(null);
  const [shown, setShown] = React.useState(false);

  React.useEffect(() => {
    const el = ref.current;
    if (!el || shown) return;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setShown(true);
          io.disconnect();
        }
      },
      { rootMargin: "0px 0px -80px 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [shown]);

  return (
    <Tag
      ref={ref as React.Ref<never>}
      className={cn("reveal", shown && "reveal-in", className)}
      style={delay ? { transitionDelay: `${delay * 80}ms` } : undefined}
    >
      {children}
    </Tag>
  );
}
