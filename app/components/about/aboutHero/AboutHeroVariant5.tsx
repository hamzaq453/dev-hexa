"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const AboutHeroVariant5: React.FC = () => {
  return (
    <section className="w-full min-h-screen bg-background text-foreground flex flex-col items-center justify-center relative overflow-hidden py-10 px-4">
      {/* Clean Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-primary/3 to-background" />
        
        {/* Subtle Background Elements */}
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-br from-primary/15 to-primary-dark/8 rounded-full blur-3xl"
        />
        
        <motion.div
          animate={{
            scale: [1.1, 1, 1.1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3
          }}
          className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-tl from-primary/12 to-primary-darker/6 rounded-full blur-3xl"
        />
      </div>

      {/* Main Content */}
      <div className="container mx-auto max-w-7xl relative z-10 flex flex-col items-center">
        
        {/* Top Text Section */}
        <div className="text-center mb-16 lg:mb-16">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 1.2, 
              ease: [0.22, 1, 0.36, 1],
              delay: 0.3
            }}
            className="text-4xl md:text-5xl lg:text-5xl font-light leading-tight text-center max-w-6xl"
          >
            You can always{" "}
            <span className="font-semibold text-primary">count on</span>
            <br />
            <span className="font-semibold text-primary">us</span> during your journey
          </motion.h1>
        </div>

        {/* Images Grid Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 1.2, 
            ease: [0.22, 1, 0.36, 1],
            delay: 0.6
          }}
          className="w-full max-w-5xl"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
            
            {/* Large Image - Left Side */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ 
                duration: 1, 
                ease: [0.22, 1, 0.36, 1],
                delay: 0.8
              }}
              className="relative"
            >
              <div className="relative w-full h-80 md:h-96 lg:h-[500px] rounded-2xl overflow-hidden">
                <Image
                  src="/aboutpic1.jpeg"
                  alt="DevHexa Team"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </motion.div>

            {/* Two Smaller Images - Right Side */}
            <div className="flex flex-col gap-6 lg:gap-8">
              
              {/* Top Right Image */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ 
                  duration: 1, 
                  ease: [0.22, 1, 0.36, 1],
                  delay: 1.0
                }}
                className="relative"
              >
                <div className="relative w-full h-36 md:h-44 lg:h-56 rounded-2xl overflow-hidden">
                  <Image
                    src="/aboutpic2.jpeg"
                    alt="AI Technology Innovation"
                    fill
                    className="object-cover"
                  />
                </div>
              </motion.div>

              {/* Bottom Right Image */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ 
                  duration: 1, 
                  ease: [0.22, 1, 0.36, 1],
                  delay: 1.2
                }}
                className="relative"
              >
                <div className="relative w-full h-36 md:h-44 lg:h-56 rounded-2xl overflow-hidden">
                  <Image
                    src="/aboutpic3.jpeg"
                    alt="Technology in Action"
                    fill
                    className="object-cover"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Optional Simple Brand Line */}
        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 1, 
            ease: [0.22, 1, 0.36, 1],
            delay: 1.4
          }}
          className="mt-16 text-center"
        >
          <div className="w-16 h-0.5 bg-primary mx-auto mb-4" />
          <p className="text-primary font-medium text-sm tracking-wider uppercase">
            DevHexa
          </p>
        </motion.div> */}
      </div>
    </section>
  );
};

export default AboutHeroVariant5; 