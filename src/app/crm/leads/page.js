'use client';
import { useState } from 'react';
import { 
  Search, Filter, Plus, Mail, Phone, MoreHorizontal, UserPlus, 
  Target, TrendingUp, DollarSign, Calendar, ChevronLeft, ChevronRight, CheckSquare
} from 'lucide-react';

export default function Leads() {
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [selectedLeads, setSelectedLeads] = useState(new Set());

  // Expanded Enterprise Mock Data
  const leads = [
    { id: "LD-1001", name: "Alice Freeman", company: "TechFlow Solutions", email: "alice@techflow.com", phone: "+1 (555) 123-4567", status: "New", score: "Warm", value: 12500, agent: "Tahmid", lastContact: "Today, 10:30 AM" },
    { id: "LD-1002", name: "Marcus Johnson", company: "Global Retailers", email: "mjohnson@global.net", phone: "+1 (555) 987-6543", status: "Qualified", score: "Hot", value: 45000, agent: "Sarah J.", lastContact: "Yesterday" },
    { id: "LD-1003", name: "Samantha Lee", company: "NextGen Dynamics", email: "slee@nextgen.io", phone: "+1 (555) 456-7890", status: "Contacted", score: "Warm", value: 8900, agent: "Tahmid", lastContact: "2 days ago" },
    { id: "LD-1004", name: "David Chen", company: "Chen Logistics", email: "david@chenlogistics.com", phone: "+1 (555) 222-3333", status: "Lost", score: "Cold", value: 32000, agent: "Mike R.", lastContact: "1 week ago" },
    { id: "LD-1005", name: "Emma Wilson", company: "Wilson & Co.", email: "emma@wilsonco.com", phone: "+1 (555) 777-8888", status: "Proposal", score: "Hot", value: 75000, agent: "Sarah J.", lastContact: "Today, 09:15 AM" },
    { id: "LD-1006", name: "Robert Fox", company: "Fox Entertainment", email: "robert@foxent.com", phone: "+1 (555) 444-5555", status: "New", score: "Cold", value: 4500, agent: "Tahmid", lastContact: "Uncontacted" },
    { id: "LD-1007", name: "Esther Howard", company: "Howard Financial", email: "esther@howardfin.com", phone: "+1 (555) 666-7777", status: "Qualified", score: "Warm", value: 18000, agent: "Mike R.", lastContact: "3 days ago" },
    { id: "LD-1008", name: "Jenny Wilson", company: "Healthcare Plus", email: "jenny@healthplus.org", phone: "+1 (555) 888-9999", status: "Proposal", score: "Hot", value: 120000, agent: "Sarah J.", lastContact: "Yesterday" },
  ];

  const filteredLeads = leads.filter(lead => 
    (statusFilter === "All" || lead.status === statusFilter) &&
    (lead.name.toLowerCase().includes(search.toLowerCase()) || lead.company.toLowerCase().includes(search.toLowerCase()))
  );

  const toggleSelect = (id) => {
    const newSet = new Set(selectedLeads);
    newSet.has(id) ? newSet.delete(id) : newSet.add(id);
    setSelectedLeads(newSet);
  };

  const fmt = (n) => `$${Number(n).toLocaleString()}`;

  return (
    <div className="min-h-screen bg-slate-50 font-sans p-4 sm:p-6 lg:p-8 text-slate-900">
      <div className="max-w-[1400px] mx-auto space-y-6">
        
        {/* Header Section */}
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
          <div>
            <h1 className="text-2xl sm:text-3xl font-black tracking-tight">Leads Pipeline</h1>
            <p className="text-sm font-medium text-slate-500 mt-1">Manage prospects, track pipeline value, and close deals.</p>
          </div>
          <div className="flex gap-3">
            <button className="bg-white border border-slate-300 text-slate-700 px-4 py-2.5 rounded-xl font-bold shadow-sm transition-colors hover:bg-slate-50">
              Import
            </button>
            <button className="bg-orange-600 hover:bg-orange-700 text-white px-5 py-2.5 rounded-xl font-bold shadow-sm transition-colors flex items-center justify-center gap-2">
              <UserPlus className="w-4 h-4" /> Add Lead
            </button>
          </div>
        </div>

        {/* Enhanced KPI Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm">
            <div className="flex justify-between items-start mb-2">
              <div className="p-2.5 bg-blue-50 text-blue-600 rounded-xl"><Target className="w-5 h-5" /></div>
              <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-1 rounded-md">+12%</span>
            </div>
            <p className="text-sm font-bold text-slate-500">Active Pipeline</p>
            <h3 className="text-2xl font-black text-slate-900">1,248</h3>
          </div>
          
          <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm">
            <div className="flex justify-between items-start mb-2">
              <div className="p-2.5 bg-emerald-50 text-emerald-600 rounded-xl"><DollarSign className="w-5 h-5" /></div>
            </div>
            <p className="text-sm font-bold text-slate-500">Est. Pipeline Value</p>
            <h3 className="text-2xl font-black text-slate-900">$3.4M</h3>
          </div>

          <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm">
            <div className="flex justify-between items-start mb-2">
              <div className="p-2.5 bg-orange-50 text-orange-600 rounded-xl"><TrendingUp className="w-5 h-5" /></div>
              <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-1 rounded-md">+4.5%</span>
            </div>
            <p className="text-sm font-bold text-slate-500">Win Rate</p>
            <h3 className="text-2xl font-black text-slate-900">28.4%</h3>
          </div>

          <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm">
            <div className="flex justify-between items-start mb-2">
              <div className="p-2.5 bg-purple-50 text-purple-600 rounded-xl"><Calendar className="w-5 h-5" /></div>
            </div>
            <p className="text-sm font-bold text-slate-500">Avg. Time to Close</p>
            <h3 className="text-2xl font-black text-slate-900">14 Days</h3>
          </div>
        </div>

        {/* Massive Data Table Area */}
        <div className="bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden flex flex-col">
          
          {/* Advanced Toolbar */}
          <div className="p-4 border-b border-slate-200 flex flex-col lg:flex-row gap-4 justify-between items-center bg-slate-50/50">
            <div className="flex items-center gap-4 w-full lg:w-auto">
              {/* Bulk Actions (Shows when items selected) */}
              {selectedLeads.size > 0 ? (
                <div className="flex items-center gap-3 bg-orange-50 border border-orange-200 px-4 py-2 rounded-lg text-sm text-orange-700 font-bold animate-pulse">
                  <span>{selectedLeads.size} Selected</span>
                  <div className="w-px h-4 bg-orange-300"></div>
                  <button className="hover:text-orange-900">Email All</button>
                  <button className="hover:text-orange-900">Assign Agent</button>
                  <button className="hover:text-red-600">Delete</button>
                </div>
              ) : (
                <div className="flex gap-2 overflow-x-auto pb-2 sm:pb-0 hide-scrollbar">
                  {["All", "New", "Contacted", "Proposal", "Qualified", "Lost"].map(status => (
                    <button 
                      key={status}
                      onClick={() => setStatusFilter(status)}
                      className={`px-4 py-2 rounded-lg text-sm font-bold transition-all whitespace-nowrap ${
                        statusFilter === status ? 'bg-orange-100 text-orange-700 border border-orange-200' : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-50'
                      }`}
                    >
                      {status}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <div className="flex gap-3 w-full lg:w-auto">
              <div className="relative w-full lg:w-72">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input 
                  type="text" 
                  placeholder="Search leads, companies..." 
                  className="w-full pl-9 pr-4 py-2 bg-white border border-slate-300 rounded-lg text-sm focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-all"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
              </div>
              <button className="bg-white border border-slate-300 p-2 rounded-lg text-slate-500 hover:text-slate-900 hover:bg-slate-50">
                <Filter className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm text-slate-600 min-w-[1000px]">
              <thead className="bg-slate-50 text-slate-500 font-bold uppercase text-[11px] tracking-wider border-b border-slate-200">
                <tr>
                  <th className="px-6 py-4 w-12">
                    <button onClick={() => setSelectedLeads(selectedLeads.size === filteredLeads.length ? new Set() : new Set(filteredLeads.map(l => l.id)))}>
                      <CheckSquare className={`w-5 h-5 ${selectedLeads.size > 0 ? 'text-orange-500' : 'text-slate-300'}`} />
                    </button>
                  </th>
                  <th className="px-4 py-4">Lead Info</th>
                  <th className="px-4 py-4">Contact</th>
                  <th className="px-4 py-4">Pipeline Status</th>
                  <th className="px-4 py-4">Est. Value</th>
                  <th className="px-4 py-4">Agent & Timeline</th>
                  <th className="px-6 py-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {filteredLeads.map((lead) => (
                  <tr key={lead.id} className={`hover:bg-orange-50/30 transition-colors group ${selectedLeads.has(lead.id) ? 'bg-orange-50/50' : ''}`}>
                    <td className="px-6 py-4">
                      <button onClick={() => toggleSelect(lead.id)}>
                        <CheckSquare className={`w-5 h-5 transition-colors ${selectedLeads.has(lead.id) ? 'text-orange-500' : 'text-slate-300 group-hover:text-slate-400'}`} />
                      </button>
                    </td>
                    <td className="px-4 py-4">
                      <p className="font-bold text-slate-900 text-sm">{lead.name}</p>
                      <p className="text-xs text-slate-500 font-medium mt-0.5">{lead.company}</p>
                    </td>
                    <td className="px-4 py-4 space-y-1.5">
                      <div className="flex items-center gap-2 text-xs font-medium"><Mail className="w-3.5 h-3.5 text-slate-400" /> {lead.email}</div>
                      <div className="flex items-center gap-2 text-xs font-medium"><Phone className="w-3.5 h-3.5 text-slate-400" /> {lead.phone}</div>
                    </td>
                    <td className="px-4 py-4">
                      <div className="flex flex-col items-start gap-1.5">
                        <span className={`px-2.5 py-1 rounded-md text-[10px] font-black uppercase tracking-wider ${
                          lead.status === 'New' ? 'bg-blue-100 text-blue-700' :
                          lead.status === 'Contacted' ? 'bg-purple-100 text-purple-700' :
                          lead.status === 'Proposal' ? 'bg-amber-100 text-amber-700' :
                          lead.status === 'Qualified' ? 'bg-emerald-100 text-emerald-700' : 'bg-slate-200 text-slate-600'
                        }`}>
                          {lead.status}
                        </span>
                        <span className={`text-[11px] font-bold ${lead.score === 'Hot' ? 'text-red-500' : lead.score === 'Warm' ? 'text-amber-500' : 'text-blue-500'}`}>
                          {lead.score === 'Hot' ? '🔥 High Priority' : lead.score === 'Warm' ? '☀️ Warm Lead' : '❄️ Cold Lead'}
                        </span>
                      </div>
                    </td>
                    <td className="px-4 py-4">
                      <span className="font-black text-slate-900">{fmt(lead.value)}</span>
                    </td>
                    <td className="px-4 py-4">
                      <div className="flex items-center gap-2 mb-1">
                        <div className="w-5 h-5 rounded-full bg-slate-200 flex items-center justify-center text-[9px] font-bold text-slate-600">{lead.agent.charAt(0)}</div>
                        <span className="text-xs font-bold text-slate-700">{lead.agent}</span>
                      </div>
                      <p className="text-[10px] font-medium text-slate-400 flex items-center gap-1"><Calendar className="w-3 h-3" /> {lead.lastContact}</p>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        <button className="p-2 bg-slate-100 hover:bg-orange-100 hover:text-orange-600 text-slate-600 rounded-lg transition-colors shadow-sm"><Mail className="w-4 h-4" /></button>
                        <button className="p-2 bg-slate-100 hover:bg-slate-200 text-slate-600 rounded-lg transition-colors shadow-sm"><MoreHorizontal className="w-4 h-4" /></button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          {/* Pagination Footer */}
          <div className="p-4 border-t border-slate-200 flex flex-col sm:flex-row justify-between items-center gap-4 bg-slate-50/50">
            <span className="text-sm font-medium text-slate-500">Showing <span className="font-bold text-slate-900">1</span> to <span className="font-bold text-slate-900">{filteredLeads.length}</span> of <span className="font-bold text-slate-900">1,248</span> entries</span>
            <div className="flex gap-2">
              <button className="px-3 py-1.5 bg-white border border-slate-300 rounded-lg text-slate-500 hover:bg-slate-50 flex items-center"><ChevronLeft className="w-4 h-4" /> Prev</button>
              <button className="px-3 py-1.5 bg-orange-600 text-white font-bold rounded-lg shadow-sm">1</button>
              <button className="px-3 py-1.5 bg-white border border-slate-300 rounded-lg text-slate-600 font-bold hover:bg-slate-50">2</button>
              <button className="px-3 py-1.5 bg-white border border-slate-300 rounded-lg text-slate-600 font-bold hover:bg-slate-50">3</button>
              <button className="px-3 py-1.5 bg-white border border-slate-300 rounded-lg text-slate-500 hover:bg-slate-50 flex items-center">Next <ChevronRight className="w-4 h-4" /></button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}