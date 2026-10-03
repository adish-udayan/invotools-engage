'use client';

import { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { ScrollBlurText } from '@/components/scroll-blur-text';

const HERO_IMAGE_URL = '/images/Connected-Lifestyle-Experience.jpg';

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      setScrollProgress(
        Math.min(window.scrollY / (sectionRef.current.offsetHeight * 0.5), 1),
      );
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scale = 1 - scrollProgress * 0.05;

  return (
    <section ref={sectionRef} className="relative overflow-hidden bg-white">
      <div className="mx-auto grid max-w-screen-2xl gap-10 px-6 pt-28 pb-16 sm:px-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)] lg:items-stretch lg:gap-16 lg:px-14 lg:pt-32 lg:pb-24 xl:px-16 2xl:px-20">
        <div className="flex flex-col justify-center">
          <p className="mb-6 text-sm font-semibold uppercase tracking-tight text-[#0b1d35]">
            Post-Purchase Customer Engagement Platform for Commerce Brands and
            Retailers
          </p>
          <ScrollBlurText
            text="Turn every purchase into an opportunity for repeat revenue and stronger customer relationships."
            className="mb-8 max-w-xl font-serif text-2xl font-bold leading-[1.1] tracking-[-0.045em] text-[#0b1d35] text-balance sm:text-3xl lg:text-4xl xl:text-5xl"
            disableTransition={true}
            disableBlur={true}
          />
          <p className="mb-4 max-w-2xl text-base leading-relaxed text-[#111827] sm:text-lg">
            InvoTools Engage connects purchase information, helpful guidance,
            and relevant recommendations in one branded experience—helping
            customers get more from their purchase, creating opportunities for
            repeat sales, and reducing the need to contact support for routine
            questions.
          </p>
          <p className="mb-9 max-w-2xl text-base font-bold leading-relaxed text-[#111827] sm:text-lg">
            Build on your existing commerce, messaging, and customer tools.
            Connect the post-purchase journey around them.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row">
            <Button
              size="lg"
              className="rounded-full bg-[#0b1d35] px-8 py-6 text-base text-white hover:bg-[#163458] group"
            >
              Book a Demo
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="rounded-full border-[#0b1d35] px-8 py-6 text-base text-[#0b1d35] hover:bg-[#eef2f6]"
            >
              See How It Works
            </Button>
          </div>
        </div>

        {/* Image is absolutely positioned so it adds no height: the row height comes from the text column alone. */}
        <div
          className="relative aspect-4/3 overflow-hidden rounded-3xl transition-transform duration-100 lg:aspect-auto"
          style={{ transform: `scale(${scale})` }}
        >
          <img
            src={HERO_IMAGE_URL}
            alt="Customer engaging with a mobile commerce experience"
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
