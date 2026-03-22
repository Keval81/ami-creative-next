import type { Metadata } from "next";
import { Poppins, DM_Sans } from "next/font/google";
import "./globals.css";
import { MobileNav } from "@/components/MobileNav";


const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '600', '700', '900'],
  variable: '--font-heading',
  display: 'swap',
});

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-body',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "AMI Creative — Marketing with Heart & Hustle",
  description:
    "I'm Nia Bheda. I help purpose-driven brands stand out and scale with creative strategy and storytelling that truly connects.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.variable} ${dmSans.variable}`}>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className="antialiased min-h-screen"
      >
        {children}
        <MobileNav />
        <script
          dangerouslySetInnerHTML={{
            __html: `
      const observer = new IntersectionObserver(
        (entries) => entries.forEach(e => e.isIntersecting && e.target.classList.add('visible')),
        { threshold: 0.15 }
      );
      document.addEventListener('DOMContentLoaded', () =>
        document.querySelectorAll('.fade-up').forEach(el => observer.observe(el))
      );
    `,
          }}
        />
      </body>
    </html>
  );
}
