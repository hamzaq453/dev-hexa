"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { IoClose } from "react-icons/io5";
import { FiChevronDown, FiArrowRight } from "react-icons/fi";

const NavbarVariant5 = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [activeItem, setActiveItem] = useState<string | null>(null);
  
  // Navigation links
  const navItems = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Services", path: "/services", hasDropdown: true },
    { name: "Our Work", path: "/work" },
    { name: "Pricing", path: "/pricing" },
    { name: "Portfolio", path: "/portfolio" },
    // { name: "Contact", path: "/contact" },
  ];

  // Services list with short descriptions
  const serviceItems = [
    {
      title: "Website Design & Development",
      description: "Custom, responsive websites that engage your audience.",
      icon: "💻"
    },
    {
      title: "Branding & Graphic Design",
      description: "Visual identities that tell your unique brand story.",
      icon: "🎨"
    },
    {
      title: "Digital Marketing Services",
      description: "Strategic campaigns to grow your online presence.",
      icon: "📈"
    },
    {
      title: "Creative Content Building",
      description: "Compelling content that captures audience attention.",
      icon: "✏️"
    },
    {
      title: "Cloud Computing Services",
      description: "Scalable cloud solutions for modern businesses.",
      icon: "☁️"
    },
    {
      title: "ERP for Businesses",
      description: "Streamline operations with integrated solutions.",
      icon: "🔄"
    },
    {
      title: "Motion Graphics",
      description: "Captivating animations and visual storytelling.",
      icon: "🎬"
    },
    {
      title: "Mobile Application Development",
      description: "Intuitive, feature-rich apps for iOS and Android.",
      icon: "📱"
    },
  ];

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const toggleServicesPanel = () => {
    setIsServicesOpen(!isServicesOpen);
    // Lock body scroll when full-screen services panel is open
    if (!isServicesOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
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
        document.body.style.overflow = '';
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = '';
    };
  }, [servicePanelRef]);

  // Animations
  const servicesPanelVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        duration: 0.3,
        ease: "easeOut",
        staggerChildren: 0.05,
        delayChildren: 0.1
      }
    },
    exit: { 
      opacity: 0,
      transition: { 
        duration: 0.2,
        ease: "easeIn"
      }
    }
  };

  const serviceItemVariants = {
    hidden: { y: 10, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.1
      }
    }
  };

  const mobileMenuVariants = {
    hidden: { x: "100%", opacity: 0 },
    visible: { 
      x: 0, 
      opacity: 1,
      transition: { 
        type: "spring", 
        stiffness: 50,
        damping: 15
      }
    },
    exit: { 
      x: "100%", 
      opacity: 0,
      transition: { 
        duration: 0.4,
        ease: "easeInOut"
      }
    }
  };

  return (
    <>
      {/* Main navbar - always visible at top */}
      <header className="fixed top-0 left-0 right-0 z-50">
        {/* Main navigation bar with gradient background */}
        <nav className="h-20 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 backdrop-blur-md shadow-lg px-6 lg:px-12 flex items-center justify-between">
          {/* Logo */}
          <div className="w-12 h-12 relative">
            <Link href="/">
              <Image 
                src="/Logo.png"
                alt="DevHexa Logo" 
                fill
                className="object-contain"
                priority
              />
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-10">
            {navItems.map((item) => (
              <div key={item.name} className="relative group">
                {item.hasDropdown ? (
                  <button
                    className={`group flex items-center text-gray-200 hover:text-teal-400 ${isServicesOpen && activeItem === item.name ? 'text-teal-400' : ''}`}
                    onClick={() => {
                      toggleServicesPanel();
                      setActiveItem(item.name);
                    }}
                  >
                    <span className="font-medium">{item.name}</span>
                    <FiChevronDown 
                      className={`ml-1 transition-transform ${isServicesOpen && activeItem === item.name ? 'rotate-180' : ''}`} 
                      size={16} 
                    />
                  </button>
                ) : (
                  <Link 
                    href={item.path}
                    className="font-medium text-gray-200 hover:text-teal-400 transition-colors"
                  >
                    {item.name}
                  </Link>
                )}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-teal-400 group-hover:w-full transition-all duration-300"></span>
              </div>
            ))}
          </div>
          
          {/* Contact button */}
          <Link 
            href="/contact"
            className="hidden lg:flex items-center justify-center px-5 py-2 bg-teal-600 text-white rounded hover:bg-teal-700 transition-colors ml-8"
          >
            Get in Touch
          </Link>
          
          {/* Mobile menu button */}
          <button 
            className="lg:hidden flex items-center justify-center"
            onClick={toggleMobileMenu}
            aria-label="Toggle Mobile Menu"
          >
            <div className={`burger ${isOpen ? 'active' : ''}`}>
              <div className="line bg-white"></div>
              <div className="line bg-white"></div>
              <div className="line bg-white"></div>
            </div>
          </button>
        </nav>
      </header>

      {/* Full-screen services panel */}
      <AnimatePresence>
        {isServicesOpen && isMounted && (
          <motion.div
            ref={servicePanelRef}
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={servicesPanelVariants}
            className="fixed inset-0 z-40 bg-gradient-to-br from-gray-900 to-teal-900/95 backdrop-blur-md text-white flex items-center justify-center"
          >
            {/* Close button */}
            <button 
              onClick={toggleServicesPanel}
              className="absolute top-6 right-6 w-10 h-10 rounded-full flex items-center justify-center bg-teal-600/30 hover:bg-teal-600/50 transition-colors"
              aria-label="Close Services Panel"
            >
              <IoClose size={24} />
            </button>
            
            <div className="container mx-auto h-full flex flex-col justify-center px-4 lg:px-12 py-4">
              <div className="text-center mb-8">
                <h2 className="text-3xl md:text-4xl font-bold mb-3">Our Services</h2>
                <p className="text-gray-300 max-w-2xl mx-auto">
                  Comprehensive digital solutions to help your business thrive
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-6">
                {serviceItems.map((service, index) => (
                  <motion.div
                    key={service.title}
                    variants={serviceItemVariants}
                    className="flex items-start group"
                  >
                    <span className="text-2xl mr-3 mt-1">{service.icon}</span>
                    <div>
                      <h3 className="text-lg font-semibold text-teal-400 flex items-center">
                        {service.title}
                        <FiArrowRight className="ml-2 opacity-0 group-hover:opacity-100 transform group-hover:translate-x-1 transition-all" size={14} />
                      </h3>
                      <p className="text-sm text-gray-300 mt-1">{service.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
              
              <div className="text-center mt-8">
                <Link
                  href="/services"
                  onClick={toggleServicesPanel}
                  className="inline-flex items-center justify-center px-6 py-3 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors"
                >
                  Explore All Services
                  <FiArrowRight className="ml-2" />
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile menu (slide in from right) */}
      <AnimatePresence>
        {isOpen && isMounted && (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={mobileMenuVariants}
            className="fixed top-0 right-0 bottom-0 w-full sm:w-80 bg-gray-900 z-50 shadow-xl flex flex-col"
          >
            <div className="flex justify-between items-center py-6 px-6 border-b border-gray-800">
              <div className="w-10 h-10 relative">
                <Image 
                  src="/Logo.png"
                  alt="DevHexa Logo" 
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              <button 
                onClick={toggleMobileMenu}
                className="w-8 h-8 flex items-center justify-center text-white"
              >
                <IoClose size={24} />
              </button>
            </div>
            
            <div className="flex-1 overflow-y-auto py-6 px-6">
              <nav className="flex flex-col space-y-5">
                {navItems.map((item) => (
                  <div key={item.name} className="border-b border-gray-800 pb-3">
                    {item.hasDropdown ? (
                      <>
                        <button 
                          className="flex items-center justify-between w-full text-left text-white font-medium"
                          onClick={() => {
                            toggleMobileMenu();
                            setTimeout(() => {
                              toggleServicesPanel();
                            }, 300);
                          }}
                        >
                          {item.name}
                          <FiChevronDown className="transition-transform" />
                        </button>
                      </>
                    ) : (
                      <Link 
                        href={item.path}
                        className="block text-white font-medium hover:text-teal-400"
                        onClick={toggleMobileMenu}
                      >
                        {item.name}
                      </Link>
                    )}
                  </div>
                ))}
              </nav>
            </div>
            
            <div className="px-6 py-4 bg-gray-800">
              <Link 
                href="/contact"
                className="block text-center text-white hover:text-teal-400 font-medium"
                onClick={toggleMobileMenu}
              >
                Get in Touch
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Burger menu styles */}
      <style jsx>{`
        .burger {
          width: 24px;
          height: 20px;
          position: relative;
          cursor: pointer;
        }
        
        .burger .line {
          width: 100%;
          height: 2px;
          position: absolute;
          transition: all 0.3s ease;
        }
        
        .burger .line:nth-child(1) {
          top: 0;
        }
        
        .burger .line:nth-child(2) {
          top: 50%;
          transform: translateY(-50%);
        }
        
        .burger .line:nth-child(3) {
          bottom: 0;
        }
        
        .burger.active .line:nth-child(1) {
          top: 50%;
          transform: translateY(-50%) rotate(45deg);
        }
        
        .burger.active .line:nth-child(2) {
          opacity: 0;
        }
        
        .burger.active .line:nth-child(3) {
          bottom: 50%;
          transform: translateY(50%) rotate(-45deg);
        }
      `}</style>
    </>
  );
};

export default NavbarVariant5; 