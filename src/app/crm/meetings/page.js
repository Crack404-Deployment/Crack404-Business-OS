'use client';
import { useState } from 'react';
import Link from 'next/link';
import { Search, Filter, Plus, MoreVertical, Video, Clock, Calendar as CalendarIcon, User, Building, ChevronDown } from 'lucide-react';

export default function MeetingsList() {
  const [searchTerm, setSearchTerm] = useState('');

  const meetings = [
    { id: 1, title: 'Product Demo & Discovery', contact: 'Karim Hasan', company: 'ABC Electronics', date: 'Oct 26, 2026', time: '10:00 AM', duration: '45m', type: 'Product Demo', owner: 'Arif Hasan', status: 'Scheduled' },
    { id: 2, title: 'Pricing Negotiation', contact: 'Sara Rahman', company: 'Global Retail', date: 'Oct 24, 2026', time: '02:30 PM', duration: '30m', type: 'Contract Discussion', owner: 'Nabila Islam', status: 'Completed' },
    { id: 3, title: 'Initial Sync', contact: 'Tanvir Chowdhury', company: 'Nexa Solutions', date: 'Oct 28, 2026', time: '11:00 AM', duration: '30m', type: 'Discovery Call', owner: 'Arif Hasan', status: 'Scheduled' },
    { id: 4, title: 'Q4 Follow-up', contact: 'Rahim Ahmed', company: 'TechNova Ltd', date: 'Oct 20, 2026', time: '04:00 PM', duration: '15m', type: 'Follow-up', owner: 'Sara Rahman', status: 'Cancelled' },
  ];

  return (
    <div className="bg-white min-h-screen w-full">
      <div className="px-6 py-12 sm:px-8 sm:py-16 lg:py-20 max-w-7xl mx-auto space-y-6 sm:space-y-8 animate-in fade-in duration-500">
        
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">Meetings</h1>
            <p className="text-sm font-medium text-slate-500 mt-1">Schedule and manage customer meetings and sales activities.</p>
          </div>
          <button className="flex items-center gap-2 bg-gradient-to-r from-orange-600 to-amber-500 hover:from-orange-500 hover:to-amber-400 text-white px-5 py-2.5 rounded-xl text-sm font-bold transition-all shadow-[0_4px_14px_rgba(234,88,12,0.25)] active:scale-[0.98]">
            <Plus className="w-4 h-4"/> Schedule Meeting
          </button>
        </div>

        {/* Toolbar */}
        <div className="flex flex-col sm:flex-row gap-4 justify-between bg-white p-4 rounded-2xl border border-slate-100 shadow-[0_4px_20px_rgba(0,0,0,0.03)]">
          <div className="relative w-full sm:max-w-md group">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 group-focus-within:text-orange-500 transition-colors"/>
            <input 
              type="text" 
              placeholder="Search meetings..." 
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
                  <th className="px-6 py-5">Meeting Details</th>
                  <th className="px-6 py-5">Participant</th>
                  <th className="px-6 py-5">Date & Time</th>
                  <th className="px-6 py-5">Status</th>
                  <th className="px-6 py-5">Owner</th>
                  <th className="px-6 py-5 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-50">
                {meetings.map((mtg) => (
                  <tr key={mtg.id} className="hover:bg-orange-50/30 transition-colors group cursor-pointer">
                    <td className="px-6 py-4">
                      <p className="text-sm font-bold text-slate-900 group-hover:text-orange-600 transition-colors flex items-center gap-2"><Video className="w-4 h-4 text-orange-400"/> {mtg.title}</p>
                      <p className="text-xs font-medium text-slate-500 mt-1">{mtg.type}</p>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex flex-col gap-1.5">
                        <div className="flex items-center gap-2 text-sm font-bold text-slate-800"><User className="w-3 h-3 text-orange-400"/> {mtg.contact}</div>
                        <div className="flex items-center gap-2 text-xs font-medium text-slate-500"><Building className="w-3 h-3 text-orange-400"/> {mtg.company}</div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex flex-col gap-1.5">
                        <div className="flex items-center gap-2 text-sm font-bold text-slate-900"><CalendarIcon className="w-3.5 h-3.5 text-slate-400"/> {mtg.date}</div>
                        <div className="flex items-center gap-2 text-xs font-medium text-slate-500"><Clock className="w-3.5 h-3.5 text-slate-400"/> {mtg.time} ({mtg.duration})</div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`inline-flex items-center px-3 py-1.5 rounded-md text-[10px] font-black uppercase tracking-wider border ${
                        mtg.status === 'Completed' ? 'bg-emerald-50 text-emerald-600 border-emerald-200' :
                        mtg.status === 'Scheduled' ? 'bg-amber-50 text-amber-600 border-amber-200' : 'bg-slate-50 text-slate-500 border-slate-200'
                      }`}>
                        {mtg.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm font-medium text-slate-600">{mtg.owner}</td>
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