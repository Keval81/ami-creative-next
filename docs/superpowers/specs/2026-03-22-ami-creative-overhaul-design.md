# AMI Creative — Landing Page Overhaul Design Spec

**Date:** 2026-03-22
**Project:** `ami-creative-next`
**Client:** AMI Creative — Nia Bheda
**Status:** Approved for implementation

---

## Overview

A comprehensive overhaul of the existing `ami-creative-next` Next.js landing page. The site serves as Nia Bheda's primary client acquisition tool — a personal brand portfolio for her digital marketing, content creation, and creative strategy freelance work.

The overhaul covers:
- Three new sections (Process, Pricing, Blog)
- A rebuilt Portfolio section with working filters and bento grid layout
- A rebuilt Highlights section (replacing the fragile absolute-positioned layout)
- Global visual polish: consistent spacing, typography hierarchy, and animation cohesion
- Real asset integration from `~/Desktop/AMI Creative/site/assets/`
- Contact form wired up via Formspree
- Footer social links and copyright fixed

---

## Tech Stack (unchanged)

- **Framework:** Next.js (App Router)
- **Language:** TypeScript (strict)
- **Styling:** Tailwind CSS
- **UI primitives:** shadcn/ui
- **Package manager:** npm

---

## Tooling During Implementation

- **ui-ux-pro skill** — invoked at implementation start to lock design system decisions
- **21st Magic MCP** — component inspiration for carousel, bento grid, horizontal timeline
- **Stitch MCP** — rapid screen generation for the 3 new sections before hand-coding
- **shadcn/ui** — Dialog (Highlights modal), any new interactive primitives

---

## Brand Identity (unchanged)

| Token | Value |
|-------|-------|
| Primary colour | `#e75a7c` (pink) |
| Dark colour | `#2e2d4d` (navy) |
| Background | `#f5ece6` (cream) |
| Accent | `#e4f0fa` (light blue) |
| Heading font | Poppins (font-heading) |
| Body font | DM Sans (font-body) |

---

## Page Structure

```
Navbar
Hero            Polish existing
About           Polish existing
Services        Polish existing
Process         NEW
Portfolio       OVERHAUL
Pricing         NEW
Highlights      REBUILD
Testimonials    Polish existing
Blog            NEW
Contact         Wire up form submission
Footer          Fix social links + copyright
```

**Section background rhythm (alternating for contrast):**
```
Hero        cream
About       cream
Services    cream
Process     navy   ← dark contrast break
Portfolio   cream
Pricing     navy   ← dark contrast break
Highlights  cream
Testimonials cream
Blog        cream
Contact     cream
Footer      navy
```

---

## Global Polish

Applied to all sections as part of the overhaul. **New sections (Process, Pricing, Blog, rebuilt Portfolio, rebuilt Highlights) must be built using these tokens from the start — no separate polish pass needed for them. Step 10 in the implementation order only covers the pre-existing sections.**

### Tailwind custom tokens
`bg-light-blue`, `text-navy`, `text-primary`, `bg-navy`, `bg-cream` are custom colour tokens already configured in the project's Tailwind theme (`globals.css` / `@theme inline`). Do not add new custom tokens — use the existing set.

### Spacing
- Unified vertical padding: `py-20 md:py-32` for all sections
- Inner content max-width: `max-w-7xl mx-auto` (consistent, currently varies)
- Horizontal padding: `px-6 lg:px-12` (consistent, currently varies)

### Typography hierarchy
- Section labels: `text-xs tracking-widest uppercase text-primary font-medium`
- Section headings: `font-heading font-black text-5xl md:text-7xl text-navy leading-[1.05] tracking-tight`
- Body copy: `text-lg md:text-xl text-navy/70 font-medium leading-relaxed`
- Sub-labels: `text-sm font-medium text-navy/50 uppercase tracking-widest`

### Animations
- Keep: TextScramble + MagneticButton (Hero), FlickeringGrid (slightly reduced opacity: 0.05)
- Add: subtle `fade-up` on scroll for all sections (Intersection Observer, 400ms ease-out, 24px translate)
- Process steps animate in sequentially (staggered 150ms per step)
- No other new motion — remove any janky transforms that aren't intentional

