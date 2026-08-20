'use client';
import { Target, TrendingUp, AlertTriangle, ShieldCheck, ChevronDown } from 'lucide-react';

export default function SalesForecast() {
  const kpis = [
    { label: 'Forecast Revenue', value: '৳ 4,250,000', change: '+14.8%', icon: TrendingUp },
    { label: 'Weighted Pipeline', value: '৳ 6,200,000', change: null, icon: Target },
    { label: 'Commit', value: '৳ 2,800,000', change: null, icon: ShieldCheck },
    { label: 'Best Case', value: '৳ 5,100,000', change: null, icon: AlertTriangle },
  ];

  const stages = [
    { name: 'Proposal', value: '৳ 1,250,000', percent: 60 },
    { name: 'Negotiation', value: '৳ 850,000', percent: 40 },
    { name: 'Qualified', value: '৳ 350,000', percent: 20 },
    { name: 'New', value: '৳ 420,000', percent: 15 },
  ];

  return (
    <div className="bg-white min-h-screen w-full">
      <div className="px-6 py-12 sm:px-8 sm:py-16 lg:py-20 max-w-7xl mx-auto space-y-8 animate-in fade-in duration-500">
        
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">Sales Forecast</h1>
            <p className="text-sm font-medium text-slate-500 mt-1">Visualize expected future sales based on pipeline data.</p>
          </div>
          <button className="flex items-center gap-2 bg-white border border-slate-200 hover:bg-orange-50 px-5 py-2.5 rounded-xl text-sm font-bold text-slate-700 shadow-sm">
            Q4 2026 <ChevronDown className="w-4 h-4"/>
          </button>
        </div>

        {/* Top KPIs */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {kpis.map((kpi, i) => (
            <div key={i} className="bg-white border border-slate-100 p-6 rounded-3xl shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:-translate-y-1 transition-transform">
              <div className="flex justify-between items-start mb-4">
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-wider">{kpi.label}</p>
                <kpi.icon className="w-4 h-4 text-orange-500"/>
              </div>
              <div className="flex items-end gap-3">
                <h3 className="text-2xl font-black text-slate-900">{kpi.value}</h3>
                {kpi.change && <span className="text-xs font-black text-emerald-500 mb-1">{kpi.change}</span>}
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Chart area (CSS driven) */}
          <div className="lg:col-span-2 bg-white border border-slate-100 rounded-3xl shadow-[0_4px_20px_rgba(0,0,0,0.03)] p-8">
            <div className="flex justify-between items-center mb-8">
              <h3 className="text-sm font-black text-slate-900">Forecast Timeline (Months)</h3>
              <div className="flex gap-4">
                <span className="flex items-center gap-1.5 text-[10px] font-black text-slate-400 uppercase tracking-wider"><div className="w-2 h-2 rounded-full bg-orange-500"></div> Commit</span>
                <span className="flex items-center gap-1.5 text-[10px] font-black text-slate-400 uppercase tracking-wider"><div className="w-2 h-2 rounded-full bg-amber-300"></div> Best Case</span>
              </div>
            </div>
            
            <div className="h-64 flex items-end justify-between gap-4">
              {/* Mock Bars */}
              {[
                { m: 'Aug', c: 30, b: 20 },
                { m: 'Sep', c: 45, b: 25 },
                { m: 'Oct', c: 60, b: 30 },
                { m: 'Nov', c: 75, b: 15 },
                { m: 'Dec', c: 90, b: 10 },
              ].map((val, i) => (
                <div key={i} className="w-full flex flex-col items-center gap-2 group">
                  <div className="w-full relative flex flex-col justify-end h-56 group-hover:opacity-90 transition-opacity">
                    <div style={{ height: `${val.b}%` }} className="w-full bg-amber-300 rounded-t-sm animate-in slide-in-from-bottom-4 duration-700"></div>
                    <div style={{ height: `${val.c}%` }} className="w-full bg-orange-500 rounded-b-sm animate-in slide-in-from-bottom-8 duration-500"></div>
                  </div>
                  <span className="text-[10px] font-black text-slate-400 uppercase tracking-wider">{val.m}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Forecast by Stage & Health */}
          <div className="space-y-8">
            <div className="bg-white border border-slate-100 rounded-3xl shadow-[0_4px_20px_rgba(0,0,0,0.03)] p-8">
              <h3 className="text-sm font-black text-slate-900 mb-6">Forecast by Stage</h3>
              <div className="space-y-5">
                {stages.map((st, i) => (
                  <div key={i}>
                    <div className="flex justify-between text-xs font-bold mb-2">
                      <span className="text-slate-700">{st.name}</span>
                      <span className="text-slate-900">{st.value}</span>
                    </div>
                    <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                      <div style={{ width: `${st.percent}%` }} className="h-full bg-gradient-to-r from-orange-500 to-amber-400 rounded-full animate-in slide-in-from-left duration-1000"></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-emerald-50 border border-emerald-100 rounded-3xl p-8 flex flex-col justify-center">
              <p className="text-[10px] font-black text-emerald-600 uppercase tracking-wider mb-2">Forecast Health</p>
              <h2 className="text-3xl font-black text-emerald-600 mb-4">Healthy</h2>
              <div className="flex justify-between items-center border-t border-emerald-200/50 pt-4 mt-2">
                <span className="text-xs font-bold text-emerald-700">Pipeline Coverage</span>
                <span className="text-sm font-black text-emerald-700">3.4x</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}