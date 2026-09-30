import { Link } from "@tanstack/react-router";

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-6 py-14 md:flex-row md:items-end md:justify-between">
        <div className="max-w-sm">
          <p className="font-display text-2xl">
            Let's build something that ships.
          </p>
          <a
            href="mailto:hello@subhrajit.pro"
            className="mt-3 inline-block text-sm text-primary transition-opacity hover:opacity-70"
          >
            hello@subhrajit.pro
          </a>
        </div>
        <div className="flex flex-col gap-3 text-xs uppercase tracking-[0.2em] text-muted-foreground md:items-end">
          <div className="flex flex-wrap gap-6">
            <Link to="/work" className="transition-colors hover:text-primary">
              Work
            </Link>
            <Link to="/services" className="transition-colors hover:text-primary">
              Services
            </Link>
            <Link to="/about" className="transition-colors hover:text-primary">
              About
            </Link>
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer noopener"
              className="transition-colors hover:text-primary"
            >
              GitHub
            </a>
          </div>
          <p className="normal-case tracking-normal">
            © {new Date().getFullYear()} Subhrajit Mukherjee
          </p>
        </div>
      </div>
    </footer>
  );
}
