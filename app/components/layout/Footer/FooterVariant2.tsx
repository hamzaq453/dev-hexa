"use client";
import Link from "next/link";
import Image from "next/image";

const links = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Contact", href: "/contact" },
];

const FooterVariant2 = () => (
  <footer className="w-full bg-background/95 border-t border-primary/20 text-foreground py-8 px-4 flex flex-col items-center">
    <Link href="/" className="flex items-center gap-2 mb-4">
      <div className="w-10 h-10 relative bg-primary/10 rounded-lg p-1.5 border border-primary/20">
        <Image src="/Logo.png" alt="DevHexa Logo" fill className="object-contain" priority />
      </div>
      <span className="text-lg font-bold text-foreground">DevHexa</span>
    </Link>
    <nav className="flex flex-wrap justify-center gap-4 mb-4">
      {links.map(link => (
        <Link key={link.name} href={link.href} className="text-sm text-foreground/70 hover:text-primary transition-colors duration-200">
          {link.name}
        </Link>
      ))}
    </nav>
    <div className="text-xs text-foreground/50 text-center">
      &copy; {new Date().getFullYear()} DevHexa. All rights reserved.
    </div>
  </footer>
);

export default FooterVariant2; 