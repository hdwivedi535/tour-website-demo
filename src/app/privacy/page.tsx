import type { Metadata } from "next";
import { PageIntro } from "@/components/ui/PageIntro";

export const metadata: Metadata = {
  title: "Privacy Policy",
};

export default function PrivacyPage() {
  return (
    <PageIntro
      eyebrow="Legal"
      title="Privacy Policy"
      copy="This page is a placeholder for a full privacy policy. When guest data, enquiries, and analytics are introduced, this document will describe how information is collected, stored, and used — with the same care we bring to travel."
    />
  );
}
