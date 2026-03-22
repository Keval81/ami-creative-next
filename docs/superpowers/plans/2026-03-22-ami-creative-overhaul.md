# AMI Creative Landing Page Overhaul — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Overhaul the ami-creative-next landing page with 3 new sections (Process, Pricing, Blog), rebuilt Portfolio and Highlights, wired contact form, global visual polish, and real image assets.

**Architecture:** Component-first — each section is an isolated React component in `src/components/`. New sections are added to `src/app/page.tsx` after being built. Shared data (social links, blog posts, portfolio items) lives in `src/lib/constants.ts`. All new interactive components are Client Components (`"use client"`).

**Tech Stack:** Next.js 16 App Router, TypeScript strict, Tailwind CSS v4, shadcn/ui (Dialog), Framer Motion (already installed), Formspree (contact form), Lucide React (icons already installed)

**Note on testing:** No test framework is configured in this project. Verification at each step uses `npm run lint`, `npm run build`, and visual browser inspection at `http://localhost:3000`. Do not install a test framework as part of this plan.

**Spec:** `docs/superpowers/specs/2026-03-22-ami-creative-overhaul-design.md`

---

## File Map

### New files
| File | Responsibility |
|------|---------------|
| `src/lib/constants.ts` | Social links, blog posts array, portfolio items array |
| `src/components/Process.tsx` | Process section — static, server component |
| `src/components/Pricing.tsx` | Pricing section — static, server component |
| `src/components/Blog.tsx` | Blog teaser section — static, server component |
| `src/app/blog/page.tsx` | Coming soon page for `/blog` route |
| `src/components/ui/scroll-carousel.tsx` | Reusable horizontal scroll carousel shell |

### Modified files
| File | Change |
|------|--------|
| `src/app/page.tsx` | Add Process, Pricing, Blog imports + JSX |
| `src/app/globals.css` | Add `fade-up` scroll animation utility class |
| `src/components/Portfolio.tsx` | Client component, bento grid, working filters, real images |
| `src/components/Highlights.tsx` | Client component, horizontal carousel, shadcn Dialog modal |
| `src/components/Contact.tsx` | Client component, Formspree wiring, form states |
| `src/components/Footer.tsx` | Pull social links from constants, dynamic copyright |
| `src/components/Hero.tsx` | Reduce FlickeringGrid opacity to 0.05, tighten spacing |
| `src/components/About.tsx` | Apply global spacing tokens |
| `src/components/Services.tsx` | Apply global spacing tokens |
| `src/components/Testimonials.tsx` | Apply global spacing tokens, tighten card padding |
| `src/components/Navbar.tsx` | Verify sticky is smooth; no structural change |

---

## Task 1: Asset Migration

Copy real images from `~/Desktop/AMI Creative/site/assets/` into the project public directory.

**Files:**
- Create: `public/images/highlights/` (directory)
- Create: `public/images/portfolio/` (directory)

- [ ] **Step 1: Copy highlight images**

```bash
mkdir -p /Users/sandboxsansan/Projects/ami-creative-next/public/images/highlights
cp "/Users/sandboxsansan/Desktop/AMI Creative/site/assets/images/filming-day.jpg" \
   /Users/sandboxsansan/Projects/ami-creative-next/public/images/highlights/
cp "/Users/sandboxsansan/Desktop/AMI Creative/site/assets/images/london-met-talk.jpg" \
   /Users/sandboxsansan/Projects/ami-creative-next/public/images/highlights/
cp "/Users/sandboxsansan/Desktop/AMI Creative/site/assets/images/lovebrain-event.jpg" \
   /Users/sandboxsansan/Projects/ami-creative-next/public/images/highlights/
cp "/Users/sandboxsansan/Desktop/AMI Creative/site/assets/images/nisau-conference.jpg" \
   /Users/sandboxsansan/Projects/ami-creative-next/public/images/highlights/
cp "/Users/sandboxsansan/Desktop/AMI Creative/site/assets/images/snap-in-colour-snapchat-hq.jpg" \
   /Users/sandboxsansan/Projects/ami-creative-next/public/images/highlights/
```

- [ ] **Step 2: Copy portfolio images**

```bash
mkdir -p /Users/sandboxsansan/Projects/ami-creative-next/public/images/portfolio
cp "/Users/sandboxsansan/Desktop/AMI Creative/site/assets/portfolio/lsbu-44.jpg" \
   /Users/sandboxsansan/Projects/ami-creative-next/public/images/portfolio/
cp "/Users/sandboxsansan/Desktop/AMI Creative/site/assets/portfolio/lsbu-45.jpg" \
   /Users/sandboxsansan/Projects/ami-creative-next/public/images/portfolio/
cp "/Users/sandboxsansan/Desktop/AMI Creative/site/assets/portfolio/lsbu-46.jpg" \
   /Users/sandboxsansan/Projects/ami-creative-next/public/images/portfolio/
cp "/Users/sandboxsansan/Desktop/AMI Creative/site/assets/portfolio/lsbu-48.jpg" \
   /Users/sandboxsansan/Projects/ami-creative-next/public/images/portfolio/
cp "/Users/sandboxsansan/Desktop/AMI Creative/site/assets/portfolio/lsbu-63.jpg" \
   /Users/sandboxsansan/Projects/ami-creative-next/public/images/portfolio/
cp "/Users/sandboxsansan/Desktop/AMI Creative/site/assets/portfolio/photographer-at-lsbu.jpg" \
   /Users/sandboxsansan/Projects/ami-creative-next/public/images/portfolio/
```

- [ ] **Step 3: Verify all files are present**

