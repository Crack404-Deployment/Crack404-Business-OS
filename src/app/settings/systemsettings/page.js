'use client';
import { useState } from 'react';
import { Sliders, Globe, DollarSign, Bell, Shield, Save, CheckCircle2 } from 'lucide-react';

export default function SystemSettings() {
  const [settings, setSettings] = useState({
    siteName: "Crack404 LTD. ERP & POS",
    timezone: "Asia/Dhaka (GMT +6:00)",
    currency: "USD ($)",
    taxRate: "5.0%",
    emailAlerts: true,
    smsNotifications: false,
    maintenanceMode: false
  });
  const [saved, setSaved] = useState(false);

  const handleSave = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans p-4 sm:p-6 lg:p-8 text-slate-900">
      <div className="max-w-[1200px] mx-auto space-y-6">
        
        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
          <div>
            <h1 className="text-2xl sm:text-3xl font-black tracking-tight">System Configuration</h1>
            <p className="text-sm font-medium text-slate-500 mt-1">Manage core platform preferences, currencies, and tax parameters.</p>
          </div>
          <button 
            onClick={handleSave}
            className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-2.5 rounded-xl font-bold shadow-sm transition-all flex items-center justify-center gap-2"
          >
            <Save className="w-4 h-4" /> Save Changes
          </button>
        </div>

        {saved && (
          <div className="p-4 bg-emerald-50 border border-emerald-200 text-emerald-700 rounded-xl text-sm font-bold flex items-center gap-2 animate-pulse">
            <CheckCircle2 className="w-5 h-5" /> Settings updated successfully across all microservices!
          </div>
        )}

        <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm space-y-8">
          
          {/* General Section */}
          <div className="space-y-4">
            <h3 className="text-sm font-black text-slate-400 uppercase tracking-wider flex items-center gap-2 border-b border-slate-100 pb-2">
              <Globe className="w-4 h-4 text-orange-500" /> General Preferences
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Company / System Name</label>
                <input 
                  type="text" 
                  value={settings.siteName} 
                  onChange={e => setSettings({...settings, siteName: e.target.value})}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm font-medium focus:outline-none focus:border-orange-500"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Default Timezone</label>
                <select 
                  value={settings.timezone}
                  onChange={e => setSettings({...settings, timezone: e.target.value})}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm font-medium focus:outline-none focus:border-orange-500"
                >
                  <option>Asia/Dhaka (GMT +6:00)</option>
                  <option>UTC</option>
                  <option>America/New_York</option>
                </select>
              </div>
            </div>
          </div>

          {/* Financial Settings */}
          <div className="space-y-4">
            <h3 className="text-sm font-black text-slate-400 uppercase tracking-wider flex items-center gap-2 border-b border-slate-100 pb-2">
              <DollarSign className="w-4 h-4 text-orange-500" /> POS & Accounting Defaults
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Base Currency</label>
                <select 
                  value={settings.currency}
                  onChange={e => setSettings({...settings, currency: e.target.value})}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm font-medium focus:outline-none focus:border-orange-500"
                >
                  <option>USD ($)</option>
                  <option>BDT (৳)</option>
                  <option>EUR (€)</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Default Tax Rate (VAT)</label>
                <input 
                  type="text" 
                  value={settings.taxRate} 
                  onChange={e => setSettings({...settings, taxRate: e.target.value})}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm font-medium focus:outline-none focus:border-orange-500"
                />
              </div>
            </div>
          </div>

          {/* Notifications & Security */}
          <div className="space-y-4">
            <h3 className="text-sm font-black text-slate-400 uppercase tracking-wider flex items-center gap-2 border-b border-slate-100 pb-2">
              <Bell className="w-4 h-4 text-orange-500" /> Notifications & Maintenance
            </h3>
            <div className="space-y-3">
              <label className="flex items-center justify-between p-4 bg-slate-50 border border-slate-200 rounded-xl cursor-pointer">
                <div>
                  <p className="text-sm font-bold text-slate-900">Email Alerts for Low Stock & High Value Leads</p>
                  <p className="text-xs text-slate-500">Receive instant automated emails when inventory hits critical thresholds.</p>
                </div>
                <input 
                  type="checkbox" 
                  checked={settings.emailAlerts} 
                  onChange={e => setSettings({...settings, emailAlerts: e.target.checked})}
                  className="w-5 h-5 accent-orange-600 rounded"
                />
              </label>

              <label className="flex items-center justify-between p-4 bg-slate-50 border border-slate-200 rounded-xl cursor-pointer">
                <div>
                  <p className="text-sm font-bold text-slate-900">Maintenance Mode</p>
                  <p className="text-xs text-slate-500">Temporarily restrict POS and customer portal access during database migrations.</p>
                </div>
                <input 
                  type="checkbox" 
                  checked={settings.maintenanceMode} 
                  onChange={e => setSettings({...settings, maintenanceMode: e.target.checked})}
                  className="w-5 h-5 accent-orange-600 rounded"
                />
              </label>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}