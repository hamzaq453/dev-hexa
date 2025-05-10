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
    <section className="relative min-h-screen bg-black text-white flex items-center overflow-hidden">
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
      <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-[#035D9D] rounded-full filter blur-[100px] opacity-10 animate-pulse"></div>
      <div className="absolute bottom-1/4 left-1/3 w-48 h-48 bg-[#03388F] rounded-full filter blur-[80px] opacity-5 animate-pulse" style={{ animationDelay: '1s' }}></div>

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
              {/* <div className="w-12 h-1 bg-[#035D9D] mb-8"></div> */}
              <div className="mr-12 inline-block">
                <span className="text-3xl text-white/70 font-light text-right">
                  You've Got a <br/> Great Idea
                </span>
              </div>
              <span className="text-5xl md:text-9xl font-bold -tracking-normal leading-[1.1]">
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
              className="mt-10"
            >
              <Link href="/contact" className="group inline-flex items-center">
                <div className="w-12 h-12 bg-[#03388F] rounded-full flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
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
                  >
                    <path d="M5 12h14"></path>
                    <path d="m12 5 7 7-7 7"></path>
                  </svg>
                </div>
                <span className="text-sm uppercase tracking-widest font-medium">
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
