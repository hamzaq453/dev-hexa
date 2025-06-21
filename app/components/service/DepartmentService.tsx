"use client";

import React from "react";
import Image from "next/image";

interface DepartmentCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  gradientBackground: string;
}

const DepartmentService = () => {
  // Department data with updated color scheme
  const departmentData: DepartmentCardProps[] = [
    {
      title: "Marketing",
      description: "Let your bot drive the conversation and turn leads into customers.",
      icon: (
        <div className="relative w-full h-52 bg-gradient-to-br from-[#035D9D]/15 via-[#03388F]/8 to-transparent rounded-xl overflow-hidden">
          <Image
            src="/subSection1.png"
            alt="Marketing AI Solutions"
            fill
            className="object-cover rounded-xl"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#035D9D]/20 to-transparent rounded-xl"></div>
        </div>
      ),
      gradientBackground: "bg-[#060606] border-gray-300",
    },
    {
      title: "Support & Product",
      description: "Deliver 24/7 multichannel support and make your customers happy.",
      icon: (
        <div className="relative w-full h-52 bg-gradient-to-br from-[#035D9D]/15 via-[#03388F]/8 to-transparent rounded-xl overflow-hidden">
          <Image
            src="/subSection2.png"
            alt="Support & Product AI Solutions"
            fill
            className="object-cover rounded-xl"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#035D9D]/20 to-transparent rounded-xl"></div>
        </div>
      ),
      gradientBackground: "bg-[#060606] border-gray-300",
    },
    {
      title: "Sales",
      description: "Boost meetings and show rates with highly interested leads",
      icon: (
        <div className="relative w-full h-52 bg-gradient-to-br from-[#035D9D]/15 via-[#03388F]/8 to-transparent rounded-xl overflow-hidden">
          <Image
            src="/subSection1.png"
            alt="Sales AI Solutions"
            fill
            className="object-cover rounded-xl"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#035D9D]/20 to-transparent rounded-xl"></div>
        </div>
      ),
      gradientBackground: "bg-[#060606] border-gray-300",
    },
    {
      title: "Healthcare",
      description: "Streamline patient interactions and appointment scheduling with intelligent automation.",
      icon: (
        <div className="relative w-full h-52 bg-gradient-to-br from-[#035D9D]/15 via-[#03388F]/8 to-transparent rounded-xl overflow-hidden">
          <Image
            src="/subSection2.png"
            alt="Healthcare AI Solutions"
            fill
            className="object-cover rounded-xl"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#035D9D]/20 to-transparent rounded-xl"></div>
        </div>
      ),
      gradientBackground: "bg-[#060606] border-gray-300",
    },
  ];

  const DepartmentCard: React.FC<DepartmentCardProps> = ({ 
    title, 
    description, 
    icon, 
    gradientBackground 
  }) => {
    return (
      <div className={`group relative bg-[#171717] border-[1px] border-gray-500 rounded-xl overflow-hidden p-3 h-full transition-all duration-300 hover:border-[#035D9D]/50 hover:shadow-2xl hover:shadow-[#035D9D]/20 hover:-translate-y-2`}>
        {/* Icon/Image section */}
        <div className="relative h-52">
          {icon}
        </div>
        
        {/* Content section */}
        <div className="relative px-5 pb-8 pt-6">
          <h3 className="text-3xl font-bold text-white mb-4 leading-tight group-hover:text-[#035D9D] transition-colors duration-300">
            {title}
          </h3>
          <p className="text-gray-300 text-lg leading-relaxed">
            {description}
          </p>
        </div>

        {/* Plus sign at bottom right */}
        <div className="absolute bottom-4 right-4 w-8 h-8  rounded-full border-1 border-white/20 flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:shadow-xl transition-all duration-300">
          <svg 
            width="16" 
            height="16" 
            viewBox="0 0 24 24" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            className="text-white"
          >
            <path 
              d="M12 5V19M5 12H19" 
              stroke="currentColor" 
              strokeWidth="2.5" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
    );
  };

  return (
    <section className="relative py-20 lg:py-32 bg-[#020D19] overflow-hidden">
      {/* Subtle background effects using user's color scheme */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#053969]/10 via-transparent to-[#035D9D]/5" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(3,93,157,0.03)_0%,transparent_50%)]" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl sm:text-6xl font-bold text-[#ededed] mb-8 leading-tight">
            Industry Applications
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Automate conversations throughout the entire customer journey.
          </p>
        </div>
        
        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-stretch">
          {departmentData.map((department, index) => (
            <DepartmentCard
              key={index}
              title={department.title}
              description={department.description}
              icon={department.icon}
              gradientBackground={department.gradientBackground}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default DepartmentService; 