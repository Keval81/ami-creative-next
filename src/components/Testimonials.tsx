const TESTIMONIALS = [
  {
    quote:
      "Nia's work on our brand identity completely transformed how we connect with our audience. Her unique blend of strategic thinking and vibrant design is unparalleled. Highly recommend AMI Creative!",
    name: "Sarah Jenkins",
    role: "CEO, Bloom & Co.",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBIYFML4rgCp1QpYbZQvHiHE5bxWubR2aj6ngzQjF5NL-JfHzW_8qapqUiDYyUipv97i4IpnD8q-RimvyWuJHPdNSG_Jx7JflT0MgQBhKrW2VEJmYrx0cGBOgToJrqL7feeUAXdv_BuYEQ5f346LYWZFK7H1t_FC2erXKa8zVdhxhDG6OtA0Y2rkPgbzAzUBdlOPUPNqZwLSVY40VCoa0Bd4Uy_2oVKe53To0XLbM0AzWnJpSBszgTKogymVr6_R2gz6pu-2FZW7SX6",
    cardClass:
      "lg:-rotate-2 lg:translate-y-4 hover:rotate-0 hover:-translate-y-2",
  },
  {
    quote:
      "The energy and passion Nia brings to every project is unmatched. Our website is now a true reflection of our mission. She didn't just design a site; she crafted an experience for our users.",
    name: "Mark Davis",
    role: "Founder, Elevate Tech",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAPPplmpdRpDDkt7EFGNoXiPjNskZ2oYnlSQZZl78pGhJ89OFrYej6jziDzgulLCaalJ0TXKuaw1c8MayEn8N0qOb8_5M1e-y323Vk4AOQh9ks_VM4jKArox1IWEbEYQtVKllxqIyhYU18ayI5sTXSpxCMBen_RWzbNL1Ir4dybRUJ8XEZs4mHNwB5M7e2fqLwoJvsn3dUn_uk6WipEkRvzq4ovD45DUdfN0YxrNPjGZZykpI1lGc-oHpjvQYDtIZjRmka31x9iZS0w",
    cardClass:
      "lg:rotate-3 lg:-translate-y-6 hover:rotate-0 hover:-translate-y-8",
  },
  {
    quote:
      "Working with AMI Creative was a breeze. Nia understood our vision from day one and delivered beyond our expectations. Her attention to detail and editorial eye gave our campaign the exact edge it needed.",
    name: "Emily Chen",
    role: "Marketing Director, Vibe",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuD8zIpScEcZFnPMZuLS2RwKMJDEs5MJERxjf2mh0zfXPwq6X68TYx61ZCr4nIij42BqFbkXns_-CsMoFDMUmC_I76ZLkpd4J9nohFP2s7QUkP4Tyad-Lb129gZLlBJXAR7hk6Kdy2nsEZU5J8VCywLYBYoNbZu05fhU82mIbBQssFWEQrLH51uI_FcEUeSuZ8NS2Tpex9Tdi15VTBuldzLI8AUBPIHkmK3qRhtFuPY3bX6iNY4ui6MZYOEokQ7B9fbUjjZcH2HQT7ew",
    cardClass:
      "lg:-rotate-1 lg:translate-y-8 hover:rotate-0 hover:-translate-y-0",
  },
];

function FilledStars() {
  return (
    <div className="flex text-xl" style={{ color: "#e75a7c" }}>
      {"★★★★★"}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 md:py-32 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="fade-up mb-16 text-center md:text-left relative z-10">
          <h2 className="font-heading font-black text-5xl md:text-7xl text-navy leading-[1.05] tracking-tight mb-4">
            Client Love
          </h2>
          <p className="text-lg md:text-xl text-navy/70 font-medium leading-relaxed max-w-2xl">
            Hear from the incredible people and brands I&apos;ve had the
            pleasure of partnering with to bring their visions to life.
          </p>
        </div>
        <div className="fade-up grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 relative" style={{ transitionDelay: "150ms" }}>
          {/* Decorative quotes */}
          <span className="material-symbols-outlined absolute -top-10 -left-10 text-[15rem] text-primary/10 -z-10 rotate-12 hidden md:block">
            format_quote
          </span>
          <span className="material-symbols-outlined absolute top-1/2 right-0 text-[20rem] text-primary/10 -z-10 -rotate-12 translate-x-1/4 hidden lg:block">
            format_quote
          </span>
          {TESTIMONIALS.map((t) => (
            <div
              key={t.name}
              className={`flex flex-col gap-6 rounded-xl bg-light-blue p-8 shadow-xl shadow-primary/5 transform ${t.cardClass} transition-all duration-300`}
            >
              <FilledStars />
              <p className="text-base font-medium leading-relaxed flex-grow text-navy">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="flex items-center gap-4 pt-4 border-t border-primary/20">
                <div className="w-12 h-12 rounded-full bg-primary/20 overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    alt={t.name}
                    className="w-full h-full object-cover"
                    src={t.img}
                  />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-sm text-navy">
                    {t.name}
                  </h3>
                  <p className="text-xs text-navy/60">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
