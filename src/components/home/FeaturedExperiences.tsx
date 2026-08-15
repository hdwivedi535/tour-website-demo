import { ExperienceCard } from "@/components/ui/ExperienceCard";
import { featuredExperiences } from "@/lib/site";

export function FeaturedExperiences() {
  return (
    <section className="bg-ivory">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
        <div className="max-w-2xl">
          <p className="t-label">Featured</p>
          <h2 className="t-h2 mt-4">Experiences, distilled</h2>
          <p className="t-body mt-5 text-muted">
            A first look at the journeys we shape in Varanasi — each one
            hosted locally, paced with care, and designed to be remembered.
          </p>
        </div>
        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {featuredExperiences.map((experience) => (
            <ExperienceCard key={experience.id} experience={experience} />
          ))}
        </div>
      </div>
    </section>
  );
}
