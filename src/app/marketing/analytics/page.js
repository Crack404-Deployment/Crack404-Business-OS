'use client';
import { PieChart, Globe, MapPin, MousePointerClick, TrendingUp } from 'lucide-react';

export default function Analytics() {
  const regions = [
    { name: "Sylhet Division", users: "45.2K", percentage: 55, color: "bg-orange-500" },
    { name: "Dhaka Division", users: "28.5K", percentage: 35, color: "bg-blue-500" },
    { name: "Other", users: "8.2K", percentage: 10, color: "bg-purple-500" },
  ];

  return (
    <div className="min-h-screen bg-slate-50 font-sans p-4 sm:p-6 lg:p-8 text-slate-900">
      <div className="max-w-[1500px] mx-auto space-y-6">
        
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm mb-6">
          <h1 className="text-2xl sm:text-3xl font-black tracking-tight">Traffic & Analytics</h1>
          <p className="text-sm font-medium text-slate-500 mt-1">Detailed breakdown of your web and store traffic sources.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Core Metrics */}
          <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm flex flex-col justify-center items-center text-center">
            <Globe className="w-8 h-8 text-blue-500 mb-3"/>
            <p className="text-sm font-bold text-slate-500 uppercase">Total Visitors (Aug)</p>
            <h3 className="text-4xl font-black text-slate-900 mt-1">81.9K</h3>
            <p className="text-xs font-bold text-emerald-500 mt-2 bg-emerald-50 px-2 py-1 rounded">+12.4% vs last month</p>
          </div>
          <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm flex flex-col justify-center items-center text-center">
            <MousePointerClick className="w-8 h-8 text-orange-500 mb-3"/>
            <p className="text-sm font-bold text-slate-500 uppercase">Avg. Bounce Rate</p>
            <h3 className="text-4xl font-black text-slate-900 mt-1">42.8%</h3>
            <p className="text-xs font-bold text-emerald-500 mt-2 bg-emerald-50 px-2 py-1 rounded">-2.1% improvement</p>
          </div>
          <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm flex flex-col justify-center items-center text-center">
            <TrendingUp className="w-8 h-8 text-purple-500 mb-3"/>
            <p className="text-sm font-bold text-slate-500 uppercase">Goal Completions</p>
            <h3 className="text-4xl font-black text-slate-900 mt-1">3,450</h3>
            <p className="text-xs font-bold text-emerald-500 mt-2 bg-emerald-50 px-2 py-1 rounded">High Conversion Rate</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Regional Demographics */}
          <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
            <h3 className="text-lg font-bold text-slate-900 mb-6 flex items-center gap-2"><MapPin className="w-5 h-5 text-orange-500"/> Traffic by Region</h3>
            <div className="space-y-5">
              {regions.map((reg, i) => (
                <div key={i}>
                  <div className="flex justify-between text-sm font-bold mb-2">
                    <span className="text-slate-700">{reg.name}</span>
                    <span className="text-slate-900">{reg.users} <span className="text-slate-400 font-medium ml-1">({reg.percentage}%)</span></span>
                  </div>
                  <div className="w-full bg-slate-100 rounded-full h-3 overflow-hidden">
                    <div className={`h-full rounded-full ${reg.color}`} style={{ width: `${reg.percentage}%` }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Device Breakdown (Doughnut Simulation) */}
          <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm flex flex-col">
            <h3 className="text-lg font-bold text-slate-900 mb-6 flex items-center gap-2"><PieChart className="w-5 h-5 text-orange-500"/> Device Breakdown</h3>
            <div className="flex-1 flex items-center justify-center">
              <div className="relative w-48 h-48 rounded-full flex items-center justify-center" style={{ background: `conic-gradient(#f97316 0% 70%, #3b82f6 70% 95%, #e2e8f0 95% 100%)` }}>
                <div className="w-32 h-32 bg-white rounded-full flex flex-col items-center justify-center shadow-inner">
                  <span className="text-xl font-black text-slate-900">70%</span>
                  <span className="text-xs font-bold text-slate-500">Mobile</span>
                </div>
              </div>
            </div>
            <div className="flex justify-center gap-6 mt-6">
              <div className="flex items-center gap-2 text-sm font-bold text-slate-700"><div className="w-3 h-3 bg-orange-500 rounded-sm"></div> Mobile (70%)</div>
              <div className="flex items-center gap-2 text-sm font-bold text-slate-700"><div className="w-3 h-3 bg-blue-500 rounded-sm"></div> Desktop (25%)</div>
              <div className="flex items-center gap-2 text-sm font-bold text-slate-700"><div className="w-3 h-3 bg-slate-200 rounded-sm"></div> Tablet (5%)</div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}