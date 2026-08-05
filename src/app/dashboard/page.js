'use client';
import { useState } from 'react';
import { Users, CreditCard, Receipt, Activity, Clock } from 'lucide-react';

export default function BasicDashboard() {
  // --- MOCK DATA ---
  const stats = [
    { label: "Total Revenue", value: "$45,231", trend: "+12.5%", icon: CreditCard },
    { label: "Active Leads", value: "142", trend: "+5.2%", icon: Users },
    { label: "POS Sales Today", value: "$3,150", trend: "+8.1%", icon: Receipt },
    { label: "Pending Invoices", value: "$12,400", trend: "-2.4%", icon: Activity }
  ];

  const activities = [
    { title: "New Sale: POS Terminal #1", time: "10 mins ago", status: "success" },
    { title: "Invoice #1024 Paid", time: "45 mins ago", status: "success" },
    { title: "Low Stock: Wireless Keyboard", time: "2 hours ago", status: "warning" },
    { title: "New Lead Registered", time: "3 hours ago", status: "info" }
  ];

  return (
    <div className="min-h-screen bg-white  font-sans p-4 sm:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto space-y-6">

        {/* ============ HEADER ============ */}
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 pb-4 border-b border-gray-800">
          <div>
            <h1 className="text-2xl sm:text-3xl font-black text-gray-700 tracking-tight">Dashboard Overview</h1>
            <p className="text-sm text-gray-800 mt-1">Welcome back. Here is what is happening today.</p>
          </div>
          <button className="bg-gradient-to-r from-orange-600 to-amber-600 text-white px-5 py-2.5 rounded-lg font-bold shadow-[0_0_15px_rgba(234,88,12,0.3)] hover:shadow-[0_0_25px_rgba(234,88,12,0.5)] transition-all">
            + New Report
          </button>
        </div>

        {/* ============ STATS GRID ============ */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <div key={i} className="bg-white border border-gray-300 rounded-2xl p-5 hover:border-orange-500/50 transition-colors group shadow-lg">
                <div className="flex justify-between items-start mb-4">
                  <div className="w-10 h-10 rounded-xl bg-orange-500/10 text-orange-500 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${stat.trend.startsWith('+') ? 'bg-emerald-900/30 text-emerald-400' : 'bg-red-900/30 text-red-400'}`}>
                    {stat.trend}
                  </span>
                </div>
                <p className="text-sm font-semibold text-black">{stat.label}</p>
                <h3 className="text-2xl sm:text-3xl font-black text-black mt-1">{stat.value}</h3>
              </div>
            )
          })}
        </div>

        {/* ============ MAIN CONTENT AREA ============ */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* Revenue Chart Placeholder */}
          <div className="lg:col-span-2 bg-white border border-gray-300 rounded-2xl p-5 sm:p-6 shadow-lg">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-lg font-bold text-black">Revenue Overview</h3>
              <select className="bg-gray-500 border border-gray-200 text-white text-xs font-bold rounded-lg px-3 py-2 outline-none">
                <option>This Year</option>
                <option>Last Year</option>
              </select>
            </div>
            
            {/* Minimalist Bar Chart */}
            <div className="flex items-end gap-2 sm:gap-3 h-48 sm:h-64 border-b border-gray-800 pb-2">
              {[40, 65, 30, 85, 55, 95, 70, 45, 80, 100, 60, 90].map((height, i) => (
                <div 
                  key={i} 
                  className="flex-1 bg-gradient-to-t from-orange-900/40 to-orange-500/80 rounded-t-md hover:to-orange-400 transition-colors relative group" 
                  style={{ height: `${height}%` }}
                >
                  {/* Tooltip on hover */}
                  <div className="opacity-0 group-hover:opacity-100 absolute -top-8 left-1/2 -translate-x-1/2 bg-black border border-gray-700 text-xs px-2 py-1 rounded text-white pointer-events-none transition-opacity hidden sm:block">
                    ${(height * 120).toLocaleString()}
                  </div>
                </div>
              ))}
            </div>
            <div className="flex justify-between text-[10px] sm:text-xs text-gray-600 mt-3 font-semibold uppercase px-1 overflow-x-auto hide-scrollbar">
              <span>Jan</span><span>Feb</span><span>Mar</span><span>Apr</span><span>May</span><span>Jun</span>
              <span>Jul</span><span>Aug</span><span>Sep</span><span>Oct</span><span>Nov</span><span>Dec</span>
            </div>
          </div>

          {/* Recent Activity List */}
          <div className="bg-white border border-gray-300 rounded-2xl p-5 sm:p-6 shadow-lg flex flex-col">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-lg font-bold text-black">Recent Activity</h3>
              <Clock className="w-5 h-5 text-black" />
            </div>
            
            <div className="space-y-5 flex-1">
              {activities.map((act, i) => (
                <div key={i} className="flex gap-4 items-start">
                  <div className="mt-1 flex-shrink-0">
                    <div className={`w-2.5 h-2.5 rounded-full mt-1.5 shadow-[0_0_8px_currentColor] ${
                      act.status === 'success' ? 'bg-emerald-500 text-emerald-500' :
                      act.status === 'warning' ? 'bg-orange-500 text-orange-500' : 'bg-blue-500 text-blue-500'
                    }`} />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-black">{act.title}</p>
                    <p className="text-xs text-gray-500 mt-1">{act.time}</p>
                  </div>
                </div>
              ))}
            </div>

            <button className="w-full mt-6 py-3 border border-gray-800 rounded-xl text-sm font-bold text-black hover:text-white hover:bg-gray-800 transition-colors">
              View All Activity
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}