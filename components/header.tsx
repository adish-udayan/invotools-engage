'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

// Each href must match a section id on the homepage.
const navItems = [
  { label: 'Customer Journey', href: '#customer-journey' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'How It Fits', href: '#how-it-fits' },
  { label: 'Business Value', href: '#business-value' },
  { label: 'FAQ', href: '#faq' },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-6 pb-6 pt-2">
      <nav className="max-w-7xl mx-auto bg-background/80 backdrop-blur-md border border-border/50 rounded-3xl shadow-lg">
        <div className="flex items-center justify-between h-20 px-6 lg:px-8">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <img
              src="/images/logo.svg"
              alt="Invotools Engage"
              className="h-8 w-auto"
            />
            <span className="font-serif text-foreground text-lg font-normal">
              Engage
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8 xl:gap-10">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Button
              asChild
              className="rounded-full bg-[#0b1d35] px-8 py-2 text-sm text-white hover:bg-[#163458] font-medium"
            >
              <Link href="#book-a-demo">Book a Demo</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden py-6 px-6 lg:px-8 border-t border-border/50">
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-lg text-muted-foreground hover:text-foreground transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <Button
                asChild
                className="rounded-full bg-[#0b1d35] w-full mt-4 text-white hover:bg-[#163458] font-medium"
              >
                <Link href="#book-a-demo" onClick={() => setIsOpen(false)}>
                  Book a Demo
                </Link>
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
