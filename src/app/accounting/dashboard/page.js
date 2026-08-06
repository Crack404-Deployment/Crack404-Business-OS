'use client';
import { useState } from 'react';
import { 
  DollarSign, TrendingUp, TrendingDown, CreditCard, 
  Wallet, PieChart, ArrowUpRight, ArrowDownRight, 
  FileText, Download, Activity, MoreVertical
} from 'lucide-react';

export default function AccountingDashboard() {
  const [timeRange, setTimeRange] = useState("August 2026");

  // --- MOCK FINANCIAL DATA ---
  const kpis = [
    { label: "Gross Revenue", value: "$142,500", trend: "+12.5%", isPositive: true, icon: DollarSign, color: "text-emerald-600", bg: "bg-emerald-50" },
    { label: "Total Expenses", value: "$48,200", trend: "-2.4%", isPositive: true, icon: TrendingDown, color: "text-rose-600", bg: "bg-rose-50" },
    { label: "Net Profit", value: "$94,300", trend: "+8.2%", isPositive: true, icon: Activity, color: "text-blue-600", bg: "bg-blue-50" },
    { label: "Accounts Receivable", value: "$24,100", trend: "14 Invoices", isPositive: true, icon: FileText, color: "text-amber-600", bg: "bg-amber-50" },
    { label: "Accounts Payable", value: "$8,400", trend: "5 Bills", isPositive: false, icon: CreditCard, color: "text-purple-600", bg: "bg-purple-50" },
    { label: "Current Cash Balance", value: "$312,850", trend: "+4.1%", isPositive: true, icon: Wallet, color: "text-cyan-600", bg: "bg-cyan-50" },
  ];

  const recentTransactions = [
    { id: "TXN-8829", desc: "Server Infrastructure (AWS)", category: "Cloud Hosting", type: "Expense", amount: "$1,240.00", date: "Aug 6, 2026", status: "Completed" },
    { id: "TXN-8828", desc: "Invoice INV-0042 Payment", category: "Client Revenue", type: "Income", amount: "$8,500.00", date: "Aug 5, 2026", status: "Completed" },
    { id: "TXN-8827", desc: "Office Supplies", category: "Operations", type: "Expense", amount: "$340.50", date: "Aug 4, 2026", status: "Completed" },
    { id: "TXN-8826", desc: "Payroll Processing", category: "Salaries", type: "Expense", amount: "$24,500.00", date: "Aug 1, 2026", status: "Completed" },
  ];

  return (
    <div className="min-h-screen bg-slate-50 font-sans p-4 sm:p-6 lg:p-8 text-slate-900 overflow-x-hidden">
      <div className="max-w-[1600px] mx-auto space-y-6">
        
        {/* ================= HEADER ================= */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_8px_rgba(16,185,129,0.5)]"></div>
              <span className="text-[10px] sm:text-xs font-bold text-emerald-600 uppercase tracking-wider">Live Ledger Synced</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">Financial Overview</h1>
            <p className="text-sm font-medium text-slate-500 mt-1">Real-time accounting, cash flow, and profit tracking.</p>
          </div>
          
          <div className="flex items-center gap-3">
            <select 
              value={timeRange} 
              onChange={(e) => setTimeRange(e.target.value)}
              className="bg-slate-50 border border-slate-200 text-slate-700 px-4 py-2.5 rounded-xl font-bold hover:border-orange-400 focus:outline-none focus:ring-2 focus:ring-orange-500/20 transition-all cursor-pointer text-sm"
            >
              <option>August 2026</option>
              <option>July 2026</option>
              <option>Q3 2026</option>
              <option>YTD 2026</option>
            </select>
            <button className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-2.5 rounded-xl font-bold shadow-[0_4px_14px_rgba(234,88,12,0.25)] transition-all flex items-center justify-center gap-2 text-sm">
              <Download className="w-4 h-4"/> Export CSV
            </button>
          </div>
        </div>

        {/* ================= 6-METRIC KPI GRID ================= */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
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
                <p className="text-[10px] sm:text-xs font-bold text-slate-500 uppercase tracking-wider">{kpi.label}</p>
                <h3 className="text-xl sm:text-2xl font-black text-slate-900 mt-1">{kpi.value}</h3>
              </div>
            );
          })}
        </div>

        {/* ================= CHARTS ROW ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* Cash Flow Visualizer */}
          <div className="lg:col-span-2 bg-white border border-slate-200 rounded-2xl p-6 shadow-sm flex flex-col w-full">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-orange-500"/> Cash Flow (Income vs Expenses)
              </h3>
              <button className="text-slate-400 hover:text-slate-600 transition-colors"><MoreVertical className="w-5 h-5"/></button>
            </div>
            
            <div className="flex-1 flex items-end gap-2 sm:gap-4 h-64 border-b border-slate-100 pb-2 pt-8 relative">
              {/* Background grid lines */}
              <div className="absolute inset-0 flex flex-col justify-between pointer-events-none opacity-50">
                {[1,2,3,4].map(i => <div key={i} className="w-full border-t border-slate-100"></div>)}
              </div>
              
              {[
                { i: 85, e: 40 }, { i: 110, e: 45 }, { i: 95, e: 60 }, 
                { i: 130, e: 55 }, { i: 150, e: 48 }, { i: 142, e: 48 } // Aug data
              ].map((data, idx) => (
                <div key={idx} className="flex-1 relative group flex items-end justify-center gap-1 h-full z-10">
                  <div className="opacity-0 group-hover:opacity-100 absolute -top-10 bg-slate-800 text-white text-[10px] font-bold px-2 py-1 rounded transition-opacity whitespace-nowrap shadow-md">
                    In: ${(data.i * 1000).toLocaleString()} | Out: ${(data.e * 1000).toLocaleString()}
                  </div>
                  {/* Income Bar */}
                  <div className="w-1/2 bg-gradient-to-t from-emerald-300 to-emerald-500 rounded-t-sm" style={{ height: `${(data.i / 160) * 100}%` }}></div>
                  {/* Expense Bar */}
                  <div className="w-1/2 bg-gradient-to-t from-rose-300 to-rose-500 rounded-t-sm" style={{ height: `${(data.e / 160) * 100}%` }}></div>
                </div>
              ))}
            </div>
            <div className="flex justify-between text-[10px] md:text-xs text-slate-400 font-bold uppercase mt-3 px-2">
              <span>Mar</span><span>Apr</span><span>May</span><span>Jun</span><span>Jul</span><span>Aug</span>
            </div>
          </div>

          {/* Expense Breakdown */}
          <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm flex flex-col w-full">
            <h3 className="text-lg font-bold text-slate-900 mb-6 flex items-center gap-2">
              <PieChart className="w-5 h-5 text-orange-500"/> Operating Expenses
            </h3>
            <div className="flex-1 flex flex-col items-center justify-center min-h-[160px]">
              <div className="relative w-40 h-40 rounded-full flex items-center justify-center shadow-inner" style={{ background: `conic-gradient(#f43f5e 0% 45%, #f97316 45% 75%, #3b82f6 75% 90%, #8b5cf6 90% 100%)` }}>
                <div className="w-24 h-24 bg-white rounded-full flex flex-col items-center justify-center border border-slate-100 shadow-[inset_0_2px_10px_rgba(0,0,0,0.05)]">
                  <span className="text-[10px] font-bold text-slate-400">Total</span>
                  <span className="text-lg font-black text-slate-900">$48.2k</span>
                </div>
              </div>
            </div>
            <div className="mt-6 space-y-3">
              {[
                { name: "Salaries & Wages", val: 45, color: "#f43f5e" },
                { name: "Software & Cloud", val: 30, color: "#f97316" }, // Swapped to Orange
                { name: "Marketing", val: 15, color: "#3b82f6" },
                { name: "Office & Misc", val: 10, color: "#8b5cf6" }
              ].map((exp, i) => (
                <div key={i} className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full" style={{ backgroundColor: exp.color }}></span>
                    <span className="font-bold text-slate-600">{exp.name}</span>
                  </div>
                  <span className="font-black text-slate-900">{exp.val}%</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ================= RECENT TRANSACTIONS ================= */}
        <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
              <Activity className="w-5 h-5 text-orange-500"/> General Ledger (Recent)
            </h3>
            <button className="text-xs font-bold text-orange-600 hover:text-orange-700">View Full Ledger</button>
          </div>
          
          <div className="overflow-x-auto hide-scrollbar">
            <table className="w-full text-left text-sm">
              <thead className="bg-slate-50 text-slate-500 font-bold uppercase text-[10px] tracking-wider border-b border-slate-200">
                <tr>
                  <th className="px-4 py-3">Transaction Info</th>
                  <th className="px-4 py-3">Category</th>
                  <th className="px-4 py-3 text-right">Amount</th>
                  <th className="px-4 py-3 text-center">Date</th>
                  <th className="px-4 py-3 text-right">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {recentTransactions.map((txn, i) => (
                  <tr key={i} className="hover:bg-slate-50 transition-colors">
                    <td className="px-4 py-4">
                      <p className="font-bold text-slate-900">{txn.desc}</p>
                      <p className="text-[10px] font-mono text-slate-400 mt-0.5">{txn.id}</p>
                    </td>
                    <td className="px-4 py-4">
                      <span className="px-2.5 py-1 rounded bg-slate-100 text-slate-600 text-xs font-bold border border-slate-200">
                        {txn.category}
                      </span>
                    </td>
                    <td className="px-4 py-4 text-right">
                      <span className={`font-black ${txn.type === 'Income' ? 'text-emerald-600' : 'text-rose-600'}`}>
                        {txn.type === 'Income' ? '+' : '-'}{txn.amount}
                      </span>
                    </td>
                    <td className="px-4 py-4 text-center text-xs font-bold text-slate-500">{txn.date}</td>
                    <td className="px-4 py-4 text-right">
                      <span className="text-[10px] font-bold px-2 py-1 rounded text-emerald-700 border border-emerald-200 bg-emerald-50">
                        {txn.status}
                      </span>
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