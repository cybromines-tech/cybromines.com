"use client";

import * as React from "react";
import Link from "next/link";
import * as Dialog from "@radix-ui/react-dialog";
import { Menu, X, ChevronDown } from "lucide-react";
import { mainNav } from "@/lib/data/nav";
import { Logo } from "./logo";
import { ThemeToggle } from "./theme-toggle";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function MobileMenu() {
  const [open, setOpen] = React.useState(false);

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger asChild>
        <button
          type="button"
          aria-label="Open menu"
          className="inline-flex size-10 items-center justify-center rounded-btn border border-border bg-surface text-foreground transition-colors hover:border-border-strong lg:hidden"
        >
          <Menu className="size-5" />
        </button>
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-[60] bg-black/60 backdrop-blur-sm" />
        <Dialog.Content
          className="fixed inset-y-0 right-0 z-[70] flex w-[88vw] max-w-sm flex-col border-l border-border bg-background shadow-2xl focus:outline-none"
          aria-describedby={undefined}
        >
          <div className="flex h-16 items-center justify-between border-b border-border px-5">
            <Dialog.Title asChild>
              <Link href="/" onClick={() => setOpen(false)} aria-label="Cybromines home">
                <Logo />
              </Link>
            </Dialog.Title>
            <Dialog.Close asChild>
              <button
                type="button"
                aria-label="Close menu"
                className="inline-flex size-10 items-center justify-center rounded-btn border border-border bg-surface text-foreground"
              >
                <X className="size-5" />
              </button>
            </Dialog.Close>
          </div>

          <nav className="flex-1 overflow-y-auto px-3 py-4" aria-label="Mobile">
            <ul className="flex flex-col gap-0.5">
              {mainNav.map((item) =>
                item.children ? (
                  <MobileGroup
                    key={item.label}
                    label={item.label}
                    href={item.href}
                    onNavigate={() => setOpen(false)}
                    items={item.children}
                  />
                ) : (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      onClick={() => setOpen(false)}
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
              <Link href="/contact" onClick={() => setOpen(false)}>
                Get started
              </Link>
            </Button>
            <ThemeToggle />
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

function MobileGroup({
  label,
  items,
  onNavigate,
}: {
  label: string;
  href: string;
  onNavigate: () => void;
  items: { label: string; href: string; icon: React.ElementType }[];
}) {
  const [expanded, setExpanded] = React.useState(false);
  return (
    <li>
      <button
        type="button"
        aria-expanded={expanded}
        onClick={() => setExpanded((e) => !e)}
        className="flex w-full items-center justify-between rounded-xl px-3 py-3 text-[15px] font-medium text-foreground hover:bg-surface"
      >
        {label}
        <ChevronDown
          className={cn(
            "size-4 text-muted transition-transform",
            expanded && "rotate-180",
          )}
        />
      </button>
      {expanded && (
        <ul className="ml-3 flex flex-col gap-0.5 border-l border-border pl-3">
          {items.map((child) => {
            const Icon = child.icon;
            return (
              <li key={child.href}>
                <Link
                  href={child.href}
                  onClick={onNavigate}
                  className="flex items-center gap-2.5 rounded-lg px-3 py-2.5 text-sm text-muted hover:bg-surface hover:text-foreground"
                >
                  <Icon className="size-4 text-cyan" />
                  {child.label}
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </li>
  );
}
