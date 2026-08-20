'use client';
import Link from 'next/link';
// Added Mail and Phone to the import list below
import { ArrowLeft, Edit, CheckCircle2, Target, Building, User, Calendar, DollarSign, Percent, Briefcase, FileText, Package, Mail, Phone } from 'lucide-react';

export default function OpportunityDetails() {
  const opp = {
    id: 1, name: 'CRM + POS Package', company: 'ABC Electronics', contact: 'Karim Hasan', 
    email: 'karim@abcelectronics.com', phone: '+880 1811-000101', value: '৳ 250,000', 
    stage: 'Proposal', probability: '70%', expectedClose: 'Sept 30, 2026', owner: 'Arif Hasan', 
    status: 'Open', created: 'Aug 12, 2026', source: 'Direct Sales'
  };

  const stages = ['New', 'Qualified', 'Proposal', 'Negotiation', 'Won'];
  const currentStageIndex = stages.indexOf(opp.stage);

  return (
    <div className="bg-white min-h-screen w-full">
      <div className="px-6 py-12 sm:px-8 sm:py-16 lg:py-20 max-w-7xl mx-auto space-y-6 sm:space-y-8 animate-in fade-in duration-500">
        
        {/* Actions */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <Link className="flex items-center gap-2 text-sm font-bold text-slate-500 hover:text-orange-600 transition-colors w-fit group" href="/crm/opportunities">
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform"/> Back to Opportunities
          </Link>
          <div className="flex items-center gap-3">
            <button className="bg-white border border-slate-200 hover:bg-orange-50 px-5 py-2.5 rounded-xl text-sm font-bold text-slate-700 hover:text-orange-600 transition-colors shadow-sm">
              Change Stage
            </button>
            <button className="bg-gradient-to-r from-emerald-500 to-emerald-400 text-white px-6 py-2.5 rounded-xl text-sm font-bold transition-all shadow-[0_4px_14px_rgba(16,185,129,0.25)] active:scale-[0.98]">
              Mark as Won
            </button>
          </div>
        </div>

        {/* Pipeline Stepper */}
        <div className="bg-white border border-slate-100 rounded-3xl shadow-[0_4px_20px_rgba(0,0,0,0.03)] p-8 sm:p-10">
          <div className="flex flex-col md:flex-row md:items-center gap-6 justify-between mb-10 border-b border-slate-50 pb-8">
            <div>
              <h1 className="text-3xl font-black text-slate-900 tracking-tight">{opp.name}</h1>
              <p className="text-sm font-bold text-orange-500 mt-2 flex items-center gap-2"><Building className="w-4 h-4"/> {opp.company}</p>
            </div>
            <div className="text-left md:text-right">
              <p className="text-[11px] font-black text-slate-400 uppercase tracking-wider mb-1">Opportunity Value</p>
              <h2 className="text-4xl font-black text-slate-900">{opp.value}</h2>
            </div>
          </div>

          <div className="flex items-center justify-between relative px-2">
            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-1 bg-slate-100 -z-10 rounded-full"></div>
            {stages.map((stage, idx) => {
              const isActive = idx <= currentStageIndex;
              const isCurrent = idx === currentStageIndex;
              return (
                <div key={stage} className="flex flex-col items-center gap-3 bg-white px-4">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-black border-2 transition-all duration-300 ${
                    isActive ? 'bg-orange-500 border-orange-500 text-white shadow-md shadow-orange-500/20' : 'bg-white border-slate-200 text-slate-400'
                  } ${isCurrent ? 'ring-4 ring-orange-500/20 scale-110' : ''}`}>
                    {isActive ? <CheckCircle2 className="w-5 h-5"/> : idx + 1}
                  </div>
                  <span className={`text-[11px] uppercase tracking-wider font-black ${isActive ? 'text-slate-900' : 'text-slate-400'}`}>{stage}</span>
                </div>
              );
            })}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
          {/* Left Col: Overview & Contact */}
          <div className="space-y-6 sm:space-y-8">
            <div className="bg-white border border-slate-100 rounded-3xl shadow-[0_4px_20px_rgba(0,0,0,0.03)] p-8">
              <h3 className="text-sm font-black text-slate-900 mb-6 pb-4 border-b border-slate-50">Overview</h3>
              <div className="space-y-6">
                <div className="flex items-center justify-between"><span className="text-[11px] font-black text-slate-400 uppercase tracking-wider">Probability</span><span className="text-sm font-bold text-slate-900">{opp.probability}</span></div>
                <div className="flex items-center justify-between"><span className="text-[11px] font-black text-slate-400 uppercase tracking-wider">Expected Close</span><span className="text-sm font-bold text-orange-500">{opp.expectedClose}</span></div>
                <div className="flex items-center justify-between"><span className="text-[11px] font-black text-slate-400 uppercase tracking-wider">Owner</span><span className="text-sm font-bold text-slate-900">{opp.owner}</span></div>
                <div className="flex items-center justify-between"><span className="text-[11px] font-black text-slate-400 uppercase tracking-wider">Source</span><span className="text-sm font-bold text-slate-900">{opp.source}</span></div>
              </div>
            </div>

            <div className="bg-white border border-slate-100 rounded-3xl shadow-[0_4px_20px_rgba(0,0,0,0.03)] p-8">
              <h3 className="text-sm font-black text-slate-900 mb-6 pb-4 border-b border-slate-50">Primary Contact</h3>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center font-black text-lg">{opp.contact.charAt(0)}</div>
                <div>
                  <p className="text-sm font-black text-slate-900">{opp.contact}</p>
                  <p className="text-[11px] font-bold text-slate-500 mt-0.5">{opp.company}</p>
                </div>
              </div>
              <div className="space-y-4">
                <a href={`mailto:${opp.email}`} className="flex items-center gap-3 text-sm font-bold text-slate-600 hover:text-orange-600 transition-colors"><Mail className="w-4 h-4 text-orange-400"/> {opp.email}</a>
                <a href={`tel:${opp.phone}`} className="flex items-center gap-3 text-sm font-bold text-slate-600 hover:text-orange-600 transition-colors"><Phone className="w-4 h-4 text-orange-400"/> {opp.phone}</a>
              </div>
            </div>
          </div>

          {/* Right Col: Products & Activity */}
          <div className="lg:col-span-2 space-y-6 sm:space-y-8">
            <div className="bg-white border border-slate-100 rounded-3xl shadow-[0_4px_20px_rgba(0,0,0,0.03)] p-8">
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-50">
                <h3 className="text-sm font-black text-slate-900 flex items-center gap-2"><Package className="w-4 h-4 text-orange-500"/> Products / Services</h3>
                <button className="text-xs font-bold text-orange-600 hover:text-orange-700">+ Add Product</button>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead className="text-[10px] font-black text-slate-400 uppercase tracking-wider">
                    <tr>
                      <th className="pb-4">Item</th>
                      <th className="pb-4">Qty</th>
                      <th className="pb-4">Unit Price</th>
                      <th className="pb-4 text-right">Total</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-50">
                    <tr>
                      <td className="py-4 text-sm font-bold text-slate-900">CRM Pro License (Annual)</td>
                      <td className="py-4 text-sm font-medium text-slate-600">1</td>
                      <td className="py-4 text-sm font-medium text-slate-600">৳ 150,000</td>
                      <td className="py-4 text-sm font-black text-slate-900 text-right">৳ 150,000</td>
                    </tr>
                    <tr>
                      <td className="py-4 text-sm font-bold text-slate-900">POS Module Integration</td>
                      <td className="py-4 text-sm font-medium text-slate-600">1</td>
                      <td className="py-4 text-sm font-medium text-slate-600">৳ 100,000</td>
                      <td className="py-4 text-sm font-black text-slate-900 text-right">৳ 100,000</td>
                    </tr>
                  </tbody>
                  <tfoot>
                    <tr>
                      <td colSpan="3" className="pt-6 text-right text-[11px] font-black text-slate-400 uppercase tracking-wider">Total Value</td>
                      <td className="pt-6 text-right text-xl font-black text-orange-500">৳ 250,000</td>
                    </tr>
                  </tfoot>
                </table>
              </div>
            </div>
            
            {/* Mock Notes Section */}
            <div className="bg-white border border-slate-100 rounded-3xl shadow-[0_4px_20px_rgba(0,0,0,0.03)] p-8">
              <h3 className="text-sm font-black text-slate-900 mb-6 flex items-center gap-2"><FileText className="w-4 h-4 text-orange-500"/> Recent Notes</h3>
              <div className="bg-orange-50/50 border border-orange-100/50 rounded-2xl p-6">
                <div className="flex justify-between items-start mb-3">
                  <span className="text-xs font-black text-slate-700 flex items-center gap-2"><User className="w-4 h-4 text-orange-400"/> Arif Hasan</span>
                  <span className="text-[10px] font-black text-slate-400 uppercase tracking-wider">Oct 12, 2026</span>
                </div>
                <p className="text-sm font-medium text-slate-700 leading-relaxed">Sent initial proposal. Client requested a 10% discount on the POS module. Following up on Thursday.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}