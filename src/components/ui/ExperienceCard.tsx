import Image from "next/image";
import { ButtonLink } from "@/components/ui/ButtonLink";
import type { Experience } from "@/lib/site";

type ExperienceCardProps = {
  experience: Experience;
};

export function ExperienceCard({ experience }: ExperienceCardProps) {
  return (
    <article className="group flex h-full flex-col bg-paper">
      <div className="relative aspect-[4/5] overflow-hidden">
        <Image
          src={experience.image}
          alt={experience.imageAlt}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
        />
      </div>
      <div className="flex flex-1 flex-col border border-t-0 border-border px-6 py-7">
        <p className="t-label">{experience.location}</p>
        <h3 className="t-h3 mt-3 text-charcoal">{experience.name}</h3>
        <p className="t-small mt-2">{experience.duration}</p>
        <p className="t-body mt-4 flex-1 text-[0.98rem] text-muted">
          {experience.description}
        </p>
        <div className="mt-7">
          <ButtonLink href="/experiences" variant="secondary">
            Explore Experience
          </ButtonLink>
        </div>
      </div>
    </article>
  );
}
