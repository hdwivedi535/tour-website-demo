import Link from "next/link";
import { Logo } from "@/components/layout/Logo";
import {
  footerExperiences,
  footerExplore,
  footerPlan,
  legalLinks,
  site,
} from "@/lib/site";

export function Footer() {
  return (
    <footer className="bg-night text-ivory">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:px-8 lg:grid-cols-12 lg:gap-10 lg:py-20">
        <div className="lg:col-span-4">
          <Logo inverted />
          <p className="t-body mt-6 max-w-sm text-ivory/70">
            {site.statement}
          </p>
        </div>

        <FooterColumn title="Explore" links={footerExplore} />
        <FooterColumn title="Experiences" links={footerExperiences} />
        <FooterColumn title="Plan Your Journey" links={footerPlan} />

        <div className="lg:col-span-2">
          <p className="t-label text-earth">Connect</p>
          <ul className="mt-5 space-y-3">
            <li>
              <a
                href={site.instagram}
                className="t-small text-ivory/75 transition-colors hover:text-ivory"
                target="_blank"
                rel="noreferrer"
              >
                Instagram
              </a>
            </li>
            <li>
              <a
                href={site.whatsapp}
                className="t-small text-ivory/75 transition-colors hover:text-ivory"
                target="_blank"
                rel="noreferrer"
              >
                WhatsApp
              </a>
            </li>
            <li>
              <a
                href={site.email}
                className="t-small text-ivory/75 transition-colors hover:text-ivory"
              >
                Email
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-ivory/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-6 sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <p className="t-small text-ivory/50">
            © {site.year} Demo. All rights reserved.
          </p>
          <div className="flex gap-6">
            {legalLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="t-small text-ivory/50 transition-colors hover:text-ivory"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: readonly { href: string; label: string }[];
}) {
  return (
    <div className="lg:col-span-2">
      <p className="t-label text-earth">{title}</p>
      <ul className="mt-5 space-y-3">
        {links.map((link) => (
          <li key={link.label}>
            <Link
              href={link.href}
              className="t-small text-ivory/75 transition-colors hover:text-ivory"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
