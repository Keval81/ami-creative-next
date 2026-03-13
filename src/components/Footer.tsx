const FOOTER_NAV = [
  { href: "#hero", label: "Home" },
  { href: "#portfolio", label: "Work" },
  { href: "#services", label: "Services" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

const SOCIALS = [
  { label: "Instagram", icon: "photo_camera", href: "#" },
  { label: "LinkedIn", icon: "work", href: "#" },
  { label: "Twitter", icon: "tag", href: "#" },
  { label: "Email", icon: "mail", href: "mailto:hello@amicreative.com" },
];

export default function Footer() {
  return (
    <footer className="bg-navy text-white relative overflow-hidden">
      {/* Massive wordmark background */}
      <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] pointer-events-none select-none z-0 overflow-hidden">
        <h2 className="text-[30vw] font-heading font-bold leading-none tracking-tighter whitespace-nowrap">
          AMI
        </h2>
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-20 lg:py-32">
        {/* Tagline */}
        <div className="flex flex-col items-center justify-center text-center mb-20 lg:mb-32">
          <h2 className="font-heading text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight max-w-4xl leading-tight">
            Marketing with{" "}
            <span className="text-primary italic font-medium">Heart</span>{" "}
            &amp; Hustle
          </h2>
          <div className="mt-10 h-1 w-24 bg-primary rounded-full" />
        </div>
        {/* Nav & Socials */}
        <div className="flex flex-col lg:flex-row justify-between items-center gap-12 lg:gap-8 pt-12 border-t border-white/10">
          <nav className="flex flex-wrap items-center justify-center lg:justify-start gap-8 lg:gap-12">
            {FOOTER_NAV.map((link) => (
              <a
                key={link.href}
                className="text-slate-300 hover:text-primary transition-colors duration-300 text-sm font-medium uppercase tracking-wider"
                href={link.href}
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-6">
            {SOCIALS.map((s) => (
              <a
                key={s.label}
                aria-label={s.label}
                className="group flex items-center justify-center h-12 w-12 rounded-full bg-white/10 hover:bg-primary transition-colors duration-300"
                href={s.href}
              >
                <span className="material-symbols-outlined text-slate-300 group-hover:text-white transition-colors">
                  {s.icon}
                </span>
              </a>
            ))}
          </div>
        </div>
        {/* Copyright */}
        <div className="mt-12 text-center lg:text-left">
          <p className="text-slate-400 text-sm font-medium tracking-wide uppercase">
            &copy; 2024 AMI Creative Studio. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
