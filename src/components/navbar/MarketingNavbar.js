"use client";
import { useState } from 'react';
import { FaCubes, FaBars, FaTimes } from 'react-icons/fa';

export default function MarketingNavbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-[#080b12]/90 backdrop-blur-md border-b border-[#1e293b] px-6 lg:px-8 h-[75px] flex items-center justify-between">
      
      {/* Brand Logo - EXACT MATCH TO DASHBOARD */}
      <div className="flex items-center gap-3 text-xl font-bold">
        <FaCubes className="text-transparent bg-gradient-to-r from-[#6e56f8] to-[#a855f7] bg-clip-text" />
        <span>Crack<span className="text-[#64748b]">404</span></span>
      </div>

      {/* Desktop Links */}
      <div className="hidden md:flex items-center gap-8 text-sm text-[#94a3b8] font-medium">
        <a href="#" className="hover:text-white transition-colors">Features</a>
        <a href="#" className="hover:text-white transition-colors">Modules</a>
        <a href="#" className="hover:text-white transition-colors">Pricing</a>
        <button className="px-5 py-2 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-500 transition-all shadow-[0_0_15px_rgba(37,99,235,0.4)]">
          Login
        </button>
      </div>

      {/* Mobile Menu Toggle */}
      <button 
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        className="md:hidden text-[#94a3b8] text-2xl hover:text-white transition-colors"
      >
        {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="absolute top-[75px] left-0 w-full bg-[#0e121b] border-b border-[#1e293b] p-6 flex flex-col gap-4 md:hidden shadow-xl">
          <a href="#" className="text-[#94a3b8] hover:text-white transition-colors">Features</a>
          <a href="#" className="text-[#94a3b8] hover:text-white transition-colors">Modules</a>
          <a href="#" className="text-[#94a3b8] hover:text-white transition-colors">Pricing</a>
          <button className="px-5 py-2 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-500 transition-all mt-2">
            Login
          </button>
        </div>
      )}
    </nav>
  );
}