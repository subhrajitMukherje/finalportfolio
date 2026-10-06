import { createFileRoute } from "@tanstack/react-router";

import { ServiceBlock, type Service } from "@/components/ServiceBlock";
import { CTAButton } from "@/components/CTAButton";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services & Pricing — Subhrajit Mukherjee" },
      {
        name: "description",
        content:
          "Automation from $800, SaaS builds from $1,000, e-commerce from $800, LMS platforms from $1,000, Landing Page from 250, Wordpress to NextJS MIgration from 1500 hourly at $45.",
      },
      { property: "og:title", content: "Services & Pricing — Subhrajit Mukherjee" },
      {
        property: "og:description",
        content:
          "Automation, SaaS, e-commerce,Wordpress to NextJS migration and LMS builds with clear scopes, timelines and prices.",
      },
    ],
  }),
  component: Services,
});

const services: Service[] = [
  {
    id: "automation",
    name: "Automation",
    price: "$800+",
    timeline: "5-7 days",
    includes: [
      "Process mapping of the workflow you want removed",
      "Integrations across your existing tools and APIs",
      "AI agents or scheduled jobs with logging and alerts",
      "Handover docs so your team can run it without me",
    ],
  },
  {
    id: "saas",
    name: "SaaS Development",
    price: "$1,500+",
    timeline: "3–4 weeks",
    includes: [
      "Architecture, database schema and auth",
      "Core product build with a production-ready UI",
      "Billing, roles and usage limits where needed",
      "Deployment, monitoring and a first release",
    ],
  },
  {
    id: "ecommerce",
    name: "E-commerce",
    price: "$800+",
    timeline: "2–3 weeks",
    includes: [
      "Storefront build with checkout and payments",
      "Product, inventory and order flows",
      "Performance and technical SEO baked in",
      "Analytics and conversion tracking",
    ],
  },
  {
    id: "lms",
    name: "LMS Website & App",
    price: "$1,000+",
    timeline: "2 weeks",
    includes: [
      "Course, lesson and cohort structures",
      "Student progress, assessments and certificates",
      "Payments, access tiers and drip content",
      "Admin dashboard for your team",
    ],
  },
  {
    id: "Landing Page",
    name: "Landing Page",
    price: "$250+",
    timeline: "2-3 days",
    includes: [
      "Design and development of a single-page application",
      "Integration with email marketing tools",
      "Analytics setup and conversion tracking",
      "Deployment and basic maintenance",
    ],
  },
  {
    id: "Wordpress to Next.js Migration",
    name: "Wordpress to Next.js Migration",
    price: "$1500+",
    timeline: "1-2 weeks",
    includes: [
      "Migration of existing Wordpress content and functionality to Next.js",
      "Implementation of a modern, responsive design",
      "Integration with headless CMS for content management",
      "Performance optimization and SEO improvements",
    ],
  },
  {
    id: "hourly",
    name: "Hourly Engineering",
    price: "$40/hr",
    timeline: "Ongoing",
    includes: [
      "Feature work on an existing codebase",
      "Performance, refactors and bug triage",
      "Technical review and architecture guidance",
      "Weekly reporting on hours and outcomes",
    ],
  },
];

const process = [
  { step: "Discovery", copy: "We define the outcome, scope and constraints." },
  { step: "Build", copy: "Weekly demos against a fixed milestone plan." },
  { step: "Launch", copy: "Deploy, monitor and hand over the keys." },
  { step: "Support", copy: "Iteration and maintenance once it's live." },
];

function Services() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-24">
      <span className="eyebrow">Services</span>
      <h1 className="mt-6 max-w-3xl text-4xl leading-tight sm:text-5xl">
        Clear scopes, honest timelines, prices you can plan around.
      </h1>

      <div className="mt-16">
        {services.map((service) => (
          <ServiceBlock key={service.id} service={service} />
        ))}
      </div>

      <div className="mt-20 border-t border-border pt-12">
        <span className="eyebrow">How it runs</span>
        <ol className="mt-10 grid gap-px bg-border md:grid-cols-4">
          {process.map((item, i) => (
            <li key={item.step} className="bg-background p-8">
              <span className="font-display text-3xl text-primary">0{i + 1}</span>
              <h3 className="mt-4 text-xl">{item.step}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.copy}</p>
            </li>
          ))}
        </ol>
      </div>

      <div className="mt-16 flex flex-col gap-6 border-t border-border pt-10 md:flex-row md:items-center md:justify-between">
        <p className="max-w-lg text-sm text-muted-foreground">
          Final quote depends on scope — book a call for an estimate.
        </p>
        <CTAButton to="/contact">Book a call</CTAButton>
      </div>
    </section>
  );
}