---

## Sections

### Navbar (polish)
No structural changes. Ensure sticky behaviour is smooth and mobile nav closes on route change.

---

### Hero (polish)
No structural changes. Tighten subtitle copy for clarity. Slightly reduce FlickeringGrid opacity.

---

### About (polish)
No structural changes. Apply global spacing. Verify `nia-portrait.png` is sharp (it's already in `/public`).

---

### Services (polish)
No structural changes. Apply global spacing. Service images (`service-*.png`) already in `/public` — verify all 6 load correctly.

---

### Process (NEW)

**Purpose:** Show Nia's working methodology. Builds trust with prospective clients.

**Layout:** Full-width dark navy section (`bg-navy`). Horizontal timeline with 4 numbered steps connected by a pink dashed line.

**Steps:**
1. **Discover** — Deep dive into your brand, audience, and goals
2. **Strategise** — Build the creative roadmap and content plan
3. **Execute** — Design, write, produce, and iterate with precision
4. **Deliver** — Launch, measure impact, and refine

**Design details:**
- Pink filled circle for each step number (32×32px)
- Dashed pink connector line between circles (`border-dashed border-primary`)
- Step title in white, description in `white/60`
- Entire section: `bg-navy py-20 md:py-32`
- Steps animate in left-to-right sequentially on scroll (stagger 150ms)

**Component:** New `src/components/Process.tsx`

---

### Portfolio (OVERHAUL)

**Purpose:** Centrepiece for client acquisition — must look great even with partial real content.

**Layout:** Bento grid — 3-column CSS grid. Featured card occupies columns 1–2, rows 1–2. Remaining 4 cells: col 3 row 1, col 3 row 2, col 1 row 3, col 2 row 3 (col 3 row 3 = "Coming soon" placeholder or a 5th project if available).

```
┌─────────────┬─────────────┬──────────┐
│             │             │  small   │
│  FEATURED   │   small 2   │  card 3  │
│  (2col×2row)│             ├──────────┤
│             ├─────────────┤  small   │
│             │   small 4   │  card 5* │
├─────────────┴─────────────┴──────────┤  ← row 3 only if >4 items
│  (auto-fills with more cards or hidden)
```

*5th slot shows "Coming soon" if fewer than 5 real projects exist.

**Filter system:**
- Categories: `All | Branding | Content | Web | Social | Photography`
- Implemented with `useState` in a Client Component
- Filter pill clicks update active category, cards filter with a smooth opacity/scale transition (`transition-all duration-300`)
- Active pill: `bg-primary text-white`, inactive: `bg-light-blue text-navy`

**Card design:**
- Image fills full card with `object-cover`
- Overlay on hover: semi-transparent navy (`bg-navy/80`) slides up from bottom
- Overlay shows: category tag (pink), project title (white, bold), arrow icon
- "Coming soon" state for empty slots: cream background, dashed border, subtle "More work coming soon" label — never shows fake placeholder images

**Real content to use (copy from Desktop to `/public/images/portfolio/`):**
- `lsbu-44.jpg`, `lsbu-45.jpg`, `lsbu-46.jpg`, `lsbu-48.jpg`, `lsbu-63.jpg` — Photography work (category: Photography)
- `photographer-at-lsbu.jpg` — Photography (category: Photography)
- Additional real work added by Nia over time

**Component:** Refactor `src/components/Portfolio.tsx` — convert to Client Component

---

### Pricing (NEW)

**Purpose:** Guide prospective clients toward booking a discovery call. No fixed prices — bespoke approach.

**Layout:** Dark navy section. Left half: bold headline + supporting copy. Right half: two path cards + CTA button.

**Left side:**
- Label: "Work with me"
- Headline: "Not sure what you need yet?" (large, white, bold)
- Body: "Every project is different. Let's have a 30-minute discovery call — no commitment, just clarity."

**Right side — two path cards:**
- **Project card** (semi-transparent navy): label "One-off Project", description "Fixed scope & price, delivered with care"
- **Retainer card** (pink background): label "Ongoing Partnership", description "Monthly retainer for consistent creative support"

**CTA button:**
- "Book a Free Discovery Call" — full width below the two cards
- Links to `#contact`
- Uses existing `MagneticButton` component, `variant="pink"`

**Component:** New `src/components/Pricing.tsx`

---

### Highlights (REBUILD)

**Purpose:** Showcase career milestones and personality. Replaces the fragile absolute-positioned scatter layout.

**Layout:** Horizontal scroll carousel with CSS scroll snap (`scroll-snap-type: x mandatory`). Cards snap into place on scroll/swipe.

**5 cards (real images from Desktop, copy to `/public/images/highlights/`):**

| # | Title | Image filename in `/public/images/highlights/` | Blurb (card) | Full story (Dialog) |
|---|-------|-----------------------------------------------|--------------|---------------------|
| 01 | London Met Talk | `london-met-talk.jpg` | Inspiring the next gen | Nia was invited to speak at London Metropolitan University, sharing her journey in creative marketing and inspiring the next generation of designers and brand strategists. |
| 02 | Filming Day | `filming-day.jpg` | Action! Behind the lens | A full day on set directing and producing brand video content — from concept to camera, bringing stories to life through motion and narrative. |
| 03 | Brand Launch | `lovebrain-event.jpg` | Pop, clink, cheer | The excitement of a live brand launch — months of strategy, design, and preparation culminating in one memorable moment. A major milestone for the client's identity. |
| 04 | NISAU Conference | `nisau-conference.jpg` | Connecting the community | Representing AMI Creative at the NISAU Conference — meeting founders, creatives, and changemakers all building something meaningful. |
| 05 | Snapchat HQ | `snap-in-colour-snapchat-hq.jpg` | In colour at Snap HQ | An unforgettable visit to Snapchat's London headquarters — exploring the intersection of social, tech, and creative culture. |

**Note on asset filenames:** The source file `snap-in-colour-snapchat-hq.jpg` is copied to `/public/images/highlights/snap-in-colour-snapchat-hq.jpg` (keep original name — do not rename). Reference in code as `/images/highlights/snap-in-colour-snapchat-hq.jpg`.

**Card design:**
- Fixed width: `w-72 md:w-80`, full section height
- Top 60%: image (`object-cover`)
- Bottom 40%: step number (pink, `text-primary font-black text-sm`), title (navy bold), blurb (navy/60, `text-sm`)
- Cards alternate `bg-white` and `bg-light-blue` for rhythm
- Click/tap opens a shadcn/ui `Dialog` with full story text + larger image

**Navigation:**
- Left/right arrow buttons overlay the carousel, positioned at vertical centre, flanking the scroll container (outside the card area). Size: 40×40px circle, `bg-white shadow-md`, `text-navy` chevron icon. On hover: `bg-primary text-white`.
- Touch swipe (mobile — native scroll, no arrow buttons shown on mobile)
- Dot indicators below the carousel (`w-2 h-2` circles, active dot `bg-primary`, inactive `bg-navy/20`)

**Component:** Refactor `src/components/Highlights.tsx` — convert to Client Component

---

### Testimonials (polish)

No structural changes. Apply global spacing. Tighten card padding. Keep the tilted card hover effect — it works well.

---

### Blog / Insights (NEW)

**Purpose:** Establish Nia as a thought leader. Static content for now, structured for future CMS integration.

**Layout:** Featured large card (left, 60% width) + 2 smaller cards stacked (right, 40% width).

**Featured card:**
- Dark navy background, image as subtle bg overlay
- Category tag (pink), title (white, large bold), read time
- Arrow link to full post

**Small cards:**
- White background, border
- Category tag (pink), title (navy bold)

**Header row:**
- Left: section label "Insights" + heading "Thinking Out Loud"
- Right: "Read all insights →" link (links to `/blog` — page TBD, can be a coming soon page for now)

**Initial static content (3 posts — hardcoded, real or aspirational titles):**
1. "Why purpose-driven brands win" — Strategy — 8 min read
2. "The 3 questions I ask every new client" — Process — 4 min read
3. "How to build a content strategy that actually converts" — Content — 6 min read

**Blog post links:** All article links (including "Read all insights →") point to `/blog` which renders a simple "Coming soon" page for now. No 404s.

**Data structure:** Array of post objects in the component — easy to swap for a CMS API call later.

**Component:** New `src/components/Blog.tsx`

---

### Contact (wire up)

**Purpose:** Convert interest into booked calls / project inquiries.

**Changes:**
- Wire form to Formspree (`https://formspree.io/f/{endpoint}`) — requires Nia to create a free Formspree account and paste the endpoint into an env var `NEXT_PUBLIC_FORMSPREE_ENDPOINT`
- **Graceful degradation:** if `NEXT_PUBLIC_FORMSPREE_ENDPOINT` is not set, the form renders normally but the submit button is disabled with tooltip "Contact form not yet configured" — never throws, never silently fails
- Add `useState` for form state: `idle | submitting | success | error`
- Success state: replace form with a thank-you message ("Thanks! I'll be in touch within 24 hours.")
- Error state: inline error message below submit button ("Something went wrong — please email hello@amicreative.com directly")
- Submit button: shows spinner while `submitting`

**Pre-implementation action required:** Nia must create a free Formspree account at formspree.io and add `NEXT_PUBLIC_FORMSPREE_ENDPOINT=https://formspree.io/f/YOUR_ID` to `.env.local`

**Component:** Refactor `src/components/Contact.tsx` — convert to Client Component

---

### Footer (fix)

**Changes:**
- Add `SOCIAL_LINKS` constants object in `src/lib/constants.ts` so links are easy to update in one place. Expected platforms (URLs to be provided by Nia — stub with `#` until confirmed):
  - Instagram
  - LinkedIn
  - TikTok
  - Email (`mailto:hello@amicreative.com`)
- Update copyright to `© {new Date().getFullYear()} AMI Creative Studio. All rights reserved.` (dynamic, never stale)

---

## Asset Migration

During implementation, copy the following from `~/Desktop/AMI Creative/site/assets/` to the project's `/public/` directory:

```
images/filming-day.jpg           → /public/images/highlights/filming-day.jpg
images/london-met-talk.jpg       → /public/images/highlights/london-met-talk.jpg
images/lovebrain-event.jpg       → /public/images/highlights/lovebrain-event.jpg
images/nisau-conference.jpg      → /public/images/highlights/nisau-conference.jpg
images/snap-in-colour-snapchat-hq.jpg → /public/images/highlights/snap-in-colour-snapchat-hq.jpg
portfolio/lsbu-44.jpg            → /public/images/portfolio/lsbu-44.jpg
portfolio/lsbu-45.jpg            → /public/images/portfolio/lsbu-45.jpg
portfolio/lsbu-46.jpg            → /public/images/portfolio/lsbu-46.jpg
portfolio/lsbu-48.jpg            → /public/images/portfolio/lsbu-48.jpg
portfolio/lsbu-63.jpg            → /public/images/portfolio/lsbu-63.jpg
portfolio/photographer-at-lsbu.jpg → /public/images/portfolio/photographer-at-lsbu.jpg
```

---

## Implementation Order

1. Asset migration (copy images, create directory structure)
2. Global polish (spacing, typography, animation utility)
3. Process section (new)
4. Pricing section (new)
5. Blog section (new)
6. Portfolio overhaul (filters + bento grid)
7. Highlights rebuild (carousel + modal)
8. Contact form wiring (Formspree)
9. Footer fixes
10. Polish pass (Hero, About, Services, Testimonials, Navbar)

---

## Out of Scope

- No blog page (`/blog`) implemented — just a teaser section with a placeholder link
- No CMS integration — blog posts are static/hardcoded
- No authentication, no database
- No dark mode
- No analytics integration (can be added later)
