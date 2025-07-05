"use client";
import Link from "next/link";
import Image from "next/image";

const footerColumns = [
  {
    title: "Weebly Themes",
    links: ["Weebly Themes", "Pre-sale FAQs", "Submit a Ticket"],
  },
  {
    title: "Services",
    links: ["Services", "Theme Tweak"],
  },
  {
    title: "Showcase",
    links: ["Showcase", "Widgetkit", "Support"],
  },
  {
    title: "About Us",
    links: ["About Us", "Contact Us", "Affiliates", "Resources"],
  },
];

const socialLinks = [
  { name: "Facebook", icon: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
  ) },
  { name: "Twitter", icon: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53A4.48 4.48 0 0 0 22.4 1.64a9.09 9.09 0 0 1-2.88 1.1A4.52 4.52 0 0 0 16.11 0c-2.5 0-4.52 2.02-4.52 4.52 0 .35.04.7.11 1.03C7.69 5.4 4.07 3.7 1.64 1.15c-.38.65-.6 1.4-.6 2.2 0 1.52.77 2.86 1.95 3.65A4.48 4.48 0 0 1 .96 6v.06c0 2.13 1.52 3.9 3.54 4.3-.37.1-.76.16-1.16.16-.28 0-.55-.03-.81-.08.55 1.7 2.15 2.94 4.05 2.97A9.05 9.05 0 0 1 0 19.54c2.29 1.47 5.01 2.33 7.93 2.33 9.5 0 14.7-7.87 14.7-14.7 0-.22 0-.43-.02-.65A10.72 10.72 0 0 0 24 4.59a10.13 10.13 0 0 1-2.89.79z"/></svg>
  ) },
  { name: "RSS", icon: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path d="M4 11a9 9 0 0 1 9 9M4 4a16 16 0 0 1 16 16"/><circle cx="5" cy="19" r="1"/></svg>
  ) },
  { name: "Google", icon: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/></svg>
  ) },
  { name: "Flickr", icon: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><circle cx="6.5" cy="12.5" r="2.5"/><circle cx="17.5" cy="12.5" r="2.5"/></svg>
  ) },
];

const FooterVariant3 = () => (
  <footer className="w-full bg-background border-t border-primary-darkest text-foreground py-20 px-4 sm:px-8 lg:px-16">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:justify-between md:items-start gap-10 md:gap-6">
      {/* Logo and slogan */}
      <div className="flex flex-col items-start md:w-1/5 mb-8 md:mb-10">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-12 h-12 relative bg-primary/10 rounded-xl p-2 border border-primary/20 shadow-lg">
            <Image src="/Logo.png" alt="Logo" fill className="object-contain" priority />
          </div>
          <span className="text-2xl font-bold tracking-wider">LOGO</span>
        </div>
        <span className="text-sm text-foreground/60 tracking-widest font-medium">SOLOGAN COMPANY</span>
      </div>
      {/* Footer columns */}
      <div className="flex-1 grid grid-cols-2 sm:grid-cols-4 gap-6">
        {footerColumns.map((col, idx) => (
          <div key={idx} className="flex flex-col gap-1">
            {col.links.map(link => (
              <a key={link} href="#" className="uppercase text-xs font-semibold tracking-wider text-foreground/90 hover:text-primary transition-colors duration-200">
                {link}
              </a>
            ))}
          </div>
        ))}
      </div>
    </div>
    {/* Divider */}
    <div className="my-10 border-t border-foreground/10"></div>
    {/* Social icons */}
    <div className="flex justify-center gap-4 mb-6">
      {socialLinks.map((link, idx) => (
        <a key={link.name} href="#" className="w-10 h-10 rounded-full border border-foreground/30 flex items-center justify-center hover:bg-primary/10 hover:text-primary transition-colors duration-200">
          {link.icon}
        </a>
      ))}
    </div>
    {/* Copyright */}
    <div className="text-xs text-foreground/60 text-center">
      &copy; {new Date().getFullYear()} Copyright. All rights reserved.
    </div>
  </footer>
);

export default FooterVariant3; 