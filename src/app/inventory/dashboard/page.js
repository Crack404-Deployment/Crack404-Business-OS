'use client';
import { useState } from 'react';
import { 
  TrendingUp, Users, ShoppingBag, DollarSign, 
  ArrowUpRight, Sparkles, Activity, Clock, ShieldCheck, 
  ChevronRight, Zap, RefreshCw, BarChart3, Building2, 
  Package, Receipt, UserCheck, AlertTriangle, ArrowRight, Bell
} from 'lucide-react';

export default function MassiveBentoDashboard() {
  const [activeTab, setActiveTab] = useState("Command Center");
  const [currency, setCurrency] = useState("USD");

  return (
    <div className="min-h-screen bg-slate-100 font-sans p-4 sm:p-6 lg:p-8 text-slate-900 selection:bg-orange-500 selection:text-white">
      <div className="max-w-[1700px] mx-auto space-y-6">
        
        {/* ================= TOP NAVIGATION PILL ================= */}
        <header className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 bg-white/80 backdrop-blur-md p-4 sm:p-5 rounded-3xl border border-slate-200/80 shadow-sm">
          <div className="flex items-center gap-3 px-2">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-orange-600 to-amber-500 text-white flex items-center justify-center font-black text-lg shadow-lg shadow-orange-500/20">
              C4
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-lg font-black tracking-tight text-slate-900">Crack404 Enterprise OS</h1>
                <span className="text-[10px] font-black bg-orange-100 text-orange-700 px-2.5 py-0.5 rounded-full uppercase tracking-wider">v4.0 Pro</span>
              </div>
              <p className="text-xs font-medium text-slate-500">Sylhet HQ • Active Shift: Morning Operations</p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <div className="flex items-center gap-1.5 bg-slate-100 p-1.5 rounded-2xl border border-slate-200/60">
              {["Command Center", "POS & Sales", "Inventory Hub", "HR & Payroll", "Financials"].map(tab => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${
                    activeTab === tab ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-500 hover:text-slate-900'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
            <button className="p-3 bg-white border border-slate-200/80 rounded-2xl text-slate-600 hover:text-orange-600 hover:border-orange-300 shadow-sm transition-all relative">
              <Bell className="w-4 h-4" />
              <span className="absolute top-2 right-2 w-2 h-2 bg-orange-500 rounded-full animate-pulse"></span>
            </button>
          </div>
        </header>

        {/* ================= MASSIVE BENTO GRID ================= */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
          
          {/* 1. HERO REVENUE CARD (Spans 3 cols, 2 rows) */}
          <div className="md:col-span-3 lg:col-span-3 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 text-white rounded-3xl p-6 sm:p-8 shadow-xl flex flex-col justify-between relative overflow-hidden group">
            <div className="absolute -right-20 -top-20 w-72 h-72 bg-orange-500/20 rounded-full blur-3xl group-hover:bg-orange-500/30 transition-all duration-700 pointer-events-none"></div>

            <div className="relative z-10 flex justify-between items-start">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-orange-400 bg-orange-500/10 border border-orange-500/20 px-3 py-1 rounded-full">
                  Real-Time Gross Turnover
                </span>
                <h2 className="text-4xl sm:text-6xl font-black mt-4 tracking-tight">$428,950</h2>
                <p className="text-xs sm:text-sm text-slate-400 mt-1">Aggregated across Sylhet HQ, Dhaka Hub, and Online Store.</p>
              </div>
              <div className="p-3 bg-white/10 backdrop-blur-md rounded-2xl border border-white/10 text-emerald-400 flex items-center gap-1 text-xs font-bold shrink-0">
                <ArrowUpRight className="w-4 h-4" /> +18.4%
              </div>
            </div>

            <div className="relative z-10 mt-10 pt-6 border-t border-slate-800/80 grid grid-cols-3 gap-4">
              <div>
                <p className="text-[10px] font-bold text-slate-400 uppercase">POS Sales</p>
                <p className="text-lg font-black text-white mt-0.5">$245,200</p>
              </div>
              <div>
                <p className="text-[10px] font-bold text-slate-400 uppercase">B2B CRM</p>
                <p className="text-lg font-black text-white mt-0.5">$142,500</p>
              </div>
              <div>
                <p className="text-[10px] font-bold text-slate-400 uppercase">E-Commerce</p>
                <p className="text-lg font-black text-orange-400 mt-0.5">$41,250</p>
              </div>
            </div>
          </div>

          {/* 2. QUICK METRIC: ACTIVE LEADS */}
          <div className="md:col-span-1 lg:col-span-1 bg-white rounded-3xl p-6 shadow-sm border border-slate-200/80 flex flex-col justify-between hover:border-orange-300 transition-all">
            <div className="flex justify-between items-start">
              <div className="p-3 bg-blue-50 text-blue-600 rounded-2xl"><Users className="w-5 h-5" /></div>
              <span className="text-[11px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-lg">+14%</span>
            </div>
            <div>
              <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Pipeline Leads</p>
              <h3 className="text-3xl font-black text-slate-900 mt-1">1,402</h3>
              <p className="text-xs font-medium text-slate-500 mt-1">28 Hot Deals in Progress</p>
            </div>
          </div>

          {/* 3. QUICK METRIC: TODAY'S ORDERS */}
          <div className="md:col-span-1 lg:col-span-1 bg-white rounded-3xl p-6 shadow-sm border border-slate-200/80 flex flex-col justify-between hover:border-orange-300 transition-all">
            <div className="flex justify-between items-start">
              <div className="p-3 bg-orange-50 text-orange-600 rounded-2xl"><ShoppingBag className="w-5 h-5" /></div>
              <span className="text-[11px] font-bold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-lg">Live Sync</span>
            </div>
            <div>
              <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">POS Orders</p>
              <h3 className="text-3xl font-black text-slate-900 mt-1">342</h3>
              <p className="text-xs font-medium text-slate-500 mt-1">Avg Ticket: $34.50</p>
            </div>
          </div>

          {/* 4. QUICK METRIC: INVENTORY VALUATION */}
          <div className="md:col-span-1 lg:col-span-1 bg-white rounded-3xl p-6 shadow-sm border border-slate-200/80 flex flex-col justify-between hover:border-orange-300 transition-all">
            <div className="flex justify-between items-start">
              <div className="p-3 bg-purple-50 text-purple-600 rounded-2xl"><Package className="w-5 h-5" /></div>
              <span className="text-[11px] font-bold text-amber-600 bg-amber-50 px-2.5 py-1 rounded-lg">42 Low</span>
            </div>
            <div>
              <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Stock Valuation</p>
              <h3 className="text-3xl font-black text-slate-900 mt-1">$245.8k</h3>
              <p className="text-xs font-medium text-slate-500 mt-1">1,248 Active SKUs</p>
            </div>
          </div>

          {/* 5. AI COPILOT INTERACTIVE BAR (Spans 3 cols) */}
          <div className="md:col-span-3 lg:col-span-3 bg-gradient-to-r from-orange-600 to-amber-500 text-white rounded-3xl p-6 shadow-xl flex flex-col justify-between relative overflow-hidden">
            <div className="absolute right-4 bottom-4 opacity-10 pointer-events-none">
              <Sparkles className="w-32 h-32" />
            </div>
            <div className="relative z-10">
              <div className="flex items-center gap-2 mb-2">
                <Zap className="w-4 h-4 fill-white" />
                <span className="text-xs font-black uppercase tracking-wider bg-white/20 px-2.5 py-0.5 rounded-md">Crack404 Copilot AI</span>
              </div>
              <h3 className="text-xl font-black tracking-tight">Generate financial reports or check multi-branch inventory instantly.</h3>
            </div>
            <div className="relative z-10 mt-4 flex items-center gap-2 bg-white/10 backdrop-blur-md p-1.5 rounded-2xl border border-white/20">
              <input 
                type="text" 
                placeholder="Ask AI anything (e.g., 'Show top selling items today')..." 
                className="flex-1 bg-transparent border-none focus:outline-none px-3 text-sm text-white placeholder-white/70"
              />
              <button className="bg-white text-orange-600 font-bold px-5 py-2.5 rounded-xl text-xs shadow-md hover:bg-slate-50 transition-colors">
                Run Query
              </button>
            </div>
          </div>

          {/* 6. MULTI-BRANCH STATUS (Spans 3 cols) */}
          <div className="md:col-span-3 lg:col-span-3 bg-white rounded-3xl p-6 shadow-sm border border-slate-200/80 flex flex-col justify-between">
            <div className="flex justify-between items-center mb-4">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider flex items-center gap-2">
                <Building2 className="w-4 h-4 text-orange-500"/> Branch Network Status
              </span>
              <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-md">3 Active</span>
            </div>
            
            <div className="space-y-3">
              {[
                { name: "Sylhet Flagship (HQ)", rev: "$184,500", load: "85%", status: "Optimal" },
                { name: "Dhaka North Center", rev: "$142,200", load: "62%", status: "Normal" },
                { name: "Chittagong Hub", rev: "$102,250", load: "95%", status: "High Load" },
              ].map((br, i) => (
                <div key={i} className="flex items-center justify-between p-3.5 bg-slate-50 rounded-2xl border border-slate-100">
                  <div className="flex items-center gap-3">
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-500"></div>
                    <div>
                      <p className="text-sm font-bold text-slate-900">{br.name}</p>
                      <p className="text-xs font-medium text-slate-500">Capacity Load: {br.load}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-black text-slate-900">{br.rev}</p>
                    <span className="text-[10px] font-bold text-emerald-600">{br.status}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 7. LIVE TRANSACTION FEED (Spans 4 cols) */}
          <div className="md:col-span-2 lg:col-span-4 bg-white rounded-3xl p-6 shadow-sm border border-slate-200/80 flex flex-col justify-between">
            <div className="flex justify-between items-center mb-4">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider flex items-center gap-2">
                <Receipt className="w-4 h-4 text-orange-500"/> Live POS & CRM Ledger
              </span>
              <button className="text-xs font-bold text-orange-600 hover:text-orange-700">View All Ledger</button>
            </div>
            
            <div className="space-y-3">
              {[
                { id: "TXN-9042", client: "TechCorp Inc.", type: "POS Sale", amount: "$145.00", time: "2m ago" },
                { id: "TXN-9041", client: "Sarah Jenkins", type: "CRM Invoice", amount: "$1,250.00", time: "8m ago" },
                { id: "TXN-9040", client: "Global Solutions", type: "POS Sale", amount: "$412.50", time: "15m ago" },
              ].map((tx, i) => (
                <div key={i} className="flex items-center justify-between p-3 bg-slate-50 rounded-2xl border border-slate-100 text-xs">
                  <div className="flex items-center gap-3">
                    <span className="font-mono font-bold text-slate-400">{tx.id}</span>
                    <div>
                      <p className="font-bold text-slate-900">{tx.client}</p>
                      <p className="text-[10px] text-slate-500">{tx.type}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="font-black text-slate-900 block">{tx.amount}</span>
                    <span className="text-[10px] text-slate-400">{tx.time}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 8. QUICK ACTIONS & HEALTH (Spans 2 cols) */}
          <div className="md:col-span-1 lg:col-span-2 bg-white rounded-3xl p-6 shadow-sm border border-slate-200/80 flex flex-col justify-between">
            <div className="flex justify-between items-center mb-4">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Quick Actions</span>
              <ShieldCheck className="w-5 h-5 text-emerald-500" />
            </div>

            <div className="grid grid-cols-2 gap-3 my-2">
              <button className="p-3 bg-orange-50 hover:bg-orange-100 text-orange-700 rounded-2xl text-xs font-bold border border-orange-200 transition-colors flex flex-col items-center justify-center gap-1">
                <ShoppingBag className="w-4 h-4"/> Open POS
              </button>
              <button className="p-3 bg-blue-50 hover:bg-blue-100 text-blue-700 rounded-2xl text-xs font-bold border border-blue-200 transition-colors flex flex-col items-center justify-center gap-1">
                <Users className="w-4 h-4"/> Add Lead
              </button>
              <button className="p-3 bg-purple-50 hover:bg-purple-100 text-purple-700 rounded-2xl text-xs font-bold border border-purple-200 transition-colors flex flex-col items-center justify-center gap-1">
                <Package className="w-4 h-4"/> Restock SKU
              </button>
              <button className="p-3 bg-emerald-50 hover:bg-emerald-100 text-emerald-700 rounded-2xl text-xs font-bold border border-emerald-200 transition-colors flex flex-col items-center justify-center gap-1">
                <BarChart3 className="w-4 h-4"/> Reports
              </button>
            </div>

            <div className="mt-4 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-slate-500">
              <span>System Latency: 18ms</span>
              <span className="text-emerald-600 flex items-center gap-1"><div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div> Secure</span>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}