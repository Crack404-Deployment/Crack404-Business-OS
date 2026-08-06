'use client';
import { useState } from 'react';
import { 
  BarChart3, Users, DollarSign, Target, TrendingUp, 
  Calendar, Clock, CheckCircle, ArrowUpRight, 
  ArrowDownRight, MoreVertical, Phone, Mail, Download,
  MapPin, PieChart, Briefcase, Zap, Star
} from 'lucide-react';

export default function CRMDashboard() {
  const [timeRange, setTimeRange] = useState("This Quarter");

  // --- MOCK DATA ---
  const kpis = [
    { label: "Total Revenue", value: "$184,500", trend: "+14.5%", isPositive: true, icon: DollarSign, color: "text-emerald-600", bg: "bg-emerald-50" },
    { label: "Pipeline Value", value: "$3.4M", trend: "+8.2%", isPositive: true, icon: Briefcase, color: "text-blue-600", bg: "bg-blue-50" },
    { label: "Win Rate", value: "32.4%", trend: "+2.1%", isPositive: true, icon: TrendingUp, color: "text-orange-600", bg: "bg-orange-50" },
    { label: "New Leads", value: "412", trend: "+18.2%", isPositive: true, icon: Users, color: "text-purple-600", bg: "bg-purple-50" },
    { label: "CAC", value: "$142", trend: "-5.4%", isPositive: true, icon: Target, color: "text-rose-600", bg: "bg-rose-50" }, 
    { label: "Avg Deal Size", value: "$12,450", trend: "+1.2%", isPositive: true, icon: Zap, color: "text-amber-600", bg: "bg-amber-50" },
  ];

  const pipelineStages = [
    { stage: "Lead In", count: 245, value: "$850k", color: "bg-blue-500", width: "100%" },
    { stage: "Contacted", count: 180, value: "$620k", color: "bg-purple-500", width: "80%" },
    { stage: "Qualified", count: 94, value: "$410k", color: "bg-amber-500", width: "55%" },
    { stage: "Proposal", count: 48, value: "$245k", color: "bg-orange-500", width: "35%" },
    { stage: "Won", count: 22, value: "$184k", color: "bg-emerald-500", width: "18%" },
  ];

  const regionalData = [
    { region: "Sylhet (HQ)", revenue: "$120k", percentage: 65, color: "bg-orange-500" },
    { region: "Dhaka", revenue: "$46k", percentage: 25, color: "bg-blue-500" },
    { region: "International", revenue: "$18k", percentage: 10, color: "bg-purple-500" },
  ];

  const topAgents = [
    { name: "Sourav D.", role: "Lead Sales Exec", deals: 24, revenue: "$82,500", quota: 95, avatar: "bg-orange-100 text-orange-600" },
    { name: "Sarah Jenkins", role: "Account Mgr", deals: 18, revenue: "$64,200", quota: 88, avatar: "bg-purple-100 text-purple-600" },
    { name: "Tahmid", role: "Sales Rep", deals: 12, revenue: "$37,800", quota: 70, avatar: "bg-blue-100 text-blue-600" },
  ];

  const productBreakdown = [
    { name: "Enterprise POS", value: 45, color: "#f97316" }, 
    { name: "CRM Licenses", value: 35, color: "#3b82f6" }, 
    { name: "API Integrations", value: 20, color: "#8b5cf6" }, 
  ];

  const upcomingTasks = [
    { id: 1, title: "Follow-up Call with TechCorp", type: "Call", time: "Today, 2:00 PM", contact: "Alice Freeman" },
    { id: 2, title: "Send Q3 Proposal to Global Net", type: "Email", time: "Today, 4:30 PM", contact: "Marcus Johnson" },
    { id: 3, title: "Product Demo Session", type: "Meeting", time: "Tomorrow, 10:00 AM", contact: "Sarah Jenkins" },
    { id: 4, title: "Contract Review for Alpha Ind.", type: "Task", time: "Tomorrow, 1:00 PM", contact: "David Chen" },
  ];

  return (
    <div className="min-h-screen bg-slate-50 font-sans p-3 sm:p-6 lg:p-8 text-slate-900 overflow-x-hidden">
      <div className="max-w-[1600px] mx-auto space-y-4 sm:space-y-6">
        
        {/* ================= HEADER ================= */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 bg-white p-4 sm:p-6 rounded-2xl border border-slate-200 shadow-sm">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-1.5 sm:mb-1">
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></div>
              <span className="text-[10px] sm:text-xs font-bold text-emerald-600 uppercase tracking-wider">Live System Connected</span>
            </div>
            <h1 className="text-xl sm:text-2xl md:text-3xl font-black tracking-tight">Crack404 CRM Hub</h1>
            <p className="text-xs sm:text-sm font-medium text-slate-500 mt-1">Enterprise Sales & Pipeline Intelligence</p>
          </div>
          
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full md:w-auto">
            <select 
              value={timeRange} 
              onChange={(e) => setTimeRange(e.target.value)}
              className="w-full sm:w-auto bg-slate-50 border border-slate-200 text-slate-700 px-4 py-3 sm:py-2.5 rounded-xl font-bold hover:border-orange-400 focus:outline-none focus:ring-2 focus:ring-orange-500/20 transition-all cursor-pointer text-sm"
            >
              <option>This Week</option>
              <option>This Month</option>
              <option>This Quarter</option>
              <option>This Year</option>
            </select>
            <button className="w-full sm:w-auto bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 sm:py-2.5 rounded-xl font-bold shadow-[0_4px_14px_rgba(234,88,12,0.25)] transition-all flex items-center justify-center gap-2 hover:-translate-y-0.5 text-sm">
              <Download className="w-4 h-4"/> Export Report
            </button>
          </div>
        </div>

        {/* ================= 6-METRIC KPI GRID ================= */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
          {kpis.map((kpi, index) => {
            const Icon = kpi.icon;
            return (
              <div key={index} className="bg-white border border-slate-200 rounded-2xl p-4 sm:p-5 shadow-sm hover:border-orange-300 transition-colors group">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 sm:gap-0 mb-3 sm:mb-4">
                  <div className={`p-2 sm:p-2.5 rounded-xl ${kpi.bg} ${kpi.color} group-hover:scale-110 transition-transform`}>
                    <Icon className="w-4 h-4 sm:w-5 sm:h-5"/>
                  </div>
                  <span className={`flex items-center gap-0.5 text-[10px] sm:text-[11px] font-bold px-2 py-1 rounded-md ${kpi.isPositive ? 'bg-emerald-50 text-emerald-700' : 'bg-rose-50 text-rose-700'}`}>
                    {kpi.isPositive ? <ArrowUpRight className="w-3 h-3"/> : <ArrowDownRight className="w-3 h-3"/>}
                    {kpi.trend}
                  </span>
                </div>
                <p className="text-[10px] sm:text-xs font-bold text-slate-500 uppercase tracking-wider truncate">{kpi.label}</p>
                <h3 className="text-lg sm:text-xl md:text-2xl font-black text-slate-900 mt-1 truncate">{kpi.value}</h3>
              </div>
            );
          })}
        </div>

        {/* ================= TOP CHARTS ROW ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 sm:gap-6">
          
          {/* Revenue Growth Bar Chart */}
          <div className="lg:col-span-2 bg-white border border-slate-200 rounded-2xl p-4 sm:p-6 shadow-sm flex flex-col w-full overflow-hidden">
            <div className="flex justify-between items-center mb-4 sm:mb-6">
              <h3 className="text-base sm:text-lg font-bold text-slate-900 flex items-center gap-2">
                <BarChart3 className="w-4 h-4 sm:w-5 sm:h-5 text-orange-500"/> Revenue Trajectory
              </h3>
              <button className="text-slate-400 hover:bg-slate-50 p-1.5 rounded-lg transition-colors"><MoreVertical className="w-4 h-4 sm:w-5 sm:h-5"/></button>
            </div>
            
            <div className="flex-1 flex items-end gap-1.5 sm:gap-4 h-48 sm:h-64 border-b border-slate-100 pb-2 pt-8">
              {[40, 55, 35, 75, 60, 90, 85, 45, 100, 80, 110, 125].map((height, i) => (
                <div key={i} className="flex-1 relative group flex flex-col justify-end h-full min-w-[12px]">
                  <div className="opacity-0 group-hover:opacity-100 absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-800 text-white text-[10px] sm:text-xs font-bold px-2 py-1 rounded pointer-events-none transition-opacity z-10 hidden sm:block whitespace-nowrap">
                    ${(height * 1400).toLocaleString()}
                  </div>
                  <div 
                    className="w-full bg-gradient-to-t from-orange-200 to-orange-500 rounded-t-sm sm:rounded-t-md hover:to-orange-400 transition-all cursor-pointer group-hover:shadow-[0_0_15px_rgba(234,88,12,0.4)]" 
                    style={{ height: `${height}%` }}
                  ></div>
                </div>
              ))}
            </div>
            <div className="flex justify-between text-[8px] sm:text-[10px] md:text-xs text-slate-400 font-bold uppercase mt-3 px-1 overflow-x-auto hide-scrollbar">
              <span className="shrink-0">Jan</span><span className="shrink-0">Feb</span><span className="shrink-0">Mar</span><span className="shrink-0">Apr</span><span className="shrink-0">May</span><span className="shrink-0">Jun</span>
              <span className="shrink-0">Jul</span><span className="shrink-0">Aug</span><span className="shrink-0">Sep</span><span className="shrink-0">Oct</span><span className="shrink-0">Nov</span><span className="shrink-0">Dec</span>
            </div>
          </div>

          {/* Custom Doughnut Chart: Product Breakdown */}
          <div className="bg-white border border-slate-200 rounded-2xl p-4 sm:p-6 shadow-sm flex flex-col w-full">
            <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-4 sm:mb-6 flex items-center gap-2">
              <PieChart className="w-4 h-4 sm:w-5 sm:h-5 text-orange-500"/> Revenue by Product
            </h3>
            <div className="flex-1 flex flex-col items-center justify-center min-h-[160px]">
              <div className="relative w-32 h-32 sm:w-40 sm:h-40 rounded-full flex items-center justify-center shadow-inner" style={{ background: `conic-gradient(${productBreakdown[0].color} 0% ${productBreakdown[0].value}%, ${productBreakdown[1].color} ${productBreakdown[0].value}% ${productBreakdown[0].value + productBreakdown[1].value}%, ${productBreakdown[2].color} ${productBreakdown[0].value + productBreakdown[1].value}% 100%)` }}>
                <div className="w-20 h-20 sm:w-24 sm:h-24 bg-white rounded-full flex flex-col items-center justify-center shadow-[inset_0_2px_10px_rgba(0,0,0,0.1)]">
                  <span className="text-[10px] sm:text-xs font-bold text-slate-400">Total</span>
                  <span className="text-base sm:text-lg font-black text-slate-900">$184k</span>
                </div>
              </div>
            </div>
            <div className="mt-4 sm:mt-6 space-y-2.5 sm:space-y-3">
              {productBreakdown.map((prod, i) => (
                <div key={i} className="flex items-center justify-between text-xs sm:text-sm">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full shrink-0" style={{ backgroundColor: prod.color }}></span>
                    <span className="font-bold text-slate-700 truncate">{prod.name}</span>
                  </div>
                  <span className="font-black text-slate-900">{prod.value}%</span>
                </div>
              ))}
            </div>
          </div>

          {/* Regional Performance (Stacked Bar) */}
          <div className="bg-white border border-slate-200 rounded-2xl p-4 sm:p-6 shadow-sm flex flex-col w-full">
            <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-1 sm:mb-2 flex items-center gap-2">
              <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-orange-500"/> Regional Sales
            </h3>
            <p className="text-[10px] sm:text-xs font-medium text-slate-500 mb-4 sm:mb-6">Distribution across primary territories</p>
            
            <div className="flex-1 flex flex-col justify-center">
              <div className="w-full h-6 sm:h-8 flex rounded-xl overflow-hidden shadow-inner mb-4 sm:mb-6">
                {regionalData.map((reg, i) => (
                  <div key={i} className={`h-full ${reg.color} hover:opacity-80 transition-opacity cursor-pointer`} style={{ width: `${reg.percentage}%` }} title={reg.region}></div>
                ))}
              </div>

              <div className="space-y-3 sm:space-y-4">
                {regionalData.map((reg, i) => (
                  <div key={i} className="flex justify-between items-center p-2.5 sm:p-3 bg-slate-50 rounded-xl border border-slate-100">
                    <div className="flex items-center gap-2 sm:gap-3">
                      <div className={`w-1.5 sm:w-2 h-6 sm:h-8 rounded-full ${reg.color}`}></div>
                      <div>
                        <p className="text-xs sm:text-sm font-bold text-slate-900">{reg.region}</p>
                        <p className="text-[10px] sm:text-xs font-medium text-slate-500">{reg.percentage}% of total</p>
                      </div>
                    </div>
                    <span className="text-xs sm:text-sm font-black text-slate-900">{reg.revenue}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>

        {/* ================= SECOND CHARTS & DATA ROW ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
          
          {/* Sales Pipeline Funnel */}
          <div className="bg-white border border-slate-200 rounded-2xl p-4 sm:p-6 shadow-sm flex flex-col w-full">
            <div className="flex justify-between items-center mb-4 sm:mb-6">
              <h3 className="text-base sm:text-lg font-bold text-slate-900 flex items-center gap-2">
                <Target className="w-4 h-4 sm:w-5 sm:h-5 text-orange-500"/> Pipeline Health
              </h3>
            </div>
            
            <div className="flex-1 flex flex-col justify-center space-y-4 sm:space-y-5">
              {pipelineStages.map((stage, i) => (
                <div key={i} className="relative">
                  <div className="flex justify-between text-xs sm:text-sm font-bold mb-1.5">
                    <span className="text-slate-700">{stage.stage} <span className="text-slate-400 font-medium ml-1">({stage.count})</span></span>
                    <span className="text-slate-900">{stage.value}</span>
                  </div>
                  <div className="w-full bg-slate-100 rounded-full h-2.5 sm:h-3.5 overflow-hidden">
                    <div 
                      className={`h-full rounded-full ${stage.color} shadow-inner transition-all duration-1000 ease-out`} 
                      style={{ width: stage.width }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Top Agents Leaderboard */}
          <div className="lg:col-span-2 bg-white border border-slate-200 rounded-2xl p-4 sm:p-6 shadow-sm flex flex-col w-full overflow-hidden">
            <div className="flex justify-between items-center mb-4 sm:mb-6">
              <h3 className="text-base sm:text-lg font-bold text-slate-900 flex items-center gap-2">
                <Star className="w-4 h-4 sm:w-5 sm:h-5 text-orange-500"/> Top Performers
              </h3>
              <button className="text-xs sm:text-sm font-bold text-orange-600 hover:text-orange-700 transition-colors">View Team</button>
            </div>

            <div className="overflow-x-auto hide-scrollbar">
              <table className="w-full text-left min-w-[500px]">
                <thead>
                  <tr className="border-b border-slate-200 text-[10px] sm:text-xs font-bold text-slate-500 uppercase tracking-wider">
                    <th className="pb-3 pl-2">Agent</th>
                    <th className="pb-3">Deals Won</th>
                    <th className="pb-3">Revenue</th>
                    <th className="pb-3 pr-2">Quota Progress</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {topAgents.map((agent, i) => (
                    <tr key={i} className="hover:bg-slate-50 transition-colors group">
                      <td className="py-2 sm:py-3 pl-2">
                        <div className="flex items-center gap-2 sm:gap-3">
                          <div className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center font-black text-xs sm:text-sm shrink-0 ${agent.avatar}`}>
                            {agent.name.charAt(0)}
                          </div>
                          <div className="min-w-0">
                            <p className="text-xs sm:text-sm font-bold text-slate-900 flex items-center gap-1.5 sm:gap-2 truncate">
                              {agent.name}
                              {i === 0 && <span className="text-[8px] sm:text-[10px] bg-amber-100 text-amber-700 px-1.5 sm:px-2 py-0.5 rounded-full shrink-0">#1</span>}
                            </p>
                            <p className="text-[10px] sm:text-xs font-medium text-slate-500 truncate">{agent.role}</p>
                          </div>
                        </div>
                      </td>
                      <td className="py-2 sm:py-3">
                        <span className="text-[10px] sm:text-sm font-bold text-slate-700 bg-slate-100 px-2 sm:px-3 py-1 rounded-lg border border-slate-200 whitespace-nowrap">{agent.deals} Deals</span>
                      </td>
                      <td className="py-2 sm:py-3">
                        <span className="text-xs sm:text-sm font-black text-emerald-600">{agent.revenue}</span>
                      </td>
                      <td className="py-2 sm:py-3 pr-2 w-1/4 sm:w-1/3">
                        <div className="flex items-center gap-2 sm:gap-3">
                          <div className="flex-1 h-1.5 sm:h-2.5 bg-slate-100 rounded-full overflow-hidden">
                            <div className={`h-full rounded-full ${i === 0 ? 'bg-emerald-500' : 'bg-blue-500'}`} style={{ width: `${agent.quota}%` }}></div>
                          </div>
                          <span className="text-[10px] sm:text-xs font-bold text-slate-700">{agent.quota}%</span>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

        </div>

        {/* ================= BOTTOM ROW ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
          
          {/* Quick Leads Action Table */}
          <div className="bg-white border border-slate-200 rounded-2xl p-4 sm:p-6 shadow-sm lg:col-span-2 w-full">
            <div className="flex justify-between items-center mb-4 sm:mb-6">
              <h3 className="text-base sm:text-lg font-bold text-slate-900 flex items-center gap-2">
                <Users className="w-4 h-4 sm:w-5 sm:h-5 text-orange-500"/> Hot Leads Action
              </h3>
              <button className="text-xs sm:text-sm font-bold text-orange-600 hover:text-orange-700 transition-colors">Go to Leads</button>
            </div>
            
            <div className="space-y-3">
              {[
                { name: "Alice Freeman", company: "TechFlow Solutions", status: "Proposal", value: "$12,500" },
                { name: "Emma Wilson", company: "Wilson & Co.", status: "Negotiation", value: "$75,000" },
                { name: "Jenny Wilson", company: "Healthcare Plus", status: "Qualified", value: "$120,000" },
              ].map((lead, i) => (
                <div key={i} className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4 p-3 sm:p-4 bg-slate-50 border border-slate-200 rounded-xl hover:border-orange-300 transition-all group">
                  <div className="flex items-center gap-3 sm:gap-4">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-orange-100 text-orange-600 flex items-center justify-center font-black shrink-0 text-sm sm:text-base">
                      {lead.name.charAt(0)}
                    </div>
                    <div className="min-w-0">
                      <p className="text-sm font-bold text-slate-900 truncate">{lead.name}</p>
                      <p className="text-[10px] sm:text-xs font-medium text-slate-500 truncate">{lead.company}</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between sm:justify-end gap-4 sm:gap-6 mt-1 sm:mt-0 w-full sm:w-auto">
                    <div className="text-left sm:text-right">
                      <p className="text-[9px] sm:text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-0.5">Est. Value</p>
                      <p className="text-xs sm:text-sm font-black text-slate-900">{lead.value}</p>
                    </div>
                    <div className="flex items-center gap-2 sm:gap-6">
                      <span className="px-2 sm:px-3 py-1 rounded-md text-[10px] sm:text-xs font-bold bg-rose-100 text-rose-700 border border-rose-200 whitespace-nowrap">
                        🔥 {lead.status}
                      </span>
                      <button className="hidden sm:flex p-1.5 sm:p-2 bg-white border border-slate-200 rounded-lg text-slate-400 group-hover:text-orange-600 group-hover:border-orange-300 transition-all">
                        <Mail className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Upcoming Tasks Widget */}
          <div className="bg-white border border-slate-200 rounded-2xl p-4 sm:p-6 shadow-sm w-full">
            <div className="flex justify-between items-center mb-4 sm:mb-6">
              <h3 className="text-base sm:text-lg font-bold text-slate-900 flex items-center gap-2">
                <Calendar className="w-4 h-4 sm:w-5 sm:h-5 text-orange-500"/> Schedule
              </h3>
              <button className="text-slate-400 hover:bg-slate-50 p-1 sm:p-1.5 rounded-lg transition-colors"><MoreVertical className="w-4 h-4 sm:w-5 sm:h-5"/></button>
            </div>
            
            <div className="space-y-3 sm:space-y-4 relative before:absolute before:inset-0 before:ml-[0.95rem] sm:before:ml-[1.1rem] before:-translate-x-px before:border-l-2 before:border-slate-100 before:z-0">
              {upcomingTasks.map((task) => (
                <div key={task.id} className="relative z-10 flex gap-3 sm:gap-4 items-start group">
                  <div className="p-1.5 sm:p-2 bg-white border-2 border-slate-200 rounded-full group-hover:border-orange-500 transition-colors shrink-0">
                    {task.type === 'Meeting' ? <Users className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-slate-500 group-hover:text-orange-500" /> : task.type === 'Call' ? <Phone className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-slate-500 group-hover:text-orange-500" /> : <Mail className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-slate-500 group-hover:text-orange-500" />}
                  </div>
                  <div className="flex-1 bg-slate-50 border border-slate-100 p-2.5 sm:p-3 rounded-xl hover:border-orange-200 transition-colors cursor-pointer min-w-0">
                    <h4 className="text-xs sm:text-sm font-bold text-slate-900 mb-0.5 sm:mb-1 truncate">{task.title}</h4>
                    <p className="text-[10px] sm:text-xs font-medium text-slate-500 mb-1.5 sm:mb-2 truncate">{task.contact}</p>
                    <div className="flex items-center text-[9px] sm:text-[10px] font-bold text-slate-500 uppercase tracking-wider">
                      <Clock className="w-2.5 h-2.5 sm:w-3 sm:h-3 mr-1 sm:mr-1.5 text-orange-500 shrink-0"/> <span className="truncate">{task.time}</span>
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