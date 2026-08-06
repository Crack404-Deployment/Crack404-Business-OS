'use client';
import { useState } from 'react';
import { Building2, MapPin, Phone, Plus, Store, Users } from 'lucide-react';

export default function Branches() {
  const [branches] = useState([
    { id: "BR-01", name: "Sylhet Flagship (HQ)", address: "Zindabazar, Sylhet 3100", phone: "+880 1700-000001", manager: "Sourav Das Gupta", terminals: 6, staffCount: 45, status: "Active" },
    { id: "BR-02", name: "Dhaka North Center", address: "Gulshan-2, Dhaka 1212", phone: "+880 1700-000002", manager: "Sarah Jenkins", terminals: 4, staffCount: 32, status: "Active" },
    { id: "BR-03", name: "Chittagong Port Hub", address: "Agrabad C/A, Chittagong 4100", phone: "+880 1700-000003", manager: "Mike Ross", terminals: 2, staffCount: 18, status: "Active" },
  ]);

  return (
    <div className="min-h-screen bg-slate-50 font-sans p-4 sm:p-6 lg:p-8 text-slate-900">
      <div className="max-w-[1500px] mx-auto space-y-6">
        
        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
          <div>
            <h1 className="text-2xl sm:text-3xl font-black tracking-tight">Branch Locations</h1>
            <p className="text-sm font-medium text-slate-500 mt-1">Configure physical store branches and corporate headquarters.</p>
          </div>
          <button className="bg-orange-600 hover:bg-orange-700 text-white px-5 py-2.5 rounded-xl font-bold shadow-sm transition-all flex items-center gap-2">
            <Plus className="w-4 h-4" /> Add New Branch
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {branches.map(br => (
            <div key={br.id} className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:border-orange-300 transition-all flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-start mb-4">
                  <div className="p-3 bg-orange-50 text-orange-600 rounded-xl">
                    <Store className="w-6 h-6" />
                  </div>
                  <span className="text-[10px] font-bold px-2.5 py-1 bg-emerald-50 text-emerald-700 border border-emerald-200 rounded-md">
                    {br.status}
                  </span>
                </div>
                <h3 className="text-lg font-black text-slate-900">{br.name}</h3>
                <p className="text-xs text-slate-500 flex items-center gap-1.5 mt-2"><MapPin className="w-3.5 h-3.5 text-slate-400" /> {br.address}</p>
                <p className="text-xs text-slate-500 flex items-center gap-1.5 mt-1"><Phone className="w-3.5 h-3.5 text-slate-400" /> {br.phone}</p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 space-y-2 text-xs">
                <div className="flex justify-between"><span className="text-slate-500 font-medium">Manager:</span><span className="font-bold text-slate-900">{br.manager}</span></div>
                <div className="flex justify-between"><span className="text-slate-500 font-medium">POS Terminals:</span><span className="font-bold text-orange-600">{br.terminals} Units</span></div>
                <div className="flex justify-between"><span className="text-slate-500 font-medium">Assigned Staff:</span><span className="font-bold text-slate-900">{br.staffCount} Staff</span></div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}