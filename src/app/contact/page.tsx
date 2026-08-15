import type { Metadata } from "next";
import { PageIntro } from "@/components/ui/PageIntro";
import { getExperienceBySlug } from "@/lib/experiences";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
};

export default async function ContactPage({
  searchParams,
}: {
  searchParams: Promise<{ experience?: string }>;
}) {
  const { experience: slug } = await searchParams;
  const selected = slug ? getExperienceBySlug(slug) : undefined;

  return (
    <>
      <PageIntro
        eyebrow="Contact"
        title="A conversation, not a form"
        copy={
          selected
            ? `You asked about ${selected.title}. Dedicated enquiry flows will arrive later — for now, reach us through the channels below and mention this experience.`
            : "Reach us through the channels you already use. Dedicated enquiry flows will arrive later — for now, a simple invitation to connect."
        }
      />
      <section className="bg-ivory">
        <div className="mx-auto grid max-w-7xl gap-px border-y border-border bg-border px-0 sm:grid-cols-3">
          <ContactCard
            label="Instagram"
            href={site.instagram}
            value="@wanderkashi"
            note="A visual journal of the road."
            external
          />
          <ContactCard
            label="WhatsApp"
            href={site.whatsapp}
            value="+91 96480 48815"
            note="A direct line for travel conversation."
            external
          />
          <ContactCard
            label="Email"
            href={site.email}
            value="hello@demo.travel"
            note="For slower, considered notes."
          />
        </div>
      </section>
    </>
  );
}

function ContactCard({
  label,
  href,
  value,
  note,
  external = false,
}: {
  label: string;
  href: string;
  value: string;
  note: string;
  external?: boolean;
}) {
  return (
    <a
      href={href}
      className="bg-ivory px-8 py-16 transition-colors hover:bg-paper"
      {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
    >
      <p className="t-label">{label}</p>
      <p className="t-h3 mt-5">{value}</p>
      <p className="t-small mt-3">{note}</p>
    </a>
  );
}
