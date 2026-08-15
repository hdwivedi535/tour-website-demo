import type { Metadata } from "next";
import { EnquiryForm } from "@/components/contact/EnquiryForm";
import { PageIntro } from "@/components/ui/PageIntro";
import { getExperienceBySlug } from "@/lib/experiences";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Enquire about a Varanasi experience or send a general travel request.",
};

export default async function ContactPage({
  searchParams,
}: {
  searchParams: Promise<{ experience?: string }>;
}) {
  const { experience: rawSlug } = await searchParams;
  const slug = rawSlug?.trim();
  const selected = slug ? getExperienceBySlug(slug) : undefined;
  const unknownExperience = Boolean(slug && !selected);

  return (
    <>
      <PageIntro
        eyebrow="Contact"
        title={selected ? "Enquire about this experience" : "Begin a conversation"}
        copy={
          selected
            ? "Share a few details about dates, pace, and how you like to travel. This is an enquiry, not a booking."
            : "Tell us how you like to travel. If you have a particular experience in mind, you can also enquire from its page. This is a request, not a reservation."
        }
      />

      <section className="bg-ivory">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:px-8 lg:grid-cols-12 lg:py-24">
          <div className="lg:col-span-4">
            {selected ? (
              <div>
                <p className="t-label">Enquiring about</p>
                <h2 className="t-h2 mt-4">{selected.title}</h2>
                <p className="t-small mt-4">
                  {selected.location} · {selected.duration}
                </p>
                <p className="t-body mt-6 text-muted">{selected.shortDescription}</p>
              </div>
            ) : (
              <div>
                <p className="t-label">General enquiry</p>
                <h2 className="t-h2 mt-4">Travel, shaped around you</h2>
                <p className="t-body mt-6 text-muted">
                  {unknownExperience
                    ? "We could not find that experience. You can still send a general enquiry, or return to the experiences collection and choose again."
                    : "No experience is pre-selected. Send a general request, or open an experience page if you already know the day you want."}
                </p>
              </div>
            )}
          </div>

          <div className="lg:col-span-8">
            <EnquiryForm
              experienceSlug={selected?.slug}
              experienceTitle={selected?.title}
            />
          </div>
        </div>
      </section>

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
