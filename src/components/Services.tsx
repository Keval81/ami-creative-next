import { CardHoverReveal, CardHoverRevealMain, CardHoverRevealContent } from "@/components/ui/card-hover-reveal";

const SERVICES = [
  {
    icon: "brush",
    title: "Brand Identity",
    desc: "Crafting unique visual identities that resonate with your audience and establish a powerful market presence.",
    image: "/images/service-brand-identity.png",
  },
  {
    icon: "devices",
    title: "UI/UX Design",
    desc: "Designing intuitive, accessible, and beautiful user experiences for digital products that drive engagement.",
    image: "/images/service-uiux.png",
  },
  {
    icon: "code",
    title: "Web Development",
    desc: "Building responsive, high-performance websites and web applications using modern, scalable technologies.",
    image: "/images/service-web-dev.png",
  },
  {
    icon: "visibility",
    title: "Creative Direction",
    desc: "Guiding the creative vision for campaigns and brand touchpoints to ensure a cohesive and impactful narrative.",
    image: "/images/service-creative-direction.png",
  },
  {
    icon: "inventory_2",
    title: "Packaging Design",
    desc: "Creating stand-out packaging that tells your product's story and captures attention on any shelf.",
    image: "/images/service-packaging.png",
  },
  {
    icon: "motion_photos_on",
    title: "Motion Graphics",
    desc: "Bringing brands to life with dynamic motion design and animation that captivates and communicates effectively.",
    image: "/images/service-motion.png",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 md:py-32 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="fade-up flex flex-col items-center justify-center text-center gap-6 mb-20">
          <h2 className="font-heading font-black text-5xl md:text-7xl text-navy leading-[1.05] tracking-tight max-w-4xl">
            What I Do
          </h2>
          <p className="text-lg md:text-xl text-navy/70 font-medium leading-relaxed max-w-3xl">
            High-end creative services tailored for your brand&apos;s unique
            narrative and ambitious goals.
          </p>
        </div>
        <div className="fade-up grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 justify-items-center" style={{ transitionDelay: "150ms" }}>
          {SERVICES.map((s) => (
            <CardHoverReveal key={s.title} className="rounded-2xl h-72 w-full cursor-pointer">
              <CardHoverRevealMain className="rounded-2xl">
                <div
                  className="h-full w-full rounded-2xl bg-cover bg-center"
                  style={{ backgroundImage: `url('${s.image}')` }}
                />
              </CardHoverRevealMain>
              <CardHoverRevealContent className="rounded-xl" style={{ backgroundColor: 'rgba(46, 45, 77, 0.92)' }}>
                <h3 className="text-lg font-bold text-white mb-2">{s.title}</h3>
                <p className="text-sm leading-relaxed text-white/80">{s.desc}</p>
              </CardHoverRevealContent>
            </CardHoverReveal>
          ))}
        </div>
        {/* CTA banner */}
        <div className="mt-24 px-4">
          <div className="bg-navy rounded-[2.5rem] p-12 md:p-24 flex flex-col items-center text-center gap-10 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-3xl -mr-32 -mt-32" />
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary/10 rounded-full blur-3xl -ml-40 -mb-40" />
            <h2 className="font-heading text-white text-4xl md:text-6xl font-black leading-tight tracking-tight max-w-2xl relative z-10">
              Ready to elevate your brand&apos;s presence?
            </h2>
            <p className="text-light-blue text-lg md:text-xl font-medium max-w-xl relative z-10">
              Let&apos;s collaborate to create something truly exceptional. Drop
              me a line to discuss your next big project.
            </p>
            <a
              href="#contact"
              className="relative z-10 mt-4 flex min-w-[140px] cursor-pointer items-center justify-center rounded-full h-14 px-10 bg-primary hover:bg-white hover:text-navy transition-all duration-300 text-white text-lg font-heading font-bold tracking-wide shadow-lg shadow-primary/30"
            >
              Start a Project
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
