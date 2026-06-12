import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/site/container";
import { Reveal } from "@/components/site/reveal";
import { BlogCard } from "@/components/site/blog-card";
import { getAllPosts } from "@/lib/blog";

export function BlogPreview() {
  const posts = getAllPosts().slice(0, 3);
  if (posts.length === 0) return null;

  return (
    <section className="border-t border-border py-24 md:py-32">
      <Container>
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div className="flex flex-col gap-4">
            <span className="eyebrow inline-flex items-center gap-2">
              <span className="size-1.5 rounded-full bg-accent-gradient" aria-hidden />
              From the blog
            </span>
            <h2 className="text-[length:var(--text-section)] font-semibold leading-[1.1] tracking-tight">
              Ideas worth your time
            </h2>
          </div>
          <Link
            href="/blog"
            className="group inline-flex items-center gap-1.5 text-sm font-medium text-foreground"
          >
            View all posts
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-3">
          {posts.map((post, i) => (
            <Reveal key={post.slug} delay={i} as="div">
              <BlogCard post={post} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
