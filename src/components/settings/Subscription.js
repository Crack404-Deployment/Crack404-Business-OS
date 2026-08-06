'use client';
import { useState } from 'react';
import { CreditCard, CheckCircle2, Zap, Shield, ArrowUpRight } from 'lucide-react';

export default function Subscription() {
  const [currentPlan] = useState({
    name: "Enterprise Unlimited",
    price: "$299 / month",
    renewalDate: "September 1, 2026",
    status: "Active",
    storage: "500 GB Cloud Storage",
    terminals: "Unlimited POS Terminals",
    support: "24/7 Dedicated Support"
  });

  return (
    <div className="min-h-screen bg-slate-50 font-sans p-4 sm:p-6 lg:p-8 text-slate-900">
      <div className="max-w-[1200px] mx-auto space-y-6">
        
        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
          <div>
            <h1 className="text-2xl sm:text-3xl font-black tracking-tight">Subscription & Billing</h1>
            <p className="text-sm font-medium text-slate-500 mt-1">Manage your Crack404 platform tier, invoices, and payment methods.</p>
          </div>
          <button className="bg-orange-600 hover:bg-orange-700 text-white px-5 py-2.5 rounded-xl font-bold shadow-sm transition-all flex items-center gap-2">
            <CreditCard className="w-4 h-4" /> Update Payment Method
          </button>
        </div>

        {/* Active Plan Card */}
        <div className="bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 text-white rounded-3xl p-6 sm:p-8 shadow-xl flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div className="space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-orange-400 bg-orange-500/10 border border-orange-500/20 px-3 py-1 rounded-full">
              Current Tier
            </span>
            <h2 className="text-3xl font-black tracking-tight mt-2">{currentPlan.name}</h2>
            <p className="text-sm text-slate-400">Next automatic billing of <span className="text-white font-bold">{currentPlan.price}</span> on {currentPlan.renewalDate}.</p>
          </div>
          <div className="bg-white/10 backdrop-blur-md p-5 rounded-2xl border border-white/10 space-y-2 w-full md:w-72">
            <div className="flex items-center gap-2 text-xs font-bold text-emerald-400">
              <CheckCircle2 className="w-4 h-4" /> {currentPlan.status} Subscription
            </div>
            <p className="text-xs text-slate-300">• {currentPlan.storage}</p>
            <p className="text-xs text-slate-300">• {currentPlan.terminals}</p>
            <p className="text-xs text-slate-300">• {currentPlan.support}</p>
          </div>
        </div>

        {/* Available Upgrade Tiers */}
        <div className="space-y-4">
          <h3 className="text-lg font-black text-slate-900">Available Plans</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { name: "Starter POS", price: "$49 /mo", features: ["1 POS Terminal", "50 GB Storage", "Standard Support"], current: false },
              { name: "Business Pro", price: "$149 /mo", features: ["5 POS Terminals", "200 GB Storage", "Priority Support"], current: false },
              { name: "Enterprise Unlimited", price: "$299 /mo", features: ["Unlimited Terminals", "500 GB Storage", "24/7 Dedicated Support"], current: true },
            ].map((plan, i) => (
              <div key={i} className={`bg-white border rounded-2xl p-6 shadow-sm flex flex-col justify-between ${plan.current ? 'border-orange-500 ring-2 ring-orange-500/20' : 'border-slate-200'}`}>
                <div>
                  <h4 className="text-lg font-black text-slate-900">{plan.name}</h4>
                  <p className="text-2xl font-black text-orange-600 mt-2">{plan.price}</p>
                  <ul className="mt-4 space-y-2 text-xs font-medium text-slate-600">
                    {plan.features.map((f, j) => <li key={j} className="flex items-center gap-2">✓ {f}</li>)}
                  </ul>
                </div>
                <button disabled={plan.current} className={`mt-6 w-full py-2.5 rounded-xl text-xs font-bold transition-all ${plan.current ? 'bg-slate-100 text-slate-400 cursor-not-allowed' : 'bg-slate-900 hover:bg-slate-800 text-white'}`}>
                  {plan.current ? 'Active Plan' : 'Upgrade Plan'}
                </button>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}