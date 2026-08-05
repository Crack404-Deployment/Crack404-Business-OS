"use client";
import Image from 'next/image';
import { FaSearch, FaRocket, FaStar } from 'react-icons/fa';

export default function Banner() {
  
  // Real Brand Names
  const brandNames = [
    "Apple", "Samsung", "Dell", "Lenovo", "Xiaomi", "OnePlus"
  ];

  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* ================= TOP BRAND STRIP ================= */}
        <div className="flex items-center justify-center gap-6 mb-16">
          <div className="h-px bg-gray-300 w-8 lg:w-12"></div>
          <span className="text-sm text-gray-500 font-medium whitespace-nowrap">
            Already Join 15K+ Business Using Crack404
          </span>
          <div className="h-px bg-gray-300 w-8 lg:w-12"></div>
        </div>

        {/* ================= INFINITE MOVING BRANDS ================= */}
        <div className="relative w-full overflow-hidden py-4 mb-16">
          <div className="flex whitespace-nowrap animate-scroll hover:animation-pause">
            {[...brandNames, ...brandNames].map((brand, index) => (
              <div 
                key={index} 
                className="mx-8 text-xl lg:text-2xl font-bold text-gray-400 transition-colors duration-300 cursor-default select-none hover:text-gray-800"
              >
                {brand}
              </div>
            ))}
          </div>
        </div>

        {/* ================= MAIN BANNER CONTENT ================= */}
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Left Side: Image + Floating UI */}
          <div className="lg:w-1/2 w-full relative flex justify-center">
            <div className="absolute w-[320px] h-[320px] bg-[#d1fae5] rounded-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -z-10"></div>
            
            <div className="relative">
              {/* Main Person Image - Using your provided link */}
              <div className="relative z-10">
                <Image 
                  src="https://gosaas-html.vercel.app/assets/img/feature_9.png" 
                  alt="Happy Customer" 
                  width={500} 
                  height={600} 
                  className="rounded-2xl object-cover w-full h-auto"
                  priority
                />
              </div>

              {/* Top Left Card: Sales Growth */}
              <div className="absolute -left-20 top-20 bg-white p-4 rounded-xl shadow-lg border border-gray-100 w-36 z-20">
                <p className="text-xs text-gray-500 font-medium mb-1">Sells Growth</p>
                <p className="text-lg font-bold text-gray-800">+28%</p>
                <svg className="w-full h-6 mt-2" viewBox="0 0 100 20">
                  <path d="M0 15 Q25 10 50 12 T100 5" fill="none" stroke="#3b82f6" strokeWidth="2" />
                </svg>
              </div>

              {/* Bottom Right Card: User Data */}
              <div className="absolute -right-20 bottom-24 bg-white p-3 rounded-xl shadow-lg border border-gray-100 w-48 z-20">
                <p className="text-xs font-bold text-gray-800 mb-2">User Data</p>
                <div className="flex items-center gap-2 mb-2">
                  <img src="https://i.pravatar.cc/150?img=33" alt="User" className="w-6 h-6 rounded-full" />
                  <div className="flex-1">
                    <p className="text-[10px] font-bold text-gray-800 leading-tight">Jesse Thomas</p>
                    <p className="text-[8px] text-gray-400">637 Points • 98% Correct</p>
                  </div>
                  <span className="text-[10px] font-bold text-green-500">1 ▲</span>
                </div>
                <div className="flex items-center gap-2">
                  <img src="https://i.pravatar.cc/150?img=68" alt="User" className="w-6 h-6 rounded-full" />
                  <div className="flex-1">
                    <p className="text-[10px] font-bold text-gray-800 leading-tight">Thial Mathiyazhagan</p>
                    <p className="text-[8px] text-gray-400">637 Points • 98% Correct</p>
                  </div>
                  <span className="text-[10px] font-bold text-red-500">2 ▼</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Text & Icons */}
          <div className="lg:w-1/2 w-full">
            <h2 className="text-4xl font-bold text-gray-800 mb-6 leading-tight">
              Upgrade Your Business<br />with Our CRM Solution
            </h2>
            <div className="w-16 h-1 bg-gray-200 mb-6"></div>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center text-orange-500 flex-shrink-0">
                  <FaSearch />
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 text-lg">High-Quality Leads</h4>
                  <p className="text-gray-500 text-sm mt-1">Discover how to use AI-powered marketing tools to attract and convert more leads without multiplying your marketing spend.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center text-orange-500 flex-shrink-0">
                  <FaRocket />
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 text-lg">Accelerate Sales</h4>
                  <p className="text-gray-500 text-sm mt-1">Start closing more deals faster and streamlining your sales process with HubSpot&apos;s AI-powered deal management tools.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center text-orange-500 flex-shrink-0">
                  <FaStar />
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 text-lg">Create Customer Journey</h4>
                  <p className="text-gray-500 text-sm mt-1">Fuel the entire customer journey with content across formats and channels with all-in-one, AI-powered content marketing software.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}