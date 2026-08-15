import type { Metadata } from "next";
import Image from "next/image";
import { ExperienceCard } from "@/components/ui/ExperienceCard";
import { experiences } from "@/lib/experiences";

export const metadata: Metadata = {
  title: "Experiences",
  description:
    "Discover Varanasi through curated experiences on the Ganges, at Dashashwamedh Ghat, around Kashi Vishwanath, at Ramnagar Fort, and in Sarnath.",
};

export default function ExperiencesPage() {
  const hero = experiences[0].heroImage;

  return (
    <>
      <section className="relative isolate min-h-[52vh] overflow-hidden bg-night text-ivory">
        <Image
          src={hero.src}
          alt={hero.alt}
          fill
          priority
          sizes="100vw"
          className="object-cover object-[center_40%]"
        />
        <div className="hero-overlay pointer-events-none absolute inset-0" aria-hidden="true" />
        <div className="relative mx-auto flex min-h-[52vh] max-w-7xl flex-col justify-end px-5 pb-14 pt-24 sm:px-8 sm:pb-20">
          <p className="t-label text-ivory">Varanasi</p>
          <h1 className="t-h1 mt-4 max-w-4xl">Curated Experiences in Varanasi</h1>
          <p className="t-body mt-5 max-w-2xl text-ivory/90">
            Discover the city through its river, its rituals, its heritage, and
            its living culture — five considered journeys, hosted with care.
          </p>
        </div>
      </section>
      <section className="bg-ivory">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 py-16 sm:grid-cols-2 sm:px-8 lg:grid-cols-3 lg:py-24">
          {experiences.map((experience) => (
            <ExperienceCard key={experience.id} experience={experience} />
          ))}
        </div>
      </section>
    </>
  );
}
