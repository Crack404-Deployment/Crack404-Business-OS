"use client";
import { useState } from 'react';
import Link from 'next/link';
import { 
  FaCubes, 
  FaThLarge, 
  FaUsers, 
  FaShoppingCart, 
  FaBox, 
  FaUsersCog, 
  FaChevronRight, 
  FaSignOutAlt, 
  FaTimes,
  FaRobot,
  FaUserCog,
  FaNetworkWired,
  FaBuilding,
  FaFileAlt,
  FaClipboardList,
  FaCog,
  FaCreditCard,
  FaPlug
} from 'react-icons/fa';

export default function Sidebar({ isOpen, toggleSidebar }) {
  const [openMenus, setOpenMenus] = useState({});

  const toggleMenu = (menu) => {
    setOpenMenus((prev) => ({ ...prev, [menu]: !prev[menu] }));
  };

  return (
    <>
      {/* Sidebar */}
      <aside 
        className={`fixed top-0 left-0 h-full w-[260px] bg-white border-r border-orange-100 flex flex-col z-50 transition-transform duration-300 ease-in-out shadow-2xl
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}
      >
        
        {/* ================= HEADER ================= */}
        <div className="h-[70px] flex items-center justify-between px-6 border-b border-orange-100 flex-shrink-0 bg-white">
          <Link
            href="/"
            className="cursor-pointer flex items-center gap-3 text-lg font-bold select-none hover:opacity-80 transition-opacity"
          >
            <FaCubes className="text-orange-500 text-xl" />
            <span className="text-gray-800 tracking-tight">
              Crack<span className="text-gray-400 font-normal">404</span>
            </span>
          </Link>
          
          <button 
            onClick={toggleSidebar}
            className="cursor-pointer text-gray-500 hover:text-orange-500 hover:bg-orange-50 p-2 rounded-lg transition-colors"
            aria-label="Close Sidebar"
          >
            <FaTimes className="text-lg" />
          </button>
        </div>

        {/* ================= NAVIGATION ================= */}
        <nav className="flex-1 py-4 overflow-y-auto px-3 custom-scrollbar">
          
          {/* DASHBOARD */}
          <Link href="/dashboard" className="cursor-pointer flex items-center gap-4 px-4 py-3 text-gray-600 hover:text-orange-600 hover:bg-orange-50 rounded-xl transition-all mb-1">
            <FaThLarge className="text-sm" /> <span className="text-sm font-medium">Dashboard</span>
          </Link>

          {/* ================= MODULES SECTION ================= */}
          <div className="mt-6 mb-2 px-4 text-[10px] font-bold uppercase tracking-widest text-gray-400">Modules</div>

          {/* CRM (Dropdown) */}
          <div className="mb-1">
            <div 
              onClick={() => toggleMenu('crm')} 
              className="cursor-pointer flex items-center justify-between px-4 py-3 text-gray-600 hover:text-orange-600 hover:bg-orange-50 rounded-xl transition-all"
            >
              <div className="flex items-center gap-4"><FaUsers className="text-sm" /> <span className="text-sm font-medium">CRM</span></div>
              <FaChevronRight className={`text-[10px] transition-transform duration-300 ${openMenus.crm ? 'rotate-90' : ''}`} />
            </div>
            {openMenus.crm && (
              <div className="pl-11 space-y-1 mt-1 overflow-hidden">
                <Link href="/crm/dashboard" className="cursor-pointer block px-4 py-2 text-sm text-gray-500 hover:text-orange-500 hover:bg-orange-50 rounded-lg transition-colors">Dashboard</Link>
                <Link href="/crm/leads" className="cursor-pointer block px-4 py-2 text-sm text-gray-500 hover:text-orange-500 hover:bg-orange-50 rounded-lg transition-colors">Leads</Link>
                <Link href="/crm/contacts" className="cursor-pointer block px-4 py-2 text-sm text-gray-500 hover:text-orange-500 hover:bg-orange-50 rounded-lg transition-colors">Contacts</Link>
              </div>
            )}
          </div>

          {/* POS (Dropdown) */}
          <div className="mb-1">
            <div 
              onClick={() => toggleMenu('pos')} 
              className="cursor-pointer flex items-center justify-between px-4 py-3 text-gray-600 hover:text-orange-600 hover:bg-orange-50 rounded-xl transition-all"
            >
              <div className="flex items-center gap-4"><FaShoppingCart className="text-sm" /> <span className="text-sm font-medium">POS</span></div>
              <FaChevronRight className={`text-[10px] transition-transform duration-300 ${openMenus.pos ? 'rotate-90' : ''}`} />
            </div>
            {openMenus.pos && (
              <div className="pl-11 space-y-1 mt-1 overflow-hidden">
                 <Link href="/pos/dashboard" className="cursor-pointer block px-4 py-2 text-sm text-gray-500 hover:text-orange-500 hover:bg-orange-50 rounded-lg transition-colors">Dashboard</Link>
                <Link href="/pos/transactions" className="cursor-pointer block px-4 py-2 text-sm text-gray-500 hover:text-orange-500 hover:bg-orange-50 rounded-lg transition-colors">Transactions</Link>
                <Link href="/pos/orders" className="cursor-pointer block px-4 py-2 text-sm text-gray-500 hover:text-orange-500 hover:bg-orange-50 rounded-lg transition-colors">Orders</Link>
              </div>
            )}
          </div>

          {/* Inventory (Dropdown) */}
          <div className="mb-1">
            <div 
              onClick={() => toggleMenu('inventory')} 
              className="cursor-pointer flex items-center justify-between px-4 py-3 text-gray-600 hover:text-orange-600 hover:bg-orange-50 rounded-xl transition-all"
            >
              <div className="flex items-center gap-4"><FaBox className="text-sm" /> <span className="text-sm font-medium">Inventory</span></div>
              <FaChevronRight className={`text-[10px] transition-transform duration-300 ${openMenus.inventory ? 'rotate-90' : ''}`} />
            </div>
            {openMenus.inventory && (
              <div className="pl-11 space-y-1 mt-1 overflow-hidden">
                 <Link href="/inventory/dashboard" className="cursor-pointer block px-4 py-2 text-sm text-gray-500 hover:text-orange-500 hover:bg-orange-50 rounded-lg transition-colors">Dashboard</Link>
                <Link href="/inventory/products" className="cursor-pointer block px-4 py-2 text-sm text-gray-500 hover:text-orange-500 hover:bg-orange-50 rounded-lg transition-colors">Products</Link>
                <Link href="/inventory/warehouse" className="cursor-pointer block px-4 py-2 text-sm text-gray-500 hover:text-orange-500 hover:bg-orange-50 rounded-lg transition-colors">Warehouse</Link>
              </div>
            )}
          </div>

          {/* HRM (Dropdown) */}
          <div className="mb-1">
            <div 
              onClick={() => toggleMenu('hrm')} 
              className="cursor-pointer flex items-center justify-between px-4 py-3 text-gray-600 hover:text-orange-600 hover:bg-orange-50 rounded-xl transition-all"
            >
              <div className="flex items-center gap-4"><FaUsersCog className="text-sm" /> <span className="text-sm font-medium">HRM</span></div>
              <FaChevronRight className={`text-[10px] transition-transform duration-300 ${openMenus.hrm ? 'rotate-90' : ''}`} />
            </div>
            {openMenus.hrm && (
              <div className="pl-11 space-y-1 mt-1 overflow-hidden">
                 <Link href="/hrm/dashboard" className="cursor-pointer block px-4 py-2 text-sm text-gray-500 hover:text-orange-500 hover:bg-orange-50 rounded-lg transition-colors">Dashboard</Link>
                <Link href="/hrm/employees" className="cursor-pointer block px-4 py-2 text-sm text-gray-500 hover:text-orange-500 hover:bg-orange-50 rounded-lg transition-colors">Employees</Link>
                <Link href="/hrm/payroll" className="cursor-pointer block px-4 py-2 text-sm text-gray-500 hover:text-orange-500 hover:bg-orange-50 rounded-lg transition-colors">Payroll</Link>
              </div>
            )}
          </div>

          {/* Accounting (Dropdown) */}
          <div className="mb-1">
            <div 
              onClick={() => toggleMenu('accounting')} 
              className="cursor-pointer flex items-center justify-between px-4 py-3 text-gray-600 hover:text-orange-600 hover:bg-orange-50 rounded-xl transition-all"
            >
              <div className="flex items-center gap-4"><FaClipboardList className="text-sm" /> <span className="text-sm font-medium">Accounting</span></div>
              <FaChevronRight className={`text-[10px] transition-transform duration-300 ${openMenus.accounting ? 'rotate-90' : ''}`} />
            </div>
            {openMenus.accounting && (
              <div className="pl-11 space-y-1 mt-1 overflow-hidden">
                 <Link href="/accounting/dashboard" className="cursor-pointer block px-4 py-2 text-sm text-gray-500 hover:text-orange-500 hover:bg-orange-50 rounded-lg transition-colors">Dashboard</Link>
                <Link href="/accounting/invoices" className="cursor-pointer block px-4 py-2 text-sm text-gray-500 hover:text-orange-500 hover:bg-orange-50 rounded-lg transition-colors">Invoices</Link>
                <Link href="/accounting/financialreport" className="cursor-pointer block px-4 py-2 text-sm text-gray-500 hover:text-orange-500 hover:bg-orange-50 rounded-lg transition-colors">Financial Reports</Link>
              </div>
            )}
          </div>

          {/* Marketing (Dropdown) */}
          <div className="mb-1">
            <div 
              onClick={() => toggleMenu('marketing')} 
              className="cursor-pointer flex items-center justify-between px-4 py-3 text-gray-600 hover:text-orange-600 hover:bg-orange-50 rounded-xl transition-all"
            >
              <div className="flex items-center gap-4"><FaNetworkWired className="text-sm" /> <span className="text-sm font-medium">Marketing</span></div>
              <FaChevronRight className={`text-[10px] transition-transform duration-300 ${openMenus.marketing ? 'rotate-90' : ''}`} />
            </div>
            {openMenus.marketing && (
              <div className="pl-11 space-y-1 mt-1 overflow-hidden">
                 <Link href="/marketing/dashboard" className="cursor-pointer block px-4 py-2 text-sm text-gray-500 hover:text-orange-500 hover:bg-orange-50 rounded-lg transition-colors">Dashboard</Link>
                <Link href="/marketing/campaigns" className="cursor-pointer block px-4 py-2 text-sm text-gray-500 hover:text-orange-500 hover:bg-orange-50 rounded-lg transition-colors">Campaigns</Link>
                <Link href="/marketing/analytics" className="cursor-pointer block px-4 py-2 text-sm text-gray-500 hover:text-orange-500 hover:bg-orange-50 rounded-lg transition-colors">Analytics</Link>
              </div>
            )}
          </div>

          {/* AI Assistant */}
          <Link href="/aiassistant" className="cursor-pointer flex items-center gap-4 px-4 py-3 text-gray-600 hover:text-orange-600 hover:bg-orange-50 rounded-xl transition-all mb-1">
            <FaRobot className="text-sm" /> <span className="text-sm font-medium">AI Assistant</span>
          </Link>

          {/* ================= ADMINISTRATION SECTION ================= */}
          <div className="mt-6 mb-2 px-4 text-[10px] font-bold uppercase tracking-widest text-gray-400">Administration</div>

          <Link href="/administration/users&roles" className="cursor-pointer flex items-center gap-4 px-4 py-3 text-gray-600 hover:text-orange-600 hover:bg-orange-50 rounded-xl transition-all mb-1">
            <FaUserCog className="text-sm" /> <span className="text-sm font-medium">Users & Roles</span>
          </Link>
          <Link href="/administration/branches" className="cursor-pointer flex items-center gap-4 px-4 py-3 text-gray-600 hover:text-orange-600 hover:bg-orange-50 rounded-xl transition-all mb-1">
            <FaBuilding className="text-sm" /> <span className="text-sm font-medium">Branches</span>
          </Link>
          <Link href="/administration/departments" className="cursor-pointer flex items-center gap-4 px-4 py-3 text-gray-600 hover:text-orange-600 hover:bg-orange-50 rounded-xl transition-all mb-1">
            <FaBuilding className="text-sm" /> <span className="text-sm font-medium">Departments</span>
          </Link>
          <Link href="/administration/auditlogs" className="cursor-pointer flex items-center gap-4 px-4 py-3 text-gray-600 hover:text-orange-600 hover:bg-orange-50 rounded-xl transition-all mb-1">
            <FaFileAlt className="text-sm" /> <span className="text-sm font-medium">Audit Logs</span>
          </Link>

          {/* ================= SETTINGS SECTION ================= */}
          <div className="mt-6 mb-2 px-4 text-[10px] font-bold uppercase tracking-widest text-gray-400">Settings</div>

          <Link href="/settings/systemsettings" className="cursor-pointer flex items-center gap-4 px-4 py-3 text-gray-600 hover:text-orange-600 hover:bg-orange-50 rounded-xl transition-all mb-1">
            <FaCog className="text-sm" /> <span className="text-sm font-medium">System Settings</span>
          </Link>
          <Link href="/settings/subscription" className="cursor-pointer flex items-center gap-4 px-4 py-3 text-gray-600 hover:text-orange-600 hover:bg-orange-50 rounded-xl transition-all mb-1">
            <FaCreditCard className="text-sm" /> <span className="text-sm font-medium">Subscription</span>
          </Link>
          <Link href="/settings/integrations" className="cursor-pointer flex items-center gap-4 px-4 py-3 text-gray-600 hover:text-orange-600 hover:bg-orange-50 rounded-xl transition-all mb-1">
            <FaPlug className="text-sm" /> <span className="text-sm font-medium">Integrations</span>
          </Link>

          {/* ================= FOOTER ================= */}
          <div className="border-t border-orange-100 p-4 mx-3 mt-6 flex-shrink-0">
            <Link href="/logout" className="cursor-pointer flex items-center gap-4 px-4 py-3 text-red-500 hover:text-red-600 hover:bg-red-50 rounded-xl transition-all">
              <FaSignOutAlt className="text-sm" /> <span className="text-sm font-medium">Logout</span>
            </Link>
          </div>

        </nav>

      </aside>

      {/* Dark Overlay for Mobile */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden cursor-pointer" 
          onClick={toggleSidebar}
        ></div>
      )}
    </>
  );
}