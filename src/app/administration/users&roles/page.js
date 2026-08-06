'use client';
import { useState } from 'react';
import { 
  Users, Shield, UserPlus, Search, Filter, MoreHorizontal, 
  CheckSquare, Mail, Phone, Lock, ChevronLeft, ChevronRight 
} from 'lucide-react';

export default function UsersRoles() {
  const [search, setSearch] = useState("");
  const [roleFilter, setRoleFilter] = useState("All");
  const [selectedUsers, setSelectedUsers] = useState(new Set());

  // --- MOCK USERS DATA ---
  const users = [
    { id: "USR-001", name: "Sourav Das Gupta", email: "sourav@crack404.com", role: "Super Admin", branch: "Sylhet HQ", status: "Active", lastLogin: "Today, 06:12 PM" },
    { id: "USR-002", name: "Sarah Jenkins", email: "sarah.j@crack404.com", role: "Branch Manager", branch: "Dhaka Hub", status: "Active", lastLogin: "Today, 02:45 PM" },
    { id: "USR-003", name: "Tahmid", email: "tahmid@crack404.com", role: "POS Cashier", branch: "Sylhet HQ", status: "Active", lastLogin: "Yesterday" },
    { id: "USR-004", name: "Mike Ross", email: "mike.r@crack404.com", role: "Inventory Clerk", branch: "Chittagong", status: "Inactive", lastLogin: "3 days ago" },
    { id: "USR-005", name: "Amanda Barnes", email: "amanda.b@crack404.com", role: "HR Manager", branch: "Sylhet HQ", status: "Active", lastLogin: "Today, 09:10 AM" },
  ];

  const filteredUsers = users.filter(user => 
    (roleFilter === "All" || user.role === roleFilter) &&
    (user.name.toLowerCase().includes(search.toLowerCase()) || user.email.toLowerCase().includes(search.toLowerCase()))
  );

  const toggleSelect = (id) => {
    const newSet = new Set(selectedUsers);
    newSet.has(id) ? newSet.delete(id) : newSet.add(id);
    setSelectedUsers(newSet);
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans p-4 sm:p-6 lg:p-8 text-slate-900">
      <div className="max-w-[1500px] mx-auto space-y-6">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
          <div>
            <h1 className="text-2xl sm:text-3xl font-black tracking-tight">Users & Access Control</h1>
            <p className="text-sm font-medium text-slate-500 mt-1">Manage system accounts, security roles, and branch permissions.</p>
          </div>
          <button className="bg-orange-600 hover:bg-orange-700 text-white px-5 py-2.5 rounded-xl font-bold shadow-sm transition-all flex items-center justify-center gap-2">
            <UserPlus className="w-4 h-4" /> Add New User
          </button>
        </div>

        {/* Data Table */}
        <div className="bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden flex flex-col">
          
          <div className="p-4 border-b border-slate-200 flex flex-col lg:flex-row gap-4 justify-between items-center bg-slate-50/50">
            <div className="flex items-center gap-4 w-full lg:w-auto">
              {selectedUsers.size > 0 ? (
                <div className="flex items-center gap-3 bg-orange-50 border border-orange-200 px-4 py-2 rounded-lg text-sm text-orange-700 font-bold animate-pulse">
                  <span>{selectedUsers.size} Selected</span>
                  <div className="w-px h-4 bg-orange-300"></div>
                  <button className="hover:text-orange-900">Reset Password</button>
                  <button className="hover:text-red-600">Suspend Account</button>
                </div>
              ) : (
                <div className="flex items-center gap-2 w-full sm:w-auto">
                  <select 
                    value={roleFilter} 
                    onChange={(e) => setRoleFilter(e.target.value)}
                    className="w-full sm:w-auto bg-white border border-slate-300 rounded-lg px-3 py-2 text-sm font-medium text-slate-700 focus:outline-none focus:border-orange-500 transition-all"
                  >
                    <option value="All">All Roles</option>
                    <option value="Super Admin">Super Admin</option>
                    <option value="Branch Manager">Branch Manager</option>
                    <option value="POS Cashier">POS Cashier</option>
                    <option value="Inventory Clerk">Inventory Clerk</option>
                    <option value="HR Manager">HR Manager</option>
                  </select>
                </div>
              )}
            </div>

            <div className="relative w-full lg:w-80">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input 
                type="text" 
                placeholder="Search user name or email..." 
                className="w-full pl-9 pr-4 py-2 bg-white border border-slate-300 rounded-lg text-sm focus:outline-none focus:border-orange-500 transition-all"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
          </div>

          <div className="overflow-x-auto hide-scrollbar">
            <table className="w-full text-left text-sm text-slate-600 min-w-[1000px]">
              <thead className="bg-slate-50 text-slate-500 font-bold uppercase text-[10px] tracking-wider border-b border-slate-200">
                <tr>
                  <th className="px-6 py-4 w-12">
                    <button onClick={() => setSelectedUsers(selectedUsers.size === filteredUsers.length ? new Set() : new Set(filteredUsers.map(u => u.id)))}>
                      <CheckSquare className={`w-5 h-5 ${selectedUsers.size > 0 ? 'text-orange-500' : 'text-slate-300'}`} />
                    </button>
                  </th>
                  <th className="px-4 py-4">User Profile</th>
                  <th className="px-4 py-4">Assigned Role</th>
                  <th className="px-4 py-4">Branch Assignment</th>
                  <th className="px-4 py-4">Status & Last Login</th>
                  <th className="px-6 py-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {filteredUsers.map((user) => (
                  <tr key={user.id} className={`hover:bg-slate-50 transition-colors group ${selectedUsers.has(user.id) ? 'bg-orange-50/30' : ''}`}>
                    <td className="px-6 py-4">
                      <button onClick={() => toggleSelect(user.id)}>
                        <CheckSquare className={`w-5 h-5 transition-colors ${selectedUsers.has(user.id) ? 'text-orange-500' : 'text-slate-300 group-hover:text-slate-400'}`} />
                      </button>
                    </td>
                    <td className="px-4 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center font-black text-xs shrink-0">
                          {user.name.charAt(0)}
                        </div>
                        <div>
                          <p className="font-bold text-slate-900 text-sm">{user.name}</p>
                          <p className="text-xs text-slate-500">{user.email}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-4 py-4">
                      <span className="px-3 py-1 rounded-full text-xs font-bold bg-slate-100 text-slate-700 border border-slate-200 flex items-center gap-1.5 w-fit">
                        <Shield className="w-3.5 h-3.5 text-orange-500" /> {user.role}
                      </span>
                    </td>
                    <td className="px-4 py-4 font-bold text-slate-700">{user.branch}</td>
                    <td className="px-4 py-4">
                      <span className={`text-[10px] font-bold px-2.5 py-1 rounded-md border whitespace-nowrap inline-block mb-1 ${
                        user.status === 'Active' ? 'bg-emerald-50 text-emerald-700 border-emerald-200' : 'bg-slate-100 text-slate-600 border-slate-200'
                      }`}>
                        {user.status}
                      </span>
                      <p className="text-[10px] text-slate-400">Last: {user.lastLogin}</p>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <button className="p-2 bg-white border border-slate-200 hover:border-orange-300 hover:text-orange-600 text-slate-600 rounded-lg transition-all shadow-sm">
                        <MoreHorizontal className="w-4 h-4" />
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