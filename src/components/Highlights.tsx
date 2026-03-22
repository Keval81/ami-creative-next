"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { HIGHLIGHT_CARDS } from "@/lib/constants";

const CARD_BACKGROUNDS = ["bg-white", "bg-light-blue"];

export default function Highlights() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [openCard, setOpenCard] = useState<(typeof HIGHLIGHT_CARDS)[0] | null>(null);

  function scroll(direction: "left" | "right") {
    const container = scrollRef.current;
    if (!container) return;
    const cardWidth = container.firstElementChild?.clientWidth ?? 320;
    container.scrollBy({
      left: direction === "right" ? cardWidth + 16 : -(cardWidth + 16),
      behavior: "smooth",
    });
  }

  function handleScroll() {
    const container = scrollRef.current;
    if (!container) return;
    const cardWidth = container.firstElementChild?.clientWidth ?? 320;
    const index = Math.round(container.scrollLeft / (cardWidth + 16));
    setActiveIndex(Math.min(index, HIGHLIGHT_CARDS.length - 1));
  }

  return (
    <section id="highlights" className="bg-cream py-20 md:py-32 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto flex flex-col gap-12">
        {/* Header */}
        <div className="fade-up flex flex-col gap-2">
          <p className="text-xs tracking-widest uppercase text-primary font-medium">
            Highlights
          </p>
          <h2 className="font-heading font-black text-5xl md:text-7xl text-navy leading-[1.05] tracking-tight">
            Moments That Matter
          </h2>
        </div>

        {/* Carousel + arrows */}
        <div
          className="fade-up relative flex items-center gap-4"
          style={{ transitionDelay: "150ms" }}
        >
          {/* Left arrow */}
          <button
            onClick={() => scroll("left")}
            aria-label="Scroll left"
            className="hidden md:flex shrink-0 w-10 h-10 items-center justify-center rounded-full bg-white shadow-md text-navy hover:bg-primary hover:text-white transition-colors duration-200"
          >
            <ChevronLeft size={20} />
          </button>

          {/* Scroll container */}
          <div
            ref={scrollRef}
            onScroll={handleScroll}
            className="flex gap-4 overflow-x-auto scrollbar-hide snap-x snap-mandatory"
          >
            {HIGHLIGHT_CARDS.map((card, i) => (
              <button
                key={card.num}
                onClick={() => setOpenCard(card)}
                className={`shrink-0 w-72 md:w-80 h-[380px] rounded-2xl overflow-hidden text-left flex flex-col snap-start ${CARD_BACKGROUNDS[i % 2]}`}
              >
                {/* Image — top 60% */}
                <div className="relative w-full" style={{ height: "60%" }}>
                  <Image
                    src={card.img}
                    alt={card.title}
                    fill
                    className="object-cover"
                    sizes="320px"
                  />
                </div>
                {/* Content — bottom 40% */}
                <div className="flex flex-col gap-1 p-5" style={{ height: "40%" }}>
                  <span className="text-primary font-black text-sm">{card.num}</span>
                  <h3 className="font-heading font-bold text-navy text-lg leading-snug">
                    {card.title}
                  </h3>
                  <p className="text-navy/60 text-sm leading-relaxed line-clamp-3">
                    {card.blurb}
                  </p>
                </div>
              </button>
            ))}
          </div>

          {/* Right arrow */}
          <button
            onClick={() => scroll("right")}
            aria-label="Scroll right"
            className="hidden md:flex shrink-0 w-10 h-10 items-center justify-center rounded-full bg-white shadow-md text-navy hover:bg-primary hover:text-white transition-colors duration-200"
          >
            <ChevronRight size={20} />
          </button>
        </div>

        {/* Dot indicators */}
        <div
          className="fade-up flex justify-center gap-2"
          style={{ transitionDelay: "200ms" }}
        >
          {HIGHLIGHT_CARDS.map((_, i) => (
            <span
              key={i}
              className={`w-2 h-2 rounded-full transition-colors duration-200 ${
                i === activeIndex ? "bg-primary" : "bg-navy/20"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Dialog */}
      <Dialog open={!!openCard} onOpenChange={(open) => !open && setOpenCard(null)}>
        <DialogContent className="max-w-lg">
          {openCard && (
            <>
              <div className="relative w-full h-56 rounded-xl overflow-hidden">
                <Image
                  src={openCard.img}
                  alt={openCard.title}
                  fill
                  className="object-cover"
                  sizes="512px"
                />
              </div>
              <DialogHeader>
                <DialogTitle className="font-heading font-black text-navy text-2xl">
                  {openCard.title}
                </DialogTitle>
                <DialogDescription className="text-navy/70 text-base leading-relaxed">
                  {openCard.story}
                </DialogDescription>
              </DialogHeader>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
