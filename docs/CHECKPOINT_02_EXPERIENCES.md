# Checkpoint 2 — Experiences & Experience Detail Pages

**Checkpoint:** 2  
**Date:** 15 August 2026  
**Status:** CHECKPOINT 2 COMPLETE

This checkpoint replaces Checkpoint 1 mock experience content with five polished Varanasi experiences and full editorial detail pages. The Checkpoint 1 design system, header, footer, typography, colour tokens, and homepage structure are preserved and extended.

---

## Five experiences implemented

| # | Title | Slug | Location | Duration |
| --- | --- | --- | --- | --- |
| 1 | Sunrise Boat Ride on the Ganges | `sunrise-boat-ride` | River Ganga, Varanasi | 1–2 hours |
| 2 | Ganga Aarti from the River | `ganga-aarti-from-the-river` | Dashashwamedh Ghat, Varanasi | Evening experience |
| 3 | Kashi Vishwanath & Sacred Varanasi | `kashi-vishwanath` | Varanasi | Half day |
| 4 | Ramnagar Fort & Varanasi Heritage | `ramnagar-fort-varanasi-heritage` | Ramnagar & Varanasi | Half day |
| 5 | Sarnath Spiritual & Buddhist Heritage | `sarnath-spiritual-buddhist-heritage` | Sarnath, Uttar Pradesh | Half day |

---

## Content structure

Centralised in `src/lib/experiences.ts` for each experience:

- Identity: `id`, `slug`, `title`, `shortTitle`, `location`, `duration`
- Copy: `shortDescription`, `overview`, `highlights`, `experienceFlow`, `included`, `excluded`, `goodToKnow`, `bestFor`
- Media: `heroImage`, `galleryImages` (each with `src`, `alt`, `sourceName`, `sourceUrl`, `note`)
- SEO: `seoTitle`, `seoDescription`

No prices, VIP darshan claims, fake reviews, or invented operational guarantees.

---

## Image sources / references

