'use client';
import Link from 'next/link';
import { Plus, FileText } from 'lucide-react';

export default function ProposalsList() {
  const proposals = [
    { id: 'PRP-2026-042', title: 'Enterprise Digital Transformation', customer: 'TechNova Ltd', value: '৳ 850,000', status: 'Sent', created: 'Oct 15, 2026' }
  ];

  return (
    <div className="bg-white min-h-screen w-full">
      <div className="px-6 py-12 sm:px-8 sm:py-16 lg:py-20 max-w-7xl mx-auto space-y-8 animate-in fade-in duration-500">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-black text-slate-900">Proposals</h1>
            <p className="text-sm font-medium text-slate-500 mt-1">Create and manage detailed business proposals.</p>
          </div>
          <Link href="/crm/proposals/proposals-details" className="bg-gradient-to-r from-orange-600 to-amber-500 text-white px-5 py-2.5 rounded-xl text-sm font-bold flex gap-2"><Plus className="w-4 h-4"/> Create Proposal</Link>
        </div>
        
        <div className="bg-white border border-slate-100 rounded-3xl shadow-[0_4px_20px_rgba(0,0,0,0.03)] overflow-hidden">
          <table className="w-full text-left whitespace-nowrap">
            <thead className="bg-white border-b border-slate-50 text-[10px] font-black text-slate-400 uppercase tracking-wider">
              <tr><th className="px-6 py-5">Proposal Name & ID</th><th className="px-6 py-5">Customer</th><th className="px-6 py-5">Value</th><th className="px-6 py-5">Status</th></tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {proposals.map((p) => (
                <tr key={p.id} className="hover:bg-orange-50/30">
                  <td className="px-6 py-4">
                    {/* FIXED PATH -> /crm/proposals/proposals-details */}
                    <Link href="/crm/proposals/proposals-details" className="text-sm font-bold text-slate-900 hover:text-orange-600">{p.title}</Link>
                    <p className="text-xs font-bold text-slate-400 flex items-center gap-1 mt-1"><FileText className="w-3 h-3"/> {p.id}</p>
                  </td>
                  <td className="px-6 py-4 text-sm font-medium text-slate-600">{p.customer}</td>
                  <td className="px-6 py-4 text-sm font-black text-slate-900">{p.value}</td>
                  <td className="px-6 py-4"><span className="bg-amber-50 text-amber-600 border border-amber-200 px-3 py-1.5 rounded-md text-[10px] font-black uppercase">{p.status}</span></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}