import React from "react";
import CountUp from "./CountUp";

const stats = [
  { label: "Clients Worldwide", value: 180, color: "primary" },
  { label: "Years in Business", value: 10, color: "secondary" },
  { label: "Projects Delivered", value: 320, color: "tertiary" },
  { label: "Industry Awards", value: 22, color: "primary" },
];

const colorMap = {
  primary: "from-primary/10 to-primary/30 border-primary/30",
  secondary: "from-secondary/10 to-secondary/30 border-secondary/30",
  tertiary: "from-tertiary/10 to-tertiary/30 border-tertiary/30",
};

const AboutVariant3: React.FC = () => {
  return (
    <section className="relative w-full py-24 bg-black overflow-hidden">
      {/* Background image with overlay */}
      {/* <div className="absolute inset-0 z-0">
        <img
          src="/about/about-bg.jpg"
          alt="About background"
          className="w-full h-full object-cover object-center opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-primary/10 to-black/90" />
      </div> */}
      <div className="container mx-auto relative z-10 px-4 md:px-8 flex flex-col items-center">
        {/* Main Card */}
        <div className="w-full max-w-3xl bg-gradient-to-br from-white/10 to-primary/10 rounded-3xl shadow-2xl p-8 md:p-14 text-center border-2 border-primary/30 backdrop-blur-xl animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white drop-shadow-lg">
            Who We Are
          </h2>
          <p className="text-lg md:text-xl text-white/80 mb-10 max-w-2xl mx-auto">
            We are a global team of innovators, creators, and problem-solvers. Our mission is to empower businesses with cutting-edge technology and creative solutions. Every milestone is a testament to our passion and expertise.
          </p>
          {/* Floating Stats */}
          <div className="flex flex-wrap justify-center gap-6 mt-4">
            {stats.map((stat, i) => (
              <div
                key={stat.label}
                className={`relative flex flex-col items-center bg-gradient-to-br ${colorMap[stat.color as keyof typeof colorMap]} rounded-2xl px-6 py-6 min-w-[140px] shadow-lg border hover:border-accent/60 transition-all duration-300 group animate-float`}
                style={{ animationDelay: `${i * 0.15}s` }}
              >
                <div className="absolute -inset-1 rounded-2xl border-2 border-white/10 blur-md opacity-30 group-hover:opacity-60 group-hover:blur-lg transition-all duration-300 pointer-events-none" />
                <div className="text-2xl md:text-3xl font-extrabold mb-1 group-hover:text-accent transition-colors">
                  <CountUp end={stat.value} />
                </div>
                <div className="text-base md:text-lg text-white/80 mt-1 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Subtle floating animation keyframes */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .animate-float { animation: float 3s ease-in-out infinite; }
        .animate-fade-in { animation: fadeIn 1.2s ease; }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
};

export default AboutVariant3; 