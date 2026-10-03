import { ProcessJourney, type JourneyStep } from './process-journey';

const steps: JourneyStep[] = [
  {
    title: 'Connect',
    description:
      'Connect the systems and data needed for your selected customer journey. Start with the relevant purchase information, content and services.',
  },
  {
    title: 'Configure',
    description:
      'Define the journey, branding, content, business rules and success measures. Business teams own the experience; technical teams manage integrations, identity and access.',
  },
  {
    title: 'Launch',
    description:
      'Give customers access through supported messages, website links or account journeys. Start with one focused journey, then extend across products, brands and markets.',
  },
  {
    title: 'Measure',
    description:
      'Track task completion, engagement, support demand and repeat purchasing against an agreed baseline. Use the findings to improve the experience and guide expansion.',
  },
];

export function HowItWorksSection() {
  return (
    <section
      id="how-it-works"
      aria-labelledby="how-it-works-heading"
      className="bg-white py-24 lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <header className="mb-14 grid gap-6 lg:mb-20 lg:grid-cols-2 lg:items-end lg:gap-16">
          <div>
            <p className="mb-6 text-sm font-bold uppercase tracking-[0.2em] text-foreground">
              How it works
            </p>
            <h2
              id="how-it-works-heading"
              className="font-serif text-xl font-bold text-[#122A45] text-balance md:text-2xl lg:text-3xl xl:text-4xl"
            >
              Connect. Configure. Launch. Measure.
            </h2>
          </div>
          <p className="max-w-xl text-lg leading-relaxed text-slate-600 lg:justify-self-end">
            Your existing commerce, order management, messaging, CRM and
            loyalty systems retain their roles. InvoTools Engage brings purchase
            context, useful guidance and relevant actions together through your
            branded customer portal.
          </p>
        </header>

        <div className="rounded-[28px] border border-[#e6edf7] bg-[#f7f9fd] px-6 py-10 sm:px-10 lg:px-12 lg:py-14">
          <ProcessJourney steps={steps} />
        </div>
      </div>
    </section>
  );
}
