import type { Metadata } from "next";
import Image from "next/image";
import { PageIntro } from "@/components/ui/PageIntro";
import { inspirationImages } from "@/lib/site";

export const metadata: Metadata = {
  title: "Gallery",
};

export default function GalleryPage() {
  return (
    <>
      <PageIntro
        eyebrow="Gallery"
        title="Light, water, and the road"
        copy="A foundation for a larger visual archive. These images stand in for a living journal of travel — to be expanded as experiences are photographed in the field."
      />
      <section className="bg-ivory">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-3 px-5 py-16 sm:grid-cols-2 sm:px-8 lg:grid-cols-3 lg:py-24">
          {inspirationImages.map((image, index) => (
            <figure
              key={image.src}
              className={`relative overflow-hidden ${
                index % 3 === 0 ? "aspect-[3/4]" : "aspect-square"
              }`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(min-width: 1024px) 33vw, 50vw"
                className="object-cover"
              />
            </figure>
          ))}
        </div>
      </section>
    </>
  );
}
