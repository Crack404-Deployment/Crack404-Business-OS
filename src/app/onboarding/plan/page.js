'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { ArrowRight, ArrowLeft, Check, Sparkles, CreditCard } from 'lucide-react';
import OnboardingLayout from '@/components/onboarding/OnboardingLayout';

export default function ChoosePlan() {
  const router = useRouter();
  const [selectedPlan, setSelectedPlan] = useState('pro');
  const [billingCycle, setBillingCycle] = useState('monthly');

  const plans = [
    {
      id: 'free',
      name: 'Starter Free',
      desc: 'Perfect for single-location retail and getting to know the platform.',
      price: 'Free',
      features: [
        '1 POS Terminal',
        'Basic CRM & Sales',
        'Standard Inventory',
        '5 GB Cloud Storage'
      ]
    },
    {
      id: 'pro',
      name: 'Business Pro',
      desc: 'Advanced tools for growing companies and multi-branch setups.',
      price: billingCycle === 'monthly' ? '$149' : '$119',
      popular: true,
      features: [
        'Up to 5 POS Terminals',
        'Advanced CRM & Lead Scoring',
        'Multi-Branch Inventory Sync',
        '200 GB Cloud Storage',
        'Priority 24/7 Support'
      ]
    },
    {
      id: 'enterprise',
      name: 'Enterprise',
      desc: 'Maximum power and full ERP suite for large organizations.',
      price: billingCycle === 'monthly' ? '$299' : '$239',
      features: [
        'Unlimited POS Terminals',
        'Full ERP (HRM, Accounting)',
        'AI Copilot & Forecasting',
        '500 GB Cloud Storage',
        'Dedicated Account Manager'
      ]
    }
  ];

  const handleContinue = (e) => {
    e.preventDefault();
    console.log(`Starting ${selectedPlan === 'free' ? 'trial' : 'subscription'} for: ${selectedPlan} (${billingCycle})`);
    router.push('/onboarding/complete');
  };

  const buttonText = selectedPlan === 'free' ? 'Start Free Trial' : 'Start Subscription';

  return (
    // Expanded the container width specifically for this pricing step
    <OnboardingLayout currentStep={6} maxWidth="max-w-5xl">
      <div className="space-y-10 animate-in fade-in duration-700">
        
        <div className="text-center space-y-3">
          <div className="mx-auto w-14 h-14 bg-gradient-to-tr from-orange-50 to-amber-50 border border-orange-100/50 rounded-2xl flex items-center justify-center mb-6 shadow-[0_0_20px_rgba(249,115,22,0.1)] relative">
            <div className="absolute inset-0 rounded-2xl bg-orange-500/10 animate-ping opacity-20"></div>
            <Sparkles className="w-7 h-7 text-orange-500 relative z-10" />
          </div>
          <h1 className="text-2xl sm:text-3xl font-black tracking-tight text-slate-900">
            Choose your plan
          </h1>
          <p className="text-sm font-medium text-slate-500 max-w-md mx-auto leading-relaxed">
            Start for free or upgrade to a premium tier. You can change this at any time.
          </p>
        </div>

        <div className="flex justify-center pt-2">
          <div className="bg-slate-100/80 p-1.5 rounded-2xl flex items-center gap-1 border border-slate-200 shadow-inner">
            <button 
              type="button"
              onClick={() => setBillingCycle('monthly')}
              className={`px-5 py-2.5 rounded-xl text-xs font-bold transition-all ${
                billingCycle === 'monthly' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-500 hover:text-slate-900'
              }`}
            >
              Monthly
            </button>
            <button 
              type="button"
              onClick={() => setBillingCycle('annual')}
              className={`px-5 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${
                billingCycle === 'annual' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-500 hover:text-slate-900'
              }`}
            >
              Annually <span className="bg-orange-100 text-orange-700 text-[10px] px-2 py-0.5 rounded-md uppercase tracking-wider font-black">Save 20%</span>
            </button>
          </div>
        </div>

        <form onSubmit={handleContinue} className="space-y-10">
          {/* Removed the negative margins so it fits perfectly inside the max-w-5xl container */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
            {plans.map((plan) => {
              const isSelected = selectedPlan === plan.id;
              const isFree = plan.price === 'Free';
              
              return (
                <div 
                  key={plan.id}
                  onClick={() => setSelectedPlan(plan.id)}
                  className={`relative flex flex-col p-8 sm:p-10 rounded-[2rem] transition-all duration-300 cursor-pointer border-2 text-left group ${
                    isSelected 
                      ? 'bg-slate-900 border-slate-900 shadow-[0_20px_40px_-15px_rgba(15,23,42,0.6)] scale-[1.04] z-10' 
                      : 'bg-white border-slate-200 hover:border-orange-300 hover:shadow-xl hover:-translate-y-2 z-0'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-orange-500 to-amber-500 text-white text-[11px] font-black uppercase tracking-wider px-4 py-1.5 rounded-full shadow-md whitespace-nowrap">
                      Most Popular
                    </div>
                  )}

                  <div className="mb-6">
                    <h3 className={`text-xl font-black tracking-tight ${isSelected ? 'text-white' : 'text-slate-900'}`}>
                      {plan.name}
                    </h3>
                    <p className={`text-sm mt-3 leading-relaxed min-h-[48px] ${isSelected ? 'text-slate-400' : 'text-slate-500'}`}>
                      {plan.desc}
                    </p>
                  </div>

                  <div className="mb-8 pb-8 border-b border-slate-200/20">
                    <span className={`text-4xl sm:text-5xl font-black tracking-tight ${isSelected ? 'text-white' : 'text-slate-900'}`}>
                      {plan.price}
                    </span>
                    {!isFree && (
                      <span className={`text-sm font-bold ml-1 ${isSelected ? 'text-slate-400' : 'text-slate-500'}`}>
                        / mo
                      </span>
                    )}
                  </div>

                  <ul className="space-y-4 flex-1">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <div className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5 transition-colors ${
                          isSelected ? 'bg-orange-500/20 text-orange-400' : 'bg-slate-100 text-slate-600 group-hover:bg-orange-50 group-hover:text-orange-500'
                        }`}>
                          <Check className="w-3.5 h-3.5" />
                        </div>
                        <span className={`text-sm font-bold leading-relaxed ${
                          isSelected ? 'text-slate-300' : 'text-slate-700'
                        }`}>
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>

          <div className="flex items-center justify-center gap-2 text-sm font-bold text-slate-500 bg-slate-50/80 py-4 rounded-2xl border border-slate-200/60 max-w-2xl mx-auto shadow-sm">
            <CreditCard className="w-5 h-5 text-slate-400" /> 
            {selectedPlan === 'free' 
              ? "No credit card required to start your free tier." 
              : "Upgrade securely. Cancel or adjust your plan at any time."}
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-6 border-t border-slate-100">
            <Link 
              href="/onboarding/team"
              className="group flex items-center justify-center sm:justify-start text-sm font-bold text-slate-400 hover:text-slate-900 transition-colors order-2 sm:order-1"
            >
              <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center mr-2 group-hover:bg-slate-200 transition-colors">
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
              </div>
              Back
            </Link>
            
            <button 
              type="submit"
              className="group w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-orange-600 to-amber-500 hover:from-orange-500 hover:to-amber-400 text-white rounded-xl font-bold text-base transition-all shadow-[0_4px_14px_rgba(234,88,12,0.3)] active:scale-[0.98] order-1 sm:order-2"
            >
              {buttonText}
              <ArrowRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>

        </form>
      </div>
    </OnboardingLayout>
  );
}