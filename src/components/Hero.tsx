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
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
      <div className="relative z-10 w-full max-w-7xl mx-auto pl-6 lg:pl-16">
        <div className="flex flex-col gap-6 justify-center min-h-screen py-32 md:py-0 md:w-1/2">
          <div className="w-full max-w-xs mb-2">
            <video
              autoPlay
              loop
              muted
              playsInline
              ref={(el) => {
                if (el) el.playbackRate = 0.25;
              }}
              style={{
                width: '100%',
                height: 'auto',
                display: 'block',
              }}
            >
              <source src="/images/ami-logo-animation.webm" type="video/webm" />
              <source src="/images/ami-logo-animation.mp4" type="video/mp4" />
            </video>
          </div>
          <div style={{ height: 'clamp(160px, 22vw, 260px)', minHeight: 'clamp(160px, 22vw, 260px)', overflow: 'hidden', display: 'block' }}>
            <TextScramble
              duration={1.5}
              speed={0.05}
              trigger={trigger}
              onScrambleComplete={handleScrambleComplete}
              className="text-5xl md:text-6xl lg:text-7xl font-black leading-[1.1] tracking-tight"
            >
              Content with Heart &amp; Hustle ❤️ + 💪
            </TextScramble>
          </div>
          <p className="fade-up text-base md:text-lg font-medium leading-relaxed text-navy/70 max-w-md">
            I&apos;m Nia Bheda. I help purpose-driven brands stand out and scale
            with creative strategy and storytelling that truly connects.
          </p>
          <div className="fade-up flex flex-col sm:flex-row gap-4 mt-4" style={{ transitionDelay: "150ms" }}>
            <MagneticButton href="#contact" variant="pink">
              Let&apos;s Chat
            </MagneticButton>
            <MagneticButton href="#work">
              View Work
            </MagneticButton>
          </div>
        </div>
      </div>
      <div className="hidden md:block absolute right-0 top-0 h-full z-0" style={{ width: '50vw' }}>
        <HeroGraphic />
      </div>
    </section>
  );
}
