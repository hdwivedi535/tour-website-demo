import type { Metadata } from "next";
import Image from "next/image";
import { PageIntro } from "@/components/ui/PageIntro";
import { experiences } from "@/lib/experiences";

export const metadata: Metadata = {
  title: "About",
};

export default function AboutPage() {
  return (
    <>
      <PageIntro
        eyebrow="About"
        title="A quieter way to travel"
        copy="We exist for travellers who want to feel a place rather than pass through it — hosted by people who live there, in days that leave room to notice."
      />
      <section className="bg-ivory">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:px-8 lg:grid-cols-2 lg:items-center lg:py-24">
          <div className="relative aspect-[5/6] overflow-hidden">
            <Image
              src={experiences[0].galleryImages[1].src}
              alt={experiences[0].galleryImages[1].alt}
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
          <div className="max-w-lg">
            <h2 className="t-h2">Crafted locally. Presented globally.</h2>
            <p className="t-body mt-6 text-muted">
              DEMO is a travel and experience studio. We gather private
              journeys, family travel, and cultural encounters with the
              same editorial standard: honest photography, considered
              pacing, and hosts who belong to the city.
            </p>
            <p className="t-body mt-5 text-muted">
              Our work begins in Varanasi — a place of extraordinary
              atmosphere — and is designed to grow, destination by
              destination, without losing intimacy.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
