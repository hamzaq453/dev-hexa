import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import CustomCursor from "./components/CustomCursor/CustomCursor";
import CustomCursor1 from "./components/CustomCursor/CustomCursor1"; // Magnetic effect cursor
import CustomCursor2 from "./components/CustomCursor/CustomCursor2"; // Particle trail cursor
import CustomCursor3 from "./components/CustomCursor/CustomCursor3"; // Gradient trail cursor
import Navbar from "./components/layout/Navbar/Navbar";
import NavbarVariant1 from "./components/layout/Navbar/NavbarVariant1";
import NavbarVariant2 from "./components/layout/Navbar/NavbarVariant2";
import NavbarVariant3 from "./components/layout/Navbar/NavbarVariant3";
import NavbarVariant4 from "./components/layout/Navbar/NavbarVariant4";
import NavbarVariant5 from "./components/layout/Navbar/NavbarVariant5";
import NavbarVariant6 from "./components/layout/Navbar/NavbarVariant6";
import FooterVariant1 from "./components/layout/Footer/FooterVariant1";
import FooterVariant2 from "./components/layout/Footer/FooterVariant2";
import FooterVariant3 from "./components/layout/Footer/FooterVariant3";
import ContactSection from "./components/home/landingSection/ContactSection";
import NavbarVariant7 from "./components/layout/Navbar/NavbarVariant7";
import ConditionalContactSection from "./components/ConditionalContactSection";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "DevHexa",
  description: "DevHexa - Your Technology Partner",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* <CustomCursor /> */}
        {/* To use alternative cursors, replace the line above with one of these: */}
        {/* <CustomCursor1 /> */}
        <CustomCursor2 />
        {/* <CustomCursor3 /> */}
        
        {/* NAVBAR VARIANTS - Uncomment ONE at a time to test */}
        
        {/* Original Side Navbar */}
        {/* <Navbar /> */}
        
        {/* Variant 1: Side Navbar with Glass Morphism UI */}
        {/* <NavbarVariant1 /> */}
        
        {/* Variant 2: Top Navbar with Services Panel that slides down */}
        {/* <NavbarVariant2 /> */}
        
        {/* Variant 3: Top Navbar with Services Panel that slides from left */}
        {/* <NavbarVariant3 /> */}
        
        {/* Variant 4: Expandable Side Navbar with icons and hover effects */}
        {/* <NavbarVariant4 /> */}
        
        {/* Variant 5: Top Navbar with Fullscreen Services Panel */}
        {/* <NavbarVariant5 /> */}
        
        {/* Variant 6: Modern Top Navbar with Search Feature */}
        {/* <NavbarVariant6 /> */}
        <NavbarVariant7 />
        
        {/* Main content container for top navbar layout */}
        <main className="min-h-screen w-full">
          {children}
          <ConditionalContactSection />
          <FooterVariant3 />
        </main>
      </body>
    </html>
  );
}
