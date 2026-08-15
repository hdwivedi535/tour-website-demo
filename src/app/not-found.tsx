import Link from "next/link";
import { Logo } from "@/components/layout/Logo";

export default function NotFound() {
  return (
    <section className="flex min-h-[70vh] flex-col items-center justify-center px-5 text-center">
      <Logo />
      <h1 className="t-h1 mt-10">This page has wandered.</h1>
      <p className="t-body mt-4 max-w-md text-muted">
        The path you followed is not on the map. Return home, or begin with
        the experiences.
      </p>
      <Link href="/" className="t-button mt-8 text-earth hover:text-earth-deep">
        Return home
      </Link>
    </section>
  );
}
