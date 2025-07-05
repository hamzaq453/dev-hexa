"use client";

import AboutVariant2 from './components/home/aboutSection/AboutVariant2';
import LandingHeroMinimalDark from './components/home/landingSection/LandingHeroMinimalDark';
// import { TimelineDemo } from './components/home/portfolioSection/portfolioSection';
import { PortfolioSectionEnhanced } from './components/home/portfolioSection/portfolioSectionEnhanced';
import ServiceSection from './components/home/serviceSection/serviceSection';
export default function Home() {
  return (
    <main className="relative">
      <LandingHeroMinimalDark />
      <AboutVariant2 />
      <ServiceSection />
      <PortfolioSectionEnhanced />
      {/* <TimelineDemo /> */}
    </main>
  );
}
