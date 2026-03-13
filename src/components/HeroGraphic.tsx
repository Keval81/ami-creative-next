"use client";
import { useEffect, useState } from "react";

const BG_IMAGES = [
  "/images/bg-bigben.jpg",
  "/images/bg-bananaman.jpg",
  "/images/bg-dangermouse.jpg",
  "/images/bg-london.jpg",
  "/images/bg-duckula.jpg",
  "/images/bg-graffiti.jpg",
  "/images/bg-towerbridge.jpg",
  "/images/bg-rolandrat.jpg",
  "/images/bg-london90s.jpg",
  "/images/bg-london2000s.jpg",
  "/images/bg-carnival.jpg",
  "/images/bg-pub.jpg",
  "/images/bg-portobello.jpg",
  "/images/bg-londonkids.jpg",
];

export function HeroGraphic() {
  const [bgIndex, setBgIndex] = useState(0);

  // Fast flashing background — every 120ms
  useEffect(() => {
    const interval = setInterval(() => {
      setBgIndex((prev) => (prev + 1) % BG_IMAGES.length);
    }, 120);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-full">
      {BG_IMAGES.map((src, i) => (
        <div
          key={src}
          className="absolute inset-0 bg-cover bg-center transition-none"
          style={{
            backgroundImage: `url(${src})`,
            opacity: i === bgIndex ? 1 : 0,
          }}
        />
      ))}
      <div className="absolute inset-0 z-10 pointer-events-none"
        style={{ background: 'linear-gradient(to right, #f5ece6 0%, #f5ece6 10%, rgba(245,236,230,0.7) 40%, transparent 70%)' }}
      />
      <div className="absolute inset-0 z-10 pointer-events-none"
        style={{ background: 'linear-gradient(to bottom, #f5ece6 0%, transparent 15%)' }}
      />
      <div className="absolute inset-0 z-10 pointer-events-none"
        style={{ background: 'linear-gradient(to top, #f5ece6 0%, transparent 20%)' }}
      />
    </div>
  );
}
