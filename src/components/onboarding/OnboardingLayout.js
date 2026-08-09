'use client';
import { ShieldCheck, Layers } from 'lucide-react';
import OnboardingProgress from './OnboardingProgress';

// Added maxWidth prop, defaulting to max-w-2xl for the smaller forms
export default function OnboardingLayout({ children, currentStep = 1, totalSteps = 6, maxWidth = "max-w-2xl" }) {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans flex flex-col selection:bg-orange-500/20 selection:text-orange-900 relative overflow-hidden">
      
      <style>{`
        @keyframes drift {
          0% { transform: rotate(0deg) translate(0px, 0px) scale(1); }
          33% { transform: rotate(5deg) translate(30px, -40px) scale(1.05); }
          66% { transform: rotate(-5deg) translate(-20px, 30px) scale(0.95); }
          100% { transform: rotate(0deg) translate(0px, 0px) scale(1); }
        }
        .animate-blob-1 { animation: drift 15s infinite ease-in-out alternate; }
        .animate-blob-2 { animation: drift 18s infinite ease-in-out alternate-reverse; }
      `}</style>

      <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[800px] h-[600px] pointer-events-none z-0">
        <div className="w-full h-full bg-orange-500/10 blur-[120px] rounded-full animate-blob-1"></div>
      </div>
      
      <div className="absolute bottom-[-10%] right-[-5%] w-[600px] h-[500px] pointer-events-none z-0">
        <div className="w-full h-full bg-amber-500/10 blur-[100px] rounded-full animate-blob-2"></div>
      </div>
      
      <header className="relative z-10 w-full p-6 sm:p-8 flex justify-center sm:justify-start">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-tr from-orange-600 to-amber-500 text-white rounded-xl flex items-center justify-center shadow-lg shadow-orange-500/20">
            <Layers className="w-5 h-5" />
          </div>
          <span className="font-black tracking-tight text-xl text-slate-900">Crack404 OS</span>
        </div>
      </header>

      <main className="relative z-10 flex-1 flex flex-col items-center justify-center p-4 sm:p-6 w-full max-w-5xl mx-auto">
        <OnboardingProgress currentStep={currentStep} totalSteps={totalSteps} />

        {/* Applied the dynamic maxWidth prop here */}
        <div className={`w-full ${maxWidth} bg-white/90 backdrop-blur-xl border border-slate-200/80 border-t-4 border-t-orange-500 rounded-3xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05),0_15px_35px_-10px_rgba(234,88,12,0.08)] p-8 sm:p-12 animate-in fade-in slide-in-from-bottom-6 duration-700 ease-out transition-all duration-500`}>
          {children}
        </div>
      </main>

      <footer className="relative z-10 w-full p-6 sm:p-8 flex justify-center">
        <div className="flex items-center gap-2 text-xs font-bold text-slate-500 bg-white/60 backdrop-blur-md px-4 py-2 rounded-full border border-slate-200/60 shadow-sm">
          <ShieldCheck className="w-4 h-4 text-orange-500" />
          <span>Your data is securely isolated with enterprise-grade encryption.</span>
        </div>
      </footer>
    </div>
  );
}