"use client";

import LandingHeroMinimalDark from './components/home/landingSection/LandingHeroMinimalDark';
import ServiceSection from './components/home/serviceSection/serviceSection';
export default function Home() {
  return (
    <main className="relative">
      <LandingHeroMinimalDark />
      <ServiceSection />
    </main>
  );
}
