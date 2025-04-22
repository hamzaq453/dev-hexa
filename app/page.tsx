import Navbar from "./components/Navbar";
import HeroSection from './components/HeroSection';

export default function Home() {
  return (
    <div className="bg-gray-900  min-h-screen">
     <Navbar/>
     <HeroSection />
    </div>
  );
}
