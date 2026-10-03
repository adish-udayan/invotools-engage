'use client';

import { useEffect, useRef, useState } from 'react';
import { ScrollBlurText } from './scroll-blur-text';

type SystemKind = 'purchase' | 'product' | 'service';
type FlowDirection = 'in' | 'out';

const SYSTEM_KINDS: SystemKind[] = ['purchase', 'product', 'service'];

// Desktop geometry (viewBox 1200 x 320). Node centres sit at 1/6, 1/2 and 5/6
// of the width so they line up with the three text columns below.
const INPUT_Y = [70, 160, 250];
const OUTPUT_Y = [110, 160, 210];

const INPUT_PATHS = INPUT_Y.map(
  (y) => `M232 ${y} C 380 ${y}, 410 160, 540 160`,
);
const OUTPUT_PATHS = OUTPUT_Y.map(
  (y) => `M660 160 C 770 160, 770 ${y}, 880 ${y}`,
);

// Mobile connectors (viewBox 240 x 96): three streams merge, then one splits.
const CONVERGE_PATHS = [
  'M40 0 C 40 52, 120 44, 120 96',
  'M120 0 V96',
  'M200 0 C 200 52, 120 44, 120 96',
];
const DIVERGE_PATHS = [
  'M120 0 C 120 52, 40 44, 40 96',
  'M120 0 V96',
  'M120 0 C 120 52, 200 44, 200 96',
];

function SystemGlyph({ kind }: { kind: SystemKind }) {
  switch (kind) {
    case 'purchase':
      return (
        <>
          <path d="M6 8h12l-1 12H7L6 8z" />
          <path d="M9 8V7a3 3 0 0 1 6 0v1" />
        </>
      );
    case 'product':
      return (
        <>
          <path d="M12 3l8 4.5v9L12 21l-8-4.5v-9L12 3z" />
          <path d="M4 7.5l8 4.5 8-4.5M12 12v9" />
        </>
      );
    case 'service':
      return (
        <>
          <path d="M4.5 14v-2a7.5 7.5 0 0 1 15 0v2" />
          <rect x="3.5" y="13" width="4" height="6" rx="1.5" />
          <rect x="16.5" y="13" width="4" height="6" rx="1.5" />
        </>
      );
  }
}

function SystemNode({ x, y, kind }: { x: number; y: number; kind: SystemKind }) {
  return (
    <g transform={`translate(${x} ${y})`}>
      <circle r="32" fill="#ffffff" stroke="#dbe4f0" strokeWidth="1" />
      <g
        transform="translate(-12 -12)"
        fill="none"
        stroke="#0b1d35"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <SystemGlyph kind={kind} />
      </g>
    </g>
  );
}

function HubNode({ x, y }: { x: number; y: number }) {
  return (
    <g transform={`translate(${x} ${y})`}>
      <rect
        className="fit-hub-halo"
        x="-60"
        y="-60"
        width="120"
        height="120"
        rx="30"
        fill="none"
        stroke="#2a5bd7"
        strokeWidth="1"
      />
      <rect
        x="-60"
        y="-60"
        width="120"
        height="120"
        rx="30"
        fill="#ffffff"
        stroke="#dbe4f0"
        strokeWidth="1"
      />
      <rect
        className="fit-hub-core"
        x="-38"
        y="-38"
        width="76"
        height="76"
        rx="20"
        fill="#2a5bd7"
      />
      <g
        transform="translate(-19.2 -19.2) scale(1.6)"
        fill="none"
        stroke="#ffffff"
        strokeWidth="1.1"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 4l9 5-9 5-9-5 9-5z" />
        <path d="M3 13.5l9 5 9-5" />
      </g>
    </g>
  );
}

function PortalFrame({ x, y }: { x: number; y: number }) {
  return (
    <g transform={`translate(${x} ${y})`}>
      <rect
        width="240"
        height="200"
        rx="16"
        fill="#ffffff"
        stroke="#dbe4f0"
        strokeWidth="1"
      />
      <path d="M0 30h240" stroke="#dbe4f0" strokeWidth="1" />
      <circle cx="18" cy="15" r="3" fill="#dbe4f0" />
      <circle cx="30" cy="15" r="3" fill="#dbe4f0" />
      <circle cx="42" cy="15" r="3" fill="#dbe4f0" />
      <rect x="16" y="44" width="208" height="56" rx="10" fill="#eef3fb" />
      <rect x="30" y="58" width="72" height="6" rx="3" fill="#2a5bd7" />
      <rect x="30" y="72" width="120" height="5" rx="2.5" fill="#dbe4f0" />
      <rect x="30" y="83" width="92" height="5" rx="2.5" fill="#dbe4f0" />
      <rect x="16" y="112" width="100" height="56" rx="10" fill="#f7f9fd" stroke="#e6edf7" />
      <rect x="124" y="112" width="100" height="56" rx="10" fill="#f7f9fd" stroke="#e6edf7" />
      <rect x="28" y="126" width="40" height="5" rx="2.5" fill="#0b1d35" opacity="0.7" />
      <rect x="28" y="137" width="64" height="4" rx="2" fill="#dbe4f0" />
      <rect x="136" y="126" width="40" height="5" rx="2.5" fill="#0b1d35" opacity="0.7" />
      <rect x="136" y="137" width="64" height="4" rx="2" fill="#dbe4f0" />
      <rect
        className="fit-portal-cta"
        x="16"
        y="178"
        width="64"
        height="12"
        rx="6"
        fill="#2a5bd7"
      />
    </g>
  );
}

