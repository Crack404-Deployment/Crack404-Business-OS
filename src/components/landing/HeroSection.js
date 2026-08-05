'use client';
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Autoplay, Pagination } from 'swiper/modules';
import { 
  Zap, Layers, Globe, BarChart3, Sparkles, ArrowRight, Users, 
  Target, ShieldCheck, Database, Cloud, TrendingUp, PieChart, Star 
} from 'lucide-react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

// Framer Motion Variants
const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.1 } },
};

const fadeUpItem = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100, damping: 20 } },
};

// CRM-Focused Floating Icons
const crmFloatingIcons = [
  { id: 1, label: 'Target', top: '15%', left: '8%', delay: 0 },
  { id: 2, label: 'Database', top: '55%', right: '12%', delay: 0.3 },
  { id: 3, label: 'Shield', top: '35%', left: '5%', delay: 0.6 },
  { id: 4, label: 'Trending', bottom: '25%', right: '8%', delay: 0.2 },
  { id: 5, label: 'Cloud', top: '25%', right: '10%', delay: 0.5 },
  { id: 6, label: 'PieChart', bottom: '35%', left: '10%', delay: 0.4 },
];

const FloatingIcon = ({ label, top, left, right, bottom, delay }) => {
  const icons = {
    'Target': <Target className="w-6 h-6 text-orange-500" />,
    'Database': <Database className="w-6 h-6 text-purple-600" />,
    'Shield': <ShieldCheck className="w-6 h-6 text-emerald-500" />,
    'Trending': <TrendingUp className="w-6 h-6 text-orange-500" />,
    'Cloud': <Cloud className="w-6 h-6 text-cyan-500" />,
    'PieChart': <PieChart className="w-6 h-6 text-pink-500" />,
  };

  return (
    <motion.div
      className="absolute hidden md:flex flex-col items-center z-0"
      style={{ top, left, right, bottom }}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1, y: [0, -20, 0], x: [0, 15, 0] }}
      transition={{ 
        opacity: { duration: 0.5, delay: delay },
        scale: { type: 'spring', stiffness: 150, damping: 15, delay: delay },
        y: { duration: 7, repeat: Infinity, ease: "easeInOut", delay: delay + 0.5 },
        x: { duration: 8, repeat: Infinity, ease: "easeInOut", delay: delay + 0.5 }
      }}
    >
      <div className="bg-white/90 backdrop-blur-md rounded-2xl p-4 shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-slate-100">
        {icons[label]}
      </div>
    </motion.div>
  );
};

// Abstract Animated Background Shapes
const BackgroundShapes = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
    {/* Animated Ring 1 */}
    <motion.div 
      className="absolute top-20 left-[-5%] w-64 h-64 border-[30px] border-blue-50/50 rounded-full"
      animate={{ rotate: 360, scale: [1, 1.05, 1] }}
      transition={{ rotate: { duration: 25, repeat: Infinity, ease: "linear" }, scale: { duration: 8, repeat: Infinity, ease: "easeInOut" } }}
    />
    
    {/* Animated Dotted Square */}
    <motion.div 
      className="absolute bottom-40 right-[5%] w-48 h-48 bg-[radial-gradient(#cbd5e1_2px,transparent_2px)] [background-size:16px_16px] opacity-40"
      animate={{ y: [0, -30, 0], rotate: [0, 10, 0] }}
      transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
    />
    
    {/* Floating Plus Icons */}
    <motion.div 
      className="absolute top-1/3 right-[20%] text-slate-200 text-4xl font-light"
      animate={{ y: [0, 20, 0], opacity: [0.3, 0.8, 0.3] }}
      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
    >
      +
    </motion.div>
    <motion.div 
      className="absolute bottom-1/4 left-[15%] text-blue-200 text-5xl font-light"
      animate={{ y: [0, -25, 0], opacity: [0.2, 0.6, 0.2], rotate: [0, 45, 0] }}
      transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
    >
      +
    </motion.div>
  </div>
);

