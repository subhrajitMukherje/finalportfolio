import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";

type Variant = "solid" | "outline";

const styles: Record<Variant, string> = {
  solid:
    "bg-primary text-primary-foreground hover:bg-primary/85 border border-transparent",
  outline:
    "border border-border text-foreground hover:border-primary hover:text-primary",
};

const base =
  "inline-flex items-center justify-center gap-2 rounded-sm px-6 py-3 text-xs font-medium uppercase tracking-[0.18em] transition-colors duration-300";

export function CTAButton({
  to,
  children,
  variant = "solid",
  hash,
}: {
  to: "/" | "/work" | "/services" | "/about" | "/contact";
  children: ReactNode;
  variant?: Variant;
  hash?: string;
}) {
  return (
    <Link
      to={to}
      {...(hash ? { hash } : {})}
      className={`${base} ${styles[variant]}`}
    >
      {children}
    </Link>
  );
}

export function CTAAction({
  children,
  variant = "solid",
  type = "submit",
  disabled,
}: {
  children: ReactNode;
  variant?: Variant;
  type?: "submit" | "button";
  disabled?: boolean;
}) {
  return (
    <button
      type={type}
      disabled={disabled}
      className={`${base} ${styles[variant]} disabled:opacity-50`}
    >
      {children}
    </button>
  );
}
