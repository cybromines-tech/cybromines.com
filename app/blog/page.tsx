import type { Metadata } from "next";
import { Suspense } from "react";

import { getAllPosts, getAllTags } from "@/lib/blog";
import { buildMetadata } from "@/lib/seo/metadata";
import { PageHero } from "@/components/site/page-hero";
import { Container } from "@/components/site/container";
import { BlogListing } from "@/components/blog/blog-listing";
import { CTABand } from "@/components/site/cta-band";

export const metadata: Metadata = buildMetadata({
  title: "Blog — enterprise software, AI, and automation",
  description:
    "Practical writing on ERP, AI agents, WhatsApp CRM, and automation for GCC enterprises — from the team building Cybromines.",
  path: "/blog",
});

export default function BlogPage() {
  const posts = getAllPosts();
  const tags = getAllTags();

  return (
    <>
      <PageHero
        eyebrow="Blog"
        title="Ideas for operators building with AI"
        subtitle="Practical, specific writing on ERP, AI agents, and automation — no hype, no buzzword salad, just what's actually working for enterprises."
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "Blog", path: "/blog" },
        ]}
        primary={{ label: "Book a demo", href: "/contact" }}
        beam={false}
      />

      <section className="py-16 md:py-20">
        <Container>
          <Suspense fallback={null}>
            <BlogListing posts={posts} tags={tags} />
          </Suspense>
        </Container>
      </section>

      <CTABand
        title="Less reading, more automating"
        subtitle="Ready to see it on your own data? Book a 30-minute demo with our team."
        primary={{ label: "Book a demo", href: "/contact" }}
        secondary={{ label: "Explore solutions", href: "/solutions" }}
      />
    </>
  );
}
