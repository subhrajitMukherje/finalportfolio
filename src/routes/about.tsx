import { createFileRoute } from "@tanstack/react-router";

import { CTAButton } from "@/components/CTAButton";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Subhrajit Mukherjee" },
      {
        name: "description",
        content:
          "An independent engineer who ships production systems: automation, SaaS and e-commerce, end to end.",
      },
      { property: "og:title", content: "About — Subhrajit Mukherjee" },
      {
        property: "og:description",
        content:
          "An independent engineer who ships production systems: automation, SaaS and e-commerce, end to end.",
      },
    ],
  }),
  component: About,
});

const primary = ["Go", "React", "Next.js", "Node.js", "N8N"];
const secondary = ["C", "PHP", "JavaScript"];

function About() {
  return (
    <section className="mx-auto max-w-4xl px-6 py-24">
      <span className="eyebrow">About</span>
      <h1 className="mt-6 text-4xl leading-tight sm:text-5xl">
        I'd rather hand over a working system than a convincing demo.
      </h1>

      <div className="mt-10 space-y-6 text-base leading-relaxed text-muted-foreground">
        <p>
          Most of my work starts the same way: a business is losing hours to manual steps, or has a
          product idea that keeps stalling at the prototype stage. I take it from there —
          architecture, build, launch, and the unglamorous work of keeping it stable afterwards.
        </p>
        <p>
          That has meant AI products used daily by real teams, automation agents that quietly
          replaced spreadsheets and inboxes, and storefronts that started converting in their first
          week. I work directly with founders and operators, ship in weekly increments, and keep the
          scope honest about what matters first.
        </p>
      </div>

      <div className="mt-16 grid gap-10 border-t border-border pt-10 sm:grid-cols-2">
        <div>
          <span className="eyebrow">Primary stack</span>
          <ul className="mt-5 flex flex-wrap gap-2">
            {primary.map((skill) => (
              <li
                key={skill}
                className="rounded-sm border border-primary/40 px-3 py-1.5 text-xs uppercase tracking-[0.16em] text-primary"
              >
                {skill}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <span className="eyebrow">Also fluent in</span>
          <ul className="mt-5 flex flex-wrap gap-2">
            {secondary.map((skill) => (
              <li
                key={skill}
                className="rounded-sm border border-border px-3 py-1.5 text-xs uppercase tracking-[0.16em] text-muted-foreground"
              >
                {skill}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-16">
        <CTAButton to="/contact">Start a project</CTAButton>
      </div>
    </section>
  );
}
