"use client"

import { useEffect, useRef } from "react"
import { ScrollBlurText } from "./scroll-blur-text"

export function AiAssistedPurchaseSection() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-up")
          }
        })
      },
      { threshold: 0.1 },
    )

    const elements = sectionRef.current?.querySelectorAll(".reveal")
    elements?.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="ai-assisted-purchase"
      className="py-24 lg:py-32 bg-[#F2F0EB]"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Eyebrow */}
        <p className="reveal opacity-0 text-sm uppercase tracking-[0.2em] text-slate-900 font-bold mb-6">
          Beyond the AI-assisted purchase
        </p>

        {/* Heading */}
        <ScrollBlurText
          text="When AI helps make the purchase, give customers a reason to remember your brand."
          className="font-serif text-3xl md:text-4xl lg:text-5xl text-slate-900 text-balance mb-8 font-bold max-w-4xl"
        />

        {/* Body text */}
        <div className="reveal opacity-0 animation-delay-200 max-w-3xl mb-8">
          <p className="text-lg text-slate-700 leading-relaxed mb-6">
            If customers discover and buy through AI assistants, your brand may have fewer direct interactions
            before checkout. What happens after the purchase becomes an opportunity to strengthen relationships,
            build trust and earn the next purchase.
          </p>
          <p className="text-lg text-slate-700 leading-relaxed">
            Stay relevant throughout ownership with product guidance, dependable support and benefits connected to
            what your customers bought.
          </p>
        </div>

        {/* Info box */}
        <div className="reveal opacity-0 animation-delay-400 rounded-[40px] bg-white p-10 lg:p-12">
          <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6">
            Building toward agentic-commerce readiness
          </h3>
          <p className="text-slate-700 leading-relaxed mb-4">
            Invotools Engage is building toward making selected purchase information and post-purchase actions
            accessible to customers and authorised agents alike.
          </p>
          <p className="text-slate-700 leading-relaxed">
            The planned approach combines structured information, verified identity and permissions, clear limits
            on agent actions, traceable activity and a route to human help.
          </p>
        </div>
      </div>
    </section>
  )
}
