"use client";

import * as React from "react";
import { useSearchParams } from "next/navigation";
import { cn } from "@/lib/utils";
import type { PostMeta } from "@/lib/blog";
import { BlogCard } from "@/components/site/blog-card";

export function BlogListing({
  posts,
  tags,
}: {
  posts: PostMeta[];
  tags: string[];
}) {
  const searchParams = useSearchParams();
  const initialTag = searchParams.get("tag");
  const [activeTag, setActiveTag] = React.useState<string | null>(initialTag);

  const filtered = React.useMemo(
    () => (activeTag ? posts.filter((p) => p.tags.includes(activeTag)) : posts),
    [posts, activeTag],
  );

  const [featured, ...rest] = filtered;

  return (
    <div className="flex flex-col gap-12">
      {/* Tag filter */}
      <div className="flex flex-wrap gap-2">
        <FilterPill
          label="All"
          active={!activeTag}
          onClick={() => setActiveTag(null)}
        />
        {tags.map((tag) => (
          <FilterPill
            key={tag}
            label={tag}
            active={activeTag === tag}
            onClick={() => setActiveTag(tag)}
          />
        ))}
      </div>

      {filtered.length === 0 ? (
        <p className="py-12 text-center text-muted">No posts in this tag yet.</p>
      ) : (
        <>
          {featured && <BlogCard post={featured} featured />}
          {rest.length > 0 && (
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {rest.map((post) => (
                <BlogCard key={post.slug} post={post} />
              ))}
            </div>
          )}
        </>
      )}
    </div>
  );
}

function FilterPill({
  label,
  active,
  onClick,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={cn(
        "rounded-full border px-3.5 py-1.5 text-sm font-medium transition-colors",
        active
          ? "border-transparent bg-foreground text-background"
          : "border-border bg-surface text-muted hover:border-border-strong hover:text-foreground",
      )}
    >
      {label}
    </button>
  );
}
