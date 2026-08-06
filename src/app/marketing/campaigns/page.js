'use client';
import { useState } from 'react';
import { 
  Search, Plus, Filter, MoreHorizontal, CheckSquare, 
  Megaphone, Mail, Smartphone, Globe, ChevronLeft, ChevronRight 
} from 'lucide-react';

export default function Campaigns() {
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [selected, setSelected] = useState(new Set());

  // --- MOCK DATA ---
  const campaigns = [
    { id: "CMP-001", name: "Back to School Tech Promo", channel: "Omnichannel", budget: 5000, spent: 4200, leads: 412, status: "Active" },
    { id: "CMP-002", name: "August Newsletter", channel: "Email", budget: 500, spent: 500, leads: 120, status: "Completed" },
    { id: "CMP-003", name: "Abandoned Cart Recovery", channel: "Email", budget: 1200, spent: 850, leads: 154, status: "Automated" },
    { id: "CMP-004", name: "Sylhet Store Opening Ads", channel: "Social", budget: 3000, spent: 1200, leads: 285, status: "Active" },
    { id: "CMP-005", name: "Eid VIP Offers", channel: "SMS", budget: 800, spent: 0, leads: 0, status: "Draft" },
  ];

  const toggleSelect = (id) => {
    const newSet = new Set(selected);
    newSet.has(id) ? newSet.delete(id) : newSet.add(id);
    setSelected(newSet);
  };

  const filtered = campaigns.filter(c => 
    (statusFilter === "All" || c.status === statusFilter) &&
    c.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-slate-50 font-sans p-4 sm:p-6 lg:p-8 text-slate-900">
      <div className="max-w-[1500px] mx-auto space-y-6">
        
        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
          <div>
            <h1 className="text-2xl sm:text-3xl font-black tracking-tight">Campaign Manager</h1>
            <p className="text-sm font-medium text-slate-500 mt-1">Design, launch, and monitor your marketing campaigns.</p>
          </div>
          <button className="bg-orange-600 hover:bg-orange-700 text-white px-5 py-2.5 rounded-xl font-bold shadow-sm transition-all flex items-center gap-2">
            <Plus className="w-4 h-4" /> New Campaign
          </button>
        </div>

        <div className="bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden flex flex-col">
          
          <div className="p-4 border-b border-slate-200 flex flex-col lg:flex-row gap-4 justify-between items-center bg-slate-50/50">
            <div className="flex items-center gap-4 w-full lg:w-auto">
              {selected.size > 0 ? (
                <div className="flex items-center gap-3 bg-orange-50 border border-orange-200 px-4 py-2 rounded-lg text-sm text-orange-700 font-bold">
                  <span>{selected.size} Selected</span>
                  <div className="w-px h-4 bg-orange-300"></div>
                  <button className="hover:text-orange-900">Pause</button>
                  <button className="hover:text-red-600">Delete</button>
                </div>
              ) : (
                <div className="flex items-center gap-2 w-full sm:w-auto overflow-x-auto hide-scrollbar">
                  {["All", "Active", "Automated", "Completed", "Draft"].map(status => (
                    <button 
                      key={status} onClick={() => setStatusFilter(status)}
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
                  type="text" placeholder="Search campaigns..." 
                  className="w-full pl-9 pr-4 py-2 bg-white border border-slate-300 rounded-lg text-sm focus:outline-none focus:border-orange-500 transition-all"
                  value={search} onChange={(e) => setSearch(e.target.value)}
                />
              </div>
              <button className="bg-white border border-slate-300 p-2 rounded-lg text-slate-500 hover:text-slate-900"><Filter className="w-5 h-5" /></button>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm text-slate-600 min-w-[1000px]">
              <thead className="bg-slate-50 text-slate-500 font-bold uppercase text-[10px] tracking-wider border-b border-slate-200">
                <tr>
                  <th className="px-6 py-4 w-12">
                    <button onClick={() => setSelected(selected.size === filtered.length ? new Set() : new Set(filtered.map(i => i.id)))}>
                      <CheckSquare className={`w-5 h-5 ${selected.size > 0 ? 'text-orange-500' : 'text-slate-300'}`} />
                    </button>
                  </th>
                  <th className="px-4 py-4">Campaign Name & Channel</th>
                  <th className="px-4 py-4">Budget Utilization</th>
                  <th className="px-4 py-4 text-center">Leads Generated</th>
                  <th className="px-4 py-4 text-center">Status</th>
                  <th className="px-6 py-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {filtered.map((camp) => (
                  <tr key={camp.id} className="hover:bg-slate-50 transition-colors group">
                    <td className="px-6 py-4">
                      <button onClick={() => toggleSelect(camp.id)}><CheckSquare className={`w-5 h-5 transition-colors ${selected.has(camp.id) ? 'text-orange-500' : 'text-slate-300 group-hover:text-slate-400'}`} /></button>
                    </td>
                    <td className="px-4 py-4">
                      <p className="font-bold text-slate-900">{camp.name}</p>
                      <p className="text-[11px] font-bold text-slate-500 flex items-center gap-1 mt-0.5">
                        {camp.channel === 'Email' ? <Mail className="w-3 h-3"/> : camp.channel === 'SMS' ? <Smartphone className="w-3 h-3"/> : <Globe className="w-3 h-3"/>}
                        {camp.channel}
                      </p>
                    </td>
                    <td className="px-4 py-4 w-64">
                      <div className="flex justify-between text-xs font-bold text-slate-700 mb-1">
                        <span>${camp.spent}</span><span>${camp.budget}</span>
                      </div>
                      <div className="w-full bg-slate-100 rounded-full h-2 overflow-hidden">
                        <div className={`h-full rounded-full ${camp.spent === camp.budget ? 'bg-emerald-500' : 'bg-orange-500'}`} style={{ width: `${(camp.spent / camp.budget) * 100}%` }}></div>
                      </div>
                    </td>
                    <td className="px-4 py-4 text-center">
                      <span className="font-black text-slate-900 bg-slate-100 px-3 py-1 rounded-lg">{camp.leads}</span>
                    </td>
                    <td className="px-4 py-4 text-center">
                      <span className={`text-[10px] font-bold px-3 py-1 rounded-md border whitespace-nowrap ${
                        camp.status === 'Active' ? 'bg-emerald-50 text-emerald-700 border-emerald-200' :
                        camp.status === 'Automated' ? 'bg-blue-50 text-blue-700 border-blue-200' :
                        'bg-slate-100 text-slate-600 border-slate-200'
                      }`}>{camp.status}</span>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <button className="p-2 bg-white border border-slate-200 hover:border-slate-300 text-slate-500 rounded-lg shadow-sm"><MoreHorizontal className="w-4 h-4" /></button>
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