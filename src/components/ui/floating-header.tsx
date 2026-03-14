"use client";

import React from 'react';
import { MagneticButton } from '@/components/ui/magnetic-button';
import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import Link from 'next/link';

export function FloatingHeader() {
  const links = [
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Work', href: '#work' },
    { label: 'Highlights', href: '#highlights' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'Contact', href: '#contact' },
  ];
  return (
    <div className="hidden lg:block">
      <header
        className={cn(
          'fixed top-5 left-1/2 -translate-x-1/2 w-[90%] max-w-5xl z-[5000]',
          'rounded-full border shadow-md',
          'bg-white/90 supports-[backdrop-filter]:bg-white/80 backdrop-blur-lg',
        )}
      >
        <nav className="mx-auto flex items-center justify-between px-4 py-2">
          <Link
            href="/"
            className="flex cursor-pointer items-center gap-2 rounded-md px-2 py-1"
          >
            <svg width="28" height="28" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M36.7273 44C33.9891 44 31.6043 39.8386 30.3636 33.69C29.123 39.8386 26.7382 44 24 44C21.2618 44 18.877 39.8386 17.6364 33.69C16.3957 39.8386 14.0109 44 11.2727 44C7.25611 44 4 35.0457 4 24C4 12.9543 7.25611 4 11.2727 4C14.0109 4 16.3957 8.16144 17.6364 14.31C18.877 8.16144 21.2618 4 24 4C26.7382 4 29.123 8.16144 30.3636 14.31C31.6043 8.16144 33.9891 4 36.7273 4C40.7439 4 44 12.9543 44 24C44 35.0457 40.7439 44 36.7273 44Z"
                fill="#e75a7c"
              />
            </svg>
            <span className="font-heading font-bold text-navy text-sm">
              AMI Creative
            </span>
          </Link>

          <div className="flex items-center gap-1">
            {links.map((link) => (
              <a
                key={link.href}
                className={buttonVariants({ variant: 'ghost', size: 'sm' })}
                href={link.href}
                style={{ color: '#2e2d4d', fontFamily: 'DM Sans, sans-serif' }}
              >
                {link.label}
              </a>
            ))}
          </div>

          <MagneticButton
            href="#contact"
            className="text-sm px-4 py-2"
            variant="pink"
          >
            Let&apos;s Chat
          </MagneticButton>
        </nav>
      </header>
    </div>
  );
}
