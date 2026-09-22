import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

type FAQItem = { q: string; a: string };

export default function FAQAccordion({ faqs }: { faqs: FAQItem[] }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="space-y-4">
      {faqs.map((faq, i) => (
        <div
          key={i}
          className={`rounded-2xl border-2 transition-all duration-300 overflow-hidden ${
            open === i ? 'border-electric-400 bg-electric-50/50' : 'border-ink-100 bg-white hover:border-ink-200'
          }`}
        >
          <button
            className="w-full flex items-center justify-between gap-4 p-5 lg:p-6 text-left"
            onClick={() => setOpen(open === i ? null : i)}
            aria-expanded={open === i}
          >
            <span className="font-bold text-ink-800 text-base lg:text-lg">{faq.q}</span>
            <span className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
              open === i ? 'bg-electric-500 text-ink-950 rotate-180' : 'bg-ink-100 text-ink-500'
            }`}>
              <ChevronDown className="w-5 h-5" />
            </span>
          </button>
          <div
            className={`grid transition-all duration-300 ${
              open === i ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
            }`}
          >
            <div className="overflow-hidden">
              <p className="px-5 lg:px-6 pb-5 lg:pb-6 text-ink-500 leading-relaxed">{faq.a}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
