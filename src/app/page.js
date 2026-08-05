import React from 'react';
import { Poppins } from 'next/font/google';

// Section Imports
import HeroSection from '@/components/landing/HeroSection';
import DemoSection from '@/components/landing/DemoSection';
import FaqSection from '@/components/landing/FaqSection';
import CtaSection from '@/components/landing/CtaSection';
import Features from '@/components/landing/Features';
import Banner from '@/components/landing/Growthbanner';
import Pricing from '@/components/landing/Pricing';
import Testimonials from '@/components/landing/Testimonials';

// Configure Poppins Font
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-poppins',
});

export default function LandingPage() {
  return (
    <main className={`${poppins.variable} font-sans bg-white text-gray-900 overflow-hidden min-h-screen`}>
      <HeroSection />
      <Banner />
      <Features />
      <DemoSection />
      <FaqSection />
      <Pricing />
      <Testimonials />
       <CtaSection />
    </main>
  );
}