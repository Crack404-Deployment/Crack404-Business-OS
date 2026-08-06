'use client';
import { useState } from 'react';
import { Plug, CheckCircle2, ExternalLink, RefreshCw } from 'lucide-react';

export default function Integrations() {
  const [integrations, setIntegrations] = useState([
    { id: "stripe", name: "Stripe Payment Gateway", category: "Payments", status: "Connected", desc: "Accept international credit card payments securely at POS." },
    { id: "bkash", name: "bKash / Nagad API", category: "Mobile Banking", status: "Connected", desc: "Instant mobile financial service checkout integration for Bangladesh." },
    { id: "twilio", name: "Twilio SMS Gateway", category: "Marketing & Alerts", status: "Disconnected", desc: "Automated SMS order confirmations and marketing broadcasts." },
    { id: "aws", name: "AWS S3 Cloud Backup", category: "Storage", status: "Connected", desc: "Automated daily database backups and product image hosting." },
    { id: "mailchimp", name: "Mailchimp Newsletter", category: "Marketing", status: "Disconnected", desc: "Sync CRM customer directories with automated email campaigns." },
  ]);

  const toggleConnection = (id) => {
    setIntegrations(prev => prev.map(item => {
      if (item.id === id) {
        return { ...item, status: item.status === 'Connected' ? 'Disconnected' : 'Connected' };
      }
      return item;
    }));
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans p-4 sm:p-6 lg:p-8 text-slate-900">
      <div className="max-w-[1200px] mx-auto space-y-6">
        
        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
          <div>
            <h1 className="text-2xl sm:text-3xl font-black tracking-tight">API & Third-Party Integrations</h1>
            <p className="text-sm font-medium text-slate-500 mt-1">Connect payment gateways, SMS tools, and cloud storage providers.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {integrations.map(item => (
            <div key={item.id} className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm flex flex-col justify-between hover:border-orange-300 transition-all">
              <div>
                <div className="flex justify-between items-start mb-3">
                  <div className="p-3 bg-slate-100 rounded-xl text-slate-700">
                    <Plug className="w-5 h-5" />
                  </div>
                  <span className={`text-[10px] font-bold px-2.5 py-1 rounded-md border ${
                    item.status === 'Connected' ? 'bg-emerald-50 text-emerald-700 border-emerald-200' : 'bg-slate-100 text-slate-600 border-slate-200'
                  }`}>
                    {item.status}
                  </span>
                </div>
                <span className="text-[10px] font-bold text-orange-600 uppercase tracking-wider">{item.category}</span>
                <h3 className="text-lg font-black text-slate-900 mt-0.5">{item.name}</h3>
                <p className="text-xs text-slate-500 mt-2 leading-relaxed">{item.desc}</p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex justify-between items-center">
                <button className="text-xs font-bold text-slate-500 hover:text-slate-900 flex items-center gap-1">
                  Configure API <ExternalLink className="w-3 h-3" />
                </button>
                <button 
                  onClick={() => toggleConnection(item.id)}
                  className={`px-4 py-1.5 rounded-xl text-xs font-bold transition-all ${
                    item.status === 'Connected' 
                      ? 'bg-rose-50 hover:bg-rose-100 text-rose-700 border border-rose-200' 
                      : 'bg-orange-600 hover:bg-orange-700 text-white'
                  }`}
                >
                  {item.status === 'Connected' ? 'Disconnect' : 'Connect'}
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}