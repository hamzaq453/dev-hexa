import Navbar from "./components/Navbar";
import HeroSection from './components/HeroSection';
import HeroSection2 from './components/HeroSection2';
import ServicesSection from './components/ServicesSection';
import ProjectsShowcase from './components/ProjectsShowcase';

export default function Home() {
  return (
    <div className="bg-gray-900  min-h-screen">
     <Navbar/>
     <HeroSection /> 
     {/* <HeroSection2 /> */}
     <ProjectsShowcase />
     <ServicesSection />
    </div>
  );
}
