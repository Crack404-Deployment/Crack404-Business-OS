'use client';
import { useState } from 'react';
import Link from 'next/link';
import { Search, Filter, Plus, MoreVertical, Mail, Phone, ChevronDown, Building, CheckCircle2 } from 'lucide-react';

export default function LeadsList() {
  const [searchTerm, setSearchTerm] = useState('');
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  const leads = [
    { id: 1, name: 'Rahim Ahmed', company: 'TechNova Ltd', email: 'rahim@technova.bd', phone: '+880 1711-000001', source: 'Website', status: 'New', owner: 'Arif Hasan', created: 'Oct 24, 2026', value: '৳ 500,000' },
    { id: 2, name: 'Sara Rahman', company: 'Global Retail', email: 'sara.r@globalretail.com', phone: '+880 1819-000002', source: 'Referral', status: 'Contacted', owner: 'Nabila Islam', created: 'Oct 22, 2026', value: '৳ 1,200,000' },
    { id: 3, name: 'Tanvir Chowdhury', company: 'Nexa Solutions', email: 'tanvir@nexa.io', phone: '+880 1912-000003', source: 'LinkedIn', status: 'Qualified', owner: 'Arif Hasan', created: 'Oct 20, 2026', value: '৳ 850,000' },
    { id: 4, name: 'Fatema Akter', company: 'Bright Systems', email: 'fatema@brightsys.bd', phone: '+880 1722-000004', source: 'Event', status: 'Unqualified', owner: 'Nabila Islam', created: 'Oct 15, 2026', value: '৳ 150,000' },
  ];

  // Updated to strictly follow the Orange/Amber theme
  const getStatusStyle = (status) => {
    switch(status) {
      case 'New': return 'bg-slate-50 text-slate-600 border-slate-200';
      case 'Contacted': return 'bg-amber-50 text-amber-600 border-amber-200';
      case 'Qualified': return 'bg-orange-50 text-orange-600 border-orange-200';
      case 'Unqualified': return 'bg-slate-50 text-slate-400 border-slate-100';
      default: return 'bg-slate-50 text-slate-600 border-slate-200';
    }
  };

  return (
    /* OUTER WRAPPER: Forces entire page background to white */
    <div className="bg-white min-h-screen w-full">
      
      /* INNER CONTAINER: Centers content with spacious padding */
      <div className="px-6 py-12 sm:px-8 sm:py-16 lg:py-20 max-w-7xl mx-auto space-y-6 sm:space-y-8 animate-in fade-in duration-500">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">Leads</h1>
            <p className="text-sm font-medium text-slate-500 mt-1">Manage and qualify potential customers before converting to contacts.</p>
          </div>
          <button 
            onClick={() => setIsAddModalOpen(true)}
            className="flex items-center gap-2 bg-gradient-to-r from-orange-600 to-amber-500 hover:from-orange-500 hover:to-amber-400 text-white px-5 py-2.5 rounded-xl text-sm font-bold transition-all shadow-[0_4px_14px_rgba(234,88,12,0.25)] active:scale-[0.98]"
          >
            <Plus className="w-4 h-4"/> Add Lead
          </button>
        </div>

        {/* Toolbar */}
        <div className="flex flex-col sm:flex-row gap-4 justify-between bg-white p-4 rounded-2xl border border-slate-100 shadow-[0_4px_20px_rgba(0,0,0,0.03)]">
          <div className="relative w-full sm:max-w-md group">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 group-focus-within:text-orange-500 transition-colors"/>
            <input 
              type="text" 
              placeholder="Search leads by name, company, or email..." 
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
                  <th className="px-6 py-5">Lead Information</th>
                  <th className="px-6 py-5">Contact Details</th>
                  <th className="px-6 py-5">Status</th>
                  <th className="px-6 py-5">Source</th>
                  <th className="px-6 py-5">Owner</th>
                  <th className="px-6 py-5">Est. Value</th>
                  <th className="px-6 py-5 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-50">
                {leads.map((lead) => (
                  <tr key={lead.id} className="hover:bg-orange-50/30 transition-colors group">
                    <td className="px-6 py-4"><input type="checkbox" className="rounded border-slate-200 text-orange-500 focus:ring-orange-500/20" /></td>
                    <td className="px-6 py-4">
                      {/* FIXED PATH: Points to lead-details static folder */}
                      <Link className="block" href="/crm/leads/lead-details">
                        <p className="text-sm font-bold text-slate-900 group-hover:text-orange-600 transition-colors">{lead.name}</p>
                        <p className="text-xs font-medium text-slate-500 mt-1 flex items-center gap-1">
                          <Building className="w-3 h-3 text-slate-400"/> {lead.company}
                        </p>
                      </Link>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex flex-col gap-1.5">
                        <div className="flex items-center gap-2 text-xs font-medium text-slate-600"><Mail className="w-3 h-3 text-orange-400"/> {lead.email}</div>
                        <div className="flex items-center gap-2 text-xs font-medium text-slate-600"><Phone className="w-3 h-3 text-orange-400"/> {lead.phone}</div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-[10px] font-black uppercase tracking-wider border ${getStatusStyle(lead.status)}`}>
                        {lead.status === 'Qualified' && <CheckCircle2 className="w-3 h-3"/>} {lead.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm font-medium text-slate-600">{lead.source}</td>
                    <td className="px-6 py-4 text-sm font-medium text-slate-600">{lead.owner}</td>
                    <td className="px-6 py-4 text-sm font-black text-slate-700">{lead.value}</td>
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
            <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Showing 1 to 4 of 4 entries</p>
            <div className="flex items-center gap-1.5">
              <button className="px-3 py-1.5 border border-slate-100 bg-slate-50 hover:bg-slate-100 rounded-lg text-xs font-bold text-slate-400 transition-colors">Prev</button>
              <button className="px-3 py-1.5 border border-orange-500 bg-orange-500 rounded-lg text-xs font-bold text-white shadow-sm shadow-orange-500/20">1</button>
              <button className="px-3 py-1.5 border border-slate-100 bg-slate-50 hover:bg-slate-100 rounded-lg text-xs font-bold text-slate-400 transition-colors">Next</button>
            </div>
          </div>
        </div>

        {/* Simple Add Modal (UI Only) */}
        {isAddModalOpen && (
          <div className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-3xl shadow-2xl w-full max-w-md overflow-hidden animate-in zoom-in-95 duration-200 border border-slate-100">
              <div className="px-6 py-5 border-b border-slate-50 flex items-center justify-between">
                <h3 className="text-lg font-black text-slate-900 tracking-tight">Add New Lead</h3>
                <button onClick={() => setIsAddModalOpen(false)} className="text-slate-400 hover:text-orange-500 hover:bg-orange-50 p-2 rounded-xl transition-colors"><Plus className="w-5 h-5 rotate-45"/></button>
              </div>
              <div className="p-6 space-y-5">
                <div>
                  <label className="block text-[10px] font-black text-slate-400 uppercase tracking-wider mb-2">Full Name</label>
                  <input type="text" className="w-full px-4 py-3 bg-slate-50 border border-slate-100 rounded-xl text-sm font-medium focus:bg-white focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all placeholder:text-slate-400" placeholder="e.g. John Doe" />
                </div>
                <div>
                  <label className="block text-[10px] font-black text-slate-400 uppercase tracking-wider mb-2">Company</label>
                  <input type="text" className="w-full px-4 py-3 bg-slate-50 border border-slate-100 rounded-xl text-sm font-medium focus:bg-white focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all placeholder:text-slate-400" placeholder="e.g. ABC Corp" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] font-black text-slate-400 uppercase tracking-wider mb-2">Email</label>
                    <input type="email" className="w-full px-4 py-3 bg-slate-50 border border-slate-100 rounded-xl text-sm font-medium focus:bg-white focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all placeholder:text-slate-400" placeholder="name@company.com" />
                  </div>
                  <div>
                    <label className="block text-[10px] font-black text-slate-400 uppercase tracking-wider mb-2">Phone</label>
                    <input type="text" className="w-full px-4 py-3 bg-slate-50 border border-slate-100 rounded-xl text-sm font-medium focus:bg-white focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all placeholder:text-slate-400" placeholder="+880 1..." />
                  </div>
                </div>
              </div>
              <div className="px-6 py-5 border-t border-slate-50 bg-slate-50/50 flex justify-end gap-3">
                <button onClick={() => setIsAddModalOpen(false)} className="px-5 py-2.5 text-sm font-bold text-slate-600 bg-white border border-slate-200 hover:bg-slate-50 hover:text-slate-900 rounded-xl transition-all shadow-sm">Cancel</button>
                <button onClick={() => setIsAddModalOpen(false)} className="px-5 py-2.5 text-sm font-bold bg-gradient-to-r from-orange-600 to-amber-500 text-white hover:from-orange-500 hover:to-amber-400 rounded-xl transition-all shadow-[0_4px_14px_rgba(234,88,12,0.25)] active:scale-[0.98]">Save Lead</button>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}