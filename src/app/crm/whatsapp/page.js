'use client';
import { useState } from 'react';
import { Search, MoreVertical, Send, Paperclip, Smile, Check, CheckCheck, User, Building, Tag, Briefcase } from 'lucide-react';

export default function WhatsAppCenter() {
  const [messages, setMessages] = useState([
    { id: 1, text: 'Hi Karim, did you receive the CRM proposal?', time: '10:30 AM', sender: 'me', status: 'read' },
    { id: 2, text: 'Yes, looking at it now. The POS integration looks great.', time: '10:35 AM', sender: 'them', status: null },
    { id: 3, text: 'Perfect. Let me know if you need to adjust the license count.', time: '10:36 AM', sender: 'me', status: 'delivered' },
  ]);
  const [inputText, setInputText] = useState('');

  const handleSend = () => {
    if (!inputText.trim()) return;
    setMessages([...messages, { id: Date.now(), text: inputText, time: 'Just now', sender: 'me', status: 'sent' }]);
    setInputText('');
  };

  return (
    <div className="bg-white min-h-screen w-full">
      <div className="px-4 py-8 sm:px-8 sm:py-12 max-w-[1600px] mx-auto animate-in fade-in duration-500">
        
        <div className="mb-8">
          <h1 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">WhatsApp</h1>
          <p className="text-sm font-medium text-slate-500 mt-1">Integrated CRM messaging interface.</p>
        </div>

        {/* 3-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 h-[700px]">
          
          {/* Left: Conversation List */}
          <div className="bg-white border border-slate-100 rounded-3xl shadow-[0_4px_20px_rgba(0,0,0,0.03)] flex flex-col overflow-hidden">
            <div className="p-4 border-b border-slate-50 bg-slate-50/50">
              <div className="relative w-full">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400"/>
                <input type="text" placeholder="Search chats..." className="w-full pl-9 pr-4 py-2 bg-white border border-slate-200 rounded-xl text-sm font-medium focus:outline-none focus:border-emerald-500 transition-all"/>
              </div>
            </div>
            <div className="flex-1 overflow-y-auto">
              {[
                { name: 'Karim Hasan', company: 'ABC Electronics', msg: 'Perfect. Let me know...', time: '10:36 AM', unread: 0, active: true },
                { name: 'Sara Rahman', company: 'Global Retail', msg: 'Can we schedule a call?', time: 'Yesterday', unread: 2, active: false },
                { name: 'Tanvir Chow...', company: 'Nexa Solutions', msg: 'Thanks for the update.', time: 'Tuesday', unread: 0, active: false }
              ].map((chat, i) => (
                <div key={i} className={`p-4 border-b border-slate-50 cursor-pointer transition-colors ${chat.active ? 'bg-emerald-50/30 border-l-4 border-l-emerald-500' : 'hover:bg-slate-50 border-l-4 border-l-transparent'}`}>
                  <div className="flex justify-between items-start mb-1">
                    <h3 className="text-sm font-bold text-slate-900 line-clamp-1">{chat.name}</h3>
                    <span className={`text-[10px] font-bold ${chat.unread ? 'text-emerald-600' : 'text-slate-400'}`}>{chat.time}</span>
                  </div>
                  <p className="text-xs font-medium text-slate-500 mb-1 line-clamp-1"><Building className="w-3 h-3 inline mr-1 text-slate-400"/>{chat.company}</p>
                  <div className="flex justify-between items-center">
                    <p className="text-sm text-slate-600 line-clamp-1 pr-4">{chat.msg}</p>
                    {chat.unread > 0 && <span className="w-5 h-5 bg-emerald-500 text-white text-[10px] font-black rounded-full flex items-center justify-center shrink-0 animate-in zoom-in">{chat.unread}</span>}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Center: Chat Interface */}
          <div className="lg:col-span-2 bg-white border border-slate-100 rounded-3xl shadow-[0_4px_20px_rgba(0,0,0,0.03)] flex flex-col overflow-hidden relative">
            {/* Chat Header */}
            <div className="p-4 border-b border-slate-50 bg-slate-50/50 flex justify-between items-center z-10 relative">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-10 h-10 bg-gradient-to-tr from-emerald-500 to-teal-400 text-white rounded-full flex items-center justify-center font-black">K</div>
                  <div className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-500 border-2 border-white rounded-full animate-pulse"></div>
                </div>
                <div>
                  <h2 className="text-sm font-black text-slate-900">Karim Hasan</h2>
                  <p className="text-[11px] font-bold text-emerald-500 uppercase tracking-wider">Online</p>
                </div>
              </div>
              <button className="text-slate-400 hover:text-slate-600"><MoreVertical className="w-5 h-5"/></button>
            </div>

            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto p-6 bg-[#f8f9fa] space-y-4">
              <div className="text-center mb-6"><span className="bg-white border border-slate-200 text-slate-400 text-[10px] font-black uppercase tracking-wider px-3 py-1 rounded-full shadow-sm">Today</span></div>
              {messages.map((msg) => (
                <div key={msg.id} className={`flex flex-col ${msg.sender === 'me' ? 'items-end' : 'items-start'} animate-in slide-in-from-bottom-2 fade-in duration-300`}>
                  <div className={`max-w-[75%] p-3 shadow-sm ${msg.sender === 'me' ? 'bg-emerald-600 text-white rounded-2xl rounded-br-sm' : 'bg-white border border-slate-100 text-slate-800 rounded-2xl rounded-bl-sm'}`}>
                    <p className="text-sm font-medium leading-relaxed">{msg.text}</p>
                  </div>
                  <div className="flex items-center gap-1 mt-1 px-1">
                    <span className="text-[10px] font-bold text-slate-400">{msg.time}</span>
                    {msg.sender === 'me' && msg.status === 'read' && <CheckCheck className="w-3 h-3 text-blue-500"/>}
                    {msg.sender === 'me' && msg.status === 'delivered' && <CheckCheck className="w-3 h-3 text-slate-400"/>}
                    {msg.sender === 'me' && msg.status === 'sent' && <Check className="w-3 h-3 text-slate-400"/>}
                  </div>
                </div>
              ))}
            </div>

            {/* Composer */}
            <div className="p-4 bg-white border-t border-slate-50 flex items-end gap-3">
              <button className="p-3 text-slate-400 hover:text-slate-600 transition-colors"><Smile className="w-5 h-5"/></button>
              <button className="p-3 text-slate-400 hover:text-slate-600 transition-colors"><Paperclip className="w-5 h-5"/></button>
              <textarea 
                rows="1"
                placeholder="Type a message..." 
                className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-4 py-3 text-sm font-medium focus:outline-none focus:border-emerald-500 focus:bg-white transition-all resize-none"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && !e.shiftKey && (e.preventDefault(), handleSend())}
              />
              <button onClick={handleSend} className="p-3 bg-emerald-500 hover:bg-emerald-600 text-white rounded-full shadow-md transition-all active:scale-95 shrink-0">
                <Send className="w-5 h-5 ml-0.5"/>
              </button>
            </div>
          </div>

          {/* Right: CRM Context */}
          <div className="bg-white border border-slate-100 rounded-3xl shadow-[0_4px_20px_rgba(0,0,0,0.03)] p-6 overflow-y-auto">
            <h3 className="text-sm font-black text-slate-900 mb-6 pb-4 border-b border-slate-50">Customer Context</h3>
            
            <div className="text-center mb-6">
              <div className="w-20 h-20 mx-auto bg-gradient-to-tr from-emerald-500 to-teal-400 text-white rounded-full flex items-center justify-center text-2xl font-black mb-3 shadow-lg shadow-emerald-500/20">K</div>
              <h2 className="text-lg font-black text-slate-900">Karim Hasan</h2>
              <p className="text-xs font-bold text-slate-500 flex items-center justify-center gap-1 mt-1"><Building className="w-3 h-3"/> ABC Electronics</p>
            </div>

            <div className="space-y-5">
              <div>
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-wider mb-1">Tags</p>
                <div className="flex gap-1.5">
                  <span className="bg-amber-50 text-amber-600 border border-amber-200 px-2 py-1 rounded text-[9px] font-black uppercase">VIP</span>
                  <span className="bg-slate-50 text-slate-600 border border-slate-200 px-2 py-1 rounded text-[9px] font-black uppercase">Enterprise</span>
                </div>
              </div>
              
              <div className="bg-orange-50/50 border border-orange-100 rounded-2xl p-4">
                <p className="text-[10px] font-black text-orange-500 uppercase tracking-wider mb-2 flex items-center gap-1"><Briefcase className="w-3 h-3"/> Active Opportunity</p>
                <h4 className="text-sm font-bold text-slate-900">CRM + POS Package</h4>
                <p className="text-lg font-black text-slate-800 mt-1">৳ 250,000</p>
                <p className="text-xs font-bold text-orange-600 mt-2">Stage: Proposal</p>
              </div>

              <div>
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-wider mb-2">Account Owner</p>
                <p className="text-sm font-bold text-slate-900 flex items-center gap-2"><User className="w-4 h-4 text-slate-400"/> Arif Hasan</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}