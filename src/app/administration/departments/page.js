'use client';
import { useState } from 'react';
import { Building, Users, DollarSign, Plus } from 'lucide-react';

export default function Departments() {
  const [departments] = useState([
    { id: "DEPT-01", name: "Engineering & IT", head: "Sourav Das Gupta", headcount: 42, budget: "$45,000 /mo" },
    { id: "DEPT-02", name: "Sales & Retail POS", head: "Sarah Jenkins", headcount: 65, budget: "$38,000 /mo" },
    { id: "DEPT-03", name: "Operations & Logistics", head: "Mike Ross", headcount: 15, budget: "$18,000 /mo" },
    { id: "DEPT-04", name: "Customer Support", head: "Tahmid", headcount: 20, budget: "$12,000 /mo" },
  ]);

  return (
    <div className="min-h-screen bg-slate-50 font-sans p-4 sm:p-6 lg:p-8 text-slate-900">
      <div className="max-w-[1500px] mx-auto space-y-6">
        
        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
          <div>
            <h1 className="text-2xl sm:text-3xl font-black tracking-tight">Company Departments</h1>
            <p className="text-sm font-medium text-slate-500 mt-1">Structure company divisions, leadership, and operational units.</p>
          </div>
          <button className="bg-orange-600 hover:bg-orange-700 text-white px-5 py-2.5 rounded-xl font-bold shadow-sm transition-all flex items-center gap-2">
            <Plus className="w-4 h-4" /> Add Department
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {departments.map(dept => (
            <div key={dept.id} className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm space-y-4">
              <div className="p-3 bg-blue-50 text-blue-600 rounded-xl w-fit">
                <Building className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base font-black text-slate-900">{dept.name}</h3>
                <p className="text-xs text-slate-400 font-bold uppercase mt-0.5">{dept.id}</p>
              </div>
              <div className="pt-3 border-t border-slate-100 space-y-2 text-xs">
                <div className="flex justify-between"><span className="text-slate-500">Head:</span><span className="font-bold text-slate-900">{dept.head}</span></div>
                <div className="flex justify-between"><span className="text-slate-500">Headcount:</span><span className="font-bold text-slate-900">{dept.headcount} Staff</span></div>
                <div className="flex justify-between"><span className="text-slate-500">Alloc. Budget:</span><span className="font-black text-emerald-600">{dept.budget}</span></div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}