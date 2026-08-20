'use client';
import { useState } from 'react';
import { Search, Filter, Plus, MoreVertical, ListTodo, AlertCircle, Clock, Building, ChevronDown, CheckCircle2 } from 'lucide-react';

export default function TasksList() {
  const [searchTerm, setSearchTerm] = useState('');

  const tasks = [
    { id: 1, title: 'Send revised proposal to client', contact: 'Karim Hasan', company: 'ABC Electronics', priority: 'High', due: 'Today', status: 'In Progress', assignee: 'Arif Hasan' },
    { id: 2, title: 'Follow up on CRM demonstration', contact: 'Rahim Ahmed', company: 'TechNova Ltd', priority: 'Medium', due: 'Tomorrow', status: 'To Do', assignee: 'Sara Rahman' },
    { id: 3, title: 'Prepare onboarding documentation', contact: 'Sara Rahman', company: 'Global Retail', priority: 'Urgent', due: 'Oct 24, 2026', status: 'Overdue', assignee: 'Nabila Islam' },
    { id: 4, title: 'Check reference documents', contact: 'Tanvir Chowdhury', company: 'Nexa Solutions', priority: 'Low', due: 'Oct 30, 2026', status: 'Completed', assignee: 'Arif Hasan' },
  ];

  const getPriorityColor = (priority) => {
    switch(priority) {
      case 'Urgent': return 'text-red-600 bg-red-50 border-red-200';
      case 'High': return 'text-orange-600 bg-orange-50 border-orange-200';
      case 'Medium': return 'text-amber-600 bg-amber-50 border-amber-200';
      default: return 'text-slate-600 bg-slate-50 border-slate-200';
    }
  };

  return (
    <div className="bg-white min-h-screen w-full">
      <div className="px-6 py-12 sm:px-8 sm:py-16 lg:py-20 max-w-7xl mx-auto space-y-6 sm:space-y-8 animate-in fade-in duration-500">
        
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">Tasks</h1>
            <p className="text-sm font-medium text-slate-500 mt-1">Stay on top of customer follow-ups and daily CRM work.</p>
          </div>
          <button className="flex items-center gap-2 bg-gradient-to-r from-orange-600 to-amber-500 hover:from-orange-500 hover:to-amber-400 text-white px-5 py-2.5 rounded-xl text-sm font-bold transition-all shadow-[0_4px_14px_rgba(234,88,12,0.25)] active:scale-[0.98]">
            <Plus className="w-4 h-4"/> Create Task
          </button>
        </div>

        {/* View Tabs & Toolbar */}
        <div className="flex flex-col lg:flex-row gap-4 justify-between bg-white p-4 rounded-2xl border border-slate-100 shadow-[0_4px_20px_rgba(0,0,0,0.03)]">
          <div className="flex items-center bg-slate-50 p-1 rounded-xl border border-slate-100 w-fit">
            <button className="px-6 py-2 rounded-lg text-sm font-black bg-white text-orange-600 shadow-sm">List View</button>
            <button className="px-6 py-2 rounded-lg text-sm font-bold text-slate-500 hover:text-slate-900 transition-colors">Board</button>
            <button className="px-6 py-2 rounded-lg text-sm font-bold text-slate-500 hover:text-slate-900 transition-colors">My Tasks</button>
          </div>
          
          <div className="flex items-center gap-3 w-full lg:w-auto">
            <div className="relative w-full sm:w-64 group">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 group-focus-within:text-orange-500 transition-colors"/>
              <input 
                type="text" 
                placeholder="Search tasks..." 
                className="w-full pl-11 pr-4 py-2.5 bg-slate-50 border border-slate-100 rounded-xl text-sm font-medium focus:bg-white focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all placeholder:text-slate-400"
              />
            </div>
            <button className="flex items-center gap-2 px-5 py-2.5 bg-white border border-slate-200 hover:border-orange-300 hover:bg-orange-50 hover:text-orange-600 rounded-xl text-sm font-bold text-slate-600 transition-colors shadow-sm">
              <Filter className="w-4 h-4"/> <span className="hidden sm:inline">Filter</span> <ChevronDown className="w-3 h-3 ml-1"/>
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
                  <th className="px-6 py-5">Task Details</th>
                  <th className="px-6 py-5">Priority & Status</th>
                  <th className="px-6 py-5">Due Date</th>
                  <th className="px-6 py-5">Assignee</th>
                  <th className="px-6 py-5 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-50">
                {tasks.map((task) => (
                  <tr key={task.id} className="hover:bg-orange-50/30 transition-colors group cursor-pointer">
                    <td className="px-6 py-4"><input type="checkbox" className="rounded border-slate-200 text-orange-500 focus:ring-orange-500/20" /></td>
                    <td className="px-6 py-4">
                      <p className={`text-sm font-bold group-hover:text-orange-600 transition-colors flex items-center gap-2 ${task.status === 'Completed' ? 'text-slate-400 line-through' : 'text-slate-900'}`}><ListTodo className="w-4 h-4 text-orange-400"/> {task.title}</p>
                      <p className="text-xs font-medium text-slate-500 mt-1 flex items-center gap-1"><Building className="w-3 h-3 text-slate-400"/> {task.company} ({task.contact})</p>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex flex-col items-start gap-2">
                        <span className={`inline-flex items-center px-2.5 py-1 rounded-md text-[10px] font-black uppercase tracking-wider border ${getPriorityColor(task.priority)}`}>
                          {task.priority === 'Urgent' && <AlertCircle className="w-3 h-3 mr-1"/>} {task.priority}
                        </span>
                        <span className={`text-[10px] font-black uppercase tracking-wider ${
                          task.status === 'Completed' ? 'text-emerald-500' :
                          task.status === 'Overdue' ? 'text-red-500' : 'text-amber-500'
                        }`}>{task.status}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`text-sm font-bold flex items-center gap-1.5 ${task.status === 'Overdue' ? 'text-red-600' : 'text-slate-700'}`}>
                        <Clock className="w-4 h-4"/> {task.due}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm font-medium text-slate-600">{task.assignee}</td>
                    <td className="px-6 py-4 text-right">
                      <button className="text-slate-400 hover:text-emerald-500 transition-colors p-2 rounded-xl hover:bg-emerald-50 mr-1" title="Mark Complete">
                        <CheckCircle2 className="w-4 h-4"/>
                      </button>
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