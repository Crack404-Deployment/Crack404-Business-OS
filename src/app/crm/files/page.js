'use client';
import { useState } from 'react';
import { Search, Filter, UploadCloud, FileText, FileSpreadsheet, Image as ImageIcon, MoreVertical, Download, Building, User, ChevronDown } from 'lucide-react';

export default function FilesPage() {
  const [searchTerm, setSearchTerm] = useState('');
  
  // 1. Changed the static array to a state variable
  const [files, setFiles] = useState([
    { id: 1, name: 'company-profile-2026.pdf', type: 'pdf', size: '2.4 MB', contact: 'Karim Hasan', company: 'ABC Electronics', uploader: 'Arif Hasan', date: 'Oct 24, 2026' },
    { id: 2, name: 'technical-requirements.docx', type: 'doc', size: '1.1 MB', contact: 'Sara Rahman', company: 'Global Retail', uploader: 'Nabila Islam', date: 'Oct 22, 2026' },
    { id: 3, name: 'pricing-matrix-v2.xlsx', type: 'sheet', size: '850 KB', contact: 'Rahim Ahmed', company: 'TechNova Ltd', uploader: 'Arif Hasan', date: 'Oct 18, 2026' },
    { id: 4, name: 'signed-contract-nexa.pdf', type: 'pdf', size: '3.2 MB', contact: 'Tanvir Chowdhury', company: 'Nexa Solutions', uploader: 'Sara Rahman', date: 'Oct 15, 2026' },
  ]);

  // 2. Added a function to handle the file selection
  const handleFileUpload = (e) => {
    const uploadedFiles = Array.from(e.target.files);
    
    if (uploadedFiles.length === 0) return;

    // Create a new file object for each uploaded file to display in the UI
    const newFileEntries = uploadedFiles.map((file) => {
      // Calculate nice file size (KB or MB)
      const sizeInMB = file.size / (1024 * 1024);
      const formattedSize = sizeInMB < 1 
        ? `${Math.round(file.size / 1024)} KB` 
        : `${sizeInMB.toFixed(1)} MB`;

      // Determine file type for the icon
      const extension = file.name.split('.').pop().toLowerCase();
      let type = 'other';
      if (['pdf'].includes(extension)) type = 'pdf';
      else if (['doc', 'docx'].includes(extension)) type = 'doc';
      else if (['xls', 'xlsx', 'csv'].includes(extension)) type = 'sheet';

      // Get today's date
      const today = new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });

      return {
        id: Date.now() + Math.random(), // generate unique ID for React key
        name: file.name,
        type: type,
        size: formattedSize,
        contact: 'Unassigned', // Default mock assignment
        company: 'Unassigned', // Default mock assignment
        uploader: 'Current User', // Default mock user
        date: today
      };
    });

    // Add the new files to the TOP of the table
    setFiles((prevFiles) => [...newFileEntries, ...prevFiles]);
  };

  const getFileIcon = (type) => {
    switch(type) {
      case 'pdf': return <FileText className="w-6 h-6 text-red-500"/>;
      case 'sheet': return <FileSpreadsheet className="w-6 h-6 text-emerald-500"/>;
      case 'doc': return <FileText className="w-6 h-6 text-blue-500"/>;
      default: return <FileText className="w-6 h-6 text-slate-400"/>;
    }
  };

  return (
    <div className="bg-white min-h-screen w-full">
      <div className="px-6 py-12 sm:px-8 sm:py-16 lg:py-20 max-w-7xl mx-auto space-y-8 animate-in fade-in duration-500">
        
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">File Attachments</h1>
            <p className="text-sm font-medium text-slate-500 mt-1">Centralize documents related to your customers and sales records.</p>
          </div>
        </div>

        {/* Upload Zone */}
        <label className="block border-2 border-dashed border-orange-200 bg-orange-50/30 rounded-3xl p-12 text-center hover:bg-orange-50/50 transition-colors cursor-pointer group">
          {/* 3. Added the onChange handler to the input */}
          <input 
            type="file" 
            className="hidden" 
            accept=".pdf,.doc,.docx,.xls,.xlsx,image/*" 
            multiple
            onChange={handleFileUpload}
          />
          <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm border border-orange-100 group-hover:scale-110 transition-transform">
            <UploadCloud className="w-8 h-8 text-orange-500"/>
          </div>
          <h3 className="text-lg font-black text-slate-900">Click to upload or drag files here</h3>
          <p className="text-sm font-medium text-slate-500 mt-2 max-w-md mx-auto">Upload PDF, DOCX, XLSX, or images. Attach them directly to leads, contacts, or opportunities. Max file size 50MB.</p>
        </label>

        {/* Toolbar */}
        <div className="flex flex-col sm:flex-row gap-4 justify-between bg-white p-4 rounded-2xl border border-slate-100 shadow-[0_4px_20px_rgba(0,0,0,0.03)]">
          <div className="relative w-full sm:max-w-md group">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 group-focus-within:text-orange-500 transition-colors"/>
            <input 
              type="text" 
              placeholder="Search files..." 
              className="w-full pl-11 pr-4 py-2.5 bg-slate-50 border border-slate-100 rounded-xl text-sm font-medium focus:bg-white focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all placeholder:text-slate-400"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="flex items-center gap-2">
            <button className="flex items-center gap-2 px-5 py-2.5 bg-white border border-slate-200 hover:border-orange-300 hover:bg-orange-50 hover:text-orange-600 rounded-xl text-sm font-bold text-slate-600 transition-colors shadow-sm">
              <Filter className="w-4 h-4"/> Filter <ChevronDown className="w-3 h-3 ml-1"/>
            </button>
          </div>
        </div>

        {/* Table */}
        <div className="bg-white border border-slate-100 rounded-3xl shadow-[0_4px_20px_rgba(0,0,0,0.03)] overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left whitespace-nowrap">
              <thead className="bg-white border-b border-slate-50 text-[10px] font-black text-slate-400 uppercase tracking-wider">
                <tr>
                  <th className="px-6 py-5">File Details</th>
                  <th className="px-6 py-5">Related To</th>
                  <th className="px-6 py-5">Uploaded By</th>
                  <th className="px-6 py-5">Date</th>
                  <th className="px-6 py-5 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-50">
                {files.map((file) => (
                  <tr key={file.id} className="hover:bg-orange-50/30 transition-colors group cursor-pointer">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-slate-50 border border-slate-100 rounded-xl flex items-center justify-center shrink-0">
                          {getFileIcon(file.type)}
                        </div>
                        <div>
                          <p className="text-sm font-bold text-slate-900 group-hover:text-orange-600 transition-colors">{file.name}</p>
                          <p className="text-[11px] font-black text-slate-400 uppercase tracking-wider mt-1">{file.size}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex flex-col gap-1.5">
                        <div className="flex items-center gap-2 text-sm font-bold text-slate-800"><Building className="w-3.5 h-3.5 text-orange-400"/> {file.company}</div>
                        <div className="flex items-center gap-2 text-xs font-medium text-slate-500"><User className="w-3.5 h-3.5 text-slate-400"/> {file.contact}</div>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm font-medium text-slate-600">{file.uploader}</td>
                    <td className="px-6 py-4 text-sm font-bold text-slate-700">{file.date}</td>
                    <td className="px-6 py-4 text-right">
                      <button className="text-slate-400 hover:text-orange-600 transition-colors p-2 rounded-xl hover:bg-orange-50 mr-1" title="Download">
                        <Download className="w-4 h-4"/>
                      </button>
                      <button className="text-slate-400 hover:text-slate-600 transition-colors p-2 rounded-xl hover:bg-slate-50">
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