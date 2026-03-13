"use client";

import React from 'react';
import { MenuContainer, MenuItem } from '@/components/ui/fluid-menu';
import { ShimmerButton } from '@/components/ui/shimmer-button';
import { UserIcon, BriefcaseIcon, StarIcon, MessageCircleIcon, MessageSquareIcon, MenuIcon } from 'lucide-react';
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
    <>
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
              <svg width="28" height="28" viewBox="0 0 48 48" fill="none">
                <path
                  d="M36.7273 44C33.9891 44 31.6043 39.8386 30.3636 33.69C29.123 39.8386 26.7382 44 24 44C21.2618 44 18.877 39.8386 17.6364 33.69C16.3957 39.8386 14.0109 44 11.2727 44C7.25611 44 4 35.0457 4 24C4 12.9543 7.25611 4 11.2727 4C14.0109 4 16.3957 8.16144 17.6364 14.31C18.877 8.16144 21.2618 4 24 4C26.7382 4 29.123 8.16144 30.3636 14.31C31.6043 8.16144 33.9891 4 36.7273 4C40.7439 4 44 12.9543 44 24C44 35.0457 40.7439 44 36.7273 44Z"
                  fill="#e75a7c"
                />
              </svg>
              <span
                className="font-bold text-base whitespace-nowrap"
                style={{ color: '#2e2d4d', fontFamily: 'Poppins, sans-serif' }}
              >
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

            <ShimmerButton
              href="#contact"
              background="rgba(231, 90, 124, 1)"
              shimmerColor="#ffffff"
              borderRadius="100px"
              className="text-sm font-medium px-4 py-2"
            >
              Let&apos;s Chat
            </ShimmerButton>
          </nav>
        </header>
      </div>

      <div className="lg:hidden fixed top-5 right-5 z-[5000]">
        <MenuContainer>
          <MenuItem icon={<MenuIcon className="w-5 h-5" />} />
          <MenuItem
            icon={<UserIcon className="w-5 h-5" />}
            label="About"
            onClick={() => { window.location.href='#about'; }}
          />
          <MenuItem
            icon={<BriefcaseIcon className="w-5 h-5" />}
            label="Services"
            onClick={() => { window.location.href='#services'; }}
          />
          <MenuItem
            icon={<StarIcon className="w-5 h-5" />}
            label="Highlights"
            onClick={() => { window.location.href='#highlights'; }}
          />
          <MenuItem
            icon={<MessageCircleIcon className="w-5 h-5" />}
            label="Testimonials"
            onClick={() => { window.location.href='#testimonials'; }}
          />
          <MenuItem
            icon={<MessageSquareIcon className="w-5 h-5" />}
            label="Let's Chat"
            onClick={() => { window.location.href='#contact'; }}
          />
        </MenuContainer>
      </div>
    </>
  );
}
