'use client';
import { Building, Calendar } from 'lucide-react';

export default function PipelineBoard() {
  const stages = [
    { name: 'New', count: 3, value: '৳ 420,000', color: 'border-blue-500', bg: 'bg-blue-50', items: [
      { id: 10, company: 'Nexa Solutions', title: 'Business OS', value: '৳ 420,000', prob: '30%', date: 'Nov 01' }
    ]},
    { name: 'Qualified', count: 2, value: '৳ 350,000', color: 'border-indigo-500', bg: 'bg-indigo-50', items: [
      { id: 11, company: 'Bright Systems', title: 'HRM Platform', value: '৳ 350,000', prob: '50%', date: 'Oct 20' }
    ]},
    { name: 'Proposal', count: 4, value: '৳ 1,250,000', color: 'border-amber-500', bg: 'bg-amber-50', items: [
      { id: 1, company: 'ABC Electronics', title: 'CRM + POS Package', value: '৳ 250,000', prob: '70%', date: 'Sep 30' },
      { id: 12, company: 'Global Retail', title: 'Enterprise Plan', value: '৳ 1,000,000', prob: '60%', date: 'Oct 10' }
    ]},
    { name: 'Negotiation', count: 1, value: '৳ 850,000', color: 'border-orange-500', bg: 'bg-orange-50', items: [
      { id: 2, company: 'TechNova Ltd', title: 'Enterprise CRM', value: '৳ 850,000', prob: '90%', date: 'Oct 15' }
    ]},
    { name: 'Won', count: 5, value: '৳ 2,100,000', color: 'border-emerald-500', bg: 'bg-emerald-50', items: [] },
  ];

  return (
    <div className="bg-white min-h-screen w-full">
      <div className="px-6 py-12 sm:px-8 sm:py-16 lg:py-20 max-w-[1600px] mx-auto space-y-8 animate-in fade-in duration-500">
        
        <div>
          <h1 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">Sales Pipeline</h1>
          <p className="text-sm font-medium text-slate-500 mt-1">Visualize and move opportunities across your sales stages.</p>
        </div>

        {/* Kanban Board */}
        <div className="flex gap-6 overflow-x-auto pb-8 snap-x">
          {stages.map((stage) => (
            <div key={stage.name} className="min-w-[320px] w-[320px] flex-shrink-0 snap-center flex flex-col h-[70vh] bg-slate-50/50 border border-slate-100 rounded-3xl p-4">
              {/* Column Header */}
              <div className={`border-t-4 ${stage.color} ${stage.bg} rounded-2xl p-4 mb-4 shadow-sm`}>
                <h3 className="text-sm font-black text-slate-900 uppercase tracking-wider">{stage.name} ({stage.count})</h3>
                <p className="text-lg font-black text-slate-700 mt-1">{stage.value}</p>
              </div>

              {/* Cards Container */}
              <div className="flex-1 overflow-y-auto space-y-4 pr-1">
                {stage.items.map((item) => (
                  <div key={item.id} className="bg-white border border-slate-200 rounded-2xl p-5 shadow-[0_2px_10px_rgba(0,0,0,0.02)] hover:border-orange-300 hover:shadow-[0_4px_20px_rgba(234,88,12,0.1)] transition-all cursor-grab active:cursor-grabbing">
                    <p className="text-[11px] font-black text-orange-500 flex items-center gap-1.5 uppercase tracking-wider mb-2"><Building className="w-3 h-3"/> {item.company}</p>
                    <h4 className="text-sm font-bold text-slate-900 mb-4">{item.title}</h4>
                    <div className="flex items-center justify-between border-t border-slate-50 pt-3">
                      <span className="text-sm font-black text-slate-800">{item.value}</span>
                      <span className="text-xs font-bold text-slate-500 bg-slate-100 px-2 py-1 rounded-md">{item.prob}</span>
                    </div>
                    <p className="text-[10px] font-bold text-slate-400 mt-3 flex items-center gap-1"><Calendar className="w-3 h-3"/> {item.date}</p>
                  </div>
                ))}
                {stage.items.length === 0 && (
                  <div className="h-24 border-2 border-dashed border-slate-200 rounded-2xl flex items-center justify-center text-xs font-bold text-slate-400">
                    Drop opportunities here
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}