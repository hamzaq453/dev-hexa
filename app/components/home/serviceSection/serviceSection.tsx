// components/Services.tsx
import { FC } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const services = [
  {
    id: 1,
    title: "Mobile Application Development",
    description:
      "Tap in to the massive market of mobile users with a user friendly mobile application through professional development.",
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
  },
  {
    id: 2,
    title: "Website Applications",
    description:
      "Collaborate with your team, or interact with customers, Website Applications are the most innovative way to work in real time.",
    icon: (
      <svg
        className="w-12 h-12"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          width="14"
          height="14"
          x="7"
          y="7"
          rx="2"
          ry="2"
          fill="#7f00ff"
          stroke="none"
        />
        <rect
          width="10"
          height="10"
          x="13"
          y="11"
          rx="2"
          ry="2"
          fill="#42b6f4"
          stroke="none"
        />
        <path
          d="M10 9h5M10 13h3"
          stroke="#ededed"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    id: 3,
    title: "Branding and Graphic Design",
    description:
      "Find the perfect theme, colors and visualization for your company to attract the customer at first glance through branding and graphic designing.",
    icon: (
      <svg
        className="w-12 h-12"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          width="12"
          height="8"
          x="6"
          y="6"
          rx="2"
          ry="2"
          fill="#42b6f4"
          stroke="none"
        />
        <rect
          width="12"
          height="8"
          x="8"
          y="10"
          rx="2"
          ry="2"
          fill="#7f00ff"
          stroke="none"
        />
        <path
          d="M8 8h8M8 12h6"
          stroke="#ededed"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    id: 4,
    title: "Digital Marketing Services",
    description:
      "Boost your online presence with comprehensive digital marketing strategies including SEO, social media marketing, and content creation.",
    icon: (
      <svg
        className="w-12 h-12"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="12" cy="12" r="8" fill="#42b6f4" stroke="none" />
        <path
          d="M8 12h8M12 8v8"
          stroke="#7f00ff"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="12" cy="12" r="3" fill="#7f00ff" stroke="none" />
      </svg>
    ),
  },
  {
    id: 5,
    title: "Cloud Computing Services",
    description:
      "Scalable cloud solutions for your business including cloud migration, infrastructure management, and data backup services.",
    icon: (
      <svg
        className="w-12 h-12"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"
          fill="#42b6f4"
          stroke="#7f00ff"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="12" cy="14" r="2" fill="#7f00ff" stroke="none" />
      </svg>
    ),
  },
  {
    id: 6,
    title: "ERP for Businesses",
    description:
      "Enterprise Resource Planning systems to streamline your business operations, improve efficiency and integrate all departments.",
    icon: (
      <svg
        className="w-12 h-12"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="18" height="12" x="3" y="6" rx="2" ry="2" fill="#42b6f4" stroke="none" />
        <path
          d="M7 10h10M7 14h6"
          stroke="#7f00ff"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="17" cy="12" r="2" fill="#7f00ff" stroke="none" />
      </svg>
    ),
  },
];

const Services: FC = () => {
  return (
    <section
      className="py-28 px-4 max-w-7xl mx-auto relative"
      style={{ backgroundColor: "var(--background)", color: "var(--foreground)" }}
    >
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Our Services</h2>
        <p className="text-gray-300 max-w-2xl mx-auto">
          We provide comprehensive digital solutions to help your business grow and succeed in the digital world.
        </p>
      </div>

      <div className="relative px-12 lg:px-16">
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
              <div 
                className="flex flex-col items-start p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 h-full group hover:-translate-y-1 mx-2" 
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
    </section>
  );
};

export default Services;
