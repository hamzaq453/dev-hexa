"use client";

import AboutVariant2 from './components/home/aboutSection/AboutVariant2';
import LandingHeroMinimalDark from './components/home/LandingHeroMinimalDark';
import { PortfolioSectionEnhanced } from './components/home/portfolioSectionEnhanced';
import ServiceSection from './components/home/serviceSection';
import TestimonialVariant2 from './components/home/TestimonialVariant2';
import CompanyLogos from './components/home/CompanyLogos';
export default function Home() {
  return (
    <main className="relative">
      <LandingHeroMinimalDark />
      <CompanyLogos />
      <AboutVariant2 />
      <ServiceSection />
      <PortfolioSectionEnhanced />
      
      <TestimonialVariant2 />  
      
    </main>
  );
}
