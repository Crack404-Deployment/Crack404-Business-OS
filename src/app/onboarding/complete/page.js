'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { CheckCircle2, ArrowRight, Rocket, ShieldCheck } from 'lucide-react';
import OnboardingLayout from '@/components/onboarding/OnboardingLayout';

export default function SetupComplete() {
  const [isProvisioning, setIsProvisioning] = useState(true);

  // Simulate the background tenant database provisioning delay
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsProvisioning(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    // Passing currentStep={7} ensures all 6 steps in the progress bar show as completed (checked)
    <OnboardingLayout currentStep={7}>
      <div className="text-center space-y-8 py-4 sm:py-8">
        
        {/* Animated Success Icon Area */}
        <div className="relative flex justify-center items-center h-24">
          {isProvisioning ? (
            <div className="relative flex items-center justify-center">
              <div className="absolute w-20 h-20 border-4 border-slate-100 border-t-slate-900 rounded-full animate-spin"></div>
              <Rocket className="w-8 h-8 text-slate-400 animate-pulse" />
            </div>
          ) : (
            <div className="relative flex items-center justify-center animate-in zoom-in duration-500 spring-bounce">
              <div className="absolute w-24 h-24 bg-emerald-500/20 rounded-full blur-xl animate-pulse"></div>
              <CheckCircle2 className="w-20 h-20 text-emerald-500 drop-shadow-md relative z-10" />
            </div>
          )}
        </div>

        {/* Text Content */}
        <div className="space-y-3 max-w-md mx-auto">
          <h1 className="text-3xl sm:text-4xl font-black tracking-tight text-slate-900">
            {isProvisioning ? 'Provisioning Workspace...' : "You're all set!"}
          </h1>
          <p className="text-sm sm:text-base font-medium text-slate-500 leading-relaxed">
            {isProvisioning 
              ? 'We are setting up your secure tenant database, configuring your CRM, and preparing your POS terminals.' 
              : 'Your 14-day free trial is active. Your CRM, POS, and HR modules are ready to use.'}
          </p>
        </div>

        {/* Provisioning Checklist (Disappears when done) */}
        {isProvisioning && (
          <div className="max-w-xs mx-auto space-y-3 text-left bg-slate-50 border border-slate-100 p-5 rounded-2xl">
            <div className="flex items-center gap-3 text-sm font-bold text-slate-700">
              <CheckCircle2 className="w-4 h-4 text-emerald-500" /> Organization Created
            </div>
            <div className="flex items-center gap-3 text-sm font-bold text-slate-700">
              <CheckCircle2 className="w-4 h-4 text-emerald-500" /> Secure Database Isolated
            </div>
            <div className="flex items-center gap-3 text-sm font-bold text-slate-400 animate-pulse">
              <div className="w-4 h-4 border-2 border-slate-300 border-t-slate-500 rounded-full animate-spin" /> Finalizing Dashboard
            </div>
          </div>
        )}

        {/* Action Area */}
        <div className={`pt-4 transition-all duration-700 ${isProvisioning ? 'opacity-0 translate-y-4 pointer-events-none' : 'opacity-100 translate-y-0'}`}>
          <Link 
            href="/dashboard" // Redirects to the massive dashboard we built earlier
            className="group flex items-center justify-center gap-2 w-full sm:w-auto min-w-[240px] mx-auto px-8 py-4 bg-orange-600 hover:bg-orange-700 text-white rounded-xl font-bold text-sm transition-all shadow-[0_4px_14px_rgba(234,88,12,0.25)] focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 active:scale-[0.98]"
          >
            Go to Dashboard
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </Link>
          <div className="flex items-center justify-center gap-1.5 mt-4 text-xs font-bold text-slate-400">
            <ShieldCheck className="w-4 h-4" /> End-to-End Encrypted Session
          </div>
        </div>

      </div>
    </OnboardingLayout>
  );
}