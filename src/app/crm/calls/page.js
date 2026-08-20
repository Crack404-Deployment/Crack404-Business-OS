'use client';
import { useState } from 'react';
// Changed PhoneOutbound to PhoneOutgoing
import { Search, Filter, Plus, MoreVertical, Phone, PhoneIncoming, PhoneOutgoing, Clock, Building, User, ChevronDown } from 'lucide-react';

export default function CallsList() {
  const [searchTerm, setSearchTerm] = useState('');

  const calls = [
    { id: 1, contact: 'Karim Hasan', company: 'ABC Electronics', type: 'Sales', direction: 'Outbound', duration: '12m 45s', date: 'Today, 10:30 AM', outcome: 'Interested', owner: 'Arif Hasan' },
    { id: 2, contact: 'Sara Rahman', company: 'Global Retail', type: 'Follow-up', direction: 'Inbound', duration: '05m 20s', date: 'Yesterday, 03:15 PM', outcome: 'Follow-up Required', owner: 'Nabila Islam' },
    { id: 3, contact: 'Tanvir Chowdhury', company: 'Nexa Solutions', type: 'Discovery', direction: 'Outbound', duration: '01m 10s', date: 'Oct 24, 2026', outcome: 'No Answer', owner: 'Arif Hasan' },
    { id: 4, contact: 'Rahim Ahmed', company: 'TechNova Ltd', type: 'Support', direction: 'Inbound', duration: '18m 05s', date: 'Oct 23, 2026', outcome: 'Completed', owner: 'Sara Rahman' },
  ];

  return (
    <div className="bg-white min-h-screen w-full">
      <div className="px-6 py-12 sm:px-8 sm:py-16 lg:py-20 max-w-7xl mx-auto space-y-6 sm:space-y-8 animate-in fade-in duration-500">
        
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">Calls</h1>
            <p className="text-sm font-medium text-slate-500 mt-1">Track customer calls and follow-up activity.</p>
          </div>
          <button className="flex items-center gap-2 bg-gradient-to-r from-orange-600 to-amber-500 hover:from-orange-500 hover:to-amber-400 text-white px-5 py-2.5 rounded-xl text-sm font-bold transition-all shadow-[0_4px_14px_rgba(234,88,12,0.25)] active:scale-[0.98]">
            <Plus className="w-4 h-4"/> Log a Call
          </button>
        </div>

        {/* Toolbar */}
        <div className="flex flex-col sm:flex-row gap-4 justify-between bg-white p-4 rounded-2xl border border-slate-100 shadow-[0_4px_20px_rgba(0,0,0,0.03)]">
          <div className="relative w-full sm:max-w-md group">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 group-focus-within:text-orange-500 transition-colors"/>
            <input 
              type="text" 
              placeholder="Search call logs..." 
              className="w-full pl-11 pr-4 py-2.5 bg-slate-50 border border-slate-100 rounded-xl text-sm font-medium focus:bg-white focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all placeholder:text-slate-400"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="flex items-center gap-2">
            <button className="flex items-center gap-2 px-5 py-2.5 bg-white border border-slate-200 hover:border-orange-300 hover:bg-orange-50 hover:text-orange-600 rounded-xl text-sm font-bold text-slate-600 transition-colors shadow-sm">
              <Filter className="w-4 h-4"/> Filter <ChevronDown className="w-3 h-3 ml-1"/>
            </button>
          </div>
        </div>

        {/* Table */}
        <div className="bg-white border border-slate-100 rounded-3xl shadow-[0_4px_20px_rgba(0,0,0,0.03)] overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left whitespace-nowrap">
              <thead className="bg-white border-b border-slate-50 text-[10px] font-black text-slate-400 uppercase tracking-wider">
                <tr>
                  <th className="px-6 py-5">Contact & Company</th>
                  <th className="px-6 py-5">Call Details</th>
                  <th className="px-6 py-5">Outcome</th>
                  <th className="px-6 py-5">Owner</th>
                  <th className="px-6 py-5 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-50">
                {calls.map((call) => (
                  <tr key={call.id} className="hover:bg-orange-50/30 transition-colors group cursor-pointer">
                    <td className="px-6 py-4">
                      <div className="flex flex-col gap-1.5">
                        <div className="flex items-center gap-2 text-sm font-bold text-slate-900 group-hover:text-orange-600 transition-colors"><User className="w-3.5 h-3.5 text-orange-400"/> {call.contact}</div>
                        <div className="flex items-center gap-2 text-xs font-medium text-slate-500"><Building className="w-3.5 h-3.5 text-orange-400"/> {call.company}</div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex flex-col gap-1.5">
                        <div className="flex items-center gap-2 text-sm font-bold text-slate-800">
                          {/* Changed to PhoneOutgoing here */}
                          {call.direction === 'Outbound' ? <PhoneOutgoing className="w-3.5 h-3.5 text-blue-500"/> : <PhoneIncoming className="w-3.5 h-3.5 text-emerald-500"/>}
                          {call.direction} ({call.type})
                        </div>
                        <div className="flex items-center gap-2 text-xs font-medium text-slate-500"><Clock className="w-3.5 h-3.5 text-slate-400"/> {call.date} • {call.duration}</div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`inline-flex items-center px-3 py-1.5 rounded-md text-[10px] font-black uppercase tracking-wider border ${
                        call.outcome === 'Interested' || call.outcome === 'Completed' ? 'bg-emerald-50 text-emerald-600 border-emerald-200' :
                        call.outcome === 'No Answer' ? 'bg-red-50 text-red-600 border-red-200' : 'bg-amber-50 text-amber-600 border-amber-200'
                      }`}>
                        {call.outcome}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm font-medium text-slate-600">{call.owner}</td>
                    <td className="px-6 py-4 text-right">
                      <button className="text-slate-400 hover:text-orange-600 transition-colors p-2 rounded-xl hover:bg-orange-50">
                        <MoreVertical className="w-4 h-4"/>
                      </button>
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