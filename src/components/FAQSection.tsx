/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { FAQS } from '../data';
import { HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq-section" className="py-20 bg-brand-offwhite text-brand-dark-text border-b border-gray-200 relative overflow-hidden">
      {/* Background blueprint elements */}
      <div className="absolute top-0 right-0 w-64 h-64 border-r border-t border-brand-royal/5 pointer-events-none rounded-tr-full"></div>

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="px-3 py-1 bg-brand-royal text-brand-light text-[10px] font-black uppercase tracking-[0.2em] rounded-sm mb-4 inline-block">
            COMMON INQUIRIES
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-black tracking-tight text-brand-navy uppercase">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600 font-sans text-sm md:text-base mt-2">
            Clear, upfront, and transparent answers. No hype, no smoke and mirrors.
          </p>
        </div>

        {/* Accordions */}
        <div className="flex flex-col gap-4 max-w-3xl mx-auto">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div 
                key={idx}
                className="bg-white border border-gray-200 rounded-sm overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                <button
                  id={`faq-btn-${idx}`}
                  onClick={() => toggleAccordion(idx)}
                  className="w-full text-left px-6 py-5 flex justify-between items-center gap-4 cursor-pointer focus:outline-none animate-none"
                >
                  <div className="flex items-center gap-3">
                    <HelpCircle className="w-5 h-5 text-brand-royal shrink-0" />
                    <span className="font-display font-bold text-sm md:text-base text-brand-navy uppercase">
                      {faq.question}
                    </span>
                  </div>
                  <div className="shrink-0 text-gray-400">
                    {isOpen ? <ChevronUp className="w-4 h-4 text-brand-royal" /> : <ChevronDown className="w-4 h-4" />}
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="border-t border-gray-100 bg-gray-50/50"
                    >
                      <div className="px-6 py-5 text-xs md:text-sm text-gray-600 font-sans leading-relaxed">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Compliance Footnote */}
        <div className="text-center text-[11px] text-gray-400 font-mono mt-12">
          HAVE A DIFFERENT QUESTION? REACH OUT DIRECTLY TO TEAM@ULTIMATESUCCESS.COM
        </div>

      </div>
    </section>
  );
}