```bash
ls public/images/highlights/ && ls public/images/portfolio/
```

Expected: 5 files in highlights, 6 files in portfolio.

- [ ] **Step 4: Commit**

```bash
git add public/images/
git commit -m "feat: add real asset images for highlights and portfolio sections"
```

---

## Task 2: Shared Data + Global Animation

Create the constants file, add the `fade-up` CSS utility, and install the shadcn Dialog component.

**Files:**
- Create: `src/lib/constants.ts`
- Modify: `src/app/globals.css`

- [ ] **Step 1: Create `src/lib/constants.ts`**

```ts
// src/lib/constants.ts

export const SOCIAL_LINKS = {
  instagram: "#", // TODO: Nia to provide real URL
  linkedin: "#",  // TODO: Nia to provide real URL
  tiktok: "#",    // TODO: Nia to provide real URL
  email: "mailto:hello@amicreative.com",
} as const;

export interface BlogPost {
  slug: string;
  title: string;
  category: string;
  readTime: string;
  excerpt: string;
}

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "why-purpose-driven-brands-win",
    title: "Why purpose-driven brands win",
    category: "Strategy",
    readTime: "8 min read",
    excerpt: "In a world of noise, brands with a clear why cut through every time.",
  },
  {
    slug: "3-questions-every-new-client",
    title: "The 3 questions I ask every new client",
    category: "Process",
    readTime: "4 min read",
    excerpt: "Before I touch a brief, I need to understand three things.",
  },
  {
    slug: "content-strategy-that-converts",
    title: "How to build a content strategy that actually converts",
    category: "Content",
    readTime: "6 min read",
    excerpt: "Content without strategy is just noise. Here's how to build one that works.",
  },
];

export interface PortfolioItem {
  title: string;
  category: "Branding" | "Content" | "Web" | "Social" | "Photography";
  img: string;
  featured?: boolean;
}

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  { title: "LSBU Photography", category: "Photography", img: "/images/portfolio/lsbu-44.jpg", featured: true },
  { title: "On Location", category: "Photography", img: "/images/portfolio/lsbu-45.jpg" },
  { title: "Studio Session", category: "Photography", img: "/images/portfolio/lsbu-46.jpg" },
  { title: "Creative Direction", category: "Photography", img: "/images/portfolio/lsbu-48.jpg" },
  { title: "Behind the Lens", category: "Photography", img: "/images/portfolio/lsbu-63.jpg" },
  { title: "Photographer at LSBU", category: "Photography", img: "/images/portfolio/photographer-at-lsbu.jpg" },
];

export interface HighlightCard {
  num: string;
  title: string;
  blurb: string;
  story: string;
  img: string;
}

export const HIGHLIGHT_CARDS: HighlightCard[] = [
  {
    num: "01",
    title: "London Met Talk",
    blurb: "Inspiring the next gen",
    story: "Nia was invited to speak at London Metropolitan University, sharing her journey in creative marketing and inspiring the next generation of designers and brand strategists.",
    img: "/images/highlights/london-met-talk.jpg",
  },
  {
    num: "02",
    title: "Filming Day",
    blurb: "Action! Behind the lens",
    story: "A full day on set directing and producing brand video content — from concept to camera, bringing stories to life through motion and narrative.",
    img: "/images/highlights/filming-day.jpg",
  },
  {
    num: "03",
    title: "Brand Launch",
    blurb: "Pop, clink, cheer",
    story: "The excitement of a live brand launch — months of strategy, design, and preparation culminating in one memorable moment. A major milestone for the client's identity.",
    img: "/images/highlights/lovebrain-event.jpg",
  },
  {
    num: "04",
    title: "NISAU Conference",
    blurb: "Connecting the community",
    story: "Representing AMI Creative at the NISAU Conference — meeting founders, creatives, and changemakers all building something meaningful.",
    img: "/images/highlights/nisau-conference.jpg",
  },
  {
    num: "05",
    title: "Snapchat HQ",
    blurb: "In colour at Snap HQ",
    story: "An unforgettable visit to Snapchat's London headquarters — exploring the intersection of social, tech, and creative culture.",
    img: "/images/highlights/snap-in-colour-snapchat-hq.jpg",
  },
];
```

- [ ] **Step 2: Add `fade-up` animation utility to `src/app/globals.css`**

Add this block at the bottom of the file, before the final closing:

```css
/* Scroll animation utility */
.fade-up {
  opacity: 0;
  transform: translateY(24px);
  transition: opacity 400ms ease-out, transform 400ms ease-out;
}

.fade-up.visible {
  opacity: 1;
  transform: translateY(0);
}
```

- [ ] **Step 3: Install shadcn Dialog component**

```bash
cd /Users/sandboxsansan/Projects/ami-creative-next
npx shadcn@latest add dialog
```

Expected: creates `src/components/ui/dialog.tsx`

- [ ] **Step 4: Verify build is clean**

```bash
npm run lint && npm run build
```

Expected: no errors.

- [ ] **Step 5: Commit**

```bash
git add src/lib/constants.ts src/app/globals.css src/components/ui/dialog.tsx
git commit -m "feat: add shared constants, fade-up utility, shadcn Dialog"
```

---

## Task 3: Process Section (NEW)

Static server component. Dark navy background, 4-step horizontal timeline.

**Files:**
- Create: `src/components/Process.tsx`

- [ ] **Step 1: Create `src/components/Process.tsx`**

