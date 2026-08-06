'use client';
import { useState } from 'react';
import { 
  Megaphone, TrendingUp, Target, MousePointerClick, 
  BarChart2, ArrowUpRight, ArrowDownRight, Users, 
  Mail, Globe, Smartphone, Download
} from 'lucide-react';

export default function MarketingDashboard() {
  const [timeRange, setTimeRange] = useState("August 2026");

  // --- MOCK DATA ---
  const kpis = [
    { label: "Total Ad Spend", value: "$12,450", trend: "+5.2%", isPositive: false, icon: Target, color: "text-blue-600", bg: "bg-blue-50" },
    { label: "Avg. ROI", value: "245%", trend: "+12.5%", isPositive: true, icon: TrendingUp, color: "text-emerald-600", bg: "bg-emerald-50" },
    { label: "Total Impressions", value: "1.2M", trend: "+18.2%", isPositive: true, icon: Globe, color: "text-purple-600", bg: "bg-purple-50" },
    { label: "Click-Through Rate", value: "4.8%", trend: "-0.5%", isPositive: false, icon: MousePointerClick, color: "text-orange-600", bg: "bg-orange-50" }
  ];

  const channelPerformance = [
    { channel: "Social Media (FB/IG)", spend: 5400, revenue: 14500, color: "bg-blue-500" },
    { channel: "Google Search Ads", spend: 4200, revenue: 12800, color: "bg-orange-500" },
    { channel: "Email Marketing", spend: 850, revenue: 6400, color: "bg-emerald-500" },
    { channel: "SMS / WhatsApp", spend: 2000, revenue: 4100, color: "bg-purple-500" },
  ];

  const topCampaigns = [
    { name: "Back to School Tech Promo", channel: "Omnichannel", leads: 412, conversion: "12.4%", status: "Active" },
    { name: "Sylhet Store Opening", channel: "Social Media", leads: 285, conversion: "8.1%", status: "Active" },
    { name: "Abandoned Cart Recovery", channel: "Email", leads: 154, conversion: "22.5%", status: "Automated" },
  ];

  return (
    <div className="min-h-screen bg-slate-50 font-sans p-4 sm:p-6 lg:p-8 text-slate-900">
      <div className="max-w-[1600px] mx-auto space-y-6">
        
        {/* ================= HEADER ================= */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
          <div>
            <h1 className="text-2xl sm:text-3xl font-black tracking-tight">Marketing Dashboard</h1>
            <p className="text-sm font-medium text-slate-500 mt-1">Track campaign ROI, ad spend, and channel performance.</p>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-3">
            <select 
              value={timeRange} 
              onChange={(e) => setTimeRange(e.target.value)}
              className="w-full sm:w-auto bg-slate-50 border border-slate-200 text-slate-700 px-4 py-2.5 rounded-xl font-bold focus:outline-none focus:border-orange-500 transition-all"
            >
              <option>August 2026</option>
              <option>Q3 2026</option>
              <option>Year to Date</option>
            </select>
            <button className="w-full sm:w-auto bg-orange-600 hover:bg-orange-700 text-white px-6 py-2.5 rounded-xl font-bold shadow-sm transition-all flex items-center justify-center gap-2">
              <Download className="w-4 h-4"/> Export Report
            </button>
          </div>
        </div>

        {/* ================= KPI CARDS ================= */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {kpis.map((kpi, index) => {
            const Icon = kpi.icon;
            return (
              <div key={index} className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm hover:border-orange-300 transition-all group">
                <div className="flex justify-between items-start mb-4">
                  <div className={`p-2.5 rounded-xl ${kpi.bg} ${kpi.color} group-hover:scale-110 transition-transform`}>
                    <Icon className="w-5 h-5"/>
                  </div>
                  <span className={`flex items-center gap-0.5 text-[11px] font-bold px-2 py-1 rounded-md ${kpi.isPositive ? 'bg-emerald-50 text-emerald-700' : 'bg-rose-50 text-rose-700'}`}>
                    {kpi.isPositive ? <ArrowUpRight className="w-3 h-3"/> : <ArrowDownRight className="w-3 h-3"/>}
                    {kpi.trend}
                  </span>
                </div>
                <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">{kpi.label}</p>
                <h3 className="text-2xl font-black text-slate-900 mt-1">{kpi.value}</h3>
              </div>
            );
          })}
        </div>

        {/* ================= CHARTS ROW ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* Channel Performance Bar Chart */}
          <div className="lg:col-span-2 bg-white border border-slate-200 rounded-2xl p-6 shadow-sm flex flex-col">
            <h3 className="text-lg font-bold text-slate-900 mb-6 flex items-center gap-2">
              <BarChart2 className="w-5 h-5 text-orange-500"/> Channel Spend vs. Revenue
            </h3>
            
            <div className="space-y-6 flex-1 justify-center flex flex-col">
              {channelPerformance.map((item, i) => (
                <div key={i} className="space-y-2">
                  <div className="flex justify-between text-sm font-bold text-slate-700">
                    <span>{item.channel}</span>
                    <span className="text-emerald-600">ROI: {Math.round((item.revenue / item.spend) * 100)}%</span>
                  </div>
                  <div className="flex items-center gap-2 h-4">
                    <div className="h-full bg-slate-200 rounded-md" style={{ width: `${(item.spend / 15000) * 100}%` }} title={`Spend: $${item.spend}`}></div>
                    <div className={`h-full ${item.color} rounded-md`} style={{ width: `${(item.revenue / 15000) * 100}%` }} title={`Revenue: $${item.revenue}`}></div>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex items-center justify-center gap-6 mt-6 pt-4 border-t border-slate-100 text-xs font-bold text-slate-500">
              <div className="flex items-center gap-2"><div className="w-3 h-3 bg-slate-200 rounded-sm"></div> Ad Spend</div>
              <div className="flex items-center gap-2"><div className="w-3 h-3 bg-orange-500 rounded-sm"></div> Revenue Generated</div>
            </div>
          </div>

          {/* Top Campaigns List */}
          <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm flex flex-col">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                <Megaphone className="w-5 h-5 text-orange-500"/> Top Campaigns
              </h3>
            </div>
            
            <div className="space-y-4 flex-1">
              {topCampaigns.map((camp, i) => (
                <div key={i} className="p-4 bg-slate-50 border border-slate-100 rounded-xl hover:border-orange-200 transition-colors">
                  <div className="flex justify-between items-start mb-2">
                    <span className={`text-[10px] font-black uppercase tracking-wider px-2 py-1 rounded-md border ${
                      camp.status === 'Active' ? 'bg-emerald-50 text-emerald-600 border-emerald-200' : 'bg-blue-50 text-blue-600 border-blue-200'
                    }`}>
                      {camp.status}
                    </span>
                    <span className="text-xs font-bold text-slate-500">{camp.channel}</span>
                  </div>
                  <h4 className="text-sm font-bold text-slate-900 mb-3">{camp.name}</h4>
                  <div className="flex justify-between items-center border-t border-slate-200 pt-3">
                    <div className="text-center">
                      <p className="text-[10px] font-bold text-slate-400 uppercase">Leads</p>
                      <p className="text-sm font-black text-slate-900">{camp.leads}</p>
                    </div>
                    <div className="text-center">
                      <p className="text-[10px] font-bold text-slate-400 uppercase">Conv. Rate</p>
                      <p className="text-sm font-black text-emerald-600">{camp.conversion}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}