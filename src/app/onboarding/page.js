 'use client';
import Link from 'next/link';
import { ArrowRight, Briefcase, Users, LayoutDashboard, Sparkles } from 'lucide-react';
import OnboardingLayout from '@/components/onboarding/OnboardingLayout';

export default function CreateWorkspaceIntro() {
  return (
    <OnboardingLayout currentStep={1}>
      <div className="text-center space-y-8 animate-in fade-in duration-700">
        
        {/* Title Area */}
        <div className="space-y-4">
          <div className="mx-auto w-16 h-16 bg-gradient-to-tr from-orange-50 to-amber-50 border border-orange-100/50 rounded-2xl flex items-center justify-center mb-6 shadow-[0_0_20px_rgba(249,115,22,0.1)] relative">
            <div className="absolute inset-0 rounded-2xl bg-orange-500/10 animate-ping opacity-20"></div>
            <Sparkles className="w-8 h-8 text-orange-500 relative z-10" />
          </div>
          <h1 className="text-3xl sm:text-4xl font-black tracking-tight text-slate-900">
            Welcome to Crack404 👋
          </h1>
          <p className="text-sm sm:text-base font-medium text-slate-500 max-w-md mx-auto leading-relaxed">
            Let's build your workspace. It only takes a few minutes to set up your organization and invite your team.
          </p>
        </div>

        {/* Value Proposition Preview */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 py-6">
          <div className="group flex flex-col items-center text-center space-y-3 p-5 rounded-2xl bg-slate-50/50 border border-slate-200 transition-all hover:border-orange-300 hover:bg-orange-50/50 hover:shadow-sm cursor-default">
            <Briefcase className="w-6 h-6 text-slate-400 group-hover:text-orange-500 transition-colors" />
            <span className="text-xs font-black tracking-wide text-slate-700 group-hover:text-slate-900">Unified Modules</span>
          </div>
          <div className="group flex flex-col items-center text-center space-y-3 p-5 rounded-2xl bg-slate-50/50 border border-slate-200 transition-all hover:border-orange-300 hover:bg-orange-50/50 hover:shadow-sm cursor-default">
            <LayoutDashboard className="w-6 h-6 text-slate-400 group-hover:text-orange-500 transition-colors" />
            <span className="text-xs font-black tracking-wide text-slate-700 group-hover:text-slate-900">Data Isolation</span>
          </div>
          <div className="group flex flex-col items-center text-center space-y-3 p-5 rounded-2xl bg-slate-50/50 border border-slate-200 transition-all hover:border-orange-300 hover:bg-orange-50/50 hover:shadow-sm cursor-default">
            <Users className="w-6 h-6 text-slate-400 group-hover:text-orange-500 transition-colors" />
            <span className="text-xs font-black tracking-wide text-slate-700 group-hover:text-slate-900">Team Access</span>
          </div>
        </div>

        {/* Action Area */}
        <div className="flex flex-col items-center space-y-4 pt-4 border-t border-slate-100">
          <Link 
            href="/onboarding/organization"
            className="group flex items-center justify-center gap-2 w-full sm:w-auto min-w-[240px] px-8 py-4 bg-gradient-to-r from-orange-600 to-amber-500 hover:from-orange-500 hover:to-amber-400 text-white rounded-xl font-bold text-base transition-all shadow-[0_4px_14px_rgba(234,88,12,0.3)] active:scale-[0.98]"
          >
            Get Started
            <ArrowRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
          </Link>
          <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
            Takes about 3–5 minutes
          </p>
        </div>

      </div>
    </OnboardingLayout>
  );
}