'use client';
import { useState } from 'react';
import { Search, Filter, Plus, FileText, Pin, User, Building, Clock, ChevronDown } from 'lucide-react';

export default function NotesPage() {
  const [searchTerm, setSearchTerm] = useState('');

  const notes = [
    { id: 1, title: 'Pricing negotiation preferences', preview: 'Client requested to have all pricing discussions explicitly itemized. They prefer annual billing to avoid monthly processing overhead.', contact: 'Karim Hasan', company: 'ABC Electronics', author: 'Arif Hasan', date: 'Oct 24, 2026', isPinned: true, tags: ['Important', 'Pricing'] },
    { id: 2, title: 'Technical Requirements Sync', preview: 'The IT director joined the call. They need the POS module to sync with their legacy Oracle database. Will need custom API work.', contact: 'Sara Rahman', company: 'Global Retail', author: 'Nabila Islam', date: 'Oct 22, 2026', isPinned: false, tags: ['Technical', 'Integration'] },
    { id: 3, title: 'Initial Discovery Notes', preview: 'Company is growing fast, planning to open 3 new branches next year. Looking for a scalable CRM solution.', contact: 'Rahim Ahmed', company: 'TechNova Ltd', author: 'Arif Hasan', date: 'Oct 15, 2026', isPinned: true, tags: ['Discovery'] },
    { id: 4, title: 'Follow-up on Proposal', preview: 'Sent the revised enterprise proposal. They will review it in their board meeting next Tuesday.', contact: 'Tanvir Chowdhury', company: 'Nexa Solutions', author: 'Sara Rahman', date: 'Oct 10, 2026', isPinned: false, tags: ['Proposal'] },
  ];

  return (
    <div className="bg-white min-h-screen w-full">
      <div className="px-6 py-12 sm:px-8 sm:py-16 lg:py-20 max-w-7xl mx-auto space-y-6 sm:space-y-8 animate-in fade-in duration-500">
        
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">Customer Notes</h1>
            <p className="text-sm font-medium text-slate-500 mt-1">Keep important customer information and relationship notes organized.</p>
          </div>
          <button className="flex items-center gap-2 bg-gradient-to-r from-orange-600 to-amber-500 hover:from-orange-500 hover:to-amber-400 text-white px-5 py-2.5 rounded-xl text-sm font-bold transition-all shadow-[0_4px_14px_rgba(234,88,12,0.25)] active:scale-[0.98]">
            <Plus className="w-4 h-4"/> Create Note
          </button>
        </div>

        {/* Toolbar */}
        <div className="flex flex-col sm:flex-row gap-4 justify-between bg-white p-4 rounded-2xl border border-slate-100 shadow-[0_4px_20px_rgba(0,0,0,0.03)]">
          <div className="relative w-full sm:max-w-md group">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 group-focus-within:text-orange-500 transition-colors"/>
            <input 
              type="text" 
              placeholder="Search notes..." 
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

        {/* Notes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {notes.map((note) => (
            <div key={note.id} className={`bg-white rounded-3xl p-6 transition-all duration-300 border hover:shadow-[0_8px_30px_rgba(234,88,12,0.08)] cursor-pointer group ${
              note.isPinned ? 'border-orange-200 shadow-[0_4px_20px_rgba(234,88,12,0.05)] bg-orange-50/10' : 'border-slate-100 shadow-[0_4px_20px_rgba(0,0,0,0.03)]'
            }`}>
              <div className="flex justify-between items-start mb-4">
                <div className="flex items-center gap-2">
                  <FileText className={`w-5 h-5 ${note.isPinned ? 'text-orange-500' : 'text-slate-400'}`}/>
                  {note.isPinned && <Pin className="w-3 h-3 text-orange-500 fill-orange-500"/>}
                </div>
                <span className="text-[10px] font-black text-slate-400 uppercase tracking-wider flex items-center gap-1"><Clock className="w-3 h-3"/> {note.date}</span>
              </div>
              
              <h3 className="text-lg font-black text-slate-900 mb-2 leading-tight group-hover:text-orange-600 transition-colors">{note.title}</h3>
              <p className="text-sm font-medium text-slate-600 leading-relaxed mb-6 line-clamp-3">{note.preview}</p>
              
              <div className="space-y-3 pt-4 border-t border-slate-50">
                <div className="flex items-center gap-2 text-xs font-bold text-slate-700">
                  <Building className="w-3.5 h-3.5 text-orange-400"/> {note.company}
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs font-medium text-slate-500">
                    <User className="w-3.5 h-3.5 text-slate-400"/> {note.contact}
                  </div>
                  <div className="flex gap-1.5">
                    {note.tags.map(tag => (
                      <span key={tag} className="bg-slate-50 border border-slate-100 text-slate-500 text-[9px] font-black px-2 py-0.5 rounded-full uppercase tracking-wider">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}