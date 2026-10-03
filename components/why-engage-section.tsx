"use client"

import { useEffect, useRef, useState } from "react"
import { ScrollBlurText } from "./scroll-blur-text"

const STICKY_TOP = 96 // px, base sticky offset for the first card
const PEEK_STAGGER_PX = 16 // static top offset added per card index, creates the peek
// Must exceed the tallest rendered card height, otherwise a card unpins
// (its sticky wrapper runs out of room) before it has finished exiting.
const EXIT_RANGE = 560 // px of scroll over which a card plays its own exit animation
const EXIT_SCALE = 0.9 // scale a card settles to once it has fully exited
const EXIT_BRIGHTNESS = 0.72 // brightness a card settles to once it has fully exited

const cards = [
  {
    title: "Keep the customer's task connected",
    description:
      "Bring purchase context into guidance, support and relevant next actions with clear handoffs when a task continues in another system.",
    image: "/images/card-img1.png",
    bg: "#4E5796",
  },
  {
    title: "Reuse and extend as needs change",
    description:
      "Adapt journey patterns, content and rules across products, brands and markets. Build on what works as your requirements expand.",
    image: "/images/card-img2.png",
    bg: "#7E8C89",
  },
  {
    title: "Give business teams control",
    description:
      "Manage content and journey rules through defined configuration controls, while technical teams govern integrations, identity and permissions.",
    image: "/images/card-img3.png",
    bg: "#8A7F63",
  },
  {
    title: "Measure value and operating effort",
    description:
      "Assess task completion, commercial contribution, integration and ongoing maintenance effort. Establish a baseline and use comparison groups where practical to understand what the experience genuinely adds.",
    image: "/images/card-img4.png",
    bg: "#149AA6",
  },
]

export function WhyEngageSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const wrapperRefs = useRef<(HTMLDivElement | null)[]>([])
  // exitProgress[i]: 0 = card i fully in place, 1 = card i has fully exited
  // (driven by card i+1 arriving and pushing it out), mirroring a CSS
  // `animation-timeline: view(); animation-range: exit;` per-card animation.
  const [exitProgress, setExitProgress] = useState<number[]>(cards.map(() => 0))

  // Animation disabled - all text animations removed from landing page

  useEffect(() => {
    let rafId = 0

    const computeExitProgress = () => {
      const next = cards.map((_, index) => {
        if (index === cards.length - 1) return 0
        const nextWrapper = wrapperRefs.current[index + 1]
        if (!nextWrapper) return 0
        const nextRect = nextWrapper.getBoundingClientRect()
        const nextStickyTop = STICKY_TOP + (index + 1) * PEEK_STAGGER_PX
        return Math.max(0, Math.min(1, (nextStickyTop + EXIT_RANGE - nextRect.top) / EXIT_RANGE))
      })
      setExitProgress(next)
      rafId = 0
    }

    const handleScroll = () => {
      if (rafId) return
      rafId = requestAnimationFrame(computeExitProgress)
    }

    computeExitProgress()
    window.addEventListener("scroll", handleScroll, { passive: true })
    window.addEventListener("resize", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("resize", handleScroll)
      if (rafId) cancelAnimationFrame(rafId)
    }
  }, [])

  return (
    <section ref={sectionRef} id="why-engage" className="py-24 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 lg:mb-20">
          <p className="reveal text-sm uppercase tracking-[0.2em] text-foreground font-bold mb-6">
            Why Invotools Engage?
          </p>
          <ScrollBlurText
            text="Built around the customer's next step. Designed to grow with your business."
            className="font-serif text-xl md:text-2xl lg:text-3xl xl:text-4xl text-[#122A45] text-balance mb-6 font-bold max-w-4xl mx-auto"
            disableTransition={true}
            disableBlur={true}
          />
          <p className="reveal animation-delay-400 text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Connect ownership journeys across your existing systems, with reusable workflows, business controls and
            a clear focus on measurable value.
          </p>
        </div>

        {/* Scroll-driven scaling card stack */}
        <div className="relative">
          {cards.map((card, index) => {
            const progress = exitProgress[index]
            const scale = 1 - progress * (1 - EXIT_SCALE)
            const brightness = 1 - progress * (1 - EXIT_BRIGHTNESS)

            return (
              <div
                key={card.title}
                ref={(el) => {
                  wrapperRefs.current[index] = el
                }}
                className={index === cards.length - 1 ? "relative" : "relative h-[160vh]"}
              >
                <div className="sticky" style={{ top: STICKY_TOP + index * PEEK_STAGGER_PX, zIndex: index + 1 }}>
                  <div
                    className="rounded-3xl overflow-hidden grid md:grid-cols-2 shadow-xl transition-[transform,filter] duration-150 ease-out will-change-transform"
                    style={{
                      transform: `scale(${scale})`,
                      filter: `brightness(${brightness})`,
                      backgroundColor: card.bg,
                    }}
                  >
                    <div className="flex flex-col justify-center p-10 lg:p-14 min-h-80 md:min-h-105">
                      <h3 className="text-2xl md:text-3xl font-semibold text-white mb-6">{card.title}</h3>
                      <p className="text-white/85 leading-relaxed max-w-md">{card.description}</p>
                    </div>
                    <div className="min-h-64 md:min-h-0">
                      <img src={card.image} alt={card.title} className="w-full h-full object-cover" />
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Footnote */}
        <div
          className="reveal rounded-2xl border border-slate-200 bg-white p-8 md:p-10 mt-12 lg:mt-16 relative"
          style={{ zIndex: cards.length + 1 }}
        >
          <p className="font-bold text-slate-900 mb-2">Built with evolving customer access in mind.</p>
          <p className="text-slate-600 leading-relaxed mb-6">
            Our direction includes supporting authorised agents alongside direct customer interfaces, with
            capabilities validated as they develop.
          </p>
          <p className="font-bold text-slate-900 mb-2">Extending existing tools or considering an in-house build?</p>
          <p className="text-slate-600 leading-relaxed">
            Compare the complete journey including how easily it can evolve as your needs grow.
          </p>
        </div>
      </div>
    </section>
  )
}
