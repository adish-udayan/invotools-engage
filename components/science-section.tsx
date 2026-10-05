"use client"

import { useEffect, useRef } from "react"
import { ScrollBlurText } from "./scroll-blur-text"

const journeyStages = [
  {
    stage: "After Purchase",
    title: "Receive reassurance",
    quote: "“Confirm my order and keep me informed.”",
    description:
      "Provide accessible order information, delivery updates, and clear next steps that reduce uncertainty.",
    impact: "Help reduce routine order-status enquiries.",
  },
  {
    stage: "Setup & Onboarding",
    title: "Get started",
    quote: "“Help me use what I bought.”",
    description:
      "Connect customers with setup instructions, product guidance, and warranty or registration information.",
    impact: "Support successful product setup and reduce avoidable support requests.",
  },
  {
    stage: "Ongoing Engagement",
    title: "Enjoy the product",
    quote: "“Help me get more from my purchase.”",
    description:
      "Offer care advice, useful tips, relevant loyalty benefits, and suitable complementary products.",
    impact: "Create opportunities for continued engagement and relevant complementary purchases.",
  },
  {
    stage: "Throughout the journey",
    title: "Get help",
    quote: "“Make it easy to resolve my problem.”",
    description: "Make contextual answers, service options, and further support easy to find.",
    impact: "Help reduce repeat contacts and protect the customer relationship when problems arise.",
  },
  {
    stage: "Next purchase",
    title: "Buy again",
    quote: "“Make my next purchase relevant and convenient.”",
    description:
      "Introduce appropriate replenishment reminders, renewals, accessories, and upgrades.",
    impact: "Encourage relevant repeat purchases, replenishment, and cross-sell opportunities.",
  },
]

const possibilities = [
  {
    title: "Confidence & care",
    items: [
      "Purchase information in one place",
      "Delivery visibility",
      "Product setup and care",
      "Warranty registration",
      "Return and refund guidance",
      "Context-aware AI assistance",
    ],
  },
  {
    title: "Repeat purchase & loyalty",
    items: [
      "Compatible accessories",
      "Replenishment reminders",
      "Subscription management",
      "Relevant vouchers and offers",
      "Rewards visibility and redemption",
      "Memberships and upgrades",
    ],
  },
  {
    title: "Participation & insight",
    items: [
      "Product reviews and feedback",
      "Referral participation",
      "Customer preferences",
      "Saved items and wishlists",
      "Product lifecycle and sustainability information",
      "Relevant partner offers",
    ],
  },
]

export function ScienceSection() {
  const sectionRef = useRef<HTMLElement>(null)

  // Animation disabled - all text animations removed from landing page

  return (
    <section ref={sectionRef} id="customer-journey" className="py-24 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 lg:mb-20">
          <p className="reveal text-sm uppercase tracking-[0.2em] text-foreground font-bold mb-6">
            The Post-Purchase Customer Journey
          </p>
          <ScrollBlurText
            text="Help customers get more from this purchase and find a reason for the next."
            className="font-serif text-xl md:text-2xl lg:text-3xl xl:text-4xl text-[#122A45] text-balance mb-6 font-bold max-w-4xl mx-auto"
            disableTransition={true}
            disableBlur={true}
          />
          <p className="reveal animation-delay-400 text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Bring purchase information, timely guidance, and relevant next steps together in your branded customer
            portal helping customers throughout product ownership while creating opportunities for repeat revenue
            and more efficient service.
          </p>
        </div>

        {/* Journey Stages */}
        <div className="reveal animation-delay-200 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-16 lg:mb-20">
          {journeyStages.map((item) => (
            <div key={item.stage} className="rounded-2xl border border-border bg-muted/40 p-6 flex flex-col">
              <p className="text-xs font-semibold uppercase tracking-wide text-teal-600 mb-3">{item.stage}</p>
              <h3 className="text-lg font-semibold text-foreground mb-3">{item.title}</h3>
              <p className="text-sm italic text-muted-foreground mb-3">{item.quote}</p>
              <p className="text-sm text-muted-foreground leading-relaxed mb-5">{item.description}</p>
              <div className="mt-auto pt-4 border-t border-border">
                <p className="text-sm font-semibold text-emerald-700 mb-2">Business impact</p>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.impact}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Banner */}
        <div className="reveal animation-delay-400 rounded-3xl overflow-hidden grid grid-cols-1 lg:grid-cols-2 bg-primary mb-16 lg:mb-20">
          <div className="flex items-center p-10 lg:p-16">
            <h3 className="font-serif text-2xl md:text-3xl text-primary-foreground font-medium text-balance">
              Let the customer&rsquo;s situation guide the next interaction.
            </h3>
          </div>
          <div className="min-h-64 lg:min-h-0">
            <img
              src="/images/section3-banner.png"
              alt="Customer browsing a mobile shopping experience"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Explore more possibilities */}
        <div className="reveal">
          <h3 className="font-serif text-2xl md:text-3xl text-foreground font-medium mb-3">
            Explore more post-purchase possibilities
          </h3>
          <p className="text-muted-foreground mb-10">
            Use-case opportunities to explore; availability and integrations depend on the agreed product scope.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {possibilities.map((group) => (
              <div key={group.title}>
                <h4 className="text-xl font-semibold text-foreground mb-4">{group.title}</h4>
                <ul className="space-y-2">
                  {group.items.map((item) => (
                    <li key={item} className="text-sm text-muted-foreground flex gap-2">
                      <span className="text-foreground">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
