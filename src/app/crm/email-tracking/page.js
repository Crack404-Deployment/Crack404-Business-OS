'use client';
import { useState } from 'react';
import { Mail, MousePointerClick, Eye, Send, CheckCircle2, Search, Filter, ChevronDown, Clock, Building, User } from 'lucide-react';

export default function EmailTracking() {
  const [searchTerm, setSearchTerm] = useState('');

  const kpis = [
    { label: 'Emails Sent', value: '12,480', change: '+18.4%', icon: Send, color: 'text-blue-500', bg: 'bg-blue-50' },
    { label: 'Delivered', value: '12,105', change: '97.0%', icon: CheckCircle2, color: 'text-emerald-500', bg: 'bg-emerald-50' },
    { label: 'Opened', value: '8,642', change: '69.2%', icon: Eye, color: 'text-amber-500', bg: 'bg-amber-50' },
    { label: 'Clicked', value: '3,120', change: '25.0%', icon: MousePointerClick, color: 'text-orange-500', bg: 'bg-orange-50' },
    { label: 'Replied', value: '1,450', change: '11.6%', icon: Mail, color: 'text-indigo-500', bg: 'bg-indigo-50' },
  ];

  const emails = [
    { id: 1, contact: 'Karim Hasan', company: 'ABC Electronics', subject: 'Q4 Pricing Proposal', sent: '10:30 AM', status: 'Replied', openTime: '10:45 AM', clickTime: '10:48 AM' },
    { id: 2, contact: 'Sara Rahman', company: 'TechNova Ltd', subject: 'Following up on CRM demo', sent: '09:15 AM', status: 'Clicked', openTime: '09:20 AM', clickTime: '09:22 AM' },
    { id: 3, contact: 'Tanvir Chowdhury', company: 'Nexa Solutions', subject: 'Your requested resources', sent: 'Yesterday', status: 'Opened', openTime: 'Yesterday, 4:00 PM', clickTime: '-' },
    { id: 4, contact: 'Nabila Islam', company: 'Bright Systems', subject: 'Welcome to Crack404', sent: 'Yesterday', status: 'Delivered', openTime: '-', clickTime: '-' },
  ];

  // CSS-based mock chart data
  const chartData = [40, 65, 45, 80, 55, 90, 75];

  return (
    <div className="bg-white min-h-screen w-full">
      <div className="px-6 py-12 sm:px-8 sm:py-16 lg:py-20 max-w-7xl mx-auto space-y-8 animate-in fade-in duration-500">
        
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">Email Tracking</h1>
            <p className="text-sm font-medium text-slate-500 mt-1">Track customer emails, engagement and communication activity.</p>
          </div>
          <button className="flex items-center gap-2 bg-white border border-slate-200 hover:border-orange-300 hover:bg-orange-50 hover:text-orange-600 px-5 py-2.5 rounded-xl text-sm font-bold text-slate-700 transition-all shadow-[0_2px_10px_rgba(0,0,0,0.02)]">
            Last 30 Days <ChevronDown className="w-4 h-4"/>
          </button>
        </div>

        {/* Animated KPI Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-6">
          {kpis.map((kpi, idx) => {
            const Icon = kpi.icon;
            return (
              <div key={idx} className="bg-white border border-slate-100 p-6 rounded-3xl shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(234,88,12,0.08)] transition-all duration-300 group cursor-default">
                <div className={`w-10 h-10 rounded-xl ${kpi.bg} ${kpi.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <Icon className="w-5 h-5"/>
                </div>
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-wider mb-1">{kpi.label}</p>
                <div className="flex items-end gap-2">
                  <h3 className="text-2xl font-black text-slate-900 tracking-tight">{kpi.value}</h3>
                  <span className={`text-xs font-bold mb-1 ${kpi.change.includes('+') ? 'text-emerald-500' : 'text-slate-500'}`}>{kpi.change}</span>
                </div>
              </div>
            );
          })}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
          {/* Email Performance Chart (CSS Based) */}
          <div className="lg:col-span-2 bg-white border border-slate-100 rounded-3xl shadow-[0_4px_20px_rgba(0,0,0,0.03)] p-8 flex flex-col justify-between">
            <div className="flex justify-between items-center mb-8">
              <h3 className="text-sm font-black text-slate-900">Engagement Trend</h3>
              <div className="flex gap-2">
                <span className="flex items-center gap-1.5 text-[10px] font-black text-slate-400 uppercase tracking-wider"><div className="w-2 h-2 rounded-full bg-orange-500"></div> Opened</span>
                <span className="flex items-center gap-1.5 text-[10px] font-black text-slate-400 uppercase tracking-wider"><div className="w-2 h-2 rounded-full bg-slate-200"></div> Clicked</span>
              </div>
            </div>
            <div className="h-48 flex items-end justify-between gap-2 sm:gap-4">
              {chartData.map((val, i) => (
                <div key={i} className="w-full flex flex-col justify-end gap-1 group">
                  <div style={{ height: `${val}%` }} className="w-full bg-orange-500 rounded-t-md opacity-80 group-hover:opacity-100 transition-all duration-500 animate-in slide-in-from-bottom-8"></div>
                  <div style={{ height: `${val * 0.4}%` }} className="w-full bg-slate-200 rounded-t-md group-hover:bg-amber-300 transition-all duration-500 animate-in slide-in-from-bottom-4"></div>
                </div>
              ))}
            </div>
          </div>

          {/* Activity Stream */}
          <div className="bg-white border border-slate-100 rounded-3xl shadow-[0_4px_20px_rgba(0,0,0,0.03)] p-8">
            <h3 className="text-sm font-black text-slate-900 mb-6 flex items-center gap-2"><Activity className="w-4 h-4 text-orange-500"/> Live Activity</h3>
            <div className="space-y-6 relative before:absolute before:inset-0 before:ml-[11px] before:w-px before:bg-slate-100">
              <div className="relative pl-8">
                <div className="absolute left-0 top-1 w-6 h-6 rounded-full bg-orange-50 border-2 border-white ring-2 ring-orange-100 flex items-center justify-center"><Eye className="w-3 h-3 text-orange-500"/></div>
                <p className="text-xs font-black text-slate-900">Rahim Ahmed <span className="font-medium text-slate-500">opened your email</span></p>
                <p className="text-[10px] font-bold text-slate-400 mt-1">2 min ago</p>
              </div>
              <div className="relative pl-8">
                <div className="absolute left-0 top-1 w-6 h-6 rounded-full bg-indigo-50 border-2 border-white ring-2 ring-indigo-100 flex items-center justify-center"><Mail className="w-3 h-3 text-indigo-500"/></div>
                <p className="text-xs font-black text-slate-900">Sarah Rahman <span className="font-medium text-slate-500">replied to</span> Proposal</p>
                <p className="text-[10px] font-bold text-slate-400 mt-1">8 min ago</p>
              </div>
              <div className="relative pl-8">
                <div className="absolute left-0 top-1 w-6 h-6 rounded-full bg-amber-50 border-2 border-white ring-2 ring-amber-100 flex items-center justify-center"><MousePointerClick className="w-3 h-3 text-amber-500"/></div>
                <p className="text-xs font-black text-slate-900">Karim Hasan <span className="font-medium text-slate-500">clicked a link</span></p>
                <p className="text-[10px] font-bold text-slate-400 mt-1">15 min ago</p>
              </div>
            </div>
          </div>
        </div>

        {/* Table */}
        <div className="bg-white border border-slate-100 rounded-3xl shadow-[0_4px_20px_rgba(0,0,0,0.03)] overflow-hidden">
          <div className="p-4 border-b border-slate-50 flex justify-between items-center bg-slate-50/50">
            <div className="relative w-full max-w-sm group">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 group-focus-within:text-orange-500 transition-colors"/>
              <input type="text" placeholder="Search tracking history..." className="w-full pl-11 pr-4 py-2 bg-white border border-slate-200 rounded-xl text-sm font-medium focus:outline-none focus:border-orange-500 transition-all"/>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left whitespace-nowrap">
              <thead className="bg-white border-b border-slate-50 text-[10px] font-black text-slate-400 uppercase tracking-wider">
                <tr>
                  <th className="px-6 py-5">Contact</th>
                  <th className="px-6 py-5">Subject</th>
                  <th className="px-6 py-5">Sent</th>
                  <th className="px-6 py-5">Status</th>
                  <th className="px-6 py-5">Opened</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-50">
                {emails.map((email) => (
                  <tr key={email.id} className="hover:bg-orange-50/30 transition-colors group cursor-pointer">
                    <td className="px-6 py-4">
                      <p className="text-sm font-bold text-slate-900 group-hover:text-orange-600 transition-colors">{email.contact}</p>
                      <p className="text-xs font-medium text-slate-500 mt-1 flex items-center gap-1"><Building className="w-3 h-3 text-slate-400"/> {email.company}</p>
                    </td>
                    <td className="px-6 py-4 text-sm font-bold text-slate-800">{email.subject}</td>
                    <td className="px-6 py-4 text-sm font-medium text-slate-600">{email.sent}</td>
                    <td className="px-6 py-4">
                      <span className={`inline-flex items-center px-2.5 py-1 rounded-md text-[10px] font-black uppercase tracking-wider border ${
                        email.status === 'Replied' ? 'bg-indigo-50 text-indigo-600 border-indigo-200' :
                        email.status === 'Clicked' ? 'bg-orange-50 text-orange-600 border-orange-200' :
                        email.status === 'Opened' ? 'bg-amber-50 text-amber-600 border-amber-200' : 'bg-emerald-50 text-emerald-600 border-emerald-200'
                      }`}>
                        {email.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm font-medium text-slate-600 flex items-center gap-2"><Clock className="w-3.5 h-3.5 text-slate-400"/> {email.openTime}</td>
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

// Minimal stub for Lucide Activity icon if not imported above
function Activity(props) { return <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>; }