import { absoluteUrl } from "@/lib/site";
import { LinkedinIcon, XIcon, WhatsAppIcon } from "./brand-icons";

/** Static share links (no JS) for a blog post. */
export function ShareLinks({ title, path }: { title: string; path: string }) {
  const url = absoluteUrl(path);
  const text = encodeURIComponent(title);
  const encodedUrl = encodeURIComponent(url);

  const links = [
    {
      label: "Share on X",
      href: `https://twitter.com/intent/tweet?text=${text}&url=${encodedUrl}`,
      icon: XIcon,
    },
    {
      label: "Share on LinkedIn",
      href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
      icon: LinkedinIcon,
    },
    {
      label: "Share on WhatsApp",
      href: `https://wa.me/?text=${text}%20${encodedUrl}`,
      icon: WhatsAppIcon,
    },
  ];

  return (
    <div className="flex items-center gap-2">
      <span className="text-sm text-muted-subtle">Share</span>
      {links.map((link) => (
        <a
          key={link.label}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={link.label}
          className="inline-flex size-9 items-center justify-center rounded-btn border border-border bg-surface text-muted transition-colors hover:border-border-strong hover:text-foreground"
        >
          <link.icon className="size-[15px]" />
        </a>
      ))}
    </div>
  );
}
