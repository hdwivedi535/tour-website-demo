import type { Metadata } from "next";
import { ExperienceCard } from "@/components/ui/ExperienceCard";
import { PageIntro } from "@/components/ui/PageIntro";
import { featuredExperiences } from "@/lib/site";

export const metadata: Metadata = {
  title: "Experiences",
};

export default function ExperiencesPage() {
  return (
    <>
      <PageIntro
        eyebrow="Experiences"
        title="Travel, held with care"
        copy="A living collection of journeys through Varanasi and nearby sacred landscapes. Individual experience pages will follow — for now, a considered preview."
      />
      <section className="bg-ivory">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 py-16 sm:grid-cols-2 sm:px-8 lg:grid-cols-3 lg:py-24">
          {featuredExperiences.map((experience) => (
            <ExperienceCard key={experience.id} experience={experience} />
          ))}
        </div>
      </section>
    </>
  );
}