```tsx
// src/components/Process.tsx

const STEPS = [
  {
    num: "1",
    title: "Discover",
    description: "Deep dive into your brand, audience, and goals",
  },
  {
    num: "2",
    title: "Strategise",
    description: "Build the creative roadmap and content plan",
  },
  {
    num: "3",
    title: "Execute",
    description: "Design, write, produce, and iterate with precision",
  },
  {
    num: "4",
    title: "Deliver",
    description: "Launch, measure impact, and refine",
  },
];

export default function Process() {
  return (
    <section id="process" className="bg-navy py-20 md:py-32 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-xs tracking-widest uppercase text-primary font-medium mb-4">
            How I work
          </p>
          <h2 className="font-heading font-black text-5xl md:text-7xl text-white leading-[1.05] tracking-tight">
            The Process
          </h2>
        </div>

        <div className="relative flex flex-col md:flex-row items-start md:items-center justify-between gap-12 md:gap-0">
          {/* Connector line — desktop only */}
          <div
            className="hidden md:block absolute top-8 left-0 right-0 h-px border-t-2 border-dashed border-primary/40"
            aria-hidden="true"
          />

          {STEPS.map((step, i) => (
            <div
              key={step.num}
              className="fade-up relative z-10 flex flex-col items-center text-center gap-4 flex-1"
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center shadow-lg shadow-primary/30">
                <span className="font-heading font-black text-white text-xl">
                  {step.num}
                </span>
              </div>
              <div>
                <h3 className="font-heading font-bold text-white text-lg mb-1">
                  {step.title}
                </h3>
                <p className="text-white/60 text-sm leading-relaxed max-w-[180px]">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Add to `src/app/page.tsx`**

Import and place Process after Services:

```tsx
import Process from "@/components/Process";
// In JSX, after <Services />:
<Process />
```

- [ ] **Step 3: Add fade-up scroll trigger to layout**

Add this script to `src/app/layout.tsx` inside `<body>` (after `{children}`):

```tsx
<script
  dangerouslySetInnerHTML={{
    __html: `
      const observer = new IntersectionObserver(
        (entries) => entries.forEach(e => e.isIntersecting && e.target.classList.add('visible')),
        { threshold: 0.15 }
      );
      document.addEventListener('DOMContentLoaded', () =>
        document.querySelectorAll('.fade-up').forEach(el => observer.observe(el))
      );
    `,
  }}
/>
```

- [ ] **Step 4: Start dev server and verify Process section renders**

```bash
npm run dev
```

Open `http://localhost:3000`. Scroll to the Process section. Expected: 4 steps visible on dark navy background, pink numbered circles, connector line on desktop.

- [ ] **Step 5: Verify build**

```bash
npm run lint && npm run build
```

- [ ] **Step 6: Commit**

```bash
git add src/components/Process.tsx src/app/page.tsx src/app/layout.tsx
git commit -m "feat: add Process section with horizontal timeline"
```

---

## Task 4: Pricing Section (NEW)

Static server component. Dark navy background, two-path cards, discovery call CTA.

**Files:**
- Create: `src/components/Pricing.tsx`

- [ ] **Step 1: Create `src/components/Pricing.tsx`**

```tsx
// src/components/Pricing.tsx

import { MagneticButton } from "@/components/ui/magnetic-button";

export default function Pricing() {
  return (
    <section id="pricing" className="bg-navy py-20 md:py-32 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left: headline copy */}
        <div className="fade-up flex flex-col gap-6">
          <p className="text-xs tracking-widest uppercase text-primary font-medium">
            Work with me
          </p>
          <h2 className="font-heading font-black text-5xl md:text-7xl text-white leading-[1.05] tracking-tight">
            Not sure what you need yet?
          </h2>
          <p className="text-white/60 text-lg md:text-xl font-medium leading-relaxed max-w-md">
            Every project is different. Let&apos;s have a 30-minute discovery
            call — no commitment, just clarity.
          </p>
        </div>

        {/* Right: two path cards + CTA */}
        <div className="fade-up flex flex-col gap-6" style={{ transitionDelay: "150ms" }}>
          <div className="grid grid-cols-2 gap-4">
            {/* Project card */}
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 flex flex-col gap-2">
              <p className="text-xs tracking-widest uppercase text-primary font-medium">
                One-off Project
              </p>
              <h3 className="font-heading font-bold text-white text-xl">
                Project
              </h3>
              <p className="text-white/50 text-sm leading-relaxed">
                Fixed scope &amp; price, delivered with care.
              </p>
            </div>

            {/* Retainer card */}
            <div className="rounded-2xl bg-primary p-6 flex flex-col gap-2 shadow-lg shadow-primary/30">
              <p className="text-xs tracking-widest uppercase text-white/70 font-medium">
                Ongoing Partnership
              </p>
              <h3 className="font-heading font-bold text-white text-xl">
                Retainer
              </h3>
              <p className="text-white/80 text-sm leading-relaxed">
                Monthly retainer for consistent creative support.
              </p>
            </div>
          </div>

          <MagneticButton href="#contact" variant="pink" className="w-full justify-center">
            Book a Free Discovery Call
          </MagneticButton>
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Add to `src/app/page.tsx`**

Import and place Pricing after Portfolio:

```tsx
import Pricing from "@/components/Pricing";
// In JSX, after <Portfolio />:
<Pricing />
```

- [ ] **Step 3: Visual check**

```bash
npm run dev
```

Open `http://localhost:3000`. Scroll to Pricing. Expected: dark navy section, two cards side by side (left semi-transparent, right pink), full-width CTA button below.

- [ ] **Step 4: Verify build**

```bash
npm run lint && npm run build
```

- [ ] **Step 5: Commit**

