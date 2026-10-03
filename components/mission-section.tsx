'use client';

import { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export function MissionSection() {
  const sectionRef = useRef<HTMLElement>(null);

  // Animation disabled - all text animations removed from landing page

  return (
    <section ref={sectionRef} id="mission" className="py-24 lg:py-32 px-6">
      <div className="relative max-w-7xl mx-auto rounded-[48px] overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="/images/mission-background.png"
            alt="Nature background"
            className="w-full h-full object-cover"
          />
          {/* Dark overlay for text readability */}
          <div className="absolute inset-0 bg-foreground/50" />

          <div className="absolute inset-y-0 right-0 w-1/2 bg-gradient-to-l from-background/0 to-transparent backdrop-blur-[2px]" />
          <div className="absolute inset-y-0 right-0 w-1/2 bg-gradient-to-l from-background/0 to-transparent backdrop-blur-[8px] opacity-60" />
          <div className="absolute inset-y-0 right-0 w-1/2 bg-gradient-to-l from-background/0 to-transparent backdrop-blur-[20px] opacity-30" />
        </div>

        {/* Content with padding */}
        <div className="relative px-6 lg:px-8 py-16 lg:py-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Image - removed as we now have background */}
            <div className="reveal order-2 lg:order-1"></div>

            {/* Content */}
            <div className="order-1 lg:order-2">
              <p className="reveal text-sm uppercase tracking-[0.2em] text-accent font-medium mb-4">
                Our Vision
              </p>
              <h2 className="reveal animation-delay-200 font-serif text-xl md:text-2xl lg:text-3xl xl:text-4xl font-medium text-background text-balance mb-8">
                Reconnecting humans with their deep nature
              </h2>
              <div className="reveal animation-delay-400 space-y-6 text-background/90 leading-relaxed">
                <p>
                  At Biometic, we believe that true well-being comes from the
                  harmony between modern science and ancestral wisdom. Our
                  mission is to make accessible a holistic approach to health,
                  based on the latest discoveries in microbiome research.
                </p>
                <p>
                  We are committed to developing solutions that respect natural
                  balances, while providing tangible and lasting results. Each
                  formula is the result of close collaboration between
                  researchers, practitioners, and concerned individuals.
                </p>
              </div>
              <div className="reveal animation-delay-600 mt-10">
                <Button
                  size="lg"
                  className="bg-background text-foreground hover:bg-background/90 rounded-full px-8 group"
                >
                  Discover our story
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
