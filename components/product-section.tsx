import { ScrollBlurText } from "./scroll-blur-text"

const cards = [
  {
    title: "Customers chase answers",
    description: "Customers switch between sites and channels to complete simple tasks.",
    detail: "More avoidable support requests and manual handling.",
    label: "Customer experience",
    image: "/images/customer-laptop.png",
  },
  {
    title: "Useful messages become dead ends",
    description: "Updates provide information without a clear route to relevant help or action.",
    detail: "Missed opportunities to turn attention into useful engagement.",
    label: "Marketing & CRM",
    image: "/images/customer-message.png",
  },
  {
    title: "Opportunities to buy again are missed",
    description: "Accessories, replenishment and rewards are disconnected from what customers own and need.",
    detail: "Fewer relevant routes from product ownership to the next purchase.",
    label: "E-commerce",
    image: "/images/customer-shopping.png",
  },
]

export function ProductSection() {
  return (
    <section id="produits" className="bg-[#f4f2ed] px-6 py-24 text-[#0b1d35] lg:px-12 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <header className="mx-auto max-w-3xl text-center">
          <p className="mb-6 text-xs font-semibold uppercase tracking-[0.08em] text-[#111111]">
            The cost of disconnected experiences
          </p>
          <ScrollBlurText
            text="Your tools do their jobs. Is the customer journey connected?"
            className="text-balance text-xl font-serif font-bold leading-[1.12] tracking-[-0.04em] sm:text-2xl lg:text-3xl xl:text-4xl text-[#0b1d35]"
            disableTransition={true}
            disableBlur={true}
          />
          <p className="mt-6 text-base leading-relaxed text-[#222222] sm:text-lg">
            You invest in winning the purchase. What happens next shapes the customer relationship and the opportunity to earn the next sale.
          </p>
          <p className="mt-4 text-base font-semibold leading-relaxed text-[#111111] sm:text-lg">
            Order updates, tracking, product guidance, support and rewards can each work well. But the experience between them can remain disconnected.
          </p>
        </header>

        <div className="mt-12 rounded-2xl border border-white/80 bg-white/45 p-5 shadow-[0_8px_24px_rgba(11,29,53,0.03)] sm:p-7 lg:mt-14">
          <h3 className="text-2xl font-medium tracking-[-0.02em] sm:text-3xl">
            One purchase. Several disconnected experiences.
          </h3>
          <p className="mt-4 text-base leading-relaxed text-[#222222]">
            For example, a customer buys a coffee machine. The order email links to tracking, but finding setup guidance means searching again. Getting help means repeating purchase details. Finding compatible accessories starts another search.
          </p>
          <p className="mt-3 font-semibold leading-relaxed">Your customers are left to connect the pieces.</p>
          <p className="mt-3 text-base leading-relaxed text-[#222222]">
            The details vary by product, brand and channel. The underlying problem is the same: customers must bridge the gaps themselves.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3 lg:mt-16 lg:gap-10">
          {cards.map((card) => (
            <article key={card.title} className="overflow-hidden rounded-2xl bg-white">
              <img src={card.image} alt={card.title} className="aspect-[1.08/1] w-full object-cover" />
              <div className="p-6 sm:p-7">
                <h3 className="min-h-16 text-xl font-semibold leading-tight tracking-[-0.02em] text-[#111111]">{card.title}</h3>
                <p className="mt-6 text-sm leading-relaxed text-[#333333]">{card.description}</p>
                <p className="mt-6 text-sm leading-relaxed text-[#333333]"><strong>{card.label}:</strong> {card.detail}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-20 grid gap-10 border-b border-[#0b1d35]/60 pb-14 md:grid-cols-2 md:gap-16 md:px-12">
          <div>
            <h3 className="text-2xl font-medium tracking-[-0.03em] text-[#111111]">More brands. More systems. More effort.</h3>
            <p className="mt-4 max-w-xl leading-relaxed text-[#222222]">Separate workflows and vendor roadmaps make changes harder to coordinate and experiences harder to keep consistent across brands, markets and channels.</p>
          </div>
          <div>
            <h3 className="text-2xl font-medium tracking-[-0.03em] text-[#111111]">AI answers need a path to resolution.</h3>
            <p className="mt-4 max-w-xl leading-relaxed text-[#222222]">Customers need more than an immediate response. They need to complete the next step or reach the right person with their context intact.</p>
          </div>
        </div>

        <div className="px-4 pt-8 md:px-12">
          <h3 className="text-2xl font-medium tracking-[-0.03em] text-[#111111]">Gaps in the experience can become gaps in customer trust.</h3>
          <p className="mt-4 leading-relaxed text-[#222222]">Every repeated search, disconnected handoff or unresolved task can weaken confidence in your brand.</p>
          <p className="mt-3 font-semibold leading-relaxed text-[#111111]">Connect these interactions to help customers get more from their purchase and discover relevant reasons to buy again.</p>
        </div>
      </div>
    </section>
  )
}
