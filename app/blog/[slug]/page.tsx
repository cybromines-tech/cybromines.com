import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Clock } from "lucide-react";

import {
  getPost,
  getPublishedSlugs,
  getAllPosts,
  getRelatedPosts,
} from "@/lib/blog";
import { extractToc } from "@/lib/toc";
import { formatDate } from "@/lib/utils";
import { buildMetadata } from "@/lib/seo/metadata";
import { blogPostingSchema } from "@/lib/seo/jsonld";

import { JsonLd } from "@/components/site/json-ld";
import { Container } from "@/components/site/container";
import { Breadcrumbs } from "@/components/site/breadcrumbs";
import { BlogCover } from "@/components/site/blog-cover";
import { MdxContent } from "@/components/mdx/mdx-content";
import { TableOfContents } from "@/components/site/table-of-contents";
import { ShareLinks } from "@/components/site/share-links";
import { BlogCard } from "@/components/site/blog-card";
import { CTABand } from "@/components/site/cta-band";

export const dynamicParams = false;

export function generateStaticParams() {
  return getPublishedSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return buildMetadata({
    title: post.title,
    description: post.description,
    path: `/blog/${post.slug}`,
    type: "article",
    publishedTime: post.date,
    // Per-post OG falls back to the default brand image (covers are CSS-built).
  });
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const toc = extractToc(post.content);
  const related = getRelatedPosts(post.slug, post.tags);

  // prev / next within the chronological list.
  const all = getAllPosts();
  const idx = all.findIndex((p) => p.slug === post.slug);
  const prev = idx >= 0 && idx < all.length - 1 ? all[idx + 1] : null;
  const next = idx > 0 ? all[idx - 1] : null;

  return (
    <article className="pt-28 md:pt-32">
      <JsonLd
        schema={blogPostingSchema({
          title: post.title,
          description: post.description,
          path: `/blog/${post.slug}`,
          date: post.date,
          cover: `/blog/${post.slug}/opengraph-image`,
          author: post.author.name,
        })}
      />

      <Container>
        <Breadcrumbs
          items={[
            { name: "Home", path: "/" },
            { name: "Blog", path: "/blog" },
            { name: post.title, path: `/blog/${post.slug}` },
          ]}
        />

        {/* Header */}
        <header className="mx-auto max-w-3xl">
          <div className="flex flex-wrap items-center gap-2">
            {post.tags.map((tag) => (
              <Link
                key={tag}
                href={`/blog?tag=${encodeURIComponent(tag)}`}
                className="rounded-full border border-border bg-surface px-2.5 py-1 font-mono text-[11px] uppercase tracking-wide text-muted transition-colors hover:border-border-strong hover:text-foreground"
              >
                {tag}
              </Link>
            ))}
          </div>
          <h1 className="mt-5 text-[clamp(2rem,5vw,3.25rem)] font-semibold leading-[1.08] tracking-[-0.02em]">
            {post.title}
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-muted">{post.description}</p>

          <div className="mt-7 flex flex-wrap items-center gap-4 border-y border-border py-4">
            <span className="flex items-center gap-3">
              <span className="inline-flex size-10 items-center justify-center rounded-full bg-accent-gradient font-mono text-xs font-medium text-white">
                {post.author.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")
                  .slice(0, 2)}
              </span>
              <span className="flex flex-col">
                <span className="text-sm font-medium text-foreground">
                  {post.author.name}
                </span>
                <span className="text-[13px] text-muted">{post.author.role}</span>
              </span>
            </span>
            <span className="ml-auto flex items-center gap-4 text-[13px] text-muted-subtle">
              <span>{formatDate(post.date)}</span>
              <span className="flex items-center gap-1">
                <Clock className="size-3.5" />
                {post.readingTime}
              </span>
            </span>
          </div>
        </header>

        {/* Cover */}
        <div className="mx-auto mt-8 max-w-4xl">
          <BlogCover
            seed={post.slug}
            tag={post.tags[0]}
            className="aspect-[2/1] w-full rounded-2xl border border-border"
          />
        </div>

        {/* Body + TOC */}
        <div className="mx-auto mt-12 grid grid-cols-1 max-w-6xl gap-12 lg:grid-cols-[1fr_15rem]">
          <div className="prose-cybromines prose max-w-3xl">
            <MdxContent source={post.content} />
          </div>
          <aside className="hidden lg:block">
            <div className="sticky top-28 flex flex-col gap-8">
              <TableOfContents items={toc} />
              <ShareLinks title={post.title} path={`/blog/${post.slug}`} />
            </div>
          </aside>
        </div>

        {/* Mobile share */}
        <div className="mx-auto mt-10 max-w-3xl lg:hidden">
          <ShareLinks title={post.title} path={`/blog/${post.slug}`} />
        </div>

        {/* Prev / next */}
        {(prev || next) && (
          <nav
            aria-label="More posts"
            className="mx-auto mt-16 grid grid-cols-1 max-w-3xl gap-4 border-t border-border pt-8 sm:grid-cols-2"
          >
            {prev ? (
              <Link
                href={`/blog/${prev.slug}`}
                className="group flex flex-col gap-1 rounded-card border border-border bg-surface p-5 transition-colors hover:border-border-strong"
              >
                <span className="flex items-center gap-1.5 text-[13px] text-muted-subtle">
                  <ArrowLeft className="size-3.5" /> Previous
                </span>
                <span className="font-display font-medium text-foreground">
                  {prev.title}
                </span>
              </Link>
            ) : (
              <span />
            )}
            {next ? (
              <Link
                href={`/blog/${next.slug}`}
                className="group flex flex-col items-end gap-1 rounded-card border border-border bg-surface p-5 text-right transition-colors hover:border-border-strong"
              >
                <span className="flex items-center gap-1.5 text-[13px] text-muted-subtle">
                  Next <ArrowRight className="size-3.5" />
                </span>
                <span className="font-display font-medium text-foreground">
                  {next.title}
                </span>
              </Link>
            ) : (
              <span />
            )}
          </nav>
        )}
      </Container>

      {/* Related */}
      {related.length > 0 && (
        <section className="mt-24 border-t border-border py-24">
          <Container>
            <h2 className="font-display text-2xl font-semibold tracking-tight">
              Related reading
            </h2>
            <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3">
              {related.map((p) => (
                <BlogCard key={p.slug} post={p} />
              ))}
            </div>
          </Container>
        </section>
      )}

      <CTABand
        title="Put these ideas to work"
        subtitle="See how Cybromines runs your ERP, agents, and integrations on one platform."
        primary={{ label: "Book a demo", href: "/contact" }}
        secondary={{ label: "Read more posts", href: "/blog" }}
      />
    </article>
  );
}
