"use client";

import { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import { motion } from 'framer-motion';
import Link from 'next/link';

const LandingHeroMinimal = () => {
  const typedRef = useRef<HTMLSpanElement>(null);
  const typedInstance = useRef<Typed | null>(null);

  useEffect(() => {
    if (typedRef.current) {
      typedInstance.current = new Typed(typedRef.current, {
        strings: [
          '<span class="text-[#FF8225]">Website</span>',
          '<span class="text-[#FF3366]">Campaign</span>',
          '<span class="text-[#4ECDC4]">Product</span>',
          '<span class="text-[#9D4EDD]">Brand</span>',
          '<span class="text-[#FFD700]">Vision</span>'
        ],
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
    <section className="relative min-h-screen bg-black text-white flex items-center overflow-hidden">
      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-12"
        style={{
          backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px),
                           linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }}
      ></div>

      {/* Subtle animated gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#111] via-black to-[#0a0a0a] opacity-70"></div>
      
      {/* Glowing accent */}
      <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-[#FF8225] rounded-full filter blur-[100px] opacity-10 animate-pulse"></div>
      <div className="absolute bottom-1/4 left-1/3 w-48 h-48 bg-[#FF8225] rounded-full filter blur-[80px] opacity-5 animate-pulse" style={{ animationDelay: '1s' }}></div>

      {/* Main content */}
      <div className="container relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Left column */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-center"
          >
            <div className="mb-4">
              {/* <div className="w-12 h-1 bg-[#FF8225] mb-8"></div> */}
              <div className="mr-12 inline-block">
                <span className="text-3xl text-white font-light text-right">
                  You've Got a <br/> Great Idea
                </span>
              </div>
              <span className="text-5xl md:text-9xl font-extrabold -tracking-normal leading-[1.1]">
                We'll turn it
                <br />
                into a great
                <br />
                <span className="inline-block">
                  <span ref={typedRef}></span>
                </span>
              </span>
            </div>

            
          </motion.div>
        </div>
      </div>

      {/* Decorative element - Bottom Right */}
      {/* <div className="absolute bottom-12 right-12 z-10">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="w-24 h-24 relative"
        >
          <div className="absolute inset-0 border-2 border-[#FF8225]/30 rounded-full"></div>
          <div className="absolute inset-0 border border-[#FF8225]/10 rounded-full" style={{ animation: 'spin 20s linear infinite' }}></div>
          <div className="absolute inset-[8px] border border-[#FF8225]/20 rounded-full" style={{ animation: 'spin 15s linear infinite reverse' }}></div>
          <div className="absolute inset-[16px] border border-[#FF8225]/30 rounded-full overflow-hidden" style={{ animation: 'spin 30s linear infinite' }}>
            <div className="absolute top-1/2 left-0 w-full h-px bg-[#FF8225]/20"></div>
            <div className="absolute top-0 left-1/2 w-px h-full bg-[#FF8225]/20"></div>
          </div>
          <div className="absolute top-[50%] left-[50%] w-3 h-3 bg-[#FF8225] rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
        </motion.div>
      </div> */}

      <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="absolute bottom-24 right-32 z-10"
            >
              <div className="relative inline-block">
                <Link href="/contact" className="group inline-flex items-center relative">
                  {/* Interactive Circle Element */}
                  <div className="absolute -translate-x-1/2 -translate-y-1/2 left-[75%] top-1/2 w-48 h-48 pointer-events-none">
                    {/* Outer circle with dash */}
                    <div className="absolute inset-0 rounded-full border-2 border-[#FF8225]/20 border-dashed transition-all duration-700 group-hover:rotate-[360deg]"></div>
                    
                    {/* Middle circles */}
                    <div className="absolute inset-[10px] rounded-full border border-[#FF8225]/30 transition-all duration-500 group-hover:scale-90 group-hover:border-[#FF8225]/60"></div>
                    
                    {/* Inner glowing circle */}
                    <div className="absolute inset-[20px] rounded-full bg-gradient-to-br from-[#FF8225]/10 to-transparent transition-all duration-700 group-hover:bg-gradient-to-br group-hover:from-[#FF8225]/20 group-hover:to-transparent"></div>
                    
                    {/* Accent dots */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 bg-[#FF8225] rounded-full"></div>
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2 h-2 bg-[#FF8225] rounded-full"></div>
                    <div className="absolute left-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-[#FF8225] rounded-full"></div>
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-[#FF8225] rounded-full"></div>
                  </div>
                  
                  {/* Main button */}
                  <div className="w-14 h-14 bg-[#FF8225] rounded-full flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300 relative z-20 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#FF8225] to-[#FF8225]/70 group-hover:to-[#FF8225] transition-all duration-500"></div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="relative z-10"
                    >
                      <path d="M5 12h14"></path>
                      <path d="m12 5 7 7-7 7"></path>
                    </svg>
                  </div>
                  
                  {/* Text with animated underline */}
                  <span className="text-sm  tracking-widest font-medium relative z-20 group-hover:text-[#FF8225] transition-colors duration-300">
                    Let's Talk
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#FF8225]/80 group-hover:w-full transition-all duration-300"></span>
                  </span>
                </Link>
              </div>
            </motion.div>

      <style jsx>{`
        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </section>
  );
};

export default LandingHeroMinimal; 