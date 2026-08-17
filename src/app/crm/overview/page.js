'use client';
import { useState } from 'react';
import Link from 'next/link';
import { Users, UserPlus, Target, Briefcase, Activity, Plus, Search, ChevronRight, Mail, Phone, Building } from 'lucide-react';

export default function CrmOverview() {
  const stats = [
    { label: 'Total Leads', value: '248', icon: Target, color: 'text-orange-600', bg: 'bg-orange-50' },
    { label: 'New Leads (This Week)', value: '32', icon: UserPlus, color: 'text-orange-500', bg: 'bg-orange-50/80' },
    { label: 'Total Contacts', value: '1,492', icon: Users, color: 'text-amber-500', bg: 'bg-amber-50' },
    { label: 'Active Customers', value: '845', icon: Briefcase, color: 'text-orange-400', bg: 'bg-orange-50/50' },
  ];

  const recentLeads = [
    { id: 1, name: 'Rahim Ahmed', company: 'TechNova Ltd', status: 'New', owner: 'Arif Hasan', date: '2 hours ago' },
    { id: 2, name: 'Sara Rahman', company: 'Global Retail', status: 'Contacted', owner: 'Nabila Islam', date: '5 hours ago' },
    { id: 3, name: 'Tanvir Chowdhury', company: 'Nexa Solutions', status: 'Qualified', owner: 'Arif Hasan', date: '1 day ago' },
  ];

  const recentContacts = [
    { id: 101, name: 'Karim Hasan', company: 'ABC Electronics', status: 'Active', lastActivity: 'Email sent', owner: 'Arif Hasan' },
    { id: 102, name: 'Nabila Islam', company: 'Bright Systems', status: 'Active', lastActivity: 'Call completed', owner: 'Sara Rahman' },
  ];

  const activities = [
    { id: 1, text: 'Rahim Ahmed was added as a new lead', time: '2 hours ago', type: 'lead' },
    { id: 2, text: 'Email sent to Karim Hasan regarding Q3 proposal', time: '4 hours ago', type: 'email' },
    { id: 3, text: 'Tanvir Chowdhury status changed to Qualified', time: '1 day ago', type: 'status' },
    { id: 4, text: 'Note added to Global Retail account', time: '1 day ago', type: 'note' },
  ];

  return (
    <div className="bg-white min-h-screen w-full">
      <div className="px-6 py-12 sm:px-8 sm:py-16 lg:py-20 max-w-7xl mx-auto space-y-8 sm:space-y-10 animate-in fade-in duration-500">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">CRM Overview</h1>
            <p className="text-sm font-medium text-slate-500 mt-1">Monitor your sales pipeline, leads, and customer interactions.</p>
          </div>
          <div className="flex items-center gap-3">
            <Link className="flex items-center gap-2 bg-white border border-slate-200 hover:border-orange-300 hover:bg-orange-50 text-slate-700 hover:text-orange-600 px-4 py-2.5 rounded-xl text-sm font-bold transition-all shadow-[0_2px_10px_rgba(0,0,0,0.02)]" href="/crm/contacts">
              <Plus className="w-4 h-4"/> Add Contact
            </Link>
            <Link className="flex items-center gap-2 bg-gradient-to-r from-orange-600 to-amber-500 hover:from-orange-500 hover:to-amber-400 text-white px-5 py-2.5 rounded-xl text-sm font-bold transition-all shadow-[0_4px_14px_rgba(234,88,12,0.25)] active:scale-[0.98]" href="/crm/leads">
              <Plus className="w-4 h-4"/> Add Lead
            </Link>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div key={idx} className="bg-white border border-slate-100 p-6 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.03)] flex items-start gap-4 hover:border-orange-100 transition-colors group">
                <div className={`w-12 h-12 rounded-xl ${stat.bg} ${stat.color} flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-6 h-6"/>
                </div>
                <div>
                  <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1">{stat.label}</p>
                  <h3 className="text-2xl font-black text-slate-900 tracking-tight">{stat.value}</h3>
                </div>
              </div>
            );
          })}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
          
          {/* Left Column: Leads & Contacts */}
          <div className="lg:col-span-2 space-y-6 sm:space-y-8">
            
            {/* Recent Leads */}
            <div className="bg-white border border-slate-100 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.03)] overflow-hidden">
              <div className="px-6 py-5 border-b border-slate-50 flex items-center justify-between">
                <h2 className="text-base font-black text-slate-900">Recent Leads</h2>
                <Link className="text-xs font-bold text-orange-500 hover:text-orange-600 flex items-center gap-1 group" href="/crm/leads">
                  View All <ChevronRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform"/>
                </Link>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead className="bg-white border-b border-slate-50 text-[10px] font-black text-slate-400 uppercase tracking-wider">
                    <tr>
                      <th className="px-6 py-4">Lead Information</th>
                      <th className="px-6 py-4">Status</th>
                      <th className="px-6 py-4">Owner</th>
                      <th className="px-6 py-4 text-right">Created</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-50">
                    {recentLeads.map((lead) => (
                      <tr key={lead.id} className="hover:bg-orange-50/30 transition-colors group cursor-pointer">
                        <td className="px-6 py-4">
                          {/* FIXED PATH: Pointing to lead-details folder */}
                          <Link className="block" href="/crm/leads/lead-details">
                            <p className="text-sm font-bold text-slate-900 group-hover:text-orange-600 transition-colors">{lead.name}</p>
                            <p className="text-xs font-medium text-slate-500 mt-1 flex items-center gap-1">
                              <Building className="w-3 h-3 text-slate-400"/> {lead.company}
                            </p>
                          </Link>
                        </td>
                        <td className="px-6 py-4">
                          <span className={`inline-flex items-center px-2.5 py-1 rounded-md text-[10px] font-black uppercase tracking-wider border ${
                            lead.status === 'New' ? 'bg-slate-50 text-slate-600 border-slate-200' :
                            lead.status === 'Contacted' ? 'bg-amber-50 text-amber-600 border-amber-200' : 'bg-orange-50 text-orange-600 border-orange-200'
                          }`}>
                            {lead.status}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-sm font-medium text-slate-600">{lead.owner}</td>
                        <td className="px-6 py-4 text-xs font-bold text-slate-400 text-right">{lead.date}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Recent Contacts */}
            <div className="bg-white border border-slate-100 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.03)] overflow-hidden">
              <div className="px-6 py-5 border-b border-slate-50 flex items-center justify-between">
                <h2 className="text-base font-black text-slate-900">Recent Contacts</h2>
                <Link className="text-xs font-bold text-orange-500 hover:text-orange-600 flex items-center gap-1 group" href="/crm/contacts">
                  View All <ChevronRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform"/>
                </Link>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead className="bg-white border-b border-slate-50 text-[10px] font-black text-slate-400 uppercase tracking-wider">
                    <tr>
                      <th className="px-6 py-4">Contact Profile</th>
                      <th className="px-6 py-4">Last Activity</th>
                      <th className="px-6 py-4">Owner</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-50">
                    {recentContacts.map((contact) => (
                      <tr key={contact.id} className="hover:bg-orange-50/30 transition-colors group cursor-pointer">
                        <td className="px-6 py-4">
                          {/* FIXED PATH: Pointing to contact-details folder */}
                          <Link className="block" href="/crm/contacts/contact-details">
                            <p className="text-sm font-bold text-slate-900 group-hover:text-orange-600 transition-colors">{contact.name}</p>
                            <p className="text-xs font-medium text-slate-500 mt-1 flex items-center gap-1">
                              <Building className="w-3 h-3 text-slate-400"/> {contact.company}
                            </p>
                          </Link>
                        </td>
                        <td className="px-6 py-4 text-sm font-medium text-slate-600">{contact.lastActivity}</td>
                        <td className="px-6 py-4 text-sm font-medium text-slate-600">{contact.owner}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Right Column: Activity Feed */}
          <div className="bg-white border border-slate-100 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.03)] h-fit">
            <div className="px-6 py-5 border-b border-slate-50 flex items-center gap-2">
              <Activity className="w-5 h-5 text-orange-500"/>
              <h2 className="text-base font-black text-slate-900">Recent Activity</h2>
            </div>
            <div className="p-6 relative">
              <div className="absolute left-9 top-8 bottom-8 w-px bg-slate-100"></div>
              <div className="space-y-6 relative z-10">
                {activities.map((activity) => (
                  <div key={activity.id} className="flex gap-4 group">
                    <div className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 border-2 border-white ring-4 ring-white transition-transform group-hover:scale-110 ${
                      activity.type === 'email' ? 'bg-amber-100 text-amber-500' :
                      activity.type === 'status' ? 'bg-orange-100 text-orange-500' : 'bg-orange-50 text-orange-400'
                    }`}>
                      <div className="w-2 h-2 rounded-full bg-current"></div>
                    </div>
                    <div>
                      <p className="text-sm font-bold text-slate-700">{activity.text}</p>
                      <p className="text-xs font-bold text-slate-400 mt-1">{activity.time}</p>
                    </div>
                  </div>
                ))}
              </div>
              <button className="w-full mt-8 py-3 bg-white hover:bg-orange-50 hover:border-orange-200 hover:text-orange-600 border border-slate-200 rounded-xl text-xs font-black text-slate-600 transition-all uppercase tracking-wider">
                View All Activity
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}