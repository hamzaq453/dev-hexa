"use client";
import React from "react";
import CountUp from "./CountUp";
import { motion } from "framer-motion";

const stats = [
  { label: "Projects", value: 57 },
  { label: "Happy Clients", value: 15 },
  { label: "Awards", value: 2 },
  { label: "Years of Experience", value: 3 },
];

const AboutVariant2: React.FC = () => {
  return (
    <section className="w-full py-28 bg-black text-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row md:items-start gap-10 md:gap-0">
          {/* Left: Exciting Heading */}
          <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left mb-4 md:mb-0">
            <motion.h2 
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ 
                duration: 1.2, 
                ease: [0.22, 1, 0.36, 1],
                x: { type: "spring", stiffness: 50, damping: 20 }
              }}
              className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-2 whitespace-pre-line"
            >
              Empowering Innovation
with <span className="text-primary">DevHexa</span>
            </motion.h2>
          </div>
          {/* Right: Evren AI About Paragraph */}
          <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left">
            <motion.div 
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ 
                duration: 1.2, 
                ease: [0.22, 1, 0.36, 1],
                x: { type: "spring", stiffness: 50, damping: 20 }
              }}
              className="max-w-xl text-white/90 text-base md:text-lg"
            >
              <p>
                DevHexa is dedicated to transforming businesses through cutting-edge artificial intelligence solutions. Our team of experts leverages the latest advancements in AI to deliver tailored strategies, drive operational efficiency, and unlock new opportunities for growth. We believe in innovation, collaboration, and measurable results—empowering our clients to lead in a rapidly evolving digital world.
              </p>
            </motion.div>
          </div>
        </div>
        {/* Bottom: Stats Row */}
        <div className="mt-12 flex flex-col md:flex-row items-center justify-center md:justify-between gap-8 md:gap-0">
          {stats.map((stat, i) => (
            <React.Fragment key={stat.label}>
              {i !== 0 && (
                <div className="hidden md:block h-16 border-l border-white/20 mx-8" />
              )}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ 
                  duration: 1,
                  delay: 0.4 + (i * 0.2),
                  ease: [0.22, 1, 0.36, 1]
                }}
                className="flex flex-col items-center min-w-[120px]"
              >
                <span className="text-5xl font-extrabold text-white mb-2">
                  <CountUp end={stat.value} />
                </span>
                <span className="text-lg text-white/80 text-center font-medium">
                  {stat.label}
                </span>
              </motion.div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutVariant2; 