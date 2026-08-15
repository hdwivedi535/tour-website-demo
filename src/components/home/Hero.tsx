import Image from "next/image";
import { ButtonLink } from "@/components/ui/ButtonLink";

export function Hero() {
  return (
    <section className="relative isolate min-h-[88vh] overflow-hidden bg-night text-ivory">
      <Image
        src="https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=2400&q=80"
        alt="Historic monument seen through a carved stone archway at dawn"
        fill
        priority
        sizes="100vw"
        className="object-cover object-[center_35%] sm:object-center"
      />
      <div
        className="hero-overlay pointer-events-none absolute inset-0"
        aria-hidden="true"
      />

      <div className="relative mx-auto flex min-h-[88vh] max-w-7xl flex-col justify-end px-5 pb-16 pt-28 sm:px-8 sm:pb-24">
        <p className="t-label text-ivory [text-shadow:0_1px_18px_rgb(20_18_16_/_0.55)]">
          Curated travel & experiences
        </p>
        <h1 className="t-display mt-5 max-w-[13ch] text-ivory [text-shadow:0_2px_32px_rgb(20_18_16_/_0.55)]">
          Journeys That Stay With You
        </h1>
        <p className="t-body mt-6 max-w-md text-ivory/90 [text-shadow:0_1px_20px_rgb(20_18_16_/_0.6)]">
          A considered studio for travellers who want more than a checklist —
          private hosts, living culture, and days paced to the river rather than
          the clock.
        </p>
        <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
          <ButtonLink href="/experiences" variant="heroPrimary">
            Explore Experiences
          </ButtonLink>
          <ButtonLink href="/destinations" variant="heroSecondary">
            Discover Varanasi
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
