"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  items: FAQItem[];
}

export function FAQAccordion({ items }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="divide-y divide-gold-light/50">
      {items.map((item, index) => (
        <div key={index} className="py-5">
          <button
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            className="w-full flex items-start justify-between gap-4 text-left group"
          >
            <span className="font-heading text-lg text-navy group-hover:text-gold transition-colors duration-200">
              {item.question}
            </span>
            <span className="shrink-0 mt-0.5 text-gold">
              {openIndex === index ? <Minus size={16} /> : <Plus size={16} />}
            </span>
          </button>
          <div
            className={`overflow-hidden transition-all duration-300 ${
              openIndex === index ? "max-h-64 mt-4" : "max-h-0"
            }`}
          >
            <p className="text-sm text-navy/65 leading-relaxed">{item.answer}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
