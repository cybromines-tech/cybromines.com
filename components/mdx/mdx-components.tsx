import Link from "next/link";
import { Link2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { Callout } from "./callout";

// Local type to avoid a hard dependency on `mdx/types`.
// eslint-disable-next-line @typescript-eslint/no-explicit-any
type MDXComponents = Record<string, React.ComponentType<any>>;

/** Heading with a hover anchor link (id supplied by rehype-slug). */
function heading(level: 2 | 3 | 4) {
  const Tag = `h${level}` as const;
  return function Heading({
    id,
    children,
    className,
    ...props
  }: React.HTMLAttributes<HTMLHeadingElement>) {
    return (
      <Tag id={id} className={cn("group scroll-mt-28", className)} {...props}>
        {id ? (
          <a
            href={`#${id}`}
            className="ml-[-1.1em] inline-flex pr-[0.3em] align-middle text-muted-subtle opacity-0 transition-opacity group-hover:opacity-100"
            aria-label="Link to this section"
          >
            <Link2 className="size-[0.7em]" />
          </a>
        ) : null}
        {children}
      </Tag>
    );
  };
}

function MdxImage({ src, alt }: { src?: string; alt?: string }) {
  if (!src) return null;
  return (
    <figure className="my-8">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={alt ?? ""}
        loading="lazy"
        className="w-full rounded-xl border border-border"
      />
      {alt ? (
        <figcaption className="mt-2 text-center text-sm text-muted-subtle">
          {alt}
        </figcaption>
      ) : null}
    </figure>
  );
}

export const mdxComponents: MDXComponents = {
  h2: heading(2),
  h3: heading(3),
  h4: heading(4),
  a: ({
    href = "",
    children,
    ...props
  }: React.AnchorHTMLAttributes<HTMLAnchorElement>) => {
    if (href.startsWith("/")) {
      return (
        <Link href={href} {...props}>
          {children}
        </Link>
      );
    }
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" {...props}>
        {children}
      </a>
    );
  },
  img: MdxImage,
  Callout,
};
