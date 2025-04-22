// components/Navbar.jsx
'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled 
        ? 'backdrop-blur-sm shadow-md py-2' 
        : 'py-4'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-12">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <Image
                src="/Logo.png"
                alt="DevHexa Logo"
                width={200}
                height={200}
                className="h-14 w-28"
                priority
              />
            </Link>
          </div>
          
          {/* Desktop Navigation - Centered */}
          <div className="hidden md:flex flex-1 justify-center items-center space-x-8 px-8">
            <NavLink href="/services" scrolled={scrolled}>Services</NavLink>
            <NavLink href="/portfolio" scrolled={scrolled}>Portfolio</NavLink>
            <NavLink href="/about" scrolled={scrolled}>About</NavLink>
            <NavLink href="/blog" scrolled={scrolled}>Blog</NavLink>
          </div>

          {/* Contact Button */}
          <div className="hidden md:block flex-shrink-0">
            <Link href="/contact" className="bg-gradient-to-r from-[#035D9D] to-[#03388F] text-white px-5 py-2 rounded-full font-medium hover:from-[#03388F] hover:to-[#053969] transition-all">
              Contact Us
            </Link>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`inline-flex items-center justify-center p-2 rounded-md ${
                scrolled ? 'text-[#053969]' : 'text-white'
              } hover:text-[#035D9D] focus:outline-none`}
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {!isMenuOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-[#101D26] rounded-b-lg backdrop-blur-lg shadow-lg">
            <MobileNavLink href="/services">Services</MobileNavLink>
            <MobileNavLink href="/portfolio">Portfolio</MobileNavLink>
            <MobileNavLink href="/about">About</MobileNavLink>
            <MobileNavLink href="/blog">Blog</MobileNavLink>
            <Link 
              href="/contact" 
              className="block w-full text-center bg-gradient-to-r from-[#035D9D] to-[#03388F] text-white px-3 py-2 rounded-full font-medium mt-4 hover:from-[#03388F] hover:to-[#053969] transition-all"
            >
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  scrolled?: boolean;
}

// Navigation Link Component for Desktop
const NavLink = ({ href, children, scrolled }: NavLinkProps) => {
  return (
    <Link 
      href={href}
      className={`${
        scrolled ? 'text-[#053969] hover:text-[#035D9D]' : 'text-white hover:text-[#035D9D]'
      } relative font-medium transition-colors duration-200 group`}
    >
      {children}
      <span className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-[#035D9D] to-[#03388F] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
    </Link>
  );
};

// Navigation Link Component for Mobile
const MobileNavLink = ({ href, children }: Omit<NavLinkProps, 'scrolled'>) => {
  return (
    <Link 
      href={href}
      className="block text-white hover:bg-[#053969] px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
    >
      {children}
    </Link>
  );
};

export default Navbar;