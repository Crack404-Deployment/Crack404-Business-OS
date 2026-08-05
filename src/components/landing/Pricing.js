"use client";
import { useState } from 'react';

export default function Pricing() {
  const [isAnnual, setIsAnnual] = useState(false);

  return (
    <section className="py-24 bg-[#f0fdf4]"> {/* Light green bg from your image */}
      <div className="max-w-6xl mx-auto px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">
          Transparent pricing plans, find the<br />perfect fit for your needs
        </h2>

        {/* Toggle Switch */}
        <div className="flex items-center justify-center gap-4 mb-12 text-sm font-medium text-gray-600">
          <span>Monthly</span>
          <button 
            onClick={() => setIsAnnual(!isAnnual)}
            className="w-12 h-6 bg-gray-300 rounded-full relative transition-colors duration-300 cursor-pointer"
          >
            <div className={`absolute top-1 left-1 w-4 h-4 bg-white rounded-full shadow-md transition-transform duration-300 ${isAnnual ? 'translate-x-6 bg-orange-500' : ''}`}></div>
          </button>
          <span>Annually <span className="text-orange-600 text-xs">Save 20%</span></span>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Free Plan */}
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 text-left">
            <h3 className="text-2xl font-bold text-gray-800">Free</h3>
            <p className="text-gray-500 text-sm mb-4">Free for small team</p>
            <div className="border-b border-gray-100 mb-6"></div>
            <div className="text-4xl font-bold text-gray-800 mb-6">$0<span className="text-gray-400 text-lg font-normal">/month</span></div>
            <ul className="space-y-3 text-sm text-gray-600 mb-8">
              <li className="flex items-center gap-2"><span className="text-green-500">✓</span> Unlimited cards</li>
              <li className="flex items-center gap-2"><span className="text-green-500">✓</span> Up to 10 boards per</li>
              <li className="flex items-center gap-2"><span className="text-green-500">✓</span> Unlimited Power-Ups</li>
              <li className="flex items-center gap-2"><span className="text-green-500">✓</span> Unlimited storage</li>
              <li className="flex items-center gap-2"><span className="text-green-500">✓</span> Unlimited activity log</li>
              <li className="flex items-center gap-2"><span className="text-green-500">✓</span> Assignee and due dates</li>
            </ul>
            <button className="w-full py-3 rounded-full border-2 border-gray-800 text-gray-800 font-semibold hover:bg-gray-800 hover:text-white transition-colors">Choose Plan</button>
          </div>

          {/* Standard Plan (Highlighted) */}
          <div className="bg-[#322551] text-white rounded-2xl p-8 shadow-xl text-left relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-orange-500 text-white text-xs font-bold py-1 px-8 transform rotate-45 translate-x-6 translate-y-6 shadow-md">Most Popular</div>
            <h3 className="text-2xl font-bold">Standard</h3>
            <p className="text-purple-200 text-sm mb-4">Most popular deal</p>
            <div className="border-b border-purple-400/30 mb-6"></div>
            <div className="text-4xl font-bold mb-6">${isAnnual ? '8' : '10'}<span className="text-purple-200 text-lg font-normal">/month</span></div>
            <ul className="space-y-3 text-sm mb-8">
              <li className="flex items-center gap-2"><span className="text-green-300">✓</span> Unlimited cards</li>
              <li className="flex items-center gap-2"><span className="text-green-300">✓</span> Up to 10 boards per</li>
              <li className="flex items-center gap-2"><span className="text-green-300">✓</span> Unlimited Power-Ups</li>
              <li className="flex items-center gap-2"><span className="text-green-300">✓</span> Unlimited storage</li>
              <li className="flex items-center gap-2"><span className="text-green-300">✓</span> Unlimited activity log</li>
              <li className="flex items-center gap-2"><span className="text-green-300">✓</span> Assignee and due dates</li>
            </ul>
            <button className="w-full py-3 rounded-full bg-white text-purple-600 font-semibold hover:bg-gray-100 transition-colors">Choose Plan</button>
          </div>

          {/* Premium Plan */}
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 text-left">
            <h3 className="text-2xl font-bold text-gray-800">Premium</h3>
            <p className="text-gray-500 text-sm mb-4">For your large team</p>
            <div className="border-b border-gray-100 mb-6"></div>
            <div className="text-4xl font-bold text-gray-800 mb-6">${isAnnual ? '16' : '20'}<span className="text-gray-400 text-lg font-normal">/month</span></div>
            <ul className="space-y-3 text-sm text-gray-600 mb-8">
              <li className="flex items-center gap-2"><span className="text-green-500">✓</span> Unlimited cards</li>
              <li className="flex items-center gap-2"><span className="text-green-500">✓</span> Up to 10 boards per</li>
              <li className="flex items-center gap-2"><span className="text-green-500">✓</span> Unlimited Power-Ups</li>
              <li className="flex items-center gap-2"><span className="text-green-500">✓</span> Unlimited storage</li>
              <li className="flex items-center gap-2"><span className="text-green-500">✓</span> Unlimited activity log</li>
              <li className="flex items-center gap-2"><span className="text-green-500">✓</span> Assignee and due dates</li>
            </ul>
            <button className="w-full py-3 rounded-full border-2 border-gray-800 text-gray-800 font-semibold hover:bg-gray-800 hover:text-white transition-colors">Choose Plan</button>
          </div>

        </div>
      </div>
    </section>
  );
}