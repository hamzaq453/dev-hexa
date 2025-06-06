import Navbar from "./components/Navbar";
import HeroSection from './components/HeroSection';
import ServicesSection from './components/ServicesSection';
import ProjectsShowcase from './components/ProjectsShowcase';
import AttitudeSection from './components/AttitudeSection';
import ContactSection from './components/ContactSection';

export default function Home() {
  return (
    <div className="bg-gray-900  min-h-screen">
     <Navbar/>
     <HeroSection /> 
     <ProjectsShowcase />
     <ServicesSection />
     <AttitudeSection />
     <ContactSection />
    </div>
  );
}
