"use client";

import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

interface TestimonialData {
  id: number;
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  avatar: string;
}

const testimonials: TestimonialData[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "CTO",
    company: "TechFlow Solutions",
    content: "DevHexa transformed our digital presence completely. Their team delivered a stunning website that perfectly represents our brand and has significantly increased our conversion rates.",
    rating: 5,
    avatar: "/aboutpic1.jpeg"
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Marketing Director",
    company: "GrowthLab Inc",
    content: "The mobile app they developed for us exceeded all expectations. The user experience is seamless, and our customer engagement has improved by 300% since launch.",
    rating: 5,
    avatar: "/aboutpic2.jpeg"
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Founder",
    company: "InnovateCorp",
    content: "Working with DevHexa was a game-changer for our startup. Their expertise in cloud solutions helped us scale efficiently while maintaining top-notch security.",
    rating: 5,
    avatar: "/aboutpic3.jpeg"
  },
  {
    id: 4,
    name: "David Thompson",
    role: "CEO",
    company: "Digital Dynamics",
    content: "Their branding and design work gave our company a fresh, modern look. The attention to detail and creative approach made all the difference in our market positioning.",
    rating: 5,
    avatar: "/aboutpic1.jpeg"
  },
  {
    id: 5,
    name: "Lisa Wang",
    role: "Product Manager",
    company: "NextGen Systems",
    content: "The ERP solution they implemented streamlined our operations beyond our expectations. The team's technical expertise and support throughout the project was exceptional.",
    rating: 5,
    avatar: "/aboutpic2.jpeg"
  },
  {
    id: 6,
    name: "James Wilson",
    role: "Operations Head",
    company: "ScaleUp Ventures",
    content: "DevHexa's digital marketing strategies boosted our online presence dramatically. Our lead generation increased by 250% within the first quarter.",
    rating: 5,
    avatar: "/aboutpic3.jpeg"
  }
];

const StarRating = ({ rating }: { rating: number }) => {
  return (
    <div className="flex items-center space-x-1 mb-4">
      {[...Array(5)].map((_, index) => (
        <svg
          key={index}
          className={`w-5 h-5 ${index < rating ? 'text-yellow-400' : 'text-gray-600'}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
};

const TestimonialVariant2 = () => {
  return (
    <section className="relative w-full bg-black overflow-hidden py-28">
      {/* Background with your color scheme */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#020D19] via-[#011222] to-[#053969] opacity-70" />
        
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px),
                             linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
            backgroundSize: "40px 40px",
          }}
        />
        
        {/* Glowing orbs */}
        <div className="absolute top-20 right-1/4 w-96 h-96 bg-[#035D9D] rounded-full filter blur-[200px] opacity-20 animate-pulse" />
        <div className="absolute bottom-20 left-1/4 w-64 h-64 bg-[#03388F] rounded-full filter blur-[150px] opacity-15 animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center px-4 py-2 bg-gradient-to-r from-primary/10 to-primary-dark/10 rounded-full border border-primary/20 mb-6 backdrop-blur-sm">
            <p className="text-sm font-medium tracking-[0.2em] text-primary">
              TESTIMONIALS
            </p>
          </div>
          <h2 className="text-4xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent">
            Client Success Stories
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-primary-dark mx-auto rounded-full mb-6"></div>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto leading-relaxed">
            Discover how we've helped businesses transform their digital presence and achieve remarkable growth.
          </p>
        </div>

        {/* Testimonials Slider */}
        <div className="relative pt-8 px-10">
          <Swiper
            modules={[Navigation, Autoplay, Pagination]}
            spaceBetween={20}
            slidesPerView={1}
            navigation={{
              prevEl: ".testimonial-prev",
              nextEl: ".testimonial-next",
            }}
            pagination={{
              el: ".testimonial-pagination",
              clickable: true,
            }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
              // 1024: {
              //   slidesPerView: 3,
              //   spaceBetween: 20,
              // },
            }}
            loop={true}
            className="testimonial-swiper"
          >
            {testimonials.map((testimonial) => (
              <SwiperSlide key={testimonial.id}>
                <div className="group relative bg-gradient-to-br from-gray-900/60 to-gray-800/40 backdrop-blur-xl rounded-3xl p-8 border border-gray-700/50 hover:border-primary/30 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-1 h-[320px] flex flex-col mt-6 mx-3 ">
                  {/* Large quote mark */}
                  <div className="absolute -top-3 -left-3 w-12 h-12 bg-gradient-to-br from-primary to-primary-dark rounded-full flex items-center justify-center shadow-2xl">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
                    </svg>
                  </div>

                  {/* Content */}
                  <div className="pt-6 flex-1 flex flex-col">
                    <StarRating rating={testimonial.rating} />
                    
                    <p className="text-gray-300 text-base leading-relaxed mb-8 flex-1">
                      "{testimonial.content}"
                    </p>
                    
                    {/* Author info */}
                    <div className="flex items-center space-x-4 mt-auto">
                      {/* <div className="relative w-16 h-16 rounded-full overflow-hidden ring-2 ring-primary/30 shadow-lg">
                        <Image
                          src={testimonial.avatar}
                          alt={testimonial.name}
                          fill
                          className="object-cover"
                        />
                      </div> */}
                      <div>
                        <h4 className="text-white font-bold text-lg">{testimonial.name}</h4>
                        <p className="text-primary font-medium text-sm">{testimonial.role}</p>
                        <p className="text-gray-400 text-sm">{testimonial.company}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Navigation arrows */}
          <div className="hidden md:flex items-center justify-between absolute top-1/2 -translate-y-1/2 left-0 right-0 pointer-events-none z-10">
            <button className="testimonial-prev pointer-events-auto w-12 h-12 rounded-full bg-gradient-to-r from-primary to-primary-dark text-white flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 -translate-x-6">
              <FaArrowLeft size={16} />
            </button>
            <button className="testimonial-next pointer-events-auto w-12 h-12 rounded-full bg-gradient-to-r from-primary to-primary-dark text-white flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 translate-x-6">
              <FaArrowRight size={16} />
            </button>
          </div>

          {/* Mobile navigation */}
          <div className="flex md:hidden justify-center items-center mt-8 space-x-4">
            <button className="testimonial-prev w-10 h-10 rounded-full bg-gradient-to-r from-primary to-primary-dark text-white flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300">
              <FaArrowLeft size={14} />
            </button>
            <button className="testimonial-next w-10 h-10 rounded-full bg-gradient-to-r from-primary to-primary-dark text-white flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300">
              <FaArrowRight size={14} />
            </button>
          </div>

          {/* Pagination */}
          <div className="testimonial-pagination flex justify-center mt-8"></div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialVariant2; 