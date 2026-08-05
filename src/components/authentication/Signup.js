'use client';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Sparkles, UserPlus } from 'lucide-react';

export default function Signup() {
  return (
    <div className="min-h-screen flex bg-white font-sans overflow-hidden">
      
      {/* Left Column - Signup Form */}
      <div className="relative flex-1 flex flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none lg:w-1/2 xl:px-24 bg-white z-10">
        
        {/* Outer Background Animated Ambient Lights (Left Side) */}
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.15, 0.3, 0.15],
            x: [0, 20, 0]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-10 left-10 w-72 h-72 bg-orange-400 rounded-full blur-[100px] pointer-events-none -z-10"
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.15, 1],
            opacity: [0.1, 0.25, 0.1],
            y: [0, -20, 0]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-10 right-10 w-80 h-80 bg-amber-400 rounded-full blur-[120px] pointer-events-none -z-10"
        />

        <div className="mx-auto w-full max-w-sm lg:max-w-md">
          
          {/* Animated Card Container */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="relative rounded-3xl p-8 sm:p-10 bg-white/80 backdrop-blur-xl border border-slate-200/80 shadow-[0_20px_60px_rgba(234,88,12,0.08)] overflow-hidden"
          >
            {/* ================= BACKGROUND ANIMATIONS INSIDE THE CARD ================= */}
            {/* 1. Animated Border Glow */}
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              className="absolute -inset-[200%] bg-[conic-gradient(from_0deg,transparent_0_300deg,#f97316_360deg)] opacity-20 pointer-events-none -z-20"
            />

            {/* 2. Floating Inner Glass Glow 1 */}
            <motion.div 
              animate={{ 
                x: [0, 30, -20, 0], 
                y: [0, -30, 20, 0],
                scale: [1, 1.1, 0.9, 1]
              }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-12 -right-12 w-48 h-48 bg-orange-200/60 rounded-full blur-3xl pointer-events-none -z-10"
            />

            {/* 3. Floating Inner Glass Glow 2 */}
            <motion.div 
              animate={{ 
                x: [0, -20, 30, 0], 
                y: [0, 20, -30, 0],
                scale: [1, 0.9, 1.1, 1]
              }}
              transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -bottom-12 -left-12 w-48 h-48 bg-amber-200/50 rounded-full blur-3xl pointer-events-none -z-10"
            />
            {/* ======================================================================= */}

            {/* Header */}
            <div className="mb-8 relative z-10">
            

              <h2 className="text-3xl font-black text-slate-900 tracking-tight mb-2">
                Create Account
              </h2>
              <p className="text-sm font-medium text-slate-500">
                Join Crack404 and transform your enterprise
              </p>
            </div>
            
            {/* Form */}
            <form className="space-y-5 relative z-10">
              <div className="space-y-1.5">
                <label className="block text-sm font-semibold text-slate-700">Full Name</label>
                <div className="relative">
                  <input 
                    type="text" 
                    className="w-full bg-slate-50/80 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-orange-500/30 focus:border-orange-500 transition-all duration-300 backdrop-blur-sm" 
                    placeholder="John Doe" 
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="block text-sm font-semibold text-slate-700">Email Address</label>
                <div className="relative">
                  <input 
                    type="email" 
                    className="w-full bg-slate-50/80 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-orange-500/30 focus:border-orange-500 transition-all duration-300 backdrop-blur-sm" 
                    placeholder="name@company.com" 
                  />
                </div>
              </div>
              
              <div className="space-y-1.5">
                <label className="block text-sm font-semibold text-slate-700">Password</label>
                <div className="relative">
                  <input 
                    type="password" 
                    className="w-full bg-slate-50/80 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-orange-500/30 focus:border-orange-500 transition-all duration-300 backdrop-blur-sm" 
                    placeholder="••••••••" 
                  />
                </div>
              </div>

              {/* Wrapping the animated button in the Next.js Link */}
              <Link href="/auth/otp" className="block w-full pt-2">
                <motion.button 
                  type="button"
                  whileHover={{ scale: 1.02, y: -1 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-orange-600 to-amber-600 text-white font-bold tracking-wide shadow-lg shadow-orange-600/25 hover:shadow-orange-600/40 transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <UserPlus className="w-4 h-4" /> Sign Up
                </motion.button>
              </Link>
            </form>

            <p className="text-center text-slate-500 text-sm mt-6 font-medium relative z-10">
              Already have an account?{' '}
              <Link href="/auth/login" className="text-orange-600 hover:text-orange-700 transition-colors font-semibold">
                Sign in
              </Link>
            </p>
          </motion.div>

        </div>
      </div>

      {/* Right Column - Big Image (Desktop Only) */}
      <div className="hidden lg:block relative w-0 flex-1 bg-slate-900 overflow-hidden">
        <Image 
          src="/login.png" 
          alt="Crack404 Business OS Display" 
          fill 
          className="absolute inset-0 h-full w-full object-cover" 
        />
        
        {/* Soft Orange Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-orange-950/40 to-transparent opacity-90" />
        
        {/* Floating Text Over Image (Centered) */}
        <div className="absolute inset-0 flex flex-col items-center justify-center p-12 text-center text-white z-10">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col items-center"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white text-xs font-bold mb-6 uppercase tracking-wider shadow-sm">
              Enterprise Ready
            </div>
            <h3 className="text-4xl lg:text-5xl font-black mb-4 leading-tight drop-shadow-lg max-w-2xl mx-auto">
              Streamline your entire business operation.
            </h3>
            <p className="text-slate-200 text-lg font-medium max-w-xl drop-shadow-md mx-auto">
              Join forward-thinking companies securely managing their sales, HR, and inventory in one unified platform.
            </p>
          </motion.div>
        </div>
      </div>
      
    </div>
  );
}