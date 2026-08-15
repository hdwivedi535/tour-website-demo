import { experiences } from "@/lib/experiences";

export const site = {
  name: "DEMO",
  tagline: "Journeys shaped by place, pace, and memory.",
  statement:
    "A curated travel studio for those who wish to move through India with intention — unhurried, locally guided, and quietly luxurious.",
  year: 2026,
  instagram: "https://www.instagram.com/wanderkashi/",
  whatsapp: "https://wa.me/919648048815",
  email: "mailto:hello@demo.travel",
} as const;

export const navLinks = [
  { href: "/experiences", label: "Experiences" },
  { href: "/destinations", label: "Destinations" },
  { href: "/about", label: "About" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
] as const;

export const footerExplore = navLinks;

export const footerExperiences = experiences.map((experience) => ({
  href: `/experiences/${experience.slug}`,
  label: experience.shortTitle,
}));

export const footerPlan = [
  { href: "/experiences", label: "Custom Travel" },
  { href: "/experiences", label: "Group Tours" },
  { href: "/experiences", label: "Family Tours" },
] as const;

export const legalLinks = [
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms & Conditions" },
] as const;

export const travelStyles = [
  {
    title: "Private Journeys",
    copy: "Quiet pacing, private hosts, and itineraries shaped around how you like to travel.",
    image:
      "https://images.unsplash.com/photo-1504150558240-0b4fd8946624?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Family Travel",
    copy: "Thoughtful days that hold space for wonder, rest, and the rhythms of travelling together.",
    image:
      "https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Couples & Honeymoon",
    copy: "Intimate evenings, river light, and unhurried mornings designed for two.",
    image:
      "https://images.unsplash.com/photo-1518199266791-5375a83190b7?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Group Travel",
    copy: "Shared discovery without the noise — small groups, considered logistics, local depth.",
    image:
      "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Cultural Experiences",
    copy: "Ritual, craft, music, and food — encounters that belong to the place, not a stage.",
    image:
      "https://images.unsplash.com/photo-1532375810709-75b1da00537c?auto=format&fit=crop&w=1200&q=80",
  },
] as const;

export const inspirationImages = [
  {
    src: experiences[0].galleryImages[0].src,
    alt: experiences[0].galleryImages[0].alt,
  },
  {
    src: experiences[1].galleryImages[1].src,
    alt: experiences[1].galleryImages[1].alt,
  },
  {
    src: experiences[2].galleryImages[3].src,
    alt: experiences[2].galleryImages[3].alt,
  },
  {
    src: experiences[3].heroImage.src,
    alt: experiences[3].heroImage.alt,
  },
  {
    src: experiences[4].heroImage.src,
    alt: experiences[4].heroImage.alt,
  },
  {
    src: experiences[0].galleryImages[3].src,
    alt: experiences[0].galleryImages[3].alt,
  },
] as const;

export const values = [
  {
    title: "Local Expertise",
    copy: "Hosts who live the city — not a script, but a lifetime of streets, seasons, and shrines.",
  },
  {
    title: "Curated Experiences",
    copy: "Fewer, finer days. We choose what is worth your time, and leave the rest behind.",
  },
  {
    title: "Personalized Journeys",
    copy: "Pace, privacy, and preference shape the itinerary — never a fixed catalogue.",
  },
  {
    title: "Thoughtful Travel",
    copy: "Respect for place, people, and ritual. Beauty without spectacle for its own sake.",
  },
] as const;
