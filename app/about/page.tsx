import React from 'react';
import AboutHeroVariant3 from '../components/about/aboutHero/AboutHeroVariant3';
import WhyChooseUs1 from '../components/about/WhyChooseUs/WhyChooseus1';
import OurValues from '../components/about/OurValues/OurValues';
import Team from '../components/about/aboutTeam/Team';

export default function AboutPage() {
  return (
    <div className="w-full">
     
      <AboutHeroVariant3 />
      
      <WhyChooseUs1 />
      
      <OurValues />
      
      <Team />
    </div>
  );
}
