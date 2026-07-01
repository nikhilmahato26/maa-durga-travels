import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, HelpCircle } from 'lucide-react';
import { FAQS } from '../data/site';

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  return (
    <section className="py-20 md:py-28 bg-white relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="bg-primary/5 text-primary text-[11px] font-bold px-4 py-2 rounded-full uppercase tracking-widest border border-primary/10">
            Support FAQ
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-primary mt-4 tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-brand-text-muted mt-3 text-sm md:text-base leading-relaxed">
            Have questions about bookings, drivers, pricing, or rental policies? Here are the quick answers.
          </p>
        </div>

        {/* FAQ List */}
        <div className="space-y-4 max-w-3xl mx-auto">
          {FAQS.map((faq, idx) => {
            const isOpen = activeIndex === idx;
            return (
              <div
                key={idx}
                className="bg-slate-50 border border-slate-100 hover:border-slate-200/80 rounded-2xl overflow-hidden transition-colors duration-300"
              >
                {/* Header Toggle */}
                <button
                  onClick={() => toggleFAQ(idx)}
                  className="w-full flex items-center justify-between p-5 md:p-6 text-left focus:outline-none cursor-pointer"
                >
                  <div className="flex items-center space-x-3.5 pr-4">
                    <HelpCircle className="w-5 h-5 text-secondary flex-shrink-0" />
                    <span className="text-slate-800 font-bold text-sm md:text-base leading-snug">
                      {faq.question}
                    </span>
                  </div>
                  <div className="p-1 bg-white border border-slate-100 rounded-lg flex-shrink-0 shadow-xs">
                    {isOpen ? (
                      <Minus className="w-4 h-4 text-primary" />
                    ) : (
                      <Plus className="w-4 h-4 text-primary animate-pulse-slow" />
                    )}
                  </div>
                </button>

                {/* Answer Content */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                    >
                      <div className="px-5 pb-6 md:px-6 md:pb-6 text-xs md:text-sm text-brand-text-muted leading-relaxed font-medium border-t border-slate-100/50 pt-4 bg-white/40">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
