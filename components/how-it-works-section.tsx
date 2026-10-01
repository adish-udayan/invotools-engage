"use client"

import { useEffect, useRef } from "react"
import { ScrollBlurText } from "./scroll-blur-text"

const steps = [
  {
    label: "1. Connect",
    description:
      "Connect the systems and data needed for your selected customer journey. Start with the relevant purchase information, content and services.",
    gradient: "bg-gradient-to-tr from-[#3a1e12] via-[#c17a52] to-[#e8c5a3]",
  },
  {
    label: "2. Configure",
    description:
      "Define the journey, branding, content, business rules and success measures. Business teams own the experience; technical teams manage integrations, identity and access.",
    gradient: "bg-gradient-to-tr from-[#101820] via-[#3d5a70] to-[#9db4c0]",
  },
  {
    label: "3. Launch",
    description:
      "Give customers access through supported messages, website links or account journeys. Start with one focused journey, then extend across products, brands and markets.",
    gradient: "bg-gradient-to-tr from-[#7a1f1f] via-[#c96b5e] to-[#e8a89a]",
  },
  {
    label: "4. Measure",
    description:
      "Track task completion, engagement, support demand and repeat purchasing against an agreed baseline. Use the findings to improve the experience and guide expansion.",
    gradient: "bg-gradient-to-tr from-[#16261f] via-[#4c6b57] to-[#8fa693]",
  },
]

export function HowItWorksSection() {
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
    <section ref={sectionRef} id="how-it-works" className="py-24 lg:py-32 bg-[#F2F0EB]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 lg:mb-20">
          <p className="reveal opacity-0 text-sm uppercase tracking-[0.2em] text-foreground font-bold mb-6">
            How it works
          </p>
          <ScrollBlurText
            text="Connect. Configure. Launch. Measure."
            className="font-serif text-3xl md:text-4xl lg:text-5xl text-[#122A45] text-balance mb-6 font-bold"
          />
          <p className="reveal opacity-0 animation-delay-400 text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Your existing commerce, order management, messaging, CRM and loyalty systems retain their roles.
            InvoTools Engage brings purchase context, useful guidance and relevant actions together through your
            branded customer portal.
          </p>
        </div>

        {/* Steps */}
        <div className="reveal opacity-0 animation-delay-200 grid grid-cols-1 md:grid-cols-4 gap-6">
          {steps.map((step) => (
            <div
              key={step.label}
              className={`rounded-3xl p-8 min-h-[420px] flex flex-col justify-between ${step.gradient}`}
            >
              <h3 className="text-xl font-semibold text-white">{step.label}</h3>
              <p className="text-sm text-white/90 leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
