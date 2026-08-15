import Image from "next/image";
import { travelStyles } from "@/lib/site";

export function TravelStyles() {
  return (
    <section className="bg-ivory">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
        <div className="max-w-2xl">
          <p className="t-label">Travel styles</p>
          <h2 className="t-h2 mt-4">How you like to move</h2>
          <p className="t-body mt-5 text-muted">
            Presentation of the ways we travel — private, familial, in
            company, or in pursuit of culture. Shaped later around you.
          </p>
        </div>
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {travelStyles.map((style) => (
            <article key={style.title} className="group relative min-h-[320px] overflow-hidden">
              <Image
                src={style.image}
                alt=""
                fill
                sizes="(min-width: 1024px) 20vw, (min-width: 640px) 50vw, 100vw"
                className="object-cover transition-transform duration-700 group-hover:scale-[1.05]"
              />
              <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(20,18,16,0.78),rgba(20,18,16,0.15))]" />
              <div className="absolute inset-x-0 bottom-0 p-6 text-ivory">
                <h3 className="t-h3">{style.title}</h3>
                <p className="t-small mt-2 text-ivory/75">{style.copy}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
