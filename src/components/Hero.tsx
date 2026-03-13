export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-cream px-6">
      <div className="max-w-4xl mx-auto flex flex-col items-center text-center gap-8">
        <h1 className="font-heading text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black leading-[1.05] tracking-tight text-navy">
          Marketing with <br />
          <span className="relative inline-block">
            Heart &amp; Hustle
            <svg
              className="absolute w-full h-auto left-0 -bottom-2 md:-bottom-4 text-primary opacity-80"
              fill="none"
              viewBox="0 0 300 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2 15C50 5 150 2 298 12"
                stroke="currentColor"
                strokeLinecap="round"
                strokeWidth="4"
              />
            </svg>
          </span>
        </h1>
        <p className="text-lg md:text-xl font-medium leading-relaxed text-navy/70 max-w-2xl">
          I&apos;m Nia Bheda. I help purpose-driven brands stand out and scale
          with creative strategy and storytelling that truly connects.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 mt-4">
          <a
            href="#contact"
            className="flex min-w-[160px] cursor-pointer items-center justify-center rounded-full h-14 px-8 bg-primary text-white text-base font-heading font-bold shadow-lg hover:-translate-y-1 transition-transform duration-300"
          >
            <span className="mr-2">Let&apos;s Chat</span>
            <span className="material-symbols-outlined text-sm">
              arrow_forward
            </span>
          </a>
          <a
            href="#portfolio"
            className="flex min-w-[160px] cursor-pointer items-center justify-center rounded-full h-14 px-8 bg-transparent border-2 border-navy/20 text-navy text-base font-heading font-bold hover:bg-navy/5 transition-colors"
          >
            View Work
          </a>
        </div>
      </div>
    </section>
  );
}
