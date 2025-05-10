"use client";

import { useState } from 'react';
import LandingHeroMinimal from './components/LandingHeroMinimal';
import LandingHeroMinimalDark from './components/LandingHeroMinimalDark';

export default function Home() {
  const [selectedHero, setSelectedHero] = useState("minimalDark");

  const renderSelectedHero = () => {
    switch (selectedHero) {
      case "minimal":
        return <LandingHeroMinimal />;
      case "minimalDark":
        return <LandingHeroMinimalDark />;
      default:
        return <LandingHeroMinimal />;
    }
  };

  return (
    <main className="relative">
      {renderSelectedHero()}
      
      {/* Hero selector */}
      <div className="fixed bottom-0 left-0 right-0 bg-black/80 backdrop-blur-sm p-3 flex justify-center items-center z-50">
        <div className="flex flex-wrap gap-2 justify-center">
          <button 
            onClick={() => setSelectedHero("minimal")}
            className={`px-3 py-1 text-xs rounded-full ${selectedHero === "minimal" ? "bg-[#FF8225] text-white" : "bg-white/10 text-white/70"}`}
          >
            Minimal
          </button>
          <button 
            onClick={() => setSelectedHero("minimalDark")}
            className={`px-3 py-1 text-xs rounded-full ${selectedHero === "minimalDark" ? "bg-[#FF8225] text-white" : "bg-white/10 text-white/70"}`}
          >
            Minimal Dark
          </button>
        </div>
      </div>
    </main>
  );
}
