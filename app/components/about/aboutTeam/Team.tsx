import React from "react";
import Image from "next/image";

const teamImages = [
  { src: "/aboutpic1.jpeg", alt: "User 1", className: "top-4 left-16 w-14 h-14 md:w-20 md:h-20" },
  { src: "/aboutpic2.jpeg", alt: "User 2", className: "top-8 right-6 w-14 h-14 md:w-20 md:h-20" },
  { src: "/aboutpic3.jpeg", alt: "User 3", className: "bottom-10 left-28 w-14 h-14 md:w-20 md:h-20" },
  { src: "/aboutpic1.jpeg", alt: "User 4", className: "bottom-8 right-8 w-14 h-14 md:w-20 md:h-20" },
  { src: "/aboutpic2.jpeg", alt: "User 5", className: "top-1/2 left-8 -translate-y-1/2 w-12 h-12 md:w-16 md:h-16" },
  { src: "/aboutpic3.jpeg", alt: "User 6", className: "top-1/2 right-8 -translate-y-1/2 w-12 h-12 md:w-16 md:h-16" },
];

const Team = () => {
  return (
    <section
      className="relative bg-[#101D26] rounded-2xl px-4 py-16 md:py-24 mx-auto overflow-hidden shadow-xl"
      style={{ background: "var(--background)" }}
    >
      {/* Floating team images */}
      {teamImages.map((img, idx) => (
        <div
          key={idx}
          className={`hidden sm:block absolute z-10 rounded-full ring-4 ring-[#060606]/60 bg-[#060606] ${img.className}`}
          style={{ boxShadow: "0 4px 24px 0 rgba(3,93,157,0.10)" }}
        >
          <Image
            src={img.src}
            alt={img.alt}
            fill
            className="object-cover rounded-full"
            sizes="(max-width: 768px) 56px, 80px"
          />
        </div>
      ))}
      {/* Main content */}
      <div className="relative z-20 flex flex-col items-center justify-center text-center max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight drop-shadow-lg">
          Ready to Transform <br className="hidden md:inline" />Your Digital Vision?
        </h2>
        <p className="text-gray-300 text-base md:text-lg mb-8 max-w-3xl mx-auto">
          At DevHexa, we're passionate about turning innovative ideas into powerful digital solutions. Whether you need a cutting-edge website, mobile application, or comprehensive digital strategy, we're here to bring your vision to life with expertise and dedication.
        </p>
        <button
          className="px-8 py-3 bg-gradient-to-r from-primary to-primary-dark hover:from-primary-dark hover:to-primary-darker text-white font-semibold rounded-full shadow-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 "
        >
          Start Your Project
        </button>
      </div>
    </section>
  );
};

export default Team;
