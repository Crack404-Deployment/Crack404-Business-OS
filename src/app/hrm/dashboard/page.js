'use client';
import { useState } from 'react';
import { 
  Users, Briefcase, UserCheck, CalendarDays, TrendingUp, 
  Clock, CheckCircle2, XCircle, ArrowUpRight, 
  MoreVertical, Download, PieChart, AlertCircle
} from 'lucide-react';

export default function HRMDashboard() {
  const [timeRange, setTimeRange] = useState("August 2026");

  const kpis = [
    { label: "Total Headcount", value: "142", trend: "+3", isPositive: true, icon: Users, color: "text-blue-600", bg: "bg-blue-50" },
    { label: "Avg. Attendance", value: "96.4%", trend: "+1.2%", isPositive: true, icon: UserCheck, color: "text-emerald-600", bg: "bg-emerald-50" },
    { label: "Open Vacancies", value: "8", trend: "Hiring", isPositive: true, icon: Briefcase, color: "text-orange-600", bg: "bg-orange-50" },
    { label: "On Leave Today", value: "5", trend: "Normal", isPositive: false, icon: CalendarDays, color: "text-slate-600", bg: "bg-slate-100" },
  ];

  const departmentData = [
    { dept: "Sales & Retail", count: 65, color: "#f97316" }, // Orange
    { dept: "Engineering", count: 42, color: "#3b82f6" }, // Blue
    { dept: "Support", count: 20, color: "#10b981" }, // Emerald
    { dept: "Operations", count: 15, color: "#8b5cf6" }, // Purple
  ];

  const leaveRequests = [
    { id: 1, name: "Sarah Jenkins", role: "Store Manager", type: "Sick Leave", dates: "Aug 8 - Aug 9", status: "Pending", avatar: "SJ" },
    { id: 2, name: "Tahmid", role: "Sales Exec", type: "Annual Leave", dates: "Aug 12 - Aug 15", status: "Pending", avatar: "T" },
    { id: 3, name: "Mike Ross", role: "Technician", type: "Personal", dates: "Aug 10", status: "Approved", avatar: "MR" },
  ];

  const recentHires = [
    { name: "John Doe", role: "Junior Developer", dept: "Engineering", startDate: "Aug 1, 2026" },
    { name: "Jane Smith", role: "Sales Associate", dept: "Sales & Retail", startDate: "Aug 3, 2026" },
    { name: "Robert Fox", role: "Inventory Clerk", dept: "Operations", startDate: "Aug 5, 2026" },
  ];

  return (
    <div className="min-h-screen bg-slate-50 font-sans p-3 sm:p-6 lg:p-8 text-slate-900 overflow-x-hidden">
      <div className="max-w-[1600px] mx-auto space-y-4 sm:space-y-6">
        
        {/* ================= HEADER ================= */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 bg-white p-4 sm:p-6 rounded-2xl border border-slate-200 shadow-sm">
          <div className="flex-1">
            <h1 className="text-xl sm:text-2xl md:text-3xl font-black tracking-tight">HRM Dashboard</h1>
            <p className="text-xs sm:text-sm font-medium text-slate-500 mt-1">Workforce analytics and team overview.</p>
          </div>
          
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full md:w-auto">
            <select 
              value={timeRange} 
              onChange={(e) => setTimeRange(e.target.value)}
              className="w-full sm:w-auto bg-slate-50 border border-slate-200 text-slate-700 px-4 py-3 sm:py-2.5 rounded-xl font-bold hover:border-orange-400 focus:outline-none focus:ring-2 focus:ring-orange-500/20 transition-all cursor-pointer text-sm"
            >
              <option>August 2026</option>
              <option>July 2026</option>
              <option>Q3 2026</option>
            </select>
            <button className="w-full sm:w-auto bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 sm:py-2.5 rounded-xl font-bold shadow-sm transition-all flex items-center justify-center gap-2 text-sm">
              <Download className="w-4 h-4"/> Export Report
            </button>
          </div>
        </div>

        {/* ================= KPI GRID ================= */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {kpis.map((kpi, index) => {
            const Icon = kpi.icon;
            return (
              <div key={index} className="bg-white border border-slate-200 rounded-2xl p-4 sm:p-5 shadow-sm hover:border-orange-300 transition-colors group">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 sm:gap-0 mb-3 sm:mb-4">
                  <div className={`p-2 sm:p-2.5 rounded-xl ${kpi.bg} ${kpi.color} group-hover:scale-110 transition-transform`}>
                    <Icon className="w-4 h-4 sm:w-5 sm:h-5"/>
                  </div>
                  <span className={`flex items-center gap-0.5 text-[10px] sm:text-[11px] font-bold px-2 py-1 rounded-md ${kpi.isPositive ? 'bg-emerald-50 text-emerald-700' : 'bg-slate-100 text-slate-700'}`}>
                    {kpi.isPositive && <ArrowUpRight className="w-3 h-3"/>}
                    {kpi.trend}
                  </span>
                </div>
                <p className="text-[10px] sm:text-xs font-bold text-slate-500 uppercase tracking-wider">{kpi.label}</p>
                <h3 className="text-lg sm:text-xl md:text-2xl font-black text-slate-900 mt-1">{kpi.value}</h3>
              </div>
            );
          })}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
          
          {/* Department Breakdown */}
          <div className="bg-white border border-slate-200 rounded-2xl p-4 sm:p-6 shadow-sm flex flex-col w-full">
            <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-4 sm:mb-6 flex items-center gap-2">
              <PieChart className="w-4 h-4 sm:w-5 sm:h-5 text-orange-500"/> Team Distribution
            </h3>
            <div className="flex-1 flex flex-col items-center justify-center min-h-[160px]">
              <div className="relative w-32 h-32 sm:w-40 sm:h-40 rounded-full flex items-center justify-center shadow-inner" style={{ background: `conic-gradient(${departmentData[0].color} 0% 45%, ${departmentData[1].color} 45% 75%, ${departmentData[2].color} 75% 89%, ${departmentData[3].color} 89% 100%)` }}>
                <div className="w-20 h-20 sm:w-24 sm:h-24 bg-white rounded-full flex flex-col items-center justify-center shadow-[inset_0_2px_10px_rgba(0,0,0,0.1)]">
                  <span className="text-[10px] sm:text-xs font-bold text-slate-400">Total</span>
                  <span className="text-base sm:text-lg font-black text-slate-900">142</span>
                </div>
              </div>
            </div>
            <div className="mt-4 sm:mt-6 space-y-2.5 sm:space-y-3">
              {departmentData.map((dept, i) => (
                <div key={i} className="flex items-center justify-between text-xs sm:text-sm">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full shrink-0" style={{ backgroundColor: dept.color }}></span>
                    <span className="font-bold text-slate-700 truncate">{dept.dept}</span>
                  </div>
                  <span className="font-black text-slate-900">{dept.count} <span className="text-[10px] text-slate-400 font-medium ml-1">staff</span></span>
                </div>
              ))}
            </div>
          </div>

          {/* Pending Leave Requests */}
          <div className="lg:col-span-2 bg-white border border-slate-200 rounded-2xl p-4 sm:p-6 shadow-sm flex flex-col w-full overflow-hidden">
            <div className="flex justify-between items-center mb-4 sm:mb-6">
              <h3 className="text-base sm:text-lg font-bold text-slate-900 flex items-center gap-2">
                <AlertCircle className="w-4 h-4 sm:w-5 sm:h-5 text-orange-500"/> Leave Requests
              </h3>
              <button className="text-xs sm:text-sm font-bold text-orange-600 hover:text-orange-700 transition-colors">View All</button>
            </div>
            
            <div className="space-y-3 sm:space-y-4">
              {leaveRequests.map((request) => (
                <div key={request.id} className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4 p-3 sm:p-4 bg-slate-50 border border-slate-100 rounded-xl hover:border-orange-200 transition-all">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-slate-200 text-slate-600 flex items-center justify-center font-black text-xs sm:text-sm shrink-0">
                      {request.avatar}
                    </div>
                    <div>
                      <p className="text-sm font-bold text-slate-900">{request.name}</p>
                      <p className="text-[10px] sm:text-xs font-medium text-slate-500">{request.role}</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between sm:justify-end gap-4 w-full sm:w-auto">
                    <div className="text-left sm:text-right">
                      <p className="text-[10px] font-bold text-slate-900 bg-white border border-slate-200 px-2 py-0.5 rounded-md inline-block mb-1">{request.type}</p>
                      <p className="text-[10px] font-bold text-slate-500 flex items-center gap-1"><Clock className="w-3 h-3" /> {request.dates}</p>
                    </div>
                    {request.status === 'Pending' ? (
                      <div className="flex gap-2 shrink-0">
                        <button className="p-1.5 sm:p-2 bg-white border border-emerald-200 text-emerald-600 rounded-lg hover:bg-emerald-50 transition-colors"><CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5" /></button>
                        <button className="p-1.5 sm:p-2 bg-white border border-rose-200 text-rose-600 rounded-lg hover:bg-rose-50 transition-colors"><XCircle className="w-4 h-4 sm:w-5 sm:h-5" /></button>
                      </div>
                    ) : (
                      <span className="px-3 py-1 bg-emerald-50 text-emerald-700 border border-emerald-200 text-[10px] font-bold rounded-md shrink-0">Approved</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-6 pt-6 border-t border-slate-100">
              <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-3">Recent Hires</h4>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {recentHires.map((hire, i) => (
                  <div key={i} className="p-3 bg-white border border-slate-200 rounded-lg shadow-sm">
                    <p className="text-xs font-bold text-slate-900">{hire.name}</p>
                    <p className="text-[10px] text-slate-500">{hire.role}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}