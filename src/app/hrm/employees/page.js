'use client';
import { useState } from 'react';
import { 
  Search, Filter, Plus, Mail, Phone, MoreHorizontal, 
  CheckSquare, ChevronLeft, ChevronRight, Briefcase, 
  Building2, UserPlus, MapPin
} from 'lucide-react';

export default function EmployeesDirectory() {
  const [search, setSearch] = useState("");
  const [deptFilter, setDeptFilter] = useState("All");
  const [selectedEmployees, setSelectedEmployees] = useState(new Set());

  // --- MOCK EMPLOYEE DATA ---
  const employees = [
    { id: "EMP-001", name: "Sourav Das Gupta", role: "System Architect", dept: "Engineering", email: "sourav@crack404.com", phone: "+880 1711-000000", branch: "Sylhet HQ", status: "Active" },
    { id: "EMP-002", name: "Sarah Jenkins", role: "Store Manager", dept: "Sales & Retail", email: "sarah.j@crack404.com", phone: "+880 1722-000000", branch: "Dhaka Hub", status: "Active" },
    { id: "EMP-003", name: "Tahmid", role: "Senior Sales Exec", dept: "Sales & Retail", email: "tahmid@crack404.com", phone: "+880 1733-000000", branch: "Sylhet HQ", status: "Active" },
    { id: "EMP-004", name: "Mike Ross", role: "Hardware Tech", dept: "Support", email: "mike.r@crack404.com", phone: "+880 1744-000000", branch: "Chittagong", status: "On Leave" },
    { id: "EMP-005", name: "Amanda Barnes", role: "HR Manager", dept: "Operations", email: "amanda.b@crack404.com", phone: "+880 1755-000000", branch: "Sylhet HQ", status: "Active" },
    { id: "EMP-006", name: "David Chen", role: "Logistics Coord", dept: "Operations", email: "david.c@crack404.com", phone: "+880 1766-000000", branch: "Dhaka Hub", status: "Active" },
    { id: "EMP-007", name: "Emma Wilson", role: "Frontend Dev", dept: "Engineering", email: "emma.w@crack404.com", phone: "+880 1777-000000", branch: "Remote", status: "Active" },
  ];

  const filteredEmployees = employees.filter(emp => 
    (deptFilter === "All" || emp.dept === deptFilter) &&
    (emp.name.toLowerCase().includes(search.toLowerCase()) || emp.id.toLowerCase().includes(search.toLowerCase()))
  );

  const toggleSelect = (id) => {
    const newSet = new Set(selectedEmployees);
    newSet.has(id) ? newSet.delete(id) : newSet.add(id);
    setSelectedEmployees(newSet);
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans p-4 sm:p-6 lg:p-8 text-slate-900">
      <div className="max-w-[1500px] mx-auto space-y-6">
        
        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
          <div>
            <h1 className="text-2xl sm:text-3xl font-black tracking-tight">Employee Directory</h1>
            <p className="text-sm font-medium text-slate-500 mt-1">Manage staff profiles, roles, and contact information.</p>
          </div>
          <div className="flex gap-3">
            <button className="bg-orange-600 hover:bg-orange-700 text-white px-5 py-2.5 rounded-xl font-bold shadow-sm transition-all flex items-center gap-2">
              <UserPlus className="w-4 h-4" /> Add Employee
            </button>
          </div>
        </div>

        <div className="bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden flex flex-col">
          
          {/* Toolbar */}
          <div className="p-4 border-b border-slate-200 flex flex-col lg:flex-row gap-4 justify-between items-center bg-slate-50/50">
            <div className="flex items-center gap-4 w-full lg:w-auto">
              {selectedEmployees.size > 0 ? (
                <div className="flex items-center gap-3 bg-orange-50 border border-orange-200 px-4 py-2 rounded-lg text-sm text-orange-700 font-bold animate-pulse">
                  <span>{selectedEmployees.size} Selected</span>
                  <div className="w-px h-4 bg-orange-300"></div>
                  <button className="hover:text-orange-900">Send Email</button>
                  <button className="hover:text-red-600">Deactivate</button>
                </div>
              ) : (
                <div className="flex items-center gap-2 w-full sm:w-auto">
                  <select 
                    value={deptFilter} 
                    onChange={(e) => setDeptFilter(e.target.value)}
                    className="w-full sm:w-auto bg-white border border-slate-300 rounded-lg px-3 py-2 text-sm font-medium text-slate-700 focus:outline-none focus:border-orange-500 transition-all"
                  >
                    <option value="All">All Departments</option>
                    <option value="Engineering">Engineering</option>
                    <option value="Sales & Retail">Sales & Retail</option>
                    <option value="Operations">Operations</option>
                    <option value="Support">Support</option>
                  </select>
                </div>
              )}
            </div>

            <div className="flex gap-3 w-full lg:w-auto">
              <div className="relative w-full lg:w-80">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input 
                  type="text" 
                  placeholder="Search by name or Employee ID..." 
                  className="w-full pl-9 pr-4 py-2 bg-white border border-slate-300 rounded-lg text-sm focus:outline-none focus:border-orange-500 transition-all"
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
          <div className="overflow-x-auto hide-scrollbar">
            <table className="w-full text-left text-sm text-slate-600 min-w-[1000px]">
              <thead className="bg-slate-50 text-slate-500 font-bold uppercase text-[10px] tracking-wider border-b border-slate-200">
                <tr>
                  <th className="px-6 py-4 w-12">
                    <button onClick={() => setSelectedEmployees(selectedEmployees.size === filteredEmployees.length ? new Set() : new Set(filteredEmployees.map(e => e.id)))}>
                      <CheckSquare className={`w-5 h-5 ${selectedEmployees.size > 0 ? 'text-orange-500' : 'text-slate-300'}`} />
                    </button>
                  </th>
                  <th className="px-4 py-4">Employee Profile</th>
                  <th className="px-4 py-4">Department & Role</th>
                  <th className="px-4 py-4">Contact & Location</th>
                  <th className="px-4 py-4">Status</th>
                  <th className="px-6 py-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {filteredEmployees.map((emp) => (
                  <tr key={emp.id} className={`hover:bg-slate-50 transition-colors group ${selectedEmployees.has(emp.id) ? 'bg-orange-50/30' : ''}`}>
                    <td className="px-6 py-4">
                      <button onClick={() => toggleSelect(emp.id)}>
                        <CheckSquare className={`w-5 h-5 transition-colors ${selectedEmployees.has(emp.id) ? 'text-orange-500' : 'text-slate-300 group-hover:text-slate-400'}`} />
                      </button>
                    </td>
                    <td className="px-4 py-4">
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-full bg-slate-200 text-slate-700 flex items-center justify-center font-black text-sm shrink-0">
                          {emp.name.charAt(0)}
                        </div>
                        <div>
                          <p className="font-bold text-slate-900 text-sm">{emp.name}</p>
                          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mt-0.5">{emp.id}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-4 py-4">
                      <p className="font-bold text-slate-700 flex items-center gap-1.5 mb-1"><Briefcase className="w-3.5 h-3.5 text-slate-400"/> {emp.role}</p>
                      <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-slate-100 border border-slate-200 inline-block">{emp.dept}</span>
                    </td>
                    <td className="px-4 py-4 space-y-1.5">
                      <div className="flex items-center gap-2 text-xs font-medium"><Mail className="w-3.5 h-3.5 text-slate-400" /> {emp.email}</div>
                      <div className="flex items-center gap-2 text-xs font-medium"><Phone className="w-3.5 h-3.5 text-slate-400" /> {emp.phone}</div>
                      <div className="flex items-center gap-2 text-[10px] font-bold text-slate-500 uppercase pt-1"><MapPin className="w-3 h-3" /> {emp.branch}</div>
                    </td>
                    <td className="px-4 py-4">
                      <span className={`text-[10px] font-bold px-2.5 py-1 rounded-md border whitespace-nowrap ${
                        emp.status === 'Active' ? 'bg-emerald-50 text-emerald-700 border-emerald-200' : 'bg-amber-50 text-amber-700 border-amber-200'
                      }`}>
                        {emp.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        <button className="p-2 bg-white border border-slate-200 hover:border-orange-300 hover:text-orange-600 text-slate-600 rounded-lg transition-all shadow-sm"><MoreHorizontal className="w-4 h-4" /></button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="p-4 border-t border-slate-200 flex flex-col sm:flex-row justify-between items-center gap-4 bg-slate-50/50">
            <span className="text-sm font-medium text-slate-500">Showing <span className="font-bold text-slate-900">1</span> to <span className="font-bold text-slate-900">{filteredEmployees.length}</span> of <span className="font-bold text-slate-900">142</span> employees</span>
            <div className="flex gap-2">
              <button className="px-3 py-1.5 bg-white border border-slate-300 rounded-lg text-slate-500 hover:bg-slate-50 flex items-center"><ChevronLeft className="w-4 h-4" /> Prev</button>
              <button className="px-3 py-1.5 bg-orange-600 text-white font-bold rounded-lg shadow-sm">1</button>
              <button className="px-3 py-1.5 bg-white border border-slate-300 rounded-lg text-slate-500 hover:bg-slate-50 flex items-center">Next <ChevronRight className="w-4 h-4" /></button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}