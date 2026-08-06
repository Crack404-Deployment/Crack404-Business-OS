'use client';
import { useState } from 'react';
import { 
  DollarSign, FileText, CheckCircle2, AlertTriangle, 
  Download, Calendar, Calculator, ChevronRight, Search
} from 'lucide-react';

export default function Payroll() {
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");

  // --- MOCK PAYROLL DATA (August 2026 Cycle) ---
  const payrollData = [
    { id: "EMP-001", name: "Sourav Das Gupta", role: "System Architect", base: 3500.00, bonus: 500.00, tax: 400.00, net: 3600.00, status: "Paid", account: "**** 9012" },
    { id: "EMP-002", name: "Sarah Jenkins", role: "Store Manager", base: 2800.00, bonus: 350.00, tax: 315.00, net: 2835.00, status: "Paid", account: "**** 4432" },
    { id: "EMP-003", name: "Tahmid", role: "Senior Sales Exec", base: 1800.00, bonus: 850.00, tax: 265.00, net: 2385.00, status: "Pending", account: "**** 1128" },
    { id: "EMP-004", name: "Mike Ross", role: "Hardware Tech", base: 2200.00, bonus: 100.00, tax: 230.00, net: 2070.00, status: "Pending", account: "**** 8890" },
    { id: "EMP-005", name: "Amanda Barnes", role: "HR Manager", base: 3100.00, bonus: 200.00, tax: 330.00, net: 2970.00, status: "Paid", account: "**** 5567" },
  ];

  const filteredData = payrollData.filter(emp => 
    (statusFilter === "All" || emp.status === statusFilter) &&
    (emp.name.toLowerCase().includes(search.toLowerCase()))
  );

  const fmt = (n) => `$${Number(n).toLocaleString('en-US', {minimumFractionDigits: 2})}`;

  const totalPayroll = payrollData.reduce((sum, emp) => sum + emp.net, 0);
  const pendingAmount = payrollData.filter(e => e.status === "Pending").reduce((sum, emp) => sum + emp.net, 0);

  return (
    <div className="min-h-screen bg-slate-50 font-sans p-4 sm:p-6 lg:p-8 text-slate-900">
      <div className="max-w-[1500px] mx-auto space-y-6">
        
        {/* ================= HEADER ================= */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <Calendar className="w-4 h-4 text-orange-500" />
              <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Active Cycle: August 2026</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-black tracking-tight">Payroll Processing</h1>
          </div>
          <div className="flex gap-3">
            <button className="bg-slate-50 border border-slate-200 text-slate-700 px-5 py-2.5 rounded-xl font-bold hover:border-orange-400 transition-all flex items-center gap-2">
              <Calculator className="w-4 h-4" /> Recalculate
            </button>
            <button className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-2.5 rounded-xl font-black shadow-[0_4px_14px_rgba(234,88,12,0.25)] transition-all flex items-center gap-2 hover:-translate-y-0.5">
              Run Payroll
            </button>
          </div>
        </div>

        {/* ================= SUMMARY WIDGETS ================= */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm flex flex-col justify-center">
            <p className="text-sm font-bold text-slate-500 flex items-center gap-2 mb-2"><DollarSign className="w-4 h-4 text-slate-400"/> Total Net Payroll (Aug)</p>
            <h3 className="text-3xl font-black text-slate-900">{fmt(totalPayroll)}</h3>
          </div>
          <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm flex flex-col justify-center">
            <p className="text-sm font-bold text-slate-500 flex items-center gap-2 mb-2"><AlertTriangle className="w-4 h-4 text-amber-500"/> Pending Clearance</p>
            <h3 className="text-3xl font-black text-amber-600">{fmt(pendingAmount)}</h3>
          </div>
          <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm flex flex-col justify-center">
            <p className="text-sm font-bold text-slate-500 flex items-center gap-2 mb-2"><CheckCircle2 className="w-4 h-4 text-emerald-500"/> Disbursed Funds</p>
            <h3 className="text-3xl font-black text-emerald-600">{fmt(totalPayroll - pendingAmount)}</h3>
          </div>
        </div>

        {/* ================= PAYROLL TABLE ================= */}
        <div className="bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden flex flex-col">
          
          <div className="p-4 border-b border-slate-200 flex flex-col lg:flex-row gap-4 justify-between items-center bg-slate-50/50">
            <div className="flex gap-2 w-full lg:w-auto">
              {["All", "Paid", "Pending"].map(status => (
                <button 
                  key={status}
                  onClick={() => setStatusFilter(status)}
                  className={`px-4 py-2 rounded-lg text-sm font-bold transition-all ${
                    statusFilter === status ? 'bg-orange-100 text-orange-700 border border-orange-200' : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-50'
                  }`}
                >
                  {status}
                </button>
              ))}
            </div>
            <div className="relative w-full lg:w-80">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input 
                type="text" 
                placeholder="Search employee..." 
                className="w-full pl-9 pr-4 py-2 bg-white border border-slate-300 rounded-lg text-sm focus:outline-none focus:border-orange-500 transition-all"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
          </div>

          <div className="overflow-x-auto hide-scrollbar">
            <table className="w-full text-left text-sm text-slate-600 min-w-[1000px]">
              <thead className="bg-slate-50 text-slate-500 font-bold uppercase text-[10px] tracking-wider border-b border-slate-200">
                <tr>
                  <th className="px-6 py-4">Employee</th>
                  <th className="px-4 py-4 text-right">Base Salary</th>
                  <th className="px-4 py-4 text-right">Comm / Bonus</th>
                  <th className="px-4 py-4 text-right">Taxes & Deduc.</th>
                  <th className="px-4 py-4 text-right">Net Pay</th>
                  <th className="px-4 py-4 text-center">Status</th>
                  <th className="px-6 py-4 text-right">Payslip</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {filteredData.map((emp) => (
                  <tr key={emp.id} className="hover:bg-slate-50 transition-colors">
                    <td className="px-6 py-4">
                      <p className="font-bold text-slate-900 text-sm">{emp.name}</p>
                      <p className="text-[10px] font-bold text-slate-400 uppercase mt-0.5">{emp.role} • Acc: {emp.account}</p>
                    </td>
                    <td className="px-4 py-4 text-right font-medium">{fmt(emp.base)}</td>
                    <td className="px-4 py-4 text-right font-medium text-emerald-600">+{fmt(emp.bonus)}</td>
                    <td className="px-4 py-4 text-right font-medium text-rose-600">-{fmt(emp.tax)}</td>
                    <td className="px-4 py-4 text-right">
                      <span className="font-black text-slate-900 bg-slate-100 px-2 py-1 rounded">{fmt(emp.net)}</span>
                    </td>
                    <td className="px-4 py-4 text-center">
                      <span className={`text-[10px] font-bold px-2.5 py-1 rounded-md border whitespace-nowrap ${
                        emp.status === 'Paid' ? 'bg-emerald-50 text-emerald-700 border-emerald-200' : 'bg-amber-50 text-amber-700 border-amber-200'
                      }`}>
                        {emp.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <button className="px-3 py-1.5 bg-white border border-slate-200 hover:border-orange-300 hover:text-orange-600 text-slate-600 text-xs font-bold rounded-lg transition-all flex items-center gap-1.5 ml-auto shadow-sm">
                        <FileText className="w-3.5 h-3.5" /> PDF
                      </button>
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