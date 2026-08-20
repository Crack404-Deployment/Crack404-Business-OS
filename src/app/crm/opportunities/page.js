'use client';
import { useState } from 'react';
import Link from 'next/link';
import { Search, Filter, Plus, MoreVertical, Building, User, Target, ChevronDown, DollarSign } from 'lucide-react';

export default function OpportunitiesList() {
  const [searchTerm, setSearchTerm] = useState('');

  const stats = [
    { label: 'Total Opportunities', value: '42', color: 'text-orange-600' },
    { label: 'Total Pipeline Value', value: '৳ 12,450,000', color: 'text-slate-900' },
    { label: 'Won (This Month)', value: '8', color: 'text-emerald-500' },
    { label: 'Open Opportunities', value: '24', color: 'text-amber-500' },
  ];

  const opportunities = [
    { id: 1, name: 'CRM + POS Package', company: 'ABC Electronics', contact: 'Karim Hasan', value: '৳ 250,000', stage: 'Proposal', probability: '70%', expectedClose: 'Sept 30, 2026', owner: 'Arif Hasan', status: 'Open' },
    { id: 2, name: 'Enterprise CRM', company: 'TechNova Ltd', contact: 'Rahim Ahmed', value: '৳ 850,000', stage: 'Negotiation', probability: '90%', expectedClose: 'Oct 15, 2026', owner: 'Sara Rahman', status: 'Open' },
    { id: 3, name: 'Inventory Module', company: 'Global Retail', contact: 'Sara Rahman', value: '৳ 150,000', stage: 'Won', probability: '100%', expectedClose: 'Aug 10, 2026', owner: 'Arif Hasan', status: 'Won' },
    { id: 4, name: 'Business OS Sub', company: 'Nexa Solutions', contact: 'Tanvir Chowdhury', value: '৳ 420,000', stage: 'Qualified', probability: '40%', expectedClose: 'Nov 01, 2026', owner: 'Nabila Islam', status: 'Open' },
  ];

  return (
    <div className="bg-white min-h-screen w-full">
      <div className="px-6 py-12 sm:px-8 sm:py-16 lg:py-20 max-w-7xl mx-auto space-y-6 sm:space-y-8 animate-in fade-in duration-500">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">Opportunities</h1>
            <p className="text-sm font-medium text-slate-500 mt-1">Track and manage your active sales opportunities.</p>
          </div>
          <button className="flex items-center gap-2 bg-gradient-to-r from-orange-600 to-amber-500 hover:from-orange-500 hover:to-amber-400 text-white px-5 py-2.5 rounded-xl text-sm font-bold transition-all shadow-[0_4px_14px_rgba(234,88,12,0.25)] active:scale-[0.98]">
            <Plus className="w-4 h-4"/> Create Opportunity
          </button>
        </div>

        {/* Stats */}
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
              placeholder="Search opportunities..." 
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
                  <th className="px-6 py-5">Opportunity</th>
                  <th className="px-6 py-5">Company & Contact</th>
                  <th className="px-6 py-5">Value & Prob.</th>
                  <th className="px-6 py-5">Stage</th>
                  <th className="px-6 py-5">Expected Close</th>
                  <th className="px-6 py-5">Owner</th>
                  <th className="px-6 py-5 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-50">
                {opportunities.map((opp) => (
                  <tr key={opp.id} className="hover:bg-orange-50/30 transition-colors group">
                    <td className="px-6 py-4">
                      {/* FIXED PATH -> /crm/opportunities/opportunities-details */}
                      <Link className="block" href="/crm/opportunities/opportunities-details">
                        <p className="text-sm font-bold text-slate-900 group-hover:text-orange-600 transition-colors">{opp.name}</p>
                        <p className="text-xs font-medium text-slate-500 mt-1 flex items-center gap-1">
                          <Target className="w-3 h-3 text-orange-400"/> {opp.status}
                        </p>
                      </Link>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex flex-col gap-1.5">
                        <div className="flex items-center gap-2 text-xs font-medium text-slate-600"><Building className="w-3 h-3 text-orange-400"/> {opp.company}</div>
                        <div className="flex items-center gap-2 text-xs font-medium text-slate-600"><User className="w-3 h-3 text-orange-400"/> {opp.contact}</div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex flex-col gap-1.5">
                        <div className="flex items-center gap-2 text-sm font-black text-slate-900">{opp.value}</div>
                        <div className="flex items-center gap-2 text-xs font-bold text-slate-500">{opp.probability} Probability</div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`inline-flex items-center gap-1 px-3 py-1.5 rounded-md text-[10px] font-black uppercase tracking-wider border ${
                        opp.stage === 'Won' ? 'bg-emerald-50 text-emerald-600 border-emerald-200' :
                        opp.stage === 'Negotiation' ? 'bg-orange-50 text-orange-600 border-orange-200' : 'bg-amber-50 text-amber-600 border-amber-200'
                      }`}>
                        {opp.stage}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm font-medium text-slate-600">{opp.expectedClose}</td>
                    <td className="px-6 py-4 text-sm font-medium text-slate-600">{opp.owner}</td>
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