import { MagneticButton } from "@/components/ui/magnetic-button";

export default function About() {
  return (
    <section id="about" className="py-20 md:py-32 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="relative w-full max-w-md mx-auto lg:max-w-none">
          <div className="absolute inset-0 bg-light-blue rounded-[2rem] transform -rotate-3 scale-105 z-0 transition-transform hover:rotate-0 duration-500 ease-in-out" />
          <div className="relative z-10 aspect-[4/5] w-full rounded-[1.5rem] overflow-hidden shadow-xl shadow-navy/10 border-4 border-white">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <div
              className="w-full h-full bg-slate-200 bg-cover bg-center"
              style={{
                backgroundImage: `url('/images/nia-portrait.png')`,
              }}
              role="img"
              aria-label="Portrait of Nia Bheda"
            />
          </div>
          <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-lg border border-primary/10 z-20 transform rotate-6 hidden sm:block">
            <p className="text-primary font-heading font-bold text-lg leading-none">
              Heart &amp; Hustle
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-10">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 border-b border-navy/10 pb-8">
            <div className="flex flex-col items-start gap-1">
              <h3 className="text-3xl font-heading font-black text-primary leading-none tracking-tighter">
                1st Class
              </h3>
              <p className="text-sm font-medium text-slate-600 uppercase tracking-widest">
                BA Hons Degree
              </p>
            </div>
            <div className="flex flex-col items-start gap-1">
              <h3 className="text-3xl font-heading font-black text-primary leading-none tracking-tighter">
                5+
              </h3>
              <p className="text-sm font-medium text-slate-600 uppercase tracking-widest">
                Industries
              </p>
            </div>
            <div className="flex flex-col items-start gap-1">
              <h3 className="text-3xl font-heading font-black text-primary leading-none tracking-tighter">
                3+
              </h3>
              <p className="text-sm font-medium text-slate-600 uppercase tracking-widest">
                Years Exp.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <h2 className="fade-up font-heading font-black text-5xl md:text-7xl text-navy leading-[1.05] tracking-tight">
              Hi, I&apos;m Nia.
            </h2>
            <div className="fade-up flex flex-col gap-4 text-lg md:text-xl text-navy/70 font-medium leading-relaxed max-w-2xl" style={{ transitionDelay: "150ms" }}>
              <p>
                Welcome to my portfolio! I&apos;m Nia Bheda, a creative
                professional passionate about bringing bold ideas to life with
                precision and flair.
              </p>
              <p>
                With a unique blend of heart and hustle, I strive to deliver
                exceptional, tailored results across various dynamic industries,
                ensuring every project not only meets but exceeds expectations.
              </p>
            </div>
          </div>
          <div className="fade-up pt-4" style={{ transitionDelay: "300ms" }}>
            <MagneticButton href="#contact">
              Get Started
            </MagneticButton>
          </div>
        </div>
      </div>
    </section>
  );
}
