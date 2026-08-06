'use client';
import { useState } from 'react';
import { 
  FileText, Search, Plus, Filter, MoreHorizontal, 
  CheckSquare, Mail, Download, AlertCircle, ChevronLeft, ChevronRight 
} from 'lucide-react';

export default function Invoices() {
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [selectedInvoices, setSelectedInvoices] = useState(new Set());

  // --- MOCK INVOICE DATA ---
  const invoices = [
    { id: "INV-2026-0045", client: "TechCorp Inc.", email: "billing@techcorp.com", amount: 12500.00, issueDate: "Aug 1, 2026", dueDate: "Aug 15, 2026", status: "Unpaid" },
    { id: "INV-2026-0044", client: "Global Retailers", email: "finance@global.net", amount: 8400.00, issueDate: "Jul 28, 2026", dueDate: "Aug 11, 2026", status: "Paid" },
    { id: "INV-2026-0043", client: "Omega Systems", email: "ap@omega.com", amount: 3200.00, issueDate: "Jul 15, 2026", dueDate: "Jul 30, 2026", status: "Overdue" },
    { id: "INV-2026-0042", client: "NextGen Dynamics", email: "slee@nextgen.io", amount: 45000.00, issueDate: "Jul 10, 2026", dueDate: "Aug 10, 2026", status: "Paid" },
    { id: "INV-2026-0041", client: "Wilson & Co.", email: "accounts@wilsonco.com", amount: 1500.00, issueDate: "Aug 5, 2026", dueDate: "Aug 20, 2026", status: "Draft" },
  ];

  const filteredInvoices = invoices.filter(inv => 
    (statusFilter === "All" || inv.status === statusFilter) &&
    (inv.client.toLowerCase().includes(search.toLowerCase()) || inv.id.toLowerCase().includes(search.toLowerCase()))
  );

  const toggleSelect = (id) => {
    const newSet = new Set(selectedInvoices);
    newSet.has(id) ? newSet.delete(id) : newSet.add(id);
    setSelectedInvoices(newSet);
  };

  const fmt = (n) => `$${Number(n).toLocaleString('en-US', {minimumFractionDigits: 2})}`;

  return (
    <div className="min-h-screen bg-slate-50 font-sans p-4 sm:p-6 lg:p-8 text-slate-900">
      <div className="max-w-[1500px] mx-auto space-y-6">
        
        {/* ================= HEADER ================= */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
          <div>
            <h1 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">Invoice Manager</h1>
            <p className="text-sm font-medium text-slate-500 mt-1">Create, track, and manage client billing.</p>
          </div>
          <div className="flex gap-3">
            <button className="bg-orange-600 hover:bg-orange-700 text-white px-5 py-2.5 rounded-xl font-bold shadow-[0_4px_14px_rgba(234,88,12,0.25)] transition-all flex items-center gap-2 text-sm">
              <Plus className="w-4 h-4" /> Create Invoice
            </button>
          </div>
        </div>

        {/* ================= DATA TABLE ================= */}
        <div className="bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden flex flex-col">
          
          <div className="p-4 border-b border-slate-200 flex flex-col lg:flex-row gap-4 justify-between items-center bg-slate-50/50">
            <div className="flex items-center gap-4 w-full lg:w-auto">
              {selectedInvoices.size > 0 ? (
                <div className="flex items-center gap-3 bg-orange-50 border border-orange-200 px-4 py-2 rounded-lg text-sm text-orange-700 font-bold animate-pulse">
                  <span>{selectedInvoices.size} Selected</span>
                  <div className="w-px h-4 bg-orange-300"></div>
                  <button className="hover:text-orange-900">Send Reminder</button>
                  <button className="hover:text-orange-900">Mark as Paid</button>
                  <button className="hover:text-red-600">Delete</button>
                </div>
              ) : (
                <div className="flex items-center gap-2 w-full sm:w-auto overflow-x-auto hide-scrollbar pb-1 sm:pb-0">
                  {["All", "Paid", "Unpaid", "Overdue", "Draft"].map(status => (
                    <button 
                      key={status}
                      onClick={() => setStatusFilter(status)}
                      className={`px-4 py-1.5 rounded-lg text-xs font-bold transition-all whitespace-nowrap ${
                        statusFilter === status ? 'bg-orange-100 text-orange-700 border border-orange-200' : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-50'
                      }`}
                    >
                      {status}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <div className="flex gap-3 w-full lg:w-auto">
              <div className="relative w-full lg:w-80">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input 
                  type="text" 
                  placeholder="Search invoice or client..." 
                  className="w-full pl-9 pr-4 py-2 bg-white border border-slate-300 rounded-lg text-sm text-slate-900 focus:outline-none focus:border-orange-500 transition-all placeholder-slate-400"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
              </div>
              <button className="bg-white border border-slate-300 p-2 rounded-lg text-slate-500 hover:text-slate-900 hover:bg-slate-50 transition-colors">
                <Filter className="w-5 h-5" />
              </button>
            </div>
          </div>

          <div className="overflow-x-auto hide-scrollbar">
            <table className="w-full text-left text-sm text-slate-600 min-w-[1000px]">
              <thead className="bg-slate-50 text-slate-500 font-bold uppercase text-[10px] tracking-wider border-b border-slate-200">
                <tr>
                  <th className="px-6 py-4 w-12">
                    <button onClick={() => setSelectedInvoices(selectedInvoices.size === filteredInvoices.length ? new Set() : new Set(filteredInvoices.map(i => i.id)))}>
                      <CheckSquare className={`w-5 h-5 ${selectedInvoices.size > 0 ? 'text-orange-500' : 'text-slate-300'}`} />
                    </button>
                  </th>
                  <th className="px-4 py-4">Invoice No. & Client</th>
                  <th className="px-4 py-4">Timeline</th>
                  <th className="px-4 py-4 text-right">Amount</th>
                  <th className="px-4 py-4 text-center">Status</th>
                  <th className="px-6 py-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {filteredInvoices.map((inv) => (
                  <tr key={inv.id} className={`hover:bg-slate-50 transition-colors group ${selectedInvoices.has(inv.id) ? 'bg-orange-50/30' : ''}`}>
                    <td className="px-6 py-4">
                      <button onClick={() => toggleSelect(inv.id)}>
                        <CheckSquare className={`w-5 h-5 transition-colors ${selectedInvoices.has(inv.id) ? 'text-orange-500' : 'text-slate-300 group-hover:text-slate-400'}`} />
                      </button>
                    </td>
                    <td className="px-4 py-4">
                      <p className="font-bold text-slate-900 text-sm">{inv.id}</p>
                      <p className="text-[11px] font-medium text-slate-500 mt-0.5">{inv.client} • {inv.email}</p>
                    </td>
                    <td className="px-4 py-4">
                      <p className="text-xs font-medium text-slate-600">Issued: <span className="font-bold">{inv.issueDate}</span></p>
                      <p className={`text-[10px] font-bold mt-1 flex items-center gap-1 ${inv.status === 'Overdue' ? 'text-rose-600' : 'text-slate-500'}`}>
                        {inv.status === 'Overdue' && <AlertCircle className="w-3 h-3"/>} Due: {inv.dueDate}
                      </p>
                    </td>
                    <td className="px-4 py-4 text-right">
                      <span className="text-sm font-black text-slate-900">{fmt(inv.amount)}</span>
                    </td>
                    <td className="px-4 py-4 text-center">
                      <span className={`text-[10px] font-bold px-3 py-1 rounded-md border whitespace-nowrap ${
                        inv.status === 'Paid' ? 'bg-emerald-50 text-emerald-700 border-emerald-200' :
                        inv.status === 'Unpaid' ? 'bg-amber-50 text-amber-700 border-amber-200' :
                        inv.status === 'Overdue' ? 'bg-rose-50 text-rose-700 border-rose-200' :
                        'bg-slate-100 text-slate-600 border-slate-200'
                      }`}>
                        {inv.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        <button className="p-2 bg-white border border-slate-200 hover:border-orange-300 hover:text-orange-600 text-slate-500 rounded-lg transition-all shadow-sm"><Mail className="w-4 h-4" /></button>
                        <button className="p-2 bg-white border border-slate-200 hover:border-slate-300 hover:text-slate-900 text-slate-500 rounded-lg transition-all shadow-sm"><Download className="w-4 h-4" /></button>
                        <button className="p-2 bg-white border border-slate-200 hover:border-slate-300 hover:text-slate-900 text-slate-500 rounded-lg transition-all shadow-sm"><MoreHorizontal className="w-4 h-4" /></button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          {/* Pagination */}
          <div className="p-4 border-t border-slate-200 flex flex-col sm:flex-row justify-between items-center gap-4 bg-slate-50/50">
            <span className="text-sm font-medium text-slate-500">Showing <span className="font-bold text-slate-900">1</span> to <span className="font-bold text-slate-900">{filteredInvoices.length}</span> of <span className="font-bold text-slate-900">245</span> entries</span>
            <div className="flex gap-2">
              <button className="px-3 py-1.5 bg-white border border-slate-300 rounded-lg text-slate-500 hover:bg-slate-50 flex items-center"><ChevronLeft className="w-4 h-4" /></button>
              <button className="px-3 py-1.5 bg-orange-600 text-white font-bold rounded-lg shadow-sm">1</button>
              <button className="px-3 py-1.5 bg-white border border-slate-300 rounded-lg text-slate-600 hover:bg-slate-50 font-bold">2</button>
              <button className="px-3 py-1.5 bg-white border border-slate-300 rounded-lg text-slate-500 hover:bg-slate-50 flex items-center"><ChevronRight className="w-4 h-4" /></button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}