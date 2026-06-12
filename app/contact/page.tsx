import type { Metadata } from "next";
import { Mail, Phone, MapPin } from "lucide-react";

import { buildMetadata } from "@/lib/seo/metadata";
import { siteConfig, whatsappLink } from "@/lib/site";
import { Container } from "@/components/site/container";
import { Breadcrumbs } from "@/components/site/breadcrumbs";
import { NeuralBeam } from "@/components/site/neural-beam";
import { ContactForm } from "@/components/contact/contact-form";
import { WhatsAppIcon } from "@/components/site/brand-icons";

export const metadata: Metadata = buildMetadata({
  title: "Contact Cybromines",
  description:
    "Talk to the Cybromines team about the ERP suite, AI agents, WhatsApp CRM, or a custom build. Based in Dubai, serving enterprises across the GCC.",
  path: "/contact",
});

const infoCards = [
  {
    icon: Mail,
    label: "Email us",
    value: siteConfig.salesEmail,
    href: `mailto:${siteConfig.salesEmail}`,
  },
  {
    icon: Phone,
    label: "Call us",
    value: siteConfig.phone,
    href: `tel:${siteConfig.phoneHref}`,
  },
  {
    icon: WhatsAppIcon,
    label: "WhatsApp",
    value: "Chat with our team",
    href: whatsappLink("Hi Cybromines — I'd like to talk about your platform."),
  },
];

export default function ContactPage() {
  return (
    <section className="relative overflow-hidden pt-28 md:pt-32">
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-40 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,black,transparent_75%)]"
        aria-hidden
      >
        <NeuralBeam />
      </div>
      <Container>
        <Breadcrumbs
          items={[
            { name: "Home", path: "/" },
            { name: "Contact", path: "/contact" },
          ]}
        />

        <div className="max-w-2xl">
          <span className="eyebrow inline-flex items-center gap-2">
            <span className="size-1.5 rounded-full bg-accent-gradient" aria-hidden />
            Contact
          </span>
          <h1 className="mt-5 text-[length:var(--text-hero)] font-semibold leading-[1.05] tracking-[-0.03em]">
            Let&apos;s talk about your operations
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-muted md:text-xl">
            Tell us what you&apos;re trying to solve. Whether it&apos;s the full
            ERP suite, a single integration, or a custom build, we&apos;ll point
            you to the right next step.
          </p>
        </div>

        <div className="mt-16 grid gap-12 pb-24 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          {/* Left — info */}
          <div className="flex flex-col gap-4">
            {infoCards.map((card) => (
              <a
                key={card.label}
                href={card.href}
                target={card.label === "WhatsApp" ? "_blank" : undefined}
                rel={card.label === "WhatsApp" ? "noopener noreferrer" : undefined}
                className="group surface-card flex items-center gap-4 p-5 transition-colors hover:border-border-strong"
              >
                <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-xl border border-border bg-surface-elevated text-cyan">
                  <card.icon className="size-5" />
                </span>
                <span className="flex flex-col">
                  <span className="text-[13px] text-muted-subtle">{card.label}</span>
                  <span className="font-medium text-foreground">{card.value}</span>
                </span>
              </a>
            ))}

            {/* Office + map placeholder */}
            <div className="surface-card overflow-hidden">
              <div className="flex items-center gap-4 p-5">
                <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-xl border border-border bg-surface-elevated text-cyan">
                  <MapPin className="size-5" />
                </span>
                <span className="flex flex-col">
                  <span className="text-[13px] text-muted-subtle">Visit us</span>
                  <span className="font-medium text-foreground">
                    {siteConfig.address.line2}, {siteConfig.address.city}
                  </span>
                </span>
              </div>
              <div className="relative h-44 border-t border-border">
                <div
                  className="absolute inset-0"
                  style={{
                    backgroundImage:
                      "linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)",
                    backgroundSize: "28px 28px",
                  }}
                  aria-hidden
                />
                <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 items-center gap-2">
                  <span className="relative flex size-3.5">
                    <span className="absolute inline-flex size-full animate-ping rounded-full bg-cyan/40" />
                    <span className="relative inline-flex size-3.5 rounded-full bg-accent-gradient" />
                  </span>
                  <span className="rounded-full border border-border bg-background/80 px-2.5 py-1 font-mono text-[11px] text-foreground backdrop-blur">
                    {siteConfig.address.line1}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right — form */}
          <ContactForm />
        </div>
      </Container>
    </section>
  );
}
