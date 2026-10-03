import Link from 'next/link';
import { Twitter, Instagram, Facebook, Linkedin, Youtube } from 'lucide-react';

const footerLinks = {
  products: [
    { label: 'Branded Portal', href: '#' },
    { label: 'Onboarding', href: '#' },
    { label: 'Support Deflection', href: '#' },
    { label: 'Cross-Sells', href: '#' },
    { label: 'Integrations Directory', href: '#' },
  ],
  features: [
    { label: 'Real-time Order Tracking', href: '#' },
    { label: 'Automated WISMO Deflection', href: '#' },
    { label: 'Smart Replenishment Alerts', href: '#' },
    { label: 'Contextual FAQs & Setup', href: '#' },
    { label: 'Custom Domain Hosting', href: '#' },
    { label: 'Analytics & Insights', href: '#' },
    { label: 'Brand Personalization Engine', href: '#' },
  ],
  integrations: [
    { label: 'Shopify', href: '#' },
    { label: 'WooCommerce', href: '#' },
    { label: 'Klaviyo', href: '#' },
    { label: 'Zendesk', href: '#' },
    { label: 'Salesforce Cloud', href: '#' },
    { label: 'Magento', href: '#' },
    { label: 'All integrations', href: '#' },
  ],
  resources: [
    { label: 'Book a Demo', href: '#' },
    { label: 'ROI Calculator', href: '#' },
    { label: 'Product tour', href: '#' },
    { label: "What's new", href: '#' },
    { label: 'Getting started guide', href: '#' },
    { label: 'Post-Purchase Benchmarks', href: '#' },
    { label: 'Developer Documentation', href: '#' },
  ],
  solutions: [
    { label: 'For Growing Brands', href: '#' },
    { label: 'For Mid-Market E-commerce', href: '#' },
    { label: 'For Enterprise & Omnichannel', href: '#' },
  ],
  support: [
    { label: 'Help center', href: '#' },
    { label: 'Learning hub', href: '#' },
    { label: 'Contact support', href: '#' },
    { label: 'Contact sales', href: '#' },
  ],
  company: [
    { label: 'About us', href: '#' },
    { label: 'Careers', href: '#' },
    { label: 'Become a partner', href: '#' },
    { label: 'Blog', href: '#' },
  ],
};

export function Footer() {
  return (
    <footer className="bg-[#0F1B2E] text-white py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Brand and Links Container */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-6 gap-y-10 md:gap-x-8 lg:gap-y-12 mb-16">
          {/* Brand */}
          <div className="col-span-2 md:col-span-3 lg:col-span-1 lg:row-span-2">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <img
                src="/images/logo.svg"
                alt="Invotools Engage"
                className="h-10 w-auto"
              />
              <span className="font-semibold text-lg">Engage</span>
            </Link>
            <h3 className="text-3xl lg:text-4xl font-light leading-tight max-w-xs">
              Make every order matter.
            </h3>
          </div>

          {/* First Row: Products, Integrations, Resources, Features */}
          {/* Products */}
          <div>
            <h4 className="font-semibold text-white mb-4">Products</h4>
            <ul className="space-y-2">
              {footerLinks.products.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Integrations */}
          <div>
            <h4 className="font-semibold text-white mb-4">Integrations</h4>
            <ul className="space-y-2">
              {footerLinks.integrations.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold text-white mb-4">Resources</h4>
            <ul className="space-y-2">
              {footerLinks.resources.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Features */}
          <div>
            <h4 className="font-semibold text-white mb-4">Features</h4>
            <ul className="space-y-2">
              {footerLinks.features.slice(0, 3).map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Second Row: Solutions, Support, Company */}
          {/* Solutions */}
          <div>
            <h4 className="font-semibold text-white mb-4">Solutions</h4>
            <ul className="space-y-2">
              {footerLinks.solutions.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold text-white mb-4">Support</h4>
            <ul className="space-y-2">
              {footerLinks.support.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-white mb-4">Company</h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 mb-8"></div>

        {/* Bottom section */}
        <div className="flex flex-col lg:flex-row justify-between items-center gap-8">
          {/* Left - Legal links */}
          <div className="flex flex-wrap gap-6 text-sm text-gray-400">
            <Link href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-white transition-colors">
              Legal
            </Link>
            <Link href="#" className="hover:text-white transition-colors">
              Status
            </Link>
            <Link href="#" className="hover:text-white transition-colors">
              Cookie Settings
            </Link>
          </div>

          {/* Right - Social icons and copyright */}
          <div className="flex flex-col items-center gap-4">
            <p className="text-sm text-gray-400">Join us on social</p>
            <div className="flex gap-4">
              <Link
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </Link>
              <Link
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </Link>
              <Link
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </Link>
              <Link
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </Link>
              <Link
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Youtube className="w-5 h-5" />
              </Link>
            </div>
          </div>

          {/* Copyright */}
          <div className="text-sm text-gray-400">
            © Copyright Invotools 2026
          </div>
        </div>
      </div>
    </footer>
  );
}
