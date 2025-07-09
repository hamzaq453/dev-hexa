import React from 'react';
import AboutHero from '../components/about/aboutHero/AboutHero';
import AboutHeroVariant2 from '../components/about/aboutHero/AboutHeroVariant2';
import AboutHeroVariant3 from '../components/about/aboutHero/AboutHeroVariant3';
import AboutHeroVariant4 from '../components/about/aboutHero/AboutHeroVariant4'; // Clean & Simple variant
import AboutHeroVariant5 from '../components/about/aboutHero/AboutHeroVariant5'; // Exact layout match
import WhyChooseUs1 from '../components/about/WhyChooseUs/WhyChooseus1';
import OurValues from '../components/about/OurValues/OurValues';

export default function AboutPage() {
  return (
    <div className="w-full">
      {/* Original variant with 3 images */}
      {/* <AboutHero /> */}
      
      {/* Minimal variant with 1 image */}
      {/* <AboutHeroVariant2 /> */}
      
      {/* Ultra-minimal variant with no images - Pure typography */}
      <AboutHeroVariant3 />
      
      {/* Why Choose Us Section - New Design */}
      <WhyChooseUs1 />
      
      {/* Our Values Section - Timeline Design */}
      <OurValues />
      
      {/* Clean & Simple variant with 1 image - Minimal content */}
      {/* <AboutHeroVariant4 /> */}
      
      {/* Exact layout match - Text top, 3 images in grid below */}
      {/* <AboutHeroVariant5 /> */}
    </div>
  );
}
