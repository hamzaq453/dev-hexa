"use client";

import AboutVariant2 from './components/home/aboutSection/AboutVariant2';
import LandingHeroMinimalDark from './components/home/landingSection/LandingHeroMinimalDark';
// import { TimelineDemo } from './components/home/portfolioSection/portfolioSection';
import { PortfolioSectionEnhanced } from './components/home/portfolioSection/portfolioSectionEnhanced';
import ServiceSection from './components/home/serviceSection/serviceSection';
// import TestimonialVariant1 from './components/home/testimonialSection/TestimonialVariant1';
import TestimonialVariant2 from './components/home/testimonialSection/TestimonialVariant2';
// import TestimonialVariant3 from './components/home/testimonialSection/TestimonialVariant3';
export default function Home() {
  return (
    <main className="relative">
      <LandingHeroMinimalDark />
      <AboutVariant2 />
      <ServiceSection />
      <PortfolioSectionEnhanced />
      {/* <TimelineDemo /> */}
      {/* <TestimonialVariant1 /> */}
      <TestimonialVariant2 />
      {/* <TestimonialVariant3/> */}
      
    </main>
  );
}
