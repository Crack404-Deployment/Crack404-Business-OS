'use client';
import { useState } from 'react';
import { ShoppingBag, Search, Clock, CheckCircle, MoreHorizontal } from 'lucide-react';

export default function Orders() {
  const [activeTab, setActiveTab] = useState("All");

  // Mock Order Data
  const orders = [
    { id: "ORD-5012", customer: "Walk-in Customer", items: 3, total: 145.00, time: "10 mins ago", status: "Completed" },
    { id: "ORD-5011", customer: "TechCorp Inc.", items: 12, total: 1240.50, time: "1 hour ago", status: "Pending" },
    { id: "ORD-5010", customer: "Sarah Jenkins", items: 1, total: 45.00, time: "3 hours ago", status: "Completed" },
    { id: "ORD-5009", customer: "Mike Ross", items: 2, total: 85.99, time: "Yesterday", status: "Completed" },
  ];

  return (
    <div className="min-h-screen bg-slate-50 font-sans p-4 sm:p-6 lg:p-8 text-slate-900">
      <div className="max-w-7xl mx-auto space-y-6">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
          <div>
            <h1 className="text-2xl sm:text-3xl font-black tracking-tight">Order Management</h1>
            <p className="text-sm font-medium text-slate-500 mt-1">View and manage POS and online orders.</p>
          </div>
          <button className="bg-orange-600 hover:bg-orange-700 text-white px-5 py-2.5 rounded-xl font-bold shadow-sm transition-colors flex items-center gap-2">
            <ShoppingBag className="w-4 h-4" /> Create Order
          </button>
        </div>

        {/* Search and Tabs */}
        <div className="bg-white border border-slate-200 rounded-2xl p-2 flex flex-col sm:flex-row justify-between items-center shadow-sm gap-4">
          <div className="flex gap-1 w-full sm:w-auto p-1">
            {["All", "Pending", "Completed", "Cancelled"].map(tab => (
              <button 
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 rounded-lg text-sm font-bold transition-all flex-1 sm:flex-none ${
                  activeTab === tab ? 'bg-orange-50 text-orange-600' : 'text-slate-500 hover:text-slate-900 hover:bg-slate-50'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
          <div className="relative w-full sm:w-64 pr-2 pb-2 sm:pb-0">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input 
              type="text" 
              placeholder="Search orders..." 
              className="w-full pl-9 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:outline-none focus:border-orange-500"
            />
          </div>
        </div>

        {/* Order List */}
        <div className="space-y-3">
          {orders.map((order, i) => (
            <div key={i} className="bg-white border border-slate-200 rounded-2xl p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-sm hover:shadow-md hover:border-orange-200 transition-all">
              
              {/* Order Info */}
              <div className="flex items-center gap-4">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                  order.status === 'Completed' ? 'bg-emerald-50 text-emerald-600' : 'bg-amber-50 text-amber-600'
                }`}>
                  {order.status === 'Completed' ? <CheckCircle className="w-6 h-6" /> : <Clock className="w-6 h-6" />}
                </div>
                <div>
                  <h3 className="text-lg font-black text-slate-900">{order.id}</h3>
                  <p className="text-sm font-medium text-slate-500">{order.customer}</p>
                </div>
              </div>

              {/* Order Details & Action */}
              <div className="flex items-center justify-between sm:justify-end gap-6 sm:gap-12 w-full sm:w-auto border-t sm:border-0 border-slate-100 pt-4 sm:pt-0">
                <div className="text-left sm:text-right">
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Items</p>
                  <p className="text-sm font-bold text-slate-700">{order.items} Items</p>
                </div>
                
                <div className="text-left sm:text-right">
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Total</p>
                  <p className="text-base font-black text-orange-600">${order.total.toFixed(2)}</p>
                </div>
                
                <div className="text-left sm:text-right hidden md:block">
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Time</p>
                  <p className="text-sm font-bold text-slate-700">{order.time}</p>
                </div>

                <button className="p-2 text-slate-400 hover:text-orange-600 hover:bg-orange-50 rounded-lg transition-colors">
                  <MoreHorizontal className="w-5 h-5" />
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </div>
  );
}