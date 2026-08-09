'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { ArrowRight, ArrowLeft, MapPin } from 'lucide-react';
import OnboardingLayout from '@/components/onboarding/OnboardingLayout';

export default function BusinessInformation() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    businessEmail: '',
    phoneNumber: '',
    website: '',
    country: 'Bangladesh' // Pre-filled based on target market, but changeable
  });

  const handleContinue = (e) => {
    e.preventDefault();
    // In a real application, you would PATCH the organization record
    // with this new business data via your Django API.
    
    router.push('/onboarding/workspace');
  };

  return (
    <OnboardingLayout currentStep={3}>
      <div className="space-y-8">
        
        {/* Title Area */}
        <div className="text-center space-y-2">
          <div className="mx-auto w-12 h-12 bg-slate-50 border border-slate-100 rounded-2xl flex items-center justify-center mb-4 shadow-sm">
            <MapPin className="w-6 h-6 text-slate-700" />
          </div>
          <h1 className="text-2xl sm:text-3xl font-black tracking-tight text-slate-900">
            Business Details
          </h1>
          <p className="text-sm font-medium text-slate-500 max-w-sm mx-auto">
            Add your company's primary contact information. This will be used for your billing, invoices, and CRM setup.
          </p>
        </div>

        {/* Form Area */}
        <form onSubmit={handleContinue} className="space-y-6 max-w-lg mx-auto w-full">
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {/* Business Email */}
            <div className="space-y-2">
              <label htmlFor="businessEmail" className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
                Business Email <span className="text-red-500">*</span>
              </label>
              <input 
                id="businessEmail"
                type="email" 
                required
                placeholder="hello@company.com" 
                value={formData.businessEmail}
                onChange={(e) => setFormData({...formData, businessEmail: e.target.value})}
                className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-sm font-medium text-slate-900 focus:outline-none focus:border-slate-900 focus:ring-1 focus:ring-slate-900 transition-all shadow-sm placeholder:text-slate-400"
              />
            </div>

            {/* Phone Number */}
            <div className="space-y-2">
              <label htmlFor="phoneNumber" className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
                Phone Number <span className="text-red-500">*</span>
              </label>
              <input 
                id="phoneNumber"
                type="tel" 
                required
                placeholder="+880 1XXX-XXXXXX" 
                value={formData.phoneNumber}
                onChange={(e) => setFormData({...formData, phoneNumber: e.target.value})}
                className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-sm font-medium text-slate-900 focus:outline-none focus:border-slate-900 focus:ring-1 focus:ring-slate-900 transition-all shadow-sm placeholder:text-slate-400"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {/* Website */}
            <div className="space-y-2">
              <label htmlFor="website" className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
                Company Website
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-sm font-medium text-slate-400">
                  https://
                </span>
                <input 
                  id="website"
                  type="text" 
                  placeholder="www.crack404.com" 
                  value={formData.website}
                  onChange={(e) => setFormData({...formData, website: e.target.value})}
                  className="w-full bg-white border border-slate-200 rounded-xl pl-16 pr-4 py-3 text-sm font-medium text-slate-900 focus:outline-none focus:border-slate-900 focus:ring-1 focus:ring-slate-900 transition-all shadow-sm placeholder:text-slate-400"
                />
              </div>
            </div>

            {/* Country Dropdown */}
            <div className="space-y-2">
              <label htmlFor="country" className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
                Country / Region <span className="text-red-500">*</span>
              </label>
              <select 
                id="country"
                required
                value={formData.country}
                onChange={(e) => setFormData({...formData, country: e.target.value})}
                className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-sm font-medium text-slate-900 focus:outline-none focus:border-slate-900 focus:ring-1 focus:ring-slate-900 transition-all shadow-sm appearance-none"
              >
                <option value="" disabled>Select a country</option>
                <option value="Bangladesh">Bangladesh</option>
                <option value="United States">United States</option>
                <option value="United Kingdom">United Kingdom</option>
                <option value="India">India</option>
                <option value="Singapore">Singapore</option>
                <option value="Other">Other</option>
              </select>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center justify-between pt-6 mt-8 border-t border-slate-100">
            <Link 
              href="/onboarding/organization"
              className="group flex items-center text-sm font-bold text-slate-500 hover:text-slate-900 transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-1.5 group-hover:-translate-x-0.5 transition-transform" />
              Back
            </Link>
            
            <button 
              type="submit"
              disabled={!formData.businessEmail || !formData.phoneNumber || !formData.country}
              className="group flex items-center justify-center gap-2 px-6 py-3 bg-slate-900 hover:bg-slate-800 disabled:bg-slate-300 disabled:cursor-not-allowed text-white rounded-xl font-bold text-sm transition-all shadow-sm active:scale-[0.98]"
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