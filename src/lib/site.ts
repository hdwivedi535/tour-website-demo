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

export const footerExperiences = [
  { href: "/experiences", label: "Sunrise Boat Ride" },
  { href: "/experiences", label: "Ganga Aarti" },
  { href: "/experiences", label: "Kashi Vishwanath" },
  { href: "/experiences", label: "Varanasi Heritage Walk" },
  { href: "/experiences", label: "Sarnath" },
] as const;

export const footerPlan = [
  { href: "/experiences", label: "Custom Travel" },
  { href: "/experiences", label: "Group Tours" },
  { href: "/experiences", label: "Family Tours" },
] as const;

export const legalLinks = [
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms & Conditions" },
] as const;

export type Experience = {
  id: string;
  name: string;
  location: string;
  duration: string;
  description: string;
  image: string;
  imageAlt: string;
};

export const featuredExperiences: Experience[] = [
  {
    id: "sunrise-boat-ride",
    name: "Sunrise Boat Ride",
    location: "River Ganga, Varanasi",
    duration: "1–2 hours",
    description:
      "Drift along the ghats as the city wakes — lamps, temple bells, and first light on the water.",
    image:
      "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1600&q=80",
    imageAlt: "Wooden boats on the Ganges at sunrise in Varanasi",
  },
  {
    id: "ganga-aarti",
    name: "Ganga Aarti",
    location: "Dashashwamedh Ghat",
    duration: "Evening",
    description:
      "Witness the evening prayer ceremony — fire, chant, and a riverbank gathering that has endured for generations.",
    image:
      "https://images.unsplash.com/photo-1561361513-2d000a50f0dc?auto=format&fit=crop&w=1600&q=80",
    imageAlt: "Evening ceremony along the ghats of Varanasi",
  },
  {
    id: "kashi-vishwanath",
    name: "Kashi Vishwanath",
    location: "Varanasi",
    duration: "Half day",
    description:
      "A considered visit to one of India’s most sacred temples, guided with care for ritual, timing, and atmosphere.",
    image:
      "https://images.unsplash.com/photo-1582510003544-4d00b7f74216?auto=format&fit=crop&w=1600&q=80",
    imageAlt: "Temple architecture in golden light",
  },
  {
    id: "heritage-walk",
    name: "Varanasi Heritage Walk",
    location: "Old City",
    duration: "3 hours",
    description:
      "Move through lanes, courtyards, and hidden shrines with a local host who knows the city’s quieter stories.",
    image:
      "https://images.unsplash.com/photo-1477587458883-47145ed94245?auto=format&fit=crop&w=1600&q=80",
    imageAlt: "Narrow lanes and architecture in old Varanasi",
  },
  {
    id: "sarnath",
    name: "Sarnath",
    location: "Sarnath",
    duration: "Full day",
    description:
      "Walk the groves and stupas where the Buddha’s first sermon was given — still, green, and deeply considered.",
    image:
      "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=1600&q=80",
    imageAlt: "Buddhist stupa and gardens at Sarnath",
  },
];

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
    src: "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=900&q=80",
    alt: "Boats along the Ganges at dawn",
  },
  {
    src: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=900&q=80",
    alt: "Historic architecture in warm light",
  },
  {
    src: "https://images.unsplash.com/photo-1477587458883-47145ed94245?auto=format&fit=crop&w=900&q=80",
    alt: "Street life and temple steps",
  },
  {
    src: "https://images.unsplash.com/photo-1593693411515-c20227bcafa2?auto=format&fit=crop&w=900&q=80",
    alt: "Riverfront ceremony with lamps",
  },
  {
    src: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=900&q=80",
    alt: "Backwaters and still water at dusk",
  },
  {
    src: "https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&w=900&q=80",
    alt: "India Gate in New Delhi",
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
