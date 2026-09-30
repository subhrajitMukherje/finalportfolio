import { createFileRoute, Link } from "@tanstack/react-router";

import { CTAButton } from "@/components/CTAButton";
import { ProjectCard } from "@/components/ProjectCard";
import { featuredProjects } from "@/data/projects";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Subhrajit Mukherjee — Systems that ship" },
      {
        name: "description",
        content:
          "Automation, SaaS and e-commerce builds delivered end to end — not prototypes.",
      },
      { property: "og:title", content: "Subhrajit Mukherjee — Systems that ship" },
      {
        property: "og:description",
        content:
          "Automation, SaaS and e-commerce builds delivered end to end — not prototypes.",
      },
    ],
  }),
  component: Home,
});

const pillars = [
  {
    id: "automation",
    title: "Automation",
    copy: "Internal tools, agents and integrations that remove the manual work your team quietly absorbs.",
  },
  {
    id: "saas",
    title: "SaaS",
    copy: "From schema to billing: products built to hold real users, not demo traffic.",
  },
  {
    id: "ecommerce",
    title: "E-commerce",
    copy: "Storefronts and funnels engineered for speed, search and conversion.",
  },
] as const;

const stack = ["Go", "React", "Next.js", "Node.js", "PostgreSQL", "TypeScript"];

function Home() {
  return (
    <>
      <section className="mx-auto flex min-h-[88vh] max-w-6xl flex-col justify-center px-6 py-24">
        <p className="eyebrow fade-up">Independent engineer · Remote worldwide</p>
        <h1 className="fade-up mt-8 max-w-4xl text-4xl leading-[1.08] sm:text-6xl lg:text-7xl">
          I build systems that automate operations, launch products and get
          businesses <em className="not-italic text-primary">selling online</em>.
        </h1>
        <p className="fade-up mt-8 max-w-xl text-base leading-relaxed text-muted-foreground">
          End to end — architecture, build, launch and the support after it. Not
          prototypes, not slide decks.
        </p>
        <div className="fade-up mt-12 flex flex-wrap gap-4">
          <CTAButton to="/work">View work</CTAButton>
          <CTAButton to="/contact" variant="outline">
            Book a call
          </CTAButton>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <span className="eyebrow">What I do</span>
        <div className="mt-10 grid gap-px border border-border bg-border md:grid-cols-3">
          {pillars.map((pillar) => (
            <Link
              key={pillar.id}
              to="/services"
              hash={pillar.id}
              className="group bg-background p-8 transition-colors hover:bg-card"
            >
              <h2 className="text-2xl">{pillar.title}</h2>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                {pillar.copy}
              </p>
              <span className="mt-8 inline-block text-xs uppercase tracking-[0.18em] text-primary opacity-0 transition-opacity group-hover:opacity-100">
                See pricing →
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <span className="eyebrow">Featured work</span>
            <h2 className="mt-4 text-3xl sm:text-4xl">Recent builds</h2>
          </div>
          <CTAButton to="/work" variant="outline">
            All projects
          </CTAButton>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="hairline flex flex-col gap-8 pt-10 md:flex-row md:items-center md:justify-between">
          <p className="text-sm text-muted-foreground">
            Serving clients across India, the US, the UK and the UAE.
          </p>
          <ul className="flex flex-wrap gap-x-8 gap-y-3">
            {stack.map((tech) => (
              <li
                key={tech}
                className="text-xs uppercase tracking-[0.2em] text-muted-foreground"
              >
                {tech}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-28 pt-10">
        <div className="border border-border bg-card px-8 py-16 text-center sm:px-16">
          <h2 className="mx-auto max-w-2xl text-3xl leading-tight sm:text-4xl">
            Have something that needs to actually ship?
          </h2>
          <p className="mx-auto mt-5 max-w-md text-sm text-muted-foreground">
            Tell me the outcome you need. I'll tell you the scope, timeline and
            price.
          </p>
          <div className="mt-10 flex justify-center">
            <CTAButton to="/contact">Book a call</CTAButton>
          </div>
        </div>
      </section>
    </>
  );
}
