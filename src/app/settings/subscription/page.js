'use client';
import { useState } from 'react';
import { 
  CreditCard, CheckCircle2, Zap, Shield, ArrowUpRight, 
  Download, HardDrive, Cpu, Headphones, Sparkles, Check, Building2
} from 'lucide-react';

export default function SubscriptionPage() {
  const [billingCycle, setBillingCycle] = useState('monthly'); // 'monthly' | 'annual'
  const [currentPlan, setCurrentPlan] = useState({
    name: "Enterprise Unlimited",
    priceMonthly: "$299",
    priceAnnual: "$2,870",
    renewalDate: "September 1, 2026",
    status: "Active",
    storageUsed: "342 GB",
    storageLimit: "500 GB",
    terminalsUsed: "Unlimited",
    terminalsLimit: "Unlimited",
  });

  const plans = [
    {
      name: "Starter POS",
      desc: "Essential features for single-location retail stores and local boutiques.",
      priceMonthly: "$49",
      priceAnnual: "$470",
      features: [
        "1 POS Terminal License",
        "50 GB Secure Cloud Storage",
        "Basic Inventory & Stock Alerts",
        "Standard Email Support (24h)",
        "Daily Automated Backups"
      ],
      popular: false
    },
    {
      name: "Business Pro",
      desc: "Advanced multi-branch tools for growing businesses and retail chains.",
      priceMonthly: "$149",
      priceAnnual: "$1,430",
      features: [
        "Up to 5 POS Terminal Licenses",
        "200 GB Secure Cloud Storage",
        "Advanced CRM & Lead Funnels",
        "Priority 24/7 Phone & Chat Support",
        "Multi-Branch Analytics & Sync",
        "Custom Tax & VAT Rules"
      ],
      popular: true
    },
    {
      name: "Enterprise Unlimited",
      desc: "Maximum power, unlimited scaling, and dedicated infrastructure for enterprises.",
      priceMonthly: "$299",
      priceAnnual: "$2,870",
      features: [
        "Unlimited POS Terminal Licenses",
        "500 GB High-Speed Cloud Storage",
        "Full ERP Suite (HRM, Accounting, POS)",
        "Dedicated Account Manager",
        "Custom API & ERP Integrations",
        "Advanced Security & Audit Logs"
      ],
      popular: false
    }
  ];

  const invoices = [
    { id: "INV-2026-08", date: "Aug 1, 2026", amount: "$299.00", status: "Paid", method: "Mastercard **** 4432" },
    { id: "INV-2026-07", date: "Jul 1, 2026", amount: "$299.00", status: "Paid", method: "Mastercard **** 4432" },
    { id: "INV-2026-06", date: "Jun 1, 2026", amount: "$299.00", status: "Paid", method: "Mastercard **** 4432" },
  ];

  return (
    <div className="min-h-screen bg-slate-50 font-sans p-4 sm:p-6 lg:p-8 text-slate-900">
      <div className="max-w-[1500px] mx-auto space-y-8">
        
        {/* ================= HEADER ================= */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <span className="text-xs font-bold text-orange-600 bg-orange-50 border border-orange-200 px-2.5 py-0.5 rounded-full">
                Billing & Licensing Center
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-black tracking-tight">Subscription Management</h1>
            <p className="text-sm font-medium text-slate-500 mt-1">Review active tiers, monitor resource consumption, and scale your plan.</p>
          </div>
          <button className="cursor-pointer bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-2xl font-bold shadow-[0_4px_14px_rgba(234,88,12,0.25)] transition-all flex items-center justify-center gap-2">
            <CreditCard className="w-4 h-4" /> Update Payment Method
          </button>
        </div>

        {/* ================= ACTIVE PLAN & USAGE METERS ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* Active Plan Card */}
          <div className="lg:col-span-2 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 text-white rounded-3xl p-6 sm:p-8 shadow-xl flex flex-col justify-between relative overflow-hidden">
            <div className="absolute right-0 top-0 w-80 h-80 bg-orange-500/10 rounded-full blur-3xl pointer-events-none"></div>
            
            <div className="relative z-10 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-slate-800 pb-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-orange-400 bg-orange-500/10 border border-orange-500/20 px-3 py-1 rounded-full">
                  Active Tier
                </span>
                <h2 className="text-3xl sm:text-4xl font-black tracking-tight mt-3">{currentPlan.name}</h2>
                <p className="text-xs sm:text-sm text-slate-400 mt-1">Next automatic billing scheduled for <span className="text-white font-bold">{currentPlan.renewalDate}</span>.</p>
              </div>
              <div className="text-right sm:text-right">
                <span className="text-2xl sm:text-3xl font-black text-white">{currentPlan.priceMonthly}</span>
                <span className="text-xs text-slate-400 block">/ month billed monthly</span>
              </div>
            </div>

            {/* Usage Progress Meters */}
            <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6">
              <div className="bg-white/5 border border-white/10 rounded-2xl p-4 space-y-2 backdrop-blur-md">
                <div className="flex justify-between text-xs font-bold">
                  <span className="text-slate-300 flex items-center gap-1.5"><HardDrive className="w-3.5 h-3.5 text-orange-400"/> Cloud Storage</span>
                  <span className="text-white">{currentPlan.storageUsed} / {currentPlan.storageLimit}</span>
                </div>
                <div className="w-full bg-slate-800 rounded-full h-2 overflow-hidden">
                  <div className="bg-orange-500 h-full rounded-full" style={{ width: '68%' }}></div>
                </div>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-2xl p-4 space-y-2 backdrop-blur-md">
                <div className="flex justify-between text-xs font-bold">
                  <span className="text-slate-300 flex items-center gap-1.5"><Cpu className="w-3.5 h-3.5 text-blue-400"/> POS Terminals</span>
                  <span className="text-white">{currentPlan.terminalsUsed}</span>
                </div>
                <div className="w-full bg-slate-800 rounded-full h-2 overflow-hidden">
                  <div className="bg-blue-500 h-full rounded-full" style={{ width: '100%' }}></div>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Support & Perks Card */}
          <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-sm flex flex-col justify-between">
            <div className="space-y-4">
              <div className="p-3 bg-orange-50 text-orange-600 rounded-2xl w-fit">
                <Headphones className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-black text-slate-900">Enterprise SLA Support</h3>
              <p className="text-xs font-medium text-slate-500 leading-relaxed">Your enterprise tier includes priority routing, custom data export support, and 24/7 technical assistance.</p>
            </div>
            <button className="cursor-pointer w-full mt-6 py-3 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-2xl text-xs font-bold transition-colors">
              Contact Dedicated Manager
            </button>
          </div>

        </div>

        {/* ================= PRICING TIERS SECTION ================= */}
        <div className="space-y-6 pt-4">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <div>
              <h2 className="text-2xl font-black text-slate-900 tracking-tight">Available Subscription Tiers</h2>
              <p className="text-xs font-medium text-slate-500 mt-0.5">Scale your plan up or down dynamically as your retail footprint expands.</p>
            </div>

            {/* Monthly / Annual Toggle */}
            <div className="bg-slate-200 p-1.5 rounded-2xl flex items-center gap-1 border border-slate-300">
              <button 
                onClick={() => setBillingCycle('monthly')}
                className={`cursor-pointer px-4 py-2 rounded-xl text-xs font-bold transition-all ${billingCycle === 'monthly' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-600 hover:text-slate-900'}`}
              >
                Monthly Billing
              </button>
              <button 
                onClick={() => setBillingCycle('annual')}
                className={`cursor-pointer px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${billingCycle === 'annual' ? 'bg-orange-600 text-white shadow-sm' : 'text-slate-600 hover:text-slate-900'}`}
              >
                Annual Billing <span className="bg-orange-500 text-white text-[9px] px-1.5 py-0.5 rounded-md uppercase">Save 20%</span>
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {plans.map((plan, i) => (
              <div 
                key={i} 
                className={`bg-white border rounded-3xl p-6 sm:p-8 shadow-sm flex flex-col justify-between transition-all relative ${
                  plan.popular ? 'border-orange-500 ring-4 ring-orange-500/10 shadow-lg' : 'border-slate-200 hover:border-slate-300'
                }`}
              >
                {plan.popular && (
                  <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-orange-600 text-white text-[10px] font-black uppercase tracking-wider px-3 py-1 rounded-full shadow-md">
                    Most Popular Choice
                  </span>
                )}

                <div>
                  <h3 className="text-xl font-black text-slate-900">{plan.name}</h3>
                  <p className="text-xs text-slate-500 mt-2 min-h-[32px]">{plan.desc}</p>
                  
                  <div className="mt-4 mb-6 pt-4 border-t border-slate-100">
                    <span className="text-4xl font-black text-slate-900">
                      {billingCycle === 'monthly' ? plan.priceMonthly : plan.priceAnnual}
                    </span>
                    <span className="text-xs font-bold text-slate-400 ml-1.5">
                      {billingCycle === 'monthly' ? '/ month' : '/ year'}
                    </span>
                  </div>

                  <ul className="space-y-3 text-xs font-bold text-slate-700">
                    {plan.features.map((feat, j) => (
                      <li key={j} className="flex items-center gap-2.5">
                        <div className="w-4 h-4 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                          <Check className="w-3 h-3" />
                        </div>
                        {feat}
                      </li>
                    ))}
                  </ul>
                </div>

                <button 
                  className={`cursor-pointer mt-8 w-full py-3.5 rounded-2xl text-xs font-black uppercase tracking-wider transition-all ${
                    plan.name === currentPlan.name 
                      ? 'bg-slate-100 text-slate-400 cursor-not-allowed border border-slate-200' 
                      : plan.popular 
                      ? 'bg-orange-600 hover:bg-orange-700 text-white shadow-[0_4px_14px_rgba(234,88,12,0.25)]' 
                      : 'bg-slate-900 hover:bg-slate-800 text-white'
                  }`}
                  disabled={plan.name === currentPlan.name}
                >
                  {plan.name === currentPlan.name ? 'Active Plan' : 'Select Plan'}
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* ================= BILLING & INVOICE HISTORY ================= */}
        <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-sm space-y-6">
          <div className="flex justify-between items-center">
            <div>
              <h3 className="text-lg font-black text-slate-900">Billing & Invoice History</h3>
              <p className="text-xs font-medium text-slate-500 mt-0.5">Download past statements and tax compliance receipts.</p>
            </div>
            <button className="cursor-pointer text-xs font-bold text-orange-600 hover:text-orange-700">View All Records</button>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="bg-slate-50 text-slate-500 font-bold uppercase text-[10px] tracking-wider border-b border-slate-200">
                <tr>
                  <th className="px-4 py-3">Invoice ID</th>
                  <th className="px-4 py-3">Billing Date</th>
                  <th className="px-4 py-3">Payment Method</th>
                  <th className="px-4 py-3">Total Amount</th>
                  <th className="px-4 py-3 text-center">Status</th>
                  <th className="px-4 py-3 text-right">Receipt</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {invoices.map((inv, i) => (
                  <tr key={i} className="hover:bg-slate-50 transition-colors">
                    <td className="px-4 py-3.5 font-bold font-mono text-slate-900">{inv.id}</td>
                    <td className="px-4 py-3.5 font-medium text-slate-600">{inv.date}</td>
                    <td className="px-4 py-3.5 font-medium text-slate-600">{inv.method}</td>
                    <td className="px-4 py-3.5 font-black text-slate-900">{inv.amount}</td>
                    <td className="px-4 py-3.5 text-center">
                      <span className="text-[10px] font-bold px-2.5 py-1 bg-emerald-50 text-emerald-700 border border-emerald-200 rounded-md">
                        {inv.status}
                      </span>
                    </td>
                    <td className="px-4 py-3.5 text-right">
                      <button className="cursor-pointer p-2 bg-slate-50 hover:bg-slate-100 border border-slate-200 hover:border-slate-300 text-slate-600 rounded-xl transition-all inline-flex items-center gap-1 text-xs font-bold">
                        <Download className="w-3.5 h-3.5" /> PDF
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </div>
  );
}