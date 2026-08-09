'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { ArrowRight, ArrowLeft, Users, Plus, X, Mail, ChevronDown } from 'lucide-react';
import OnboardingLayout from '@/components/onboarding/OnboardingLayout';

export default function InviteTeam() {
  const router = useRouter();
  
  // Start with 2 empty invitation rows by default
  const [invites, setInvites] = useState([
    { id: 1, email: '', role: 'Member' },
    { id: 2, email: '', role: 'Member' }
  ]);

  const handleAddRow = () => {
    setInvites([
      ...invites, 
      { id: Date.now(), email: '', role: 'Member' }
    ]);
  };

  const handleRemoveRow = (idToRemove) => {
    setInvites(invites.filter(invite => invite.id !== idToRemove));
  };

  const handleChange = (id, field, value) => {
    setInvites(invites.map(invite => 
      invite.id === id ? { ...invite, [field]: value } : invite
    ));
  };

  const handleContinue = (e) => {
    e.preventDefault();
    // Filter out empty emails before sending to the Django API
    const validInvites = invites.filter(inv => inv.email.trim() !== '');
    
    console.log("Sending invites to:", validInvites);
    router.push('/onboarding/plan');
  };

  const handleSkip = () => {
    router.push('/onboarding/plan');
  };

  // Check if there is at least one valid email to enable the "Send Invites" button
  const hasValidInvite = invites.some(inv => inv.email.trim() !== '');

  return (
    <OnboardingLayout currentStep={5}>
      <div className="space-y-8 animate-in fade-in duration-700">
        
        {/* Title Area */}
        <div className="text-center space-y-3">
          <div className="mx-auto w-14 h-14 bg-gradient-to-tr from-orange-50 to-amber-50 border border-orange-100/50 rounded-2xl flex items-center justify-center mb-6 shadow-[0_0_20px_rgba(249,115,22,0.1)] relative">
            <div className="absolute inset-0 rounded-2xl bg-orange-500/10 animate-ping opacity-20"></div>
            <Users className="w-7 h-7 text-orange-500 relative z-10" />
          </div>
          <h1 className="text-2xl sm:text-3xl font-black tracking-tight text-slate-900">
            Invite your team
          </h1>
          <p className="text-sm font-medium text-slate-500 max-w-sm mx-auto leading-relaxed">
            Crack404 is better together. Invite your co-founders, managers, or staff to your workspace.
          </p>
        </div>

        {/* Form Area */}
        <form onSubmit={handleContinue} className="space-y-6 max-w-lg mx-auto w-full pt-4">
          
          <div className="space-y-4">
            <div className="flex text-[10px] font-black text-slate-400 uppercase tracking-wider px-2">
              <div className="flex-1">Email Address</div>
              <div className="w-32 sm:w-40 ml-3">Role</div>
              <div className="w-10 ml-2"></div>
            </div>

            {/* Dynamic Invite Rows */}
            <div className="space-y-3">
              {invites.map((invite) => (
                <div key={invite.id} className="flex items-center gap-2 sm:gap-3 group/row">
                  
                  {/* Email Input */}
                  <div className="relative flex-1 group">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 group-focus-within:text-orange-500 transition-colors" />
                    <input 
                      type="email" 
                      placeholder="colleague@company.com" 
                      value={invite.email}
                      onChange={(e) => handleChange(invite.id, 'email', e.target.value)}
                      className="w-full bg-slate-50/50 border border-slate-200 rounded-xl pl-11 pr-4 py-3 text-sm font-bold text-slate-900 focus:bg-white focus:outline-none focus:border-orange-500 focus:ring-4 focus:ring-orange-500/10 transition-all shadow-sm placeholder:text-slate-400 placeholder:font-medium"
                    />
                  </div>
                  
                  {/* Role Dropdown */}
                  <div className="relative w-28 sm:w-36 group">
                    <select
                      value={invite.role}
                      onChange={(e) => handleChange(invite.id, 'role', e.target.value)}
                      className="w-full bg-slate-50/50 border border-slate-200 rounded-xl pl-4 pr-8 py-3 text-sm font-bold text-slate-900 focus:bg-white focus:outline-none focus:border-orange-500 focus:ring-4 focus:ring-orange-500/10 transition-all shadow-sm appearance-none cursor-pointer"
                    >
                      <option value="Admin">Admin</option>
                      <option value="Manager">Manager</option>
                      <option value="Member">Member</option>
                    </select>
                    <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none group-focus-within:text-orange-500 transition-colors" />
                  </div>

                  {/* Remove Button */}
                  <button
                    type="button"
                    onClick={() => handleRemoveRow(invite.id)}
                    disabled={invites.length === 1}
                    className="w-10 h-10 flex items-center justify-center text-slate-300 hover:text-red-500 hover:bg-red-50 rounded-xl transition-all disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-slate-300 shrink-0"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              ))}
            </div>

            {/* Add Another Row Button */}
            <button
              type="button"
              onClick={handleAddRow}
              className="group flex items-center justify-center gap-2 w-full py-3.5 mt-2 rounded-xl border border-dashed border-slate-200 hover:border-orange-300 bg-slate-50/50 hover:bg-orange-50/50 text-slate-500 hover:text-orange-600 text-xs font-bold transition-all"
            >
              <div className="w-5 h-5 rounded-full bg-white border border-slate-200 group-hover:border-orange-200 flex items-center justify-center shadow-sm transition-all">
                <Plus className="w-3 h-3" />
              </div>
              Add another team member
            </button>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-6 mt-8 border-t border-slate-100">
            <Link 
              href="/onboarding/workspace"
              className="group flex items-center justify-center sm:justify-start text-sm font-bold text-slate-400 hover:text-slate-900 transition-colors order-3 sm:order-1"
            >
              <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center mr-2 group-hover:bg-slate-200 transition-colors">
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
              </div>
              Back
            </Link>
            
            <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto order-1 sm:order-2">
              <button 
                type="button"
                onClick={handleSkip}
                className="w-full sm:w-auto px-6 py-3.5 bg-white border border-slate-200 hover:bg-slate-50 hover:border-slate-300 text-slate-600 rounded-xl font-bold text-sm transition-all shadow-sm"
              >
                Skip for now
              </button>
              
              <button 
                type="submit"
                disabled={!hasValidInvite}
                className="group w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-3.5 bg-gradient-to-r from-orange-600 to-amber-500 hover:from-orange-500 hover:to-amber-400 disabled:from-slate-100 disabled:to-slate-100 disabled:text-slate-400 disabled:cursor-not-allowed disabled:border disabled:border-slate-200 text-white rounded-xl font-bold text-sm transition-all shadow-[0_4px_14px_rgba(234,88,12,0.25)] disabled:shadow-none active:scale-[0.98]"
              >
                Send Invites
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </button>
            </div>
          </div>

        </form>
      </div>
    </OnboardingLayout>
  );
}