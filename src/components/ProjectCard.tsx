import type { Project } from "@/data/projects";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group flex flex-col border border-border bg-card transition-colors duration-500 hover:border-primary/50">
      <div className="overflow-hidden border-b border-border">
        <img
          src={project.image}
          alt={`${project.title} interface`}
          width={1280}
          height={800}
          loading="lazy"
          className="aspect-[16/10] w-full object-cover opacity-90 transition-transform duration-700 group-hover:scale-[1.03]"
        />
      </div>
      <div className="flex flex-1 flex-col gap-4 p-6 sm:p-8">
        <span className="eyebrow">{project.category}</span>
        <h3 className="text-2xl">{project.title}</h3>
        <p className="text-sm leading-relaxed text-muted-foreground">
          {project.description}
        </p>
        <ul className="mt-auto flex flex-wrap gap-2 pt-2">
          {project.stack.map((tech) => (
            <li
              key={tech}
              className="rounded-sm border border-border px-2.5 py-1 text-[0.65rem] uppercase tracking-[0.14em] text-muted-foreground"
            >
              {tech}
            </li>
          ))}
        </ul>
        <a
          href={project.liveUrl}
          target="_blank"
          rel="noreferrer noopener"
          className="mt-2 inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-primary transition-opacity hover:opacity-70"
        >
          Live demo <span aria-hidden>→</span>
        </a>
      </div>
    </article>
  );
}
