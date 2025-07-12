"use client";
import React from "react";
import { motion } from "framer-motion";

const WhyChooseUs1: React.FC = () => {
  const features = [
    {
      id: "01",
      icon: (
        <svg
          className="w-8 h-8 text-white"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
             iconBg: "bg-gradient-to-br from-primary/80 to-primary hover:from-primary hover:to-primary-dark",
      title: "You Can Trust",
      description: "With over 04 years of experience, our team of travel experts has proven track record you can trust."
    },
    {
      id: "02",
      icon: (
        <svg
          className="w-8 h-8 text-white"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4"
          />
        </svg>
      ),
             iconBg: "bg-gradient-to-br from-primary to-primary-dark hover:from-primary-dark hover:to-primary-darker",
      title: "Tailored for You",
      description: "We believe in the power of personalized travel. Your journey should reflect your unique desires and interests."
    },
    {
      id: "03",
      icon: (
        <svg
          className="w-8 h-8 text-white"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
          />
        </svg>
      ),
             iconBg: "bg-gradient-to-br from-primary-darker to-primary-dark hover:from-primary-dark hover:to-primary",
      title: "Safety and Quality",
      description: "Your well-being is at the heart of everything we do. Our offers include highest safety and quality standards."
    }
  ];

  return (
    <section className="relative w-full py-24 bg-background text-foreground overflow-hidden">
      {/* Enhanced Background System */}
      <div className="absolute inset-0">
        {/* Multi-layer gradient base */}
        <div className="absolute inset-0 bg-gradient-to-br from-background via-primary/8 to-background" />
        <div className="absolute inset-0 bg-gradient-to-tr from-primary-darker/5 via-transparent to-primary/5" />
        
        {/* Static floating gradient orbs */}
        <div className="absolute top-1/5 right-1/5 w-[500px] h-[500px] bg-gradient-conic from-primary/15 via-primary-dark/10 to-primary-darker/5 rounded-full blur-3xl opacity-50" />
        <div className="absolute bottom-1/5 left-1/5 w-[400px] h-[400px] bg-gradient-conic from-primary-dark/12 via-primary/8 to-primary-darker/6 rounded-full blur-3xl opacity-40" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-gradient-radial from-primary/8 to-transparent rounded-full blur-2xl opacity-30" />

        {/* Static grid pattern */}
        <div className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              radial-gradient(circle at 2px 2px, rgba(3, 93, 157, 0.4) 1px, transparent 1px),
              linear-gradient(rgba(3, 93, 157, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(3, 93, 157, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px, 50px 50px, 50px 50px'
          }}
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Enhanced Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true }}
            className="mb-6"
          >
            <span className="relative inline-block px-6 py-3 rounded-full bg-gradient-to-r from-primary/15 to-primary-dark/10 border border-primary/30 text-primary text-sm font-medium tracking-wider uppercase backdrop-blur-sm">
              <span className="relative z-10">Why Choose Us</span>
            </span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground uppercase font-serif mb-6"
          >
            <span className="inline-block relative">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-foreground via-primary to-foreground">
                Why Choose Us
              </span>
              <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-primary/50 to-primary-dark/50 rounded-full opacity-50" />
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
            viewport={{ once: true }}
            className="text-lg md:text-xl text-foreground/80 max-w-2xl mx-auto leading-relaxed"
          >
            Discover what makes us different and why thousands of clients trust us with their most important projects.
          </motion.p>
        </motion.div>

        {/* Enhanced Features Grid */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12"
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ 
                duration: 0.8, 
                ease: [0.22, 1, 0.36, 1], 
                delay: 0.2 * index 
              }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="group relative"
            >
              {/* Enhanced Number Badge */}
              <div className="absolute -top-3 -right-3 z-20">
                <span className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br from-primary/30 to-primary-dark/20 backdrop-blur-sm text-primary text-lg font-bold rounded-full border border-primary/40 shadow-lg shadow-primary/20 hover:scale-110 hover:rotate-12 transition-all duration-300">
                  <span>
                    {feature.id}
                  </span>
                </span>
              </div>

              <div className="relative bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 hover:border-primary/40 transition-all duration-700 hover:shadow-2xl hover:shadow-primary/20 hover:bg-white/10 h-full overflow-hidden">
                {/* Enhanced gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/8 to-primary-dark/8 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                
                {/* Content */}
                <div className="relative z-10 text-center">
                  {/* Enhanced Icon Container */}
                  <div className={`inline-flex items-center justify-center w-24 h-24 ${feature.iconBg} rounded-3xl mb-8 shadow-2xl transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-primary/30 relative overflow-hidden hover:scale-110 hover:rotate-3`}>
                    {/* Icon glow effect */}
                    <div className="absolute inset-0 bg-gradient-radial from-white/20 to-transparent rounded-3xl opacity-60" />
                    <div className="relative z-10">
                      {feature.icon}
                    </div>
                  </div>
                  
                  {/* Enhanced Title */}
                  <motion.h3 
                    className="text-2xl font-bold text-foreground mb-6 group-hover:text-primary transition-colors duration-500"
                    whileHover={{ scale: 1.05 }}
                  >
                    <span className="relative">
                      {feature.title}
                      <motion.div
                        className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-primary/50 to-primary-dark/50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                        layoutId={`underline-${feature.id}`}
                      />
                    </span>
                  </motion.h3>
                  
                  {/* Enhanced Description */}
                  <p className="text-foreground/70 leading-relaxed group-hover:text-foreground/90 transition-colors duration-500 text-base">
                    {feature.description}
                  </p>
                </div>

                {/* Enhanced border glow effect */}
                <motion.div 
                  className="absolute inset-0 rounded-3xl bg-gradient-to-r from-primary/30 via-primary-dark/30 to-primary-darker/30 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-700 -z-10"
                  animate={{
                    scale: [1, 1.05, 1],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />

                {/* Floating particles on hover */}
                {[...Array(3)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-1 h-1 bg-primary/60 rounded-full opacity-0 group-hover:opacity-100"
                    style={{
                      left: `${30 + i * 20}%`,
                      top: `${20 + i * 15}%`,
                    }}
                    animate={{
                      y: [-10, -30, -10],
                      opacity: [0, 1, 0],
                      scale: [1, 1.5, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: i * 0.5
                    }}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs1;
