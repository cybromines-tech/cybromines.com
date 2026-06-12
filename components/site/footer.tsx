import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Logo } from "./logo";
import { footerNav } from "@/lib/data/nav";
import { siteConfig } from "@/lib/site";
import { LinkedinIcon, GithubIcon, YoutubeIcon, XIcon } from "./brand-icons";

const year = 2026;

const socials = [
  { label: "LinkedIn", href: siteConfig.social.linkedin, icon: LinkedinIcon },
  { label: "GitHub", href: siteConfig.social.github, icon: GithubIcon },
  { label: "YouTube", href: siteConfig.social.youtube, icon: YoutubeIcon },
];

export function Footer() {
  return (
    <footer className="relative border-t border-border bg-background">
      <div className="bg-grid pointer-events-none absolute inset-0 opacity-40" aria-hidden />
      <div className="container-page relative py-16 md:py-20">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1fr_1fr]">
          {/* Brand + newsletter */}
          <div className="flex flex-col gap-5">
            <Link href="/" aria-label="Cybromines home">
              <Logo />
            </Link>
            <p className="max-w-xs text-sm leading-relaxed text-muted">
              An AI-native software house. We build and integrate every system
              your business runs on — ERP, CRM, POS, and more — powered by AI.
            </p>
            <form
              className="mt-1 flex max-w-sm items-center gap-2"
              action={`mailto:${siteConfig.email}`}
              method="post"
              encType="text/plain"
            >
              <label htmlFor="newsletter" className="sr-only">
                Email address for the newsletter
              </label>
              <input
                id="newsletter"
                name="email"
                type="email"
                required
                placeholder="you@company.com"
                className="h-10 flex-1 rounded-btn border border-border bg-surface px-3 text-sm text-foreground placeholder:text-muted-subtle focus-visible:border-border-strong focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              />
              <button
                type="submit"
                aria-label="Subscribe"
                className="inline-flex size-10 shrink-0 items-center justify-center rounded-btn bg-accent-gradient text-white transition-transform hover:scale-105"
              >
                <ArrowRight className="size-4" />
              </button>
            </form>
          </div>

          {/* Link columns */}
          {(Object.keys(footerNav) as (keyof typeof footerNav)[]).map((group) => (
            <div key={group} className="flex flex-col gap-3.5">
              <h2 className="font-mono text-xs uppercase tracking-widest text-muted-subtle">
                {group}
              </h2>
              <ul className="flex flex-col gap-2.5">
                {footerNav[group].map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted transition-colors hover:text-foreground"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-6 border-t border-border pt-8 sm:flex-row sm:items-center">
          <p className="text-sm text-muted-subtle">
            © {year} {siteConfig.legalName}. All rights reserved.
          </p>
          <div className="flex items-center gap-2">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                aria-label={s.label}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex size-9 items-center justify-center rounded-btn border border-border bg-surface text-muted transition-colors hover:border-border-strong hover:text-foreground"
              >
                <s.icon className="size-[18px]" />
              </a>
            ))}
            <a
              href={siteConfig.social.x}
              aria-label="X (Twitter)"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex size-9 items-center justify-center rounded-btn border border-border bg-surface text-muted transition-colors hover:border-border-strong hover:text-foreground"
            >
              <XIcon className="size-[15px]" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
