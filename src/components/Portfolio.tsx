"use client";

import { useState } from "react";
import Image from "next/image";
import { PORTFOLIO_ITEMS } from "@/lib/constants";

const CATEGORIES = ["All", "Branding", "Content", "Web", "Social", "Photography"] as const;

const SLOT_CLASSES: Record<number, string> = {
  0: "col-start-1 col-span-2 row-start-1 row-span-2",
  1: "col-start-3 row-start-1",
  2: "col-start-3 row-start-2",
  3: "col-start-1 row-start-3",
  4: "col-start-2 row-start-3",
  5: "col-start-3 row-start-3",
};

function ComingSoonCard({ className = "" }: { className?: string }) {
  return (
    <div
      className={`relative rounded-2xl bg-cream border-2 border-dashed border-navy/20 flex items-center justify-center transition-all duration-300 ${className}`}
    >
      <p className="text-sm font-medium text-navy/40 uppercase tracking-widest text-center px-4">
        More work coming soon
      </p>
    </div>
  );
}

function PortfolioCard({
  item,
  className = "",
}: {
  item: (typeof PORTFOLIO_ITEMS)[0];
  className?: string;
}) {
  return (
    <div
      className={`relative rounded-2xl overflow-hidden group cursor-pointer transition-all duration-300 ${className}`}
    >
      <Image
        src={item.img}
        alt={item.title}
        fill
        className="object-cover"
        sizes="(max-width: 768px) 100vw, 50vw"
      />
      {/* Hover overlay — slides up from bottom */}
      <div className="absolute inset-x-0 bottom-0 h-full bg-navy/80 translate-y-full group-hover:translate-y-0 transition-transform duration-300 flex flex-col justify-end p-6">
        <span className="text-xs tracking-widest uppercase text-primary font-medium mb-2">
          {item.category}
        </span>
        <h3 className="font-heading font-bold text-white text-lg leading-snug">
          {item.title}
        </h3>
        <span className="text-white/60 text-sm mt-2">View project →</span>
      </div>
    </div>
  );
}

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered =
    activeCategory === "All"
      ? PORTFOLIO_ITEMS
      : PORTFOLIO_ITEMS.filter((item) => item.category === activeCategory);

  const slots: Array<(typeof PORTFOLIO_ITEMS)[0] | null> = [
    ...filtered.slice(0, 6),
    ...Array(Math.max(0, 6 - filtered.length)).fill(null),
  ];

  return (
    <section id="portfolio" className="bg-cream py-20 md:py-32 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto flex flex-col gap-12">
        {/* Header */}
        <div className="fade-up flex flex-col gap-6">
          <p className="text-xs tracking-widest uppercase text-primary font-medium">Portfolio</p>
          <h2 className="font-heading font-black text-5xl md:text-7xl text-navy leading-[1.05] tracking-tight">
            Work That Speaks
          </h2>
          {/* Filter pills */}
          <div className="flex flex-wrap gap-3">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === cat
                    ? "bg-primary text-white"
                    : "bg-light-blue text-navy hover:bg-primary/10"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Bento grid */}
        <div
          className="fade-up grid grid-cols-3 grid-rows-3 gap-4 h-[700px] md:h-[800px]"
          style={{ transitionDelay: "150ms" }}
        >
          {slots.map((item, i) => {
            const placement = SLOT_CLASSES[i];
            if (!item) return <ComingSoonCard key={i} className={placement} />;
            return <PortfolioCard key={item.title} item={item} className={placement} />;
          })}
        </div>
      </div>
    </section>
  );
}
