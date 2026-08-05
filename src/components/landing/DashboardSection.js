'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { statisticsCards } from '@/lib/landingData';

const StatCard = ({ stat, index }) => {
  const Icon = stat.icon;
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
      className="relative rounded-3xl p-8 backdrop-blur-md bg-gradient-to-br from-gray-900/80 to-black/80 border border-gray-800 hover:border-gray-600 transition-all overflow-hidden group"
    >
      <div className="absolute top-0 right-0 w-24 h-24 bg-indigo-500/10 rounded-full blur-2xl group-hover:bg-indigo-500/20 transition-colors" />
      <div className="relative z-10">
        <Icon className="w-12 h-12 text-indigo-500 mb-4" />
        <h3 className="text-4xl font-800 text-gray-100 mb-2">{stat.number}</h3>
        <p className="text-gray-400 font-500">{stat.label}</p>
      </div>
    </motion.div>
  );
};

const DashboardMockup = () => (
  <div className="relative h-80 flex items-center justify-center gap-8 perspective-1000">
    <motion.div
      initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, delay: 0.2 }}
      whileHover={{ scale: 1.05, y: -10, rotateY: 5 }}
      className="absolute left-0 w-72 h-72 rounded-2xl backdrop-blur-md bg-gradient-to-br from-gray-900 to-black border border-gray-800 shadow-2xl"
      style={{ transform: 'rotateY(-15deg)' }}
    >
      <div className="p-6 h-full flex flex-col justify-between">
        <div className="space-y-3">
          <div className="h-3 bg-gray-800 rounded w-3/4" />
          <div className="h-2 bg-gray-800 rounded w-1/2" />
        </div>
        <div className="grid grid-cols-2 gap-2">
          <div className="h-16 bg-gray-800/50 rounded-lg" />
          <div className="h-16 bg-gray-800/50 rounded-lg" />
        </div>
      </div>
    </motion.div>

    <motion.div
      initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}
      whileHover={{ scale: 1.08, y: -15 }}
      className="relative z-20 w-96 h-80 rounded-3xl backdrop-blur-md bg-gradient-to-br from-gray-900 to-black border border-gray-700 shadow-2xl p-8"
    >
      <div className="space-y-4 h-full flex flex-col justify-between">
        <div>
          <div className="h-4 bg-gray-700 rounded w-2/3 mb-4" />
          <div className="h-3 bg-gray-800 rounded w-1/2" />
        </div>
        <div className="space-y-2">
          <div className="flex gap-2">
            <div className="h-20 bg-gradient-to-r from-indigo-900/40 to-blue-900/40 rounded-lg flex-1" />
            <div className="h-20 bg-gradient-to-r from-blue-900/40 to-cyan-900/40 rounded-lg flex-1" />
          </div>
          <div className="flex gap-2">
            <div className="h-16 bg-gradient-to-r from-purple-900/40 to-indigo-900/40 rounded-lg flex-1" />
            <div className="h-16 bg-gradient-to-r from-teal-900/40 to-emerald-900/40 rounded-lg flex-1" />
          </div>
        </div>
      </div>
    </motion.div>

    <motion.div
      initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, delay: 0.2 }}
      whileHover={{ scale: 1.05, y: -10, rotateY: -5 }}
      className="absolute right-0 w-72 h-72 rounded-2xl backdrop-blur-md bg-gradient-to-br from-gray-900 to-black border border-gray-800 shadow-2xl"
      style={{ transform: 'rotateY(15deg)' }}
    >
      <div className="p-6 h-full flex flex-col justify-between">
        <div className="space-y-3">
          <div className="h-3 bg-gray-800 rounded w-3/4" />
          <div className="h-2 bg-gray-800 rounded w-1/2" />
        </div>
        <div className="grid grid-cols-2 gap-2">
          <div className="h-16 bg-gray-800/50 rounded-lg" />
          <div className="h-16 bg-gray-800/50 rounded-lg" />
        </div>
      </div>
    </motion.div>
  </div>
);

export default function DashboardSection() {
  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <DashboardMockup />
        <motion.div
          initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-20"
        >
          {statisticsCards.map((stat, index) => (
            <StatCard key={index} stat={stat} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}