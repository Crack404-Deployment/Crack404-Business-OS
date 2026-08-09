'use client';
import { Check } from 'lucide-react';

export default function OnboardingProgress({ currentStep, totalSteps = 6 }) {
  const steps = [
    { id: 1, label: "Welcome" },
    { id: 2, label: "Organization" },
    { id: 3, label: "Business" },
    { id: 4, label: "Workspace" },
    { id: 5, label: "Team" },
    { id: 6, label: "Plan" },
  ];

  return (
    <div className="w-full max-w-3xl mx-auto mb-10 sm:mb-16 mt-4">
      <div className="flex items-center justify-between relative">
        
        {/* Thickened, softer background track */}
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-1.5 bg-slate-200/60 rounded-full z-0"></div>
        
        {/* Vibrant Orange Gradient Progress Line */}
        <div 
          className="absolute left-0 top-1/2 -translate-y-1/2 h-1.5 bg-gradient-to-r from-orange-500 to-amber-400 rounded-full z-0 transition-all duration-700 ease-in-out"
          style={{ width: `${((currentStep - 1) / (totalSteps - 1)) * 100}%` }}
        ></div>

        {/* Step Nodes */}
        {steps.map((step) => {
          const isCompleted = currentStep > step.id;
          const isActive = currentStep === step.id;
          const isUpcoming = currentStep < step.id;

          return (
            <div key={step.id} className="relative z-10 flex flex-col items-center gap-2">
              <div 
                className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center text-xs sm:text-sm font-black border-2 transition-all duration-500 ease-out ${
                  isCompleted 
                    ? 'bg-orange-500 border-orange-500 text-white shadow-md shadow-orange-500/20' 
                    : isActive 
                    ? 'bg-white border-orange-500 text-orange-600 shadow-[0_0_0_6px_rgba(249,115,22,0.15)] scale-110' 
                    : 'bg-white border-slate-200 text-slate-300'
                }`}
              >
                {isCompleted ? <Check className="w-4 h-4 sm:w-5 sm:h-5 stroke-[3]" /> : step.id}
              </div>
              
              {/* Dynamic Labels */}
              <span className={`hidden sm:block absolute -bottom-8 text-[11px] font-bold whitespace-nowrap transition-colors duration-300 tracking-wide ${
                isActive 
                  ? 'text-orange-600' 
                  : isCompleted 
                  ? 'text-slate-700' 
                  : 'text-slate-400'
              }`}>
                {step.label}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}