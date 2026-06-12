import Link from "next/link";
import { ArrowUpRight, Megaphone, MousePointerClick, UserPlus, MessageSquare } from "lucide-react";
import { Container } from "@/components/site/container";
import { SectionHeading } from "@/components/site/section-heading";
import { Reveal } from "@/components/site/reveal";
import { ChatMockup } from "@/components/site/chat-mockup";

function FacebookFlow() {
  const steps = [
    { icon: Megaphone, label: "Facebook / Instagram ad" },
    { icon: MousePointerClick, label: "Lead form submitted" },
    { icon: UserPlus, label: "Synced to CRM instantly" },
    { icon: MessageSquare, label: "WhatsApp follow-up sent" },
  ];
  return (
    <div className="flex flex-col gap-3">
      {steps.map((step, i) => (
        <div key={step.label} className="flex items-center gap-3">
          <span className="flex size-10 shrink-0 items-center justify-center rounded-xl border border-border-strong bg-surface-elevated text-cyan">
            <step.icon className="size-5" />
          </span>
          <span className="flex-1 rounded-xl border border-border bg-surface px-4 py-3 text-sm font-medium text-foreground">
            {step.label}
          </span>
          {i < steps.length - 1 && (
            <span className="font-mono text-xs text-muted-subtle">↓</span>
          )}
        </div>
      ))}
    </div>
  );
}

export function IntegrationsDuo() {
  return (
    <section className="py-24 md:py-32">
      <Container>
        <SectionHeading
          eyebrow="Integrations"
          title="Meet customers where they already are"
          subtitle="Connect WhatsApp and Facebook to your CRM so every conversation and every ad click becomes a tracked, actionable lead."
        />

        <div className="mt-14 grid grid-cols-1 gap-5 lg:grid-cols-2">
          <Reveal as="article">
            <div className="surface-card flex h-full flex-col gap-6 p-7 transition-colors hover:border-border-strong">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="font-display text-xl font-medium tracking-tight">
                    WhatsApp CRM
                  </h3>
                  <p className="mt-1.5 text-[15px] text-muted">
                    A shared team inbox, broadcasts, and chatbots — every chat
                    becomes a deal in your pipeline.
                  </p>
                </div>
                <Link
                  href="/integrations/whatsapp-crm"
                  aria-label="Explore WhatsApp CRM"
                  className="text-muted-subtle transition-colors hover:text-foreground"
                >
                  <ArrowUpRight className="size-5" />
                </Link>
              </div>
              <ChatMockup className="max-w-none" />
              <Link
                href="/integrations/whatsapp-crm"
                className="text-sm font-medium text-foreground underline-offset-4 hover:underline"
              >
                Explore WhatsApp CRM →
              </Link>
            </div>
          </Reveal>

          <Reveal as="article" delay={1}>
            <div className="surface-card flex h-full flex-col gap-6 p-7 transition-colors hover:border-border-strong">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="font-display text-xl font-medium tracking-tight">
                    Facebook Ads
                  </h3>
                  <p className="mt-1.5 text-[15px] text-muted">
                    Sync lead forms and conversions, then route every lead
                    straight into your follow-up flow.
                  </p>
                </div>
                <Link
                  href="/integrations/facebook-ads"
                  aria-label="Explore Facebook Ads integration"
                  className="text-muted-subtle transition-colors hover:text-foreground"
                >
                  <ArrowUpRight className="size-5" />
                </Link>
              </div>
              <div className="flex flex-1 items-center">
                <FacebookFlow />
              </div>
              <Link
                href="/integrations/facebook-ads"
                className="text-sm font-medium text-foreground underline-offset-4 hover:underline"
              >
                Explore Facebook Ads →
              </Link>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
