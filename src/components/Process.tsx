// src/components/Process.tsx

const STEPS = [
  {
    num: "1",
    title: "Discover",
    description: "Deep dive into your brand, audience, and goals",
  },
  {
    num: "2",
    title: "Strategise",
    description: "Build the creative roadmap and content plan",
  },
  {
    num: "3",
    title: "Execute",
    description: "Design, write, produce, and iterate with precision",
  },
  {
    num: "4",
    title: "Deliver",
    description: "Launch, measure impact, and refine",
  },
];

export default function Process() {
  return (
    <section id="process" className="bg-navy py-20 md:py-32 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-xs tracking-widest uppercase text-primary font-medium mb-4">
            How I work
          </p>
          <h2 className="font-heading font-black text-5xl md:text-7xl text-white leading-[1.05] tracking-tight">
            The Process
          </h2>
        </div>

        <div className="relative flex flex-col md:flex-row items-start md:items-center justify-between gap-12 md:gap-0">
          {/* Connector line — desktop only */}
          <div
            className="hidden md:block absolute top-8 left-0 right-0 h-px border-t-2 border-dashed border-primary/40"
            aria-hidden="true"
          />

          {STEPS.map((step, i) => (
            <div
              key={step.num}
              className="fade-up relative z-10 flex flex-col items-center text-center gap-4 flex-1"
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center shadow-lg shadow-primary/30">
                <span className="font-heading font-black text-white text-xl">
                  {step.num}
                </span>
              </div>
              <div>
                <h3 className="font-heading font-bold text-white text-lg mb-1">
                  {step.title}
                </h3>
                <p className="text-white/60 text-sm leading-relaxed max-w-[180px]">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
