import { ClosingCta } from "@/components/home/ClosingCta";
import { DestinationPreview } from "@/components/home/DestinationPreview";
import { FeaturedExperiences } from "@/components/home/FeaturedExperiences";
import { Hero } from "@/components/home/Hero";
import { InspirationGallery } from "@/components/home/InspirationGallery";
import { TravelStyles } from "@/components/home/TravelStyles";
import { WhyTravel } from "@/components/home/WhyTravel";

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedExperiences />
      <WhyTravel />
      <DestinationPreview />
      <TravelStyles />
      <InspirationGallery />
      <ClosingCta />
    </>
  );
}
