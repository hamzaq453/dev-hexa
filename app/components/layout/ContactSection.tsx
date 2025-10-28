"use client";
import Link from "next/link";

const ContactSection = () => (
  <section className="w-full py-16 sm:py-20 md:py-10 px-4 sm:px-6 md:px-8 relative overflow-hidden bg-gray-300 text-black">
    {/* Background gradient and grid overlay */}
    {/* <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-primary/10">
    </div>
    <div
      className="absolute inset-0 opacity-10"
      style={{
        backgroundImage: `linear-gradient(to right, var(--primary) 1px, transparent 1px),
                       linear-gradient(to bottom, var(--primary) 1px, transparent 1px)`,
        backgroundSize: "40px 40px",
      }}
    >
      
    </div> */}

    <div className="max-w-7xl mx-auto relative z-10">
      {/* Mobile Layout */}
      <div className="block md:hidden">
        {/* Mobile: Heard Enough - Top */}
        <div className="flex justify-center mb-8">
          <span className="text-sm sm:text-base font-medium tracking-wide text-center text-black">
            HEARD ENOUGH?
            <span className="ml-2 text-lg font-black">&rarr;</span>
          </span>
        </div>
        
        {/* Mobile: Contact Us - Center */}
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 leading-tight">
            Contact <span className="font-normal">us</span>
          </h2>
          <div className="w-32 sm:w-40 h-1 bg-yellow-400 rounded-full" />
        </div>
        
        {/* Mobile: Arrow Button - Bottom Center */}
        <div className="flex justify-center">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center w-16 h-16 sm:w-18 sm:h-18 rounded-full bg-yellow-400 hover:bg-yellow-500 transition-colors duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            <svg
              className="w-7 h-7 sm:w-8 sm:h-8 text-black"
              fill="none"
              stroke="currentColor"
              strokeWidth={2.5}
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden md:flex items-center justify-between gap-8">
        {/* Left: Heard Enough */}
        <div className="w-full md:w-1/4 flex justify-start">
          <span className="text-base lg:text-lg font-medium tracking-wide flex items-end gap-1 text-black">
            HEARD
            <br />
            ENOUGH?
            <span className="ml-1 text-xl font-black">&rarr;</span>
          </span>
        </div>
        
        {/* Center: Contact Us */}
        <div className="w-full md:w-2/4 flex flex-col items-center text-center">
          <h2
            className="text-5xl lg:text-6xl xl:text-7xl font-bold mb-2 leading-tight"
            style={{ fontFamily: "inherit" }}
          >
            Contact <span className="font-normal">us</span>
          </h2>
          <div className="w-40 lg:w-48 h-1 bg-yellow-400 rounded-full" />
        </div>
        
        {/* Right: Arrow Button */}
        <div className="w-full md:w-1/4 flex justify-end">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center w-16 h-16 lg:w-18 lg:h-18 rounded-full bg-yellow-400 hover:bg-yellow-500 transition-colors duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            <svg
              className="w-7 h-7 lg:w-8 lg:h-8 text-black"
              fill="none"
              stroke="currentColor"
              strokeWidth={2.5}
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  </section>
);

export default ContactSection;
