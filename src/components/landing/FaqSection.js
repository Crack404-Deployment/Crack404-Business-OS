'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import { faqItems } from '@/lib/landingData';

const AccordionItem = ({ item, isOpen, onToggle }) => (
  <motion.div 
    className={`mb-4 rounded-2xl overflow-hidden border transition-all duration-300 ${
      isOpen 
        ? 'border-orange-200 bg-orange-50/50 shadow-sm' 
        : 'border-slate-200 bg-white hover:border-orange-100 hover:shadow-[0_4px_20px_rgb(0,0,0,0.03)]'
    }`}
    layout
  >
    <button 
      onClick={() => onToggle(item.id)} 
      className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
    >
      <span className={`font-semibold text-lg transition-colors duration-300 ${
        isOpen ? 'text-orange-700' : 'text-slate-800'
      }`}>
        {item.question}
      </span>
      
      {/* Animated Plus/Minus Icon */}
      <div className={`ml-4 flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full transition-colors duration-300 ${
        isOpen ? 'bg-orange-600 text-white shadow-md shadow-orange-600/20' : 'bg-slate-100 text-slate-500'
      }`}>
        {isOpen ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
      </div>
    </button>
    
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          initial={{ height: 0, opacity: 0 }} 
          animate={{ height: 'auto', opacity: 1 }} 
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="overflow-hidden"
        >
          <p className="px-6 pb-5 text-slate-600 leading-relaxed font-medium">
            {item.answer}
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  </motion.div>
);

export default function FaqSection() {
  // Set default to 1 so the first question is open when the page loads
  const [openFAQ, setOpenFAQ] = useState(1);

  const toggleFAQ = (id) => {
    setOpenFAQ(openFAQ === id ? null : id);
  };

  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-slate-50 overflow-hidden font-sans border-t border-slate-100">
      <div className="max-w-3xl mx-auto">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.6 }} 
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-sm md:text-base font-bold tracking-widest text-orange-600 mb-3 uppercase">
            Support & Knowledge Base
          </p>
          <h2 className="text-4xl sm:text-5xl font-900 text-slate-900 mb-4 tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-slate-500 font-medium">
            Everything you need to know about scaling your business with Crack404.
          </p>
        </motion.div>

        {/* FAQ Accordion List */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative z-10"
        >
          {faqItems.map((item) => (
            <AccordionItem 
              key={item.id} 
              item={item} 
              isOpen={openFAQ === item.id} 
              onToggle={toggleFAQ} 
            />
          ))}
        </motion.div>
        
      </div>
    </section>
  );
}