'use client';
import { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, Mail, Phone, MapPin, Building, Globe, Edit, CheckCircle2, User, FileText, Paperclip } from 'lucide-react';

export default function LeadDetails() {
  const [activeTab, setActiveTab] = useState('timeline');

  // Mock Data
  const lead = {
    id: 1, name: 'Rahim Ahmed', company: 'TechNova Ltd', jobTitle: 'Procurement Manager',
    email: 'rahim@technova.bd', phone: '+880 1711-000001', location: 'Dhaka, Bangladesh',
    source: 'Website Form', owner: 'Arif Hasan', value: '৳ 500,000', status: 'Contacted', created: 'Oct 24, 2026'
  };

  const stages = ['New', 'Contacted', 'Qualified'];
  const currentStageIndex = stages.indexOf(lead.status);

  return (
    /* OUTER WRAPPER: Forces entire page background to white */
    <div className="bg-white min-h-screen w-full">
      
      /* INNER CONTAINER: Centers content with spacious padding */
      <div className="px-6 py-12 sm:px-8 sm:py-16 lg:py-20 max-w-7xl mx-auto space-y-6 sm:space-y-8 animate-in fade-in duration-500">
        
        {/* Back & Actions */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <Link className="flex items-center gap-2 text-sm font-bold text-slate-500 hover:text-orange-600 transition-colors w-fit group" href="/crm/leads">
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform"/> Back to Leads
          </Link>
          <div className="flex items-center gap-3">
            <button className="flex items-center gap-2 bg-white border border-slate-200 hover:border-orange-200 hover:bg-orange-50 px-5 py-2.5 rounded-xl text-sm font-bold text-slate-700 hover:text-orange-600 transition-colors shadow-sm">
              <Edit className="w-4 h-4"/> Edit
            </button>
            <button className="flex items-center gap-2 bg-gradient-to-r from-emerald-500 to-emerald-400 hover:from-emerald-400 hover:to-emerald-300 text-white px-6 py-2.5 rounded-xl text-sm font-bold transition-all shadow-[0_4px_14px_rgba(16,185,129,0.25)] active:scale-[0.98]">
              <CheckCircle2 className="w-4 h-4"/> Convert Lead
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
          
          {/* Left Col: Profile & Info */}
          <div className="space-y-6 sm:space-y-8">
            
            {/* Profile Card */}
            <div className="bg-white border border-slate-100 rounded-3xl shadow-[0_4px_20px_rgba(0,0,0,0.03)] p-8 text-center">
              <div className="w-28 h-28 mx-auto bg-gradient-to-tr from-orange-500 to-amber-400 text-white shadow-lg shadow-orange-500/30 rounded-full flex items-center justify-center text-4xl font-black mb-5">
                {lead.name.charAt(0)}
              </div>
              <h2 className="text-2xl font-black text-slate-900 tracking-tight">{lead.name}</h2>
              <p className="text-sm font-medium text-slate-500 mt-1.5">{lead.jobTitle} at <span className="font-bold text-slate-700">{lead.company}</span></p>
              
              <div className="flex justify-center gap-3 mt-8">
                <button className="flex-1 flex justify-center items-center gap-2 bg-slate-50 hover:bg-orange-50 border border-slate-100 hover:border-orange-100 text-slate-600 hover:text-orange-600 py-3 rounded-xl text-sm font-bold transition-all shadow-sm">
                  <Mail className="w-4 h-4"/> Email
                </button>
                <button className="flex-1 flex justify-center items-center gap-2 bg-slate-50 hover:bg-orange-50 border border-slate-100 hover:border-orange-100 text-slate-600 hover:text-orange-600 py-3 rounded-xl text-sm font-bold transition-all shadow-sm">
                  <Phone className="w-4 h-4"/> Call
                </button>
              </div>
            </div>

            {/* Details Card */}
            <div className="bg-white border border-slate-100 rounded-3xl shadow-[0_4px_20px_rgba(0,0,0,0.03)] p-8">
              <h3 className="text-sm font-black text-slate-900 mb-6 pb-4 border-b border-slate-50">Lead Information</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-lg bg-orange-50 text-orange-500 flex items-center justify-center shrink-0">
                    <Mail className="w-4 h-4"/>
                  </div>
                  <div>
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-wider mb-0.5">Email</p>
                    <a href={`mailto:${lead.email}`} className="text-sm font-bold text-slate-800 hover:text-orange-600 transition-colors">{lead.email}</a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-lg bg-orange-50 text-orange-500 flex items-center justify-center shrink-0">
                    <Phone className="w-4 h-4"/>
                  </div>
                  <div>
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-wider mb-0.5">Phone</p>
                    <a href={`tel:${lead.phone}`} className="text-sm font-bold text-slate-800 hover:text-orange-600 transition-colors">{lead.phone}</a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-lg bg-orange-50 text-orange-500 flex items-center justify-center shrink-0">
                    <Building className="w-4 h-4"/>
                  </div>
                  <div>
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-wider mb-0.5">Company</p>
                    <p className="text-sm font-bold text-slate-800">{lead.company}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-lg bg-orange-50 text-orange-500 flex items-center justify-center shrink-0">
                    <MapPin className="w-4 h-4"/>
                  </div>
                  <div>
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-wider mb-0.5">Location</p>
                    <p className="text-sm font-bold text-slate-800">{lead.location}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-lg bg-orange-50 text-orange-500 flex items-center justify-center shrink-0">
                    <Globe className="w-4 h-4"/>
                  </div>
                  <div>
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-wider mb-0.5">Source</p>
                    <p className="text-sm font-bold text-slate-800">{lead.source}</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Summary Card */}
            <div className="bg-white border border-slate-100 rounded-3xl shadow-[0_4px_20px_rgba(0,0,0,0.03)] p-8 space-y-5">
              <div className="flex justify-between items-center pb-4 border-b border-slate-50">
                <span className="text-[10px] font-black text-slate-400 uppercase tracking-wider">Owner</span>
                <span className="text-sm font-bold text-slate-900">{lead.owner}</span>
              </div>
              <div className="flex justify-between items-center pb-4 border-b border-slate-50">
                <span className="text-[10px] font-black text-slate-400 uppercase tracking-wider">Est. Value</span>
                <span className="text-sm font-black text-emerald-500">{lead.value}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-[10px] font-black text-slate-400 uppercase tracking-wider">Created</span>
                <span className="text-sm font-bold text-slate-900">{lead.created}</span>
              </div>
            </div>
          </div>

          {/* Right Col: Process & Tabs */}
          <div className="lg:col-span-2 space-y-6 sm:space-y-8">
            
            {/* Pipeline Stepper */}
            <div className="bg-white border border-slate-100 rounded-3xl shadow-[0_4px_20px_rgba(0,0,0,0.03)] p-8 sm:p-10">
              <h3 className="text-sm font-black text-slate-900 mb-8">Qualification Progress</h3>
              <div className="flex items-center justify-between relative px-2">
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-1 bg-slate-100 -z-10 rounded-full"></div>
                {stages.map((stage, idx) => {
                  const isActive = idx <= currentStageIndex;
                  const isCurrent = idx === currentStageIndex;
                  return (
                    <div key={stage} className="flex flex-col items-center gap-3 bg-white px-4">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-black border-2 transition-all duration-300 ${
                        isActive ? 'bg-orange-500 border-orange-500 text-white shadow-md shadow-orange-500/20' : 'bg-white border-slate-200 text-slate-400'
                      } ${isCurrent ? 'ring-4 ring-orange-500/20 scale-110' : ''}`}>
                        {isActive ? <CheckCircle2 className="w-5 h-5"/> : idx + 1}
                      </div>
                      <span className={`text-[11px] uppercase tracking-wider font-black ${isActive ? 'text-slate-900' : 'text-slate-400'}`}>{stage}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Tabs UI */}
            <div className="bg-white border border-slate-100 rounded-3xl shadow-[0_4px_20px_rgba(0,0,0,0.03)] overflow-hidden">
              <div className="flex border-b border-slate-100 bg-slate-50/50 overflow-x-auto">
                <button onClick={() => setActiveTab('timeline')} className={`px-8 py-5 text-sm font-black border-b-2 whitespace-nowrap transition-colors ${activeTab === 'timeline' ? 'border-orange-500 text-orange-600 bg-white' : 'border-transparent text-slate-400 hover:text-slate-600'}`}>Activity Timeline</button>
                <button onClick={() => setActiveTab('notes')} className={`px-8 py-5 text-sm font-black border-b-2 whitespace-nowrap transition-colors ${activeTab === 'notes' ? 'border-orange-500 text-orange-600 bg-white' : 'border-transparent text-slate-400 hover:text-slate-600'}`}>Notes</button>
                <button onClick={() => setActiveTab('files')} className={`px-8 py-5 text-sm font-black border-b-2 whitespace-nowrap transition-colors ${activeTab === 'files' ? 'border-orange-500 text-orange-600 bg-white' : 'border-transparent text-slate-400 hover:text-slate-600'}`}>Files</button>
              </div>
              
              <div className="p-6 sm:p-8">
                {activeTab === 'timeline' && (
                  <div className="relative pl-6 border-l-2 border-slate-100 space-y-10">
                    <div className="relative">
                      <div className="absolute -left-[31px] top-1 w-3 h-3 rounded-full bg-orange-500 ring-4 ring-white"></div>
                      <p className="text-sm font-bold text-slate-900">Email Sent: Introduction</p>
                      <p className="text-xs font-medium text-slate-500 mt-1">Sent by Arif Hasan • 2 hours ago</p>
                    </div>
                    <div className="relative">
                      <div className="absolute -left-[31px] top-1 w-3 h-3 rounded-full bg-amber-500 ring-4 ring-white"></div>
                      <p className="text-sm font-bold text-slate-900">Status changed to Contacted</p>
                      <p className="text-xs font-medium text-slate-500 mt-1">Updated by System • 2 hours ago</p>
                    </div>
                    <div className="relative">
                      <div className="absolute -left-[31px] top-1 w-3 h-3 rounded-full bg-orange-300 ring-4 ring-white"></div>
                      <p className="text-sm font-bold text-slate-900">Lead Created</p>
                      <p className="text-xs font-medium text-slate-500 mt-1">Via Website Form • Oct 24, 2026</p>
                    </div>
                  </div>
                )}

                {activeTab === 'notes' && (
                  <div className="space-y-8">
                    <div>
                      <textarea className="w-full bg-slate-50 border border-slate-200 rounded-xl p-5 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all" rows="3" placeholder="Add a note about this lead..."></textarea>
                      <div className="flex justify-end mt-3">
                        <button className="bg-slate-900 text-white px-6 py-2.5 rounded-xl text-xs font-bold hover:bg-slate-800 transition-all shadow-sm active:scale-[0.98]">Save Note</button>
                      </div>
                    </div>
                    <div className="bg-orange-50/50 border border-orange-100/50 rounded-2xl p-6">
                      <div className="flex justify-between items-start mb-3">
                        <div className="flex items-center gap-2"><User className="w-4 h-4 text-orange-400"/><span className="text-xs font-bold text-slate-700">Arif Hasan</span></div>
                        <span className="text-[10px] font-black text-slate-400 uppercase tracking-wider">1 day ago</span>
                      </div>
                      <p className="text-sm font-medium text-slate-700 leading-relaxed">Client is looking for a bulk supply for Q4. Need to send catalog by Friday.</p>
                    </div>
                  </div>
                )}

                {activeTab === 'files' && (
                  <div className="space-y-6">
                    <div className="border-2 border-dashed border-slate-200 rounded-2xl p-10 text-center hover:bg-orange-50 hover:border-orange-200 transition-colors cursor-pointer group">
                      <div className="w-12 h-12 bg-slate-50 group-hover:bg-white rounded-full flex items-center justify-center mx-auto mb-3 shadow-sm border border-slate-100">
                        <Paperclip className="w-5 h-5 text-slate-400 group-hover:text-orange-500"/>
                      </div>
                      <p className="text-sm font-bold text-slate-700 group-hover:text-orange-600 transition-colors">Click to upload or drag files here</p>
                      <p className="text-xs font-medium text-slate-400 mt-1">PDF, DOCX, JPG up to 10MB</p>
                    </div>
                    <div className="flex items-center justify-between p-4 border border-slate-100 rounded-xl bg-white shadow-sm hover:border-orange-100 transition-colors">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-red-50 text-red-500 rounded-xl flex items-center justify-center"><FileText className="w-5 h-5"/></div>
                        <div>
                          <p className="text-sm font-bold text-slate-800">Company_Profile.pdf</p>
                          <p className="text-[11px] font-bold text-slate-400 mt-0.5">2.4 MB • Oct 24, 2026</p>
                        </div>
                      </div>
                      <button className="text-slate-400 hover:text-orange-600 font-bold text-xs bg-slate-50 hover:bg-orange-50 px-4 py-2 rounded-lg transition-colors">Download</button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}