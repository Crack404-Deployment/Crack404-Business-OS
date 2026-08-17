'use client';
import { useState } from 'react';
import Link from 'next/link';
import { Search, Filter, Plus, MoreVertical, Mail, Phone, ChevronDown, CheckCircle2, Building, Tag } from 'lucide-react';

export default function ContactsList() {
  const [searchTerm, setSearchTerm] = useState('');
  
  // Updated to match the strict Orange/Amber theme
  const stats = [
    { label: 'Total Contacts', value: '1,492', color: 'text-orange-600' },
    { label: 'Active Customers', value: '845', color: 'text-amber-500' },
    { label: 'New This Month', value: '128', color: 'text-orange-500' },
    { label: 'Follow-ups Needed', value: '45', color: 'text-orange-400' },
  ];

  const contacts = [
    { id: 101, name: 'Karim Hasan', company: 'ABC Electronics', email: 'karim@abcelectronics.com', phone: '+880 1811-000101', status: 'Active', tags: ['VIP', 'Enterprise'], owner: 'Arif Hasan', lastActivity: '2 hours ago' },
    { id: 102, name: 'Nabila Islam', company: 'Bright Systems', email: 'nabila.i@brightsys.bd', phone: '+880 1712-000102', status: 'Active', tags: ['High Value'], owner: 'Sara Rahman', lastActivity: '1 day ago' },
    { id: 103, name: 'Tarek Mahmud', company: 'TechNova Ltd', email: 'tarek@technova.bd', phone: '+880 1913-000103', status: 'New', tags: ['Follow-up'], owner: 'Arif Hasan', lastActivity: '3 days ago' },
    { id: 104, name: 'Ayesha Siddiqa', company: 'Global Retail', email: 'ayesha@globalretail.com', phone: '+880 1614-000104', status: 'Inactive', tags: ['Retail'], owner: 'Nabila Islam', lastActivity: '2 weeks ago' },
  ];

  return (
    /* OUTER WRAPPER: Forces entire page background to white */
    <div className="bg-white min-h-screen w-full">
      
      /* INNER CONTAINER: Centers content with spacious padding */
      <div className="px-6 py-12 sm:px-8 sm:py-16 lg:py-20 max-w-7xl mx-auto space-y-6 sm:space-y-8 animate-in fade-in duration-500">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">Contacts</h1>
            <p className="text-sm font-medium text-slate-500 mt-1">Manage your customer relationships and business contacts.</p>
          </div>
          <button className="flex items-center gap-2 bg-gradient-to-r from-orange-600 to-amber-500 hover:from-orange-500 hover:to-amber-400 text-white px-5 py-2.5 rounded-xl text-sm font-bold transition-all shadow-[0_4px_14px_rgba(234,88,12,0.25)] active:scale-[0.98]">
            <Plus className="w-4 h-4"/> Add Contact
          </button>
        </div>

        {/* Stats Quick View */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {stats.map((stat, idx) => (
            <div key={idx} className="bg-white border border-slate-100 p-6 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:border-orange-100 transition-colors">
              <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1">{stat.label}</p>
              <h3 className={`text-2xl font-black tracking-tight ${stat.color}`}>{stat.value}</h3>
            </div>
          ))}
        </div>

        {/* Toolbar */}
        <div className="flex flex-col sm:flex-row gap-4 justify-between bg-white p-4 rounded-2xl border border-slate-100 shadow-[0_4px_20px_rgba(0,0,0,0.03)]">
          <div className="relative w-full sm:max-w-md group">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 group-focus-within:text-orange-500 transition-colors"/>
            <input 
              type="text" 
              placeholder="Search contacts by name, company, or email..." 
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
                  <th className="px-6 py-5 w-10"><input type="checkbox" className="rounded border-slate-200 text-orange-500 focus:ring-orange-500/20" /></th>
                  <th className="px-6 py-5">Contact Profile</th>
                  <th className="px-6 py-5">Contact Details</th>
                  <th className="px-6 py-5">Status & Tags</th>
                  <th className="px-6 py-5">Last Activity</th>
                  <th className="px-6 py-5">Owner</th>
                  <th className="px-6 py-5 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-50">
                {contacts.map((contact) => (
                  <tr key={contact.id} className="hover:bg-orange-50/30 transition-colors group">
                    <td className="px-6 py-4"><input type="checkbox" className="rounded border-slate-200 text-orange-500 focus:ring-orange-500/20" /></td>
                    <td className="px-6 py-4">
                      {/* Fixed Path: Pointing directly to your static folder */}
                      <Link className="block" href="/crm/contacts/contact-details">
                        <p className="text-sm font-bold text-slate-900 group-hover:text-orange-600 transition-colors">{contact.name}</p>
                        <p className="text-xs font-medium text-slate-500 mt-1 flex items-center gap-1">
                          <Building className="w-3 h-3 text-slate-400"/> {contact.company}
                        </p>
                      </Link>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex flex-col gap-2">
                        <div className="flex items-center gap-2 text-xs font-medium text-slate-600"><Mail className="w-3 h-3 text-orange-400"/> {contact.email}</div>
                        <div className="flex items-center gap-2 text-xs font-medium text-slate-600"><Phone className="w-3 h-3 text-orange-400"/> {contact.phone}</div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex flex-col items-start gap-2.5">
                        <span className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-[10px] font-black uppercase tracking-wider border ${
                          contact.status === 'Active' ? 'bg-emerald-50 text-emerald-600 border-emerald-200' :
                          contact.status === 'New' ? 'bg-amber-50 text-amber-600 border-amber-200' : 'bg-slate-50 text-slate-500 border-slate-200'
                        }`}>
                          {contact.status === 'Active' && <CheckCircle2 className="w-3 h-3"/>} {contact.status}
                        </span>
                        <div className="flex gap-1.5">
                          {contact.tags.map(tag => (
                            <span key={tag} className="flex items-center gap-1 bg-slate-50 border border-slate-100 text-slate-500 text-[9px] font-bold px-2 py-0.5 rounded-full">
                              <Tag className="w-2.5 h-2.5 text-orange-300"/> {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm font-medium text-slate-600">{contact.lastActivity}</td>
                    <td className="px-6 py-4 text-sm font-medium text-slate-600">{contact.owner}</td>
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
          <div className="px-6 py-4 border-t border-slate-50 bg-white flex items-center justify-between">
            <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Showing 1 to 4 of 4 contacts</p>
            <div className="flex items-center gap-1.5">
              <button className="px-3 py-1.5 border border-slate-100 bg-slate-50 hover:bg-slate-100 rounded-lg text-xs font-bold text-slate-400 transition-colors">Prev</button>
              <button className="px-3 py-1.5 border border-orange-500 bg-orange-500 rounded-lg text-xs font-bold text-white shadow-[0_2px_10px_rgba(234,88,12,0.2)]">1</button>
              <button className="px-3 py-1.5 border border-slate-100 bg-slate-50 hover:bg-slate-100 rounded-lg text-xs font-bold text-slate-400 transition-colors">Next</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}