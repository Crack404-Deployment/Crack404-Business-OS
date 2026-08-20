'use client';
import { Filter, ChevronDown, ArrowDown } from 'lucide-react';

export default function SalesFunnel() {
  const funnelData = [
    { stage: 'Total Leads', count: 1250, value: '—', percentage: '100%', color: 'bg-slate-800' },
    { stage: 'Qualified Leads', count: 640, value: '—', percentage: '51%', color: 'bg-blue-600' },
    { stage: 'Opportunities', count: 320, value: '৳ 85,000,000', percentage: '25%', color: 'bg-indigo-500' },
    { stage: 'Proposal Sent', count: 180, value: '৳ 52,000,000', percentage: '14%', color: 'bg-amber-500' },
    { stage: 'Negotiation', count: 95, value: '৳ 28,500,000', percentage: '7.6%', color: 'bg-orange-500' },
    { stage: 'Won', count: 48, value: '৳ 14,200,000', percentage: '3.8%', color: 'bg-emerald-500' },
  ];

  return (
    <div className="bg-white min-h-screen w-full">
      <div className="px-6 py-12 sm:px-8 sm:py-16 lg:py-20 max-w-7xl mx-auto space-y-10 animate-in fade-in duration-500">
        
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">Sales Funnel</h1>
            <p className="text-sm font-medium text-slate-500 mt-1">Analyze aggregate conversion rates through your sales process.</p>
          </div>
          <button className="flex items-center gap-2 px-5 py-2.5 bg-white border border-slate-200 rounded-xl text-sm font-bold text-slate-600 shadow-sm">
            Last 90 Days <ChevronDown className="w-4 h-4 ml-1"/>
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Visual Funnel */}
          <div className="lg:col-span-2 bg-white border border-slate-100 rounded-3xl shadow-[0_4px_20px_rgba(0,0,0,0.03)] p-8 sm:p-12 flex flex-col items-center justify-center">
            {funnelData.map((level, idx) => {
              const width = 100 - (idx * 12); // visually narrowing
              return (
                <div key={level.stage} className="w-full flex flex-col items-center">
                  <div 
                    style={{ width: `${width}%` }} 
                    className={`${level.color} text-white py-4 px-6 rounded-2xl flex items-center justify-between shadow-lg shadow-slate-200/50 transition-all hover:scale-105`}
                  >
                    <span className="text-sm font-black uppercase tracking-wider">{level.stage}</span>
                    <span className="text-lg font-black">{level.count}</span>
                  </div>
                  {idx !== funnelData.length - 1 && (
                    <ArrowDown className="w-5 h-5 text-slate-300 my-2" />
                  )}
                </div>
              );
            })}
          </div>

          {/* Metrics */}
          <div className="space-y-6">
            <div className="bg-orange-50 border border-orange-100 rounded-3xl p-8">
              <p className="text-[11px] font-black text-orange-600 uppercase tracking-wider mb-2">Overall Win Rate</p>
              <h2 className="text-5xl font-black text-orange-600">3.8%</h2>
              <p className="text-sm font-bold text-orange-500 mt-2">Leads to Won</p>
            </div>
            <div className="bg-white border border-slate-100 rounded-3xl shadow-[0_4px_20px_rgba(0,0,0,0.03)] p-8">
              <p className="text-[11px] font-black text-slate-400 uppercase tracking-wider mb-2">Opp to Win Rate</p>
              <h2 className="text-4xl font-black text-slate-900">15.0%</h2>
            </div>
            <div className="bg-white border border-slate-100 rounded-3xl shadow-[0_4px_20px_rgba(0,0,0,0.03)] p-8">
              <p className="text-[11px] font-black text-slate-400 uppercase tracking-wider mb-2">Avg Deal Size</p>
              <h2 className="text-3xl font-black text-slate-900">৳ 295,833</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}