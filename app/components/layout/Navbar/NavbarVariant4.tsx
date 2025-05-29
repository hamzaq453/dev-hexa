"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { IoClose } from "react-icons/io5";
import { FiHome, FiInfo, FiGrid, FiBriefcase, FiDollarSign, FiImage, FiSend, FiChevronRight } from "react-icons/fi";
import { HiOutlineMenuAlt2 } from "react-icons/hi";

const NavbarVariant4 = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [activeItem, setActiveItem] = useState<string | null>(null);
  
  useEffect(() => {
    setIsMounted(true);
  }, []);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };
  
  // Navigation links with icons
  const navItems = [
    { name: "Home", path: "/", icon: <FiHome /> },
    { name: "About", path: "/about", icon: <FiInfo /> },
    { name: "Services", path: "/services", icon: <FiGrid /> },
    { name: "Portfolio", path: "/portfolio", icon: <FiImage /> },
    { name: "Work", path: "/work", icon: <FiBriefcase /> },
    { name: "Pricing", path: "/pricing", icon: <FiDollarSign /> },
    { name: "Contact", path: "/contact", icon: <FiSend /> },
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

  // Animation variants
  const sidebarVariants = {
    closed: {
      width: "80px",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40
      }
    },
    open: {
      width: "300px",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40
      }
    }
  };

  const contentVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: {
        delay: 0.2,
        staggerChildren: 0.07,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { 
      opacity: 1, 
      x: 0 
    }
  };

  // Mobile menu animation
  const mobileMenuVariants = {
    hidden: { x: "-100%" },
    visible: { 
      x: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30
      }
    },
    exit: { 
      x: "-100%",
      transition: {
        duration: 0.3
      }
    }
  };

  // Floating services panel
  const servicesModalVariants = {
    hidden: { 
      opacity: 0,
      scale: 0.9,
      y: 10
    },
    visible: { 
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 35
      }
    },
    exit: { 
      opacity: 0,
      scale: 0.9,
      y: 10,
      transition: {
        duration: 0.2
      }
    }
  };

  return (
    <>
      {/* Desktop side navbar */}
      <motion.div
        className="hidden lg:block fixed top-0 left-0 h-screen bg-gradient-to-b from-gray-900 via-indigo-950 to-gray-900 text-white z-40 border-r border-indigo-900/30 overflow-visible"
        variants={sidebarVariants}
        initial="closed"
        animate={isOpen ? "open" : "closed"}
      >
        <div className="h-full flex flex-col relative">
          {/* Logo centered in sidebar */}
          <div className="flex items-center justify-center py-6 border-b border-indigo-800/20">
            <Link href="/" className="relative flex items-center">
              <div className="w-10 h-10 relative">
                <Image 
                  src="/Logo.png"
                  alt="DevHexa Logo" 
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              <AnimatePresence>
                {isOpen && (
                  <motion.span
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -10 }}
                    transition={{ duration: 0.2 }}
                    className="ml-3 text-lg font-semibold"
                  >
                    DevHexa
                  </motion.span>
                )}
              </AnimatePresence>
            </Link>
          </div>

          {/* Toggle button positioned outside the sidebar */}
          <button
            className="absolute -right-4 top-20 p-2 rounded-full bg-indigo-600 hover:bg-indigo-700 shadow-lg z-50 transition-all duration-200 transform hover:scale-105"
            onClick={toggleNavbar}
            aria-label="Toggle Sidebar"
          >
            <div className="flex items-center justify-center w-5 h-5">
              {isOpen ? (
                <HiOutlineMenuAlt2 size={16} className="rotate-180" />
              ) : (
                <HiOutlineMenuAlt2 size={16} />
              )}
            </div>
          </button>
          
          {/* Navigation items */}
          <div className="flex-1 overflow-hidden py-6 hover:overflow-visible">
            <AnimatePresence mode="wait">
              <motion.nav
                key={isOpen ? "open" : "closed"}
                variants={contentVariants}
                initial="hidden"
                animate="visible"
                className="flex flex-col space-y-1 px-3"
              >
                {navItems.map((item) => (
                  <motion.div
                    key={item.name}
                    variants={itemVariants}
                    className="relative"
                    onMouseEnter={() => setActiveItem(item.name)}
                    onMouseLeave={() => setActiveItem(null)}
                  >
                    <Link
                      href={item.path}
                      className={`flex items-center py-3 px-3 rounded-lg transition-all duration-200 ${
                        activeItem === item.name ? 'bg-indigo-600' : 'hover:bg-indigo-800/30'
                      }`}
                    >
                      <span className="w-6 h-6 flex items-center justify-center text-indigo-400">
                        {item.icon}
                      </span>
                      
                      <AnimatePresence>
                        {isOpen && (
                          <motion.span
                            initial={{ opacity: 0, width: 0 }}
                            animate={{ opacity: 1, width: "auto" }}
                            exit={{ opacity: 0, width: 0 }}
                            className="ml-3 whitespace-nowrap"
                          >
                            {item.name}
                          </motion.span>
                        )}
                      </AnimatePresence>
                      
                      {/* Show the hover tooltip when sidebar is collapsed */}
                      {!isOpen && activeItem === item.name && (
                        <div className="absolute left-16 bg-indigo-900 py-1 px-3 rounded shadow-lg z-50 whitespace-nowrap">
                          {item.name}
                        </div>
                      )}
                      
                      {/* Show services dropdown indicator */}
                      {isOpen && item.name === "Services" && (
                        <FiChevronRight 
                          className={`ml-auto transition-transform duration-200 ${
                            activeItem === "Services" ? "rotate-90" : ""
                          }`}
                        />
                      )}
                    </Link>
                    
                    {/* Services dropdown */}
                    <AnimatePresence>
                      {isOpen && activeItem === "Services" && item.name === "Services" && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden ml-6 mr-2 my-1"
                        >
                          {serviceItems.slice(0, 4).map((service) => (
                            <Link
                              key={service}
                              href="/services"
                              className="flex items-center py-2 px-3 text-sm text-gray-300 hover:text-white hover:bg-indigo-800/30 rounded-md my-1"
                            >
                              <span className="w-1 h-1 bg-indigo-400 rounded-full mr-2"></span>
                              {service}
                            </Link>
                          ))}
                          <Link
                            href="/services"
                            className="flex items-center mt-2 py-2 px-3 text-sm text-indigo-400 hover:text-indigo-300"
                          >
                            <span>View all services</span>
                            <FiChevronRight className="ml-1" />
                          </Link>
                        </motion.div>
                      )}
                    </AnimatePresence>
                    
                    {/* Services floating panel for collapsed sidebar */}
                    <AnimatePresence>
                      {!isOpen && activeItem === "Services" && item.name === "Services" && (
                        <motion.div
                          variants={servicesModalVariants}
                          initial="hidden"
                          animate="visible"
                          exit="exit"
                          className="absolute left-16 top-0 bg-gray-900 rounded-lg shadow-xl p-4 w-64 z-50"
                        >
                          <h3 className="text-lg font-medium mb-3 flex items-center text-indigo-400">
                            <FiGrid className="mr-2" /> Our Services
                          </h3>
                          <div className="space-y-2">
                            {serviceItems.map((service) => (
                              <Link
                                key={service}
                                href="/services"
                                className="block py-2 px-3 text-sm hover:bg-indigo-800/30 rounded-md"
                              >
                                {service}
                              </Link>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                ))}
              </motion.nav>
            </AnimatePresence>
          </div>
          
          {/* Status/Profile area */}
          <div className="mt-auto border-t border-indigo-800/20 py-4 px-3">
            <Link 
              href="/contact"
              className={`flex items-center py-2 px-3 rounded-lg bg-indigo-600/20 hover:bg-indigo-600/40 transition-all duration-200 ${isOpen ? 'justify-start' : 'justify-center'}`}
            >
              <FiSend className="text-indigo-400" />
              
              <AnimatePresence>
                {isOpen && (
                  <motion.span
                    initial={{ opacity: 0, width: 0 }}
                    animate={{ opacity: 1, width: "auto" }}
                    exit={{ opacity: 0, width: 0 }}
                    className="ml-3 whitespace-nowrap"
                  >
                    Get in Touch
                  </motion.span>
                )}
              </AnimatePresence>
            </Link>
          </div>
        </div>
      </motion.div>

      {/* Mobile menu button and header */}
      <div className="lg:hidden fixed top-0 left-0 right-0 h-16 bg-gray-900 text-white z-40 flex items-center justify-between px-4 shadow-md">
        <button
          onClick={toggleNavbar}
          className="p-2 rounded-md hover:bg-gray-800"
          aria-label="Toggle Navigation"
        >
          <HiOutlineMenuAlt2 size={24} />
        </button>
        
        <Link href="/" className="flex items-center">
          <div className="h-8 w-8 relative">
            <Image 
              src="/Logo.png"
              alt="DevHexa Logo" 
              fill
              className="object-contain"
              priority
            />
          </div>
          <span className="ml-2 font-semibold">DevHexa</span>
        </Link>
        
        <Link 
          href="/contact"
          className="p-2 rounded-md text-indigo-400 hover:bg-gray-800"
        >
          <FiSend size={20} />
        </Link>
      </div>

      {/* Mobile side menu */}
      <AnimatePresence>
        {isOpen && isMounted && (
          <motion.div
            className="fixed inset-0 z-50 lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {/* Backdrop */}
            <div 
              className="absolute inset-0 bg-black/60 backdrop-blur-sm" 
              onClick={toggleNavbar}
            />
            
            {/* Side panel */}
            <motion.div
              className="absolute left-0 top-0 h-full w-[280px] bg-gray-900 shadow-xl"
              variants={mobileMenuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <div className="flex items-center justify-between p-4 border-b border-gray-800">
                <Link href="/" className="flex items-center">
                  <div className="h-8 w-8 relative">
                    <Image 
                      src="/Logo.png"
                      alt="DevHexa Logo" 
                      fill
                      className="object-contain"
                      priority
                    />
                  </div>
                  <span className="ml-2 font-semibold">DevHexa</span>
                </Link>
                
                <button
                  onClick={toggleNavbar}
                  className="p-2 rounded-md hover:bg-gray-800"
                  aria-label="Close Menu"
                >
                  <IoClose size={20} />
                </button>
              </div>
              
              <div className="p-4">
                <nav className="space-y-1">
                  {navItems.map((item) => (
                    <div key={item.name}>
                      <Link
                        href={item.path}
                        className="flex items-center py-3 px-3 rounded-lg hover:bg-gray-800 transition-colors"
                        onClick={item.name !== "Services" ? toggleNavbar : undefined}
                      >
                        <span className="w-6 h-6 flex items-center justify-center text-indigo-400">
                          {item.icon}
                        </span>
                        <span className="ml-3">{item.name}</span>
                        
                        {item.name === "Services" && (
                          <FiChevronRight 
                            className={`ml-auto transition-transform duration-200 ${
                              activeItem === "Services" ? "rotate-90" : ""
                            }`}
                            onClick={(e) => {
                              e.preventDefault();
                              setActiveItem(activeItem === "Services" ? null : "Services");
                            }}
                          />
                        )}
                      </Link>
                      
                      {/* Services dropdown for mobile */}
                      <AnimatePresence>
                        {activeItem === "Services" && item.name === "Services" && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden ml-9 mt-1 space-y-1"
                          >
                            {serviceItems.map((service) => (
                              <Link
                                key={service}
                                href="/services"
                                className="block py-2 px-3 text-sm text-gray-300 hover:text-white rounded-md hover:bg-gray-800"
                                onClick={toggleNavbar}
                              >
                                {service}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ))}
                </nav>
              </div>
              
              <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-gray-800">
                <Link
                  href="/contact"
                  className="flex items-center justify-center py-3 px-4 bg-indigo-600/30 hover:bg-indigo-600/50 text-white rounded-lg w-full"
                  onClick={toggleNavbar}
                >
                  <FiSend className="mr-2" />
                  <span>Get in Touch</span>
                </Link>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Add extra padding to main content for desktop */}
      <div className="hidden lg:block w-20 flex-shrink-0" />
    </>
  );
};

export default NavbarVariant4; 