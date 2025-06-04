"use client";
import {
  useScroll,
  useTransform,
  motion,
} from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

interface TimelineEntry {
  title: string;
  content: React.ReactNode;
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div
      className="w-full bg-transparent font-sans md:px-10"
      ref={containerRef}
    >
      <div className="relative max-w-7xl mx-auto py-20 px-4 md:px-8 lg:px-10">
        {/* Section header with glassmorphism */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/10 shadow-2xl mb-16"
        >
          <h2 className="text-2xl md:text-5xl lg:text-6xl mb-4 font-bold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#035D9D] to-[#03388F]">
              Portfolio Journey
            </span>
          </h2>
          <p className="text-gray-300 text-sm md:text-lg max-w-2xl">
            Explore our creative evolution through groundbreaking projects and innovative solutions
          </p>
          <div className="mt-6 flex items-center gap-4">
            <div className="flex -space-x-2">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="w-8 h-8 rounded-full bg-gradient-to-br from-[#035D9D] to-[#03388F] border-2 border-black"
                />
              ))}
            </div>
            <span className="text-sm text-gray-400">3+ Years of Excellence</span>
          </div>
        </motion.div>
      </div>

      <div ref={ref} className="relative max-w-7xl mx-auto pb-20">
        {data.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="flex justify-start pt-10 md:pt-40 md:gap-10"
          >
            <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
              {/* Enhanced timeline node */}
              <div className="relative">
                {/* Glowing effect */}
                <div className="absolute inset-0 h-14 w-14 bg-gradient-to-br from-[#035D9D] to-[#03388F] rounded-full blur-xl opacity-60 animate-pulse" />
                
                {/* Main node */}
                <div className="relative h-14 w-14 rounded-full bg-gradient-to-br from-[#035D9D] to-[#03388F] flex items-center justify-center shadow-2xl border-2 border-white/20">
                  <div className="h-6 w-6 rounded-full bg-white shadow-inner" />
                  
                  {/* Orbiting particle */}
                  <div className="absolute inset-0 animate-spin-slow">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-2 w-2 h-2 bg-white rounded-full shadow-lg" />
                  </div>
                </div>
                
                {/* Connection line decoration */}
                <div className="absolute top-full left-1/2 -translate-x-1/2 w-px h-20 bg-gradient-to-b from-[#035D9D] to-transparent" />
              </div>
              
              <h3 className="hidden md:block text-xl md:pl-20 md:text-5xl font-bold ml-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#035D9D] to-[#03388F]">
                  {item.title}
                </span>
              </h3>
            </div>

            <div className="relative pl-20 pr-4 md:pl-4 w-full">
              <h3 className="md:hidden block text-2xl mb-4 text-left font-bold">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#035D9D] to-[#03388F]">
                  {item.title}
                </span>
              </h3>
              
              {/* Content wrapper with hover effect */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="relative group"
              >
                {/* Hover glow effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-[#035D9D] to-[#03388F] rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500" />
                
                {item.content}
              </motion.div>
            </div>
          </motion.div>
        ))}
        
        {/* Enhanced timeline line */}
        <div
          style={{
            height: height + "px",
          }}
          className="absolute md:left-8 left-8 top-0 overflow-hidden w-[3px]"
        >
          {/* Background gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#035D9D]/20 to-transparent" />
          
          {/* Animated progress line */}
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0 w-full"
          >
            {/* Main gradient line */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#03388F] via-[#035D9D] to-[#035D9D]/50 rounded-full" />
            
            {/* Glowing effect */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#035D9D] to-transparent blur-sm" />
            
            {/* Pulse animation */}
            <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-white to-transparent opacity-50 animate-pulse" />
          </motion.div>
          
          {/* Floating particles */}
          <div className="absolute inset-0">
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-[#035D9D] rounded-full"
                animate={{
                  y: [-20, height + 20],
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: 3 + i,
                  repeat: Infinity,
                  delay: i * 0.5,
                  ease: "linear",
                }}
                style={{
                  left: "50%",
                  transform: "translateX(-50%)",
                }}
              />
            ))}
          </div>
        </div>
      </div>
      
      {/* Add custom animation keyframes */}
      <style jsx>{`
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        
        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
      `}</style>
    </div>
  );
};