```bash
git add src/components/Pricing.tsx src/app/page.tsx
git commit -m "feat: add Pricing section with discovery-led CTA"
```

---

## Task 5: Blog Section (NEW)

Static server component. Featured post card + 2 smaller cards. Coming soon blog page.

**Files:**
- Create: `src/components/Blog.tsx`
- Create: `src/app/blog/page.tsx`

- [ ] **Step 1: Create `src/app/blog/page.tsx`**

```tsx
// src/app/blog/page.tsx

import Link from "next/link";

export default function BlogComingSoon() {
  return (
    <main className="min-h-screen bg-cream flex flex-col items-center justify-center px-6 text-center gap-8">
      <p className="text-xs tracking-widest uppercase text-primary font-medium">
        Insights
      </p>
      <h1 className="font-heading font-black text-5xl md:text-7xl text-navy leading-[1.05] tracking-tight">
        Coming soon.
      </h1>
      <p className="text-navy/60 text-lg max-w-md">
        Nia&apos;s thoughts on brand, content, and creativity are on their way.
      </p>
      <Link
        href="/"
        className="text-primary font-medium underline underline-offset-4"
      >
        ← Back home
      </Link>
    </main>
  );
}
```

- [ ] **Step 2: Create `src/components/Blog.tsx`**

```tsx
// src/components/Blog.tsx

import Link from "next/link";
import { BLOG_POSTS } from "@/lib/constants";

export default function Blog() {
  const [featured, ...rest] = BLOG_POSTS;
  const sideCards = rest.slice(0, 2);

  return (
    <section id="blog" className="py-20 md:py-32 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="fade-up flex items-end justify-between mb-12">
          <div>
            <p className="text-xs tracking-widest uppercase text-primary font-medium mb-3">
              Insights
            </p>
            <h2 className="font-heading font-black text-5xl md:text-7xl text-navy leading-[1.05] tracking-tight">
              Thinking Out Loud
            </h2>
          </div>
          <Link
            href="/blog"
            className="hidden md:flex items-center gap-2 text-navy/60 hover:text-primary transition-colors font-medium text-sm"
          >
            Read all insights →
          </Link>
        </div>

        {/* Grid */}
        <div className="fade-up grid grid-cols-1 lg:grid-cols-5 gap-6" style={{ transitionDelay: "150ms" }}>
          {/* Featured card */}
          <Link
            href="/blog"
            className="lg:col-span-3 group relative rounded-2xl overflow-hidden min-h-[360px] bg-navy flex flex-col justify-end p-8"
          >
            <div className="absolute inset-0 bg-navy/60 z-10" />
            <div className="relative z-20 flex flex-col gap-3">
              <span className="text-xs tracking-widest uppercase text-primary font-medium">
                {featured.category}
              </span>
              <h3 className="font-heading font-bold text-white text-2xl md:text-3xl leading-snug group-hover:text-primary transition-colors">
                {featured.title}
              </h3>
              <p className="text-white/60 text-sm">{featured.readTime}</p>
            </div>
          </Link>

          {/* Side cards */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            {sideCards.map((post) => (
              <Link
                key={post.slug}
                href="/blog"
                className="group flex-1 rounded-2xl border border-navy/10 bg-white p-6 flex flex-col gap-3 hover:border-primary/30 hover:shadow-md transition-all"
              >
                <span className="text-xs tracking-widest uppercase text-primary font-medium">
                  {post.category}
                </span>
                <h3 className="font-heading font-bold text-navy text-lg leading-snug group-hover:text-primary transition-colors">
                  {post.title}
                </h3>
                <p className="text-navy/50 text-sm mt-auto">{post.readTime}</p>
              </Link>
            ))}
          </div>
        </div>

        {/* Mobile view all link */}
        <div className="mt-8 flex justify-center md:hidden">
          <Link
            href="/blog"
            className="text-primary font-medium underline underline-offset-4 text-sm"
          >
            Read all insights →
          </Link>
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 3: Add to `src/app/page.tsx`**

Import and place Blog before Contact:

```tsx
import Blog from "@/components/Blog";
// In JSX, after <Testimonials />:
<Blog />
```

- [ ] **Step 4: Visual check**

```bash
npm run dev
```

Navigate to `http://localhost:3000` — scroll to Blog. Expected: large featured card (dark navy) on left, 2 smaller white cards stacked on right. Navigate to `http://localhost:3000/blog` — expected: coming soon page with back link.

- [ ] **Step 5: Verify build**

```bash
npm run lint && npm run build
```

- [ ] **Step 6: Commit**

```bash
git add src/components/Blog.tsx src/app/blog/page.tsx src/app/page.tsx
git commit -m "feat: add Blog teaser section and /blog coming soon page"
```

---

## Task 6: Portfolio Overhaul

Convert to Client Component. Replace masonry grid with bento grid. Wire filter buttons with useState.

**Files:**
- Modify: `src/components/Portfolio.tsx`

- [ ] **Step 1: Replace `src/components/Portfolio.tsx` entirely**

