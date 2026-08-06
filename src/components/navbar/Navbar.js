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
    <header className="relative w-full h-[70px] bg-white border-b border-orange-100 flex items-center justify-between px-2 sm:px-4 lg:px-8 z-20 flex-shrink-0 shadow-sm">
      {/* ================= LEFT SIDE ================= */}
      <div className="flex items-center gap-1.5 sm:gap-4">
        {/* HAMBURGER MENU */}
        <button
          onClick={toggleSidebar}
          className="cursor-pointer flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 text-slate-600 hover:text-orange-600 hover:bg-orange-50 rounded-full transition-all active:scale-95 flex-shrink-0"
          aria-label="Open Sidebar"
        >
          <FaBars className="text-base sm:text-lg" />
        </button>

        {/* BRAND NAME (Visible on all screens) */}
        <Link
          href="/"
          className="cursor-pointer flex items-center gap-1.5 sm:gap-3 text-base sm:text-lg font-bold select-none hover:opacity-80 transition-opacity flex-shrink-0"
        >
          <FaCubes className="text-orange-500 text-lg sm:text-xl" />
          <span className="text-slate-800 tracking-tight">
            Crack<span className="text-slate-400 font-normal">404</span>
          </span>
        </Link>

        {/* SEARCH BAR (Hidden on smaller screens to save space) */}
        <div className="hidden lg:flex items-center bg-slate-50 px-4 py-2 rounded-xl border border-slate-200 focus-within:border-orange-400 transition-colors shadow-sm cursor-text ml-4">
          <FaSearch className="text-slate-400 text-sm mr-3" />
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent outline-none text-sm w-48 text-slate-700 placeholder-slate-400 cursor-text"
          />
        </div>
      </div>

      {/* ================= RIGHT SIDE ================= */}
      <div className="flex items-center gap-1.5 sm:gap-3 lg:gap-4 flex-shrink-0">
        {/* SEPARATED ICON TOOLBAR */}
        <div className="flex items-center gap-1.5 sm:gap-2">
          {/* 1. NOTIFICATION ICON */}
          <button className="cursor-pointer w-7 h-7 sm:w-9 sm:h-9 rounded-lg sm:rounded-xl bg-slate-50 border border-slate-200 text-slate-500 hover:text-orange-600 hover:bg-orange-50 hover:border-orange-200 transition-all flex items-center justify-center relative shadow-sm">
            <FaBell className="text-[12px] sm:text-sm" />
            <span className="absolute -top-0.5 -right-0.5 sm:-top-1 sm:-right-1 w-2 h-2 sm:w-2.5 sm:h-2.5 bg-orange-500 rounded-full border-2 border-white"></span>
          </button>

          {/* 2. MESSAGE ICON */}
          <button className="cursor-pointer w-7 h-7 sm:w-9 sm:h-9 rounded-lg sm:rounded-xl bg-slate-50 border border-slate-200 text-slate-500 hover:text-orange-600 hover:bg-orange-50 hover:border-orange-200 transition-all flex items-center justify-center shadow-sm">
            <FaCommentDots className="text-[12px] sm:text-sm" />
          </button>
        </div>

        {/* SIGN UP / SIGN IN BUTTON */}
        <Link
          href="/auth/signup"
          className="cursor-pointer flex items-center px-2.5 py-1.5 sm:px-5 sm:py-2 rounded-lg sm:rounded-xl bg-orange-600 text-white font-bold text-xs sm:text-sm hover:bg-orange-700 transition-all shadow-[0_2px_10px_rgba(234,88,12,0.2)] whitespace-nowrap"
        >
          Sign Up
        </Link>

        {/* Vertical Divider Line */}
        <div className="hidden sm:block h-6 w-px bg-slate-200 mx-0.5 sm:mx-1"></div>

        {/* PROFILE LINK */}
        <Link
          href="/profile"
          className="cursor-pointer flex items-center gap-2 sm:gap-3 hover:bg-slate-50 rounded-full p-1 pr-1 sm:pr-3 transition-colors border border-transparent hover:border-slate-200"
        >
          <img
            src="https://i.pravatar.cc/150?img=11"
            alt="Profile"
            className="w-7 h-7 sm:w-9 sm:h-9 rounded-full border-2 border-orange-400 object-cover"
          />
          <div className="hidden lg:block text-right leading-tight">
            <div className="text-sm font-bold text-slate-800">Tahmid</div>
          </div>
        </Link>
      </div>
    </header>
  );
}
