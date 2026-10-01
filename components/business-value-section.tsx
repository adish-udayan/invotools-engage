"use client"

import { useEffect, useRef } from "react"
import { ScrollBlurText } from "./scroll-blur-text"

const valueCards = [
  {
    title: "Create opportunities for repeat revenue",
    description:
      "Connect product ownership with relevant accessories, replenishment and upgrades. Give customers a useful reason to make their next purchase with your brand.",
    measure: "Repeat-purchase rate · Additional sales contribution",
  },
  {
    title: "Strengthen customer relationships",
    description:
      "Make your brand useful beyond checkout through product guidance, timely help and relevant loyalty benefits. Use feedback and shared preferences to improve future experiences.",
    measure: "Return engagement · Loyalty participation · Customer satisfaction",
  },
  {
    title: "Reduce service and operating effort",
    description:
      "Help customers find routine answers and complete supported tasks. Give teams reusable journeys that reduce repeated work across products, brands and markets.",
    measure: "Support contacts per order · Task completion · Journey update effort",
  },
]

export function BusinessValueSection() {
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
    <section ref={sectionRef} id="business-value" className="py-24 lg:py-32 bg-[#F2F0EB]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 lg:mb-20">
          <p className="reveal opacity-0 text-sm uppercase tracking-[0.2em] text-foreground font-bold mb-6">
            Business value
          </p>
          <ScrollBlurText
            text="Make post-purchase count where it matters."
            className="font-serif text-3xl md:text-4xl lg:text-5xl text-[#122A45] text-balance mb-6 font-bold max-w-3xl mx-auto"
          />
          <p className="reveal opacity-0 animation-delay-400 text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Help customers get more from what they bought and turn useful interactions into opportunities for
            repeat revenue, stronger relationships and more efficient service.
          </p>
        </div>

        {/* Value cards */}
        <div className="reveal opacity-0 animation-delay-200 grid md:grid-cols-3 gap-6 mb-20">
          {valueCards.map((card) => (
            <div key={card.title} className="rounded-2xl bg-white p-8 flex flex-col">
              <h3 className="text-xl font-semibold text-slate-900 leading-snug mb-4">{card.title}</h3>
              <p className="text-slate-600 leading-relaxed mb-8">{card.description}</p>
              <div className="mt-auto pt-6 border-t border-slate-300">
                <p className="text-sm text-slate-600 leading-relaxed">
                  <span className="font-bold text-slate-900">MEASURE:</span> {card.measure}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Audiences */}
        <div className="reveal opacity-0 grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <h3 className="font-serif text-2xl font-medium text-slate-900 mb-4">For your customers</h3>
            <p className="text-slate-600 leading-relaxed">
              Purchase information, relevant guidance and clear routes to help in a connected branded
              experience—with next steps that reflect what they own.
            </p>
          </div>
          <div>
            <h3 className="font-serif text-2xl font-medium text-slate-900 mb-4">
              For technology and implementation partners
            </h3>
            <p className="text-slate-600 leading-relaxed">
              Extend existing commerce investments into connected post-purchase journeys, with opportunities to
              support integration, configuration and ongoing improvement.
            </p>
          </div>
        </div>

        {/* Connective statement */}
        <p className="reveal opacity-0 text-lg font-bold text-slate-900 mb-10">
          Connect these interactions to help customers get more from their purchase and discover relevant reasons
          to buy again.
        </p>

        {/* Revenue opportunity box */}
        <div className="reveal opacity-0 animation-delay-200 rounded-3xl bg-white border border-slate-200 p-8 md:p-12">
          <h3 className="font-serif text-2xl md:text-3xl font-medium text-slate-900 mb-6">
            What could better post-purchase engagement unlock for your business?
          </h3>
          <p className="text-slate-700 leading-relaxed mb-4">
            If your business processes one million orders a year, a 1% increase would mean 10,000 additional
            purchases.
          </p>
          <p className="font-bold text-slate-900 mb-4">
            What would those purchases be worth at your average order value?
          </p>
          <p className="text-slate-700 leading-relaxed mb-8">
            Bring your order volume, average order value and one customer journey you want to improve. Together,
            we&rsquo;ll explore potential revenue opportunities, the assumptions behind them and how to measure
            success.
          </p>
          <button className="rounded-full bg-[#122A45] text-white text-sm font-medium px-6 py-3 mb-4 hover:bg-[#1a3a5c] transition-colors">
            Explore Your Revenue Opportunity
          </button>
          <p className="text-xs text-slate-500">
            The 1% scenario is a starting point for discussion, not a forecast of Engage results.
          </p>
        </div>
      </div>
    </section>
  )
}