```tsx
// src/components/Portfolio.tsx
"use client";

import { useState } from "react";
import { PORTFOLIO_ITEMS, type PortfolioItem } from "@/lib/constants";

const CATEGORIES = ["All", "Branding", "Content", "Web", "Social", "Photography"] as const;
type Category = typeof CATEGORIES[number];

// Coming soon placeholder shown when a bento cell has no project
function ComingSoonCard({ className = "" }: { className?: string }) {
  return (
    <div
      className={`rounded-2xl border-2 border-dashed border-navy/20 bg-cream flex items-center justify-center ${className}`}
    >
      <p className="text-navy/30 text-sm font-medium">More work coming soon</p>
    </div>
  );
}

function PortfolioCard({
  item,
  className = "",
}: {
  item: PortfolioItem;
  className?: string;
}) {
  return (
    <div
      className={`group relative rounded-2xl overflow-hidden bg-light-blue cursor-pointer ${className}`}
    >
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
        style={{ backgroundImage: `url('${item.img}')` }}
        role="img"
        aria-label={item.title}
      />
      {/* Hover overlay */}
      <div className="absolute inset-0 bg-navy/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
        <span className="text-xs tracking-widest uppercase text-primary font-medium mb-1">
          {item.category}
        </span>
        <div className="flex items-center justify-between">
          <h3 className="font-heading font-bold text-white text-lg">
            {item.title}
          </h3>
          <span className="text-primary text-xl">→</span>
        </div>
      </div>
    </div>
  );
}

export default function Portfolio() {
  const [active, setActive] = useState<Category>("All");

  const filtered =
    active === "All"
      ? PORTFOLIO_ITEMS
      : PORTFOLIO_ITEMS.filter((p) => p.category === active);

  const featured = filtered.find((p) => p.featured) ?? filtered[0];
  const rest = filtered.filter((p) => p !== featured).slice(0, 4);

  return (
    <section id="portfolio" className="py-20 md:py-32 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto flex flex-col gap-12">
        {/* Header */}
        <div className="fade-up flex flex-col lg:flex-row lg:items-end justify-between gap-8">
          <div>
            <p className="text-xs tracking-widest uppercase text-primary font-medium mb-3">
              Selected Work
            </p>
            <h2 className="font-heading font-black text-5xl md:text-7xl text-navy leading-[1.05] tracking-tight">
              Portfolio
            </h2>
          </div>
          {/* Filter pills */}
          <div className="flex flex-wrap gap-3">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`flex h-10 items-center justify-center rounded-full px-6 text-sm font-medium transition-all duration-200 ${
                  active === cat
                    ? "bg-primary text-white shadow-sm shadow-primary/30"
                    : "bg-light-blue text-navy hover:bg-primary/10"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Bento grid
            Layout (3 columns):
            ┌──────────────┬──────────┐
            │              │  cell 2  │
            │  featured    ├──────────┤
            │  (col 1-2,   │  cell 3  │
            │   row 1-2)   ├──────────┤
            ├──────────────┤  cell 4  │  (only if rest[2] exists)
            │   cell 4*    ├──────────┤
            │              │  cell 5* │
            └──────────────┴──────────┘
        */}
        <div className="fade-up grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[240px]" style={{ transitionDelay: "150ms" }}>
          {/* Featured — spans 2 cols × 2 rows on md+ */}
          {featured ? (
            <PortfolioCard
              item={featured}
              className="md:col-span-2 md:row-span-2"
            />
          ) : (
            <ComingSoonCard className="md:col-span-2 md:row-span-2" />
          )}

          {/* Supporting cards */}
          {[0, 1, 2, 3].map((i) =>
            rest[i] ? (
              <PortfolioCard key={rest[i].img} item={rest[i]} />
            ) : (
              <ComingSoonCard key={`placeholder-${i}`} />
            )
          )}
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Visual check — filters**

```bash
npm run dev
```

Open `http://localhost:3000`. Click each filter pill. Expected: grid updates to show only matching items; "More work coming soon" fills empty bento cells; pills toggle correctly.

- [ ] **Step 3: Verify build**

```bash
npm run lint && npm run build
```

- [ ] **Step 4: Commit**

```bash
git add src/components/Portfolio.tsx
git commit -m "feat: overhaul Portfolio with bento grid and working filters"
```

---

## Task 7: Highlights Rebuild

Replace absolute-positioned scatter layout with horizontal scroll carousel + shadcn Dialog modal.

**Files:**
- Modify: `src/components/Highlights.tsx`

- [ ] **Step 1: Replace `src/components/Highlights.tsx` entirely**

