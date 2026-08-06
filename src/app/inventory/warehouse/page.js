'use client';
import { useState } from 'react';
import { 
  Building2, MapPin, Truck, ArrowRightLeft, CheckCircle2, 
  Clock, Plus, Search, Box, Download, AlertTriangle
} from 'lucide-react';

export default function Warehouse() {
  const [activeTab, setActiveTab] = useState("Locations");

  // --- MOCK WAREHOUSE DATA ---
  const locations = [
    { id: "WH-01", name: "Sylhet Primary HQ", type: "Main Distribution", manager: "Sourav D.", capacity: 85, items: 12450, value: "$850,000", status: "Operational" },
    { id: "WH-02", name: "Dhaka North Hub", type: "Regional Hub", manager: "Sarah Jenkins", capacity: 62, items: 8200, value: "$420,500", status: "Operational" },
    { id: "WH-03", name: "Chittagong Port Storage", type: "Transit Storage", manager: "Mike Ross", capacity: 95, items: 14500, value: "$1.2M", status: "Near Capacity" },
  ];

  const transfers = [
    { id: "TRN-9021", from: "Sylhet Primary HQ", to: "Dhaka North Hub", items: 145, value: "$12,500", status: "In Transit", date: "Today, 10:30 AM", driver: "Karim M." },
    { id: "TRN-9020", from: "Chittagong Port", to: "Sylhet Primary HQ", items: 850, value: "$145,000", status: "Delivered", date: "Yesterday", driver: "Third-Party Logistics" },
    { id: "TRN-9019", from: "Dhaka North Hub", to: "Sylhet Primary HQ", items: 12, value: "$850", status: "Pending Approval", date: "Today, 08:15 AM", driver: "TBD" },
    { id: "TRN-9018", from: "Sylhet Primary HQ", to: "Chittagong Port", items: 55, value: "$4,200", status: "In Transit", date: "Aug 4, 2026", driver: "Rafiq S." },
  ];

  return (
    <div className="min-h-screen bg-slate-50 font-sans p-4 sm:p-6 lg:p-8 text-slate-900">
      <div className="max-w-[1500px] mx-auto space-y-6">
        
        {/* ================= HEADER ================= */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
          <div>
            <h1 className="text-2xl sm:text-3xl font-black tracking-tight">Warehouse & Logistics</h1>
            <p className="text-sm font-medium text-slate-500 mt-1">Monitor branch capacities, routing, and internal stock transfers.</p>
          </div>
          <div className="flex gap-3">
            <button className="bg-slate-50 border border-slate-200 text-slate-700 px-5 py-2.5 rounded-xl font-bold hover:border-orange-400 transition-all flex items-center gap-2">
              <Download className="w-4 h-4" /> Export Log
            </button>
            <button className="bg-orange-600 hover:bg-orange-700 text-white px-5 py-2.5 rounded-xl font-bold shadow-sm transition-all flex items-center gap-2">
              <Truck className="w-4 h-4" /> New Transfer
            </button>
          </div>
        </div>

        {/* ================= KPI CARDS ================= */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm">
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2.5 bg-blue-50 text-blue-600 rounded-xl"><Building2 className="w-5 h-5" /></div>
              <p className="text-sm font-bold text-slate-500">Active Facilities</p>
            </div>
            <h3 className="text-2xl font-black text-slate-900 mt-2">3 Locations</h3>
          </div>
          <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm">
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2.5 bg-orange-50 text-orange-600 rounded-xl"><Truck className="w-5 h-5" /></div>
              <p className="text-sm font-bold text-slate-500">In Transit Value</p>
            </div>
            <h3 className="text-2xl font-black text-slate-900 mt-2">$16,700</h3>
          </div>
          <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm">
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2.5 bg-amber-50 text-amber-600 rounded-xl"><Clock className="w-5 h-5" /></div>
              <p className="text-sm font-bold text-slate-500">Pending Approvals</p>
            </div>
            <h3 className="text-2xl font-black text-slate-900 mt-2">12 Requests</h3>
          </div>
          <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm">
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2.5 bg-emerald-50 text-emerald-600 rounded-xl"><CheckCircle2 className="w-5 h-5" /></div>
              <p className="text-sm font-bold text-slate-500">Completed This Week</p>
            </div>
            <h3 className="text-2xl font-black text-slate-900 mt-2">48 Transfers</h3>
          </div>
        </div>

        {/* ================= TABS ================= */}
        <div className="flex gap-2 border-b border-slate-200 pb-px">
          {["Locations", "Stock Transfers"].map(tab => (
            <button 
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-3 text-sm font-bold transition-all border-b-2 ${
                activeTab === tab ? 'border-orange-600 text-orange-600' : 'border-transparent text-slate-500 hover:text-slate-900 hover:bg-slate-50 rounded-t-lg'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* ================= TAB CONTENT ================= */}
        {activeTab === "Locations" ? (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {locations.map((loc) => (
              <div key={loc.id} className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:border-orange-300 transition-colors flex flex-col">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-lg font-black text-slate-900 flex items-center gap-2">
                      <MapPin className="w-5 h-5 text-orange-500" /> {loc.name}
                    </h3>
                    <p className="text-xs font-bold text-slate-500 mt-1 uppercase tracking-wider">{loc.type} • {loc.id}</p>
                  </div>
                  <span className={`text-[10px] font-bold px-2 py-1 rounded-md border ${
                    loc.status === 'Operational' ? 'bg-emerald-50 text-emerald-700 border-emerald-200' : 'bg-amber-50 text-amber-700 border-amber-200 animate-pulse'
                  }`}>
                    {loc.status}
                  </span>
                </div>

                <div className="mt-2 space-y-4 flex-1">
                  <div className="flex justify-between items-center text-sm">
                    <span className="font-bold text-slate-500">Manager:</span>
                    <span className="font-bold text-slate-900">{loc.manager}</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="font-bold text-slate-500">Total Items:</span>
                    <span className="font-black text-slate-900">{loc.items.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="font-bold text-slate-500">Est. Value:</span>
                    <span className="font-black text-emerald-600">{loc.value}</span>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-slate-100">
                  <div className="flex justify-between items-end mb-2">
                    <span className="text-xs font-bold text-slate-500 uppercase">Capacity Usage</span>
                    <span className={`text-sm font-black ${loc.capacity > 90 ? 'text-rose-600' : 'text-slate-900'}`}>{loc.capacity}%</span>
                  </div>
                  <div className="w-full bg-slate-100 rounded-full h-2.5 overflow-hidden">
                    <div 
                      className={`h-full rounded-full transition-all ${loc.capacity > 90 ? 'bg-rose-500' : loc.capacity > 75 ? 'bg-amber-500' : 'bg-emerald-500'}`} 
                      style={{ width: `${loc.capacity}%` }}
                    ></div>
                  </div>
                </div>

                <button className="w-full mt-6 py-2.5 bg-slate-50 hover:bg-slate-100 border border-slate-200 rounded-xl text-sm font-bold text-slate-600 transition-colors">
                  View Inventory
                </button>
              </div>
            ))}
            
            {/* Add New Location Card */}
            <div className="bg-slate-50 border-2 border-dashed border-slate-300 rounded-2xl p-6 flex flex-col items-center justify-center text-slate-400 hover:text-orange-600 hover:border-orange-300 hover:bg-orange-50 transition-colors cursor-pointer min-h-[300px]">
              <div className="w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center mb-4">
                <Plus className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold">Register New Facility</h3>
              <p className="text-xs font-medium text-center mt-2 max-w-[200px]">Add a new warehouse, transit hub, or store backroom.</p>
            </div>
          </div>
        ) : (
          /* ================= TRANSFERS TABLE ================= */
          <div className="bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden flex flex-col">
            <div className="p-4 border-b border-slate-200 flex justify-between items-center bg-slate-50/50">
              <div className="relative w-80">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input 
                  type="text" 
                  placeholder="Search Transfer ID..." 
                  className="w-full pl-9 pr-4 py-2 bg-white border border-slate-300 rounded-lg text-sm focus:outline-none focus:border-orange-500 transition-all"
                />
              </div>
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm text-slate-600 min-w-[1000px]">
                <thead className="bg-slate-50 text-slate-500 font-bold uppercase text-[10px] tracking-wider border-b border-slate-200">
                  <tr>
                    <th className="px-6 py-4">Transfer Details</th>
                    <th className="px-6 py-4">Route</th>
                    <th className="px-6 py-4">Status & Timeline</th>
                    <th className="px-6 py-4">Cargo Info</th>
                    <th className="px-6 py-4 text-right">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {transfers.map((trn) => (
                    <tr key={trn.id} className="hover:bg-orange-50/30 transition-colors group">
                      <td className="px-6 py-4">
                        <p className="font-black text-slate-900">{trn.id}</p>
                        <p className="text-[10px] font-bold text-slate-400 uppercase mt-0.5">Driver: {trn.driver}</p>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <span className="font-bold text-slate-700">{trn.from}</span>
                          <ArrowRightLeft className="w-4 h-4 text-orange-400" />
                          <span className="font-bold text-slate-900">{trn.to}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <span className={`px-2.5 py-1 rounded-md text-[10px] font-black uppercase tracking-wider border mb-1.5 inline-block ${
                          trn.status === 'Delivered' ? 'bg-emerald-50 text-emerald-700 border-emerald-200' :
                          trn.status === 'In Transit' ? 'bg-blue-50 text-blue-700 border-blue-200' : 'bg-amber-50 text-amber-700 border-amber-200'
                        }`}>
                          {trn.status}
                        </span>
                        <p className="text-[10px] font-bold text-slate-500 flex items-center gap-1"><Clock className="w-3 h-3" /> {trn.date}</p>
                      </td>
                      <td className="px-6 py-4">
                        <p className="text-sm font-bold text-slate-700 flex items-center gap-1.5"><Box className="w-4 h-4 text-slate-400" /> {trn.items} Units</p>
                        <p className="text-[11px] font-black text-emerald-600 mt-1">{trn.value}</p>
                      </td>
                      <td className="px-6 py-4 text-right">
                        <button className="px-4 py-1.5 bg-white border border-slate-200 hover:border-orange-300 hover:text-orange-600 text-slate-600 text-xs font-bold rounded-lg transition-all shadow-sm">
                          Review
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}