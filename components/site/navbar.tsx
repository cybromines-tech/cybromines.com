"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { mainNav, type NavItem } from "@/lib/data/nav";
import { Logo } from "./logo";
import { ThemeToggle } from "./theme-toggle";
import { Button } from "@/components/ui/button";
import { MobileMenu } from "./mobile-menu";

export function Navbar() {
  const [scrolled, setScrolled] = React.useState(false);
  const [openMenu, setOpenMenu] = React.useState<string | null>(null);
  const pathname = usePathname();

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close any open mega-menu on Escape.
  React.useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpenMenu(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-border bg-background/72 backdrop-blur-xl"
          : "border-b border-transparent bg-background/0",
      )}
    >
      <nav
        className="container-page flex h-16 items-center justify-between gap-6"
        aria-label="Primary"
      >
        <Link href="/" className="rounded-btn" aria-label="Cybromines home">
          <Logo />
        </Link>

        {/* Desktop nav */}
        <ul className="hidden items-center gap-1 lg:flex">
          {mainNav.map((item) => (
            <NavEntry
              key={item.label}
              item={item}
              pathname={pathname}
              open={openMenu === item.label}
              onOpen={() => setOpenMenu(item.label)}
              onClose={() => setOpenMenu((cur) => (cur === item.label ? null : cur))}
            />
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <ThemeToggle className="hidden sm:inline-flex" />
          <Button asChild size="sm" className="hidden sm:inline-flex">
            <Link href="/contact">Get started</Link>
          </Button>
          <MobileMenu />
        </div>
      </nav>
    </header>
  );
}

function NavEntry({
  item,
  pathname,
  open,
  onOpen,
  onClose,
}: {
  item: NavItem;
  pathname: string;
  open: boolean;
  onOpen: () => void;
  onClose: () => void;
}) {
  const active = pathname === item.href || pathname.startsWith(item.href + "/");
  const closeTimer = React.useRef<ReturnType<typeof setTimeout> | null>(null);

  const scheduleClose = () => {
    closeTimer.current = setTimeout(onClose, 120);
  };
  const cancelClose = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
  };

  if (!item.children) {
    return (
      <li>
        <Link
          href={item.href}
          className={cn(
            "inline-flex h-9 items-center rounded-btn px-3 text-sm font-medium transition-colors",
            active ? "text-foreground" : "text-muted hover:text-foreground",
          )}
        >
          {item.label}
        </Link>
      </li>
    );
  }

  return (
    <li
      className="relative"
      onMouseEnter={() => {
        cancelClose();
        onOpen();
      }}
      onMouseLeave={scheduleClose}
    >
      <button
        type="button"
        aria-expanded={open}
        aria-haspopup="true"
        onClick={() => (open ? onClose() : onOpen())}
        onFocus={onOpen}
        className={cn(
          "inline-flex h-9 items-center gap-1 rounded-btn px-3 text-sm font-medium transition-colors",
          active || open ? "text-foreground" : "text-muted hover:text-foreground",
        )}
      >
        {item.label}
        <ChevronDown
          className={cn(
            "size-3.5 text-muted-subtle transition-transform duration-200",
            open && "rotate-180",
          )}
        />
      </button>

      {open && (
        <div
          className={cn(
            "absolute left-1/2 top-full -translate-x-1/2 pt-3",
            item.wide ? "w-[min(94vw,44rem)]" : "w-[min(92vw,30rem)]",
          )}
          onMouseEnter={cancelClose}
          onMouseLeave={scheduleClose}
        >
          <div
            className={cn(
              "grid gap-1 rounded-2xl border border-border bg-surface-elevated/95 p-2 shadow-2xl backdrop-blur-xl",
              item.wide ? "grid-cols-2" : "grid-cols-1",
            )}
          >
            {item.children.map((child) => {
              const Icon = child.icon;
              return (
                <Link
                  key={child.href}
                  href={child.href}
                  onClick={onClose}
                  className="group flex items-start gap-3 rounded-xl p-3 transition-colors hover:bg-surface"
                >
                  <span className="mt-0.5 inline-flex size-9 shrink-0 items-center justify-center rounded-lg border border-border bg-surface text-cyan transition-colors group-hover:border-border-strong">
                    <Icon className="size-[18px]" />
                  </span>
                  <span className="flex flex-col">
                    <span className="text-sm font-medium text-foreground">
                      {child.label}
                    </span>
                    <span className="text-[13px] leading-snug text-muted">
                      {child.description}
                    </span>
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </li>
  );
}
