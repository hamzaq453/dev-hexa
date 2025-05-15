import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import CustomCursor from "./components/CustomCursor";
import CustomCursor1 from "./components/CustomCursor1"; // Magnetic effect cursor
import CustomCursor2 from "./components/CustomCursor2"; // Particle trail cursor
import CustomCursor3 from "./components/CustomCursor3"; // Gradient trail cursor
import Navbar from "./components/Navbar";
import NavbarVariant1 from "./components/NavbarVariant1";
import NavbarVariant2 from "./components/NavbarVariant2";
import NavbarVariant3 from "./components/NavbarVariant3";
import NavbarVariant4 from "./components/NavbarVariant4";
import NavbarVariant5 from "./components/NavbarVariant5";
import NavbarVariant6 from "./components/NavbarVariant6";

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
        <div className="flex">
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
          <NavbarVariant6 />
          
          {/* Adjust padding for side navbars (Navbar & NavbarVariant1 & NavbarVariant4) */}
          {/* <main className="flex-1 lg:pl-20">{children}</main> */}
          
          {/* Use this main container for top navbars (NavbarVariant2, NavbarVariant3, NavbarVariant5, NavbarVariant6) */}
          <main className="flex-1 pt-20">{children}</main>
        </div>
      </body>
    </html>
  );
}
