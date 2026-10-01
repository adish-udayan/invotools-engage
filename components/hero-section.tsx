'use client';

import { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { AnimatedText } from '@/components/animated-text';

const HERO_IMAGE_URL =
  'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/6487-yhxzvyigZh7nyt2fKMUQUd2fRz2jtV.jpg';

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const imageContainerRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting)
            entry.target.classList.add('animate-fade-up');
        });
      },
      { threshold: 0.1 },
    );

    const elements = sectionRef.current?.querySelectorAll('.reveal');
    elements?.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

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
  const borderRadius = scrollProgress * 24;

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen overflow-hidden bg-white"
    >
      <div className="grid min-h-screen lg:grid-cols-2">
        <div className="flex items-center px-6 py-28 sm:px-10 lg:px-14 xl:px-16 2xl:px-20">
          <div className="w-full max-w-3xl">
            <p className="reveal mb-6 text-sm font-semibold uppercase tracking-tight text-[#0b1d35] opacity-0 animate-fade-up">
              Post-Purchase Customer Engagement Platform for Commerce Brands and
              Retailers
            </p>
            <h1 className="mb-8 font-serif text-4xl font-bold leading-[1.1] tracking-[-0.045em] text-[#0b1d35] text-balance sm:text-5xl lg:text-6xl xl:text-7xl">
              Turn every purchase into an opportunity for repeat revenue and
              stronger customer relationships.
            </h1>
            <p className="reveal mb-4 max-w-2xl text-base leading-relaxed text-[#111827] opacity-0 animate-fade-up animation-delay-400 sm:text-lg">
              InvoTools Engage connects purchase information, helpful guidance,
              and relevant recommendations in one branded experience—helping
              customers get more from their purchase, creating opportunities for
              repeat sales, and reducing the need to contact support for routine
              questions.
            </p>
            <p className="reveal mb-9 max-w-2xl text-base font-bold leading-relaxed text-[#111827] opacity-0 animate-fade-up animation-delay-400 sm:text-lg">
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
        </div>

        <div
          ref={imageContainerRef}
          className="relative min-h-[520px] overflow-hidden transition-transform duration-100 lg:min-h-screen"
          style={{
            transform: `scale(${scale})`,
            borderRadius: `${borderRadius}px`,
          }}
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
