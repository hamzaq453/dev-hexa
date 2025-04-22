'use client';

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Typed from 'typed.js';
import { ChevronDownIcon } from '@heroicons/react/24/outline';

const HeroSection = () => {
  const typedRef = useRef(null);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    const typed = new Typed(typedRef.current, {
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
    });

    return () => typed.destroy();
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-[#101D26] to-[#053969]">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-[500px] h-[500px] bg-[#035D9D]/20 rounded-full blur-3xl -top-48 -right-48 animate-pulse"></div>
        <div className="absolute w-[400px] h-[400px] bg-[#03388F]/20 rounded-full blur-3xl -bottom-32 -left-32 animate-pulse delay-1000"></div>
      </div>

      {/* Main content */}
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
      >
        <div className="text-center">
          <motion.h2
            variants={itemVariants}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6"
          >
            Transforming Ideas into
            <span className="bg-gradient-to-r from-[#035D9D] to-[#03388F] text-transparent bg-clip-text">
              {' '}Digital Reality
            </span>
          </motion.h2>

          <motion.h1
            variants={itemVariants}
            className="text-2xl sm:text-3xl md:text-4xl text-white mb-8"
          >
            Specialized in{' '}
            <span ref={typedRef} className="text-[#035D9D] font-semibold"></span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-lg sm:text-xl text-gray-300 mb-12 max-w-2xl mx-auto"
          >
            We craft innovative digital solutions that help businesses thrive in the modern world.
            Our expertise spans across various technologies to deliver exceptional results.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-gradient-to-r from-[#035D9D] to-[#03388F] text-white rounded-full font-medium text-lg hover:shadow-lg hover:shadow-[#035D9D]/20 transition-shadow"
            >
              Get Started
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 border-2 border-[#035D9D] text-white rounded-full font-medium text-lg hover:bg-[#035D9D]/10 transition-colors"
            >
              Learn More
            </motion.button>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.5 }}
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
          className="cursor-pointer"
        >
          <ChevronDownIcon className="h-8 w-8 text-white opacity-50 hover:opacity-100 transition-opacity" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection; 