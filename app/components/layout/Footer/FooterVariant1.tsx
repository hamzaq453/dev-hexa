"use client";
import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Contact", href: "/contact" },
];

const socialLinks = [
  { name: "Twitter", href: "https://twitter.com/", icon: (
    <svg fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5"><path d="M22.46 6c-.77.35-1.6.59-2.47.7a4.3 4.3 0 0 0 1.88-2.37 8.59 8.59 0 0 1-2.72 1.04A4.28 4.28 0 0 0 16.11 4c-2.37 0-4.29 1.92-4.29 4.29 0 .34.04.67.11.99C7.69 9.13 4.07 7.38 1.64 4.7c-.37.64-.58 1.39-.58 2.19 0 1.51.77 2.84 1.95 3.62-.72-.02-1.39-.22-1.98-.55v.06c0 2.11 1.5 3.87 3.5 4.27-.36.1-.74.16-1.13.16-.28 0-.54-.03-.8-.08.54 1.7 2.12 2.94 3.99 2.97A8.6 8.6 0 0 1 2 19.54c-.32 0-.63-.02-.94-.06A12.13 12.13 0 0 0 8.29 21.5c7.55 0 11.68-6.26 11.68-11.68 0-.18-.01-.36-.02-.54A8.18 8.18 0 0 0 22.46 6z"/></svg>
  ) },
  { name: "LinkedIn", href: "https://linkedin.com/", icon: (
    <svg fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5"><path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.28c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.78 1.75 1.75-.78 1.75-1.75 1.75zm13.5 11.28h-3v-5.6c0-1.34-.03-3.07-1.87-3.07-1.87 0-2.16 1.46-2.16 2.97v5.7h-3v-10h2.88v1.36h.04c.4-.75 1.38-1.54 2.84-1.54 3.04 0 3.6 2 3.6 4.59v5.59z"/></svg>
  ) },
  { name: "GitHub", href: "https://github.com/", icon: (
    <svg fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.387.6.113.82-.262.82-.582 0-.288-.012-1.243-.018-2.25-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.729.083-.729 1.205.085 1.84 1.237 1.84 1.237 1.07 1.834 2.807 1.304 3.492.997.108-.775.418-1.305.762-1.606-2.665-.304-5.466-1.332-5.466-5.93 0-1.31.468-2.38 1.236-3.22-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.3 1.23a11.5 11.5 0 0 1 3.003-.404c1.02.005 2.047.138 3.003.404 2.29-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.873.12 3.176.77.84 1.235 1.91 1.235 3.22 0 4.61-2.803 5.624-5.475 5.921.43.37.823 1.102.823 2.222 0 1.606-.015 2.898-.015 3.293 0 .322.216.699.825.58C20.565 21.796 24 17.297 24 12c0-6.63-5.373-12-12-12z"/></svg>
  ) },
];

const FooterVariant1 = () => (
  <footer className="w-full bg-background/90 backdrop-blur-xl border-t border-primary/20 text-foreground pt-12 pb-6 px-4 sm:px-8 lg:px-16">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:justify-between md:items-start gap-10 md:gap-6">
      {/* Logo and tagline */}
      <div className="flex flex-col items-start gap-4 md:w-1/3">
        <Link href="/" className="flex items-center gap-3">
          <div className="w-12 h-12 relative bg-primary/10 rounded-xl p-2 border border-primary/20 shadow-lg">
            <Image src="/Logo.png" alt="DevHexa Logo" fill className="object-contain" priority />
          </div>
          <span className="text-xl font-bold text-foreground">DevHexa</span>
        </Link>
        <p className="text-sm text-foreground/70 max-w-xs">
          Your technology partner for digital solutions, branding, and innovation.
        </p>
        <div className="flex gap-3 mt-2">
          {socialLinks.map(link => (
            <a key={link.name} href={link.href} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors duration-200">
              {link.icon}
            </a>
          ))}
        </div>
      </div>
      {/* Navigation */}
      <div className="flex flex-col gap-2 md:w-1/3">
        <span className="text-lg font-semibold mb-2 text-primary">Quick Links</span>
        <nav className="flex flex-col gap-1">
          {navLinks.map(link => (
            <Link key={link.name} href={link.href} className="hover:text-primary transition-colors duration-200 text-foreground/80 text-sm">
              {link.name}
            </Link>
          ))}
        </nav>
      </div>
      {/* Contact Info */}
      <div className="flex flex-col gap-2 md:w-1/3">
        <span className="text-lg font-semibold mb-2 text-primary">Contact</span>
        <span className="text-sm text-foreground/80">Email: <a href="mailto:info@devhexa.com" className="hover:text-primary">info@devhexa.com</a></span>
        <span className="text-sm text-foreground/80">Phone: <a href="tel:+1234567890" className="hover:text-primary">+1 234 567 890</a></span>
        <span className="text-sm text-foreground/80">Location: Remote / Worldwide</span>
      </div>
    </div>
    <div className="mt-10 border-t border-primary/10 pt-6 text-center text-xs text-foreground/60">
      &copy; {new Date().getFullYear()} DevHexa. All rights reserved.
    </div>
  </footer>
);

export default FooterVariant1; 