import { Quote } from "lucide-react";
import { cn } from "@/lib/utils";
import type { Testimonial } from "@/lib/data/testimonials";

export function TestimonialCard({
  testimonial,
  className,
}: {
  testimonial: Testimonial;
  className?: string;
}) {
  return (
    <figure
      className={cn(
        "surface-card flex h-full flex-col gap-6 p-7 transition-colors hover:border-border-strong",
        className,
      )}
    >
      <Quote className="size-7 text-violet" aria-hidden />
      <blockquote className="flex-1 text-[15px] leading-relaxed text-foreground/90">
        “{testimonial.quote}”
      </blockquote>
      <figcaption className="flex items-center gap-3 border-t border-border pt-5">
        <span className="inline-flex size-11 items-center justify-center rounded-full bg-accent-gradient font-mono text-sm font-medium text-white">
          {testimonial.initials}
        </span>
        <span className="flex flex-col">
          <span className="text-sm font-medium text-foreground">
            {testimonial.name}
          </span>
          <span className="text-[13px] text-muted">
            {testimonial.role}, {testimonial.company}
          </span>
        </span>
      </figcaption>
    </figure>
  );
}
