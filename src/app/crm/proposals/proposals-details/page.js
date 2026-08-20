'use client';
import Link from 'next/link';
import { ArrowLeft, CheckCircle2, Download, Send } from 'lucide-react';

export default function ProposalDetails() {
  return (
    <div className="bg-white min-h-screen w-full">
      <div className="px-6 py-12 sm:px-8 sm:py-16 max-w-4xl mx-auto space-y-8 animate-in fade-in duration-500">
        
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <Link className="flex items-center gap-2 text-sm font-bold text-slate-500 hover:text-orange-600" href="/crm/proposals"><ArrowLeft className="w-4 h-4"/> Back</Link>
          <div className="flex items-center gap-3">
            <button className="bg-white border border-slate-200 px-4 py-2 rounded-xl text-sm font-bold text-slate-700 hover:text-orange-600 flex items-center gap-2"><Download className="w-4 h-4"/> PDF</button>
            <button className="bg-gradient-to-r from-orange-600 to-amber-500 text-white px-5 py-2 rounded-xl text-sm font-bold flex items-center gap-2 shadow-[0_4px_14px_rgba(234,88,12,0.25)]"><Send className="w-4 h-4"/> Send Proposal</button>
          </div>
        </div>

        {/* Document Body */}
        <div className="bg-white border border-slate-100 rounded-3xl shadow-[0_10px_40px_rgba(0,0,0,0.04)] p-10 sm:p-16 space-y-12">
          
          <div className="border-b border-slate-100 pb-10 text-center">
            <p className="text-sm font-black text-orange-500 tracking-widest uppercase mb-4">Business Proposal</p>
            <h1 className="text-4xl font-black text-slate-900 tracking-tight mb-6">Enterprise Digital Transformation</h1>
            <p className="text-lg font-medium text-slate-500">Prepared for <span className="font-bold text-slate-800">TechNova Ltd</span></p>
          </div>

          <section>
            <h2 className="text-xl font-black text-slate-900 border-l-4 border-orange-500 pl-4 mb-4">1. Executive Summary</h2>
            <p className="text-sm text-slate-600 leading-relaxed font-medium">This proposal outlines our approach to implementing a full-scale Enterprise CRM and Business OS for TechNova Ltd. Our goal is to streamline your sales processes, centralize customer data, and provide actionable analytics to drive growth in Q4 and beyond.</p>
          </section>

          <section>
            <h2 className="text-xl font-black text-slate-900 border-l-4 border-orange-500 pl-4 mb-4">2. Proposed Solution</h2>
            <ul className="space-y-3 mt-4">
              {['Centralized Customer Database mapping', 'Automated Sales Pipeline tracking', 'Custom Reporting & Dashboards', 'API Integration with existing ERP'].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-sm font-bold text-slate-700"><CheckCircle2 className="w-5 h-5 text-emerald-500"/> {item}</li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-black text-slate-900 border-l-4 border-orange-500 pl-4 mb-4">3. Implementation Timeline</h2>
            <div className="space-y-4">
              <div className="flex justify-between items-center p-4 bg-slate-50 rounded-xl border border-slate-100">
                <span className="text-sm font-bold text-slate-900">Phase 1: Discovery & Setup</span>
                <span className="text-xs font-black text-orange-500 uppercase tracking-wider">Weeks 1-2</span>
              </div>
              <div className="flex justify-between items-center p-4 bg-slate-50 rounded-xl border border-slate-100">
                <span className="text-sm font-bold text-slate-900">Phase 2: Data Migration & Integration</span>
                <span className="text-xs font-black text-orange-500 uppercase tracking-wider">Weeks 3-5</span>
              </div>
              <div className="flex justify-between items-center p-4 bg-slate-50 rounded-xl border border-slate-100">
                <span className="text-sm font-bold text-slate-900">Phase 3: Training & Go-Live</span>
                <span className="text-xs font-black text-orange-500 uppercase tracking-wider">Week 6</span>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}