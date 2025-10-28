"use client";
import React from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

const AboutHeroVariant3: React.FC = () => {
  const router = useRouter();

  const handleContactClick = () => {
    router.push('/contact');
  };

  return (
    <>
    <section className="w-full min-h-screen bg-background text-foreground flex items-center justify-center relative overflow-hidden">
      {/* Simple Static Background */}
      <div className="absolute inset-0">
        {/* Base Gradient Foundation */}
        <div className="absolute inset-0 bg-gradient-to-br from-background via-primary/5 to-background" />
        
        {/* Simple Static Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/3 via-transparent to-primary-dark/3" />

        {/* Simple Static Mesh Gradient Orbs */}
        <div className="absolute -top-20 -left-20 w-[600px] h-[600px] rounded-full"
          style={{
            background: `radial-gradient(circle at 30% 40%, 
              rgba(3, 93, 157, 0.2) 0%, 
              rgba(3, 56, 143, 0.1) 50%, 
              transparent 100%)`,
            filter: 'blur(50px)'
          }}
        />
        
        <div className="absolute -bottom-20 -right-20 w-[700px] h-[700px] rounded-full"
          style={{
            background: `radial-gradient(circle at 70% 60%, 
              rgba(5, 57, 105, 0.15) 0%, 
              rgba(3, 93, 157, 0.1) 50%, 
              transparent 100%)`,
            filter: 'blur(60px)'
          }}
        />

        {/* Simple Static Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.02]"
            style={{
              backgroundImage: `
                radial-gradient(circle at 2px 2px, rgba(3, 93, 157, 0.4) 1px, transparent 1px),
                linear-gradient(rgba(3, 93, 157, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(3, 93, 157, 0.1) 1px, transparent 1px)
              `,
            backgroundSize: '60px 60px, 60px 60px, 60px 60px'
            }} 
          />

        {/* Simple Static Overlay System */}
        <div className="absolute inset-0 bg-gradient-radial from-transparent via-background/20 to-background/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-background/30 via-transparent to-background/20" />
      </div>

      {/* Glassmorphism Container */}
      <div className="container mx-auto max-w-5xl px-4 text-center relative z-10">
        <div className="backdrop-blur-sm bg-gradient-to-b from-background/10 via-background/5 to-background/10 rounded-3xl border border-primary/10 shadow-2xl p-5 md:p-8 lg:p-10">
          {/* Enhanced Brand Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ 
              duration: 1.5, 
              ease: [0.22, 1, 0.36, 1],
              delay: 0.5
            }}
            className="mb-3"
          >
            <div className="h-px bg-gradient-to-r from-transparent via-primary-dark to-transparent mx-auto mb-6 w-24 opacity-80" />
            <p className="text-primary font-semibold text-sm tracking-[0.3em] uppercase relative">
              DevHexa
              <span className="absolute -right-6 top-0 w-2 h-2 bg-gradient-to-br from-primary to-primary-dark rounded-full shadow-lg opacity-80" />
            </p>
          </motion.div>

          {/* Stunning Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 1.6, 
              ease: [0.22, 1, 0.36, 1],
              delay: 0.8
            }}
            className="text-4xl md:text-6xl lg:text-7xl font-light leading-[1.05] tracking-tight relative mb-8"
          >
            <span className="inline-block">
              <span>
                You can always
              </span>
            </span>
            <br />
            <span className="inline-block relative">
              <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary-dark to-primary-darker">
                count on us
              </span>
              <div className="absolute -inset-2 bg-gradient-to-r from-primary/10 to-primary-dark/10 rounded-xl blur-xl -z-10 opacity-60" />
            </span>
            <br />
            <span className="inline-block">
              <span className="font-extralight text-foreground/80">
                during your journey
              </span>
            </span>
            
            {/* Elegant Accent Lines */}
            <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent w-3/5 opacity-80" />
            <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 h-px bg-gradient-to-r from-transparent via-primary-dark/40 to-transparent w-1/3 opacity-60" />
          </motion.h1>

          {/* Elegant Description */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ 
              duration: 1.2, 
              ease: [0.22, 1, 0.36, 1],
              delay: 1.5
            }}
            className="relative mb-12"
          >
            <p className="text-xl md:text-2xl text-foreground/80 max-w-3xl mx-auto font-light leading-relaxed relative">
              Your trusted technology partner for digital transformation.
            </p>
            
            {/* Static Accent Elements */}
            <div className="absolute -left-8 top-1/2 transform -translate-y-1/2 w-3 h-3 bg-gradient-to-br from-primary/60 to-primary-dark/40 rounded-full shadow-lg opacity-60" />
            <div className="absolute -right-8 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-gradient-to-tl from-primary-dark/50 to-primary/60 rounded-full shadow-lg opacity-50" />
          </motion.div>

          {/* Premium CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 1.2, 
              ease: [0.22, 1, 0.36, 1],
              delay: 1.8
            }}
            className="relative"
          >
            <button 
              onClick={handleContactClick}
              className="px-16 py-5 bg-gradient-to-r from-primary/90 to-primary-dark/90 backdrop-blur-sm border border-primary/30 text-white hover:from-primary hover:to-primary-dark transition-all duration-700 rounded-full font-semibold text-lg tracking-wide relative overflow-hidden group shadow-2xl hover:scale-105 hover:shadow-2xl hover:shadow-primary/30"
            >
              <span className="relative z-10 flex items-center space-x-3">
                <span>Let's Connect</span>
                <div className="w-2 h-2 bg-white/80 rounded-full" />
              </span>
              
              {/* Static Shine Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Button Glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary-dark/20 rounded-full blur-xl -z-10 opacity-60" />
            </button>
          </motion.div>

          <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 1.2, 
            ease: [0.22, 1, 0.36, 1],
            delay: 1.8
          }}
          className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
        >
          
          <div className="space-y-2">
            <h3 className="text-3xl md:text-4xl font-bold text-primary">500+</h3>
            <p className="text-foreground/70 text-sm md:text-base">Projects Delivered</p>
          </div>
          <div className="space-y-2">
            <h3 className="text-3xl md:text-4xl font-bold text-primary">98%</h3>
            <p className="text-foreground/70 text-sm md:text-base">Client Satisfaction</p>
          </div>
          <div className="space-y-2">
            <h3 className="text-3xl md:text-4xl font-bold text-primary">24/7</h3>
            <p className="text-foreground/70 text-sm md:text-base">Support Available</p>
          </div>
          <div className="space-y-2">
            <h3 className="text-3xl md:text-4xl font-bold text-primary">10+</h3>
            <p className="text-foreground/70 text-sm md:text-base">Years Experience</p>
          </div>
        </motion.div>
        </div>
      </div>
    </section>
    </>
  );
};

export default AboutHeroVariant3; 