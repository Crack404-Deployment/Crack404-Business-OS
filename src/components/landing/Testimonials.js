"use client";
import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// Import required modules
import { Pagination, Autoplay } from 'swiper/modules';
import { FaStar } from 'react-icons/fa';

export default function Testimonials() {
  // Swiper needs to know it's on the client before it renders
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);
  
  // 6 Unique Testimonials
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO, TechFlow",
      text: "Great Admin Dashboard with easy customization and quality coding. Support works flawlessly, with fast assistance and willingness to help in every detail. This is one of the best experiences to date. Totally recommended."
    },
    {
      name: "Michael Chen",
      role: "Product Manager, InnovateX",
      text: "We switched to Crack404 for our internal CRM and the transition was seamless. The AI assistant and real-time analytics have saved our sales team hours of manual data entry every single week."
    },
    {
      name: "Emily Davis",
      role: "Lead Developer, CloudSync",
      text: "The modular design is brilliant. We were able to roll out the POS and Inventory modules to our retail clients in under a week. The code is clean, well-documented, and a joy to work with."
    },
    {
      name: "David Wilson",
      role: "Operations Director, Prime Logistics",
      text: "As a logistics company, we needed robust tracking and fast load times. This platform delivered exactly that. The UI is intuitive, and our staff picked it up immediately without extensive training."
    },
    {
      name: "Jessica Martinez",
      role: "Marketing Head, GrowthHub",
      text: "The AI features completely changed how we generate leads. The system's ability to predict sales trends and automate follow-ups has increased our conversion rate by over 20%."
    },
    {
      name: "James Okafor",
      role: "Founder, NexGen Solutions",
      text: "After trying several ERP solutions, this is the only one that felt truly modern. The white-and-orange theme is clean, the responsive design works on all devices, and the support team is incredibly responsive."
    }
  ];

  // If the page hasn't loaded on the client yet, show a placeholder
  if (!isClient) {
    return (
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800">What Our Customers Are Saying</h2>
          </div>
          <div className="h-64 flex items-center justify-center text-gray-400">
            Loading testimonials...
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* ================= TESTIMONIAL SWIPER ================= */}
        <div className="mt-12">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">What Our Customers Are Saying</h2>
          
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            pagination={{ clickable: true }}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 }
            }}
            modules={[Pagination, Autoplay]}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            className="testimonial-swiper pb-12"
          >
            {testimonials.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 h-full flex flex-col justify-between">
                  <div>
                    <div className="flex gap-1 text-orange-400 mb-4">
                      {[...Array(5)].map((_, i) => <FaStar key={i} />)}
                    </div>
                    <p className="text-gray-600 mb-6 leading-relaxed">{item.text}</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center text-green-600 font-bold text-xl flex-shrink-0">
                      {item.name.charAt(0)}
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800">{item.name}</h4>
                      <p className="text-sm text-gray-500">{item.role}</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}