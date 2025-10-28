"use client";
import Link from "next/link";
import Image from "next/image";
import { getAllServices } from "@/lib/utils/serviceLoader";

const FooterVariant3 = () => {
  const services = getAllServices();
  
  const footerColumns = [
    {
      title: "Navigation",
      links: [
        { name: "Home", path: "/" },
        { name: "About Us", path: "/about" },
        { name: "Services", path: "/services" },
        { name: "Contact", path: "/contact" }
      ],
    },
    {
      title: "Services",
      links: services.map(service => ({
        name: service.name,
        path: `/services/${service.id}`
      })),
    },
  ];

  return (
  <footer className="w-full bg-background border-t border-primary-darkest text-foreground py-20 px-4 sm:px-8 lg:px-16">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:justify-between md:items-start gap-10 md:gap-6">
      {/* Logo and slogan */}
      <div className="flex flex-col items-center md:items-start md:w-1/3 mb-8 md:mb-0">
        <Image
          src="/Logo.png"
          alt="DevHexa Logo"
          height={120}
          width={120}
          className="mb-4"
          priority
        />
        <div className="text-sm text-foreground/70 text-center md:text-left font-medium leading-relaxed max-w-xs">
          Your trusted technology partner for digital transformation.
        </div>
      </div>
      {/* Footer columns */}
      <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-8">
        {footerColumns.map((col, idx) => (
          <div key={idx} className="flex flex-col gap-3">
            <h3 className="text-sm font-semibold text-foreground/80 uppercase tracking-wider mb-2">
              {col.title}
            </h3>
            <div className="flex flex-col gap-2">
              {col.links.map((link) => (
                <Link
                  key={link.name}
                  href={link.path}
                  className="text-sm font-medium text-foreground/70 hover:text-primary transition-colors duration-200"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
    {/* Divider */}
    <div className="mt-12 mb-6 border-t border-foreground/10"></div>
    {/* Social icons - commented out for now */}
    {/* <div className="flex justify-center gap-6 mb-8">
      {socialLinks.map((link, idx) => (
        <a
          key={link.name}
          href="#"
          className="w-12 h-12 rounded-full bg-foreground/5 border border-foreground/10 flex items-center justify-center hover:bg-primary/10 hover:text-primary hover:border-primary/20 transition-all duration-300 group"
          aria-label={link.name}
        >
          <div className="group-hover:scale-110 transition-transform duration-300">
            {link.icon}
          </div>
        </a>
      ))}
    </div> */}
    {/* Copyright */}
    <div className="text-sm text-foreground/60 text-center font-medium">
      &copy; {new Date().getFullYear()} DevHexa. All rights reserved.
    </div>
  </footer>
  );
};

export default FooterVariant3;
