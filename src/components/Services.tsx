const SERVICES = [
  {
    icon: "brush",
    title: "Brand Identity",
    desc: "Crafting unique visual identities that resonate with your audience and establish a powerful market presence.",
  },
  {
    icon: "devices",
    title: "UI/UX Design",
    desc: "Designing intuitive, accessible, and beautiful user experiences for digital products that drive engagement.",
  },
  {
    icon: "code",
    title: "Web Development",
    desc: "Building responsive, high-performance websites and web applications using modern, scalable technologies.",
  },
  {
    icon: "visibility",
    title: "Creative Direction",
    desc: "Guiding the creative vision for campaigns and brand touchpoints to ensure a cohesive and impactful narrative.",
  },
  {
    icon: "inventory_2",
    title: "Packaging Design",
    desc: "Creating stand-out packaging that tells your product's story and captures attention on any shelf.",
  },
  {
    icon: "animation",
    title: "Motion Graphics",
    desc: "Bringing brands to life with dynamic motion design and animation that captivates and communicates effectively.",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-16 md:py-24 px-6 lg:px-12">
      <div className="max-w-[1200px] mx-auto">
        <div className="flex flex-col items-center justify-center text-center gap-6 mb-20">
          <h2 className="font-heading text-navy text-5xl md:text-7xl font-black leading-tight tracking-tight max-w-4xl">
            What I Do
          </h2>
          <p className="text-navy/70 text-xl md:text-2xl font-medium leading-relaxed max-w-3xl">
            High-end creative services tailored for your brand&apos;s unique
            narrative and ambitious goals.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {SERVICES.map((s) => (
            <div
              key={s.title}
              className="group flex flex-col gap-6 rounded-2xl border-2 border-transparent bg-light-blue p-10 transition-all duration-300 hover:-translate-y-2 hover:border-primary hover:shadow-2xl hover:shadow-primary/10"
            >
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                <span className="material-symbols-outlined text-3xl">
                  {s.icon}
                </span>
              </div>
              <div className="flex flex-col gap-3">
                <h3 className="font-heading text-navy text-2xl font-black leading-tight">
                  {s.title}
                </h3>
                <p className="text-navy/70 text-base leading-relaxed">
                  {s.desc}
                </p>
              </div>
            </div>
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