```tsx
// src/components/Highlights.tsx
"use client";

import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { HIGHLIGHT_CARDS, type HighlightCard } from "@/lib/constants";

function HighlightCardItem({
  card,
  index,
  onClick,
}: {
  card: HighlightCard;
  index: number;
  onClick: () => void;
}) {
  const isAlt = index % 2 === 1;
  return (
    <button
      onClick={onClick}
      className={`flex-none w-72 md:w-80 rounded-2xl overflow-hidden flex flex-col cursor-pointer scroll-snap-align-start text-left group transition-transform hover:-translate-y-1 ${
        isAlt ? "bg-light-blue" : "bg-white border border-navy/10"
      }`}
    >
      {/* Image */}
      <div className="h-48 w-full overflow-hidden">
        <div
          className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
          style={{ backgroundImage: `url('${card.img}')` }}
          role="img"
          aria-label={card.title}
        />
      </div>
      {/* Text */}
      <div className="p-6 flex flex-col gap-2">
        <span className="text-primary font-heading font-black text-sm">
          {card.num}
        </span>
        <h3 className="font-heading font-bold text-navy text-lg leading-snug">
          {card.title}
        </h3>
        <p className="text-navy/60 text-sm leading-relaxed">{card.blurb}</p>
      </div>
    </button>
  );
}

export default function Highlights() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<HighlightCard | null>(null);

  function scroll(direction: "left" | "right") {
    const el = scrollRef.current;
    if (!el) return;
    const cardWidth = 320 + 16; // w-80 + gap-4
    el.scrollBy({ left: direction === "right" ? cardWidth : -cardWidth, behavior: "smooth" });
  }

  function handleScroll() {
    const el = scrollRef.current;
    if (!el) return;
    const cardWidth = 320 + 16;
    setActiveIndex(Math.round(el.scrollLeft / cardWidth));
  }

  function openCard(card: HighlightCard) {
    setSelected(card);
    setOpen(true);
  }

  return (
    <section id="highlights" className="py-20 md:py-32 px-6 lg:px-12 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="fade-up flex items-end justify-between mb-12">
          <div>
            <p className="text-xs tracking-widest uppercase text-primary font-medium mb-3">
              Career moments
            </p>
            <h2 className="font-heading font-black text-5xl md:text-7xl text-navy leading-[1.05] tracking-tight">
              Highlights
            </h2>
          </div>
          {/* Arrow buttons — desktop */}
          <div className="hidden md:flex gap-3">
            <button
              onClick={() => scroll("left")}
              aria-label="Previous"
              className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-navy hover:bg-primary hover:text-white transition-colors"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={() => scroll("right")}
              aria-label="Next"
              className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-navy hover:bg-primary hover:text-white transition-colors"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        {/* Carousel */}
        <div
          ref={scrollRef}
          onScroll={handleScroll}
          className="fade-up flex gap-4 overflow-x-auto pb-4 scroll-snap-x-mandatory scrollbar-hide"
          style={{ scrollSnapType: "x mandatory" }}
          style={{ transitionDelay: "150ms" }}
        >
          {HIGHLIGHT_CARDS.map((card, i) => (
            <HighlightCardItem
              key={card.num}
              card={card}
              index={i}
              onClick={() => openCard(card)}
            />
          ))}
        </div>

        {/* Dot indicators */}
        <div className="flex gap-2 justify-center mt-6" aria-hidden="true">
          {HIGHLIGHT_CARDS.map((_, i) => (
            <div
              key={i}
              className={`w-2 h-2 rounded-full transition-colors ${
                i === activeIndex ? "bg-primary" : "bg-navy/20"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Dialog modal */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-lg">
          {selected && (
            <>
              <div className="w-full h-48 rounded-lg overflow-hidden mb-2">
                <div
                  className="w-full h-full bg-cover bg-center"
                  style={{ backgroundImage: `url('${selected.img}')` }}
                  role="img"
                  aria-label={selected.title}
                />
              </div>
              <DialogHeader>
                <DialogTitle className="font-heading font-bold text-navy text-xl">
                  {selected.title}
                </DialogTitle>
              </DialogHeader>
              <p className="text-navy/70 text-base leading-relaxed">
                {selected.story}
              </p>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
```

- [ ] **Step 2: Fix duplicate `style` prop**

The component above has two `style` props on the carousel div. Merge them:

```tsx
// Replace the two style attributes on the carousel div with one:
style={{ scrollSnapType: "x mandatory", transitionDelay: "150ms" }}
```

- [ ] **Step 3: Add `scrollbar-hide` utility to globals.css**

```css
/* Scrollbar hide utility */
.scrollbar-hide {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
.scrollbar-hide::-webkit-scrollbar {
  display: none;
}
```

- [ ] **Step 4: Visual check**

```bash
npm run dev
```

Scroll to Highlights. Expected: horizontal scroll carousel with 5 real image cards; arrows work on desktop; swipe works on mobile; clicking a card opens Dialog with full story. Dot indicators update on scroll.

- [ ] **Step 5: Verify build**

```bash
npm run lint && npm run build
```

- [ ] **Step 6: Commit**

```bash
git add src/components/Highlights.tsx src/app/globals.css
git commit -m "feat: rebuild Highlights as horizontal scroll carousel with Dialog modals"
```

---

## Task 8: Contact Form Wiring

Convert to Client Component. Wire to Formspree with loading/success/error states.

**Files:**
- Modify: `src/components/Contact.tsx`

- [ ] **Step 1: Create `.env.local` if it doesn't exist**

```bash
touch /Users/sandboxsansan/Projects/ami-creative-next/.env.local
```

Add to `.env.local`:
```
NEXT_PUBLIC_FORMSPREE_ENDPOINT=
```

Leave blank for now — the form gracefully degrades when empty.

- [ ] **Step 2: Replace `src/components/Contact.tsx` entirely**

```tsx
// src/components/Contact.tsx
"use client";

import { useState, FormEvent } from "react";
import { MagneticButton } from "@/components/ui/magnetic-button";

type FormState = "idle" | "submitting" | "success" | "error";

export default function Contact() {
  const [state, setState] = useState<FormState>("idle");
  const endpoint = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT;
  const isConfigured = Boolean(endpoint);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!endpoint) return;

    setState("submitting");
    const data = new FormData(e.currentTarget);

    try {
      const res = await fetch(endpoint, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      setState(res.ok ? "success" : "error");
    } catch {
      setState("error");
    }
  }

  return (
    <section id="contact" className="py-20 md:py-32 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
        {/* Left */}
        <div className="fade-up lg:col-span-5 flex flex-col justify-center">
          <p className="text-xs tracking-widest uppercase text-primary font-medium mb-4">
            Get in touch
          </p>
          <h2 className="font-heading font-black text-5xl md:text-7xl text-navy leading-[1.05] tracking-tight mb-6">
            Let&apos;s Talk.
          </h2>
          <p className="text-lg text-navy/70 font-medium leading-relaxed max-w-md">
            Have a project in mind, a question, or just want to say hi? I&apos;m
            always open to discussing design work or partnership opportunities.
          </p>
        </div>

        {/* Right: form */}
        <div className="fade-up lg:col-span-7 relative" style={{ transitionDelay: "150ms" }}>
          <div className="absolute inset-0 bg-light-blue rounded-3xl transform translate-x-4 translate-y-4 -z-10 hidden sm:block" />
          <div className="bg-light-blue rounded-3xl shadow-xl p-8 sm:p-10 border border-navy/5 relative z-10">
            {state === "success" ? (
              <div className="flex flex-col items-center justify-center gap-4 py-12 text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary text-3xl">
                  ✓
                </div>
                <h3 className="font-heading font-bold text-navy text-2xl">
                  Message sent!
                </h3>
                <p className="text-navy/60 text-base">
                  Thanks! I&apos;ll be in touch within 24 hours.
                </p>
              </div>
            ) : (
              <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
                <div className="flex flex-col sm:flex-row gap-6">
                  <label className="flex flex-col flex-1 group">
                    <span className="text-sm font-heading font-bold text-navy uppercase tracking-wider mb-2 group-focus-within:text-primary transition-colors">
                      Name
                    </span>
                    <input
                      name="name"
                      className="w-full bg-white border-0 border-b-2 border-slate-200 text-navy focus:ring-0 focus:border-primary px-4 py-3 rounded-t-lg transition-colors placeholder:text-slate-400 font-medium"
                      placeholder="Jane Doe"
                      required
                      type="text"
                    />
                  </label>
                  <label className="flex flex-col flex-1 group">
                    <span className="text-sm font-heading font-bold text-navy uppercase tracking-wider mb-2 group-focus-within:text-primary transition-colors">
                      Email
                    </span>
                    <input
                      name="email"
                      className="w-full bg-white border-0 border-b-2 border-slate-200 text-navy focus:ring-0 focus:border-primary px-4 py-3 rounded-t-lg transition-colors placeholder:text-slate-400 font-medium"
                      placeholder="jane@example.com"
                      required
                      type="email"
                    />
                  </label>
                </div>
                <label className="flex flex-col group">
                  <span className="text-sm font-heading font-bold text-navy uppercase tracking-wider mb-2 group-focus-within:text-primary transition-colors">
                    Subject
                  </span>
                  <select
                    name="subject"
                    className="w-full bg-white border-0 border-b-2 border-slate-200 text-navy focus:ring-0 focus:border-primary px-4 py-3 rounded-t-lg transition-colors appearance-none font-medium"
                  >
                    <option>Project Inquiry</option>
                    <option>Collaboration</option>
                    <option>General Question</option>
                    <option>Just Saying Hi</option>
                  </select>
                </label>
                <label className="flex flex-col group">
                  <span className="text-sm font-heading font-bold text-navy uppercase tracking-wider mb-2 group-focus-within:text-primary transition-colors">
                    Message
                  </span>
                  <textarea
                    name="message"
                    className="w-full bg-white border-0 border-b-2 border-slate-200 text-navy focus:ring-0 focus:border-primary px-4 py-3 rounded-t-lg transition-colors min-h-[160px] resize-y placeholder:text-slate-400 font-medium"
                    placeholder="Tell me about your project..."
                    required
                  />
                </label>

                {state === "error" && (
                  <p className="text-red-500 text-sm">
                    Something went wrong — please email{" "}
                    <a href="mailto:hello@amicreative.com" className="underline">
                      hello@amicreative.com
                    </a>{" "}
                    directly.
                  </p>
                )}

                <div className="pt-4">
                  {/* MagneticButton does not support disabled — use a native button for submit */}
                  <button
                    type="submit"
                    disabled={!isConfigured || state === "submitting"}
                    title={!isConfigured ? "Contact form not yet configured" : undefined}
                    className="w-full flex items-center justify-center rounded-full h-14 px-10 bg-primary text-white font-heading font-bold text-base tracking-wide shadow-lg shadow-primary/30 hover:bg-navy transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {state === "submitting" ? "Sending…" : "Send Message"}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 3: Visual check**

```bash
npm run dev
```

Scroll to Contact. Expected: form renders normally, submit button shows "Contact form not yet configured" tooltip (since endpoint is blank). Error/success UI only visible by temporarily setting state in code.

- [ ] **Step 4: Verify build**

```bash
npm run lint && npm run build
```

- [ ] **Step 5: Commit**

```bash
git add src/components/Contact.tsx
git commit -m "feat: wire Contact form to Formspree with loading/success/error states"
```

> `.env.local` is already in `.gitignore` — do not commit it.

---

## Task 9: Footer + Constants Fix

Pull social links from constants, dynamic copyright year.

**Files:**
- Modify: `src/components/Footer.tsx`

- [ ] **Step 1: Replace `src/components/Footer.tsx` entirely**

```tsx
// src/components/Footer.tsx

import { SOCIAL_LINKS } from "@/lib/constants";

const NAV_LINKS = [
  { href: "#hero", label: "Home" },
  { href: "#portfolio", label: "Work" },
  { href: "#services", label: "Services" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

const SOCIALS = [
  { label: "Instagram", icon: "photo_camera", href: SOCIAL_LINKS.instagram },
  { label: "LinkedIn", icon: "work", href: SOCIAL_LINKS.linkedin },
  { label: "TikTok", icon: "music_note", href: SOCIAL_LINKS.tiktok },
  { label: "Email", icon: "mail", href: SOCIAL_LINKS.email },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-navy text-white relative overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] pointer-events-none select-none z-0 overflow-hidden">
        <h2 className="text-[30vw] font-heading font-bold leading-none tracking-tighter whitespace-nowrap">
          AMI
        </h2>
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-20 lg:py-32">
        <div className="flex flex-col items-center justify-center text-center mb-20 lg:mb-32">
          <h2 className="font-heading text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight max-w-4xl leading-tight">
            Marketing with{" "}
            <span className="text-primary italic font-medium">Heart</span>{" "}
            &amp; Hustle
          </h2>
          <div className="mt-10 h-1 w-24 bg-primary rounded-full" />
        </div>
        <div className="flex flex-col lg:flex-row justify-between items-center gap-12 lg:gap-8 pt-12 border-t border-white/10">
          <nav className="flex flex-wrap items-center justify-center lg:justify-start gap-8 lg:gap-12">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                className="text-slate-300 hover:text-primary transition-colors duration-300 text-sm font-medium uppercase tracking-wider"
                href={link.href}
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-6">
            {SOCIALS.map((s) => (
              <a
                key={s.label}
                aria-label={s.label}
                className="group flex items-center justify-center h-12 w-12 rounded-full bg-white/10 hover:bg-primary transition-colors duration-300"
                href={s.href}
              >
                <span className="material-symbols-outlined text-slate-300 group-hover:text-white transition-colors">
                  {s.icon}
                </span>
              </a>
            ))}
          </div>
        </div>
        <div className="mt-12 text-center lg:text-left">
          <p className="text-slate-400 text-sm font-medium tracking-wide uppercase">
            &copy; {year} AMI Creative Studio. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
```

- [ ] **Step 2: Visual check**

```bash
npm run dev
```

Scroll to Footer. Expected: copyright year shows current year; social icon links are present (pointing to `#` until Nia provides real URLs).

- [ ] **Step 3: Verify build**

```bash
npm run lint && npm run build
```

- [ ] **Step 4: Commit**

```bash
git add src/components/Footer.tsx
git commit -m "fix: footer social links from constants, dynamic copyright year"
```

---

## Task 10: Global Polish Pass (Existing Sections)

Apply unified spacing and typography tokens to Hero, About, Services, Testimonials, and Navbar.

**Files:**
- Modify: `src/components/Hero.tsx`
- Modify: `src/components/About.tsx`
- Modify: `src/components/Services.tsx`
- Modify: `src/components/Testimonials.tsx`
- Modify: `src/components/Navbar.tsx`

- [ ] **Step 1: Hero — reduce FlickeringGrid opacity**

In `src/components/Hero.tsx`, find the FlickeringGrid props and update `maxOpacity`:

```tsx
// Before:
maxOpacity={0.08}
// After:
maxOpacity={0.05}
```

- [ ] **Step 2: About — apply global spacing**

In `src/components/About.tsx`, update the section opening tag:

```tsx
// Before:
<section id="about" className="py-16 md:py-24 px-6 lg:px-12">
// After:
<section id="about" className="py-20 md:py-32 px-6 lg:px-12">
```

Add `fade-up` class to the two main grid children:

```tsx
// Left image div:
<div className="fade-up relative w-full max-w-md ...">
// Right content div:
<div className="fade-up flex flex-col gap-10" style={{ transitionDelay: "150ms" }}>
```

- [ ] **Step 3: Services — apply global spacing**

In `src/components/Services.tsx`, update the section tag:

```tsx
// Before:
<section id="services" className="py-16 md:py-24 px-6 lg:px-12">
// After:
<section id="services" className="py-20 md:py-32 px-6 lg:px-12">
```

Add `fade-up` to the header div and grid div:

```tsx
<div className="fade-up flex flex-col items-center ...">
<div className="fade-up grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ..." style={{ transitionDelay: "150ms" }}>
```

- [ ] **Step 4: Testimonials — apply global spacing + tighten cards**

In `src/components/Testimonials.tsx`, update section tag:

```tsx
// Before:
<section id="testimonials" className="py-16 md:py-24 px-6 lg:px-12">
// After:
<section id="testimonials" className="py-20 md:py-32 px-6 lg:px-12">
```

Add `fade-up` to the heading div and grid div.

- [ ] **Step 5: Final visual review in browser**

```bash
npm run dev
```

Scroll through the entire page from top to bottom. Verify:
- [ ] Spacing feels consistent between all sections
- [ ] Dark sections (Process, Pricing, Footer) create good contrast rhythm
- [ ] All 3 new sections are present and styled correctly
- [ ] Portfolio filters work
- [ ] Highlights carousel scrolls and opens Dialog
- [ ] Blog teaser shows
- [ ] Contact form renders with graceful disabled state
- [ ] Footer shows current year

- [ ] **Step 6: Production build check**

```bash
npm run lint && npm run build
```

Expected: clean build, no TypeScript or lint errors.

- [ ] **Step 7: Final commit**

```bash
git add src/components/Hero.tsx src/components/About.tsx src/components/Services.tsx \
        src/components/Testimonials.tsx src/components/Navbar.tsx
git commit -m "polish: apply global spacing, typography, and fade-up animations to existing sections"
```

---

## Done

All 10 tasks complete. The site now has:
- ✅ Real images throughout (no fake Google URLs)
- ✅ 3 new sections: Process, Pricing, Blog
- ✅ Portfolio with working filters and bento grid
- ✅ Highlights rebuilt as a scroll carousel with Dialog modals
- ✅ Contact form wired to Formspree (graceful degradation when unconfigured)
- ✅ Footer with dynamic copyright and constants-driven social links
- ✅ Global spacing, typography, and fade-up scroll animations

**Remaining manual action:** Nia to add real social link URLs to `src/lib/constants.ts` and her Formspree endpoint to `.env.local`.
