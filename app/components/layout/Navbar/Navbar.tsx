"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { FiMenu } from "react-icons/fi";
import { IoClose } from "react-icons/io5";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [isDesktop, setIsDesktop] = useState(true);
  const [isHovering, setIsHovering] = useState(false);
  const email = "contact@devhexa.com"; // Replace with your actual email

  useEffect(() => {
    setIsMounted(true);
    const checkDesktop = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };
    
    // Initial check
    checkDesktop();
    
    // Add resize listener
    window.addEventListener("resize", checkDesktop);
    
    // Cleanup
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

  // Animation variants for menu
  const desktopVariants = {
    hidden: { x: "-100%" },
    visible: { x: 0 },
    exit: { x: "-100%" },
  };

  const mobileVariants = {
    hidden: { y: "-100%" },
    visible: { y: 0 },
    exit: { y: "-100%" },
  };

  // Door opening animation for first part (black panel)
  const firstDoorVariants = {
    hidden: { x: "-100%", opacity: 1 },
    visible: { 
      x: 0, 
      opacity: 1, 
      transition: { 
        type: "spring", 
        stiffness: 50,
        damping: 20,
        duration: 0.6
      }
    },
    exit: { 
      x: "-100%", 
      opacity: 1,
      transition: { 
        type: "tween",
        ease: "easeInOut",
        duration: 0.9
      }
    }
  };

  // Door opening animation for second part (red panel)
  const secondDoorVariants = {
    hidden: { x: "-100%", opacity: 1 },
    visible: { 
      x: 0, 
      opacity: 1, 
      transition: { 
        type: "spring", 
        stiffness: 45,  // Slightly lower stiffness for smoother motion
        damping: 18,    // Slightly lower damping for smoother motion
        delay: 0.15,    // Small delay after first door starts
        duration: 0.55  // Slightly faster than first door but not too fast
      }
    },
    exit: { 
      x: "-150%", 
      opacity: 1,
      transition: { 
        type: "tween",
        ease: "easeInOut", 
        duration: 0.6, // Slightly faster exit than first door
        delay: 0.07     // Small delay after first door starts closing
      }
    }
  };

  // Service list animation as a whole unit
  const serviceListVariants = {
    hidden: { x: "100vw", opacity: 0 },  // Start completely off-screen to the right
    visible: { 
      x: 0,  // Move to normal position
      opacity: 1,
      transition: {
        type: "tween",
        ease: "easeOut",
        delay: 0.2,  // Increased delay to wait for second door to become visible
        duration: 0.4
      }
    },
    exit: { 
      x: "100vw",  // Exit completely off-screen to the right
      opacity: 0,
      transition: {
        type: "tween",
        ease: "easeOut", 
        duration: 0.35,
        delay: 0     // Start exiting immediately when close is triggered
      }
    }
  };

  return (
    <>
      {/* Large screen navbar */}
      <div className="hidden lg:flex flex-col fixed left-0 top-0 h-screen w-20 bg-black text-white z-40 items-center py-1">
        {/* Top section with logo */}
        <div className="flex-none w-12 h-12 relative mt-3">
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

        {/* Spacer that pushes content apart */}
        <div className="flex-grow"></div>

        {/* Vertical email at bottom */}
        <div className="flex-none mb-1">
          <a
            href={`mailto:${email}`}
            className="email-vertical text-base text-gray-400 hover:text-white transition-colors duration-300 block"
          >
            {email}
          </a>
        </div>
      </div>

      {/* Center toggle button - positioned at screen center but still part of navbar */}
      <div
        className="hidden lg:block fixed left-5 top-1/2 transform -translate-y-1/2 z-50"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        <div className="relative h-16 w-full flex justify-center">
          <button 
            onClick={toggleNavbar}
            className="flex items-center gap-1 justify-center w-10 h-10 focus:outline-none"
            aria-label="Toggle Navigation"
          >
            <div className="w-0.5 h-14 bg-white inline-block"></div>
            <div className="w-0.5 h-14 bg-white inline-block"></div>
          </button>
          
          {/* Menu text that appears on hover - positioned above the lines */}
          <AnimatePresence>
            {isHovering && (
              <motion.div 
                initial={{ y: "50%", opacity: 0 }}
                animate={{ y: "-50%", opacity: 1 }}
                exit={{ y: "50%", opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="absolute top-[-45] left-1/2 transform -translate-x-1/2"
              >
                <div className="menu-vertical text-xl text-white tracking-wide">
                  MENU
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Small screen navbar */}
      <div className="lg:hidden fixed top-0 left-0 right-0 h-16 bg-black text-white z-40 flex items-center justify-between px-4">
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
          
        {/* Toggle button (two horizontal lines) */}
          <button 
          onClick={toggleNavbar} 
          className="flex flex-col items-center justify-center w-10 h-10 focus:outline-none ml-auto"
          aria-label="Toggle Navigation"
        >
          {isOpen ? <IoClose size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

      {/* Full screen menu for large screens - door opening effect */}
      <AnimatePresence>
        {isOpen && isMounted && isDesktop && (
          <div className="fixed inset-0 z-30 overflow-hidden">
            {/* First door (30% width) */}
            <motion.div
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={firstDoorVariants}
              className="fixed top-0 left-20 h-screen w-[30%] bg-black text-white z-35 origin-left"
              style={{ 
                transformStyle: "preserve-3d",
                perspective: "1000px",
                perspectiveOrigin: "left center"
              }}
            >
              <nav className="flex flex-col justify-center h-full pl-20 relative">
                <div className="space-y-5">
                  {navItems.map((item) => (
                    <div
                      key={item.name}
                      className="w-full"
                    >
                      <Link 
                        href={item.path}
                        className="text-2xl font-bold hover:text-gray-400 transition-colors"
                        onClick={toggleNavbar}
                      >
                        {item.name}
                      </Link>
                    </div>
                  ))}
                </div>
                <div className="absolute right-0 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[1px] h-72 bg-gray-500">
                </div>
              </nav>
            </motion.div>

            {/* Second door (70% width) */}
            <motion.div 
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={secondDoorVariants}
              className="fixed top-0 left-[calc(20px+30%)] h-screen w-[70%] bg-black z-30 origin-left"
              style={{ 
                transformStyle: "preserve-3d",
                perspective: "1000px",
                perspectiveOrigin: "left center"
              }}
              onClick={toggleNavbar}
            >
              {/* Services list that animates as a whole unit */}
            <motion.div 
                className="pl-28 pt-36 overflow-hidden"
                variants={serviceListVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                <div className="flex flex-col space-y-4">
                  {serviceItems.map((service) => (
                    <div
                      key={service}
                      className="text-2xl font-normal text-white hover:text-gray-300 transition-colors cursor-pointer"
                    >
                      {service}
                    </div>
              ))}
            </div>
              </motion.div>
            </motion.div>
        </div>
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
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="fixed inset-0 bg-black text-white z-30 flex items-center justify-center"
          >
            <button 
              onClick={toggleNavbar} 
              className="absolute top-8 right-8 focus:outline-none"
              aria-label="Close Navigation"
            >
              <IoClose size={32} />
            </button>
            
            <nav className="flex flex-col items-center space-y-8">
              {navItems.map((item) => (
                <div
                  key={item.name}
                  className="overflow-hidden"
                >
              <Link 
                    href={item.path}
                    className="text-3xl font-bold hover:text-gray-400 transition-colors"
                    onClick={toggleNavbar}
                  >
                    {item.name}
              </Link>
                </div>
              ))}
            </nav>
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
        
        .menu-vertical {
          writing-mode: vertical-lr;
          transform: rotate(180deg);
          display: block;
          letter-spacing: 0.1em;
        }
      `}</style>
    </>
  );
};

export default Navbar; 
