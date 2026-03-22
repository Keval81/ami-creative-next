"use client";

import { useEffect, useState } from "react";

const BG_IMAGES = [
  "/images/bg-bigben.jpg",
  "/images/logo-graffiti-1.png",
  "/images/bg-london90s.jpg",
  "/images/logo-graffiti-2.png",
  "/images/bg-bananaman.jpg",
  "/images/logo-graffiti-3.png",
  "/images/bg-dangermouse.jpg",
  "/images/logo-letter-a.png",
  "/images/bg-carnival.jpg",
  "/images/logo-ami-large-1.png",
  "/images/logo-graffiti-5.png",
  "/images/bg-london2000s.jpg",
  "/images/logo-letter-m.png",
  "/images/bg-duckula.jpg",
  "/images/bg-portobello.jpg",
  "/images/bg-w3bus.jpg",
  "/images/logo-letter-i.png",
  "/images/bg-pub.jpg",
  "/images/logo-ami-large-2.png",
  "/images/bg-towerbridge.jpg",
  "/images/bg-rolandrat.jpg",
  "/images/bg-graffiti.jpg",
  "/images/bg-londonkids.jpg",
];

const isLogoImage = (src: string) =>
  src.includes("logo-graffiti") ||
  src.includes("logo-ami-large") ||
  src.includes("logo-letter");

export function HeroGraphic() {
  const [bgIndex, setBgIndex] = useState(0);
  const [imagesLoaded, setImagesLoaded] = useState(false);

  useEffect(() => {
    // Preload the first few images before starting the animation
    let loaded = 0;
    const toPreload = BG_IMAGES.slice(0, 4);
    toPreload.forEach((src) => {
      const img = new Image();
      img.onload = () => {
        loaded++;
        if (loaded >= toPreload.length) setImagesLoaded(true);
      };
      img.onerror = () => {
        loaded++;
        if (loaded >= toPreload.length) setImagesLoaded(true);
      };
      img.src = src;
    });
  }, []);

  useEffect(() => {
    if (!imagesLoaded) return;
    const interval = setInterval(() => {
      setBgIndex((prev) => (prev + 1) % BG_IMAGES.length);
    }, 120);
    return () => clearInterval(interval);
  }, [imagesLoaded]);

  return (
    <div
      className="relative w-full h-full bg-cream"
      style={{ opacity: imagesLoaded ? 1 : 0, transition: "opacity 0.3s ease" }}
    >
      {BG_IMAGES.map((src, i) =>
        isLogoImage(src) ? (
          <div
            key={src}
            className="absolute inset-0 transition-none"
            style={{ opacity: i === bgIndex ? 1 : 0 }}
          >
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `url(/images/bg-graffiti.jpg)`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                filter: "grayscale(100%) brightness(0.4)",
              }}
            />
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `url(${src})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundColor: "transparent",
              }}
            />
          </div>
        ) : (
          <div
            key={src}
            className="absolute inset-0 transition-none"
            style={{
              backgroundImage: `url(${src})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              opacity: i === bgIndex ? 1 : 0,
              filter: "grayscale(100%)",
            }}
          />
        )
      )}

      {/* Left torn edge */}
      <svg
        className="absolute left-0 top-0 z-20 pointer-events-none"
        style={{ width: "100px", height: "100%", overflow: "visible" }}
        viewBox="0 0 100 800"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <filter
            id="tear-left"
            x="-50%"
            y="0%"
            width="200%"
            height="100%"
            colorInterpolationFilters="sRGB"
          >
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.025"
              numOctaves={3}
              seed={5}
              result="noise"
            />
            <feDisplacementMap
              in="SourceGraphic"
              in2="noise"
              scale={22}
              xChannelSelector="R"
              yChannelSelector="G"
              result="displaced"
            />
          </filter>
        </defs>
        <rect
          x="-20"
          y="-10"
          width="85"
          height="820"
          fill="#f5ece6"
          filter="url(#tear-left)"
        />
      </svg>

      {/* Bottom torn edge */}
      <svg
        className="absolute bottom-0 left-0 z-20 pointer-events-none"
        style={{ width: "100%", height: "80px", overflow: "visible" }}
        viewBox="0 0 1000 80"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <filter
            id="tear-bottom"
            x="0%"
            y="-50%"
            width="100%"
            height="200%"
            colorInterpolationFilters="sRGB"
          >
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.025"
              numOctaves={3}
              seed={9}
              result="noise"
            />
            <feDisplacementMap
              in="SourceGraphic"
              in2="noise"
              scale={22}
              xChannelSelector="R"
              yChannelSelector="G"
            />
          </filter>
        </defs>
        <rect
          x="-10"
          y="35"
          width="1020"
          height="60"
          fill="#f5ece6"
          filter="url(#tear-bottom)"
        />
      </svg>
    </div>
  );
}
