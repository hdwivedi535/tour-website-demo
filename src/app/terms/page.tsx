import type { Metadata } from "next";
import { PageIntro } from "@/components/ui/PageIntro";

export const metadata: Metadata = {
  title: "Terms & Conditions",
};

export default function TermsPage() {
  return (
    <PageIntro
      eyebrow="Legal"
      title="Terms & Conditions"
      copy="This page is a placeholder for booking terms, guest responsibilities, and the conditions of travel. It will be completed when experiences and reservations become bookable."
    />
  );
}
