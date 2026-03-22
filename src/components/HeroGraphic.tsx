export function HeroGraphic() {
  return (
    <div className="relative w-full h-full overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        style={{ filter: "grayscale(80%)" }}
      >
        <source src="/images/ami-logo-animation.webm" type="video/webm" />
        <source src="/images/ami-logo-animation.mp4" type="video/mp4" />
      </video>

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
