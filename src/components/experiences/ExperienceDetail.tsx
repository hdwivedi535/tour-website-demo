import Image from "next/image";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { enquiryHref, type Experience } from "@/lib/experiences";

export function ExperienceDetail({ experience }: { experience: Experience }) {
  return (
    <article>
      <Hero experience={experience} />
      <Overview experience={experience} />
      <Highlights experience={experience} />
      <Flow experience={experience} />
      <Inclusions experience={experience} />
      <GoodToKnow experience={experience} />
      <BestFor experience={experience} />
      <Gallery experience={experience} />
      <ClosingCta experience={experience} />
    </article>
  );
}

function Hero({ experience }: { experience: Experience }) {
  return (
    <section className="relative isolate min-h-[78vh] overflow-hidden bg-night text-ivory">
      <Image
        src={experience.heroImage.src}
        alt={experience.heroImage.alt}
        fill
        priority
        sizes="100vw"
        className="object-cover object-[center_35%] sm:object-center"
      />
      <div className="hero-overlay pointer-events-none absolute inset-0" aria-hidden="true" />
      <div className="relative mx-auto flex min-h-[78vh] max-w-7xl flex-col justify-end px-5 pb-14 pt-24 sm:px-8 sm:pb-20">
        <p className="t-label text-ivory">{experience.location}</p>
        <h1 className="t-h1 mt-4 max-w-4xl">{experience.title}</h1>
        <p className="t-body mt-5 max-w-2xl text-ivory/90">
          {experience.shortDescription}
        </p>
        <p className="t-small mt-4 text-ivory/75">{experience.duration}</p>
        <div className="mt-8">
          <ButtonLink href={enquiryHref(experience.slug)} variant="heroPrimary">
            Enquire About This Experience
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}

function Overview({ experience }: { experience: Experience }) {
  return (
    <section className="bg-ivory">
      <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-24">
        <p className="t-label">Overview</p>
        <h2 className="t-h2 mt-4">The shape of the day</h2>
        <div className="mt-6 space-y-5">
          {experience.overview.split("\n\n").map((paragraph) => (
            <p key={paragraph.slice(0, 32)} className="t-body text-muted">
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}

function Highlights({ experience }: { experience: Experience }) {
  return (
    <section className="border-y border-border bg-paper">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-24">
        <p className="t-label">Highlights</p>
        <h2 className="t-h2 mt-4">What stays with you</h2>
        <div className="mt-12 grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-3">
          {experience.highlights.map((item) => (
            <article key={item.title} className="bg-paper px-7 py-8">
              <h3 className="t-h3">{item.title}</h3>
              <p className="t-body mt-3 text-[0.98rem] text-muted">{item.copy}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Flow({ experience }: { experience: Experience }) {
  return (
    <section className="bg-ivory">
      <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-24">
        <p className="t-label">Experience flow</p>
        <h2 className="t-h2 mt-4">How the hours unfold</h2>
        <ol className="mt-12 space-y-0">
          {experience.experienceFlow.map((step, index) => (
            <li
              key={step.title}
              className="relative border-l border-border pl-8 pb-10 last:pb-0"
            >
              <span className="absolute -left-[5px] top-1.5 h-2.5 w-2.5 rounded-full bg-earth" />
              <p className="t-small">{String(index + 1).padStart(2, "0")}</p>
              <h3 className="t-h3 mt-2">{step.title}</h3>
              <p className="t-body mt-3 text-muted">{step.copy}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function Inclusions({ experience }: { experience: Experience }) {
  return (
    <section className="border-y border-border bg-paper">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:px-8 lg:grid-cols-2 lg:py-24">
        <div>
          <p className="t-label">What’s included</p>
          <h2 className="t-h2 mt-4">Held for you</h2>
          <ul className="mt-8 space-y-4">
            {experience.included.map((item) => (
              <li key={item} className="t-body border-b border-border pb-4 text-muted">
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="t-label">What’s not included</p>
          <h2 className="t-h2 mt-4">Left open</h2>
          <ul className="mt-8 space-y-4">
            {experience.excluded.map((item) => (
              <li key={item} className="t-body border-b border-border pb-4 text-muted">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function GoodToKnow({ experience }: { experience: Experience }) {
  return (
    <section className="bg-ivory">
      <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-24">
        <p className="t-label">Good to know</p>
        <h2 className="t-h2 mt-4">Arrive prepared</h2>
        <ul className="mt-10 space-y-5">
          {experience.goodToKnow.map((item) => (
            <li key={item} className="t-body text-muted">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function BestFor({ experience }: { experience: Experience }) {
  return (
    <section className="border-y border-border bg-paper">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20">
        <p className="t-label">Best for</p>
        <h2 className="t-h2 mt-4">Who this suits</h2>
        <ul className="mt-10 flex flex-wrap gap-3">
          {experience.bestFor.map((item) => (
            <li
              key={item}
              className="t-nav border border-border px-4 py-2 text-charcoal"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Gallery({ experience }: { experience: Experience }) {
  return (
    <section className="bg-ivory">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-24">
        <p className="t-label">Gallery</p>
        <h2 className="t-h2 mt-4">The place, as it looks</h2>
        <div className="mt-12 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {[experience.heroImage, ...experience.galleryImages].map((image, index) => (
            <figure
              key={image.src}
              className={`relative overflow-hidden ${
                index === 0 ? "aspect-[4/5] sm:col-span-2 sm:aspect-[16/9] lg:col-span-2" : "aspect-[4/5]"
              }`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function ClosingCta({ experience }: { experience: Experience }) {
  return (
    <section id="enquire" className="bg-night text-ivory">
      <div className="mx-auto max-w-3xl px-5 py-20 text-center sm:px-8 sm:py-28">
        <p className="t-label text-earth">Begin</p>
        <h2 className="t-h1 mt-5">Interested in this experience?</h2>
        <p className="t-body mx-auto mt-6 max-w-lg text-ivory/70">
          Tell us how you like to travel. We will help shape {experience.shortTitle.toLowerCase()} around your dates, pace, and companions.
        </p>
        <div className="mt-10">
          <ButtonLink
            href={enquiryHref(experience.slug)}
            className="border-ivory bg-ivory text-charcoal hover:bg-ivory-deep"
          >
            Enquire About This Experience
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
