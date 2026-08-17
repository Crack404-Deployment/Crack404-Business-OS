'use client';
import { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, Mail, Phone, MapPin, Building, Calendar, Edit, MessageSquare, Briefcase, FileText, Activity, Clock, Tag, User } from 'lucide-react';

export default function ContactDetails() {
  const [activeTab, setActiveTab] = useState('history');

  // Mock 360 Data
  const contact = {
    id: 101, name: 'Karim Hasan', jobTitle: 'Director of Operations', company: 'ABC Electronics',
    email: 'karim@abcelectronics.com', phone: '+880 1811-000101', location: 'Dhaka, Bangladesh',
    status: 'Active', tags: ['VIP', 'Enterprise'], owner: 'Arif Hasan', 
    customerSince: 'Jan 15, 2025', lastInteraction: '2 hours ago', totalActivities: 42
  };

  return (
    /* OUTER WRAPPER: Forces entire page background to white */
    <div className="bg-white min-h-screen w-full">
      
      /* INNER CONTAINER: Centers content with spacious padding */
      <div className="px-6 py-12 sm:px-8 sm:py-16 lg:py-20 max-w-7xl mx-auto space-y-6 sm:space-y-8 animate-in fade-in duration-500">
        
        {/* Back & Actions */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <Link className="flex items-center gap-2 text-sm font-bold text-slate-500 hover:text-orange-600 transition-colors w-fit group" href="/crm/contacts">
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform"/> Back to Contacts
          </Link>
          <div className="flex items-center gap-3">
            <button className="flex items-center gap-2 bg-white border border-slate-200 hover:border-orange-200 hover:bg-orange-50 px-5 py-2.5 rounded-xl text-sm font-bold text-slate-700 hover:text-orange-600 transition-colors shadow-sm">
              <Edit className="w-4 h-4"/> Edit Profile
            </button>
            <button className="flex items-center gap-2 bg-gradient-to-r from-orange-600 to-amber-500 hover:from-orange-500 hover:to-amber-400 text-white px-6 py-2.5 rounded-xl text-sm font-bold transition-all shadow-[0_4px_14px_rgba(234,88,12,0.25)] active:scale-[0.98]">
              <Mail className="w-4 h-4"/> Send Email
            </button>
          </div>
        </div>

        {/* 360 Header Card */}
        <div className="bg-white border border-slate-100 rounded-3xl shadow-[0_4px_20px_rgba(0,0,0,0.03)] p-6 sm:p-10">
          <div className="flex flex-col lg:flex-row gap-8 items-start lg:items-center justify-between">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-8">
              <div className="w-28 h-28 bg-gradient-to-tr from-orange-500 to-amber-400 text-white rounded-full flex items-center justify-center text-4xl font-black shadow-lg shadow-orange-500/30 shrink-0">
                {contact.name.charAt(0)}
              </div>
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <h1 className="text-3xl font-black text-slate-900 tracking-tight">{contact.name}</h1>
                  <span className="bg-emerald-50 text-emerald-600 border border-emerald-200 px-3 py-1 rounded-md text-[10px] font-black uppercase tracking-wider">
                    {contact.status}
                  </span>
                </div>
                <p className="text-sm font-medium text-slate-500 flex items-center gap-2">
                  <Briefcase className="w-4 h-4 text-orange-400"/> {contact.jobTitle} at <span className="font-bold text-slate-800">{contact.company}</span>
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {contact.tags.map(tag => (
                    <span key={tag} className="flex items-center gap-1.5 bg-slate-50 border border-slate-200 text-slate-600 text-[11px] font-black px-3 py-1.5 rounded-full uppercase tracking-wider">
                      <Tag className="w-3 h-3 text-orange-400"/> {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-x-8 gap-y-6 w-full lg:w-auto border-t lg:border-t-0 lg:border-l border-slate-100 pt-8 lg:pt-0 lg:pl-10">
              <div>
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-wider mb-1.5">Customer Since</p>
                <p className="text-base font-bold text-slate-900">{contact.customerSince}</p>
              </div>
              <div>
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-wider mb-1.5">Total Activities</p>
                <p className="text-base font-bold text-slate-900">{contact.totalActivities}</p>
              </div>
              <div>
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-wider mb-1.5">Last Interaction</p>
                <p className="text-base font-bold text-orange-500">{contact.lastInteraction}</p>
              </div>
              <div>
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-wider mb-1.5">Account Owner</p>
                <p className="text-base font-bold text-slate-900">{contact.owner}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
          
          {/* Left Col: Contact Info */}
          <div className="space-y-6 sm:space-y-8">
            <div className="bg-white border border-slate-100 rounded-3xl shadow-[0_4px_20px_rgba(0,0,0,0.03)] p-6 sm:p-8">
              <h3 className="text-sm font-black text-slate-900 mb-6 pb-4 border-b border-slate-50">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-lg bg-orange-50 text-orange-500 flex items-center justify-center shrink-0">
                    <Mail className="w-4 h-4"/>
                  </div>
                  <div>
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-wider mb-0.5">Email</p>
                    <a href={`mailto:${contact.email}`} className="text-sm font-bold text-orange-600 hover:underline">{contact.email}</a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-lg bg-orange-50 text-orange-500 flex items-center justify-center shrink-0">
                    <Phone className="w-4 h-4"/>
                  </div>
                  <div>
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-wider mb-0.5">Phone</p>
                    <a href={`tel:${contact.phone}`} className="text-sm font-bold text-slate-800 hover:text-orange-600 transition-colors">{contact.phone}</a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-lg bg-orange-50 text-orange-500 flex items-center justify-center shrink-0">
                    <MapPin className="w-4 h-4"/>
                  </div>
                  <div>
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-wider mb-0.5">Address</p>
                    <p className="text-sm font-bold text-slate-800 leading-relaxed">{contact.location}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white border border-slate-100 rounded-3xl shadow-[0_4px_20px_rgba(0,0,0,0.03)] p-6 sm:p-8">
              <h3 className="text-sm font-black text-slate-900 mb-6 pb-4 border-b border-slate-50">Quick Actions</h3>
              <div className="space-y-3">
                <button className="w-full flex items-center justify-between p-4 rounded-xl border border-slate-100 hover:border-orange-200 hover:bg-orange-50 transition-all group shadow-sm">
                  <span className="flex items-center gap-3 text-sm font-bold text-slate-700 group-hover:text-orange-600"><Phone className="w-4 h-4 text-slate-400 group-hover:text-orange-500"/> Log a Call</span>
                </button>
                <button className="w-full flex items-center justify-between p-4 rounded-xl border border-slate-100 hover:border-orange-200 hover:bg-orange-50 transition-all group shadow-sm">
                  <span className="flex items-center gap-3 text-sm font-bold text-slate-700 group-hover:text-orange-600"><Calendar className="w-4 h-4 text-slate-400 group-hover:text-orange-500"/> Schedule Meeting</span>
                </button>
                <button className="w-full flex items-center justify-between p-4 rounded-xl border border-slate-100 hover:border-orange-200 hover:bg-orange-50 transition-all group shadow-sm">
                  <span className="flex items-center gap-3 text-sm font-bold text-slate-700 group-hover:text-orange-600"><FileText className="w-4 h-4 text-slate-400 group-hover:text-orange-500"/> Create Quotation</span>
                </button>
              </div>
            </div>
          </div>

          {/* Right Col: 360 Views */}
          <div className="lg:col-span-2">
            <div className="bg-white border border-slate-100 rounded-3xl shadow-[0_4px_20px_rgba(0,0,0,0.03)] overflow-hidden h-full">
              <div className="flex border-b border-slate-100 bg-slate-50/50 overflow-x-auto">
                <button onClick={() => setActiveTab('history')} className={`px-8 py-5 text-sm font-black border-b-2 whitespace-nowrap transition-colors flex items-center gap-2 ${activeTab === 'history' ? 'border-orange-500 text-orange-600 bg-white' : 'border-transparent text-slate-400 hover:text-slate-600'}`}><Activity className="w-4 h-4"/> Activity Timeline</button>
                <button onClick={() => setActiveTab('comms')} className={`px-8 py-5 text-sm font-black border-b-2 whitespace-nowrap transition-colors flex items-center gap-2 ${activeTab === 'comms' ? 'border-orange-500 text-orange-600 bg-white' : 'border-transparent text-slate-400 hover:text-slate-600'}`}><MessageSquare className="w-4 h-4"/> Communications</button>
                <button onClick={() => setActiveTab('notes')} className={`px-8 py-5 text-sm font-black border-b-2 whitespace-nowrap transition-colors flex items-center gap-2 ${activeTab === 'notes' ? 'border-orange-500 text-orange-600 bg-white' : 'border-transparent text-slate-400 hover:text-slate-600'}`}><FileText className="w-4 h-4"/> Notes</button>
              </div>
              
              <div className="p-6 sm:p-8">
                {activeTab === 'history' && (
                  <div className="relative pl-6 border-l-2 border-slate-100 space-y-10">
                    <div className="relative">
                      <div className="absolute -left-[31px] top-1 w-3 h-3 rounded-full bg-orange-500 ring-4 ring-white"></div>
                      <div className="bg-slate-50 rounded-2xl p-5 border border-slate-100 shadow-sm">
                        <p className="text-sm font-black text-slate-900">Meeting Completed: Q4 Supply Agreement</p>
                        <p className="text-sm font-medium text-slate-600 mt-2 leading-relaxed">Discussed bulk discounts for the upcoming holiday season. Karim requested a formal quotation by next week.</p>
                        <p className="text-[11px] font-bold text-slate-400 mt-4 flex items-center gap-1.5 uppercase tracking-wider"><Clock className="w-3 h-3"/> Hosted by Arif Hasan • 2 hours ago</p>
                      </div>
                    </div>
                    <div className="relative">
                      <div className="absolute -left-[31px] top-1 w-3 h-3 rounded-full bg-amber-500 ring-4 ring-white"></div>
                      <p className="text-sm font-bold text-slate-900">Email Received: Technical Requirements</p>
                      <p className="text-xs font-medium text-slate-500 mt-1">Received • 1 day ago</p>
                    </div>
                    <div className="relative">
                      <div className="absolute -left-[31px] top-1 w-3 h-3 rounded-full bg-orange-300 ring-4 ring-white"></div>
                      <p className="text-sm font-bold text-slate-900">Quotation #QT-2026-089 Created</p>
                      <p className="text-xs font-medium text-slate-500 mt-1">Value: ৳ 250,000 • 3 days ago</p>
                    </div>
                  </div>
                )}

                {activeTab === 'comms' && (
                  <div className="space-y-4">
                    <div className="flex gap-4 p-5 rounded-2xl border border-slate-100 bg-white shadow-sm hover:border-orange-200 hover:shadow-md transition-all cursor-pointer">
                      <div className="w-12 h-12 rounded-xl bg-orange-50 text-orange-500 flex items-center justify-center shrink-0 border border-orange-100"><Mail className="w-5 h-5"/></div>
                      <div className="w-full">
                        <div className="flex justify-between items-start mb-1.5">
                          <h4 className="text-sm font-black text-slate-900">Re: Technical Requirements</h4>
                          <span className="text-[10px] font-black text-slate-400 uppercase tracking-wider">Yesterday</span>
                        </div>
                        <p className="text-sm font-medium text-slate-500 line-clamp-1">Hi Arif, thanks for the details. I will review with my team and get back...</p>
                      </div>
                    </div>
                    <div className="flex gap-4 p-5 rounded-2xl border border-slate-100 bg-white shadow-sm hover:border-orange-200 hover:shadow-md transition-all cursor-pointer">
                      <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center shrink-0 border border-amber-100"><Phone className="w-5 h-5"/></div>
                      <div className="w-full">
                        <div className="flex justify-between items-start mb-1.5">
                          <h4 className="text-sm font-black text-slate-900">Outbound Call (Duration: 12m 45s)</h4>
                          <span className="text-[10px] font-black text-slate-400 uppercase tracking-wider">Oct 20</span>
                        </div>
                        <p className="text-sm font-medium text-slate-500 line-clamp-1">Discussed initial onboarding and platform limits.</p>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'notes' && (
                  <div className="space-y-8">
                    <div>
                      <textarea className="w-full bg-slate-50 border border-slate-200 rounded-xl p-5 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all" rows="3" placeholder="Add a note to Karim's profile..."></textarea>
                      <div className="flex justify-end mt-3">
                        <button className="bg-slate-900 text-white px-6 py-2.5 rounded-xl text-xs font-bold hover:bg-slate-800 transition-all shadow-sm active:scale-[0.98]">Save Note</button>
                      </div>
                    </div>
                    <div className="bg-orange-50/50 border border-orange-100/50 rounded-2xl p-6">
                      <div className="flex justify-between items-start mb-3">
                        <span className="text-xs font-black text-slate-700 flex items-center gap-2"><User className="w-4 h-4 text-orange-400"/> Arif Hasan</span>
                        <span className="text-[10px] font-black text-slate-400 uppercase tracking-wider">Oct 15, 2026</span>
                      </div>
                      <p className="text-sm font-medium text-slate-700 leading-relaxed">Karim prefers communication via email rather than calls. Make sure to attach PDF specs to all proposals.</p>
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