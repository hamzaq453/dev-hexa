"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { IoClose } from "react-icons/io5";
import { BiMenu } from "react-icons/bi";
import { BsArrowRight, BsCodeSlash, BsStar, BsLightningCharge } from "react-icons/bs";
import { HiOutlineSparkles } from "react-icons/hi";

const NavbarVariant6 = () => {
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
    hidden: { y: -20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { 
        type: "spring", 
        stiffness: 200,
        damping: 20,
        staggerChildren: 0.05,
        delayChildren: 0.05
      }
    },
    exit: { 
      y: -20, 
      opacity: 0,
      transition: { 
        duration: 0.2,
      }
    }
  };

  const serviceItemVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.3 }
    },
    exit: { 
      opacity: 0,
      transition: { duration: 0.2 }
    }
  };

  const mobileMenuVariants = {
    hidden: { x: "100%" },
    visible: { 
      x: 0,
      transition: { 
        type: "spring", 
        stiffness: 300,
        damping: 30
      }
    },
    exit: { 
      x: "100%",
      transition: { 
        duration: 0.3
      }
    }
  };

  return (
    <>
      {/* Main navbar */}
      <header className="fixed top-0 left-0 right-0 z-50 font-sans">
        {/* Top gradient stripe using custom colors */}
        <div className="h-1 w-full bg-gradient-to-r from-primary via-primary-dark to-primary-darker"></div>

        {/* Main navigation bar with enhanced glassy effect */}
        <div className="backdrop-blur-xl bg-background/90 border-b border-primary/20 shadow-2xl relative">
          <div className="container mx-auto max-w-7xl">
            <nav className="flex items-center justify-between px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
              {/* Logo with glassy background */}
              <div className="flex items-center group flex-shrink-0">
                <Link href="/" className="flex items-center">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 relative transform group-hover:scale-105 transition-all duration-300 bg-primary/10 backdrop-blur-sm rounded-xl p-2 border border-primary/20 shadow-lg">
                    <Image 
                      src="/Logo.png"
                      alt="DevHexa Logo" 
                      fill
                      className="object-contain"
                      priority
                    />
                  </div>
                  <div className="ml-2 sm:ml-3 hidden sm:block">
                    <span className="block text-base sm:text-lg lg:text-xl font-bold text-foreground">DevHexa</span>
                    <span className="block text-xs text-foreground/60 -mt-1">Digital Solutions</span>
                  </div>
                </Link>
              </div>
              
              {/* Desktop Navigation */}
              <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
                {navItems.map((item) => (
                  <div key={item.name} className="relative group">
                    {item.hasDropdown ? (
                      <button
                        className={`group flex items-center text-foreground/80 hover:text-primary font-medium transition-all duration-300 px-3 py-2 rounded-lg hover:bg-primary/10 backdrop-blur-sm ${isServicesOpen ? 'text-primary bg-primary/10' : ''}`}
                        onClick={toggleServicesPanel}
                        ref={servicesButtonRef}
                      >
                        {item.name}
                        <span className={`ml-2 text-xs transition-transform duration-300 ${isServicesOpen ? 'rotate-180' : 'group-hover:translate-y-0.5'}`}>
                          ▼
                        </span>
                      </button>
                    ) : (
                      <Link 
                        href={item.path}
                        className={`text-foreground/80 font-medium transition-all duration-300 hover:text-primary px-3 py-2 rounded-lg hover:bg-primary/10 backdrop-blur-sm ${activeLink === item.name ? 'text-primary bg-primary/10' : ''}`}
                      >
                        {item.name}
                      </Link>
                    )}
                    
                    {/* Glassy underline effect */}
                    <span className={`absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-primary to-primary-dark scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-full ${activeLink === item.name ? 'scale-x-100' : ''}`}></span>
                  </div>
                ))}
              </div>
              
              {/* Get in touch button with enhanced glassy effect - only on large screens */}
              <div className="hidden lg:block flex-shrink-0">
                <Link 
                  href="/contact"
                  className="group relative overflow-hidden flex items-center justify-center bg-primary/20 backdrop-blur-sm border border-primary/30 text-foreground py-2 sm:py-3 px-4 sm:px-6 lg:px-8 rounded-full shadow-lg hover:shadow-primary/25 transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary/30 hover:border-primary/50 text-sm lg:text-base"
                >
                  <span className="relative z-10 font-medium">Get in Touch</span>
                  <span className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary-dark/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-full"></span>
                </Link>
              </div>
              
              {/* Mobile menu button with glassy effect */}
              <div className="lg:hidden flex-shrink-0">
                <button 
                  onClick={toggleMobileMenu}
                  className="w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center rounded-xl bg-primary/20 backdrop-blur-sm border border-primary/30 hover:bg-primary/30 transition-all duration-300 shadow-lg"
                  aria-label="Toggle Mobile Menu"
                >
                  <div className="w-4 h-4 sm:w-5 sm:h-5 flex flex-col justify-center space-y-1">
                    <span className={`block h-0.5 w-4 sm:w-5 bg-primary transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
                    <span className={`block h-0.5 w-4 sm:w-5 bg-primary transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`}></span>
                    <span className={`block h-0.5 w-4 sm:w-5 bg-primary transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
                  </div>
                </button>
              </div>
            </nav>
          </div>
          
          {/* Services panel with half-screen coverage and no boxes - only on large screens */}
          <AnimatePresence>
            {isServicesOpen && isMounted && (
              <motion.div
                ref={servicePanelRef}
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={servicesPanelVariants}
                className="hidden lg:block absolute left-0 right-0 backdrop-blur-xl bg-background/95 z-40 shadow-2xl border-t border-b border-primary/10 overflow-hidden"
                style={{ maxHeight: '50vh' }}
              >
                <div className="h-full flex flex-col">
                  {/* Scrollable content area */}
                  <div className="flex-1 overflow-y-auto">
                    <div className="container mx-auto max-w-7xl py-4 lg:py-6 px-4 sm:px-6 lg:px-8">
                      <div className="flex items-start justify-between">
                        {/* Service list without boxes */}
                        <div className="w-full max-w-full overflow-hidden">
                          <div className="grid grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 gap-2 lg:gap-3">
                            {serviceItems.map((service, idx) => (
                              <motion.div 
                                key={service.name}
                                variants={serviceItemVariants}
                                custom={idx}
                                className="group min-w-0"
                              >
                                <Link 
                                  href="/services"
                                  className="flex flex-col py-2 px-3 text-foreground/80 hover:text-primary transition-all duration-300 hover:bg-primary/10 rounded-lg backdrop-blur-sm border border-transparent hover:border-primary/20 min-w-0"
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
                                  <p className="ml-5 mt-1 text-xs text-foreground/60 leading-tight line-clamp-1 hidden xl:block">
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
                  
                  {/* Fixed bottom action bar */}
                  <div className="flex-shrink-0 backdrop-blur-lg bg-gradient-to-r from-background/95 to-secondary/80 py-2 lg:py-3 border-t border-primary/20">
                    <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row sm:justify-between sm:items-center space-y-1 sm:space-y-0">
                      <p className="text-sm text-foreground/80">
                        Looking for a custom solution? 
                        <span className="text-primary font-medium ml-1">
                          We can help.
                        </span>
                      </p>
                      <Link 
                        href="/services"
                        onClick={toggleServicesPanel}
                        className="text-sm text-primary font-medium flex items-center hover:text-primary-dark transition-colors duration-300 w-fit px-3 py-2 rounded-lg hover:bg-primary/10 backdrop-blur-sm group flex-shrink-0"
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

      {/* Mobile menu with enhanced glassy effect */}
      <AnimatePresence>
        {isOpen && isMounted && (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={mobileMenuVariants}
            className="fixed inset-y-0 right-0 max-w-xs sm:max-w-sm w-full backdrop-blur-2xl bg-background/80 z-50 shadow-2xl border-l border-primary/30 before:absolute before:inset-0 before:bg-gradient-to-br before:from-primary/10 before:via-transparent before:to-secondary/10 before:backdrop-blur-sm"
          >
            <div className="flex flex-col h-full relative z-10">
              {/* Header with enhanced glassy effect */}
              <div className="flex items-center justify-between p-4 sm:p-6 border-b border-primary/30 bg-primary/10 backdrop-blur-lg shadow-lg">
                <Link href="/" className="flex items-center" onClick={toggleMobileMenu}>
                  <div className="w-8 h-8 relative bg-primary/20 backdrop-blur-sm rounded-lg p-1.5 border border-primary/30 shadow-lg">
                    <Image 
                      src="/Logo.png"
                      alt="DevHexa Logo" 
                      fill
                      className="object-contain"
                      priority
                    />
                  </div>
                  <span className="ml-3 font-bold text-foreground drop-shadow-sm">DevHexa</span>
                </Link>
                
                <button
                  onClick={toggleMobileMenu}
                  className="w-9 h-9 flex items-center justify-center rounded-xl bg-primary/30 backdrop-blur-lg border border-primary/40 hover:bg-primary/40 transition-all duration-300 shadow-lg"
                  aria-label="Close Menu"
                >
                  <span className="text-primary text-lg font-light drop-shadow-sm">×</span>
                </button>
              </div>
              
              {/* Navigation with glassy background */}
              <div className="flex-1 overflow-y-auto py-4 sm:py-6 bg-gradient-to-b from-transparent via-background/20 to-transparent">
                <nav className="flex flex-col px-4 sm:px-6 space-y-2">
                  {navItems.map((item, idx) => (
                    <div key={item.name} className="py-1">
                      {item.hasDropdown ? (
                        <button
                          className="flex items-center justify-between w-full text-left text-foreground font-medium p-3 rounded-xl bg-primary/10 hover:bg-primary/20 transition-all duration-300 border border-primary/20 hover:border-primary/30 backdrop-blur-lg shadow-md"
                          onClick={toggleServicesPanel}
                          ref={mobileServicesButtonRef}
                        >
                          <span className="drop-shadow-sm">{item.name}</span>
                          <span className={`text-xs transition-transform duration-300 text-primary drop-shadow-sm ${isServicesOpen ? 'rotate-180' : ''}`}>
                            ▼
                          </span>
                        </button>
                      ) : (
                        <Link 
                          href={item.path}
                          className="block text-foreground font-medium p-3 rounded-xl hover:bg-primary/15 transition-all duration-300 border border-transparent hover:border-primary/25 backdrop-blur-lg hover:shadow-md"
                          onClick={toggleMobileMenu}
                        >
                          <span className="drop-shadow-sm">{item.name}</span>
                        </Link>
                      )}
                      
                      {/* Services dropdown for mobile with glassy effect */}
                      <AnimatePresence>
                        {isServicesOpen && item.hasDropdown && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="mt-3 pl-4 space-y-2 overflow-hidden bg-primary/5 backdrop-blur-sm rounded-lg border border-primary/15"
                          >
                            {serviceItems.map((service) => (
                              <Link 
                                key={service.name}
                                href="/services" 
                                className="flex items-center py-2 px-3 text-foreground/80 hover:text-primary rounded-lg hover:bg-primary/10 transition-all duration-300 text-sm border border-transparent hover:border-primary/20 backdrop-blur-sm"
                                onClick={toggleMobileMenu}
                              >
                                <span className="mr-3 w-2 h-2 rounded-full bg-primary opacity-60"></span>
                                <span className="drop-shadow-sm">{service.name}</span>
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ))}
                </nav>
              </div>
              
              {/* Contact button with enhanced glassy effect */}
              <div className="p-4 sm:p-6 border-t border-primary/30 bg-gradient-to-r from-primary/10 via-transparent to-secondary/10 backdrop-blur-lg">
                <Link 
                  href="/contact"
                  className="flex items-center justify-center bg-primary/30 backdrop-blur-lg border border-primary/40 text-foreground py-3 px-6 rounded-full w-full shadow-xl hover:shadow-primary/25 transition-all duration-300 hover:bg-primary/40 hover:border-primary/50 font-medium text-sm sm:text-base hover:scale-105"
                  onClick={toggleMobileMenu}
                >
                  <span className="drop-shadow-sm">Contact Us</span>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Spacer for fixed navbar */}
      <div className="h-14 sm:h-16 lg:h-20"></div>
      
      {/* Gradient animation styles */}
      <style jsx>{`
        @keyframes gradient-x {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 8s ease infinite;
        }
      `}</style>
    </>
  );
};

export default NavbarVariant6;