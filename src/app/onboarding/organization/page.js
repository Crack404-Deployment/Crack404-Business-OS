'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { ArrowRight, ArrowLeft, Building2, ChevronDown } from 'lucide-react';
import OnboardingLayout from '@/components/onboarding/OnboardingLayout';

export default function OrganizationSetup() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: '',
    industry: '',
    size: ''
  });

  const companySizes = [
    "1 - 10", "11 - 50", "51 - 200", "201 - 500", "500+"
  ];

  const handleContinue = (e) => {
    e.preventDefault();
    // In a real app, you would dispatch this data to your Django API here
    // to create the Tenant/Organization record before moving forward.
    
    router.push('/onboarding/business');
  };

  return (
    <OnboardingLayout currentStep={2}>
      <div className="space-y-8 animate-in fade-in duration-700">
        
        {/* Title Area */}
        <div className="text-center space-y-3">
          <div className="mx-auto w-14 h-14 bg-gradient-to-tr from-orange-50 to-amber-50 border border-orange-100/50 rounded-2xl flex items-center justify-center mb-6 shadow-[0_0_20px_rgba(249,115,22,0.1)] relative">
            <div className="absolute inset-0 rounded-2xl bg-orange-500/10 animate-ping opacity-20"></div>
            <Building2 className="w-7 h-7 text-orange-500 relative z-10" />
          </div>
          <h1 className="text-2xl sm:text-3xl font-black tracking-tight text-slate-900">
            Name your organization
          </h1>
          <p className="text-sm font-medium text-slate-500 max-w-sm mx-auto leading-relaxed">
            This represents your top-level tenant. You can add multiple branches and departments later.
          </p>
        </div>

        {/* Form Area */}
        <form onSubmit={handleContinue} className="space-y-6 max-w-md mx-auto w-full pt-4">
          
          {/* Org Name Input */}
          <div className="space-y-2 group">
            <label htmlFor="orgName" className="block text-xs font-bold text-slate-700 uppercase tracking-wider group-focus-within:text-orange-600 transition-colors">
              Organization Name <span className="text-red-500">*</span>
            </label>
            <input 
              id="orgName"
              type="text" 
              required
              placeholder="e.g. Crack404 Technologies" 
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              className="w-full bg-slate-50/50 border border-slate-200 rounded-xl px-4 py-3.5 text-sm font-bold text-slate-900 focus:bg-white focus:outline-none focus:border-orange-500 focus:ring-4 focus:ring-orange-500/10 transition-all shadow-sm placeholder:text-slate-400 placeholder:font-medium"
            />
          </div>

          {/* Industry Dropdown */}
          <div className="space-y-2 group">
            <label htmlFor="industry" className="block text-xs font-bold text-slate-700 uppercase tracking-wider group-focus-within:text-orange-600 transition-colors">
              Industry <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <select 
                id="industry"
                required
                value={formData.industry}
                onChange={(e) => setFormData({...formData, industry: e.target.value})}
                className="w-full bg-slate-50/50 border border-slate-200 rounded-xl pl-4 pr-10 py-3.5 text-sm font-bold text-slate-900 focus:bg-white focus:outline-none focus:border-orange-500 focus:ring-4 focus:ring-orange-500/10 transition-all shadow-sm appearance-none cursor-pointer"
              >
                <option value="" disabled className="font-medium text-slate-400">Select your industry</option>
                <option value="retail">Retail & E-commerce</option>
                <option value="technology">Technology & Software</option>
                <option value="manufacturing">Manufacturing</option>
                <option value="services">Professional Services</option>
                <option value="healthcare">Healthcare</option>
                <option value="other">Other</option>
              </select>
              <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none group-focus-within:text-orange-500 transition-colors" />
            </div>
          </div>

          {/* Company Size Selector (Premium Grid) */}
          <div className="space-y-3 pt-2">
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
              Company Size (Employees) <span className="text-red-500">*</span>
            </label>
            <div className="grid grid-cols-3 gap-2 sm:gap-3">
              {companySizes.map((size) => (
                <button
                  key={size}
                  type="button"
                  onClick={() => setFormData({...formData, size})}
                  className={`py-3 rounded-xl text-xs font-black tracking-wider transition-all duration-300 border ${
                    formData.size === size 
                      ? 'bg-orange-500 border-orange-500 text-white shadow-[0_4px_14px_rgba(234,88,12,0.35)] scale-[1.02]' 
                      : 'bg-white border-slate-200 text-slate-500 hover:border-orange-300 hover:text-orange-600 hover:bg-orange-50/50 hover:shadow-sm'
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center justify-between pt-6 mt-8 border-t border-slate-100">
            <Link 
              href="/onboarding"
              className="group flex items-center text-sm font-bold text-slate-400 hover:text-slate-900 transition-colors"
            >
              <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center mr-2 group-hover:bg-slate-200 transition-colors">
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
              </div>
              Back
            </Link>
            
            <button 
              type="submit"
              disabled={!formData.name || !formData.industry || !formData.size}
              className="group flex items-center justify-center gap-2 px-8 py-3.5 bg-gradient-to-r from-orange-600 to-amber-500 hover:from-orange-500 hover:to-amber-400 disabled:from-slate-100 disabled:to-slate-100 disabled:text-slate-400 disabled:cursor-not-allowed disabled:border disabled:border-slate-200 text-white rounded-xl font-bold text-sm transition-all shadow-[0_4px_14px_rgba(234,88,12,0.25)] disabled:shadow-none active:scale-[0.98]"
            >
              Continue
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>

        </form>
      </div>
    </OnboardingLayout>
  );
}