"use client";
import { useState } from "react";
import Link from "next/link";
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
  FaPlug,
  FaHeadset,
  FaChartBar,
  FaBell,
  FaHistory,
  FaQuestionCircle,
  FaBook,
} from "react-icons/fa";

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
        ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
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
        <nav className="flex-1 py-4 overflow-y-auto px-3 custom-scrollbar pb-24">
          {/* DASHBOARD */}
          <Link
            href="/dashboard"
            className="cursor-pointer flex items-center gap-4 px-4 py-3 text-gray-600 hover:text-orange-600 hover:bg-orange-50 rounded-xl transition-all mb-1"
          >
            <FaThLarge className="text-sm" />{" "}
            <span className="text-sm font-medium">Dashboard</span>
          </Link>

          {/* ================= MODULES SECTION ================= */}
          <div className="mt-6 mb-2 px-4 text-[10px] font-bold uppercase tracking-widest text-gray-400">
            Modules
          </div>

          {/* CRM (Dropdown) */}
          <div className="mb-1">
            <div
              onClick={() => toggleMenu("crm")}
              className="cursor-pointer flex items-center justify-between px-4 py-3 text-gray-600 hover:text-orange-600 hover:bg-orange-50 rounded-xl transition-all"
            >
              <div className="flex items-center gap-4">
                <FaUsers className="text-sm" />{" "}
                <span className="text-sm font-medium">CRM</span>
              </div>
              <FaChevronRight
                className={`text-[10px] transition-transform duration-300 ${openMenus.crm ? "rotate-90" : ""}`}
              />
            </div>
            {openMenus.crm && (
              <div className="pl-11 space-y-1 mt-1 overflow-hidden">
                <Link
                  href="/crm/overview"
                  className="cursor-pointer block px-4 py-2 text-sm text-gray-500 hover:text-orange-500 hover:bg-orange-50 rounded-lg transition-colors"
                >
                  Overview
                </Link>
                <Link
                  href="/crm/leads"
                  className="cursor-pointer block px-4 py-2 text-sm text-gray-500 hover:text-orange-500 hover:bg-orange-50 rounded-lg transition-colors"
                >
                  Leads
                </Link>
                <Link
                  href="/crm/contacts"
                  className="cursor-pointer block px-4 py-2 text-sm text-gray-500 hover:text-orange-500 hover:bg-orange-50 rounded-lg transition-colors"
                >
                  Contacts
                </Link>
                <Link
                  href="/crm/opportunities"
                  className="cursor-pointer block px-4 py-2 text-sm text-gray-500 hover:text-orange-500 hover:bg-orange-50 rounded-lg transition-colors"
                >
                  Opportunities
                </Link>
                <Link
                  href="/crm/pipeline"
                  className="cursor-pointer block px-4 py-2 text-sm text-gray-500 hover:text-orange-500 hover:bg-orange-50 rounded-lg transition-colors"
                >
                  Pipeline
                </Link>
                <Link
                  href="/crm/sales-funnel"
                  className="cursor-pointer block px-4 py-2 text-sm text-gray-500 hover:text-orange-500 hover:bg-orange-50 rounded-lg transition-colors"
                >
                  Sales Funnel
                </Link>
                <Link
                  href="/crm/quotations"
                  className="cursor-pointer block px-4 py-2 text-sm text-gray-500 hover:text-orange-500 hover:bg-orange-50 rounded-lg transition-colors"
                >
                  Quotations
                </Link>
                <Link
                  href="/crm/proposals"
                  className="cursor-pointer block px-4 py-2 text-sm text-gray-500 hover:text-orange-500 hover:bg-orange-50 rounded-lg transition-colors"
                >
                  Proposals
                </Link>
                <Link
                  href="/crm/meetings"
                  className="cursor-pointer block px-4 py-2 text-sm text-gray-500 hover:text-orange-500 hover:bg-orange-50 rounded-lg transition-colors"
                >
                  Meetings
                </Link>
                <Link
                  href="/crm/calls"
                  className="cursor-pointer block px-4 py-2 text-sm text-gray-500 hover:text-orange-500 hover:bg-orange-50 rounded-lg transition-colors"
                >
                  Calls
                </Link>
                <Link
                  href="/crm/tasks"
                  className="cursor-pointer block px-4 py-2 text-sm text-gray-500 hover:text-orange-500 hover:bg-orange-50 rounded-lg transition-colors"
                >
                  Tasks
                </Link>
                <Link
                  href="/crm/calendar"
                  className="cursor-pointer block px-4 py-2 text-sm text-gray-500 hover:text-orange-500 hover:bg-orange-50 rounded-lg transition-colors"
                >
                  Calendar
                </Link>
                <Link
                  href="/crm/customer-notes"
                  className="cursor-pointer block px-4 py-2 text-sm text-gray-500 hover:text-orange-500 hover:bg-orange-50 rounded-lg transition-colors"
                >
                  Customer Notes
                </Link>
                <Link
                  href="/crm/files"
                  className="cursor-pointer block px-4 py-2 text-sm text-gray-500 hover:text-orange-500 hover:bg-orange-50 rounded-lg transition-colors"
                >
                  File Attachments
                </Link>
                <Link
                  href="/crm/email-tracking"
                  className="cursor-pointer block px-4 py-2 text-sm text-gray-500 hover:text-orange-500 hover:bg-orange-50 rounded-lg transition-colors"
                >
                  Email Tracking
                </Link>
                <Link
                  href="/crm/whatsapp"
                  className="cursor-pointer block px-4 py-2 text-sm text-gray-500 hover:text-orange-500 hover:bg-orange-50 rounded-lg transition-colors"
                >
                  WhatsApp
                </Link>
                <Link
                  href="/crm/sms"
                  className="cursor-pointer block px-4 py-2 text-sm text-gray-500 hover:text-orange-500 hover:bg-orange-50 rounded-lg transition-colors"
                >
                  SMS
                </Link>
                <Link
                  href="/crm/sales-forecast"
                  className="cursor-pointer block px-4 py-2 text-sm text-gray-500 hover:text-orange-500 hover:bg-orange-50 rounded-lg transition-colors"
                >
                  Sales Forecast
                </Link>
                <Link
                  href="/crm/revenue"
                  className="cursor-pointer block px-4 py-2 text-sm text-gray-500 hover:text-orange-500 hover:bg-orange-50 rounded-lg transition-colors"
                >
                  Revenue
                </Link>
              </div>
            )}
          </div>

          {/* POS (Dropdown) */}
          <div className="mb-1">
            <div
              onClick={() => toggleMenu("pos")}
              className="cursor-pointer flex items-center justify-between px-4 py-3 text-gray-600 hover:text-orange-600 hover:bg-orange-50 rounded-xl transition-all"
            >
              <div className="flex items-center gap-4">
                <FaShoppingCart className="text-sm" />{" "}
                <span className="text-sm font-medium">POS</span>
              </div>
              <FaChevronRight
                className={`text-[10px] transition-transform duration-300 ${openMenus.pos ? "rotate-90" : ""}`}
              />
            </div>
            {openMenus.pos && (
              <div className="pl-11 space-y-1 mt-1 overflow-hidden">
                <Link
                  href="/pos/terminal"
                  className="cursor-pointer block px-4 py-2 text-sm text-gray-500 hover:text-orange-500 hover:bg-orange-50 rounded-lg transition-colors"
                >
                  POS Terminal
                </Link>
                <Link
                  href="/pos/barcode-scanner"
                  className="cursor-pointer block px-4 py-2 text-sm text-gray-500 hover:text-orange-500 hover:bg-orange-50 rounded-lg transition-colors"
                >
                  Barcode Scanner
                </Link>
                <Link
                  href="/pos/qr-scanner"
                  className="cursor-pointer block px-4 py-2 text-sm text-gray-500 hover:text-orange-500 hover:bg-orange-50 rounded-lg transition-colors"
                >
                  QR Scanner
                </Link>
                <Link
                  href="/pos/products"
                  className="cursor-pointer block px-4 py-2 text-sm text-gray-500 hover:text-orange-500 hover:bg-orange-50 rounded-lg transition-colors"
                >
                  Products
                </Link>
                <Link
                  href="/pos/categories"
                  className="cursor-pointer block px-4 py-2 text-sm text-gray-500 hover:text-orange-500 hover:bg-orange-50 rounded-lg transition-colors"
                >
                  Categories
                </Link>
                <Link
                  href="/pos/brands"
                  className="cursor-pointer block px-4 py-2 text-sm text-gray-500 hover:text-orange-500 hover:bg-orange-50 rounded-lg transition-colors"
                >
                  Brands
                </Link>
                <Link
                  href="/pos/suppliers"
                  className="cursor-pointer block px-4 py-2 text-sm text-gray-500 hover:text-orange-500 hover:bg-orange-50 rounded-lg transition-colors"
                >
                  Suppliers
                </Link>
                <Link
                  href="/pos/purchases"
                  className="cursor-pointer block px-4 py-2 text-sm text-gray-500 hover:text-orange-500 hover:bg-orange-50 rounded-lg transition-colors"
                >
                  Purchases
                </Link>
                <Link
                  href="/pos/sales"
                  className="cursor-pointer block px-4 py-2 text-sm text-gray-500 hover:text-orange-500 hover:bg-orange-50 rounded-lg transition-colors"
                >
                  Sales
                </Link>
                <Link
                  href="/pos/returns"
                  className="cursor-pointer block px-4 py-2 text-sm text-gray-500 hover:text-orange-500 hover:bg-orange-50 rounded-lg transition-colors"
                >
                  Returns
                </Link>
                <Link
                  href="/pos/discounts"
                  className="cursor-pointer block px-4 py-2 text-sm text-gray-500 hover:text-orange-500 hover:bg-orange-50 rounded-lg transition-colors"
                >
                  Discounts
                </Link>
                <Link
                  href="/pos/coupons"
                  className="cursor-pointer block px-4 py-2 text-sm text-gray-500 hover:text-orange-500 hover:bg-orange-50 rounded-lg transition-colors"
                >
                  Coupons
                </Link>
                <Link
                  href="/pos/taxes"
                  className="cursor-pointer block px-4 py-2 text-sm text-gray-500 hover:text-orange-500 hover:bg-orange-50 rounded-lg transition-colors"
                >
                  Taxes
                </Link>
                <Link
                  href="/pos/invoices"
                  className="cursor-pointer block px-4 py-2 text-sm text-gray-500 hover:text-orange-500 hover:bg-orange-50 rounded-lg transition-colors"
                >
                  Invoices
                </Link>
                <Link
                  href="/pos/receipts"
                  className="cursor-pointer block px-4 py-2 text-sm text-gray-500 hover:text-orange-500 hover:bg-orange-50 rounded-lg transition-colors"
                >
                  Receipts
                </Link>
                <Link
                  href="/pos/customer-wallet"
                  className="cursor-pointer block px-4 py-2 text-sm text-gray-500 hover:text-orange-500 hover:bg-orange-50 rounded-lg transition-colors"
                >
                  Customer Wallet
                </Link>
                <Link
                  href="/pos/loyalty"
                  className="cursor-pointer block px-4 py-2 text-sm text-gray-500 hover:text-orange-500 hover:bg-orange-50 rounded-lg transition-colors"
                >
                  Loyalty
                </Link>
                <Link
                  href="/pos/cash-counters"
                  className="cursor-pointer block px-4 py-2 text-sm text-gray-500 hover:text-orange-500 hover:bg-orange-50 rounded-lg transition-colors"
                >
                  Cash Counters
                </Link>
                <Link
                  href="/pos/inventory-sync"
                  className="cursor-pointer block px-4 py-2 text-sm text-gray-500 hover:text-orange-500 hover:bg-orange-50 rounded-lg transition-colors"
                >
                  Inventory Sync
                </Link>
                <Link
                  href="/pos/offline-mode"
                  className="cursor-pointer block px-4 py-2 text-sm text-gray-500 hover:text-orange-500 hover:bg-orange-50 rounded-lg transition-colors"
                >
                  Offline Mode
                </Link>
              </div>
            )}
          </div>

          {/* Inventory (Dropdown) */}
          <div className="mb-1">
            <div
              onClick={() => toggleMenu("inventory")}
              className="cursor-pointer flex items-center justify-between px-4 py-3 text-gray-600 hover:text-orange-600 hover:bg-orange-50 rounded-xl transition-all"
            >
              <div className="flex items-center gap-4">
                <FaBox className="text-sm" />{" "}
                <span className="text-sm font-medium">Inventory</span>
              </div>
              <FaChevronRight
                className={`text-[10px] transition-transform duration-300 ${openMenus.inventory ? "rotate-90" : ""}`}
              />
            </div>
            {openMenus.inventory && (
              <div className="pl-11 space-y-1 mt-1 overflow-hidden">
                <Link
                  href="/inventory/overview"
                  className="cursor-pointer block px-4 py-2 text-sm text-gray-500 hover:text-orange-500 hover:bg-orange-50 rounded-lg transition-colors"
                >
                  Overview
                </Link>
                <Link
                  href="/inventory/products"
                  className="cursor-pointer block px-4 py-2 text-sm text-gray-500 hover:text-orange-500 hover:bg-orange-50 rounded-lg transition-colors"
                >
                  Products
                </Link>
                <Link
                  href="/inventory/warehouses"
                  className="cursor-pointer block px-4 py-2 text-sm text-gray-500 hover:text-orange-500 hover:bg-orange-50 rounded-lg transition-colors"
                >
                  Warehouses
                </Link>
                <Link
                  href="/inventory/stock"
                  className="cursor-pointer block px-4 py-2 text-sm text-gray-500 hover:text-orange-500 hover:bg-orange-50 rounded-lg transition-colors"
                >
                  Stock
                </Link>
                <Link
                  href="/inventory/stock-transfer"
                  className="cursor-pointer block px-4 py-2 text-sm text-gray-500 hover:text-orange-500 hover:bg-orange-50 rounded-lg transition-colors"
                >
                  Stock Transfer
                </Link>
                <Link
                  href="/inventory/low-stock"
                  className="cursor-pointer block px-4 py-2 text-sm text-gray-500 hover:text-orange-500 hover:bg-orange-50 rounded-lg transition-colors"
                >
                  Low Stock
                </Link>
                <Link
                  href="/inventory/batches"
                  className="cursor-pointer block px-4 py-2 text-sm text-gray-500 hover:text-orange-500 hover:bg-orange-50 rounded-lg transition-colors"
                >
                  Batches
                </Link>
                <Link
                  href="/inventory/expiry"
                  className="cursor-pointer block px-4 py-2 text-sm text-gray-500 hover:text-orange-500 hover:bg-orange-50 rounded-lg transition-colors"
                >
                  Expiry
                </Link>
                <Link
                  href="/inventory/serial-numbers"
                  className="cursor-pointer block px-4 py-2 text-sm text-gray-500 hover:text-orange-500 hover:bg-orange-50 rounded-lg transition-colors"
                >
                  Serial Numbers
                </Link>
                <Link
                  href="/inventory/procurement"
                  className="cursor-pointer block px-4 py-2 text-sm text-gray-500 hover:text-orange-500 hover:bg-orange-50 rounded-lg transition-colors"
                >
                  Procurement
                </Link>
                <Link
                  href="/inventory/purchase-orders"
                  className="cursor-pointer block px-4 py-2 text-sm text-gray-500 hover:text-orange-500 hover:bg-orange-50 rounded-lg transition-colors"
                >
                  Purchase Orders
                </Link>
                <Link
                  href="/inventory/goods-receive"
                  className="cursor-pointer block px-4 py-2 text-sm text-gray-500 hover:text-orange-500 hover:bg-orange-50 rounded-lg transition-colors"
                >
                  Goods Receive
                </Link>
                <Link
                  href="/inventory/goods-issue"
                  className="cursor-pointer block px-4 py-2 text-sm text-gray-500 hover:text-orange-500 hover:bg-orange-50 rounded-lg transition-colors"
                >
                  Goods Issue
                </Link>
                <Link
                  href="/inventory/damaged-stock"
                  className="cursor-pointer block px-4 py-2 text-sm text-gray-500 hover:text-orange-500 hover:bg-orange-50 rounded-lg transition-colors"
                >
                  Damaged Stock
                </Link>
                <Link
                  href="/inventory/stock-adjustment"
                  className="cursor-pointer block px-4 py-2 text-sm text-gray-500 hover:text-orange-500 hover:bg-orange-50 rounded-lg transition-colors"
                >
                  Stock Adjustment
                </Link>
              </div>
            )}
          </div>

          {/* HRM (Dropdown) */}
          <div className="mb-1">
            <div
              onClick={() => toggleMenu("hrm")}
              className="cursor-pointer flex items-center justify-between px-4 py-3 text-gray-600 hover:text-orange-600 hover:bg-orange-50 rounded-xl transition-all"
            >
              <div className="flex items-center gap-4">
                <FaUsersCog className="text-sm" />{" "}
                <span className="text-sm font-medium">HRM</span>
              </div>
              <FaChevronRight
                className={`text-[10px] transition-transform duration-300 ${openMenus.hrm ? "rotate-90" : ""}`}
              />
            </div>
            {openMenus.hrm && (
              <div className="pl-11 space-y-1 mt-1 overflow-hidden">
                <Link
                  href="/hrm/overview"
                  className="cursor-pointer block px-4 py-2 text-sm text-gray-500 hover:text-orange-500 hover:bg-orange-50 rounded-lg transition-colors"
                >
                  Overview
                </Link>
                <Link
                  href="/hrm/employees"
                  className="cursor-pointer block px-4 py-2 text-sm text-gray-500 hover:text-orange-500 hover:bg-orange-50 rounded-lg transition-colors"
                >
                  Employees
                </Link>
                <Link
                  href="/hrm/attendance"
                  className="cursor-pointer block px-4 py-2 text-sm text-gray-500 hover:text-orange-500 hover:bg-orange-50 rounded-lg transition-colors"
                >
                  Attendance
                </Link>
                <Link
                  href="/hrm/leave"
                  className="cursor-pointer block px-4 py-2 text-sm text-gray-500 hover:text-orange-500 hover:bg-orange-50 rounded-lg transition-colors"
                >
                  Leave
                </Link>
                <Link
                  href="/hrm/payroll"
                  className="cursor-pointer block px-4 py-2 text-sm text-gray-500 hover:text-orange-500 hover:bg-orange-50 rounded-lg transition-colors"
                >
                  Payroll
                </Link>
                <Link
                  href="/hrm/recruitment"
                  className="cursor-pointer block px-4 py-2 text-sm text-gray-500 hover:text-orange-500 hover:bg-orange-50 rounded-lg transition-colors"
                >
                  Recruitment
                </Link>
                <Link
                  href="/hrm/performance"
                  className="cursor-pointer block px-4 py-2 text-sm text-gray-500 hover:text-orange-500 hover:bg-orange-50 rounded-lg transition-colors"
                >
                  Performance
                </Link>
                <Link
                  href="/hrm/training"
                  className="cursor-pointer block px-4 py-2 text-sm text-gray-500 hover:text-orange-500 hover:bg-orange-50 rounded-lg transition-colors"
                >
                  Training
                </Link>
                <Link
                  href="/hrm/shifts"
                  className="cursor-pointer block px-4 py-2 text-sm text-gray-500 hover:text-orange-500 hover:bg-orange-50 rounded-lg transition-colors"
                >
                  Shifts
                </Link>
                <Link
                  href="/hrm/holidays"
                  className="cursor-pointer block px-4 py-2 text-sm text-gray-500 hover:text-orange-500 hover:bg-orange-50 rounded-lg transition-colors"
                >
                  Holidays
                </Link>
                <Link
                  href="/hrm/announcements"
                  className="cursor-pointer block px-4 py-2 text-sm text-gray-500 hover:text-orange-500 hover:bg-orange-50 rounded-lg transition-colors"
                >
                  Announcements
                </Link>
              </div>
            )}
          </div>

          {/* Accounting (Dropdown) */}
          <div className="mb-1">
            <div
              onClick={() => toggleMenu("accounting")}
              className="cursor-pointer flex items-center justify-between px-4 py-3 text-gray-600 hover:text-orange-600 hover:bg-orange-50 rounded-xl transition-all"
            >
              <div className="flex items-center gap-4">
                <FaClipboardList className="text-sm" />{" "}
                <span className="text-sm font-medium">Accounting</span>
              </div>
              <FaChevronRight
                className={`text-[10px] transition-transform duration-300 ${openMenus.accounting ? "rotate-90" : ""}`}
              />
            </div>
            {openMenus.accounting && (
              <div className="pl-11 space-y-1 mt-1 overflow-hidden">
                <Link
                  href="/accounting/overview"
                  className="cursor-pointer block px-4 py-2 text-sm text-gray-500 hover:text-orange-500 hover:bg-orange-50 rounded-lg transition-colors"
                >
                  Overview
                </Link>
                <Link
                  href="/accounting/income"
                  className="cursor-pointer block px-4 py-2 text-sm text-gray-500 hover:text-orange-500 hover:bg-orange-50 rounded-lg transition-colors"
                >
                  Income
                </Link>
                <Link
                  href="/accounting/expenses"
                  className="cursor-pointer block px-4 py-2 text-sm text-gray-500 hover:text-orange-500 hover:bg-orange-50 rounded-lg transition-colors"
                >
                  Expenses
                </Link>
                <Link
                  href="/accounting/ledger"
                  className="cursor-pointer block px-4 py-2 text-sm text-gray-500 hover:text-orange-500 hover:bg-orange-50 rounded-lg transition-colors"
                >
                  Ledger
                </Link>
                <Link
                  href="/accounting/journal"
                  className="cursor-pointer block px-4 py-2 text-sm text-gray-500 hover:text-orange-500 hover:bg-orange-50 rounded-lg transition-colors"
                >
                  Journal
                </Link>
                <Link
                  href="/accounting/bank"
                  className="cursor-pointer block px-4 py-2 text-sm text-gray-500 hover:text-orange-500 hover:bg-orange-50 rounded-lg transition-colors"
                >
                  Bank
                </Link>
                <Link
                  href="/accounting/cash"
                  className="cursor-pointer block px-4 py-2 text-sm text-gray-500 hover:text-orange-500 hover:bg-orange-50 rounded-lg transition-colors"
                >
                  Cash
                </Link>
                <Link
                  href="/accounting/invoices"
                  className="cursor-pointer block px-4 py-2 text-sm text-gray-500 hover:text-orange-500 hover:bg-orange-50 rounded-lg transition-colors"
                >
                  Invoices
                </Link>
                <Link
                  href="/accounting/payments"
                  className="cursor-pointer block px-4 py-2 text-sm text-gray-500 hover:text-orange-500 hover:bg-orange-50 rounded-lg transition-colors"
                >
                  Payments
                </Link>
                <Link
                  href="/accounting/gst-vat"
                  className="cursor-pointer block px-4 py-2 text-sm text-gray-500 hover:text-orange-500 hover:bg-orange-50 rounded-lg transition-colors"
                >
                  GST / VAT
                </Link>
                <Link
                  href="/accounting/financial-reports"
                  className="cursor-pointer block px-4 py-2 text-sm text-gray-500 hover:text-orange-500 hover:bg-orange-50 rounded-lg transition-colors"
                >
                  Financial Reports
                </Link>
                <Link
                  href="/accounting/profit-loss"
                  className="cursor-pointer block px-4 py-2 text-sm text-gray-500 hover:text-orange-500 hover:bg-orange-50 rounded-lg transition-colors"
                >
                  Profit & Loss
                </Link>
                <Link
                  href="/accounting/balance-sheet"
                  className="cursor-pointer block px-4 py-2 text-sm text-gray-500 hover:text-orange-500 hover:bg-orange-50 rounded-lg transition-colors"
                >
                  Balance Sheet
                </Link>
              </div>
            )}
          </div>

          {/* Marketing (Dropdown) */}
          <div className="mb-1">
            <div
              onClick={() => toggleMenu("marketing")}
              className="cursor-pointer flex items-center justify-between px-4 py-3 text-gray-600 hover:text-orange-600 hover:bg-orange-50 rounded-xl transition-all"
            >
              <div className="flex items-center gap-4">
                <FaNetworkWired className="text-sm" />{" "}
                <span className="text-sm font-medium">Marketing</span>
              </div>
              <FaChevronRight
                className={`text-[10px] transition-transform duration-300 ${openMenus.marketing ? "rotate-90" : ""}`}
              />
            </div>
            {openMenus.marketing && (
              <div className="pl-11 space-y-1 mt-1 overflow-hidden">
                <Link
                  href="/marketing/overview"
                  className="cursor-pointer block px-4 py-2 text-sm text-gray-500 hover:text-orange-500 hover:bg-orange-50 rounded-lg transition-colors"
                >
                  Overview
                </Link>
                <Link
                  href="/marketing/email-campaigns"
                  className="cursor-pointer block px-4 py-2 text-sm text-gray-500 hover:text-orange-500 hover:bg-orange-50 rounded-lg transition-colors"
                >
                  Email Campaigns
                </Link>
                <Link
                  href="/marketing/sms-campaigns"
                  className="cursor-pointer block px-4 py-2 text-sm text-gray-500 hover:text-orange-500 hover:bg-orange-50 rounded-lg transition-colors"
                >
                  SMS Campaigns
                </Link>
                <Link
                  href="/marketing/push-notifications"
                  className="cursor-pointer block px-4 py-2 text-sm text-gray-500 hover:text-orange-500 hover:bg-orange-50 rounded-lg transition-colors"
                >
                  Push Notifications
                </Link>
                <Link
                  href="/marketing/whatsapp-broadcast"
                  className="cursor-pointer block px-4 py-2 text-sm text-gray-500 hover:text-orange-500 hover:bg-orange-50 rounded-lg transition-colors"
                >
                  WhatsApp Broadcast
                </Link>
                <Link
                  href="/marketing/landing-pages"
                  className="cursor-pointer block px-4 py-2 text-sm text-gray-500 hover:text-orange-500 hover:bg-orange-50 rounded-lg transition-colors"
                >
                  Landing Pages
                </Link>
                <Link
                  href="/marketing/campaign-analytics"
                  className="cursor-pointer block px-4 py-2 text-sm text-gray-500 hover:text-orange-500 hover:bg-orange-50 rounded-lg transition-colors"
                >
                  Campaign Analytics
                </Link>
                <Link
                  href="/marketing/referral-system"
                  className="cursor-pointer block px-4 py-2 text-sm text-gray-500 hover:text-orange-500 hover:bg-orange-50 rounded-lg transition-colors"
                >
                  Referral System
                </Link>
                <Link
                  href="/marketing/affiliate"
                  className="cursor-pointer block px-4 py-2 text-sm text-gray-500 hover:text-orange-500 hover:bg-orange-50 rounded-lg transition-colors"
                >
                  Affiliate
                </Link>
              </div>
            )}
          </div>

          {/* Customer Support (Dropdown) */}
          <div className="mb-1">
            <div
              onClick={() => toggleMenu("support")}
              className="cursor-pointer flex items-center justify-between px-4 py-3 text-gray-600 hover:text-orange-600 hover:bg-orange-50 rounded-xl transition-all"
            >
              <div className="flex items-center gap-4">
                <FaHeadset className="text-sm" />{" "}
                <span className="text-sm font-medium">Customer Support</span>
              </div>
              <FaChevronRight
                className={`text-[10px] transition-transform duration-300 ${openMenus.support ? "rotate-90" : ""}`}
              />
            </div>
            {openMenus.support && (
              <div className="pl-11 space-y-1 mt-1 overflow-hidden">
                <Link
                  href="/support/overview"
                  className="cursor-pointer block px-4 py-2 text-sm text-gray-500 hover:text-orange-500 hover:bg-orange-50 rounded-lg transition-colors"
                >
                  Overview
                </Link>
                <Link
                  href="/support/tickets"
                  className="cursor-pointer block px-4 py-2 text-sm text-gray-500 hover:text-orange-500 hover:bg-orange-50 rounded-lg transition-colors"
                >
                  Tickets
                </Link>
                <Link
                  href="/support/knowledge-base"
                  className="cursor-pointer block px-4 py-2 text-sm text-gray-500 hover:text-orange-500 hover:bg-orange-50 rounded-lg transition-colors"
                >
                  Knowledge Base
                </Link>
                <Link
                  href="/support/live-chat"
                  className="cursor-pointer block px-4 py-2 text-sm text-gray-500 hover:text-orange-500 hover:bg-orange-50 rounded-lg transition-colors"
                >
                  Live Chat
                </Link>
                <Link
                  href="/support/faq"
                  className="cursor-pointer block px-4 py-2 text-sm text-gray-500 hover:text-orange-500 hover:bg-orange-50 rounded-lg transition-colors"
                >
                  FAQ
                </Link>
                <Link
                  href="/support/chatbot"
                  className="cursor-pointer block px-4 py-2 text-sm text-gray-500 hover:text-orange-500 hover:bg-orange-50 rounded-lg transition-colors"
                >
                  Chatbot
                </Link>
              </div>
            )}
          </div>

          {/* AI (Nested Dropdown) */}
          <div className="mb-1">
            <div
              onClick={() => toggleMenu("ai")}
              className="cursor-pointer flex items-center justify-between px-4 py-3 text-gray-600 hover:text-orange-600 hover:bg-orange-50 rounded-xl transition-all"
            >
              <div className="flex items-center gap-4">
                <FaRobot className="text-sm" />{" "}
                <span className="text-sm font-medium">AI</span>
              </div>
              <FaChevronRight
                className={`text-[10px] transition-transform duration-300 ${openMenus.ai ? "rotate-90" : ""}`}
              />
            </div>
            {openMenus.ai && (
              <div className="pl-7 space-y-1 mt-1 overflow-hidden">
                <Link
                  href="/ai/assistant"
                  className="cursor-pointer block px-4 py-2 text-sm text-gray-500 hover:text-orange-500 hover:bg-orange-50 rounded-lg transition-colors ml-4"
                >
                  AI Assistant
                </Link>
              </div>
            )}
          </div>

          {/* Reports (Dropdown) */}
          <div className="mb-1">
            <div
              onClick={() => toggleMenu("reports")}
              className="cursor-pointer flex items-center justify-between px-4 py-3 text-gray-600 hover:text-orange-600 hover:bg-orange-50 rounded-xl transition-all"
            >
              <div className="flex items-center gap-4">
                <FaChartBar className="text-sm" />{" "}
                <span className="text-sm font-medium">Reports</span>
              </div>
              <FaChevronRight
                className={`text-[10px] transition-transform duration-300 ${openMenus.reports ? "rotate-90" : ""}`}
              />
            </div>
            {openMenus.reports && (
              <div className="pl-11 space-y-1 mt-1 overflow-hidden">
                <Link
                  href="/reports/sales"
                  className="cursor-pointer block px-4 py-2 text-sm text-gray-500 hover:text-orange-500 hover:bg-orange-50 rounded-lg transition-colors"
                >
                  Sales Reports
                </Link>
                <Link
                  href="/reports/crm"
                  className="cursor-pointer block px-4 py-2 text-sm text-gray-500 hover:text-orange-500 hover:bg-orange-50 rounded-lg transition-colors"
                >
                  CRM Reports
                </Link>
                <Link
                  href="/reports/pos"
                  className="cursor-pointer block px-4 py-2 text-sm text-gray-500 hover:text-orange-500 hover:bg-orange-50 rounded-lg transition-colors"
                >
                  POS Reports
                </Link>
                <Link
                  href="/reports/inventory"
                  className="cursor-pointer block px-4 py-2 text-sm text-gray-500 hover:text-orange-500 hover:bg-orange-50 rounded-lg transition-colors"
                >
                  Inventory Reports
                </Link>
                <Link
                  href="/reports/hr"
                  className="cursor-pointer block px-4 py-2 text-sm text-gray-500 hover:text-orange-500 hover:bg-orange-50 rounded-lg transition-colors"
                >
                  HR Reports
                </Link>
                <Link
                  href="/reports/financial"
                  className="cursor-pointer block px-4 py-2 text-sm text-gray-500 hover:text-orange-500 hover:bg-orange-50 rounded-lg transition-colors"
                >
                  Financial Reports
                </Link>
                <Link
                  href="/reports/marketing"
                  className="cursor-pointer block px-4 py-2 text-sm text-gray-500 hover:text-orange-500 hover:bg-orange-50 rounded-lg transition-colors"
                >
                  Marketing Reports
                </Link>
                <Link
                  href="/reports/customer"
                  className="cursor-pointer block px-4 py-2 text-sm text-gray-500 hover:text-orange-500 hover:bg-orange-50 rounded-lg transition-colors"
                >
                  Customer Reports
                </Link>
              </div>
            )}
          </div>

          {/* Subscription (Dropdown) */}
          <div className="mb-1">
            <div
              onClick={() => toggleMenu("subscription")}
              className="cursor-pointer flex items-center justify-between px-4 py-3 text-gray-600 hover:text-orange-600 hover:bg-orange-50 rounded-xl transition-all"
            >
              <div className="flex items-center gap-4">
                <FaCreditCard className="text-sm" />{" "}
                <span className="text-sm font-medium">Subscription</span>
              </div>
              <FaChevronRight
                className={`text-[10px] transition-transform duration-300 ${openMenus.subscription ? "rotate-90" : ""}`}
              />
            </div>
            {openMenus.subscription && (
              <div className="pl-11 space-y-1 mt-1 overflow-hidden">
                <Link
                  href="/subscription/current-plan"
                  className="cursor-pointer block px-4 py-2 text-sm text-gray-500 hover:text-orange-500 hover:bg-orange-50 rounded-lg transition-colors"
                >
                  Current Plan
                </Link>
                <Link
                  href="/subscription/usage"
                  className="cursor-pointer block px-4 py-2 text-sm text-gray-500 hover:text-orange-500 hover:bg-orange-50 rounded-lg transition-colors"
                >
                  Usage
                </Link>
                <Link
                  href="/subscription/billing"
                  className="cursor-pointer block px-4 py-2 text-sm text-gray-500 hover:text-orange-500 hover:bg-orange-50 rounded-lg transition-colors"
                >
                  Billing
                </Link>
                <Link
                  href="/subscription/invoices"
                  className="cursor-pointer block px-4 py-2 text-sm text-gray-500 hover:text-orange-500 hover:bg-orange-50 rounded-lg transition-colors"
                >
                  Invoices
                </Link>
                <Link
                  href="/subscription/payment-history"
                  className="cursor-pointer block px-4 py-2 text-sm text-gray-500 hover:text-orange-500 hover:bg-orange-50 rounded-lg transition-colors"
                >
                  Payment History
                </Link>
                <Link
                  href="/subscription/coupons"
                  className="cursor-pointer block px-4 py-2 text-sm text-gray-500 hover:text-orange-500 hover:bg-orange-50 rounded-lg transition-colors"
                >
                  Coupons
                </Link>
                <Link
                  href="/subscription/upgrade-plan"
                  className="cursor-pointer block px-4 py-2 text-sm text-gray-500 hover:text-orange-500 hover:bg-orange-50 rounded-lg transition-colors"
                >
                  Upgrade Plan
                </Link>
                <Link
                  href="/subscription/downgrade-plan"
                  className="cursor-pointer block px-4 py-2 text-sm text-gray-500 hover:text-orange-500 hover:bg-orange-50 rounded-lg transition-colors"
                >
                  Downgrade Plan
                </Link>
              </div>
            )}
          </div>

          <div className="border-t border-orange-100 my-4 mx-2"></div>

          {/* Quick Links / Status */}
          <Link
            href="/notifications"
            className="cursor-pointer flex items-center gap-4 px-4 py-3 text-gray-600 hover:text-orange-600 hover:bg-orange-50 rounded-xl transition-all mb-1"
          >
            <FaBell className="text-sm" />{" "}
            <span className="text-sm font-medium">Notifications</span>
          </Link>
          <Link
            href="/activity"
            className="cursor-pointer flex items-center gap-4 px-4 py-3 text-gray-600 hover:text-orange-600 hover:bg-orange-50 rounded-xl transition-all mb-1"
          >
            <FaHistory className="text-sm" />{" "}
            <span className="text-sm font-medium">Activity</span>
          </Link>

          {/* ================= ADMINISTRATION SECTION ================= */}
          <div className="mt-6 mb-2 px-4 text-[10px] font-bold uppercase tracking-widest text-gray-400">
            Administration
          </div>

          {/* Organization (Dropdown) */}
          <div className="mb-1">
            <div
              onClick={() => toggleMenu("organization")}
              className="cursor-pointer flex items-center justify-between px-4 py-3 text-gray-600 hover:text-orange-600 hover:bg-orange-50 rounded-xl transition-all"
            >
              <div className="flex items-center gap-4">
                <FaBuilding className="text-sm" />{" "}
                <span className="text-sm font-medium">Organization</span>
              </div>
              <FaChevronRight
                className={`text-[10px] transition-transform duration-300 ${openMenus.organization ? "rotate-90" : ""}`}
              />
            </div>
            {openMenus.organization && (
              <div className="pl-11 space-y-1 mt-1 overflow-hidden">
                <Link
                  href="/organization/profile"
                  className="cursor-pointer block px-4 py-2 text-sm text-gray-500 hover:text-orange-500 hover:bg-orange-50 rounded-lg transition-colors"
                >
                  Organization Profile
                </Link>
                <Link
                  href="/organization/workspaces"
                  className="cursor-pointer block px-4 py-2 text-sm text-gray-500 hover:text-orange-500 hover:bg-orange-50 rounded-lg transition-colors"
                >
                  Workspaces
                </Link>
                <Link
                  href="/organization/branches"
                  className="cursor-pointer block px-4 py-2 text-sm text-gray-500 hover:text-orange-500 hover:bg-orange-50 rounded-lg transition-colors"
                >
                  Branches
                </Link>
                <Link
                  href="/organization/departments"
                  className="cursor-pointer block px-4 py-2 text-sm text-gray-500 hover:text-orange-500 hover:bg-orange-50 rounded-lg transition-colors"
                >
                  Departments
                </Link>
                <Link
                  href="/organization/team-members"
                  className="cursor-pointer block px-4 py-2 text-sm text-gray-500 hover:text-orange-500 hover:bg-orange-50 rounded-lg transition-colors"
                >
                  Team Members
                </Link>
                <Link
                  href="/organization/roles"
                  className="cursor-pointer block px-4 py-2 text-sm text-gray-500 hover:text-orange-500 hover:bg-orange-50 rounded-lg transition-colors"
                >
                  Roles
                </Link>
                <Link
                  href="/organization/permissions"
                  className="cursor-pointer block px-4 py-2 text-sm text-gray-500 hover:text-orange-500 hover:bg-orange-50 rounded-lg transition-colors"
                >
                  Permissions
                </Link>
              </div>
            )}
          </div>

          {/* Settings (Dropdown) */}
          <div className="mb-1">
            <div
              onClick={() => toggleMenu("settings")}
              className="cursor-pointer flex items-center justify-between px-4 py-3 text-gray-600 hover:text-orange-600 hover:bg-orange-50 rounded-xl transition-all"
            >
              <div className="flex items-center gap-4">
                <FaCog className="text-sm" />{" "}
                <span className="text-sm font-medium">Settings</span>
              </div>
              <FaChevronRight
                className={`text-[10px] transition-transform duration-300 ${openMenus.settings ? "rotate-90" : ""}`}
              />
            </div>
            {openMenus.settings && (
              <div className="pl-11 space-y-1 mt-1 overflow-hidden">
                <Link
                  href="/settings/general"
                  className="cursor-pointer block px-4 py-2 text-sm text-gray-500 hover:text-orange-500 hover:bg-orange-50 rounded-lg transition-colors"
                >
                  General
                </Link>
                <Link
                  href="/settings/account"
                  className="cursor-pointer block px-4 py-2 text-sm text-gray-500 hover:text-orange-500 hover:bg-orange-50 rounded-lg transition-colors"
                >
                  Account
                </Link>
                <Link
                  href="/settings/security"
                  className="cursor-pointer block px-4 py-2 text-sm text-gray-500 hover:text-orange-500 hover:bg-orange-50 rounded-lg transition-colors"
                >
                  Security
                </Link>
                <Link
                  href="/settings/authentication"
                  className="cursor-pointer block px-4 py-2 text-sm text-gray-500 hover:text-orange-500 hover:bg-orange-50 rounded-lg transition-colors"
                >
                  Authentication
                </Link>
                <Link
                  href="/settings/roles-permissions"
                  className="cursor-pointer block px-4 py-2 text-sm text-gray-500 hover:text-orange-500 hover:bg-orange-50 rounded-lg transition-colors"
                >
                  Roles & Permissions
                </Link>
                <Link
                  href="/settings/notifications"
                  className="cursor-pointer block px-4 py-2 text-sm text-gray-500 hover:text-orange-500 hover:bg-orange-50 rounded-lg transition-colors"
                >
                  Notifications
                </Link>
                <Link
                  href="/settings/integrations"
                  className="cursor-pointer block px-4 py-2 text-sm text-gray-500 hover:text-orange-500 hover:bg-orange-50 rounded-lg transition-colors"
                >
                  Integrations
                </Link>
                <Link
                  href="/settings/email"
                  className="cursor-pointer block px-4 py-2 text-sm text-gray-500 hover:text-orange-500 hover:bg-orange-50 rounded-lg transition-colors"
                >
                  Email
                </Link>
                <Link
                  href="/settings/sms"
                  className="cursor-pointer block px-4 py-2 text-sm text-gray-500 hover:text-orange-500 hover:bg-orange-50 rounded-lg transition-colors"
                >
                  SMS
                </Link>
                <Link
                  href="/settings/whatsapp"
                  className="cursor-pointer block px-4 py-2 text-sm text-gray-500 hover:text-orange-500 hover:bg-orange-50 rounded-lg transition-colors"
                >
                  WhatsApp
                </Link>
                <Link
                  href="/settings/payment"
                  className="cursor-pointer block px-4 py-2 text-sm text-gray-500 hover:text-orange-500 hover:bg-orange-50 rounded-lg transition-colors"
                >
                  Payment
                </Link>
                <Link
                  href="/settings/api"
                  className="cursor-pointer block px-4 py-2 text-sm text-gray-500 hover:text-orange-500 hover:bg-orange-50 rounded-lg transition-colors"
                >
                  API
                </Link>
                <Link
                  href="/settings/webhooks"
                  className="cursor-pointer block px-4 py-2 text-sm text-gray-500 hover:text-orange-500 hover:bg-orange-50 rounded-lg transition-colors"
                >
                  Webhooks
                </Link>
                <Link
                  href="/settings/audit-logs"
                  className="cursor-pointer block px-4 py-2 text-sm text-gray-500 hover:text-orange-500 hover:bg-orange-50 rounded-lg transition-colors"
                >
                  Audit Logs
                </Link>
                <Link
                  href="/settings/data-privacy"
                  className="cursor-pointer block px-4 py-2 text-sm text-gray-500 hover:text-orange-500 hover:bg-orange-50 rounded-lg transition-colors"
                >
                  Data & Privacy
                </Link>
              </div>
            )}
          </div>

          <div className="border-t border-orange-100 my-4 mx-2"></div>

          {/* Resources */}
          <Link
            href="/support"
            className="cursor-pointer flex items-center gap-4 px-4 py-3 text-gray-600 hover:text-orange-600 hover:bg-orange-50 rounded-xl transition-all mb-1"
          >
            <FaQuestionCircle className="text-sm" />{" "}
            <span className="text-sm font-medium">Help & Support</span>
          </Link>
          <Link
            href="/documentation"
            className="cursor-pointer flex items-center gap-4 px-4 py-3 text-gray-600 hover:text-orange-600 hover:bg-orange-50 rounded-xl transition-all mb-1"
          >
            <FaBook className="text-sm" />{" "}
            <span className="text-sm font-medium">Documentation</span>
          </Link>

          {/* ================= FOOTER ================= */}
          <div className="border-t border-orange-100 p-4 mx-3 mt-6 flex-shrink-0">
            <Link
              href="/logout"
              className="cursor-pointer flex items-center gap-4 px-4 py-3 text-red-500 hover:text-red-600 hover:bg-red-50 rounded-xl transition-all"
            >
              <FaSignOutAlt className="text-sm" />{" "}
              <span className="text-sm font-medium">Logout</span>
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