**Primary visual reference inspected:** [instagram.com/wanderkashi](https://www.instagram.com/wanderkashi/)  
**Limitation:** The public profile is login-walled for automated retrieval. Instagram media was **not** downloaded. No fabricated Instagram URLs were used.

**Fallback (verified, place-accurate):** Wikimedia Commons files served from `upload.wikimedia.org`. Source page URLs are stored on each image object (`sourceUrl`) so they can be replaced later. There is **no visible attribution/credits UI**.

### Sunrise Boat Ride

| Role | Commons file |
| --- | --- |
| Hero | `Boats_at_sunrise_Ganges_River_Varanasi_Uttar_Pradesh_Schwiki.jpg` |
| Gallery | `Good_morning_Varanasi.jpg`, `Varanasi_ghats_in_the_morning.jpg`, `India_-_Varanasi_boats_-_1292.jpg`, `Early_morning_view_of_Varanasi_city_from_opposite_bank.jpg` |

### Ganga Aarti from the River

| Role | Commons file |
| --- | --- |
| Hero | `People_observing_Ganga_Aarti_from_the_boats,_Dasaswamedh_Ghat_Varansai.jpg` |
| Gallery | `Ganga_Aarti_at_Dashashwamedh_Ghat,_Varanasi.jpg`, `Diya_Pujan_at_Ganga_Aarti_at_Dashashwamedh_Ghat,_Varanasi.jpg`, `Aarti,_Ganga_Aarti_at_Dashashwamedh_Ghat,_Varanasi.jpg`, `Standing,_Ganga_Aarti_at_Dashashwamedh_Ghat,_Varanasi.jpg` |

### Kashi Vishwanath

| Role | Commons file |
| --- | --- |
| Hero | `Shri_Kashi_Vishwanath_Temple.jpg` |
| Gallery | `Shri_Kashi_Vishwanath_Temple_2.jpg`, `Ganga_Dwar,_Gateway_of_Corridor_of_Kashi_Vishwanath_Temple,_Varanasi_2.webp`, `Vishwanath_Gali,_in_Varanasi.jpg`, `Shri_Kashi_Vishwanath_Temple_7.jpg` |

### Ramnagar Fort

| Role | Commons file |
| --- | --- |
| Hero | `Ramnagar_Fort,_Ramnagar,_Varanasi,_Uttar_Pradesh_05.jpg` |
| Gallery | `Main_Entrance_of_Ramnagar_Fort,_Varanasi.jpg`, `Inside_Ramnagar_fort,_Varanasi.jpg`, `The_Ganga_River_and_Ramnagar_bridge_from_Ramnagar_fort,_Vyasa_kasi,_Varanasi,_U.P.jpg`, `Ramnagar_Fort_in_Varanasi.jpg` |

### Sarnath

| Role | Commons file |
| --- | --- |
| Hero | `Dhamek_Stupa,_2025.jpg` |
| Gallery | `The_Dhamek_Stupa_,_500_CE_,Sarnath,_Varanasi_Uttar_Pradesh.jpg`, `Site_of_Dhamek_stupa_and_Monastery_Sarnath,_Varanasi_Uttar_Pradesh.jpg`, `Carvings_on_the_Dhamek_Stupa,_South_Western_side.jpg`, `Group_of_Votive_Stupas,_Dhamek_Stupa_Complex,_Varanasi.jpg` |

**Not used:** Taj Mahal, generic buses, India Gate, Kerala backwaters, or unrelated Unsplash placeholders for the five experiences.

---

## Routes

| Route | Purpose |
| --- | --- |
| `/experiences` | Discovery listing with hero and five cards |
| `/experiences/sunrise-boat-ride` | Detail |
| `/experiences/ganga-aarti-from-the-river` | Detail |
| `/experiences/kashi-vishwanath` | Detail |
| `/experiences/ramnagar-fort-varanasi-heritage` | Detail |
| `/experiences/sarnath-spiritual-buddhist-heritage` | Detail |

Enquire CTAs are placeholders: `/contact?experience=[slug]`. No enquiry form is implemented.

---

## Components created / modified

**Created**

- `src/lib/experiences.ts` — experience data model
- `src/components/experiences/ExperienceDetail.tsx` — editorial detail page
- `src/app/experiences/[slug]/page.tsx` — dynamic SSG route + metadata

**Modified**

- `src/components/ui/ExperienceCard.tsx` — links to detail slugs; uses central data
- `src/app/experiences/page.tsx` — listing hero + grid
- `src/components/home/FeaturedExperiences.tsx` — real five experiences
- `src/components/home/Hero.tsx` — Varanasi sunrise Wikimedia image (replacing Taj Mahal)
- `src/components/home/DestinationPreview.tsx` — Aarti/river Wikimedia image
- `src/app/destinations/page.tsx` — Varanasi ghat image
- `src/lib/site.ts` — footer experience links; inspiration gallery uses experience media
- `next.config.ts` — `upload.wikimedia.org` remote images

---

## Data architecture

All experience content lives in one module. Listing, homepage cards, footer, and detail pages read from `experiences[]`. Helpers: `getExperienceBySlug`, `getExperienceSlugs`, `enquiryHref`. Checkpoint 3 can attach enquiry state to `slug` without rewriting copy.

---

## SEO

Each detail page sets an absolute title (`… | DEMO`) and a unique `seoDescription`. Listing page has its own title/description. Metadata is not duplicated across the five pages.

---

## Technical decisions

- Wikimedia `src` URLs are the live image source; Commons file pages are stored as `sourceUrl` for later replacement (including Instagram if access is added).
- No on-page credits, licence widgets, or attribution system.
- Inclusions use conservative wording (host, boat, travel) without inventing VIP access or tickets.
- `generateStaticParams` prerenders all five detail routes.

---

## Known issues

- Instagram media remains inaccessible without login; Commons is the current visual source.
- Travel-style cards on the homepage still use generic Unsplash lifestyle photography (not the five experience products).
- Enquire buttons route to Contact with a query string; the contact page does not yet read it.

---

## Intentionally NOT implemented

- Enquiry form / API
- Database, admin, authentication
- Booking and payments
- Pricing
- Customer accounts / CRM
- Multilingual system

---

## Next checkpoint

Checkpoint 3 is expected to add experience-specific enquiries, using the existing `slug` and `enquiryHref` pattern.

---

## DO NOT REBUILD

Checkpoint 1 foundation (design tokens, header, footer, typography, homepage structure) and Checkpoint 2 experience architecture/content are complete. Later work must **extend** this system — do not replace the design system, do not re-mock the five experiences, and do not restage the detail page from scratch.

---

**Status: CHECKPOINT 2 COMPLETE**
