"use client";
import Image from "next/image";
import Marquee from "react-fast-marquee";

const CompanyLogos = () => {
  const logos = [
  
    { src: "/Logos/Hexaflow Logo.png", alt: "Hexaflow" },
    { src: "/Logos/Infinity Logo 1.png", alt: "Infinity" },
    // { src: "/Logos/LA POLIE Logo.png", alt: "LA POLIE" },
    { src: "/Logos/Oppizi Logo.png", alt: "Oppizi" },
    { src: "/Logos/FI Logo.png", alt: "FI Marketing Agency" },
    { src: "/Logos/Pest Logo.png", alt: "Pest" },
    { src: "/Logos/Logo Malibu.png", alt: "Pink Malibu" },
    { src: "/Logos/Rodent logo.png", alt: "Rodent" },
    { src: "/Logos/Vodafone Logo.png", alt: "Vodafone" },
    // { src: "/Logos/Zenuni Logo.webp", alt: "Zenuni" },
  ];

  return (
    <section className="py-16 px-4 sm:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Trusted by Leading Companies
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            We're proud to work with innovative companies that are shaping the future
          </p>
        </div>

        {/* Marquee Container */}
        <div className="relative">
          {/* Glassy Background */}
          <div className="absolute inset-0 bg-gradient-to-r from-background/20 via-background/10 to-background/20 backdrop-blur-sm rounded-2xl border border-foreground/10 shadow-2xl"></div>
          
          {/* Marquee */}
          <div className="relative z-10 py-8">
            <Marquee
              speed={50}
              gradient={false}
              pauseOnHover={true}
              className="overflow-hidden"
            >
              {logos.map((logo, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center mx-5 px-2 py-1 h-24 w-44 relative group"
                >
                  {/* Glassy Logo Container */}
                  <div className="relative w-full h-full flex items-center justify-center bg-white/10 backdrop-blur-md rounded-xl border border-white/10 shadow-lg px-1 group-hover:bg-primary/10 transition-all duration-300 group-hover:scale-105 group-hover:shadow-xl">
                    {/* Logo */}
                    <Image
                      src={logo.src}
                      alt={logo.alt}
                      width={200}
                      height={150}
                      className="object-contain  transition-all duration-300"
                    />
                    
                    {/* Subtle glow effect */}
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary/5 via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </div>
              ))}
            </Marquee>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyLogos;
