'use client';
import { useState } from 'react';
import { Search, Filter, ArrowUpRight, ArrowDownRight, Receipt, CreditCard, Banknote } from 'lucide-react';

export default function Transactions() {
  const [search, setSearch] = useState("");

  // Mock Transaction Data
  const transactions = [
    { id: "TXN-9021", date: "Aug 5, 2026 - 10:30 AM", type: "Sale", method: "Card", amount: 245.00, status: "Completed" },
    { id: "TXN-9020", date: "Aug 5, 2026 - 10:15 AM", type: "Refund", method: "Cash", amount: -45.50, status: "Completed" },
    { id: "TXN-9019", date: "Aug 5, 2026 - 09:45 AM", type: "Sale", method: "Wallet", amount: 120.00, status: "Completed" },
    { id: "TXN-9018", date: "Aug 4, 2026 - 04:20 PM", type: "Sale", method: "Cash", amount: 35.99, status: "Pending" },
    { id: "TXN-9017", date: "Aug 4, 2026 - 02:10 PM", type: "Sale", method: "Card", amount: 890.00, status: "Completed" },
  ];

  return (
    <div className="min-h-screen bg-slate-50 font-sans p-4 sm:p-6 lg:p-8 text-slate-900">
      <div className="max-w-7xl mx-auto space-y-6">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
          <div>
            <h1 className="text-2xl sm:text-3xl font-black tracking-tight">Transactions</h1>
            <p className="text-sm font-medium text-slate-500 mt-1">Monitor your store's financial activity.</p>
          </div>
          <button className="bg-orange-600 hover:bg-orange-700 text-white px-5 py-2.5 rounded-xl font-bold shadow-sm transition-colors flex items-center gap-2">
            <Receipt className="w-4 h-4" /> Export Report
          </button>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm">
            <p className="text-sm font-bold text-slate-500 mb-1">Today's Revenue</p>
            <h3 className="text-2xl font-black text-slate-900">$1,245.00</h3>
          </div>
          <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm">
            <p className="text-sm font-bold text-slate-500 mb-1">Card Payments</p>
            <h3 className="text-2xl font-black text-slate-900">$890.00</h3>
          </div>
          <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm">
            <p className="text-sm font-bold text-slate-500 mb-1">Refunds Processed</p>
            <h3 className="text-2xl font-black text-red-600">-$45.50</h3>
          </div>
        </div>

        {/* Transaction Table Area */}
        <div className="bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden flex flex-col">
          
          {/* Toolbar */}
          <div className="p-4 border-b border-slate-200 flex flex-col sm:flex-row gap-3 justify-between items-center bg-slate-50/50">
            <div className="relative w-full sm:w-80">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input 
                type="text" 
                placeholder="Search by TXN ID..." 
                className="w-full pl-9 pr-4 py-2 bg-white border border-slate-300 rounded-lg text-sm focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
            <button className="flex items-center gap-2 text-sm font-bold text-slate-600 bg-white border border-slate-300 px-4 py-2 rounded-lg hover:bg-slate-50 transition-colors w-full sm:w-auto justify-center">
              <Filter className="w-4 h-4" /> Filter
            </button>
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm text-slate-600">
              <thead className="bg-slate-50 text-slate-500 font-bold uppercase text-xs">
                <tr>
                  <th className="px-6 py-4">Transaction ID</th>
                  <th className="px-6 py-4">Date & Time</th>
                  <th className="px-6 py-4">Payment Method</th>
                  <th className="px-6 py-4">Amount</th>
                  <th className="px-6 py-4">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {transactions.map((txn, i) => (
                  <tr key={i} className="hover:bg-orange-50/30 transition-colors">
                    <td className="px-6 py-4 font-bold text-slate-900">{txn.id}</td>
                    <td className="px-6 py-4">{txn.date}</td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2 font-medium text-slate-700">
                        {txn.method === 'Card' ? <CreditCard className="w-4 h-4 text-blue-500" /> : <Banknote className="w-4 h-4 text-emerald-500" />}
                        {txn.method}
                      </div>
                    </td>
                    <td className="px-6 py-4 font-black">
                      <div className={`flex items-center gap-1 ${txn.amount > 0 ? 'text-emerald-600' : 'text-red-600'}`}>
                        {txn.amount > 0 ? <ArrowUpRight className="w-4 h-4" /> : <ArrowDownRight className="w-4 h-4" />}
                        ${Math.abs(txn.amount).toFixed(2)}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                        txn.status === 'Completed' ? 'bg-emerald-100 text-emerald-700 border border-emerald-200' : 'bg-amber-100 text-amber-700 border border-amber-200'
                      }`}>
                        {txn.status}
                      </span>
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