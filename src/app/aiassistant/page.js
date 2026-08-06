'use client';
import { useState, useRef, useEffect } from 'react';
import { Bot, User, Send, Sparkles, RefreshCw, Paperclip, BarChart2, Mail, Users } from 'lucide-react';

export default function AIAssistant() {
  const [messages, setMessages] = useState([
    { role: 'ai', content: 'Hello Sourav! I am your Crack404 CRM AI Assistant. How can I help you optimize your business today?' }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const quickPrompts = [
    { icon: Mail, text: "Generate a promotional email for the Back to School sale." },
    { icon: BarChart2, text: "Analyze yesterday's POS revenue across branches." },
    { icon: Users, text: "Identify customers with high churn risk." }
  ];

  const handleSend = (text) => {
    const query = text || input;
    if (!query.trim()) return;

    // Add user message
    setMessages(prev => [...prev, { role: 'user', content: query }]);
    setInput('');
    setIsTyping(true);

    // Simulate AI response delay
    setTimeout(() => {
      setIsTyping(false);
      setMessages(prev => [...prev, { 
        role: 'ai', 
        content: `Here is a simulated response to your request regarding "${query}". As your AI assistant, I can pull real-time data from your POS, HRM, and Marketing modules once fully integrated with the backend API.` 
      }]);
    }, 1500);
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  return (
    <div className="min-h-screen bg-slate-50 font-sans p-4 sm:p-6 lg:p-8 flex flex-col items-center">
      <div className="w-full max-w-4xl bg-white border border-slate-200 rounded-2xl shadow-sm flex flex-col h-[calc(100vh-100px)] overflow-hidden">
        
        {/* Header */}
        <div className="p-4 border-b border-slate-200 bg-slate-50 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-orange-100 text-orange-600 flex items-center justify-center shadow-inner">
              <Bot className="w-6 h-6" />
            </div>
            <div>
              <h1 className="text-lg font-black text-slate-900 flex items-center gap-2">Crack404 Copilot <Sparkles className="w-4 h-4 text-amber-500"/></h1>
              <p className="text-xs font-bold text-emerald-600 flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-emerald-500"></span> Online & Ready
              </p>
            </div>
          </div>
          <button onClick={() => setMessages([{ role: 'ai', content: 'Chat history cleared. How can I help you?' }])} className="p-2 text-slate-400 hover:bg-slate-200 rounded-lg transition-colors" title="Clear Chat">
            <RefreshCw className="w-5 h-5" />
          </button>
        </div>

        {/* Chat Area */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-6 custom-scrollbar bg-slate-50/50">
          {messages.length === 1 && (
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8">
              {quickPrompts.map((prompt, i) => {
                const Icon = prompt.icon;
                return (
                  <button key={i} onClick={() => handleSend(prompt.text)} className="p-4 bg-white border border-slate-200 rounded-xl text-left hover:border-orange-400 hover:shadow-md transition-all group">
                    <Icon className="w-5 h-5 text-slate-400 group-hover:text-orange-500 mb-2"/>
                    <p className="text-xs font-bold text-slate-700">{prompt.text}</p>
                  </button>
                )
              })}
            </div>
          )}

          {messages.map((msg, index) => (
            <div key={index} className={`flex gap-4 ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${msg.role === 'user' ? 'bg-slate-200 text-slate-600' : 'bg-orange-600 text-white'}`}>
                {msg.role === 'user' ? <User className="w-5 h-5" /> : <Bot className="w-5 h-5" />}
              </div>
              <div className={`max-w-[80%] p-4 rounded-2xl text-sm font-medium leading-relaxed shadow-sm ${
                msg.role === 'user' ? 'bg-slate-900 text-white rounded-tr-none' : 'bg-white border border-slate-200 text-slate-800 rounded-tl-none'
              }`}>
                {msg.content}
              </div>
            </div>
          ))}
          
          {isTyping && (
            <div className="flex gap-4">
              <div className="w-8 h-8 rounded-full bg-orange-600 text-white flex items-center justify-center shrink-0">
                <Bot className="w-5 h-5" />
              </div>
              <div className="p-4 bg-white border border-slate-200 rounded-2xl rounded-tl-none shadow-sm flex items-center gap-1.5">
                <div className="w-2 h-2 bg-slate-300 rounded-full animate-bounce"></div>
                <div className="w-2 h-2 bg-slate-300 rounded-full animate-bounce" style={{ animationDelay: "0.2s" }}></div>
                <div className="w-2 h-2 bg-slate-300 rounded-full animate-bounce" style={{ animationDelay: "0.4s" }}></div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input Area */}
        <div className="p-4 bg-white border-t border-slate-200 shrink-0">
          <div className="relative flex items-center bg-slate-50 border border-slate-200 rounded-xl focus-within:border-orange-500 focus-within:ring-2 focus-within:ring-orange-500/20 transition-all p-1">
            <button className="p-2 text-slate-400 hover:text-slate-600 transition-colors">
              <Paperclip className="w-5 h-5" />
            </button>
            <input 
              type="text" 
              placeholder="Ask anything about your CRM, inventory, or marketing..." 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              className="flex-1 bg-transparent border-none focus:outline-none text-sm font-medium px-2 py-2.5 text-slate-900 placeholder-slate-400"
            />
            <button 
              onClick={() => handleSend()}
              disabled={!input.trim()}
              className="p-2.5 bg-orange-600 hover:bg-orange-700 disabled:bg-slate-300 text-white rounded-lg transition-colors flex items-center justify-center"
            >
              <Send className="w-4 h-4" />
            </button>
          </div>
          <p className="text-center text-[10px] font-bold text-slate-400 mt-2">Crack404 Copilot can make mistakes. Verify important financial data.</p>
        </div>

      </div>
    </div>
  );
}