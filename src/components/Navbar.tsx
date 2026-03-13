"use client";

import { useState, useEffect } from "react";

const NAV_LINKS = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#portfolio", label: "Work" },
  { href: "#highlights", label: "Highlights" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const onScroll = () => {
      const sections = document.querySelectorAll("section[id]");
      let current = "";
      sections.forEach((s) => {
        if (window.scrollY >= (s as HTMLElement).offsetTop - 100) {
          current = s.id;
        }
      });
      setActiveSection(current);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-cream/90 backdrop-blur-md border-b border-navy/10 transition-all">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 lg:px-10 py-4">
          <a href="#hero" className="flex items-center gap-3 text-navy">
            <div className="w-8 h-8 text-primary">
              <svg
                fill="currentColor"
                viewBox="0 0 48 48"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M36.7273 44C33.9891 44 31.6043 39.8386 30.3636 33.69C29.123 39.8386 26.7382 44 24 44C21.2618 44 18.877 39.8386 17.6364 33.69C16.3957 39.8386 14.0109 44 11.2727 44C7.25611 44 4 35.0457 4 24C4 12.9543 7.25611 4 11.2727 4C14.0109 4 16.3957 8.16144 17.6364 14.31C18.877 8.16144 21.2618 4 24 4C26.7382 4 29.123 8.16144 30.3636 14.31C31.6043 8.16144 33.9891 4 36.7273 4C40.7439 4 44 12.9543 44 24C44 35.0457 40.7439 44 36.7273 44Z" />
              </svg>
            </div>
            <span className="text-xl font-heading font-bold tracking-tight">
              AMI Creative
            </span>
          </a>
          <nav className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                className={`text-sm font-semibold hover:text-primary transition-colors ${
                  activeSection === link.href.slice(1) ? "text-primary" : ""
                }`}
                href={link.href}
              >
                {link.label}
              </a>
            ))}
          </nav>
          <a
            href="#contact"
            className="hidden md:flex min-w-[120px] cursor-pointer items-center justify-center rounded-full h-11 px-6 bg-primary text-white text-sm font-heading font-bold shadow-md hover:bg-primary/90 transition-all"
          >
            Let&apos;s Chat
          </a>
          <button
            className="md:hidden p-2 text-navy"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            <span className="material-symbols-outlined text-3xl">menu</span>
          </button>
        </div>
        {mobileOpen && (
          <div className="md:hidden bg-cream border-t border-navy/10 px-6 py-4">
            <nav className="flex flex-col gap-4">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  className="text-sm font-semibold hover:text-primary transition-colors"
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                className="flex items-center justify-center rounded-full h-11 px-6 bg-primary text-white text-sm font-heading font-bold mt-2"
                onClick={() => setMobileOpen(false)}
              >
                Let&apos;s Chat
              </a>
            </nav>
          </div>
        )}
      </header>
      <div className="h-[72px]" />
    </>
  );
}
