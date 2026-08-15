import Image from "next/image";
import { inspirationImages, site } from "@/lib/site";

export function InspirationGallery() {
  return (
    <section className="border-t border-border bg-paper">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <div className="max-w-xl">
            <p className="t-label">Inspiration</p>
            <h2 className="t-h2 mt-4">A visual journal</h2>
            <p className="t-body mt-5 text-muted">
              Light, water, ritual, and the everyday beauty of the road —
              a gallery in the spirit of travel, not a feed.
            </p>
          </div>
          <a
            href={site.instagram}
            target="_blank"
            rel="noreferrer"
            className="t-button text-earth hover:text-earth-deep"
          >
            Follow on Instagram
          </a>
        </div>
        <div className="mt-14 grid grid-cols-2 gap-3 md:grid-cols-3">
          {inspirationImages.map((image) => (
            <figure key={image.src} className="relative aspect-square overflow-hidden">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(min-width: 768px) 33vw, 50vw"
                className="object-cover"
              />
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
