'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { KeyRound, Send } from 'lucide-react';

export default function ForgotPassword() {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-white font-sans overflow-hidden px-4">
      
      {/* Background Animated Ambient Lights */}
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.15, 0.25, 0.15],
          x: [0, 30, 0]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[10%] left-[20%] w-96 h-96 bg-orange-400 rounded-full blur-[120px] pointer-events-none -z-10"
      />
      <motion.div 
        animate={{ 
          scale: [1, 1.15, 1],
          opacity: [0.1, 0.2, 0.1],
          y: [0, -30, 0]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-[10%] right-[20%] w-[28rem] h-[28rem] bg-amber-400 rounded-full blur-[130px] pointer-events-none -z-10"
      />

      {/* Subtle Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none -z-20" />

      {/* Animated Card Container */}
      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="relative max-w-md w-full bg-white/80 backdrop-blur-xl border border-slate-200/80 rounded-3xl p-8 sm:p-10 shadow-[0_20px_60px_rgba(234,88,12,0.08)] overflow-hidden"
      >
        {/* Header */}
        <div className="text-center mb-8">
         
          
          <h2 className="text-3xl font-black text-slate-900 tracking-tight mb-2">
            Reset Password
          </h2>
          <p className="text-sm font-medium text-slate-500 px-2">
            Enter your email address and we will send you a link to reset your password.
          </p>
        </div>
        
        {/* Form */}
        <form className="space-y-6 relative z-10">
          <div className="space-y-1.5 text-left">
            <label className="block text-sm font-semibold text-slate-700">Email Address</label>
            <div className="relative">
              <input 
                type="email" 
                className="w-full bg-slate-50/80 border border-slate-200 rounded-xl px-4 py-3.5 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-orange-500/30 focus:border-orange-500 transition-all duration-300 backdrop-blur-sm" 
                placeholder="name@company.com" 
                required
              />
            </div>
          </div>

          <Link href="/auth/otp" className="block w-full">
            <motion.button 
              type="button"
              whileHover={{ scale: 1.02, y: -1 }}
              whileTap={{ scale: 0.98 }}
              className="w-full py-3.5 mt-2 rounded-xl bg-gradient-to-r from-orange-600 to-amber-600 text-white font-bold tracking-wide shadow-lg shadow-orange-600/25 hover:shadow-orange-600/40 transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
            >
              <Send className="w-4 h-4" /> Send Reset Link
            </motion.button>
          </Link>
        </form>

        {/* Footer Link */}
        <p className="text-center text-slate-500 text-sm mt-8 font-medium relative z-10">
          Remembered your password?{' '}
          <Link href="/auth/login" className="text-orange-600 hover:text-orange-700 transition-colors font-semibold">
            Sign in
          </Link>
        </p>
      </motion.div>
    </div>
  );
}