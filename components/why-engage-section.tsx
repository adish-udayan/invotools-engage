import { ScrollBlurText } from "./scroll-blur-text"

const cards = [
  {
    title: "Keep the customer's task connected",
    description:
      "Bring purchase context into guidance, support and relevant next actions with clear handoffs when a task continues in another system.",
    image: "/images/card-img1.png",
  },
  {
    title: "Reuse and extend as needs change",
    description:
      "Adapt journey patterns, content and rules across products, brands and markets. Build on what works as your requirements expand.",
    image: "/images/card-img2.png",
  },
  {
    title: "Give business teams control",
    description:
      "Manage content and journey rules through defined configuration controls, while technical teams govern integrations, identity and permissions.",
    image: "/images/card-img3.png",
  },
  {
    title: "Measure value and operating effort",
    description:
      "Assess task completion, commercial contribution, integration and ongoing maintenance effort. Establish a baseline and use comparison groups where practical to understand what the experience genuinely adds.",
    image: "/images/card-img4.png",
  },
]

export function WhyEngageSection() {
  return (
    <section id="why-engage" className="py-24 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-14 lg:mb-16">
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

        {/* Four capabilities, visible together as one strip */}
        <ol className="grid gap-y-8 md:grid-cols-2 md:gap-x-10 md:gap-y-14 lg:grid-cols-4 lg:gap-x-8">
          {cards.map((card) => (
              <li key={card.title} className="group grid grid-cols-[6rem_1fr] gap-x-5 md:block">
                <div className="overflow-hidden rounded-xl bg-[#eef3fb] aspect-4/5 md:aspect-4/3 md:mb-6">
                  <img
                    src={card.image}
                    alt=""
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
                  />
                </div>

                <div>
                  <h3 className="text-xl font-semibold leading-snug tracking-[-0.01em] text-[#0b1d35] mb-3 lg:min-h-14">
                    {card.title}
                  </h3>
                  <p className="text-[15px] leading-relaxed text-slate-600">{card.description}</p>
                </div>
              </li>
          ))}
        </ol>

        {/* Footnote */}
        <div className="reveal rounded-2xl border border-slate-200 bg-white p-8 md:p-10 mt-14 lg:mt-16">
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
