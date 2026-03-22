import { MagneticButton } from "@/components/ui/magnetic-button";

export default function Pricing() {
  return (
    <section id="pricing" className="bg-navy py-20 md:py-32 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="fade-up flex flex-col gap-6">
          <p className="text-xs tracking-widest uppercase text-primary font-medium">Work with me</p>
          <h2 className="font-heading font-black text-5xl md:text-7xl text-white leading-[1.05] tracking-tight">
            Not sure what you need yet?
          </h2>
          <p className="text-white/60 text-lg md:text-xl font-medium leading-relaxed max-w-md">
            Every project is different. Let&apos;s have a 30-minute discovery call — no commitment, just clarity.
          </p>
        </div>
        <div className="fade-up flex flex-col gap-6" style={{ transitionDelay: "150ms" }}>
          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 flex flex-col gap-2">
              <p className="text-xs tracking-widest uppercase text-primary font-medium">One-off Project</p>
              <h3 className="font-heading font-bold text-white text-xl">Project</h3>
              <p className="text-white/50 text-sm leading-relaxed">Fixed scope &amp; price, delivered with care.</p>
            </div>
            <div className="rounded-2xl bg-primary p-6 flex flex-col gap-2 shadow-lg shadow-primary/30">
              <p className="text-xs tracking-widest uppercase text-white/70 font-medium">Ongoing Partnership</p>
              <h3 className="font-heading font-bold text-white text-xl">Retainer</h3>
              <p className="text-white/80 text-sm leading-relaxed">Monthly retainer for consistent creative support.</p>
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
