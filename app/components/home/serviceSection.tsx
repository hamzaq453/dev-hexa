// components/Services.tsx
import { FC } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { getAllServices } from "@/lib/utils/serviceLoader";
import Link from "next/link";

const Services: FC = () => {
  const services = getAllServices().map(service => ({
    id: service.id,
    title: service.name,
    description: service.description,
    icon: (
      <svg
        className="w-12 h-12"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="14" height="14" x="5" y="5" rx="2" ry="2" fill="#42b6f4" />
        <path
          d="M9 8h6M9 12h4M9 16h3"
          stroke="#7f00ff"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M7 16l3 3 7-7"
          stroke="#7f00ff"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  }));

  return (
    <section className="relative min-h-screen w-full bg-black overflow-hidden py-28">
      {/* Simple, clean background */}
      <div className="absolute inset-0">
        {/* Subtle gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#020D19] via-[#011222] to-[#053969] opacity-50" />
        
        {/* Simple grid pattern */}
        <div
          className="absolute inset-0 opacity-3"
          style={{
            backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px),
                             linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
            backgroundSize: "40px 40px",
          }}
        />
        
        {/* Two subtle glowing orbs */}
        <div className="absolute top-20 right-1/4 w-96 h-96 bg-[#035D9D] rounded-full filter blur-[200px] opacity-20 animate-pulse" />
        <div className="absolute bottom-20 left-1/4 w-64 h-64 bg-[#03388F] rounded-full filter blur-[150px] opacity-15 animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      {/* Content container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Our Services</h2>
        <p className="text-gray-300 max-w-2xl mx-auto">
          We provide comprehensive digital solutions to help your business grow and succeed in the digital world.
        </p>
      </div>

      <div className="relative md:px-12 lg:px-16">
        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          navigation={{
            prevEl: ".services-prev",
            nextEl: ".services-next",
          }}
          autoplay={{ 
            delay: 3000, 
            disableOnInteraction: false,
            pauseOnMouseEnter: true 
          }}
          breakpoints={{
            480: {
              slidesPerView: 1,
              spaceBetween: 15,
            },
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 25,
            },
          }}
          loop={true}
          className="services-swiper"
        >
          {services.map(({ id, title, description, icon }) => (
            <SwiperSlide key={id}>
              <Link href={`/services/${id}`}>
                <div 
                  className="flex flex-col items-start p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 h-full group hover:-translate-y-1 mx-2 cursor-pointer" 
                >
                  <div className="mb-4 group-hover:scale-105 transition-transform duration-300">
                    {icon}
                  </div>
                  <h3 className="text-lg font-bold mb-3 text-white group-hover:text-blue-400 transition-colors duration-300">
                    {title}
                  </h3>
                  <p className="text-sm leading-relaxed text-gray-300 flex-grow line-clamp-3">
                    {description}
                  </p>
                  <div className="mt-4 w-full">
                    <button className="text-blue-400 hover:text-blue-300 font-semibold text-sm flex items-center group-hover:translate-x-1 transition-transform duration-300">
                      Learn More
                      <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Desktop Navigation arrows - hidden on mobile */}
        <div className="hidden md:flex md:items-center services-prev absolute left-12 top-1/2 -translate-y-1/2 -translate-x-6 cursor-pointer z-10 w-10 h-10 rounded-full items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
          style={{ 
            color: "white", 
            backgroundColor: "var(--primary)",
          }}
        >
          <FaArrowLeft size={20} />
        </div>
        
        <div className="hidden md:flex md:items-center services-next absolute right-12 top-1/2 -translate-y-1/2 translate-x-6 cursor-pointer z-10 w-10 h-10 rounded-full items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
          style={{ 
            color: "white", 
            backgroundColor: "var(--primary)",
          }}
        >
          <FaArrowRight size={20} />
        </div>
      </div>

      {/* Mobile Navigation arrows at bottom */}
      <div className="flex md:hidden justify-center items-center mt-8 space-x-4">
        <div className="services-prev cursor-pointer w-10 h-10 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
          style={{ 
            color: "white", 
            backgroundColor: "var(--primary)",
          }}
        >
          <FaArrowLeft size={14} />
        </div>
        
        {/* Pagination dots for mobile */}
        {/* <div className="flex space-x-2">
          {[...Array(Math.ceil(services.length / 1))].map((_, index) => (
            <div
              key={index}
              className="w-2 h-2 rounded-full bg-gray-600 hover:bg-blue-400 transition-colors duration-300"
            />
          ))}
        </div> */}
        
        <div className="services-next cursor-pointer w-10 h-10 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
          style={{ 
            color: "white", 
            backgroundColor: "var(--primary)",
          }}
        >
          <FaArrowRight size={14} />
        </div>
      </div>

      {/* Desktop Pagination dots */}
      {/* <div className="hidden md:flex justify-center mt-8 space-x-2">
        {[...Array(Math.ceil(services.length / 3))].map((_, index) => (
          <div
            key={index}
            className="w-2 h-2 rounded-full bg-gray-600 hover:bg-blue-400 transition-colors duration-300 cursor-pointer"
          />
        ))}
      </div> */}
      </div>
    </section>
  );
};

export default Services;
