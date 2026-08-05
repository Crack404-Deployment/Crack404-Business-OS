"use client";
import {
  FaBars,
  FaCubes,
  FaSearch,
  FaBell,
  FaCommentDots,
  FaQuestionCircle,
} from "react-icons/fa";
import Link from "next/link";

export default function Navbar({ toggleSidebar }) {
  return (
    <header className="relative w-full h-[70px] bg-white border-b border-orange-100 flex items-center justify-between px-4 lg:px-8 z-20 flex-shrink-0 shadow-sm">
      {/* ================= LEFT SIDE ================= */}
      <div className="flex items-center gap-4">
        {/* HAMBURGER MENU - Opens sidebar */}
        <button
          onClick={toggleSidebar}
          className="cursor-pointer flex items-center justify-center w-10 h-10 text-gray-600 hover:text-orange-600 hover:bg-orange-50 rounded-full transition-all active:scale-95"
          aria-label="Open Sidebar"
        >
          <FaBars className="text-lg" />
        </button>

        {/* BRAND NAME - Clicking this goes to Homepage */}
        <Link
          href="/"
          className="cursor-pointer flex items-center gap-3 text-lg font-bold select-none hover:opacity-80 transition-opacity"
        >
          <FaCubes className="text-orange-500 text-xl" />
          <span className="text-gray-800 tracking-tight">
            Crack<span className="text-gray-400 font-normal">404</span>
          </span>
        </Link>

        {/* SEARCH BAR */}
        <div className="hidden lg:flex items-center bg-gray-50 px-4 py-2 rounded-xl border border-gray-200 focus-within:border-orange-400 transition-colors shadow-sm cursor-text">
          <FaSearch className="text-gray-400 text-sm mr-3" />
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent outline-none text-sm w-48 text-gray-700 placeholder-gray-400 cursor-text"
          />
        </div>
      </div>

      {/* ================= RIGHT SIDE ================= */}
      <div className="flex items-center gap-2 lg:gap-4">
        
        {/* ICON TOOLBAR - Grouped together with a border */}
        <div className="hidden md:flex items-center gap-1 px-2 py-1.5 bg-gray-50 border border-gray-200 rounded-2xl">
          
          {/* 1. NOTIFICATION ICON */}
          <button className="cursor-pointer w-7 h-7 rounded-xl bg-transparent text-gray-500 hover:text-orange-500 hover:bg-orange-50 transition-all flex items-center justify-center relative">
            <FaBell className="text-sm" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-orange-500 rounded-full border-2 border-gray-50"></span>
          </button>

        </div>

        {/* 2. MESSAGE ICON (Separated) */}
        <div className="hidden md:flex items-center gap-1 px-2 py-1.5 bg-gray-50 border border-gray-200 rounded-2xl">
          <button className="cursor-pointer w-7 h-7 rounded-xl bg-transparent text-gray-500 hover:text-orange-500 hover:bg-orange-50 transition-all flex items-center justify-center">
            <FaCommentDots className="text-sm" />
          </button>
        </div>

        {/* 3. FAQ / HELP ICON (Separated) */}
        <div className="hidden md:flex items-center gap-1 px-2 py-1.5 bg-gray-50 border border-gray-200 rounded-2xl">
          <button className="cursor-pointer w-7 h-7 rounded-xl bg-transparent text-gray-500 hover:text-orange-500 hover:bg-orange-50 transition-all flex items-center justify-center">
            <FaQuestionCircle className="text-sm" />
          </button>
        </div>

        {/* LOGIN BUTTON - Human designed, grounded look */}
        <Link
          href="/auth/login"
          className="cursor-pointer hidden sm:flex items-center px-5 py-2 rounded-xl bg-orange-600 text-white font-medium text-sm hover:bg-orange-800 transition-all border border-orange-600/50 shadow-[0_2px_10px_rgba(249,115,22,0.2)]"
        >
          Sign in
        </Link>

        {/* Vertical Divider Line */}
        <div className="hidden lg:block h-7 w-px bg-gray-200 mx-1"></div>

        {/* PROFILE LINK - Changed to "Profile" */}
        <Link
          href="/profile"
          className="cursor-pointer flex items-center gap-3 hover:bg-gray-50 rounded-full p-1 pr-3 transition-colors border border-transparent hover:border-gray-200"
        >
          <img
            src="https://i.pravatar.cc/150?img=11"
            alt="Profile"
            className="w-8 h-8 rounded-full border-2 border-orange-400"
          />
          <div className="hidden lg:block text-right leading-tight">
            <div className="text-sm font-medium text-gray-800">Tahmid</div>
          </div>
        </Link>
      </div>
    </header>
  );
}