'use client';

import { useEffect, useRef, useState, type CSSProperties } from 'react';

export interface JourneyStep {
  title: string;
  description: string;
}

interface ProcessJourneyProps {
  steps: JourneyStep[];
  className?: string;
}

const clamp = (value: number) => Math.min(1, Math.max(0, value));

function useScrollProgress<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setProgress(1);
      return;
    }

    let frame = 0;
    const update = () => {
      frame = 0;
      const el = ref.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight;
      // Starts when the list reaches 75% of the viewport; the distance scales with list height so the tall mobile layout fills while scrolling through it.
      const distance = Math.max(rect.height * 0.8, vh * 0.35);
      setProgress(clamp((vh * 0.75 - rect.top) / distance));
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return { ref, progress };
}

export function ProcessJourney({ steps, className = '' }: ProcessJourneyProps) {
  const { ref, progress } = useScrollProgress<HTMLOListElement>();
  const segments = steps.length - 1;
  const position = progress * segments;

  return (
    <ol
      ref={ref}
      className={`relative grid grid-cols-1 lg:grid-cols-4 ${className}`}
    >
      {steps.map((step, index) => {
        const isActive = progress > 0 && position >= index;
        const fill = clamp(position - index);
        const number = String(index + 1).padStart(2, '0');

        return (
          <li
            key={step.title}
            className="group relative pb-14 pl-18 last:pb-0 lg:pb-0 lg:pl-0 lg:pr-10"
          >
            {index < segments && (
              <span
                aria-hidden="true"
                className="absolute top-12 bottom-0 left-[23.5px] w-px bg-[#dbe4f0] lg:top-[23.5px] lg:right-0 lg:bottom-auto lg:left-12 lg:h-px lg:w-auto"
              >
                <span
                  className="journey-fill absolute inset-0 bg-[#2a5bd7]"
                  style={{ '--fill': fill } as CSSProperties}
                />
                {fill === 1 && (
                  <span
                    className="journey-pulse absolute size-1.5 rounded-full bg-[#2a5bd7] shadow-[0_0_10px_3px_rgba(42,91,215,0.45)]"
                    style={{ animationDelay: `${index * 1.1}s` }}
                  />
                )}
              </span>
            )}

            <div
              aria-hidden="true"
              className={`absolute top-0 left-0 grid size-12 place-items-center rounded-full transition-[background-color,box-shadow,color] duration-500 group-hover:shadow-[0_0_0_8px_#eef3fb] lg:relative ${
                isActive
                  ? 'bg-[#eef3fb] text-[#2a5bd7]'
                  : 'bg-white text-slate-400'
              }`}
            >
              <svg
                viewBox="0 0 48 48"
                className="absolute inset-0 size-full -rotate-90"
              >
                <circle
                  cx="24"
                  cy="24"
                  r="23"
                  fill="none"
                  stroke="#dbe4f0"
                  strokeWidth="1"
                />
                <circle
                  cx="24"
                  cy="24"
                  r="23"
                  fill="none"
                  stroke="#2a5bd7"
                  strokeWidth="1.5"
                  pathLength={1}
                  strokeDasharray="1"
                  strokeDashoffset={isActive ? 0 : 1}
                  className="journey-ring"
                />
              </svg>
              <span className="relative text-sm font-semibold tabular-nums">
                {number}
              </span>
            </div>

            <div className="pt-2 lg:pt-8">
              <h3 className="text-xl font-semibold tracking-[-0.01em] text-[#0b1d35] transition-colors duration-300 group-hover:text-[#2a5bd7]">
                <span className="sr-only">Step {number}: </span>
                {step.title}
              </h3>
              <p className="mt-3 max-w-xs text-[15px] leading-relaxed text-slate-600">
                {step.description}
              </p>
            </div>
          </li>
        );
      })}
    </ol>
  );
}
