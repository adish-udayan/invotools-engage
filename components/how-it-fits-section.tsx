'use client';

import { useRef } from 'react';
import { ScrollBlurText } from './scroll-blur-text';

export function HowItFitsSection() {
  const sectionRef = useRef<HTMLElement>(null);

  return (
    <section
      ref={sectionRef}
      id="how-it-fits"
      className="py-24 lg:py-32 bg-background"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20 lg:mb-24">
          <p className="reveal text-sm uppercase tracking-[0.2em] text-foreground font-bold mb-6">
            How it fits
          </p>
          <ScrollBlurText
            text="Connect your commerce systems to the next customer opportunity"
            className="font-serif text-xl md:text-2xl lg:text-3xl xl:text-4xl text-[#122A45] text-balance mb-6 font-bold max-w-4xl mx-auto"
            disableTransition={true}
            disableBlur={true}
          />
        </div>

        {/* Diagram */}
        <div className="reveal animation-delay-200 grid lg:grid-cols-[1fr_auto_1fr] items-center gap-y-16 gap-x-0 mb-20">
          {/* Left column: two labels stacked */}
          <div className="flex flex-col justify-between gap-20 h-full order-2 lg:order-1">
            <div className="flex items-center gap-4">
              <div className="max-w-70 shrink-0">
                <h3 className="font-semibold text-foreground mb-2">
                  Your branded customer portal
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Find guidance, access support, discover benefits and take
                  relevant next steps
                </p>
              </div>
              <div className="hidden lg:block flex-1 -mr-6 border-t-2 border-dotted border-foreground/40" />
            </div>
            <div className="flex items-center gap-4">
              <div className="max-w-70 shrink-0">
                <h3 className="font-semibold text-foreground mb-2">
                  Your existing systems
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Purchase information, product content and customer services
                </p>
              </div>
              <div className="hidden lg:block flex-1 -mr-6 border-t-2 border-dotted border-foreground/40" />
            </div>
          </div>

          {/* Center image */}
          <div className="flex justify-center order-1 lg:order-2 relative z-10 px-6">
            <img
              src="/images/square-layers.png"
              alt="Layered systems connecting into Invotools Engage"
              className="w-64 md:w-80"
            />
          </div>

          {/* Right column: single label */}
          <div className="flex items-center gap-4 order-3">
            <div className="hidden lg:block flex-1 -ml-6 border-t-2 border-dotted border-foreground/40" />
            <div className="max-w-70 shrink-0">
              <h3 className="font-semibold text-foreground mb-2">
                Invotools Engage
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Connect context, apply journey rules and measure customer
                actions
              </p>
            </div>
          </div>
        </div>

        {/* Closing line */}
        <p className="reveal animation-delay-400 text-lg text-foreground">
          Your systems provide the context. Your portal brings it to the
          customer.
        </p>
      </div>
    </section>
  );
}
