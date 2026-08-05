'use client';
import React from 'react';
import { motion } from 'framer-motion';

export default function CtaSection() {
  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl backdrop-blur-md bg-gradient-to-r from-orange-900/40 to-purple-900/40 border border-gray-800 p-12"
        >
          <h2 className="text-4xl sm:text-5xl font-800 text-gray-100 mb-6">
            Ready to Transform Your Dashboard?
          </h2>
          <p className="text-xl text-black-700 mb-8">
            Join thousands of satisfied customers using Crack404 for their admin needs
          </p>
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(249, 115, 22, 0.4)' }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-4 bg-gradient-to-r from-orange-600 to-purple-600 text-white font-700 rounded-xl hover:from-orange-700 hover:to-purple-700 transition-all shadow-lg inline-block"
          >
            Get Started Today
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}