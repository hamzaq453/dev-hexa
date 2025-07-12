"use client";

import { usePathname } from "next/navigation";
import ContactSection from "./home/landingSection/ContactSection";

export default function ConditionalContactSection() {
  const pathname = usePathname();
  
  // Don't render ContactSection on the contact page
  if (pathname === '/contact') {
    return null;
  }
  
  return <ContactSection />;
} 