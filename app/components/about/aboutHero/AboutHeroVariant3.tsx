"use client";
import React from "react";
import { motion } from "framer-motion";

const AboutHeroVariant3: React.FC = () => {
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
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 1.8, 
            ease: [0.22, 1, 0.36, 1],
            delay: 0.3
          }}
          className="backdrop-blur-sm bg-gradient-to-b from-background/10 via-background/5 to-background/10 rounded-3xl border border-primary/10 shadow-2xl p-12 md:p-16 lg:p-20"
        >
          {/* Enhanced Brand Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ 
              duration: 1.5, 
              ease: [0.22, 1, 0.36, 1],
              delay: 0.5
            }}
            className="mb-12"
          >
            <motion.div 
              animate={{
                width: [80, 120, 80],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="h-px bg-gradient-to-r from-transparent via-primary-dark to-transparent mx-auto mb-6"
            />
            <motion.p 
              className="text-primary font-semibold text-sm tracking-[0.3em] uppercase relative"
              animate={{
                textShadow: [
                  "0 0 10px rgba(3, 93, 157, 0.3)",
                  "0 0 20px rgba(3, 93, 157, 0.6)",
                  "0 0 10px rgba(3, 93, 157, 0.3)"
                ]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              DevHexa
              <motion.span
                animate={{
                  opacity: [0, 1, 0],
                  scale: [0.8, 1.2, 0.8],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute -right-6 top-0 w-2 h-2 bg-gradient-to-br from-primary to-primary-dark rounded-full shadow-lg"
              />
            </motion.p>
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
            className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-light leading-[1.05] tracking-tight relative mb-8"
          >
            <span className="inline-block">
              <motion.span
                animate={{
                  textShadow: [
                    "0 0 20px rgba(237, 237, 237, 0.1)",
                    "0 0 40px rgba(237, 237, 237, 0.2)",
                    "0 0 20px rgba(237, 237, 237, 0.1)"
                  ]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                You can always
              </motion.span>
            </span>
            <br />
            <span className="inline-block relative">
              <motion.span
                className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary-dark to-primary-darker"
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                style={{
                  backgroundSize: "200% 200%",
                }}
              >
                count on us
              </motion.span>
              <motion.div
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.3, 0.8, 0.3],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute -inset-2 bg-gradient-to-r from-primary/10 to-primary-dark/10 rounded-xl blur-xl -z-10"
              />
            </span>
            <br />
            <span className="inline-block">
              <motion.span
                className="font-extralight text-foreground/80"
                animate={{
                  opacity: [0.8, 1, 0.8],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
              >
                during your journey
              </motion.span>
            </span>
            
            {/* Elegant Accent Lines */}
            <motion.div
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: "60%", opacity: 1 }}
              transition={{ 
                duration: 2.5, 
                ease: [0.22, 1, 0.36, 1],
                delay: 2
              }}
              className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent"
            />
            <motion.div
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: "30%", opacity: 0.6 }}
              transition={{ 
                duration: 2, 
                ease: [0.22, 1, 0.36, 1],
                delay: 2.5
              }}
              className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 h-px bg-gradient-to-r from-transparent via-primary-dark/40 to-transparent"
            />
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
            <motion.p
              className="text-xl md:text-2xl text-foreground/80 max-w-3xl mx-auto font-light leading-relaxed relative"
              animate={{
                textShadow: [
                  "0 0 10px rgba(237, 237, 237, 0.1)",
                  "0 0 20px rgba(237, 237, 237, 0.2)",
                  "0 0 10px rgba(237, 237, 237, 0.1)"
                ]
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              Your trusted technology partner for digital transformation.
            </motion.p>
            
            {/* Floating Accent Elements */}
            <motion.div
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.4, 0.8, 0.4],
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute -left-8 top-1/2 transform -translate-y-1/2 w-3 h-3 bg-gradient-to-br from-primary/60 to-primary-dark/40 rounded-full shadow-lg"
            />
            <motion.div
              animate={{
                scale: [1.2, 1, 1.2],
                opacity: [0.3, 0.7, 0.3],
                rotate: [360, 180, 0],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 2
              }}
              className="absolute -right-8 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-gradient-to-tl from-primary-dark/50 to-primary/60 rounded-full shadow-lg"
            />
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
            <motion.button
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 20px 60px rgba(3, 93, 157, 0.4), 0 0 40px rgba(3, 93, 157, 0.3)"
              }}
              whileTap={{ scale: 0.95 }}
              className="px-16 py-5 bg-gradient-to-r from-primary/90 to-primary-dark/90 backdrop-blur-sm border border-primary/30 text-white hover:from-primary hover:to-primary-dark transition-all duration-700 rounded-full font-semibold text-lg tracking-wide relative overflow-hidden group shadow-2xl"
            >
              <span className="relative z-10 flex items-center space-x-3">
                <span>Let's Connect</span>
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="w-2 h-2 bg-white/80 rounded-full"
                />
              </span>
              
              {/* Animated Shine Effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                animate={{
                  x: ["-100%", "100%"],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear",
                  repeatDelay: 2
                }}
              />
              
              {/* Button Glow */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary-dark/20 rounded-full blur-xl -z-10"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 0.8, 0.5],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </motion.button>
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
        </motion.div>

        {/* Aesthetic Bottom Indicator */}
        {/* <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ 
            duration: 1.2, 
            ease: [0.22, 1, 0.36, 1],
            delay: 2.5
          }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="flex flex-col items-center space-y-4">
            <motion.div 
              animate={{
                height: [60, 80, 60],
                opacity: [0.4, 0.8, 0.4],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="w-px bg-gradient-to-b from-primary/40 via-primary-dark/60 to-transparent"
            />
            <motion.div
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.6, 1, 0.6],
                boxShadow: [
                  "0 0 10px rgba(3, 93, 157, 0.3)",
                  "0 0 20px rgba(3, 93, 157, 0.6)",
                  "0 0 10px rgba(3, 93, 157, 0.3)"
                ]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="w-3 h-3 bg-gradient-to-br from-primary to-primary-dark rounded-full shadow-xl"
            />
          </div>
        </motion.div> */}
      </div>
    </section>

     {/* Bottom Statistics/Trust Indicators */}
     

    </>
  );
};

export default AboutHeroVariant3; 