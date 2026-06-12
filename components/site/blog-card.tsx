import Link from "next/link";
import { Clock, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { formatDate } from "@/lib/utils";
import type { PostMeta } from "@/lib/blog";
import { BlogCover } from "./blog-cover";

export function BlogCard({
  post,
  featured = false,
  className,
}: {
  post: PostMeta;
  featured?: boolean;
  className?: string;
}) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className={cn(
        "surface-card group flex h-full flex-col overflow-hidden transition-all duration-300 hover:-translate-y-0.5 hover:border-border-strong",
        featured && "md:flex-row",
        className,
      )}
    >
      <div className={cn("relative overflow-hidden", featured ? "md:w-1/2" : "")}>
        <BlogCover
          seed={post.slug}
          tag={post.tags[0]}
          className={cn("aspect-[16/10] w-full", featured && "md:aspect-auto md:h-full")}
        />
      </div>
      <div className="flex flex-1 flex-col gap-3 p-6">
        <div className="flex flex-wrap items-center gap-2">
          {post.tags.slice(0, 2).map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-border bg-surface-elevated px-2.5 py-0.5 font-mono text-[11px] uppercase tracking-wide text-muted"
            >
              {tag}
            </span>
          ))}
        </div>
        <h3
          className={cn(
            "font-display font-medium tracking-tight text-foreground transition-colors group-hover:text-foreground/80",
            featured ? "text-2xl" : "text-lg",
          )}
        >
          {post.title}
        </h3>
        <p className="line-clamp-2 flex-1 text-[15px] leading-relaxed text-muted">
          {post.description}
        </p>
        <div className="mt-2 flex items-center justify-between border-t border-border pt-4 text-[13px] text-muted-subtle">
          <span className="flex items-center gap-3">
            <span>{formatDate(post.date)}</span>
            <span className="flex items-center gap-1">
              <Clock className="size-3.5" />
              {post.readingTime}
            </span>
          </span>
          <ArrowUpRight className="size-4 text-muted transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </div>
      </div>
    </Link>
  );
}
