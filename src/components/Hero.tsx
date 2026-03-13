"use client";

import { useState, useEffect, useCallback } from "react";
import { TextScramble } from "@/components/ui/text-scramble";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { FlickeringGrid } from "@/components/ui/flickering-grid";
import { HeroGraphic } from "@/components/HeroGraphic";

export default function Hero() {
  const [trigger, setTrigger] = useState(true);

  const handleScrambleComplete = useCallback(() => {
    setTrigger(false);
    const timeout = setTimeout(() => setTrigger(true), 2000);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <section id="hero" className="relative min-h-screen flex items-center bg-cream px-6 lg:px-10 overflow-hidden">
      <FlickeringGrid
        className="absolute inset-0 z-0"
        squareSize={4}
        gridGap={6}
        flickerChance={0.3}
        maxOpacity={0.08}
        color="#e75a7c"
      />
      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center w-full min-h-screen px-6 lg:px-10">
        <div className="relative z-10 flex flex-col gap-6 justify-center py-32 md:py-0">
          <div style={{ height: 'clamp(160px, 22vw, 260px)', minHeight: 'clamp(160px, 22vw, 260px)', overflow: 'hidden', display: 'block' }}>
            <TextScramble
              duration={1.5}
              speed={0.05}
              trigger={trigger}
              onScrambleComplete={handleScrambleComplete}
              className="font-heading text-5xl md:text-6xl lg:text-7xl font-black leading-[1.1] tracking-tight"
            >
              Marketing with Heart &amp; Hustle
            </TextScramble>
          </div>
          <p className="text-base md:text-lg font-medium leading-relaxed text-navy/70 max-w-md">
            I&apos;m Nia Bheda. I help purpose-driven brands stand out and scale
            with creative strategy and storytelling that truly connects.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-4">
            <ShimmerButton
              href="#contact"
              background="rgba(231, 90, 124, 1)"
              shimmerColor="#ffffff"
              borderRadius="100px"
              className="px-8 py-3 font-semibold"
            >
              Let&apos;s Chat
            </ShimmerButton>
            <MagneticButton href="#work">
              View Work
            </MagneticButton>
          </div>
        </div>
        <div className="hidden md:block absolute right-0 top-0 h-full w-[55%] z-0">
          <HeroGraphic />
        </div>
      </div>
    </section>
  );
}
