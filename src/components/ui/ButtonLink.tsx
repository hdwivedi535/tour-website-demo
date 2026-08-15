import type { ReactNode } from "react";
import Link from "next/link";

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "onDark" | "heroPrimary" | "heroSecondary";
  className?: string;
  onClick?: () => void;
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className = "",
  onClick,
}: ButtonLinkProps) {
  const styles = {
    primary:
      "bg-charcoal text-ivory hover:bg-ink border border-charcoal",
    secondary:
      "bg-transparent text-charcoal border border-charcoal/25 hover:border-charcoal hover:bg-charcoal hover:text-ivory",
    onDark:
      "bg-transparent text-ivory border border-ivory/40 hover:bg-ivory hover:text-charcoal",
    heroPrimary:
      "bg-ivory text-charcoal border border-ivory hover:bg-ivory-deep shadow-[0_10px_30px_rgba(20,18,16,0.28)]",
    heroSecondary:
      "bg-charcoal/45 text-ivory border border-ivory hover:bg-ivory hover:text-charcoal shadow-[0_8px_24px_rgba(20,18,16,0.25)]",
  } as const;

  return (
    <Link
      href={href}
      onClick={onClick}
      className={`t-button inline-flex items-center justify-center px-7 py-3.5 transition-colors duration-300 ${styles[variant]} ${className}`}
    >
      {children}
    </Link>
  );
}
