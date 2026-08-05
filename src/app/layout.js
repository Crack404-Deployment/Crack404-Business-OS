"use client";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { useState, useEffect } from 'react'; // <-- Fixed import

import Sidebar from '@/components/navbar/Sidebar';
import DashboardNavbar from '@/components/navbar/Navbar';
import Footer from '@/components/landing/Footer';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  // Ensures the component only renders on the client side to avoid hydration errors
  useEffect(() => {
    setIsMounted(true);
  }, []);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} bg-[#080b12] text-gray-200 antialiased`}>
        
        {isMounted && (
          <div className="min-h-screen w-full bg-[#080b12] flex flex-col">
            <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
            <div className="flex flex-col w-full min-h-screen">
              <DashboardNavbar toggleSidebar={toggleSidebar} />
              <main className="flex-1 w-full bg-[#080b12]">
                {children}
              </main>
              <Footer />
            </div>
          </div>
        )}

      </body>
    </html>
  );
}