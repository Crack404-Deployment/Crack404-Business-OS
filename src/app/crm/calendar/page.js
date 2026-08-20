'use client';
import { Plus, ChevronLeft, ChevronRight, Calendar as CalendarIcon, Clock, Filter } from 'lucide-react';

export default function CalendarView() {
  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  // Mock grid generator for UI purposes
  const dates = Array.from({ length: 35 }, (_, i) => i - 2); 

  return (
    <div className="bg-white min-h-screen w-full">
      <div className="px-6 py-12 sm:px-8 sm:py-16 lg:py-20 max-w-[1600px] mx-auto space-y-6 sm:space-y-8 animate-in fade-in duration-500">
        
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">Calendar</h1>
            <p className="text-sm font-medium text-slate-500 mt-1">Unified view of all your CRM meetings, calls, and tasks.</p>
          </div>
          <div className="flex items-center gap-3">
            <button className="flex items-center gap-2 bg-white border border-slate-200 hover:bg-slate-50 px-4 py-2.5 rounded-xl text-sm font-bold text-slate-700 transition-colors shadow-sm">
              <Filter className="w-4 h-4"/> Filter
            </button>
            <button className="flex items-center gap-2 bg-gradient-to-r from-orange-600 to-amber-500 hover:from-orange-500 hover:to-amber-400 text-white px-5 py-2.5 rounded-xl text-sm font-bold transition-all shadow-[0_4px_14px_rgba(234,88,12,0.25)] active:scale-[0.98]">
              <Plus className="w-4 h-4"/> Create Activity
            </button>
          </div>
        </div>

        {/* Calendar Controls */}
        <div className="bg-white border border-slate-100 rounded-3xl shadow-[0_4px_20px_rgba(0,0,0,0.03)] p-6">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6 mb-8 border-b border-slate-50 pb-6">
            <div className="flex items-center gap-4">
              <div className="flex items-center bg-slate-50 border border-slate-100 rounded-xl overflow-hidden">
                <button className="p-2.5 text-slate-400 hover:text-orange-600 hover:bg-orange-50 transition-colors"><ChevronLeft className="w-5 h-5"/></button>
                <button className="px-4 py-2.5 text-sm font-bold text-slate-700 border-x border-slate-100 hover:bg-slate-100">Today</button>
                <button className="p-2.5 text-slate-400 hover:text-orange-600 hover:bg-orange-50 transition-colors"><ChevronRight className="w-5 h-5"/></button>
              </div>
              <h2 className="text-xl font-black text-slate-900 flex items-center gap-2"><CalendarIcon className="w-5 h-5 text-orange-500"/> October 2026</h2>
            </div>
            
            <div className="flex items-center bg-slate-50 p-1 rounded-xl border border-slate-100">
              <button className="px-6 py-2 rounded-lg text-sm font-black bg-white text-orange-600 shadow-sm">Month</button>
              <button className="px-6 py-2 rounded-lg text-sm font-bold text-slate-500 hover:text-slate-900 transition-colors">Week</button>
              <button className="px-6 py-2 rounded-lg text-sm font-bold text-slate-500 hover:text-slate-900 transition-colors">Day</button>
            </div>
          </div>

          {/* Calendar Grid (Frontend Mock) */}
          <div className="grid grid-cols-7 gap-px bg-slate-100 rounded-2xl overflow-hidden border border-slate-100">
            {/* Days Header */}
            {days.map(day => (
              <div key={day} className="bg-slate-50 py-3 text-center text-[11px] font-black text-slate-400 uppercase tracking-wider">
                {day}
              </div>
            ))}
            
            {/* Dates Grid */}
            {dates.map((date, i) => (
              <div key={i} className={`min-h-[120px] bg-white p-2 sm:p-3 transition-colors hover:bg-orange-50/30 cursor-pointer ${date <= 0 || date > 31 ? 'opacity-40 bg-slate-50/50' : ''}`}>
                <p className={`text-sm font-bold mb-2 ${date === 15 ? 'w-7 h-7 bg-orange-500 text-white rounded-full flex items-center justify-center' : 'text-slate-600 px-1'}`}>
                  {date > 0 && date <= 31 ? date : (date <= 0 ? 30 + date : date - 31)}
                </p>
                
                {/* Mock Events */}
                <div className="space-y-1.5">
                  {date === 12 && (
                    <div className="px-2 py-1.5 bg-blue-50 border-l-2 border-blue-500 rounded text-xs font-bold text-blue-700 truncate shadow-sm">
                      <Clock className="w-3 h-3 inline mr-1"/> 10:00 AM - Demo
                    </div>
                  )}
                  {date === 15 && (
                    <>
                      <div className="px-2 py-1.5 bg-orange-50 border-l-2 border-orange-500 rounded text-xs font-bold text-orange-700 truncate shadow-sm">
                        <Clock className="w-3 h-3 inline mr-1"/> 11:30 AM - Call
                      </div>
                      <div className="px-2 py-1.5 bg-emerald-50 border-l-2 border-emerald-500 rounded text-xs font-bold text-emerald-700 truncate shadow-sm">
                        Task: Send Proposal
                      </div>
                    </>
                  )}
                  {date === 24 && (
                    <div className="px-2 py-1.5 bg-amber-50 border-l-2 border-amber-500 rounded text-xs font-bold text-amber-700 truncate shadow-sm">
                      <Clock className="w-3 h-3 inline mr-1"/> 02:00 PM - Negotiation
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}   