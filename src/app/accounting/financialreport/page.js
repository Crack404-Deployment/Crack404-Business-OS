'use client';
import { useState } from 'react';
import { 
  FileText, Download, Filter, Building2, Wallet, 
  ArrowRight, ShieldCheck, Sigma
} from 'lucide-react';

export default function FinancialReports() {
  const [reportType, setReportType] = useState("Income Statement");
  const [period, setPeriod] = useState("YTD 2026 (Jan - Aug)");

  // --- MOCK FINANCIAL REPORT DATA ---
  const incomeStatement = {
    revenue: [
      { name: "Hardware Sales (POS)", amount: 450000.00 },
      { name: "Software Licenses", amount: 280000.00 },
      { name: "Consulting Services", amount: 120000.00 },
    ],
    costOfGoods: [
      { name: "Hardware Purchases", amount: 210000.00 },
      { name: "Server & Hosting Costs", amount: 45000.00 },
    ],
    expenses: [
      { name: "Payroll & Salaries", amount: 180000.00 },
      { name: "Rent & Utilities", amount: 42000.00 },
      { name: "Marketing & Ads", amount: 35000.00 },
      { name: "General & Admin", amount: 18000.00 },
    ]
  };

  const fmt = (n) => `$${Number(n).toLocaleString('en-US', {minimumFractionDigits: 2})}`;

  const totalRevenue = incomeStatement.revenue.reduce((sum, item) => sum + item.amount, 0);
  const totalCogs = incomeStatement.costOfGoods.reduce((sum, item) => sum + item.amount, 0);
  const grossProfit = totalRevenue - totalCogs;
  const totalExpenses = incomeStatement.expenses.reduce((sum, item) => sum + item.amount, 0);
  const netIncome = grossProfit - totalExpenses;

  return (
    <div className="min-h-screen bg-slate-50 font-sans p-4 sm:p-6 lg:p-8 text-slate-900">
      <div className="max-w-[1200px] mx-auto space-y-6">
        
        {/* ================= HEADER ================= */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
          <div>
            <h1 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">Financial Reports</h1>
            <p className="text-sm font-medium text-slate-500 mt-1">Generate and export official accounting statements.</p>
          </div>
          <div className="flex gap-3">
            <button className="bg-orange-600 hover:bg-orange-700 text-white px-5 py-2.5 rounded-xl font-bold shadow-[0_4px_14px_rgba(234,88,12,0.25)] transition-all flex items-center gap-2 text-sm">
              <Download className="w-4 h-4" /> Export Report (PDF)
            </button>
          </div>
        </div>

        {/* ================= REPORT CONTROLS ================= */}
        <div className="bg-white border border-slate-200 rounded-2xl p-4 shadow-sm flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="flex gap-2 bg-slate-50 p-1 rounded-xl border border-slate-200 w-full sm:w-auto overflow-x-auto hide-scrollbar">
            {["Income Statement", "Balance Sheet", "Cash Flow", "Tax Summary"].map(type => (
              <button 
                key={type}
                onClick={() => setReportType(type)}
                className={`px-4 py-2 rounded-lg text-xs font-bold transition-all whitespace-nowrap ${
                  reportType === type ? 'bg-orange-600 text-white shadow-sm' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {type}
              </button>
            ))}
          </div>
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <select 
              value={period} 
              onChange={(e) => setPeriod(e.target.value)}
              className="w-full sm:w-auto bg-white border border-slate-200 text-slate-700 px-4 py-2 rounded-lg text-sm font-bold focus:outline-none focus:border-orange-500 transition-all"
            >
              <option>YTD 2026 (Jan - Aug)</option>
              <option>Q2 2026</option>
              <option>Q1 2026</option>
              <option>FY 2025</option>
            </select>
          </div>
        </div>

        {/* ================= REPORT DOCUMENT AREA ================= */}
        <div className="bg-white border border-slate-200 rounded-2xl shadow-sm p-8 sm:p-12 relative overflow-hidden">
          
          {/* Watermark / Styling */}
          <div className="absolute top-0 right-0 p-8 opacity-5 pointer-events-none">
            <Building2 className="w-48 h-48 text-slate-900" />
          </div>

          <div className="relative z-10 space-y-10">
            {/* Doc Header */}
            <div className="text-center border-b border-slate-200 pb-8">
              <h2 className="text-2xl font-black text-slate-900 uppercase tracking-widest">{reportType}</h2>
              <p className="text-sm font-medium text-slate-500 mt-2">CRACK404 LTD. • {period}</p>
              <p className="text-[10px] text-slate-400 mt-1">Generated on: Aug 6, 2026</p>
            </div>

            {/* Income Statement Data Rendering */}
            {reportType === "Income Statement" && (
              <div className="space-y-8 max-w-3xl mx-auto">
                
                {/* Revenue Section */}
                <div>
                  <h3 className="text-sm font-black text-slate-500 uppercase tracking-wider mb-3 flex items-center gap-2 border-b border-slate-200 pb-2">
                    <Wallet className="w-4 h-4 text-orange-500"/> Revenue
                  </h3>
                  <div className="space-y-2">
                    {incomeStatement.revenue.map((item, i) => (
                      <div key={i} className="flex justify-between text-sm font-medium">
                        <span className="text-slate-600">{item.name}</span>
                        <span className="text-slate-900">{fmt(item.amount)}</span>
                      </div>
                    ))}
                  </div>
                  <div className="flex justify-between text-sm font-black text-emerald-600 pt-3 mt-3 border-t border-slate-200">
                    <span>Total Revenue</span>
                    <span>{fmt(totalRevenue)}</span>
                  </div>
                </div>

                {/* COGS Section */}
                <div>
                  <h3 className="text-sm font-black text-slate-500 uppercase tracking-wider mb-3 flex items-center gap-2 border-b border-slate-200 pb-2">
                    <Box className="w-4 h-4 text-orange-500"/> Cost of Goods Sold (COGS)
                  </h3>
                  <div className="space-y-2">
                    {incomeStatement.costOfGoods.map((item, i) => (
                      <div key={i} className="flex justify-between text-sm font-medium">
                        <span className="text-slate-600">{item.name}</span>
                        <span className="text-slate-900">{fmt(item.amount)}</span>
                      </div>
                    ))}
                  </div>
                  <div className="flex justify-between text-sm font-black text-rose-600 pt-3 mt-3 border-t border-slate-200">
                    <span>Total COGS</span>
                    <span>{fmt(totalCogs)}</span>
                  </div>
                </div>

                {/* Gross Profit Marker */}
                <div className="flex justify-between items-center text-lg font-black text-slate-900 bg-slate-50 p-4 rounded-xl border border-slate-200 shadow-sm">
                  <span className="flex items-center gap-2"><Sigma className="w-5 h-5 text-orange-500"/> Gross Profit</span>
                  <span>{fmt(grossProfit)}</span>
                </div>

                {/* Operating Expenses Section */}
                <div>
                  <h3 className="text-sm font-black text-slate-500 uppercase tracking-wider mb-3 flex items-center gap-2 border-b border-slate-200 pb-2">
                    <FileText className="w-4 h-4 text-orange-500"/> Operating Expenses
                  </h3>
                  <div className="space-y-2">
                    {incomeStatement.expenses.map((item, i) => (
                      <div key={i} className="flex justify-between text-sm font-medium">
                        <span className="text-slate-600">{item.name}</span>
                        <span className="text-slate-900">{fmt(item.amount)}</span>
                      </div>
                    ))}
                  </div>
                  <div className="flex justify-between text-sm font-black text-rose-600 pt-3 mt-3 border-t border-slate-200">
                    <span>Total Operating Expenses</span>
                    <span>{fmt(totalExpenses)}</span>
                  </div>
                </div>

                {/* Net Income Marker */}
                <div className="flex justify-between items-center text-xl font-black bg-emerald-50 p-5 rounded-xl border-l-4 border-emerald-500">
                  <span className="text-emerald-900">Net Income</span>
                  <span className="text-emerald-600">{fmt(netIncome)}</span>
                </div>

              </div>
            )}
            
            {/* Placeholder for other reports */}
            {reportType !== "Income Statement" && (
              <div className="py-20 text-center text-slate-400 flex flex-col items-center">
                <ShieldCheck className="w-12 h-12 mb-4 opacity-30 text-orange-500" />
                <p className="font-bold text-slate-600">Module actively syncing with General Ledger.</p>
                   <p className="text-xs mt-1">Please select &quot;Income Statement&quot; to view active mocked data.</p>
              </div>
            )}

          </div>
        </div>

      </div>
    </div>
  );
}
// Add this simple Box icon import placeholder if needed, relying on lucide-react standard icons.
function Box(props) { return <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>; }