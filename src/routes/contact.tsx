import { createFileRoute } from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";
import { useState, type FormEvent } from "react";

import { CTAAction } from "@/components/CTAButton";
import { submitContact } from "@/lib/contact.functions";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Subhrajit Mukherjee" },
      {
        name: "description",
        content:
          "Tell me the outcome you need. I reply within 24 hours — or email hello@subhrajit.pro.",
      },
      { property: "og:title", content: "Contact — Subhrajit Mukherjee" },
      {
        property: "og:description",
        content:
          "Tell me the outcome you need. I reply within 24 hours — or email hello@subhrajit.pro.",
      },
    ],
  }),
  component: Contact,
});

const projectTypes = [
  "Automation",
  "SaaS development",
  "E-commerce",
  "LMS website or app",
  "Hourly engineering",
  "Something else",
];

const budgets = [
  "Under $1,000",
  "$1,000 – $3,000",
  "$3,000 – $8,000",
  "$8,000+",
  "Not sure yet",
];

const fieldClass =
  "w-full rounded-sm border border-input bg-card px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-primary";

function Contact() {
  const send = useServerFn(submitContact);
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle",
  );

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const values = new FormData(form);
    setStatus("sending");

    try {
      const result = await send({
        data: {
          name: String(values.get("name") ?? ""),
          email: String(values.get("email") ?? ""),
          projectType: String(values.get("projectType") ?? ""),
          budget: String(values.get("budget") ?? ""),
          message: String(values.get("message") ?? ""),
        },
      });
      if (!result.ok) throw new Error("send failed");
      setStatus("sent");
      form.reset();
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  }

  return (
    <section className="mx-auto grid max-w-6xl gap-16 px-6 py-24 lg:grid-cols-[1fr_1.2fr]">
      <div>
        <span className="eyebrow">Contact</span>
        <h1 className="mt-6 text-4xl leading-tight sm:text-5xl">
          Tell me what needs to exist.
        </h1>
        <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
          Share the outcome, the deadline and anything already built. I reply
          within 24 hours with scope, timeline and price.
        </p>
        <dl className="mt-12 space-y-6 border-t border-border pt-8 text-sm">
          <div>
            <dt className="eyebrow">Email</dt>
            <dd className="mt-2">
              <a
                href="mailto:hello@subhrajit.pro"
                className="text-primary transition-opacity hover:opacity-70"
              >
                hello@subhrajit.pro
              </a>
            </dd>
          </div>
          <div>
            <dt className="eyebrow">GitHub</dt>
            <dd className="mt-2">
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer noopener"
                className="text-primary transition-opacity hover:opacity-70"
              >
                github.com
              </a>
            </dd>
          </div>
        </dl>
      </div>

      <form onSubmit={onSubmit} className="space-y-6">
        <div className="grid gap-6 sm:grid-cols-2">
          <label className="block">
            <span className="eyebrow">Name</span>
            <input
              name="name"
              required
              maxLength={120}
              placeholder="Your name"
              className={`mt-3 ${fieldClass}`}
            />
          </label>
          <label className="block">
            <span className="eyebrow">Email</span>
            <input
              name="email"
              type="email"
              required
              placeholder="you@company.com"
              className={`mt-3 ${fieldClass}`}
            />
          </label>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          <label className="block">
            <span className="eyebrow">Project type</span>
            <select name="projectType" required defaultValue="" className={`mt-3 ${fieldClass}`}>
              <option value="" disabled>
                Select one
              </option>
              {projectTypes.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </label>
          <label className="block">
            <span className="eyebrow">Budget</span>
            <select name="budget" required defaultValue="" className={`mt-3 ${fieldClass}`}>
              <option value="" disabled>
                Select a range
              </option>
              {budgets.map((budget) => (
                <option key={budget} value={budget}>
                  {budget}
                </option>
              ))}
            </select>
          </label>
        </div>

        <label className="block">
          <span className="eyebrow">Project details</span>
          <textarea
            name="message"
            required
            minLength={10}
            rows={7}
            placeholder="What are you trying to launch, automate or fix?"
            className={`mt-3 resize-none ${fieldClass}`}
          />
        </label>

        <div className="flex flex-wrap items-center gap-6">
          <CTAAction disabled={status === "sending"}>
            {status === "sending" ? "Sending…" : "Send enquiry"}
          </CTAAction>
          <p className="text-xs text-muted-foreground">
            I reply within 24 hours.
          </p>
        </div>

        {status === "sent" && (
          <p className="text-sm text-primary">
            Thanks — your message is in. I'll be in touch within 24 hours.
          </p>
        )}
        {status === "error" && (
          <p className="text-sm text-destructive">
            That didn't go through. Please email{" "}
            <a href="mailto:hello@subhrajit.pro" className="underline">
              hello@subhrajit.pro
            </a>{" "}
            instead.
          </p>
        )}
      </form>
    </section>
  );
}
