'use client';
import Link from 'next/link';
import { ArrowLeft, Download, Send, Edit } from 'lucide-react';

export default function QuotationDetails() {
  return (
    <div className="bg-white min-h-screen w-full">
      <div className="px-6 py-12 sm:px-8 sm:py-16 max-w-5xl mx-auto space-y-8 animate-in fade-in duration-500">
        
        {/* Actions bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <Link className="flex items-center gap-2 text-sm font-bold text-slate-500 hover:text-orange-600" href="/crm/quotations"><ArrowLeft className="w-4 h-4"/> Back</Link>
          <div className="flex items-center gap-3">
            <button className="bg-white border border-slate-200 px-4 py-2 rounded-xl text-sm font-bold text-slate-700 hover:text-orange-600 flex items-center gap-2 shadow-sm"><Edit className="w-4 h-4"/> Edit</button>
            <button className="bg-white border border-slate-200 px-4 py-2 rounded-xl text-sm font-bold text-slate-700 hover:text-orange-600 flex items-center gap-2 shadow-sm"><Download className="w-4 h-4"/> PDF</button>
            <button className="bg-gradient-to-r from-orange-600 to-amber-500 text-white px-5 py-2 rounded-xl text-sm font-bold shadow-md flex items-center gap-2"><Send className="w-4 h-4"/> Send</button>
          </div>
        </div>

        {/* Invoice Document */}
        <div className="bg-white border border-slate-100 rounded-3xl shadow-[0_10px_40px_rgba(0,0,0,0.04)] p-10 sm:p-16">
          <div className="flex justify-between items-start border-b border-slate-100 pb-10 mb-10">
            <div>
              <h1 className="text-4xl font-black text-slate-900 tracking-tight mb-2">QUOTATION</h1>
              <p className="text-lg font-bold text-orange-500">#QT-2026-089</p>
            </div>
            <div className="text-right">
              <h2 className="text-xl font-black text-slate-900">Your Company Name</h2>
              <p className="text-sm font-medium text-slate-500 mt-1">123 Business Rd, Tech City</p>
              <p className="text-sm font-medium text-slate-500">contact@yourcompany.com</p>
            </div>
          </div>

          <div className="flex justify-between mb-12">
            <div>
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-wider mb-2">Quoted To</p>
              <h3 className="text-lg font-black text-slate-900">ABC Electronics</h3>
              <p className="text-sm font-medium text-slate-600 mt-1">Attn: Karim Hasan</p>
              <p className="text-sm font-medium text-slate-600">karim@abcelectronics.com</p>
            </div>
            <div className="text-right space-y-2">
              <div><span className="text-[10px] font-black text-slate-400 uppercase mr-4">Issue Date</span><span className="text-sm font-bold text-slate-900">Oct 24, 2026</span></div>
              <div><span className="text-[10px] font-black text-slate-400 uppercase mr-4">Valid Until</span><span className="text-sm font-bold text-orange-500">Nov 24, 2026</span></div>
              <div><span className="text-[10px] font-black text-slate-400 uppercase mr-4">Opportunity</span><span className="text-sm font-bold text-slate-900">CRM + POS Package</span></div>
            </div>
          </div>

          <table className="w-full text-left mb-10">
            <thead className="border-y border-slate-100 text-[10px] font-black text-slate-400 uppercase tracking-wider">
              <tr>
                <th className="py-4">Description</th>
                <th className="py-4 text-center">Qty</th>
                <th className="py-4 text-right">Unit Price</th>
                <th className="py-4 text-right">Total</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              <tr>
                <td className="py-6"><p className="text-sm font-bold text-slate-900">CRM Pro License (Annual)</p><p className="text-xs text-slate-500 mt-1">Full enterprise features.</p></td>
                <td className="py-6 text-center text-sm font-bold text-slate-700">1</td>
                <td className="py-6 text-right text-sm font-bold text-slate-700">৳ 150,000</td>
                <td className="py-6 text-right text-sm font-black text-slate-900">৳ 150,000</td>
              </tr>
              <tr>
                <td className="py-6"><p className="text-sm font-bold text-slate-900">POS Module Integration</p><p className="text-xs text-slate-500 mt-1">Setup and onboarding.</p></td>
                <td className="py-6 text-center text-sm font-bold text-slate-700">1</td>
                <td className="py-6 text-right text-sm font-bold text-slate-700">৳ 100,000</td>
                <td className="py-6 text-right text-sm font-black text-slate-900">৳ 100,000</td>
              </tr>
            </tbody>
          </table>

          <div className="flex justify-end border-t border-slate-100 pt-8">
            <div className="w-64 space-y-4">
              <div className="flex justify-between text-sm font-bold text-slate-600"><span>Subtotal</span><span>৳ 250,000</span></div>
              <div className="flex justify-between text-sm font-bold text-slate-600"><span>Tax (0%)</span><span>৳ 0</span></div>
              <div className="flex justify-between text-lg font-black text-orange-600 border-t border-slate-100 pt-4"><span>Grand Total</span><span>৳ 250,000</span></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}