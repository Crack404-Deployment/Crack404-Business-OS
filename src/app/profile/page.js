'use client';

import { useState, useRef } from 'react';
import Image from 'next/image';
import { Camera, User, Mail, Building, MapPin, Bell, Shield, LogOut, CheckCircle2 } from 'lucide-react';

export default function UserProfile() {
  const [profileImage, setProfileImage] = useState(null);
  const fileInputRef = useRef(null);
  const [isEditing, setIsEditing] = useState(false);

  // Core User Data
  const [userData, setUserData] = useState({
    name: "Sourav Das Gupta",
    email: "sourav@crack404.com",
    role: "System Administrator",
    organization: "Crack404",
    location: "Sylhet",
  });

  // Basic Notifications
  const [notifications, setNotifications] = useState({
    emailAlerts: true,
    orderUpdates: true,
    securityAlerts: true,
    marketing: false
  });

  const recentActivity = [
    { id: 1, action: "Logged in via Google Authentication", time: "2 hours ago" },
    { id: 2, action: "Exported Transactions Report", time: "5 hours ago" },
    { id: 3, action: "Updated Password", time: "2 days ago" },
  ];

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setProfileImage(imageUrl);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData((prev) => ({ ...prev, [name]: value }));
  };

  const toggleNotification = (key) => {
    setNotifications(prev => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 pt-8 pb-12 font-sans px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto space-y-6">
        
        {/* Header */}
        <div>
          <h1 className="text-2xl sm:text-3xl font-black tracking-tight">My Profile</h1>
          <p className="text-sm font-medium text-slate-500 mt-1">Manage your account settings and preferences.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* LEFT COLUMN: Identity Card */}
          <div className="lg:col-span-1 space-y-6">
            
            <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm text-center relative">
              <input type="file" accept="image/*" className="hidden" ref={fileInputRef} onChange={handleImageUpload} />
              
              {/* Avatar Upload */}
              <div 
                className="relative w-28 h-28 mx-auto rounded-full bg-slate-100 mb-4 cursor-pointer group border-4 border-white shadow-md hover:border-orange-100 transition-all"
                onClick={() => fileInputRef.current.click()}
              >
                <div className="w-full h-full rounded-full flex items-center justify-center overflow-hidden relative bg-slate-100 text-slate-400">
                  {profileImage ? (
                    <Image src={profileImage} alt="Profile" fill className="object-cover" />
                  ) : (
                    <User className="w-12 h-12 text-slate-300" />
                  )}
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-slate-900/50 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <Camera className="w-6 h-6 text-white mb-1" />
                    <span className="text-[10px] font-bold text-white uppercase tracking-wider">Change</span>
                  </div>
                </div>
              </div>

              <h2 className="text-xl font-black text-slate-900">{userData.name}</h2>
              <p className="text-sm font-medium text-slate-500 mb-4">{userData.role}</p>

              <div className="flex flex-col gap-2 mb-6 text-sm font-medium text-slate-600">
                <div className="flex items-center justify-center gap-2">
                  <Mail className="w-4 h-4 text-slate-400" /> {userData.email}
                </div>
                <div className="flex items-center justify-center gap-2">
                  <Building className="w-4 h-4 text-slate-400" /> {userData.organization}
                </div>
                <div className="flex items-center justify-center gap-2">
                  <MapPin className="w-4 h-4 text-slate-400" /> {userData.location}
                </div>
              </div>

              <button 
                onClick={() => setIsEditing(!isEditing)} 
                className="w-full py-2.5 bg-orange-50 hover:bg-orange-100 text-orange-600 text-sm font-bold rounded-xl transition-colors border border-orange-200"
              >
                {isEditing ? "Cancel Editing" : "Edit Profile"}
              </button>
            </div>

          </div>

          {/* RIGHT COLUMN: Settings & Activity */}
          <div className="lg:col-span-2 space-y-6">
            
            {/* Form Section */}
            <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
              <h3 className="text-lg font-bold text-slate-900 mb-4 pb-2 border-b border-slate-100 flex items-center gap-2">
                <User className="w-5 h-5 text-orange-500" /> Personal Information
              </h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-1.5">Full Name</label>
                  <input 
                    type="text" 
                    name="name" 
                    value={userData.name} 
                    onChange={handleInputChange} 
                    disabled={!isEditing}
                    className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-2.5 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-orange-500/30 focus:border-orange-500 disabled:opacity-60 transition-all" 
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-1.5">Email Address</label>
                  <input 
                    type="email" 
                    name="email" 
                    value={userData.email} 
                    onChange={handleInputChange} 
                    disabled={!isEditing}
                    className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-2.5 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-orange-500/30 focus:border-orange-500 disabled:opacity-60 transition-all" 
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-1.5">Organization</label>
                  <input 
                    type="text" 
                    name="organization" 
                    value={userData.organization} 
                    onChange={handleInputChange} 
                    disabled={!isEditing}
                    className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-2.5 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-orange-500/30 focus:border-orange-500 disabled:opacity-60 transition-all" 
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-1.5">Location</label>
                  <input 
                    type="text" 
                    name="location" 
                    value={userData.location} 
                    onChange={handleInputChange} 
                    disabled={!isEditing}
                    className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-2.5 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-orange-500/30 focus:border-orange-500 disabled:opacity-60 transition-all" 
                  />
                </div>
              </div>
              
              {isEditing && (
                <div className="mt-6 flex justify-end">
                  <button 
                    onClick={() => setIsEditing(false)} 
                    className="px-6 py-2.5 bg-orange-600 hover:bg-orange-700 text-white text-sm font-bold rounded-xl shadow-md shadow-orange-600/20 transition-all"
                  >
                    Save Changes
                  </button>
                </div>
              )}
            </div>

            {/* Notifications & Security */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              
              {/* Notifications */}
              <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
                <h3 className="text-lg font-bold text-slate-900 mb-4 pb-2 border-b border-slate-100 flex items-center gap-2">
                  <Bell className="w-5 h-5 text-orange-500" /> Notifications
                </h3>
                <div className="space-y-4">
                  {Object.entries(notifications).map(([key, value]) => (
                    <div key={key} className="flex justify-between items-center">
                      <span className="text-sm font-medium text-slate-600 capitalize">
                        {key.replace(/([A-Z])/g, ' $1').trim()}
                      </span>
                      <button 
                        onClick={() => toggleNotification(key)}
                        className={`w-11 h-6 rounded-full relative transition-colors ${value ? 'bg-orange-500' : 'bg-slate-200'}`}
                      >
                        <span className={`absolute top-1 left-1 bg-white w-4 h-4 rounded-full transition-transform ${value ? 'translate-x-5' : 'translate-x-0'}`}></span>
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              {/* Security */}
              <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-4 pb-2 border-b border-slate-100 flex items-center gap-2">
                    <Shield className="w-5 h-5 text-orange-500" /> Security
                  </h3>
                  <p className="text-sm font-medium text-slate-500 mb-4">
                    Protect your account with extra security layers and manage your active sessions.
                  </p>
                </div>
                <div className="space-y-3">
                  <button className="w-full py-2.5 bg-slate-50 hover:bg-slate-100 text-slate-700 text-sm font-bold rounded-xl transition-colors border border-slate-200">
                    Change Password
                  </button>
                  <button className="w-full py-2.5 bg-red-50 hover:bg-red-100 text-red-600 text-sm font-bold rounded-xl transition-colors border border-red-200 flex justify-center items-center gap-2">
                    <LogOut className="w-4 h-4" /> Log Out Everywhere
                  </button>
                </div>
              </div>

            </div>

            {/* Recent Activity */}
            <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
              <h3 className="text-lg font-bold text-slate-900 mb-4 pb-2 border-b border-slate-100">Recent Activity</h3>
              <div className="space-y-4">
                {recentActivity.map((activity) => (
                  <div key={activity.id} className="flex gap-4 items-start">
                    <div className="mt-0.5">
                      <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-slate-800">{activity.action}</p>
                      <p className="text-xs font-medium text-slate-500 mt-0.5">{activity.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}