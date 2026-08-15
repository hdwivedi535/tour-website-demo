# Checkpoint 3 — Experience-Specific Enquiry Flow

**Checkpoint:** 3  
**Date:** 16 August 2026  
**Status:** CHECKPOINT 3 COMPLETE

This checkpoint adds an enquiry form on `/contact`, including experience-specific enquiries via the existing `?experience=[slug]` pattern. Checkpoint 1 design and Checkpoint 2 experience content are unchanged.

---

## Flow

Experience detail **Enquire** CTAs already link to `/contact?experience=[slug]` (`enquiryHref` in `src/lib/experiences.ts`).

- Valid slug → sidebar **Enquiring about** + locked experience (hidden field; not typed by the visitor)
- No slug → general travel enquiry
- Unknown slug → graceful notice; general enquiry still available

Submission uses a Next.js Server Action. There is no database, email, WhatsApp send, CRM, or booking engine. Success copy only states that this form received the enquiry.

---

## Intentionally NOT implemented

- Email / WhatsApp delivery
- Persistence beyond a server log line
- Pricing, availability, payments, authentication, admin

---

**Status: CHECKPOINT 3 COMPLETE**
