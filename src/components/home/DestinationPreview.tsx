import Image from "next/image";
import { ButtonLink } from "@/components/ui/ButtonLink";

export function DestinationPreview() {
  return (
    <section className="bg-ivory">
      <div className="mx-auto grid max-w-7xl items-stretch lg:grid-cols-2">
        <div className="relative min-h-[420px] lg:min-h-[640px]">
          <Image
            src="https://images.unsplash.com/photo-1593693411515-c20227bcafa2?auto=format&fit=crop&w=1800&q=80"
            alt="Lamps and riverfront gathering at dusk in Varanasi"
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />
        </div>
        <div className="flex flex-col justify-center px-5 py-16 sm:px-12 lg:px-16">
          <p className="t-label">Destination</p>
          <h2 className="t-h2 mt-4">Varanasi</h2>
          <p className="t-body mt-6 max-w-md text-muted">
            The oldest living city on the Ganges — ghats at first light,
            temple bells, silk, and a river that has carried prayer for
            millennia. A place to be walked slowly, and hosted well.
          </p>
          <div className="mt-10">
            <ButtonLink href="/destinations">Discover Varanasi</ButtonLink>
          </div>
        </div>
      </div>
    </section>
  );
}
