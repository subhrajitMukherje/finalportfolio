import { CTAButton } from "@/components/CTAButton";

export type Service = {
  id: string;
  name: string;
  price: string;
  timeline: string;
  includes: string[];
};

export function ServiceBlock({ service }: { service: Service }) {
  return (
    <section
      id={service.id}
      className="grid scroll-mt-28 gap-8 border-t border-border py-12 md:grid-cols-[1fr_1.3fr]"
    >
      <div>
        <h2 className="text-3xl">{service.name}</h2>
        <p className="mt-3 text-2xl text-primary">{service.price}</p>
        <p className="mt-1 text-sm text-muted-foreground">
          Typical timeline: {service.timeline}
        </p>
      </div>
      <div className="flex flex-col gap-6">
        <ul className="space-y-3">
          {service.includes.map((item) => (
            <li
              key={item}
              className="flex gap-3 text-sm leading-relaxed text-muted-foreground"
            >
              <span className="mt-2 h-1 w-1 shrink-0 bg-primary" aria-hidden />
              {item}
            </li>
          ))}
        </ul>
        <div>
          <CTAButton to="/contact" variant="outline">
            Start this project
          </CTAButton>
        </div>
      </div>
    </section>
  );
}
