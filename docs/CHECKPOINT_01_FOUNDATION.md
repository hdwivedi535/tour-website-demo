# Checkpoint 1 — Foundation & Design System

This document records the completed **Checkpoint 1** of the tour/experience website demo.

The application at this checkpoint is a **foundation only**. It establishes branding, the global design system, reusable layout, homepage structure, and basic routing. Later checkpoints can extend this work without rebuilding the visual system.

---

## Objective

Create the foundation for a premium international tour & experience website.

This is a **DEMO** for a tour company.

Reference business (content, experiences, and visual atmosphere only):

- Instagram: https://www.instagram.com/wanderkashi/
- Existing website: https://www.wanderkashi.in/

Those sources were used as business, experience, content, and visual references. They were not used as the site brand.

---

## Branding

The website does **not** use the Wander Kashi logo, brand mark, or a recreation of that mark.

The only logo/brand mark displayed is:

**DEMO**

The mark is treated as an intentional, premium, minimalist wordmark (editorial serif, wide tracking).

Intentionally omitted:

- Wander Kashi logo or mark
- Developer branding
- “Designed & Developed by…”
- “Developed by…”
- “Built with…”
- “Powered by…”
- “Last Updated”
- “Demo Website”

---

## Design direction

The visual language is **premium travel-editorial**:

- Large immersive travel photography
- Elegant typography
- Strong hierarchy and spacious layouts
- Sophisticated neutrals
- Warm, culturally rich atmosphere
- Subtle motion and strong responsive behavior

Avoided:

- Generic SaaS appearance
- Excessive gradients or glassmorphism
- Overly rounded UI
- Clutter, cheap template feel, excessive animation

Photography, typography, and spacing carry most of the identity.

---

## Global design system

Reusable tokens live in `src/app/globals.css` (`:root` and Tailwind `@theme`).

Palette direction:

- Warm off-white / ivory background
- Deep charcoal text
- Muted earthy accent
- Subtle borders
- Dark sections where appropriate

Colors are centralized so they can be changed later. There is no rainbow palette.

Typography pairing (via `next/font`):

- Display / headings: Cormorant Garamond
- Body / UI: Outfit

Documented type styles:

- Display / Hero (`.t-display`)
- H1 / H2 / H3 (`.t-h1`, `.t-h2`, `.t-h3`)
- Body / small (`.t-body`, `.t-small`)
- Navigation / buttons / labels (`.t-nav`, `.t-button`, `.t-label`)

---

## Global header

Reusable responsive header (`src/components/layout/Header.tsx`).

Desktop:

- Left: **DEMO**
- Navigation: Experiences, Destinations, About, Gallery, Contact
- Primary CTA: **Explore Experiences**

There is **no** enquiry form or enquiry CTA in the header.

Mobile:

- DEMO logo
- Hamburger button
- Full-screen navigation drawer

---

## Global footer

Reusable footer (`src/components/layout/Footer.tsx`).

- Logo: **DEMO**
- Short travel-oriented brand statement
- Explore: Experiences, Destinations, About, Gallery, Contact
- Experiences: Sunrise Boat Ride, Ganga Aarti, Kashi Vishwanath, Varanasi Heritage Walk, Sarnath
- Plan Your Journey: Custom Travel, Group Tours, Family Tours
- Connect: Instagram, WhatsApp, Email
- Bottom: **© 2026 Demo. All rights reserved.**
- Links: Privacy Policy, Terms & Conditions

No developer credit, technology credit, last-updated line, or “Demo Website” label.

---

## Homepage foundation

Implemented in `src/app/page.tsx` and `src/components/home/`.

There is **no** enquiry form on the homepage. The five dedicated experience pages are **not** implemented yet.

### Hero

- Cinematic photography
- Headline: **Journeys That Stay With You**
- Supporting copy positions the site as a curated travel and experience platform
- Buttons: **Explore Experiences**, **Discover Varanasi**

### Featured experiences preview

Reusable card structure (`src/components/ui/ExperienceCard.tsx`) with mock/temporary data:

- Image
- Experience name
- Location
- Duration
- Short description
- Explore Experience CTA

Final five experiences are reserved for Checkpoint 2.

### Why travel with us

Four value propositions:

- Local Expertise
- Curated Experiences
- Personalized Journeys
- Thoughtful Travel

### Destination preview

Varanasi-focused visual section, structured so additional destinations can be added later.

### Travel styles

Presentation-only cards:

- Private Journeys
- Family Travel
- Couples & Honeymoon
- Group Travel
- Cultural Experiences

No backend management.

### Instagram / inspiration

Visual gallery structure. Public Instagram media was not retrieved directly; high-quality travel photography is used as a temporary placeholder. The Wander Kashi logo is not used.

### Closing CTA

- **Find an experience worth remembering.**
- CTA: **Explore Experiences**
- No enquiry form

---

## Routing foundation

Polished foundation pages only (no business logic):

| Route | Purpose |
| --- | --- |
| `/` | Homepage foundation |
| `/experiences` | Experiences index using the shared card |
| `/destinations` | Destination atlas starting with Varanasi |
| `/about` | Studio / brand story |
| `/gallery` | Visual journal foundation |
| `/contact` | Connect channels only (no enquiry form) |
| `/privacy` | Placeholder legal page |
| `/terms` | Placeholder legal page |

---

## Explicitly out of scope for Checkpoint 1

Do **not** treat the following as part of this checkpoint:

- Enquiry system or enquiry forms
- Admin panel
- Database
- Authentication
- Complex booking / business functionality
- Individual experience detail pages for the final five experiences

---

## Key files

- `src/app/globals.css` — design tokens and type styles
- `src/app/layout.tsx` — fonts, metadata, header/footer shell
- `src/lib/site.ts` — nav, footer, mock experiences, travel styles
- `src/components/layout/` — Logo, Header, Footer
- `src/components/ui/` — ButtonLink, ExperienceCard, PageIntro
- `src/components/home/` — homepage sections

---

## Local run

```bash
npm install
npm run dev
```
