import Link from "next/link";

type LogoProps = {
  inverted?: boolean;
  href?: string;
};

export function Logo({ inverted = false, href = "/" }: LogoProps) {
  return (
    <Link
      href={href}
      className={`logo-mark inline-block uppercase text-current transition-opacity hover:opacity-70 ${
        inverted ? "text-ivory" : "text-charcoal"
      }`}
      aria-label="DEMO home"
    >
      DEMO
    </Link>
  );
}
