import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import CustomCursor from "./components/CustomCursor";
import CustomCursor1 from "./components/CustomCursor1"; // Magnetic effect cursor
import CustomCursor2 from "./components/CustomCursor2"; // Particle trail cursor
import CustomCursor3 from "./components/CustomCursor3"; // Gradient trail cursor
import Navbar from "./components/Navbar";

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
        {/* <CustomCursor2 /> */}
        <CustomCursor3 />
        <div className="flex">
          <Navbar />
          <main className="flex-1 lg:pl-16 xl:pl-20">{children}</main>
        </div>
      </body>
    </html>
  );
}
