'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { ArrowRight, ArrowLeft, Store, Building, Globe, Laptop } from 'lucide-react';
import OnboardingLayout from '@/components/onboarding/OnboardingLayout';

export default function WorkspaceSetup() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    workspaceName: '',
    workspaceType: ''
  });

  const workspaceTypes = [
    { id: 'hq', title: 'Headquarters', desc: 'Main corporate office', icon: Building },
    { id: 'retail', title: 'Retail Store', desc: 'Physical POS location', icon: Store },
    { id: 'online', title: 'Online Hub', desc: 'E-commerce operations', icon: Globe },
    { id: 'remote', title: 'Remote Team', desc: 'Distributed workforce', icon: Laptop },
  ];

  const handleContinue = (e) => {
    e.preventDefault();
    // In a real application, you would POST this to your Django API
    // to create the first Branch under the User's Organization.
    
    router.push('/onboarding/team');
  };

  return (
    <OnboardingLayout currentStep={4}>
      <div className="space-y-8 animate-in fade-in duration-700">
        
        {/* Title Area */}
        <div className="text-center space-y-3">
          <div className="mx-auto w-14 h-14 bg-gradient-to-tr from-orange-50 to-amber-50 border border-orange-100/50 rounded-2xl flex items-center justify-center mb-6 shadow-[0_0_20px_rgba(249,115,22,0.1)] relative">
            <div className="absolute inset-0 rounded-2xl bg-orange-500/10 animate-ping opacity-20"></div>
            <Store className="w-7 h-7 text-orange-500 relative z-10" />
          </div>
          <h1 className="text-2xl sm:text-3xl font-black tracking-tight text-slate-900">
            Create your first workspace
          </h1>
          <p className="text-sm font-medium text-slate-500 max-w-sm mx-auto leading-relaxed">
            Set up your primary branch or headquarters. You can always add more locations and stores later.
          </p>
        </div>

        {/* Form Area */}
        <form onSubmit={handleContinue} className="space-y-6 max-w-lg mx-auto w-full pt-4">
          
          {/* Workspace Name */}
          <div className="space-y-2 group">
            <label htmlFor="workspaceName" className="block text-xs font-bold text-slate-700 uppercase tracking-wider group-focus-within:text-orange-600 transition-colors">
              Workspace / Branch Name <span className="text-red-500">*</span>
            </label>
            <input 
              id="workspaceName"
              type="text" 
              required
              placeholder="e.g. Sylhet Flagship Store" 
              value={formData.workspaceName}
              onChange={(e) => setFormData({...formData, workspaceName: e.target.value})}
              className="w-full bg-slate-50/50 border border-slate-200 rounded-xl px-4 py-3.5 text-sm font-bold text-slate-900 focus:bg-white focus:outline-none focus:border-orange-500 focus:ring-4 focus:ring-orange-500/10 transition-all shadow-sm placeholder:text-slate-400 placeholder:font-medium"
            />
          </div>

          {/* Workspace Type Selector */}
          <div className="space-y-3 pt-2">
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
              Primary Function <span className="text-red-500">*</span>
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              {workspaceTypes.map((type) => {
                const Icon = type.icon;
                const isSelected = formData.workspaceType === type.id;
                
                return (
                  <button
                    key={type.id}
                    type="button"
                    onClick={() => setFormData({...formData, workspaceType: type.id})}
                    className={`group flex flex-col text-left p-5 rounded-2xl transition-all duration-300 border ${
                      isSelected 
                        ? 'bg-orange-500 border-orange-500 shadow-[0_8px_25px_-5px_rgba(234,88,12,0.4)] scale-[1.02]' 
                        : 'bg-white border-slate-200 hover:border-orange-300 hover:bg-orange-50/50 hover:shadow-sm'
                    }`}
                  >
                    <Icon className={`w-6 h-6 mb-3 transition-colors ${
                      isSelected ? 'text-white' : 'text-slate-400 group-hover:text-orange-500'
                    }`} />
                    <span className={`text-sm font-black tracking-wide ${
                      isSelected ? 'text-white' : 'text-slate-900'
                    }`}>
                      {type.title}
                    </span>
                    <span className={`text-[11px] mt-1 font-medium ${
                      isSelected ? 'text-orange-100' : 'text-slate-500'
                    }`}>
                      {type.desc}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center justify-between pt-6 mt-8 border-t border-slate-100">
            <Link 
              href="/onboarding/business"
              className="group flex items-center text-sm font-bold text-slate-400 hover:text-slate-900 transition-colors"
            >
              <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center mr-2 group-hover:bg-slate-200 transition-colors">
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
              </div>
              Back
            </Link>
            
            <button 
              type="submit"
              disabled={!formData.workspaceName || !formData.workspaceType}
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