'use client';

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Typed from 'typed.js';

const HeroSection2 = () => {
  const typedRef = useRef<HTMLSpanElement>(null);
  const [activeFeature, setActiveFeature] = useState(0);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const features = [
    "Innovative Solutions",
    "Cutting-edge Technology",
    "User-Centric Design",
    "Scalable Architecture"
  ];

  useEffect(() => {
    let typed: Typed | null = null;
    
    // Initialize Typed.js only if the ref is available
    if (typedRef.current) {
      try {
        typed = new Typed(typedRef.current, {
          strings: [
            'Web Development',
            'Mobile Apps',
            'Cloud Solutions',
            'AI Integration',
            'Custom Software',
          ],
          typeSpeed: 50,
          backSpeed: 30,
          backDelay: 1500,
          loop: true,
          showCursor: false,
        });
      } catch (error) {
        console.error('Error initializing Typed.js:', error);
      }
    }

    // Feature rotation
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % features.length);
    }, 3000);

    return () => {
      if (typed) {
        typed.destroy();
      }
      clearInterval(interval);
    };
  }, [features.length]);

  return (
    <section className="relative min-h-screen overflow-hidden bg-[#101D26]">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute w-[800px] h-[800px] bg-[#035D9D]/10 rounded-full blur-3xl -top-64 -right-64"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
        <motion.div
          className="absolute w-[600px] h-[600px] bg-[#03388F]/10 rounded-full blur-3xl -bottom-48 -left-48"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.4, 0.3],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-between px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
            className="mb-8"
          >
            <span className="text-[#035D9D] font-semibold text-lg sm:text-xl">
              Welcome to the Future of Digital Innovation
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6"
          >
            Crafting
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#035D9D] to-[#03388F]">
              Digital Masterpieces
            </span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.6 }}
            className="relative h-12 mb-8"
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-2xl sm:text-3xl text-white">
                {features[activeFeature]}
              </span>
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.8 }}
            className="text-lg sm:text-xl text-gray-300 mb-12 max-w-2xl mx-auto"
          >
            We transform complex challenges into elegant solutions, delivering exceptional digital experiences that drive business growth and user satisfaction.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 1 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(3, 93, 157, 0.4)" }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-[#035D9D] to-[#03388F] text-white rounded-full font-medium text-lg transition-all"
            >
              Explore Our Work
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05, backgroundColor: "rgba(3, 93, 157, 0.1)" }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 border-2 border-[#035D9D] text-white rounded-full font-medium text-lg"
            >
              Schedule a Call
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Floating Features
        <motion.div
          style={{ y }}
          className="flex justify-center gap-8 mb-8 mt-16"
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 1.2 + index * 0.1 }}
              className={`text-center ${
                activeFeature === index ? 'scale-110' : 'scale-100'
              } transition-transform duration-300`}
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-[#035D9D]/20 to-[#03388F]/20 flex items-center justify-center backdrop-blur-sm">
                <span className="text-2xl text-white">{index + 1}</span>
              </div>
              <span className="text-sm text-gray-400">{feature}</span>
            </motion.div>
          ))}
        </motion.div> */}

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{
              y: [0, 10, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            className="flex flex-col items-center"
          >
            <span className="text-gray-400 text-sm mb-2">Discover More</span>
            <div className="w-6 h-10 border-2 border-gray-400 rounded-full p-1">
              <motion.div
                animate={{
                  y: [0, 12, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
                className="w-2 h-2 bg-gray-400 rounded-full"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection2; 