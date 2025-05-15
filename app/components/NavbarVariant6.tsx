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

  // Services list with icons
  const serviceItems = [
    { name: "Website Design & Development", icon: <BsCodeSlash size={18} /> },
    { name: "Branding & Graphic Design", icon: <HiOutlineSparkles size={18} /> },
    { name: "Digital Marketing Services", icon: <BsLightningCharge size={18} /> },
    { name: "Creative Content Building", icon: <BsStar size={18} /> },
    { name: "Cloud Computing Services", icon: <BsCodeSlash size={18} /> },
    { name: "ERP for Businesses", icon: <BsLightningCharge size={18} /> },
    { name: "Motion Graphics", icon: <HiOutlineSparkles size={18} /> },
    { name: "Mobile Application Development", icon: <BsCodeSlash size={18} /> },
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
  
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (servicePanelRef.current && !servicePanelRef.current.contains(event.target as Node)) {
        setIsServicesOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [servicePanelRef]);

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
        {/* Top colorful stripe with animated gradient */}
        <div className="h-1.5 w-full bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 animate-gradient-x"></div>
        
        {/* Main navigation bar - dark theme */}
        <div className="bg-gray-900 backdrop-blur-md bg-opacity-90 shadow-xl relative border-b border-gray-800">
          <div className="container mx-auto">
            <nav className="flex items-center justify-between px-4 md:px-8 py-5">
              {/* Logo with subtle animation */}
              <div className="flex items-center group">
                <Link href="/" className="flex items-center">
                  <div className="w-10 h-10 relative transform group-hover:scale-105 transition-transform duration-300">
                    <Image 
                      src="/Logo.png"
                      alt="DevHexa Logo" 
                      fill
                      className="object-contain"
                      priority
                    />
                  </div>
                  <div className="ml-2">
                    <span className="block text-xl font-bold text-gray-100">DevHexa</span>
                    <span className="block text-xs text-gray-400 -mt-1">Digital Solutions</span>
                  </div>
                </Link>
              </div>
              
              {/* Desktop Navigation */}
              <div className="hidden lg:flex items-center space-x-12">
                {navItems.map((item) => (
                  <div key={item.name} className="relative group">
                    {item.hasDropdown ? (
                      <button
                        className={`group flex items-center text-gray-300 hover:text-indigo-400 font-medium ${isServicesOpen ? 'text-indigo-400' : ''}`}
                        onClick={toggleServicesPanel}
                      >
                        {item.name}
                        <span className="ml-1 transition-transform duration-200 group-hover:rotate-90">
                          <BsArrowRight size={14} />
                        </span>
                      </button>
                    ) : (
                      <Link 
                        href={item.path}
                        className={`text-gray-300 font-medium transition-colors ${activeLink === item.name ? 'text-indigo-400' : 'hover:text-indigo-400'}`}
                      >
                        {item.name}
                      </Link>
                    )}
                    
                    {/* Animated underline effect */}
                    <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-indigo-600 to-purple-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left ${activeLink === item.name ? 'scale-x-100' : ''}`}></span>
                  </div>
                ))}
              </div>
              
              {/* Get in touch button */}
              <div className="hidden lg:block">
                <Link 
                  href="/contact"
                  className="group relative overflow-hidden flex items-center justify-center bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-2.5 px-7 rounded-full shadow-md hover:shadow-indigo-900/50 transition-all duration-300 hover:-translate-y-0.5"
                >
                  <span className="relative z-10">Get in Touch</span>
                  <span className="absolute inset-0 bg-gradient-to-r from-purple-600 to-indigo-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></span>
                  <BsArrowRight className="ml-2 relative z-10 transform group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </div>
              
              {/* Mobile menu button */}
              <div className="lg:hidden">
                <button 
                  onClick={toggleMobileMenu}
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-gray-700 transition-colors"
                  aria-label="Toggle Mobile Menu"
                >
                  <BiMenu size={26} className="text-indigo-400" />
                </button>
              </div>
            </nav>
          </div>
          
          {/* Services panel - dark theme */}
          <AnimatePresence>
            {isServicesOpen && isMounted && (
              <motion.div
                ref={servicePanelRef}
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={servicesPanelVariants}
                className="absolute left-0 right-0 bg-gray-800 z-40 shadow-xl border-t border-gray-700"
              >
                <div className="container mx-auto py-12 px-4 md:px-8">
                  <div className="flex items-start justify-between">
                    {/* Service categories */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-y-10 gap-x-12 w-full">
                      {serviceItems.map((service, idx) => (
                        <motion.div 
                          key={service.name}
                          variants={serviceItemVariants}
                          custom={idx}
                          className="group"
                        >
                          <Link 
                            href="/services"
                            className="flex flex-col items-start"
                            onClick={toggleServicesPanel}
                          >
                            <div className="flex items-center mb-2.5 text-indigo-400">
                              <span className="mr-2.5 flex items-center justify-center w-8 h-8 rounded-full bg-gray-700 group-hover:bg-gray-600 transition-colors">
                                {service.icon}
                              </span>
                              <BsArrowRight className="opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all duration-300" />
                            </div>
                            <h3 className="text-base font-medium text-gray-200 group-hover:text-indigo-400 transition-colors">
                              {service.name}
                            </h3>
                            <p className="text-xs text-gray-400 mt-1 leading-relaxed">
                              Professional solutions tailored for your business needs
                            </p>
                          </Link>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
                
                {/* Bottom action bar */}
                <div className="bg-gradient-to-r from-gray-900 to-gray-800 py-4 border-t border-gray-700">
                  <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
                    <p className="text-sm text-gray-400">
                      Looking for a custom solution? 
                      <span className="text-indigo-400 font-medium ml-1">
                        We can help.
                      </span>
                    </p>
                    <Link 
                      href="/services"
                      onClick={toggleServicesPanel}
                      className="text-sm text-indigo-400 font-medium flex items-center hover:text-indigo-300 transition-colors"
                    >
                      View all services
                      <BsArrowRight className="ml-1.5" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </header>

      {/* Mobile menu with dark theme */}
      <AnimatePresence>
        {isOpen && isMounted && (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={mobileMenuVariants}
            className="fixed inset-y-0 right-0 max-w-sm w-full bg-gray-900 z-50 shadow-xl"
          >
            <div className="flex flex-col h-full">
              {/* Header */}
              <div className="flex items-center justify-between p-4 border-b border-gray-800">
                <Link href="/" className="flex items-center" onClick={toggleMobileMenu}>
                  <div className="w-8 h-8 relative">
                    <Image 
                      src="/Logo.png"
                      alt="DevHexa Logo" 
                      fill
                      className="object-contain"
                      priority
                    />
                  </div>
                  <span className="ml-2 font-bold text-gray-100">DevHexa</span>
                </Link>
                
                <button
                  onClick={toggleMobileMenu}
                  className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-800 hover:bg-gray-700 transition-colors"
                  aria-label="Close Menu"
                >
                  <IoClose size={22} className="text-gray-300" />
                </button>
              </div>
              
              {/* Navigation */}
              <div className="flex-1 overflow-y-auto py-6">
                <nav className="flex flex-col px-4">
                  {navItems.map((item, idx) => (
                    <div key={item.name} className="py-3">
                      {item.hasDropdown ? (
                        <button
                          className="flex items-center justify-between w-full text-left text-gray-200 font-medium"
                          onClick={() => {
                            setIsServicesOpen(!isServicesOpen);
                          }}
                        >
                          <span>{item.name}</span>
                          <BsArrowRight 
                            className={`transition-transform duration-200 ${isServicesOpen ? 'rotate-90' : ''}`}
                          />
                        </button>
                      ) : (
                        <Link 
                          href={item.path}
                          className="block text-gray-200 font-medium"
                          onClick={toggleMobileMenu}
                        >
                          {item.name}
                        </Link>
                      )}
                      
                      {/* Services dropdown for mobile */}
                      <AnimatePresence>
                        {isServicesOpen && item.hasDropdown && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="mt-3 pl-4 space-y-3 overflow-hidden"
                          >
                            {serviceItems.map((service) => (
                              <Link 
                                key={service.name}
                                href="/services" 
                                className="flex items-center py-2 text-gray-400 hover:text-indigo-400"
                                onClick={toggleMobileMenu}
                              >
                                <span className="mr-2.5 text-indigo-500">{service.icon}</span>
                                <span>{service.name}</span>
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ))}
                </nav>
              </div>
              
              {/* Contact button */}
              <div className="p-6 border-t border-gray-800">
                <Link 
                  href="/contact"
                  className="flex items-center justify-center bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-3 px-6 rounded-full w-full shadow-md hover:shadow-indigo-900/50 transition-all duration-300"
                  onClick={toggleMobileMenu}
                >
                  <span>Contact Us</span>
                  <BsArrowRight className="ml-2" />
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Spacer for fixed navbar */}
      <div className="h-20"></div>
      
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