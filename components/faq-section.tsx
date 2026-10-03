'use client';

import { useEffect, useRef, useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { ScrollBlurText } from './scroll-blur-text';

const faqs = [
  {
    question: 'What is Invotools Engage?',
    answer:
      'InvoTools Engage is a Post-Purchase Customer Engagement Platform for enterprise commerce brands and retailers. It connects purchase information, product guidance, service routes and relevant next actions through a branded customer experience.',
  },
  {
    question: 'Does Engage replace our existing systems?',
    answer:
      'No. Your commerce, messaging, CRM, loyalty and service platforms retain their roles. Engage connects the post-purchase experience around them.',
  },
  {
    question: 'How do customers access the experience?',
    answer:
      'Customers reach your branded portal through supported order communications, website links or account journeys. Access and sign-in are agreed around your existing customer experience.',
  },
  {
    question: "Why wouldn't we simply extend our existing systems?",
    answer:
      'Your existing platforms may already meet the need. Engage is designed for journeys that span multiple systems, bringing purchase context, reusable workflows and business controls together. Compare the customer experience and the effort required to launch, maintain and extend it.',
  },
  {
    question: 'What is a typical initial deployment?',
    answer:
      'We recommend starting with one brand, one product category and one ownership journey. Focus on a measurable business problem, assess customer adoption and use the results to guide wider rollout.',
  },
  {
    question:
      'Can Engage connect returns, loyalty and other post-purchase services?',
    answer:
      'These services can form part of the selected journey through supported integrations. The agreed scope identifies which information and actions appear in Engage and which continue in your existing systems.',
  },
  {
    question: 'Which capabilities and integrations are available?',
    answer:
      'During the demonstration, we distinguish available capabilities and supported integrations from custom requirements and roadmap plans, including future agent access.',
  },
  {
    question: 'How long does implementation take?',
    answer:
      'Timing depends on the selected journey, integrations, data readiness and your approval processes. During discovery, we agree scope, responsibilities and milestones, then establish the delivery timeline.',
  },
  {
    question: 'What involvement is needed from our team?',
    answer:
      'Nominate a business sponsor and content owner, select an initial journey, and involve your technical team in confirming data, integrations and access. Together, we agree responsibilities and success measures before rollout.',
  },
  {
    question: 'How do we measure success?',
    answer:
      'Agree a baseline and outcomes such as task completion, support contacts per order, repeat purchasing and journey maintenance effort. Use comparison groups where practical to distinguish associated activity from genuinely additional results.',
  },
  {
    question: 'How are service information and promotional content handled?',
    answer:
      'Keep essential purchase information and help accessible. Promotional content and personalisation should follow customer preferences and the permissions applicable to each market and channel.',
  },
  {
    question: 'What can our technology and security teams review?',
    answer:
      'Request the applicable architecture and security information during evaluation. Confirm data flows, storage, access controls, service commitments and ongoing responsibilities for the proposed deployment.',
  },
  {
    question: 'How is Engage priced?',
    answer:
      'Pricing is provided through a scoped proposal following a discussion of your needs and a demonstration. The proposal sets out subscription scope, implementation fees and any relevant third-party costs.',
  },
  {
    question: 'Do we need InvoTools Core or Smart Receipts and Invoices?',
    answer:
      'No. Engage is a separate offering and does not require adoption of InvoTools Core, Smart Receipts or Smart Invoices.',
  },
];

export function FaqSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  // Animation disabled - all text animations removed from landing page

  return (
    <section ref={sectionRef} id="faq" className="py-24 lg:py-32 bg-background">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 lg:mb-20">
          <p className="reveal text-sm uppercase tracking-[0.2em] text-foreground font-bold mb-6">
            Questions & Answers
          </p>
          <ScrollBlurText
            text="Frequently asked questions"
            className="font-serif text-xl md:text-2xl lg:text-3xl xl:text-4xl text-[#122A45] text-balance mb-6 font-bold max-w-3xl mx-auto"
            disableTransition={true}
            disableBlur={true}
          />
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-0">
          {faqs.map((faq, index) => (
            <div
              key={faq.question}
              className="reveal border-b border-slate-300 last:border-b-0"
            >
              <button
                onClick={() =>
                  setExpandedIndex(expandedIndex === index ? null : index)
                }
                className="w-full py-6 flex items-center justify-between hover:text-slate-700 transition-colors"
              >
                <h3 className="text-lg font-semibold text-slate-900 text-left">
                  {faq.question}
                </h3>
                <div
                  className="shrink-0 ml-4 transition-transform duration-200"
                  style={{
                    transform:
                      expandedIndex === index
                        ? 'rotate(180deg)'
                        : 'rotate(0deg)',
                  }}
                >
                  <ChevronDown className="w-6 h-6 text-slate-600" />
                </div>
              </button>
              {expandedIndex === index && (
                <div className="pb-6 text-slate-700 leading-relaxed">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
