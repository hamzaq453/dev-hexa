"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const AboutHeroVariant2: React.FC = () => {
  return (
    <section className="w-full min-h-screen bg-background text-foreground relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-primary/3 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto max-w-6xl px-4 py-20 relative z-10">
        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center min-h-[80vh]">
          
          {/* Left Side - Main Content */}
          <div className="lg:col-span-8 flex flex-col justify-center space-y-12">
            
            {/* Main Heading */}
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 1.4, 
                ease: [0.22, 1, 0.36, 1],
                delay: 0.2
              }}
              className="space-y-6"
            >
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-1 bg-primary" />
                <span className="text-primary font-semibold text-lg tracking-wider uppercase">
                  About DevHexa
                </span>
              </div>
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black leading-[0.9] tracking-tight">
                You can always
                <br />
                <span className="text-primary">count on us</span>
                <br />
                during your
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-dark">
                  journey
                </span>
              </h1>
            </motion.div>

            {/* Description */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 1.2, 
                ease: [0.22, 1, 0.36, 1],
                delay: 0.6
              }}
              className="space-y-6"
            >
              <p className="text-xl md:text-2xl text-foreground/80 max-w-3xl leading-relaxed font-light">
                We're more than just a technology company. We're your dedicated partners in digital transformation, 
                committed to turning your vision into reality through innovative solutions and unwavering support.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 pt-8">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-10 py-5 bg-primary hover:bg-primary-dark transition-all duration-300 rounded-full font-bold text-white text-lg shadow-2xl hover:shadow-primary/25"
                >
                  Start Your Journey
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-10 py-5 border-2 border-primary/50 text-primary hover:border-primary hover:bg-primary/10 transition-all duration-300 rounded-full font-bold text-lg"
                >
                  Our Story
                </motion.button>
              </div>
            </motion.div>
          </div>

          {/* Right Side - Single Featured Image */}
          <div className="lg:col-span-4 flex justify-center lg:justify-end">
            <motion.div
              initial={{ opacity: 0, scale: 0.8, x: 100 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ 
                duration: 1.5, 
                ease: [0.22, 1, 0.36, 1],
                delay: 0.8
              }}
              className="relative"
            >
              <div className="relative w-80 h-96 md:w-96 md:h-[500px] rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/aboutpic1.jpeg"
                  alt="DevHexa Team - Your trusted partners"
                  fill
                  className="object-cover hover:scale-110 transition-transform duration-700"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent" />
              </div>
              
              {/* Floating Card */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 1, 
                  ease: [0.22, 1, 0.36, 1],
                  delay: 1.2
                }}
                className="absolute -bottom-8 -left-8 bg-background/95 backdrop-blur-xl border border-primary/20 rounded-2xl p-6 shadow-2xl"
              >
                <div className="flex items-center space-x-4">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />
                  <div>
                    <p className="text-foreground font-semibold text-lg">Always Available</p>
                    <p className="text-foreground/70 text-sm">24/7 Support & Guidance</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Section - Core Values */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 1.2, 
            ease: [0.22, 1, 0.36, 1],
            delay: 1.4
          }}
          className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          <div className="text-center space-y-4 p-8 rounded-2xl bg-gradient-to-b from-primary/5 to-transparent border border-primary/10">
            <div className="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <div className="w-8 h-8 bg-primary rounded-lg" />
            </div>
            <h3 className="text-2xl font-bold text-foreground">Reliability</h3>
            <p className="text-foreground/70 leading-relaxed">
              Consistent, dependable solutions you can trust for your most critical business needs.
            </p>
          </div>

          <div className="text-center space-y-4 p-8 rounded-2xl bg-gradient-to-b from-primary/5 to-transparent border border-primary/10">
            <div className="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <div className="w-8 h-8 bg-primary rounded-lg" />
            </div>
            <h3 className="text-2xl font-bold text-foreground">Innovation</h3>
            <p className="text-foreground/70 leading-relaxed">
              Cutting-edge technology and creative solutions that keep you ahead of the curve.
            </p>
          </div>

          <div className="text-center space-y-4 p-8 rounded-2xl bg-gradient-to-b from-primary/5 to-transparent border border-primary/10">
            <div className="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <div className="w-8 h-8 bg-primary rounded-lg" />
            </div>
            <h3 className="text-2xl font-bold text-foreground">Partnership</h3>
            <p className="text-foreground/70 leading-relaxed">
              True collaboration and commitment to your success throughout your entire journey.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutHeroVariant2; 