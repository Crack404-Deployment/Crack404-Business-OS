'use client';
import Link from 'next/link';
import { Plus, Search, Filter, FileText, MoreVertical } from 'lucide-react';

export default function QuotationsList() {
  const quotes = [
    { id: 'QT-2026-089', customer: 'ABC Electronics', opp: 'CRM + POS Package', amount: '৳ 250,000', status: 'Draft', created: 'Oct 24, 2026', valid: 'Nov 24, 2026', owner: 'Arif Hasan' },
    { id: 'QT-2026-088', customer: 'TechNova Ltd', opp: 'Enterprise CRM', amount: '৳ 850,000', status: 'Sent', created: 'Oct 15, 2026', valid: 'Nov 15, 2026', owner: 'Sara Rahman' },
    { id: 'QT-2026-085', customer: 'Global Retail', opp: 'Inventory Module', amount: '৳ 150,000', status: 'Accepted', created: 'Aug 05, 2026', valid: 'Sep 05, 2026', owner: 'Arif Hasan' },
  ];

  return (
    <div className="bg-white min-h-screen w-full">
      <div className="px-6 py-12 sm:px-8 sm:py-16 lg:py-20 max-w-7xl mx-auto space-y-6 sm:space-y-8 animate-in fade-in duration-500">
        
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">Quotations</h1>
            <p className="text-sm font-medium text-slate-500 mt-1">Create and manage pricing quotations for your customers.</p>
          </div>
          <Link href="/crm/quotations/quotations-details" className="flex items-center gap-2 bg-gradient-to-r from-orange-600 to-amber-500 text-white px-5 py-2.5 rounded-xl text-sm font-bold shadow-[0_4px_14px_rgba(234,88,12,0.25)]">
            <Plus className="w-4 h-4"/> Create Quotation
          </Link>
        </div>

        <div className="bg-white border border-slate-100 rounded-3xl shadow-[0_4px_20px_rgba(0,0,0,0.03)] overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left whitespace-nowrap">
              <thead className="bg-white border-b border-slate-50 text-[10px] font-black text-slate-400 uppercase tracking-wider">
                <tr>
                  <th className="px-6 py-5">Quote No.</th>
                  <th className="px-6 py-5">Customer & Opp</th>
                  <th className="px-6 py-5">Amount</th>
                  <th className="px-6 py-5">Status</th>
                  <th className="px-6 py-5">Valid Until</th>
                  <th className="px-6 py-5 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-50">
                {quotes.map((q) => (
                  <tr key={q.id} className="hover:bg-orange-50/30 transition-colors group">
                    <td className="px-6 py-4">
                      {/* FIXED PATH -> /crm/quotations/quotations-details */}
                      <Link href="/crm/quotations/quotations-details" className="text-sm font-black text-orange-600 hover:text-orange-700 flex items-center gap-2">
                        <FileText className="w-4 h-4"/> {q.id}
                      </Link>
                      <p className="text-xs font-bold text-slate-400 mt-1">{q.created}</p>
                    </td>
                    <td className="px-6 py-4">
                      <p className="text-sm font-bold text-slate-900">{q.customer}</p>
                      <p className="text-xs font-medium text-slate-500 mt-1">{q.opp}</p>
                    </td>
                    <td className="px-6 py-4 text-sm font-black text-slate-800">{q.amount}</td>
                    <td className="px-6 py-4">
                      <span className={`inline-flex items-center px-3 py-1.5 rounded-md text-[10px] font-black uppercase tracking-wider border ${
                        q.status === 'Accepted' ? 'bg-emerald-50 text-emerald-600 border-emerald-200' :
                        q.status === 'Sent' ? 'bg-amber-50 text-amber-600 border-amber-200' : 'bg-slate-50 text-slate-500 border-slate-200'
                      }`}>{q.status}</span>
                    </td>
                    <td className="px-6 py-4 text-sm font-medium text-slate-600">{q.valid}</td>
                    <td className="px-6 py-4 text-right">
                      <button className="text-slate-400 hover:text-orange-600 p-2"><MoreVertical className="w-4 h-4"/></button>
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