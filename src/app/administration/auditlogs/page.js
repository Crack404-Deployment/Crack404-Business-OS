'use client';
import { useState } from 'react';
import { FileText, Search, ShieldAlert, Clock, User } from 'lucide-react';

export default function AuditLogs() {
  const [logs] = useState([
    { id: "LOG-9921", user: "Sourav Das Gupta", role: "Super Admin", action: "Updated System Global Tax Rate to 5%", timestamp: "Today, 06:15 PM", ip: "192.168.1.10" },
    { id: "LOG-9920", user: "Sarah Jenkins", role: "Manager", action: "Approved Leave Request for Tahmid", timestamp: "Today, 04:30 PM", ip: "192.168.2.45" },
    { id: "LOG-9919", user: "Tahmid", role: "Cashier", action: "Completed POS Sale #TXN-9042 ($145.00)", timestamp: "Today, 02:10 PM", ip: "192.168.1.15" },
    { id: "LOG-9918", user: "System Automator", role: "Cron Job", action: "Executed Daily Database Backup successfully", timestamp: "Today, 12:00 AM", ip: "Localhost" },
    { id: "LOG-9917", user: "Mike Ross", role: "Clerk", action: "Failed login attempt (Incorrect Password)", timestamp: "Yesterday", ip: "192.168.3.89" },
  ]);

  return (
    <div className="min-h-screen bg-slate-50 font-sans p-4 sm:p-6 lg:p-8 text-slate-900">
      <div className="max-w-[1500px] mx-auto space-y-6">
        
        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
          <div>
            <h1 className="text-2xl sm:text-3xl font-black tracking-tight">System Audit Logs</h1>
            <p className="text-sm font-medium text-slate-500 mt-1">Chronological record of security events and administrative actions.</p>
          </div>
        </div>

        <div className="bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden">
          <div className="p-4 border-b border-slate-200 bg-slate-50/50">
            <div className="relative w-full sm:w-80">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input 
                type="text" 
                placeholder="Search logs by action or user..." 
                className="w-full pl-9 pr-4 py-2 bg-white border border-slate-300 rounded-lg text-sm focus:outline-none focus:border-orange-500"
              />
            </div>
          </div>

          <div className="overflow-x-auto hide-scrollbar">
            <table className="w-full text-left text-sm text-slate-600 min-w-[900px]">
              <thead className="bg-slate-50 text-slate-500 font-bold uppercase text-[10px] tracking-wider border-b border-slate-200">
                <tr>
                  <th className="px-6 py-4">Log ID & Timestamp</th>
                  <th className="px-4 py-4">User & Role</th>
                  <th className="px-4 py-4">Action Performed</th>
                  <th className="px-6 py-4 text-right">IP Address</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {logs.map((log) => (
                  <tr key={log.id} className="hover:bg-slate-50 transition-colors">
                    <td className="px-6 py-4">
                      <p className="font-black text-slate-900">{log.id}</p>
                      <p className="text-[10px] font-bold text-slate-400 flex items-center gap-1 mt-0.5"><Clock className="w-3 h-3" /> {log.timestamp}</p>
                    </td>
                    <td className="px-4 py-4">
                      <p className="font-bold text-slate-800 flex items-center gap-1.5"><User className="w-3.5 h-3.5 text-slate-400" /> {log.user}</p>
                      <span className="text-[10px] font-bold bg-slate-100 text-slate-600 px-2 py-0.5 rounded border border-slate-200 inline-block mt-1">{log.role}</span>
                    </td>
                    <td className="px-4 py-4 font-medium text-slate-700">
                      {log.action}
                    </td>
                    <td className="px-6 py-4 text-right font-mono text-xs text-slate-500">
                      {log.ip}
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