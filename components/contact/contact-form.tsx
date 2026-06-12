"use client";

import * as React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Loader2, Check, AlertCircle } from "lucide-react";

import { siteConfig } from "@/lib/site";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

const schema = z.object({
  name: z.string().min(2, "Please enter your name"),
  company: z.string().min(2, "Please enter your company"),
  email: z.string().email("Enter a valid email address"),
  phone: z.string().optional(),
  interest: z.string().min(1, "Please choose what you're interested in"),
  message: z.string().min(10, "Tell us a little more (10+ characters)"),
  // Honeypot — must stay empty.
  website: z.string().max(0).optional(),
});

type FormValues = z.infer<typeof schema>;

const interests = [
  "ERP suite",
  "AI Agents",
  "WhatsApp CRM",
  "Facebook Ads",
  "Custom software",
  "SEO services",
  "Mobile apps",
  "Something else",
];

type Status = "idle" | "submitting" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = React.useState<Status>("idle");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { interest: "" },
  });

  const onSubmit = async (values: FormValues) => {
    // Honeypot tripped — silently succeed without sending.
    if (values.website) {
      setStatus("success");
      return;
    }

    setStatus("submitting");

    // No endpoint configured → graceful mailto fallback.
    if (!siteConfig.contactEndpoint) {
      const body = encodeURIComponent(
        `Name: ${values.name}\nCompany: ${values.company}\nEmail: ${values.email}\nPhone: ${values.phone ?? "—"}\nInterest: ${values.interest}\n\n${values.message}`,
      );
      window.location.assign(
        `mailto:${siteConfig.salesEmail}?subject=${encodeURIComponent(
          `New enquiry — ${values.interest}`,
        )}&body=${body}`,
      );
      setStatus("success");
      reset();
      return;
    }

    try {
      const res = await fetch(siteConfig.contactEndpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(values),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
      reset();
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="surface-card flex flex-col items-center gap-4 p-10 text-center">
        <span className="inline-flex size-12 items-center justify-center rounded-full bg-success/15 text-success">
          <Check className="size-6" />
        </span>
        <h3 className="font-display text-xl font-medium">Message on its way</h3>
        <p className="max-w-sm text-muted">
          Thanks for reaching out. Our team will get back to you within one
          business day. If your email client opened, just hit send.
        </p>
        <Button variant="secondary" onClick={() => setStatus("idle")}>
          Send another
        </Button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="surface-card flex flex-col gap-5 p-6 md:p-8"
      noValidate
    >
      {/* Honeypot */}
      <div className="hidden" aria-hidden>
        <label htmlFor="website">Leave this empty</label>
        <input id="website" type="text" tabIndex={-1} autoComplete="off" {...register("website")} />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Name" error={errors.name?.message} htmlFor="name">
          <Input id="name" placeholder="Your full name" {...register("name")} />
        </Field>
        <Field label="Company" error={errors.company?.message} htmlFor="company">
          <Input id="company" placeholder="Company name" {...register("company")} />
        </Field>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Work email" error={errors.email?.message} htmlFor="email">
          <Input id="email" type="email" placeholder="you@company.com" {...register("email")} />
        </Field>
        <Field label="Phone" htmlFor="phone" optional>
          <Input id="phone" type="tel" placeholder="+971 …" {...register("phone")} />
        </Field>
      </div>

      <Field label="I'm interested in" error={errors.interest?.message} htmlFor="interest">
        <select
          id="interest"
          {...register("interest")}
          className="flex h-11 w-full rounded-btn border border-border bg-surface px-3.5 text-sm text-foreground focus-visible:border-border-strong focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        >
          <option value="" disabled>
            Select an option
          </option>
          {interests.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
      </Field>

      <Field label="Message" error={errors.message?.message} htmlFor="message">
        <Textarea
          id="message"
          rows={5}
          placeholder="Tell us about your business and what you're trying to solve."
          {...register("message")}
        />
      </Field>

      {status === "error" && (
        <p className="flex items-center gap-2 text-sm text-red-400">
          <AlertCircle className="size-4" />
          Something went wrong. Please email us at {siteConfig.salesEmail}.
        </p>
      )}

      <Button type="submit" size="lg" disabled={status === "submitting"}>
        {status === "submitting" ? (
          <>
            <Loader2 className="size-4 animate-spin" /> Sending…
          </>
        ) : (
          "Send message"
        )}
      </Button>
      <p className="text-center text-xs text-muted-subtle">
        By submitting, you agree to our{" "}
        <a href="/privacy" className="underline underline-offset-2 hover:text-muted">
          privacy policy
        </a>
        .
      </p>
    </form>
  );
}

function Field({
  label,
  htmlFor,
  error,
  optional,
  children,
}: {
  label: string;
  htmlFor: string;
  error?: string;
  optional?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <Label htmlFor={htmlFor}>
        {label}
        {optional && <span className="ml-1 text-muted-subtle">(optional)</span>}
      </Label>
      {children}
      {error && <p className="text-[13px] text-red-400">{error}</p>}
    </div>
  );
}
