"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const AboutHeroVariant4: React.FC = () => {
  return (
    <section className="w-full min-h-screen bg-background text-foreground flex items-center justify-center relative overflow-hidden">
      {/* Dramatically Enhanced Attractive Background */}
      <div className="absolute inset-0">
        {/* Base Gradient Foundation */}
        <div className="absolute inset-0 bg-gradient-to-br from-background via-primary/8 to-background" />
        
        {/* Dramatic Gradient Orbs */}
        <motion.div
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.7, 1, 0.7],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-10 left-10 w-[600px] h-[600px] bg-gradient-to-br from-primary/60 to-primary-dark/45 rounded-full blur-3xl"
        />
        
        <motion.div
          animate={{
            scale: [1.3, 1, 1.3],
            opacity: [0.6, 0.9, 0.6],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
          className="absolute bottom-10 right-10 w-[700px] h-[700px] bg-gradient-to-tl from-primary/55 to-primary-darker/40 rounded-full blur-3xl"
        />

        <motion.div
          animate={{
            scale: [1, 1.6, 1],
            opacity: [0.4, 0.8, 0.4],
            x: [-80, 80, -80],
            y: [50, -50, 50],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 4
          }}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-conic from-primary/25 via-primary-dark/15 to-primary-darker/10 rounded-full blur-3xl"
        />

        {/* Visible Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.08]">
          <motion.div 
            animate={{
              backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
            className="w-full h-full" 
            style={{
              backgroundImage: `
                radial-gradient(circle at 2px 2px, rgba(3, 93, 157, 0.6) 2px, transparent 2px),
                linear-gradient(rgba(3, 93, 157, 0.2) 1px, transparent 1px),
                linear-gradient(90deg, rgba(3, 93, 157, 0.2) 1px, transparent 1px)
              `,
              backgroundSize: '40px 40px, 40px 40px, 40px 40px'
            }} 
          />
        </div>

        {/* Enhanced Floating Elements */}
        <motion.div
          animate={{
            y: [-40, 40, -40],
            x: [-20, 20, -20],
            opacity: [0.6, 1, 0.6],
            rotate: [0, 360],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/4 left-1/5 w-6 h-6 bg-primary/50 rounded-full shadow-lg"
          style={{
            boxShadow: '0 0 20px rgba(3, 93, 157, 0.5)'
          }}
        />

        <motion.div
          animate={{
            y: [50, -50, 50],
            x: [30, -30, 30],
            opacity: [0.5, 0.9, 0.5],
            scale: [1, 1.4, 1],
            rotate: [0, -360],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
          className="absolute bottom-1/4 right-1/4 w-4 h-4 bg-primary/40 rounded-full shadow-lg"
          style={{
            boxShadow: '0 0 15px rgba(3, 93, 157, 0.4)'
          }}
        />

        <motion.div
          animate={{
            rotate: [0, 180, 360],
            scale: [1, 1.3, 1],
            opacity: [0.4, 0.8, 0.4],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3
          }}
          className="absolute top-3/4 left-1/3 w-3 h-12 bg-gradient-to-t from-primary/30 to-transparent rounded-full shadow-lg"
        />

        {/* Enhanced Particle Trail */}
        {Array.from({ length: 10 }).map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -150, 0],
              x: [0, Math.sin(i) * 60, 0],
              opacity: [0, 0.8, 0],
              scale: [0, 1.5, 0],
            }}
            transition={{
              duration: 6 + i * 1,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.8,
            }}
            className="absolute w-2 h-2 bg-primary/60 rounded-full shadow-lg"
            style={{
              left: `${20 + i * 6}%`,
              top: `${70 + (i * 2) % 15}%`,
              boxShadow: `0 0 ${6 + i}px rgba(3, 93, 157, 0.6)`
            }}
          />
        ))}

        {/* Dramatic Light Rays */}
        <motion.div
          animate={{
            opacity: [0, 0.6, 0],
            scaleY: [0.3, 1, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            repeatDelay: 6
          }}
          className="absolute top-0 left-1/4 w-1 h-full bg-gradient-to-b from-transparent via-primary/30 to-transparent shadow-lg"
        />

        <motion.div
          animate={{
            opacity: [0, 0.5, 0],
            scaleY: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            repeatDelay: 8,
            delay: 3
          }}
          className="absolute top-0 right-1/3 w-1 h-full bg-gradient-to-b from-transparent via-primary/25 to-transparent shadow-lg"
        />

        {/* Floating Geometric Shapes */}
        <motion.div
          animate={{
            rotate: [0, 360],
            scale: [1, 1.2, 1],
            x: [-30, 30, -30],
            y: [40, -40, 40],
          }}
          transition={{
            duration: 16,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/6 right-1/5 w-8 h-8 border-2 border-primary/40 rounded-lg backdrop-blur-sm"
          style={{
            background: 'linear-gradient(45deg, rgba(3, 93, 157, 0.2) 0%, rgba(5, 57, 105, 0.1) 100%)',
            boxShadow: '0 0 20px rgba(3, 93, 157, 0.3)'
          }}
        />

        <motion.div
          animate={{
            rotate: [360, 0],
            scale: [1.1, 1, 1.1],
            x: [35, -35, 35],
            y: [-45, 45, -45],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
          className="absolute bottom-1/6 left-1/8 w-6 h-6 rounded-full backdrop-blur-lg border border-primary/50"
          style={{
            background: 'radial-gradient(circle, rgba(3, 93, 157, 0.3) 0%, rgba(6, 28, 72, 0.2) 100%)',
            boxShadow: '0 0 15px rgba(3, 93, 157, 0.4)'
          }}
        />

        {/* Enhanced Overlay System */}
        <div className="absolute inset-0 bg-gradient-radial from-transparent via-background/20 to-background/40" />
        <motion.div
          animate={{
            opacity: [0.05, 0.15, 0.05],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute inset-0 bg-gradient-to-t from-background/25 via-transparent to-background/15"
        />
      </div>

      {/* Main Content Container */}
      <div className="container mx-auto max-w-6xl px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-[80vh]">
          
          {/* Left Side - Minimal Text Content */}
          <div className="flex flex-col justify-center space-y-8 text-center lg:text-left">
            
            {/* Simple Brand Line */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 1, 
                ease: [0.22, 1, 0.36, 1],
                delay: 0.2
              }}
              className="mb-4"
            >
              <div className="w-12 h-0.5 bg-primary mx-auto lg:mx-0 mb-4" />
              <p className="text-primary font-medium text-sm tracking-wider uppercase">
                DevHexa
              </p>
            </motion.div>

            {/* Clean Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 1.2, 
                ease: [0.22, 1, 0.36, 1],
                delay: 0.4
              }}
              className="text-4xl md:text-5xl lg:text-6xl font-light leading-tight"
            >
              You can always{" "}
              <span className="font-semibold text-primary">count on us</span>
            </motion.h1>

            {/* Minimal Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 1, 
                ease: [0.22, 1, 0.36, 1],
                delay: 0.6
              }}
              className="text-lg text-foreground/80 max-w-lg mx-auto lg:mx-0 leading-relaxed"
            >
              Your trusted partner in digital transformation.
            </motion.p>

            {/* Simple CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 1, 
                ease: [0.22, 1, 0.36, 1],
                delay: 0.8
              }}
              className="pt-4"
            >
              <button className="px-8 py-3 bg-primary hover:bg-primary-dark transition-all duration-300 rounded-lg font-medium text-white shadow-lg hover:shadow-xl">
                Get Started
              </button>
            </motion.div>
          </div>

          {/* Right Side - Simple Clean Image */}
          <div className="flex justify-center lg:justify-center">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ 
                duration: 1.2, 
                ease: [0.22, 1, 0.36, 1],
                delay: 0.6
              }}
            >
              <Image
                src="/aboutpic2.jpeg"
                alt="DevHexa Team - You can count on us"
                height={500}
                width={600}
                className="rounded-lg"
                priority
              />
            </motion.div>
          </div>
        </div>

        {/* Bottom Stats - Minimal */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 1, 
            ease: [0.22, 1, 0.36, 1],
            delay: 1.2
          }}
          className="mt-16 flex flex-col md:flex-row items-center justify-center gap-8 text-center"
        >
          <div className="space-y-1">
            <h3 className="text-2xl font-semibold text-primary">500+</h3>
            <p className="text-foreground/70 text-sm">Projects</p>
          </div>
          <div className="hidden md:block w-px h-12 bg-primary/20" />
          <div className="space-y-1">
            <h3 className="text-2xl font-semibold text-primary">98%</h3>
            <p className="text-foreground/70 text-sm">Satisfaction</p>
          </div>
          <div className="hidden md:block w-px h-12 bg-primary/20" />
          <div className="space-y-1">
            <h3 className="text-2xl font-semibold text-primary">10+</h3>
            <p className="text-foreground/70 text-sm">Years</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutHeroVariant4; 