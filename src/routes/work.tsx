import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

import { ProjectCard } from "@/components/ProjectCard";
import { projects, type ProjectCategory } from "@/data/projects";

export const Route = createFileRoute("/work")({
  head: () => ({
    meta: [
      { title: "Work — Subhrajit Mukherjee" },
      {
        name: "description",
        content:
          "Shipped products: AI SaaS, automation agents and e-commerce systems, with live demos.",
      },
      { property: "og:title", content: "Work — Subhrajit Mukherjee" },
      {
        property: "og:description",
        content:
          "Shipped products: AI SaaS, automation agents and e-commerce systems, with live demos.",
      },
    ],
  }),
  component: Work,
});

const filters = ["All", "SaaS", "Automation", "E-commerce"] as const;

function Work() {
  const [active, setActive] = useState<(typeof filters)[number]>("All");

  const visible =
    active === "All"
      ? projects
      : projects.filter((p) => p.category === (active as ProjectCategory));

  return (
    <section className="mx-auto max-w-6xl px-6 py-24">
      <span className="eyebrow">Selected work</span>
      <h1 className="mt-6 max-w-3xl text-4xl leading-tight sm:text-5xl">
        Products in production, not portfolios of screenshots.
      </h1>

      <div className="mt-12 flex flex-wrap gap-3">
        {filters.map((filter) => (
          <button
            key={filter}
            type="button"
            onClick={() => setActive(filter)}
            aria-pressed={active === filter}
            className={`rounded-sm border px-4 py-2 text-xs uppercase tracking-[0.18em] transition-colors ${
              active === filter
                ? "border-primary text-primary"
                : "border-border text-muted-foreground hover:border-primary/50"
            }`}
          >
            {filter}
          </button>
        ))}
      </div>

      <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {visible.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </section>
  );
}
