'use client';
import { useState } from 'react';
import { 
  Search, Users, Wallet, Award, Filter, Mail, Phone, MoreHorizontal, 
  ExternalLink, UserPlus, Tags, CheckSquare, ChevronLeft, ChevronRight, Download
} from 'lucide-react';

export default function Contacts() {
  const [search, setSearch] = useState("");
  const [tierFilter, setTierFilter] = useState("All");
  const [selectedContacts, setSelectedContacts] = useState(new Set());

  // Expanded Enterprise Mock Data for Contacts
  const contacts = [
    { id: "CST-8821", name: "TechCorp Inc.", contactPerson: "James Wilson", email: "billing@techcorp.com", phone: "+1 (555) 111-2222", tier: "Gold", tags: ["B2B", "Enterprise"], wallet: 145.50, points: 450, lifetimeValue: 12450.00, outstanding: 0, health: "Excellent" },
    { id: "CST-8822", name: "Sarah Jenkins", contactPerson: "Sarah Jenkins", email: "s.jenkins@email.com", phone: "+1 (555) 333-4444", tier: "Silver", tags: ["Retail", "Frequent"], wallet: 12.00, points: 120, lifetimeValue: 890.50, outstanding: 45.00, health: "Good" },
    { id: "CST-8823", name: "Global Solutions", contactPerson: "Amanda Barnes", email: "procurement@global.net", phone: "+1 (555) 555-6666", tier: "Platinum", tags: ["B2B", "VIP"], wallet: 500.00, points: 2100, lifetimeValue: 45000.00, outstanding: 1200.00, health: "Excellent" },
    { id: "CST-8824", name: "Mike Ross", contactPerson: "Mike Ross", email: "mike.r@email.com", phone: "+1 (555) 777-8888", tier: "Bronze", tags: ["Retail", "Churn Risk"], wallet: 0.00, points: 45, lifetimeValue: 120.00, outstanding: 0, health: "At Risk" },
    { id: "CST-8825", name: "Alpha Industries", contactPerson: "Robert Chen", email: "rchen@alpha.io", phone: "+1 (555) 999-0000", tier: "Gold", tags: ["B2B", "International"], wallet: 85.00, points: 890, lifetimeValue: 8400.00, outstanding: 0, health: "Good" },
    { id: "CST-8826", name: "Omega Systems", contactPerson: "Linda Gray", email: "linda@omega.com", phone: "+1 (555) 123-9876", tier: "Platinum", tags: ["Partner", "VIP"], wallet: 1200.00, points: 5400, lifetimeValue: 89000.00, outstanding: 0, health: "Excellent" },
    { id: "CST-8827", name: "Tom Baker", contactPerson: "Tom Baker", email: "tom.b@email.com", phone: "+1 (555) 456-1234", tier: "Silver", tags: ["Retail"], wallet: 45.00, points: 230, lifetimeValue: 1450.00, outstanding: 120.00, health: "Good" },
  ];

  const filteredContacts = contacts.filter(contact => 
    (tierFilter === "All" || contact.tier === tierFilter) &&
    (contact.name.toLowerCase().includes(search.toLowerCase()) || contact.email.toLowerCase().includes(search.toLowerCase()) || contact.id.toLowerCase().includes(search.toLowerCase()))
  );

  const toggleSelect = (id) => {
    const newSet = new Set(selectedContacts);
    newSet.has(id) ? newSet.delete(id) : newSet.add(id);
    setSelectedContacts(newSet);
  };

  const fmt = (n) => `$${Number(n).toLocaleString('en-US', {minimumFractionDigits: 2, maximumFractionDigits: 2})}`;

  return (
    <div className="min-h-screen bg-slate-50 font-sans p-4 sm:p-6 lg:p-8 text-slate-900">
      <div className="max-w-[1400px] mx-auto space-y-6">
        
        {/* Header Section */}
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
          <div>
            <h1 className="text-2xl sm:text-3xl font-black tracking-tight">Customer Directory</h1>
            <p className="text-sm font-medium text-slate-500 mt-1">Unified view of client financials, loyalty profiles, and health scores.</p>
          </div>
          <div className="flex gap-3">
            <button className="bg-white border border-slate-300 text-slate-700 px-4 py-2.5 rounded-xl font-bold shadow-sm transition-colors hover:bg-slate-50 flex items-center gap-2">
              <Download className="w-4 h-4" /> Export CSV
            </button>
            <button className="bg-orange-600 hover:bg-orange-700 text-white px-5 py-2.5 rounded-xl font-bold shadow-sm transition-colors flex items-center justify-center gap-2">
              <Users className="w-4 h-4" /> New Customer
            </button>
          </div>
        </div>

        {/* Massive KPI Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm">
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2.5 bg-blue-50 text-blue-600 rounded-xl"><Users className="w-5 h-5" /></div>
              <p className="text-sm font-bold text-slate-500">Total Active</p>
            </div>
            <h3 className="text-2xl font-black text-slate-900 mt-2">1,402</h3>
          </div>

          <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm">
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2.5 bg-emerald-50 text-emerald-600 rounded-xl"><Wallet className="w-5 h-5" /></div>
              <p className="text-sm font-bold text-slate-500">Total Wallet Balances</p>
            </div>
            <h3 className="text-2xl font-black text-slate-900 mt-2">$12,450.50</h3>
          </div>

          <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm">
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2.5 bg-red-50 text-red-600 rounded-xl"><Award className="w-5 h-5" /></div>
              <p className="text-sm font-bold text-slate-500">Outstanding Receivables</p>
            </div>
            <h3 className="text-2xl font-black text-red-600 mt-2">$3,420.00</h3>
          </div>

          <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm">
            <div className="flex justify-between items-start mb-2">
              <div className="flex items-center gap-3">
                <div className="p-2.5 bg-amber-50 text-amber-600 rounded-xl"><Award className="w-5 h-5" /></div>
                <p className="text-sm font-bold text-slate-500">VIP / Platinum Ratio</p>
              </div>
            </div>
            <h3 className="text-2xl font-black text-slate-900 mt-2">18.5%</h3>
          </div>
        </div>

        {/* Data Table Area */}
        <div className="bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden flex flex-col">
          
          {/* Advanced Toolbar */}
          <div className="p-4 border-b border-slate-200 flex flex-col lg:flex-row gap-4 justify-between items-center bg-slate-50/50">
            
            <div className="flex items-center gap-4 w-full lg:w-auto">
              {/* Bulk Actions */}
              {selectedContacts.size > 0 ? (
                <div className="flex items-center gap-3 bg-orange-50 border border-orange-200 px-4 py-2 rounded-lg text-sm text-orange-700 font-bold animate-pulse">
                  <span>{selectedContacts.size} Selected</span>
                  <div className="w-px h-4 bg-orange-300"></div>
                  <button className="hover:text-orange-900">Email Campaign</button>
                  <button className="hover:text-orange-900">Add Tags</button>
                  <button className="hover:text-red-600">Suspend</button>
                </div>
              ) : (
                <div className="flex items-center gap-2 w-full sm:w-auto">
                  <span className="text-sm font-bold text-slate-500 whitespace-nowrap">Tier Filter:</span>
                  <select 
                    value={tierFilter} 
                    onChange={(e) => setTierFilter(e.target.value)}
                    className="w-full sm:w-auto bg-white border border-slate-300 rounded-lg px-3 py-2 text-sm font-medium text-slate-700 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-all"
                  >
                    <option value="All">All Loyalty Tiers</option>
                    <option value="Platinum">Platinum Members</option>
                    <option value="Gold">Gold Members</option>
                    <option value="Silver">Silver Members</option>
                    <option value="Bronze">Bronze Members</option>
                  </select>
                </div>
              )}
            </div>

            <div className="flex gap-3 w-full lg:w-auto">
              <div className="relative w-full lg:w-80">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input 
                  type="text" 
                  placeholder="Search by name, ID, or email..." 
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

          {/* Expanded Table */}
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm text-slate-600 min-w-[1100px]">
              <thead className="bg-slate-50 text-slate-500 font-bold uppercase text-[11px] tracking-wider border-b border-slate-200">
                <tr>
                  <th className="px-6 py-4 w-12">
                    <button onClick={() => setSelectedContacts(selectedContacts.size === filteredContacts.length ? new Set() : new Set(filteredContacts.map(c => c.id)))}>
                      <CheckSquare className={`w-5 h-5 ${selectedContacts.size > 0 ? 'text-orange-500' : 'text-slate-300'}`} />
                    </button>
                  </th>
                  <th className="px-4 py-4">Client Profile</th>
                  <th className="px-4 py-4">Contact Info</th>
                  <th className="px-4 py-4">Segments & Health</th>
                  <th className="px-4 py-4">Financials (LTV & Wallet)</th>
                  <th className="px-6 py-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {filteredContacts.map((contact) => (
                  <tr key={contact.id} className={`hover:bg-orange-50/30 transition-colors group ${selectedContacts.has(contact.id) ? 'bg-orange-50/50' : ''}`}>
                    <td className="px-6 py-4">
                      <button onClick={() => toggleSelect(contact.id)}>
                        <CheckSquare className={`w-5 h-5 transition-colors ${selectedContacts.has(contact.id) ? 'text-orange-500' : 'text-slate-300 group-hover:text-slate-400'}`} />
                      </button>
                    </td>
                    <td className="px-4 py-4">
                      <div className="flex items-center gap-3">
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center font-black text-xs ${
                          contact.tier === 'Platinum' ? 'bg-slate-900 text-slate-100' :
                          contact.tier === 'Gold' ? 'bg-amber-100 text-amber-700' :
                          contact.tier === 'Silver' ? 'bg-slate-200 text-slate-600' : 'bg-orange-100 text-orange-800'
                        }`}>
                          {contact.name.charAt(0)}
                        </div>
                        <div>
                          <p className="font-bold text-slate-900 text-sm">{contact.name}</p>
                          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mt-0.5">{contact.id}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-4 py-4 space-y-1.5">
                      <p className="text-xs font-bold text-slate-700 flex items-center gap-1.5"><UserPlus className="w-3.5 h-3.5 text-slate-400" /> {contact.contactPerson}</p>
                      <div className="flex items-center gap-1.5 text-xs font-medium"><Mail className="w-3.5 h-3.5 text-slate-400" /> {contact.email}</div>
                      <div className="flex items-center gap-1.5 text-xs font-medium"><Phone className="w-3.5 h-3.5 text-slate-400" /> {contact.phone}</div>
                    </td>
                    <td className="px-4 py-4">
                      <div className="flex flex-wrap gap-1.5 mb-2">
                        {contact.tags.map(tag => (
                          <span key={tag} className="px-2 py-0.5 rounded text-[10px] font-bold bg-slate-100 text-slate-600 border border-slate-200 flex items-center gap-1">
                            <Tags className="w-2.5 h-2.5" /> {tag}
                          </span>
                        ))}
                      </div>
                      <span className={`text-[11px] font-bold px-2 py-0.5 rounded-full border ${
                        contact.health === 'Excellent' ? 'bg-emerald-50 text-emerald-600 border-emerald-200' :
                        contact.health === 'Good' ? 'bg-blue-50 text-blue-600 border-blue-200' : 'bg-red-50 text-red-600 border-red-200'
                      }`}>
                        Health: {contact.health}
                      </span>
                    </td>
                    <td className="px-4 py-4">
                      <div className="grid grid-cols-2 gap-x-4 gap-y-1 min-w-[180px]">
                        <p className="text-[11px] font-bold text-slate-500">LTV:</p>
                        <p className="text-[11px] font-black text-slate-900 text-right">{fmt(contact.lifetimeValue)}</p>
                        
                        <p className="text-[11px] font-bold text-slate-500">Wallet:</p>
                        <p className="text-[11px] font-black text-emerald-600 text-right">{fmt(contact.wallet)}</p>
                        
                        {contact.outstanding > 0 && (
                          <>
                            <p className="text-[11px] font-bold text-red-400">Arrears:</p>
                            <p className="text-[11px] font-black text-red-600 text-right">-{fmt(contact.outstanding)}</p>
                          </>
                        )}
                      </div>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        <button className="p-2 bg-white border border-slate-200 hover:border-orange-300 hover:text-orange-600 text-slate-600 rounded-lg transition-all shadow-sm"><ExternalLink className="w-4 h-4" /></button>
                        <button className="p-2 bg-white border border-slate-200 hover:border-slate-300 hover:text-slate-900 text-slate-600 rounded-lg transition-all shadow-sm"><MoreHorizontal className="w-4 h-4" /></button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination Footer */}
          <div className="p-4 border-t border-slate-200 flex flex-col sm:flex-row justify-between items-center gap-4 bg-slate-50/50">
            <span className="text-sm font-medium text-slate-500">Showing <span className="font-bold text-slate-900">1</span> to <span className="font-bold text-slate-900">{filteredContacts.length}</span> of <span className="font-bold text-slate-900">1,402</span> contacts</span>
            <div className="flex gap-2">
              <button className="px-3 py-1.5 bg-white border border-slate-300 rounded-lg text-slate-500 hover:bg-slate-50 flex items-center"><ChevronLeft className="w-4 h-4" /> Prev</button>
              <button className="px-3 py-1.5 bg-orange-600 text-white font-bold rounded-lg shadow-sm">1</button>
              <button className="px-3 py-1.5 bg-white border border-slate-300 rounded-lg text-slate-600 font-bold hover:bg-slate-50">2</button>
              <button className="px-3 py-1.5 bg-white border border-slate-300 rounded-lg text-slate-600 font-bold hover:bg-slate-50">3</button>
              <button className="px-3 py-1.5 bg-white border border-slate-300 rounded-lg text-slate-600 font-bold hover:bg-slate-50">...</button>
              <button className="px-3 py-1.5 bg-white border border-slate-300 rounded-lg text-slate-500 hover:bg-slate-50 flex items-center">Next <ChevronRight className="w-4 h-4" /></button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}