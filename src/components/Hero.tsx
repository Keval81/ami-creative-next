"use client";

import { useState, useCallback } from "react";
import { TextScramble } from "@/components/ui/text-scramble";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { HeroGraphic } from "@/components/HeroGraphic";

export default function Hero() {
  const [trigger, setTrigger] = useState(true);

  const handleScrambleComplete = useCallback(() => {
    setTrigger(false);
    const timeout = setTimeout(() => setTrigger(true), 2000);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <section id="hero" className="flex min-h-screen overflow-hidden">
      {/* Left — text content */}
      <div className="relative z-10 flex w-1/2 items-center pl-4 sm:pl-6 lg:pl-16">
        <div className="flex flex-col gap-4 py-24 md:py-0">
          <div
            style={{
              height: "clamp(80px, 14vw, 260px)",
              minHeight: "clamp(80px, 14vw, 260px)",
              overflow: "hidden",
            }}
          >
            <TextScramble
              duration={1.5}
              speed={0.05}
              trigger={trigger}
              onScrambleComplete={handleScrambleComplete}
              className="text-2xl sm:text-4xl md:text-6xl lg:text-7xl font-black leading-[1.1] tracking-tight"
            >
              Content with Heart &amp; Hustle ❤️ + 💪
            </TextScramble>
          </div>
          <p className="fade-up text-xs sm:text-sm md:text-lg font-medium leading-relaxed text-navy/70 max-w-md">
            I&apos;m Nia Bheda. I help purpose-driven brands stand out and
            scale with creative strategy and storytelling that truly connects.
          </p>
          <div
            className="fade-up flex flex-col sm:flex-row gap-3 mt-2"
            style={{ transitionDelay: "150ms" }}
          >
            <MagneticButton href="#contact" variant="pink">
              Let&apos;s Chat
            </MagneticButton>
            <MagneticButton href="#work">View Work</MagneticButton>
          </div>
        </div>
      </div>

      {/* Right — flashing animation */}
      <div className="relative w-1/2 shrink-0">
        <HeroGraphic />
      </div>
    </section>
  );
}
