"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { FiMenu } from "react-icons/fi";
import { IoClose } from "react-icons/io5";
import { FaChevronRight } from "react-icons/fa";

const NavbarVariant1 = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [isDesktop, setIsDesktop] = useState(true);
  const [isHovering, setIsHovering] = useState(false);
  const email = "contact@devhexa.com";

  useEffect(() => {
    setIsMounted(true);
    const checkDesktop = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };
    
    checkDesktop();
    window.addEventListener("resize", checkDesktop);
    
    return () => window.removeEventListener("resize", checkDesktop);
  }, []);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  // Navigation links
  const navItems = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "What we do", path: "/services" },
    { name: "Our Work", path: "/work" },
    { name: "Pricing", path: "/pricing" },
    { name: "Our Portfolio", path: "/portfolio" },
    { name: "Contact Us", path: "/contact" },
  ];

  // Services list
  const serviceItems = [
    "Website Design & Development",
    "Branding & Graphic Design",
    "Digital Marketing Services",
    "Creative Content Building",
    "Cloud Computing Services",
    "ERP for Businesses",
    "Motion Graphics",
    "Mobile Application Development",
  ];

  // Glass morphism slide-in animation
  const glassMenuVariants = {
    hidden: { x: "-100%", opacity: 0 },
    visible: { 
      x: 0, 
      opacity: 1, 
      transition: { 
        type: "spring", 
        stiffness: 40,
        damping: 20,
        duration: 0.8
      }
    },
    exit: { 
      x: "-100%", 
      opacity: 0,
      transition: { 
        type: "tween",
        ease: "easeInOut",
        duration: 0.6
      }
    }
  };

  const servicesPanelVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        delayChildren: 0.1,
        staggerChildren: 0.05
      }
    },
    exit: { 
      opacity: 0,
      y: 20,
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1
      }
    }
  };

  const serviceItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -20 }
  };

  // Mobile menu animation
  const mobileVariants = {
    hidden: { y: "-100%" },
    visible: { y: 0, transition: { type: "spring", stiffness: 50, damping: 15 } },
    exit: { y: "-100%", transition: { duration: 0.5, ease: "easeInOut" } },
  };

  return (
    <>
      {/* Large screen side navbar - dark gradient theme */}
      <div className="hidden lg:flex flex-col fixed left-0 top-0 h-screen w-[70px] bg-gradient-to-b from-black to-gray-900 text-white z-40 items-center py-4 shadow-xl">
        {/* Logo */}
        <div className="flex-none w-10 h-10 relative mt-3 mb-10">
          <Link href="/">
            <Image 
              src="/Logo.png"
              alt="DevHexa Logo" 
              fill
              className="object-contain hover:scale-110 transition-transform duration-300"
              priority
            />
          </Link>
        </div>

        {/* Menu toggle button */}
        <button 
          onClick={toggleNavbar}
          className="mt-6 mb-10 flex flex-col items-center justify-center gap-1.5 group"
          aria-label="Toggle Navigation"
        >
          <div className="w-6 h-0.5 bg-white group-hover:bg-blue-500 transition-colors duration-300"></div>
          <div className="w-6 h-0.5 bg-white group-hover:bg-blue-500 transition-colors duration-300"></div>
          <div className="w-6 h-0.5 bg-white group-hover:bg-blue-500 transition-colors duration-300"></div>
          <span className="text-xs mt-1 opacity-70 group-hover:opacity-100">MENU</span>
        </button>

        {/* Spacer */}
        <div className="flex-grow"></div>

        {/* Email at bottom */}
        <div className="flex-none mb-4">
          <a
            href={`mailto:${email}`}
            className="email-vertical text-sm text-gray-400 hover:text-white transition-colors duration-300 block"
          >
            {email}
          </a>
        </div>
      </div>

      {/* Small screen navbar */}
      <div className="lg:hidden fixed top-0 left-0 right-0 h-16 bg-black/90 backdrop-blur-sm text-white z-40 flex items-center justify-between px-4">
        {/* Logo in center */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-10 h-10">
          <Link href="/">
            <Image 
              src="/Logo1.png"
              alt="DevHexa Logo" 
              fill
              className="object-contain"
              priority
            />
          </Link>
        </div>
          
        {/* Toggle button with animated hover */}
        <button 
          onClick={toggleNavbar} 
          className="flex items-center justify-center w-10 h-10 focus:outline-none ml-auto rounded-full hover:bg-white/10 transition-colors"
          aria-label="Toggle Navigation"
        >
          {isOpen ? <IoClose size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

      {/* Glass morphism menu for large screens */}
      <AnimatePresence>
        {isOpen && isMounted && isDesktop && (
          <motion.div 
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={glassMenuVariants}
            className="fixed top-0 left-[70px] h-screen w-[calc(100%-70px)] z-35 flex overflow-hidden"
          >
            {/* Main menu panel - glass effect */}
            <div className="w-1/2 h-full bg-black/70 backdrop-blur-md text-white p-20 flex flex-col justify-center">
              <h2 className="text-4xl font-bold mb-12 text-blue-500">Navigation</h2>
              <nav className="space-y-8">
                {navItems.map((item) => (
                  <div
                    key={item.name}
                    className="group flex items-center overflow-hidden"
                  >
                    <div className="w-0 h-0.5 bg-blue-500 mr-0 group-hover:w-6 group-hover:mr-4 transition-all duration-300"></div>
                    <Link 
                      href={item.path}
                      className="text-2xl font-medium hover:text-blue-400 transition-colors"
                      onClick={toggleNavbar}
                    >
                      {item.name}
                    </Link>
                  </div>
                ))}
              </nav>
            </div>

            {/* Services panel */}
            <div className="w-1/2 h-full bg-gradient-to-br from-blue-900/40 to-black/60 backdrop-blur-md p-20 flex flex-col justify-center">
              <motion.div
                variants={servicesPanelVariants}
                className="space-y-6"
              >
                <h2 className="text-4xl font-bold mb-12 text-white">Our Services</h2>
                {serviceItems.map((service) => (
                  <motion.div
                    key={service}
                    variants={serviceItemVariants}
                    className="flex items-center group cursor-pointer"
                  >
                    <FaChevronRight className="mr-4 text-blue-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span className="text-xl font-normal text-white group-hover:text-blue-400 transition-colors">
                      {service}
                    </span>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* Close button */}
            <button 
              onClick={toggleNavbar}
              className="absolute top-8 right-8 w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center hover:bg-blue-700 transition-colors"
              aria-label="Close Navigation"
            >
              <IoClose size={24} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Full screen menu for mobile screens */}
      <AnimatePresence>
        {isOpen && isMounted && !isDesktop && (
          <motion.div 
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={mobileVariants}
            className="fixed inset-0 bg-gradient-to-b from-black to-gray-900 text-white z-30 flex flex-col pt-20 pb-10 px-6 overflow-y-auto"
          >
            <nav className="flex flex-col space-y-6 mb-10">
              {navItems.map((item) => (
                <Link 
                  key={item.name}
                  href={item.path}
                  className="text-2xl font-bold border-b border-gray-800 pb-3 hover:text-blue-500 transition-colors"
                  onClick={toggleNavbar}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
            
            <h3 className="text-xl font-bold text-blue-500 mt-6 mb-4">Our Services</h3>
            <div className="grid grid-cols-1 gap-3">
              {serviceItems.map((service) => (
                <div
                  key={service}
                  className="text-lg text-gray-300 hover:text-white transition-colors"
                >
                  {service}
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* CSS for vertical text */}
      <style jsx>{`
        .email-vertical {
          writing-mode: vertical-lr;
          transform: rotate(180deg);
          display: block;
        }
      `}</style>
    </>
  );
};

export default NavbarVariant1; 