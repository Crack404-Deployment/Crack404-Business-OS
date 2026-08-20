'use client';
import { DollarSign, BarChart2, Briefcase, Activity, Sparkles } from 'lucide-react';

export default function RevenueDashboard() {
  const kpis = [
    { label: 'Total Revenue', value: '৳ 28,400,000', icon: DollarSign },
    { label: 'Monthly Revenue', value: '৳ 2,450,000', icon: Activity },
    { label: 'Growth', value: '+18.5%', icon: BarChart2 },
    { label: 'Avg Deal Size', value: '৳ 148,000', icon: Briefcase },
  ];

  return (
    <div className="bg-white min-h-screen w-full">
      <div className="px-6 py-12 sm:px-8 sm:py-16 lg:py-20 max-w-7xl mx-auto space-y-8 animate-in fade-in duration-500">
        
        <div>
          <h1 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">Revenue Dashboard</h1>
          <p className="text-sm font-medium text-slate-500 mt-1">Deep analytics into Crack404's sales performance and revenue growth.</p>
        </div>

        {/* Animated KPIs */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {kpis.map((kpi, i) => (
            <div key={i} className="bg-white border border-slate-100 p-6 sm:p-8 rounded-3xl shadow-[0_4px_20px_rgba(0,0,0,0.03)]">
              <div className="flex justify-between items-start mb-4">
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-wider">{kpi.label}</p>
                <div className="w-8 h-8 rounded-lg bg-orange-50 flex items-center justify-center text-orange-500"><kpi.icon className="w-4 h-4"/></div>
              </div>
              <h3 className={`text-2xl sm:text-3xl font-black tracking-tight ${kpi.label === 'Growth' ? 'text-emerald-500' : 'text-slate-900'}`}>{kpi.value}</h3>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Revenue Insight Panel */}
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-8 text-white shadow-xl">
              <div className="flex items-center gap-2 mb-6">
                <Sparkles className="w-5 h-5 text-amber-400"/>
                <h3 className="text-sm font-black uppercase tracking-wider text-amber-400">Revenue Insights</h3>
              </div>
              <div className="space-y-6 animate-in slide-in-from-left duration-700">
                <p className="text-lg font-medium leading-relaxed">Revenue increased <span className="font-black text-emerald-400">18.5%</span> compared with the previous period.</p>
                <div className="h-px w-full bg-slate-700"></div>
                <p className="text-sm font-medium text-slate-300">Enterprise customers generated <span className="text-white font-bold">42%</span> of total revenue this quarter.</p>
                <p className="text-sm font-medium text-slate-300">Average deal size increased by <span className="text-emerald-400 font-bold">8.4%</span>.</p>
              </div>
            </div>

            {/* Segment Breakdown */}
            <div className="bg-white border border-slate-100 rounded-3xl shadow-[0_4px_20px_rgba(0,0,0,0.03)] p-8">
              <h3 className="text-sm font-black text-slate-900 mb-6">By Customer Segment</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-xs font-bold mb-1"><span className="text-slate-700">Enterprise</span><span className="text-slate-900">৳ 12,000,000</span></div>
                  <div className="w-full h-2 bg-slate-100 rounded-full"><div className="w-[55%] h-full bg-orange-500 rounded-full"></div></div>
                </div>
                <div>
                  <div className="flex justify-between text-xs font-bold mb-1"><span className="text-slate-700">Mid-Market</span><span className="text-slate-900">৳ 8,400,000</span></div>
                  <div className="w-full h-2 bg-slate-100 rounded-full"><div className="w-[30%] h-full bg-amber-400 rounded-full"></div></div>
                </div>
                <div>
                  <div className="flex justify-between text-xs font-bold mb-1"><span className="text-slate-700">SMB</span><span className="text-slate-900">৳ 4,200,000</span></div>
                  <div className="w-full h-2 bg-slate-100 rounded-full"><div className="w-[15%] h-full bg-slate-300 rounded-full"></div></div>
                </div>
              </div>
            </div>
          </div>

          {/* Monthly Performance Table */}
          <div className="lg:col-span-2 bg-white border border-slate-100 rounded-3xl shadow-[0_4px_20px_rgba(0,0,0,0.03)] overflow-hidden flex flex-col">
            <div className="p-8 border-b border-slate-50">
              <h3 className="text-sm font-black text-slate-900">Monthly Performance</h3>
            </div>
            <div className="flex-1 overflow-x-auto">
              <table className="w-full text-left whitespace-nowrap">
                <thead className="bg-slate-50/50 border-b border-slate-50 text-[10px] font-black text-slate-400 uppercase tracking-wider">
                  <tr>
                    <th className="px-8 py-5">Month</th>
                    <th className="px-8 py-5">Revenue</th>
                    <th className="px-8 py-5">Growth</th>
                    <th className="px-8 py-5">Deals Won</th>
                    <th className="px-8 py-5 text-right">Avg Deal</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-50">
                  {[
                    { m: 'October 2026', r: '৳ 2,450,000', g: '+18.5%', d: 22, a: '৳ 111,000' },
                    { m: 'September 2026', r: '৳ 2,060,000', g: '+12.0%', d: 18, a: '৳ 114,000' },
                    { m: 'August 2026', r: '৳ 1,840,000', g: '+8.4%', d: 15, a: '৳ 122,000' },
                    { m: 'July 2026', r: '৳ 1,690,000', g: '+5.2%', d: 14, a: '৳ 120,000' },
                    { m: 'June 2026', r: '৳ 1,600,000', g: '+2.1%', d: 12, a: '৳ 133,000' },
                  ].map((row, i) => (
                    <tr key={i} className="hover:bg-orange-50/30 transition-colors">
                      <td className="px-8 py-5 text-sm font-bold text-slate-900">{row.m}</td>
                      <td className="px-8 py-5 text-sm font-black text-slate-800">{row.r}</td>
                      <td className="px-8 py-5 text-sm font-bold text-emerald-500">{row.g}</td>
                      <td className="px-8 py-5 text-sm font-bold text-slate-600">{row.d}</td>
                      <td className="px-8 py-5 text-sm font-black text-slate-900 text-right">{row.a}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}