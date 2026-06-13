"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";
import { mainNav } from "@/lib/data/nav";
import { Logo } from "./logo";
import { ThemeToggle } from "./theme-toggle";
import { Button } from "@/components/ui/button";

/**
 * Mobile menu toggled by a native checkbox + CSS (see globals.css), so it opens
 * INSTANTLY on tap without waiting for React to hydrate. JS only adds niceties
 * once available: close on route change and Esc-to-close.
 */
export function MobileMenu() {
  const pathname = usePathname();
  const ref = React.useRef<HTMLInputElement>(null);
  const close = () => {
    if (ref.current) ref.current.checked = false;
  };

  // Close on client-side navigation.
  React.useEffect(() => {
    if (ref.current) ref.current.checked = false;
  }, [pathname]);

  // Esc to close.
  React.useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" && ref.current) ref.current.checked = false;
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <div className="lg:hidden">
      {/* The toggle: a real checkbox, operable before any JS runs */}
      <input
        ref={ref}
        type="checkbox"
        id="cyb-menu"
        className="sr-only"
        aria-label="Toggle navigation menu"
      />

      {/* Hamburger */}
      <label
        htmlFor="cyb-menu"
        className="cyb-menu-trigger inline-flex size-10 cursor-pointer items-center justify-center rounded-btn border border-border bg-surface text-foreground transition-colors hover:border-border-strong"
      >
        <Menu className="size-5" />
        <span className="sr-only">Open menu</span>
      </label>

      {/* Overlay (tap to close) */}
      <label
        htmlFor="cyb-menu"
        aria-hidden="true"
        className="cyb-menu-overlay fixed inset-0 z-[60] bg-black/60 backdrop-blur-sm"
      />

      {/* Sliding panel */}
      <div className="cyb-menu-panel fixed inset-y-0 right-0 z-[70] flex w-[88vw] max-w-sm flex-col border-l border-border bg-background shadow-2xl">
        <div className="flex h-16 items-center justify-between border-b border-border px-5">
          <Link href="/" onClick={close} aria-label="Cybromines home">
            <Logo />
          </Link>
          <label
            htmlFor="cyb-menu"
            className="inline-flex size-10 cursor-pointer items-center justify-center rounded-btn border border-border bg-surface text-foreground"
          >
            <X className="size-5" />
            <span className="sr-only">Close menu</span>
          </label>
        </div>

        <nav className="flex-1 overflow-y-auto px-3 py-4" aria-label="Mobile">
          <ul className="flex flex-col gap-0.5">
            {mainNav.map((item) =>
              item.children ? (
                <li key={item.label}>
                  <details className="group">
                    <summary className="flex cursor-pointer list-none items-center justify-between rounded-xl px-3 py-3 text-[15px] font-medium text-foreground hover:bg-surface [&::-webkit-details-marker]:hidden">
                      {item.label}
                      <ChevronDown className="size-4 text-muted transition-transform group-open:rotate-180" />
                    </summary>
                    <ul className="ml-3 flex flex-col gap-0.5 border-l border-border pl-3">
                      {item.children.map((child) => {
                        const Icon = child.icon;
                        return (
                          <li key={child.href}>
                            <Link
                              href={child.href}
                              onClick={close}
                              className="flex items-center gap-2.5 rounded-lg px-3 py-2.5 text-sm text-muted hover:bg-surface hover:text-foreground"
                            >
                              <Icon className="size-4 text-cyan" />
                              {child.label}
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  </details>
                </li>
              ) : (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    onClick={close}
                    className="flex items-center rounded-xl px-3 py-3 text-[15px] font-medium text-foreground hover:bg-surface"
                  >
                    {item.label}
                  </Link>
                </li>
              ),
            )}
          </ul>
        </nav>

        <div className="flex items-center gap-3 border-t border-border p-5">
          <Button asChild className="flex-1">
            <Link href="/contact" onClick={close}>
              Get started
            </Link>
          </Button>
          <ThemeToggle />
        </div>
      </div>
    </div>
  );
}
