'use client';
import { useState } from 'react';
import { MessageSquare, Send, Calendar as CalendarIcon, CheckCircle2, AlertCircle, RefreshCw } from 'lucide-react';

export default function SmsDashboard() {
  const [message, setMessage] = useState('');
  
  const kpis = [
    { label: 'Messages Sent', value: '8,420', icon: Send, color: 'text-blue-500' },
    { label: 'Delivered', value: '8,215', icon: CheckCircle2, color: 'text-emerald-500' },
    { label: 'Failed', value: '45', icon: AlertCircle, color: 'text-red-500' },
    { label: 'Replies', value: '1,102', icon: MessageSquare, color: 'text-amber-500' },
  ];

  const recentSms = [
    { id: 1, contact: 'Rahim Ahmed', company: 'TechNova Ltd', preview: 'Hi Rahim, your Crack404 CRM portal is ready. Login at...', date: 'Today, 09:15 AM', status: 'Delivered' },
    { id: 2, contact: 'Sara Rahman', company: 'Global Retail', preview: 'Reminder: Scheduled demo at 2:00 PM today.', date: 'Yesterday', status: 'Replied' },
    { id: 3, contact: 'Tanvir Chowdhury', company: 'Nexa Solutions', preview: 'Thank you for your business. Invoice #QT-089 attached.', date: 'Oct 22', status: 'Delivered' },
  ];

  return (
    <div className="bg-white min-h-screen w-full">
      <div className="px-6 py-12 sm:px-8 sm:py-16 lg:py-20 max-w-7xl mx-auto space-y-8 animate-in fade-in duration-500">
        
        <div>
          <h1 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">SMS Campaigns</h1>
          <p className="text-sm font-medium text-slate-500 mt-1">Manage outbound text messages and automations.</p>
        </div>

        {/* KPIs */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {kpis.map((kpi, i) => {
            const Icon = kpi.icon;
            return (
              <div key={i} className="bg-white border border-slate-100 p-6 rounded-3xl shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:-translate-y-1 transition-transform">
                <div className="flex justify-between items-start mb-4">
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-wider">{kpi.label}</p>
                  <Icon className={`w-4 h-4 ${kpi.color}`}/>
                </div>
                <h3 className="text-3xl font-black text-slate-900">{kpi.value}</h3>
              </div>
            );
          })}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left: Composer */}
          <div className="bg-white border border-slate-100 rounded-3xl shadow-[0_4px_20px_rgba(0,0,0,0.03)] p-8">
            <h3 className="text-sm font-black text-slate-900 mb-6 pb-4 border-b border-slate-50">New Message</h3>
            <div className="space-y-5">
              <div>
                <label className="block text-[10px] font-black text-slate-400 uppercase tracking-wider mb-2">Recipient / List</label>
                <select className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm font-medium focus:outline-none focus:border-orange-500 transition-colors appearance-none">
                  <option>Select Contact or Tag...</option>
                  <option>Rahim Ahmed (TechNova)</option>
                  <option>VIP Customers List</option>
                </select>
              </div>
              <div>
                <label className="block text-[10px] font-black text-slate-400 uppercase tracking-wider mb-2">Message</label>
                <textarea 
                  rows="4" 
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm font-medium focus:outline-none focus:border-orange-500 transition-colors resize-none"
                  placeholder="Type your SMS here..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
                <div className="flex justify-between items-center mt-2">
                  <span className={`text-[10px] font-black uppercase tracking-wider ${message.length > 160 ? 'text-red-500' : 'text-slate-400'}`}>
                    {message.length} / 160 chars
                  </span>
                  <span className="text-[10px] font-black text-slate-400 uppercase tracking-wider">
                    {Math.ceil((message.length || 1) / 160)} Segment(s)
                  </span>
                </div>
              </div>
              <div className="pt-4 flex gap-3">
                <button className="flex-1 bg-white border border-slate-200 text-slate-700 py-3 rounded-xl text-sm font-bold hover:bg-slate-50 transition-colors shadow-sm flex items-center justify-center gap-2">
                  <CalendarIcon className="w-4 h-4"/> Schedule
                </button>
                <button className="flex-1 bg-gradient-to-r from-orange-600 to-amber-500 text-white py-3 rounded-xl text-sm font-bold hover:from-orange-500 hover:to-amber-400 transition-all shadow-[0_4px_14px_rgba(234,88,12,0.25)] flex items-center justify-center gap-2">
                  <Send className="w-4 h-4"/> Send
                </button>
              </div>
            </div>
          </div>

          {/* Right: History */}
          <div className="lg:col-span-2 bg-white border border-slate-100 rounded-3xl shadow-[0_4px_20px_rgba(0,0,0,0.03)] overflow-hidden flex flex-col">
            <div className="p-6 border-b border-slate-50 flex justify-between items-center bg-slate-50/50">
              <h3 className="text-sm font-black text-slate-900">Recent Dispatches</h3>
              <button className="text-orange-500 hover:text-orange-600 text-xs font-bold flex items-center gap-1"><RefreshCw className="w-3 h-3"/> Refresh</button>
            </div>
            <div className="flex-1 overflow-x-auto">
              <table className="w-full text-left whitespace-nowrap">
                <thead className="bg-white border-b border-slate-50 text-[10px] font-black text-slate-400 uppercase tracking-wider">
                  <tr>
                    <th className="px-6 py-5">Recipient</th>
                    <th className="px-6 py-5">Message Preview</th>
                    <th className="px-6 py-5">Date</th>
                    <th className="px-6 py-5">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-50">
                  {recentSms.map((sms) => (
                    <tr key={sms.id} className="hover:bg-orange-50/30 transition-colors group">
                      <td className="px-6 py-4">
                        <p className="text-sm font-bold text-slate-900">{sms.contact}</p>
                        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mt-1">{sms.company}</p>
                      </td>
                      <td className="px-6 py-4">
                        <p className="text-sm font-medium text-slate-600 truncate max-w-[200px] sm:max-w-xs">{sms.preview}</p>
                      </td>
                      <td className="px-6 py-4 text-sm font-bold text-slate-700">{sms.date}</td>
                      <td className="px-6 py-4">
                        <span className={`inline-flex items-center px-2.5 py-1 rounded-md text-[10px] font-black uppercase tracking-wider border ${
                          sms.status === 'Delivered' ? 'bg-emerald-50 text-emerald-600 border-emerald-200' :
                          sms.status === 'Replied' ? 'bg-indigo-50 text-indigo-600 border-indigo-200' : 'bg-slate-50 text-slate-500 border-slate-200'
                        }`}>
                          {sms.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}