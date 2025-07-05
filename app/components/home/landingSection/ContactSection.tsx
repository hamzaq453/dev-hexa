"use client";
import Link from "next/link";

const ContactSection = () => (
  <section className="w-full py-24 px-4 sm:px-8 relative overflow-hidden bg-gray-300 text-black">
    {/* Background gradient and grid overlay */}
    {/* <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-primary/10">
    </div>
    <div
      className="absolute inset-0 opacity-10"
      style={{
        backgroundImage: `linear-gradient(to right, var(--primary) 1px, transparent 1px),
                       linear-gradient(to bottom, var(--primary) 1px, transparent 1px)`,
        backgroundSize: "40px 40px",
      }}
    >
      
    </div> */}

    <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 md:gap-0 relative z-10">
      {/* Left: Heard Enough */}
      <div className="w-full md:w-1/4 flex justify-start mb-8 md:mb-0">
        <span className="text-xs sm:text-base font-medium tracking-wide flex items-end gap-1 text-black">
          HEARD
          <br />
          ENOUGH?
          <span className="ml-1 text-xl font-black">&rarr;</span>
        </span>
      </div>
      {/* Center: Contact Us */}
      <div className="w-full md:w-2/4 flex flex-col items-center md:items-center text-center">
        <h2
          className="text-3xl sm:text-5xl md:text-6xl font-bold mb-2"
          style={{ fontFamily: "inherit" }}
        >
          Contact <span className="font-normal">us</span>
        </h2>
        <div className="w-24 sm:w-40 h-1 bg-yellow-400 mx-auto rounded-full" />
      </div>
      {/* Right: Arrow Button */}
      <div className="w-full md:w-1/4 flex justify-end mt-8 md:mt-0">
        <Link
          href="/contact"
          className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-yellow-400 hover:bg-primary-dark transition-colors duration-200 shadow-lg"
        >
          <svg
            className="w-7 h-7 text-black"
            fill="none"
            stroke="currentColor"
            strokeWidth={2.5}
            viewBox="0 0 24 24"
          >
            <path d="M5 12h14" />
            <path d="m12 5 7 7-7 7" />
          </svg>
        </Link>
      </div>
    </div>
  </section>
);

export default ContactSection;
