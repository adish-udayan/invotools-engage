import Link from 'next/link';
import { Linkedin, Youtube } from 'lucide-react';

const footerLinks = [
  { label: 'Customer Journey', href: '/#customer-journey' },
  { label: 'How It Works', href: '/#how-it-works' },
  { label: 'How It Fits', href: '/#how-it-fits' },
  { label: 'Business Value', href: '/#business-value' },
  { label: 'FAQ', href: '/#faq' },
];

export function Footer() {
  return (
    <footer className="bg-[#0F1B2E] text-white py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-12">
          {/* Brand Section */}
          <div>
            <Link href="/" className="flex items-center gap-3 mb-4">
              <img
                src="/images/logo.svg"
                alt="Invotools Engage"
                className="h-8 w-auto"
              />
              <span className="font-semibold text-sm">Engage</span>
            </Link>
            <h3 className="text-lg lg:text-xl font-light leading-tight max-w-xs">
              Make every order matter.
            </h3>
          </div>

          {/* Center Links */}
          <nav className="flex flex-col gap-3 md:col-span-1">
            {footerLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-sm text-gray-400 hover:text-white transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Social Icons */}
          <div className="flex flex-col gap-3">
            <Link
              href="https://www.linkedin.com/company/invotools/posts/?feedView=all"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors inline-flex items-center gap-2"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
              <span className="text-sm">LinkedIn</span>
            </Link>
            <Link
              href="https://www.youtube.com/@InvoTools"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors inline-flex items-center gap-2"
              aria-label="YouTube"
            >
              <Youtube className="w-5 h-5" />
              <span className="text-sm">YouTube</span>
            </Link>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700"></div>

        {/* Copyright and Legal */}
        <div className="mt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs md:text-sm text-gray-400">
          <p>© Copyright Invotools 2026</p>
          <div className="flex gap-6">
            <Link href="/privacy-policy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/cookie-policy" className="hover:text-white transition-colors">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
