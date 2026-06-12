import type { Metadata } from "next";
import { Boxes } from "lucide-react";

import { buildMetadata } from "@/lib/seo/metadata";
import { Container } from "@/components/site/container";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { SectionHeading } from "@/components/site/section-heading";
import { FeatureCard } from "@/components/site/feature-card";
import { TestimonialCard } from "@/components/site/testimonial-card";
import { FAQAccordion } from "@/components/site/faq-accordion";
import { NeuralBeam } from "@/components/site/neural-beam";
import { AgentNetwork } from "@/components/site/agent-network";
import { DashboardMockup } from "@/components/site/dashboard-mockup";
import { ChatMockup } from "@/components/site/chat-mockup";
import { BlogCover } from "@/components/site/blog-cover";
import { testimonials } from "@/lib/data/testimonials";
import { generalFaqs } from "@/lib/data/faqs";

export const metadata: Metadata = buildMetadata({
  title: "Component gallery (dev)",
  description: "Internal component gallery for visual QA. Not indexed.",
  path: "/dev/components",
  noIndex: true,
});

function Block({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="border-t border-border py-12">
      <p className="eyebrow mb-6">{title}</p>
      {children}
    </section>
  );
}

export default function ComponentGallery() {
  return (
    <div className="pt-28">
      <Container>
        <h1 className="text-3xl font-semibold tracking-tight">Component gallery</h1>
        <p className="mt-2 text-muted">Visual QA surface — excluded from the sitemap.</p>

        <Block title="Buttons">
          <div className="flex flex-wrap items-center gap-3">
            <Button>Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="ghost">Ghost</Button>
            <Button size="sm">Small</Button>
            <Button size="lg">Large</Button>
          </div>
        </Block>

        <Block title="Form controls">
          <div className="grid max-w-md gap-3">
            <Input placeholder="Text input" />
            <Textarea placeholder="Textarea" />
          </div>
        </Block>

        <Block title="Section heading">
          <SectionHeading eyebrow="Eyebrow" title="Section heading title" subtitle="An optional subtitle for context." />
        </Block>

        <Block title="Feature cards">
          <div className="grid gap-4 md:grid-cols-3">
            <FeatureCard icon={Boxes} title="Standard card" description="A regular feature card with an icon and description." />
            <FeatureCard icon={Boxes} title="Featured card" description="Featured card with the gradient top border." featured />
            <FeatureCard title="No icon" description="A feature card without an icon." />
          </div>
        </Block>

        <Block title="Testimonial">
          <div className="grid gap-4 md:grid-cols-3">
            {testimonials.map((t) => (
              <TestimonialCard key={t.name} testimonial={t} />
            ))}
          </div>
        </Block>

        <Block title="FAQ accordion">
          <div className="max-w-2xl">
            <FAQAccordion items={generalFaqs} />
          </div>
        </Block>

        <Block title="Neural beam (signature)">
          <div className="grid gap-4 md:grid-cols-2">
            <div className="h-56 overflow-hidden rounded-card border border-border bg-surface">
              <NeuralBeam />
            </div>
            <AgentNetwork className="max-w-sm" />
          </div>
        </Block>

        <Block title="Dashboard mockup">
          <DashboardMockup />
        </Block>

        <Block title="Chat mockup">
          <ChatMockup />
        </Block>

        <Block title="Blog covers">
          <div className="grid gap-4 md:grid-cols-3">
            {["alpha", "beta", "gamma"].map((seed) => (
              <BlogCover key={seed} seed={seed} tag="Sample" className="aspect-[16/10] rounded-xl" />
            ))}
          </div>
        </Block>

        <div className="h-24" />
      </Container>
    </div>
  );
}
