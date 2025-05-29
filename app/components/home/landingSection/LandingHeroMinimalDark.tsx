"use client";

import { useEffect, useRef } from "react";
import Typed from "typed.js";
import { motion } from "framer-motion";
import Link from "next/link";

const LandingHeroMinimalDark = () => {
  const typedRef = useRef<HTMLSpanElement>(null);
  const typedInstance = useRef<Typed | null>(null);

  useEffect(() => {
    if (typedRef.current) {
      typedInstance.current = new Typed(typedRef.current, {
        strings: ["Website", "Campaign", "Product", "Brand", "Vision"],
        typeSpeed: 70,
        backSpeed: 50,
        backDelay: 1500,
        loop: true,
        showCursor: false,
        startDelay: 300,
        contentType: 'html',
        smartBackspace: true,
      });
    }

    return () => {
      if (typedInstance.current) {
        typedInstance.current.destroy();
      }
    };
  }, []);

  return (
    <section className="relative min-h-screen bg-black text-white flex items-center overflow-hidden select-none">
      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px),
                           linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }}
      ></div>

      {/* Subtle animated gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#020D19] via-[#011222] to-[#053969] opacity-70"></div>
      
      {/* Glowing accent */}
      <div className="absolute top-1/4 right-1/4 w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 bg-[#035D9D] rounded-full filter blur-[100px] opacity-10 animate-pulse"></div>
      <div className="absolute bottom-1/4 left-1/3 w-24 h-24 sm:w-36 sm:h-36 md:w-48 md:h-48 bg-[#03388F] rounded-full filter blur-[80px] opacity-5 animate-pulse" style={{ animationDelay: '1s' }}></div>

      {/* Main content */}
      <div className="container relative z-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Left column */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-center"
          >
            <div className="mb-4">
              {/* <div className="w-12 h-1 bg-[#035D9D] mb-8"></div> */}
              <div className="mr-4 sm:mr-8 md:mr-12 inline-block">
                <span className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-white/70 font-light text-right">
                  You've Got a <br className="hidden sm:block"/> Great Idea
                </span>
              </div>
              <span className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl xl:text-9xl font-bold -tracking-normal leading-[1.1]">
                We'll turn it
                <br />
                into a great
                <br />
                <span className="inline-block">
                  <span className="text-[#035D9D]" ref={typedRef}>Website</span>
                </span>
              </span>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="absolute bottom-8 right-4 sm:bottom-12 sm:right-8 md:bottom-16 md:right-16 lg:right-32 z-10"
            >
              <Link href="/contact" className="group inline-flex items-center relative">
                {/* Interactive Circle Element */}
                <div className="absolute -translate-x-1/2 -translate-y-1/2 left-[75%] top-1/2 w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 pointer-events-none">
                  {/* Outer circle with dash */}
                  <div className="absolute inset-0 rounded-full border-2 border-[#03388F]/20 border-dashed transition-all duration-700 group-hover:rotate-[360deg]"></div>
                  
                  {/* Middle circles */}
                  <div className="absolute inset-[8px] sm:inset-[10px] rounded-full border border-[#035D9D]/30 transition-all duration-500 group-hover:scale-90 group-hover:border-[#035D9D]/60"></div>
                  
                  {/* Inner glowing circle */}
                  <div className="absolute inset-[16px] sm:inset-[20px] rounded-full bg-gradient-to-br from-[#035D9D]/10 to-transparent transition-all duration-700 group-hover:bg-gradient-to-br group-hover:from-[#035D9D]/20 group-hover:to-transparent"></div>
                  
                  {/* Accent dots */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-[#035D9D] rounded-full"></div>
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-[#035D9D] rounded-full"></div>
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-[#035D9D] rounded-full"></div>
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-[#035D9D] rounded-full"></div>
                </div>

                {/* Main button */}
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#03388F] rounded-full flex items-center justify-center mr-3 sm:mr-4 group-hover:scale-110 transition-transform duration-300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="sm:w-6 sm:h-6"
                  >
                    <path d="M5 12h14"></path>
                    <path d="m12 5 7 7-7 7"></path>
                  </svg>
                </div>
                <span className="text-xs sm:text-sm text-white uppercase tracking-widest hover:underline font-medium">
                  Lets Talk
                </span>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LandingHeroMinimalDark;
