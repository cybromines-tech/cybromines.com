import Link from "next/link";
import { ArrowRight, Home } from "lucide-react";
import { Container } from "@/components/site/container";
import { Button } from "@/components/ui/button";
import { NeuralBeam } from "@/components/site/neural-beam";

export default function NotFound() {
  return (
    <section className="relative flex min-h-[80vh] items-center overflow-hidden py-32">
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-50 [mask-image:radial-gradient(ellipse_60%_60%_at_50%_40%,black,transparent_80%)]"
        aria-hidden
      >
        <NeuralBeam />
      </div>
      <Container>
        <div className="mx-auto flex max-w-xl flex-col items-center text-center">
          <span className="font-mono text-sm uppercase tracking-widest text-muted">
            Error 404
          </span>
          <p className="text-gradient mt-3 font-display text-7xl font-semibold tracking-tight md:text-8xl">
            404
          </p>
          <h1 className="mt-6 text-3xl font-semibold tracking-tight md:text-4xl">
            This page took a different path
          </h1>
          <p className="mt-4 text-lg text-muted">
            The page you&apos;re looking for doesn&apos;t exist or has moved.
            Let&apos;s get you back to something useful.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg">
              <Link href="/">
                <Home className="size-4" />
                Back home
              </Link>
            </Button>
            <Button asChild size="lg" variant="secondary">
              <Link href="/solutions">
                Explore solutions
                <ArrowRight className="size-4" />
              </Link>
            </Button>
          </div>
          <div className="mt-10 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-muted">
            <Link href="/ai-agents" className="hover:text-foreground">
              AI Agents
            </Link>
            <Link href="/integrations/whatsapp-crm" className="hover:text-foreground">
              WhatsApp CRM
            </Link>
            <Link href="/blog" className="hover:text-foreground">
              Blog
            </Link>
            <Link href="/contact" className="hover:text-foreground">
              Contact
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
