import React from "react";
import CountUp from "./CountUp";

const stats = [
  { label: "Happy Clients", value: 120, color: "primary" },
  { label: "Years Experience", value: 8, color: "secondary" },
  { label: "Projects", value: 250, color: "tertiary" },
  { label: "Awards", value: 15, color: "primary" },
];

const colorMap = {
  primary: "from-primary/10 to-primary/30 border-primary/30",
  secondary: "from-secondary/10 to-secondary/30 border-secondary/30",
  tertiary: "from-tertiary/10 to-tertiary/30 border-tertiary/30",
};

const AboutVariant1: React.FC = () => {
  return (
    <section className="w-full py-20 bg-black text-white">
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-12 px-4 md:px-8">
        {/* Left: Heading & Paragraph */}
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our Story & Achievements
          </h2>
          <p className="text-lg md:text-xl text-white/80 max-w-xl mx-auto md:mx-0">
            We are passionate about delivering excellence. Our journey is marked by innovation, dedication, and a relentless pursuit of client satisfaction. Discover why so many trust us to bring their visions to life.
          </p>
        </div>
        {/* Right: Stats */}
        <div className="flex-1 grid grid-cols-2 gap-6 md:gap-8">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className={`flex flex-col items-center justify-center bg-gradient-to-br ${colorMap[stat.color as keyof typeof colorMap]} rounded-2xl p-6 shadow-lg border hover:scale-105 transition-transform duration-300 group`}
            >
              <div className="text-3xl md:text-4xl font-extrabold mb-2 group-hover:text-accent transition-colors">
                <CountUp end={stat.value} />
              </div>
              <div className="text-base md:text-lg text-white/80 mt-1 text-center font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutVariant1; 