import Image from "next/image";
import { ButtonLink } from "@/components/ui/ButtonLink";

export function Hero() {
  return (
    <section className="relative isolate min-h-[88vh] overflow-hidden bg-night text-ivory">
      <Image
        src="https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=2400&q=80"
        alt="Sunrise over wooden boats on the Ganges in Varanasi"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(20,18,16,0.78)_0%,rgba(20,18,16,0.28)_48%,rgba(20,18,16,0.18)_100%)]" />

      <div className="relative mx-auto flex min-h-[88vh] max-w-7xl flex-col justify-end px-5 pb-16 pt-28 sm:px-8 sm:pb-24">
        <p className="t-label text-ivory/80">Curated travel & experiences</p>
        <h1 className="t-display mt-5 max-w-4xl">Journeys That Stay With You</h1>
        <p className="t-body mt-6 max-w-xl text-ivory/80">
          A considered studio for travellers who want more than a checklist —
          private hosts, living culture, and days paced to the river rather than
          the clock.
        </p>
        <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
          <ButtonLink href="/experiences" variant="primary" className="bg-ivory text-charcoal border-ivory hover:bg-ivory-deep">
            Explore Experiences
          </ButtonLink>
          <ButtonLink href="/destinations" variant="onDark">
            Discover Varanasi
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
