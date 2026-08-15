import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ExperienceDetail } from "@/components/experiences/ExperienceDetail";
import {
  getExperienceBySlug,
  getExperienceSlugs,
} from "@/lib/experiences";

type ExperiencePageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getExperienceSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: ExperiencePageProps): Promise<Metadata> {
  const { slug } = await params;
  const experience = getExperienceBySlug(slug);
  if (!experience) {
    return { title: "Experience" };
  }
  return {
    title: { absolute: experience.seoTitle },
    description: experience.seoDescription,
  };
}

export default async function ExperiencePage({ params }: ExperiencePageProps) {
  const { slug } = await params;
  const experience = getExperienceBySlug(slug);
  if (!experience) notFound();
  return <ExperienceDetail experience={experience} />;
}
