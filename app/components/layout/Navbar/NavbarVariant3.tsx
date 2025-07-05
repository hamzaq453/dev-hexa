"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { IoClose } from "react-icons/io5";
import { RiArrowRightLine } from "react-icons/ri";
import { MdOutlineApps } from "react-icons/md";
import { FiSend } from "react-icons/fi";

const NavbarVariant3 = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  
  useEffect(() => {
    setIsMounted(true);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    if (isServicesOpen) setIsServicesOpen(false);
  };

  const toggleServices = () => {
    setIsServicesOpen(!isServicesOpen);
  };

  // Navigation links
  const navItems = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "What we do", path: "/services" },
    { name: "Our Work", path: "/work" },
    { name: "Pricing", path: "/pricing" },
    { name: "Our Portfolio", path: "/portfolio" },
    // { name: "Contact Us", path: "/contact" },
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

  // Animations
  const menuVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { duration: 0.3 }
    },
    exit: { 
      opacity: 0,
      transition: { duration: 0.3 }
    }
  };

  const panelVariants = {
    hidden: { x: "-100%" },
    visible: { 
      x: 0,
      transition: { 
        type: "tween", 
        ease: "easeOut",
        duration: 0.4 
      }
    },
    exit: { 
      x: "-100%",
      transition: { 
        type: "tween",
        ease: "easeIn",
        duration: 0.3
      }
    }
  };

  const servicesPanelVariants = {
    hidden: { x: "-100%" },
    visible: { 
      x: 0,
      transition: { 
        type: "tween", 
        ease: "easeOut",
        duration: 0.4 
      }
    },
    exit: { 
      x: "-100%",
      transition: { 
        type: "tween",
        ease: "easeIn",
        duration: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { x: -20, opacity: 0 },
    visible: (i: number) => ({ 
      x: 0, 
      opacity: 1,
      transition: { 
        delay: i * 0.1,
        duration: 0.4
      }
    }),
    exit: { 
      x: -20, 
      opacity: 0,
      transition: { duration: 0.2 }
    }
  };

  return (
    <>
      {/* Minimalist top navbar */}
      <header className="fixed top-0 left-0 right-0 z-50">
        <nav className="h-20 bg-black flex items-center justify-between px-6 md:px-12">
          {/* Logo */}
          <div className="w-10 h-10 relative z-10">
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

          {/* Desktop navigation */}
          <div className="hidden md:flex items-center space-x-8 text-gray-300">
            {navItems.map((item, i) => (
              <div key={item.name} className="group">
                {item.name === "What we do" ? (
                  <button 
                    onClick={toggleServices}
                    className="text-sm uppercase tracking-wide hover:text-white transition-colors duration-300 py-2 px-1 flex items-center gap-2"
                  >
                    {item.name}
                    <MdOutlineApps />
                  </button>
                ) : (
                  <Link 
                    href={item.path}
                    className="text-sm uppercase tracking-wide hover:text-white transition-colors duration-300 py-2 px-1"
                  >
                    {item.name}
                  </Link>
                )}
                <div className="h-0.5 w-0 bg-purple-500 group-hover:w-full transition-all duration-300"></div>
              </div>
            ))}
          </div>

          {/* Contact button */}
          <Link 
            href="/contact"
            className="hidden md:flex items-center gap-2 bg-purple-600/20 hover:bg-purple-600/40 px-4 py-2 rounded text-white transition-all border border-purple-500/30 hover:border-purple-500/60"
          >
            <span>Contact</span>
            <FiSend className="animate-pulse" />
          </Link>

          {/* Mobile menu button */}
          <button 
            className="md:hidden text-white flex items-center justify-center"
            onClick={toggleMenu}
            aria-label="Toggle Mobile Menu"
          >
            <div className="w-6 h-6 relative">
              <span className={`absolute h-0.5 w-full bg-white transform transition-all duration-300 ${isOpen ? 'rotate-45 top-3' : 'top-1'}`}></span>
              <span className={`absolute h-0.5 w-full bg-white top-3 transition-all duration-200 ${isOpen ? 'opacity-0' : 'opacity-100'}`}></span>
              <span className={`absolute h-0.5 w-full bg-white transform transition-all duration-300 ${isOpen ? '-rotate-45 top-3' : 'top-5'}`}></span>
            </div>
          </button>
        </nav>
      </header>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {isOpen && isMounted && (
          <motion.div
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed inset-0 bg-black/95 z-40 md:hidden flex"
          >
            <motion.div
              variants={panelVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="w-full h-full pt-24 pb-10 px-8 overflow-y-auto"
            >
              <nav className="flex flex-col space-y-10">
                {navItems.map((item, i) => (
                  <motion.div
                    key={item.name}
                    custom={i}
                    variants={itemVariants}
                  >
                    {item.name === "What we do" ? (
                      <button 
                        onClick={toggleServices} 
                        className="text-2xl font-bold text-white flex items-center"
                      >
                        <span>{item.name}</span>
                        <RiArrowRightLine className="ml-2" />
                      </button>
                    ) : (
                      <Link 
                        href={item.path}
                        className="text-2xl font-bold text-white hover:text-purple-400 transition-colors"
                        onClick={toggleMenu}
                      >
                        {item.name}
                      </Link>
                    )}
                    <div className="h-px w-12 bg-purple-500 mt-4"></div>
                  </motion.div>
                ))}
              </nav>
              
              <div className="mt-12">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-purple-600/20 text-white py-2 px-4 hover:bg-purple-600/40 transition-all rounded"
                  onClick={toggleMenu}
                >
                  <span>Get in Touch</span>
                  <FiSend />
                </Link>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Services panel that slides in from the left (covers half screen) */}
      <AnimatePresence>
        {isServicesOpen && isMounted && (
          <motion.div
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 flex"
            onClick={() => setIsServicesOpen(false)}
          >
            <motion.div
              variants={servicesPanelVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="w-full md:w-1/2 h-full bg-gradient-to-b from-gray-900 to-black pt-24 pb-10 px-8 md:px-16 overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-center mb-10">
                <h2 className="text-3xl font-bold text-white">Our Services</h2>
                <button 
                  onClick={toggleServices}
                  className="w-10 h-10 rounded-full flex items-center justify-center border border-gray-700 hover:border-purple-500 hover:text-purple-500 text-white transition-colors"
                >
                  <IoClose size={24} />
                </button>
              </div>
              
              <div className="space-y-10">
                {serviceItems.map((service, i) => (
                  <motion.div
                    key={service}
                    custom={i}
                    variants={itemVariants}
                    className="group"
                  >
                    <Link
                      href="/services"
                      className="block"
                      onClick={toggleServices}
                    >
                      <div className="flex items-center gap-4 group-hover:gap-6 transition-all duration-300">
                        <div className="w-10 h-px bg-purple-500"></div>
                        <h3 className="text-xl text-white group-hover:text-purple-400 transition-colors">
                          {service}
                        </h3>
                      </div>
                      <p className="text-gray-400 mt-2 ml-14 text-sm">
                        Professional {service.toLowerCase()} for your business needs
                      </p>
                    </Link>
                  </motion.div>
                ))}
              </div>
              
              <div className="mt-12">
                <Link
                  href="/services"
                  className="inline-flex items-center gap-2 text-white hover:text-purple-400 transition-colors"
                  onClick={toggleServices}
                >
                  <span>View all services</span>
                  <RiArrowRightLine />
                </Link>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default NavbarVariant3; 