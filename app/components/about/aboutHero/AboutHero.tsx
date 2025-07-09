"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const AboutHero: React.FC = () => {
  return (
    <section className="w-full min-h-screen bg-background text-foreground py-20 px-4 overflow-hidden">
      <div className="container mx-auto max-w-7xl">
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Left Side - Text Content */}
          <div className="flex flex-col justify-center space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ 
                duration: 1.2, 
                ease: [0.22, 1, 0.36, 1],
                delay: 0.2
              }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-tight">
                You can always{" "}
                <span className="text-primary">count on</span>
                <br />
                <span className="text-primary">us</span> during your journey
              </h1>
            </motion.div>
            
            <motion.p
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ 
                duration: 1.2, 
                ease: [0.22, 1, 0.36, 1],
                delay: 0.4
              }}
              className="text-lg md:text-xl text-foreground/90 max-w-2xl leading-relaxed"
            >
              We're your trusted technology partner, combining human expertise with cutting-edge AI solutions to transform your business and drive innovation at every step.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 1, 
                ease: [0.22, 1, 0.36, 1],
                delay: 0.6
              }}
              className="flex flex-wrap gap-4"
            >
              <button className="px-8 py-4 bg-primary hover:bg-primary-dark transition-all duration-300 rounded-lg font-semibold text-white shadow-lg hover:shadow-xl transform hover:scale-105">
                Get Started
              </button>
              <button className="px-8 py-4 border-2 border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300 rounded-lg font-semibold">
                Learn More
              </button>
            </motion.div>
          </div>

          {/* Right Side - Images Grid */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4 md:gap-6">
              
              {/* Large Image - Top */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8, y: 100 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ 
                  duration: 1.2, 
                  ease: [0.22, 1, 0.36, 1],
                  delay: 0.8
                }}
                className="col-span-2 relative h-64 md:h-80 rounded-2xl overflow-hidden shadow-2xl"
              >
                <Image
                  src="/aboutpic1.jpeg"
                  alt="Our team - You can count on us"
                  fill
                  className="object-cover hover:scale-110 transition-transform duration-700"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </motion.div>

              {/* Small Image - Bottom Left */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8, x: -100 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                transition={{ 
                  duration: 1.2, 
                  ease: [0.22, 1, 0.36, 1],
                  delay: 1.0
                }}
                className="relative h-48 md:h-64 rounded-2xl overflow-hidden shadow-2xl"
              >
                <Image
                  src="/aboutpic2.jpeg"
                  alt="AI Technology Innovation"
                  fill
                  className="object-cover hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </motion.div>

              {/* Small Image - Bottom Right */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8, x: 100 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                transition={{ 
                  duration: 1.2, 
                  ease: [0.22, 1, 0.36, 1],
                  delay: 1.2
                }}
                className="relative h-48 md:h-64 rounded-2xl overflow-hidden shadow-2xl"
              >
                <Image
                  src="/aboutpic3.jpeg"
                  alt="Technology in Action"
                  fill
                  className="object-cover hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </motion.div>
            </div>

            {/* Decorative Elements */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ 
                duration: 1.5, 
                ease: [0.22, 1, 0.36, 1],
                delay: 1.4
              }}
              className="absolute -top-8 -right-8 w-24 h-24 bg-primary/20 rounded-full blur-xl"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ 
                duration: 1.5, 
                ease: [0.22, 1, 0.36, 1],
                delay: 1.6
              }}
              className="absolute -bottom-8 -left-8 w-32 h-32 bg-primary/10 rounded-full blur-2xl"
            />
          </div>
        </div>

       
      </div>
    </section>
  );
};

export default AboutHero; 