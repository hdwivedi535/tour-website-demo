import type { Metadata } from "next";
import Image from "next/image";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { PageIntro } from "@/components/ui/PageIntro";

export const metadata: Metadata = {
  title: "Destinations",
};

export default function DestinationsPage() {
  return (
    <>
      <PageIntro
        eyebrow="Destinations"
        title="Places we know well"
        copy="Varanasi is our first and deepest landscape. Further destinations will join this atlas — each presented with the same unhurried attention."
      />
      <section className="bg-ivory">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 py-16 sm:px-8 lg:grid-cols-2 lg:py-24">
          <div className="relative aspect-[4/5] overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1600&q=80"
              alt="Boats on the Ganges at first light"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
          <div>
            <p className="t-label">India</p>
            <h2 className="t-h2 mt-4">Varanasi</h2>
            <p className="t-body mt-6 text-muted">
              A city of river and ritual, silk and stone. Sunrise on the
              ghats, evening aarti, temple courtyards, and walks through
              an old city that rewards patience. Other destinations will
              appear here in the same editorial form.
            </p>
            <div className="mt-10">
              <ButtonLink href="/experiences">Explore Experiences</ButtonLink>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