export default function HeroSection() {
  const swiperImages = [
    '/ai.png',
    '/crm.png',       
    '/crypto.png', 
    '/dashboard.png',         
  ];

  return (
    <section className="relative w-full min-h-screen bg-white text-gray-900 pt-28 pb-20 font-sans overflow-hidden">
      
      {/* 1. Base Dotted Grid */}
      <div className="absolute inset-0 -z-30 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:32px_32px] [mask-image:radial-gradient(ellipse_70%_50%_at_50%_30%,#000_60%,transparent_110%)]"></div>
      
      {/* 2. Soft Glowing Orbs (Animated) */}
      <motion.div 
        animate={{ scale: [1, 1.1, 1], opacity: [0.4, 0.6, 0.4] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-0 right-[10%] w-[600px] h-[600px] bg-blue-300/20 rounded-full blur-[120px] pointer-events-none -z-20 mix-blend-multiply" 
      />
      <motion.div 
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute top-[20%] left-[-5%] w-[500px] h-[500px] bg-indigo-300/20 rounded-full blur-[100px] pointer-events-none -z-20 mix-blend-multiply" 
      />
      
      <div className="absolute bottom-0 inset-x-0 h-48 bg-gradient-to-t from-white via-white/80 to-transparent pointer-events-none z-0" />
      
      {/* 3. New Geometric Shapes */}
      <BackgroundShapes />

      {/* 4. CRM Floating Icons */}
      {crmFloatingIcons.map((icon) => (
        <FloatingIcon key={icon.id} {...icon} />
      ))}

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 flex flex-col items-center">
        
        <motion.div variants={staggerContainer} initial="hidden" animate="visible" className="max-w-4xl mx-auto flex flex-col items-center relative">
          
          
          
          <motion.h1 variants={fadeUpItem} className="text-5xl md:text-6xl lg:text-7xl font-900 leading-[1.15] mb-6 text-slate-900 tracking-tight drop-shadow-sm">
            The Ultimate Engine For <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r  from-orange-600 to-orange-600">
              Modern Enterprise.
            </span>
          </motion.h1>
          
          <motion.p variants={fadeUpItem} className="text-base md:text-lg text-slate-500 mb-10 max-w-2xl mx-auto font-medium leading-relaxed">
            Scale your company with a single, secure platform. Manage your entire sales pipeline, track leads, automate workflows, and drive revenue with AI-powered business insights.
          </motion.p>

          <motion.div variants={fadeUpItem} className="flex flex-col sm:flex-row justify-center items-center gap-4 relative z-20">
            <motion.button 
              whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
              className="w-full sm:w-auto px-8 py-4 rounded-xl font-bold bg-orange-600 text-white hover:bg-orange-700 transition-all shadow-[0_8px_25px_rgba(37,99,235,0.3)] hover:shadow-[0_15px_35px_rgba(37,99,235,0.4)] flex items-center justify-center relative overflow-hidden group"
            >
              <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:animate-[shimmer_1.5s_infinite]" />
              <Zap className="w-5 h-5 mr-2" /> Start Free Trial
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.03, backgroundColor: '#f8fafc' }} whileTap={{ scale: 0.97 }}
              className="w-full sm:w-auto px-8 py-4 rounded-xl font-bold border border-slate-200 text-slate-700 bg-white/80 backdrop-blur-sm transition-all shadow-sm flex items-center justify-center hover:border-slate-300"
            >
              Book a Demo <ArrowRight className="w-5 h-5 ml-2 text-slate-400" />
            </motion.button>
          </motion.div>

          <motion.div variants={fadeUpItem} className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8 pt-4">
            <div className="flex -space-x-3">
              <div className="w-10 h-10 rounded-full border-2 border-white bg-blue-100 flex items-center justify-center text-xs font-bold text-blue-700 z-40 shadow-sm">JD</div>
              <div className="w-10 h-10 rounded-full border-2 border-white bg-indigo-100 flex items-center justify-center text-xs font-bold text-indigo-700 z-30 shadow-sm">AS</div>
              <div className="w-10 h-10 rounded-full border-2 border-white bg-purple-100 flex items-center justify-center text-xs font-bold text-purple-700 z-20 shadow-sm">MK</div>
              <div className="w-10 h-10 rounded-full border-2 border-white bg-slate-100 flex items-center justify-center text-xs font-bold text-slate-500 z-10 shadow-sm">
                <Users className="w-4 h-4" />
              </div>
            </div>
            <div className="text-sm text-slate-600 font-medium flex flex-col items-center sm:items-start">
              <div className="flex text-amber-400 mb-0.5">
                {[1,2,3,4,5].map(i => <Star key={i} className="w-4 h-4 fill-current" />)}
              </div>
              Trusted by 10,000+ teams
            </div>
          </motion.div>
        </motion.div>

        {/* Swiper Image Carousel */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          className="w-full max-w-7xl mx-auto relative z-10 mt-12"
        >
          <Swiper
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={'auto'}
            loop={true}
            autoplay={{ delay: 3500, disableOnInteraction: false }}
            coverflowEffect={{ rotate: 0, stretch: 80, depth: 250, modifier: 1, slideShadows: true }}
            pagination={{ clickable: true }}
            modules={[EffectCoverflow, Autoplay, Pagination]}
            className="w-full pt-10 pb-20"
          >
            {swiperImages.map((imgSrc, index) => (
              <SwiperSlide key={index} className="max-w-4xl w-full">
                <div className="relative rounded-2xl overflow-hidden shadow-[0_20px_60px_rgb(0,0,0,0.12)] border border-slate-200/60 bg-white aspect-[16/9] w-full">
                  <Image src={imgSrc} alt={`Crack404 Dashboard ${index + 1}`} fill className="object-contain" priority={index === 0} />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>

        {/* Floating Stats Banner */}
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="relative z-30 w-full max-w-5xl mx-auto bg-white/80 backdrop-blur-xl rounded-3xl shadow-[0_15px_40px_rgb(0,0,0,0.08)] border border-white overflow-hidden -mt-24"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-slate-200/60">
            <motion.div variants={fadeUpItem} className="p-8 text-center hover:bg-blue-50/40 transition-colors group">
              <div className="w-12 h-12 mx-auto bg-blue-100/50 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-inner">
                <Layers className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-3xl font-black text-slate-900 mb-1">10+</h3>
              <p className="text-slate-500 font-medium text-sm">Core Enterprise Modules</p>
            </motion.div>
            
            <motion.div variants={fadeUpItem} className="p-8 text-center hover:bg-indigo-50/40 transition-colors group">
              <div className="w-12 h-12 mx-auto bg-indigo-100/50 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-inner">
                <Zap className="w-6 h-6 text-indigo-600" />
              </div>
              <h3 className="text-3xl font-black text-slate-900 mb-1">15+</h3>
              <p className="text-slate-500 font-medium text-sm">Specialized AI Models</p>
            </motion.div>
            
            <motion.div variants={fadeUpItem} className="p-8 text-center hover:bg-purple-50/40 transition-colors group">
              <div className="w-12 h-12 mx-auto bg-purple-100/50 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-inner">
                <Globe className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-3xl font-black text-slate-900 mb-1">100%</h3>
              <p className="text-slate-500 font-medium text-sm">Tenant Data Isolation</p>
            </motion.div>
            
            <motion.div variants={fadeUpItem} className="p-8 text-center hover:bg-emerald-50/40 transition-colors group">
              <div className="w-12 h-12 mx-auto bg-emerald-100/50 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-inner">
                <Database className="w-6 h-6 text-emerald-600" />
              </div>
              <h3 className="text-3xl font-black text-slate-900 mb-1">250+</h3>
              <p className="text-slate-500 font-medium text-sm">Database Tables</p>
            </motion.div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}