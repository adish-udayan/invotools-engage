"use client"

import { useEffect, useRef } from "react"
import { ScrollBlurText } from "./scroll-blur-text"

const gapPoints = [
  {
    title: "We already send order updates",
    description:
      "But can customers move from an update to relevant guidance or support without searching another site or repeating their details?",
  },
  {
    title: "We have tracking, support, and loyalty systems",
    description:
      "But do those experiences connect across your stores, website, and service channels or does the customer have to connect the pieces?",
  },
  {
    title: "Our team can manage the experience",
    description:
      "But as products, brands, and markets grow, repeated updates and separate workflows can increase maintenance effort and create inconsistencies.",
  },
  {
    title: "We are adding AI-powered assistance",
    description:
      "But can the assistant help customers complete a task or reach the right person? An immediate answer without a resolution can become another source of frustration.",
  },
]

export function FitWithStackSection() {
  const sectionRef = useRef<HTMLElement>(null)

  // Animation disabled - all text animations removed from landing page

  return (
    <section ref={sectionRef} id="fit-with-stack" className="py-24 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 lg:mb-20">
          <p className="reveal text-sm uppercase tracking-[0.2em] text-foreground font-bold mb-6">
            Fit with your existing stack
          </p>
          <ScrollBlurText
            text="Build on your commerce investments. Connect the gaps in the experience."
            className="font-serif text-xl md:text-2xl lg:text-3xl xl:text-4xl text-[#122A45] text-balance mb-6 font-bold max-w-4xl mx-auto"
            disableTransition={true}
            disableBlur={true}
          />
          <p className="reveal animation-delay-400 text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Start with a specific gap in your post-purchase journey. Identify where customers need more continuity
            across the tools you already use.
          </p>
        </div>

        {/* Diagram */}
        <img
          src="/images/fit-with-stack-visual.png"
          alt="Diagram showing how Invotools Engage connects existing commerce systems to customer experiences"
          className="reveal animation-delay-200 w-full h-auto rounded-3xl mb-20 lg:mb-24"
        />

        {/* Gap points */}
        <div className="reveal grid md:grid-cols-2 gap-x-16 lg:gap-x-24 mb-16">
          <div>
            {gapPoints
              .filter((_, index) => index % 2 === 0)
              .map((point, i) => (
                <div
                  key={point.title}
                  className={`py-10 first:pt-0 last:pb-0 ${i > 0 ? "border-t border-slate-300" : ""}`}
                >
                  <h3 className="text-lg font-bold text-slate-900 mb-4">{point.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{point.description}</p>
                </div>
              ))}
          </div>
          <div>
            {gapPoints
              .filter((_, index) => index % 2 === 1)
              .map((point, i) => (
                <div
                  key={point.title}
                  className={`py-10 first:pt-0 last:pb-0 ${i > 0 ? "border-t border-slate-300" : ""}`}
                >
                  <h3 className="text-lg font-bold text-slate-900 mb-4">{point.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{point.description}</p>
                </div>
              ))}
          </div>
        </div>

        {/* Closing test statement */}
        <div className="reveal animation-delay-200">
          <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
            The test: can customers complete the task and can your team maintain and measure the experience?
          </h3>
          <p className="text-slate-600 leading-relaxed">
            Evaluate the additional value for your environment. Confirm supported integrations, available controls,
            data dependencies and implementation responsibilities before rollout.
          </p>
        </div>
      </div>
    </section>
  )
}
