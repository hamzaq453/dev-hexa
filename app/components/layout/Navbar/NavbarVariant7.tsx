"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const NavbarVariant7 = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [activeLink, setActiveLink] = useState("Home");
  
  // Navigation links
  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services", hasDropdown: true },
    { name: "Work", path: "/work" },
    { name: "Pricing", path: "/pricing" },
    { name: "Portfolio", path: "/portfolio" },
  ];

  // Services list with descriptions
  const serviceItems = [
    { 
      name: "Website Design & Development", 
      description: "Custom websites and web applications tailored to your business needs"
    },
    { 
      name: "Branding & Graphic Design", 
      description: "Complete brand identity and visual design solutions"
    },
    { 
      name: "Digital Marketing Services", 
      description: "SEO, social media, and online marketing strategies"
    },
    { 
      name: "Creative Content Building", 
      description: "Engaging content creation for digital platforms"
    },
    { 
      name: "Cloud Computing Services", 
      description: "Scalable cloud solutions and infrastructure management"
    },
    { 
      name: "ERP for Businesses", 
      description: "Enterprise resource planning systems for efficient operations"
    },
    { 
      name: "Motion Graphics", 
      description: "Dynamic animations and video content creation"
    },
    { 
      name: "Mobile Application Development", 
      description: "Native and cross-platform mobile app solutions"
    },
  ];

  useEffect(() => {
    setIsMounted(true);
    
    // Set active link based on current path
    const path = window.location.pathname;
    const currentItem = navItems.find(item => item.path === path);
    if (currentItem) {
      setActiveLink(currentItem.name);
    }
  }, []);

  const toggleServicesPanel = () => {
    setIsServicesOpen(!isServicesOpen);
  };

  const toggleMobileMenu = () => {
    setIsOpen(!isOpen);
    if (isServicesOpen) setIsServicesOpen(false);
  };

  // Close services panel when clicking outside
  const servicePanelRef = useRef<HTMLDivElement>(null);
  const servicesButtonRef = useRef<HTMLButtonElement>(null);
  const mobileServicesButtonRef = useRef<HTMLButtonElement>(null);
  
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      // Don't close if clicking on the services button itself (desktop or mobile)
      if (servicesButtonRef.current && servicesButtonRef.current.contains(event.target as Node)) {
        return;
      }
      if (mobileServicesButtonRef.current && mobileServicesButtonRef.current.contains(event.target as Node)) {
        return;
      }
      
      // Close if clicking outside the panel
      if (servicePanelRef.current && !servicePanelRef.current.contains(event.target as Node)) {
        setIsServicesOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [servicePanelRef, servicesButtonRef, mobileServicesButtonRef]);

  // Animations
  const servicesPanelVariants = {
    hidden: { y: -10, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { 
        type: "ease-out", 
        duration: 0.2,
        staggerChildren: 0.03,
        delayChildren: 0.05
      }
    },
    exit: { 
      y: -10, 
      opacity: 0,
      transition: { 
        duration: 0.15,
      }
    }
  };

  const serviceItemVariants = {
    hidden: { opacity: 0, y: 5 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.2 }
    },
    exit: { 
      opacity: 0,
      transition: { duration: 0.1 }
    }
  };

  const mobileMenuVariants = {
    hidden: { x: "100%" },
    visible: { 
      x: 0,
      transition: { 
        type: "ease-out", 
        duration: 0.3
      }
    },
    exit: { 
      x: "100%",
      transition: { 
        duration: 0.25
      }
    }
  };

  return (
    <>
      {/* Main navbar */}
      <header className="fixed top-0 left-0 right-0 z-50 font-sans">
        {/* Main navigation bar with glassy effect */}
        <div className="backdrop-blur-xl bg-gray-900/80 border-b border-gray-700/50 shadow-xl">
          <div className="container mx-auto max-w-7xl">
            <nav className="flex items-center justify-between px-4 sm:px-6 lg:px-8 py-4">
              {/* Logo with subtle glassy background */}
              <div className="flex items-center group flex-shrink-0">
                <Link href="/" className="flex items-center">
                  <div className="w-10 h-10 lg:w-12 lg:h-12 relative transform group-hover:scale-105 transition-transform duration-200 bg-white/10 backdrop-blur-sm rounded-lg p-2 border border-white/20">
                    <Image 
                      src="/Logo.png"
                      alt="DevHexa Logo" 
                      fill
                      className="object-contain"
                      priority
                    />
                  </div>
                  <div className="ml-3 hidden sm:block">
                    <span className="block text-lg lg:text-xl font-semibold text-white">DevHexa</span>
                    <span className="block text-xs text-gray-300 -mt-0.5">Digital Solutions</span>
                  </div>
                </Link>
              </div>
              
              {/* Desktop Navigation */}
              <div className="hidden lg:flex items-center space-x-2">
                {navItems.map((item) => (
                  <div key={item.name} className="relative group">
                    {item.hasDropdown ? (
                      <button
                        className={`flex items-center text-white hover:text-white font-medium focus:outline-none transition-all duration-300 py-3 px-4 rounded-xl relative overflow-hidden group ${isServicesOpen ? 'text-white bg-gradient-to-r from-primary/20 to-primary-dark/20' : ''}`}
                        onClick={toggleServicesPanel}
                        ref={servicesButtonRef}
                      >
                        <span className="relative z-10">{item.name}</span>
                        <svg 
                          className={`ml-1 w-4 h-4 transition-transform duration-200 relative z-10 ${isServicesOpen ? 'rotate-180' : ''}`} 
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                        <span className="absolute inset-0 bg-gradient-to-r from-primary/10 to-primary-dark/10 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-xl"></span>
                      </button>
                    ) : (
                      <Link 
                        href={item.path}
                        className={`text-white font-medium transition-all duration-300 py-3 focus:border-none px-4 rounded-xl relative overflow-hidden group ${activeLink === item.name ? 'text-white bg-gradient-to-r from-primary/20 to-primary-dark/20' : ''}`}
                      >
                        <span className="relative z-10">{item.name}</span>
                        <span className="absolute inset-0 bg-gradient-to-r from-primary/10 to-primary-dark/10 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-xl"></span>
                      </Link>
                    )}
                    
                    {/* Bottom transition line */}
                    <span className={`absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-primary to-primary-dark scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-full ${activeLink === item.name && !item.hasDropdown ? 'scale-x-100' : ''}`}></span>
                  </div>
                ))}
              </div>
              
              {/* Get in touch button with enhanced gradient style - only on large screens */}
              <div className="hidden lg:block flex-shrink-0">
                <Link 
                  href="/contact"
                  className="group relative overflow-hidden bg-gradient-to-r from-primary to-primary-dark text-white py-3 px-8 rounded-full font-semibold text-sm shadow-lg hover:shadow-primary/25 transition-all duration-300 hover:scale-105 border border-primary/30"
                >
                  <span className="relative z-10">Get in Touch</span>
                  <span className="absolute inset-0 bg-gradient-to-r from-primary-dark to-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-full"></span>
                </Link>
              </div>
              
              {/* Mobile menu button with glassy effect */}
              <div className="lg:hidden flex-shrink-0">
                <button 
                  onClick={toggleMobileMenu}
                  className="w-10 h-10 flex items-center justify-center rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-200"
                  aria-label="Toggle Mobile Menu"
                >
                  <div className="w-5 h-5 flex flex-col justify-center space-y-1">
                    <span className={`block h-0.5 w-5 bg-white transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
                    <span className={`block h-0.5 w-5 bg-white transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`}></span>
                    <span className={`block h-0.5 w-5 bg-white transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
                  </div>
                </button>
              </div>
            </nav>
          </div>
          
          {/* Services panel with enhanced glassy effect - only on large screens */}
          <AnimatePresence>
            {isServicesOpen && isMounted && (
              <motion.div
                ref={servicePanelRef}
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={servicesPanelVariants}
                className="hidden lg:block absolute left-0 right-0 top-full backdrop-blur-xl bg-gray-900/95 z-50 shadow-2xl border-t border-gray-700/50"
                style={{ maxHeight: '50vh' }}
              >
                <div className="h-full flex flex-col overflow-hidden">
                  {/* Scrollable content area */}
                  <div className="flex-1 overflow-y-auto">
                    <div className="w-full py-4 lg:py-6 px-4 sm:px-6 lg:px-8">
                      <div className="max-w-7xl mx-auto">
                        {/* Service list without boxes */}
                        <div className="w-full overflow-hidden">
                          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-2 lg:gap-3">
                            {serviceItems.map((service, idx) => (
                              <motion.div 
                                key={service.name}
                                variants={serviceItemVariants}
                                custom={idx}
                                className="group min-w-0"
                              >
                                <Link 
                                  href="/services"
                                  className="flex flex-col py-2 px-3 text-white hover:text-white transition-all duration-300 hover:bg-gradient-to-r hover:from-primary/10 hover:to-primary-dark/10 rounded-lg backdrop-blur-sm border border-transparent hover:border-primary/20 min-w-0"
                                  onClick={toggleServicesPanel}
                                >
                                  <div className="flex items-center min-w-0">
                                    <div className="w-2 h-2 rounded-full bg-primary opacity-60 group-hover:opacity-100 transition-opacity duration-300 flex-shrink-0"></div>
                                    <span className="ml-3 text-sm font-medium flex-1 truncate">
                                      {service.name}
                                    </span>
                                    <span className="ml-auto text-xs text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex-shrink-0">
                                      →
                                    </span>
                                  </div>
                                  {/* Show descriptions only on xl and above */}
                                  <p className="ml-5 mt-1 text-xs text-gray-400 leading-tight line-clamp-1 hidden xl:block">
                                    {service.description}
                                  </p>
                                </Link>
                              </motion.div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Fixed bottom action bar with enhanced glassy effect */}
                  <div className="flex-shrink-0 bg-gray-800/50 backdrop-blur-lg py-2 lg:py-3 border-t border-gray-700/50">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row sm:justify-between sm:items-center space-y-1 sm:space-y-0">
                      <p className="text-sm text-gray-400">
                        Looking for a custom solution? 
                        <span className="text-white font-medium ml-1">
                          We can help.
                        </span>
                      </p>
                      <Link 
                        href="/services"
                        onClick={toggleServicesPanel}
                        className="group text-sm text-white font-medium flex items-center hover:text-primary transition-all duration-300 w-fit px-3 py-2 rounded-lg hover:bg-gradient-to-r hover:from-primary/10 hover:to-primary-dark/10 backdrop-blur-sm border border-transparent hover:border-primary/30 flex-shrink-0"
                      >
                        View all services
                        <span className="ml-2 text-xs transition-transform duration-300 group-hover:translate-x-1">→</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </header>

      {/* Mobile menu with clean decent design */}
      <AnimatePresence>
        {isOpen && isMounted && (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={mobileMenuVariants}
            className="fixed inset-y-0 right-0 w-72 sm:w-80 z-50 lg:hidden"
          >
            {/* Clean backdrop */}
            <div className="absolute inset-0 bg-gray-900/95 backdrop-blur-xl"></div>
            <div className="absolute inset-0 border-l border-gray-700/50"></div>
            
            {/* Content */}
            <div className="relative z-10 flex flex-col h-full">
              {/* Simple header */}
              <div className="flex items-center justify-between p-6 border-b border-gray-700/50">
                <Link href="/" className="flex items-center" onClick={toggleMobileMenu}>
                  <div className="w-10 h-10 relative bg-primary/20 rounded-xl p-2 border border-primary/30">
                    <Image 
                      src="/Logo.png"
                      alt="DevHexa Logo" 
                      fill
                      className="object-contain"
                      priority
                    />
                  </div>
                  <div className="ml-3">
                    <span className="block text-lg font-semibold text-white">DevHexa</span>
                    <span className="block text-xs text-gray-400">Digital Solutions</span>
                  </div>
                </Link>
                
                <button
                  onClick={toggleMobileMenu}
                  className="w-9 h-9 flex items-center justify-center rounded-lg bg-gray-800/60 hover:bg-gray-700/60 transition-colors duration-200 border border-gray-600/50"
                  aria-label="Close Menu"
                >
                  <svg className="w-5 h-5 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              
              {/* Clean navigation */}
              <div className="flex-1 overflow-y-auto py-6">
                <nav className="px-6 space-y-2">
                  {navItems.map((item, idx) => (
                    <div key={item.name}>
                      {item.hasDropdown ? (
                        <button
                          className="flex items-center justify-between w-full text-left text-gray-200 hover:text-white font-medium p-3 rounded-lg bg-gray-800/40 hover:bg-gray-700/60 transition-all duration-200 border border-gray-700/30 hover:border-gray-600/50"
                          onClick={toggleServicesPanel}
                          ref={mobileServicesButtonRef}
                        >
                          <span>{item.name}</span>
                          <svg 
                            className={`w-4 h-4 transition-transform duration-200 ${isServicesOpen ? 'rotate-180' : ''}`} 
                            fill="none" 
                            stroke="currentColor" 
                            viewBox="0 0 24 24"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </button>
                      ) : (
                        <Link 
                          href={item.path}
                          className="block text-gray-200 hover:text-white font-medium p-3 rounded-lg bg-gray-800/40 hover:bg-gray-700/60 transition-all duration-200 border border-gray-700/30 hover:border-gray-600/50"
                          onClick={toggleMobileMenu}
                        >
                          {item.name}
                        </Link>
                      )}
                      
                      {/* Services dropdown */}
                      <AnimatePresence>
                        {isServicesOpen && item.hasDropdown && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="mt-2 overflow-hidden bg-gray-800/30 rounded-lg border border-gray-700/30"
                          >
                            <div className="p-2 space-y-1">
                              {serviceItems.map((service) => (
                                <Link 
                                  key={service.name}
                                  href="/services" 
                                  className="flex items-center py-2 px-3 text-gray-300 hover:text-white rounded-md hover:bg-gray-700/50 transition-all duration-200 text-sm"
                                  onClick={toggleMobileMenu}
                                >
                                  <div className="w-1 h-1 rounded-full bg-primary mr-3"></div>
                                  {service.name}
                                </Link>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ))}
                </nav>
              </div>
              
              {/* Simple contact button */}
              <div className="p-6 border-t border-gray-700/50">
                <Link 
                  href="/contact"
                  className="flex items-center justify-center bg-primary hover:bg-primary-dark text-white py-3 px-6 rounded-lg w-full transition-colors duration-200 font-medium"
                  onClick={toggleMobileMenu}
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Spacer for fixed navbar */}
      <div className="h-16 lg:h-20"></div>
    </>
  );
};

export default NavbarVariant7; 