function FlowPaths({
  paths,
  direction,
}: {
  paths: string[];
  direction: FlowDirection;
}) {
  return (
    <>
      {paths.map((d) => (
        <path
          key={`track-${d}`}
          className="fit-track"
          d={d}
          pathLength={100}
          fill="none"
          stroke="#c9d6ea"
          strokeWidth="1.25"
        />
      ))}
      {paths.map((d, i) => (
        <path
          key={`pulse-${d}`}
          className={`fit-pulse fit-pulse-${direction}`}
          style={{ animationDelay: `${i * 0.18}s` }}
          d={d}
          pathLength={100}
          fill="none"
          stroke="#2a5bd7"
          strokeWidth="2"
          strokeLinecap="round"
        />
      ))}
    </>
  );
}

function MobileConnector({
  paths,
  direction,
}: {
  paths: string[];
  direction: FlowDirection;
}) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 240 96"
      className="lg:hidden mx-auto my-8 block h-24 w-60 overflow-visible"
    >
      <FlowPaths paths={paths} direction={direction} />
    </svg>
  );
}

const textWrap = 'mx-auto max-w-70 text-center';

export function HowItFitsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [active, setActive] = useState(false);

  // Draw the connections and run the pulses only while the section is on screen.
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => setActive(entry.isIntersecting),
      { threshold: 0.2 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="how-it-fits"
      className="py-24 lg:py-32 bg-background"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 lg:mb-20">
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

        <div
          className={`fit-diagram reveal animation-delay-200 mb-16 lg:mb-20 ${
            active ? 'is-active' : ''
          }`}
        >
          {/* Desktop: one continuous pipeline. Inputs converge into Engage, then fan out into the portal. */}
          <svg
            aria-hidden="true"
            viewBox="0 0 1200 320"
            className="hidden lg:block w-full h-auto overflow-visible mb-8"
          >
            <FlowPaths paths={INPUT_PATHS} direction="in" />
            <FlowPaths paths={OUTPUT_PATHS} direction="out" />

            <circle cx="540" cy="160" r="3" fill="#2a5bd7" />
            <circle cx="660" cy="160" r="3" fill="#2a5bd7" />

            {SYSTEM_KINDS.map((kind, i) => (
              <SystemNode key={kind} x={200} y={INPUT_Y[i]} kind={kind} />
            ))}
            <HubNode x={600} y={160} />
            <PortalFrame x={880} y={60} />
          </svg>

          <ol className="lg:grid lg:grid-cols-3">
            {/* Stage 1: existing systems */}
            <li className="lg:px-6">
              <svg
                aria-hidden="true"
                viewBox="0 0 240 64"
                className="lg:hidden mx-auto mb-8 block h-16 w-60 overflow-visible"
              >
                {SYSTEM_KINDS.map((kind, i) => (
                  <SystemNode key={kind} x={40 + i * 80} y={32} kind={kind} />
                ))}
              </svg>
              <div className={textWrap}>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  Your existing systems
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Purchase information, product content and customer services
                </p>
              </div>
              <MobileConnector paths={CONVERGE_PATHS} direction="in" />
            </li>

            {/* Stage 2: Invotools Engage */}
            <li className="lg:px-6">
              <svg
                aria-hidden="true"
                viewBox="0 0 136 136"
                className="lg:hidden mx-auto mb-8 block size-34 overflow-visible"
              >
                <HubNode x={68} y={68} />
              </svg>
              <div className={textWrap}>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  Invotools Engage
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Connect context, apply journey rules and measure customer
                  actions
                </p>
              </div>
              <MobileConnector paths={DIVERGE_PATHS} direction="out" />
            </li>

            {/* Stage 3: branded customer portal */}
            <li className="lg:px-6">
              <svg
                aria-hidden="true"
                viewBox="0 0 240 200"
                className="lg:hidden mx-auto mb-8 block w-60 h-auto overflow-visible"
              >
                <PortalFrame x={0} y={0} />
              </svg>
              <div className={textWrap}>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  Your branded customer portal
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Find guidance, access support, discover benefits and take
                  relevant next steps
                </p>
              </div>
            </li>
          </ol>
        </div>

        {/* Closing line */}
        <p className="reveal animation-delay-400 text-lg text-foreground text-center">
          Your systems provide the context. Your portal brings it to the
          customer.
        </p>
      </div>
    </section>
  );
}
