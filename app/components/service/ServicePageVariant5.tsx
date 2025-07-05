"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { 
  FaRobot, 
  FaCog, 
  FaBrain, 
  FaChartLine, 
  FaShieldAlt, 
  FaUsers, 
  FaClock, 
  FaAward,
  FaPython,
  FaReact,
  FaAws,
  FaGoogle,
  FaMicrosoft,
  FaArrowRight,
  FaCheckCircle
} from "react-icons/fa";
import { 
  SiTensorflow, 
  SiPytorch, 
  SiOpenai, 
  SiDocker,
  SiMongodb,
  SiPostgresql 
} from "react-icons/si";
import DepartmentService from "./DepartmentService";

// Register GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const ServicePageVariant5 = () => {
  const heroRef = useRef<HTMLElement>(null);
  const sectionsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const sections = sectionsRef.current;

    // Bold entrance animations for hero (from Variant4)
    if (heroRef.current) {
      gsap.set(heroRef.current.querySelectorAll('.bold-entrance'), { 
        opacity: 0, 
        scale: 0.5, 
        rotation: -15 
      });
      
      gsap.to(heroRef.current.querySelectorAll('.bold-entrance'), {
        opacity: 1,
        scale: 1,
        rotation: 0,
        duration: 1.5,
        stagger: 0.2,
        ease: "back.out(1.7)"
      });
    }

    // Experimental section animations (from Variant4)
    sections.forEach((section) => {
      if (section) {
        const cards = section.querySelectorAll('.experimental-card');
        cards.forEach((card, index) => {
          gsap.fromTo(
            card,
            { 
              opacity: 0, 
              y: 150,
              rotateY: 45,
              scale: 0.7
            },
            {
              opacity: 1,
              y: 0,
              rotateY: 0,
              scale: 1,
              duration: 1.5,
              delay: index * 0.2,
              ease: "power4.out",
              scrollTrigger: {
                trigger: card,
                start: "top 85%",
                end: "bottom 15%",
                toggleActions: "play none none reverse"
              }
            }
          );
        });

        // Floating elements animation (from Variant4)
        const floatingElements = section.querySelectorAll('.floating-element');
        floatingElements.forEach((element, index) => {
          gsap.to(element, {
            y: -20,
            duration: 2 + (index * 0.5),
            repeat: -1,
            yoyo: true,
            ease: "power2.inOut",
            delay: index * 0.3
          });
        });
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  const addToRefs = (el: HTMLDivElement | null) => {
    if (el && !sectionsRef.current.includes(el)) {
      sectionsRef.current.push(el);
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden">
      {/* Hero Section - From ServicePageVariant1 */}
      <section 
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8"
      >
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#020D19] via-[#011222] to-[#053969] opacity-70"></div>
          <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-[#035D9D] rounded-full filter blur-[100px] opacity-10 animate-pulse floating-element"></div>
          <div className="absolute bottom-1/4 left-1/3 w-48 h-48 bg-[#03388F] rounded-full filter blur-[80px] opacity-8 animate-pulse floating-element" style={{ animationDelay: '2s' }}></div>
          
          {/* Grid overlay */}
          <div
            className="absolute inset-0 opacity-5"
            style={{
              backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px),
                               linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
              backgroundSize: "40px 40px",
            }}
          ></div>
        </div>

        <div className="relative z-10 text-center max-w-6xl mx-auto">
          <motion.div
            className="bold-entrance mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-[#035D9D] to-[#03388F] rounded-full mb-8 floating-element">
              <FaBrain className="text-3xl text-white" />
            </div>
          </motion.div>
          
          <h1 className="bold-entrance text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            AI-Powered
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#035D9D] to-[#03388F]">
              Business Solutions
            </span>
          </h1>
          
          <p className="bold-entrance text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Transform your business with cutting-edge AI technology. From intelligent chatbots to automated processes, we build the future today.
          </p>
          
          <div className="bold-entrance flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="px-8 py-4 bg-gradient-to-r from-[#035D9D] to-[#03388F] rounded-full text-white font-semibold hover:scale-105 transform transition-all duration-300 shadow-lg hover:shadow-xl">
              Get Started Today
            </button>
            <button className="px-8 py-4 border border-[#035D9D] rounded-full text-[#035D9D] font-semibold hover:bg-[#035D9D] hover:text-white transition-all duration-300">
              View Our Work
            </button>
          </div>
        </div>
      </section>
      <DepartmentService />
      {/* Service Overview Section */}
      {/* <section ref={addToRefs} className="py-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="experimental-card text-3xl md:text-5xl font-bold mb-6">
              Our AI Services
            </h2>
            <p className="experimental-card text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive AI solutions designed to revolutionize how you do business
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <FaRobot className="text-4xl" />,
                title: "AI Chatbots",
                description: "Intelligent conversational AI that understands context and provides human-like interactions for customer support and engagement."
              },
              {
                icon: <FaCog className="text-4xl" />,
                title: "Process Automation",
                description: "Streamline operations with AI-driven automation that reduces manual work and increases efficiency across all departments."
              },
              {
                icon: <FaBrain className="text-4xl" />,
                title: "AI Agents",
                description: "Autonomous AI agents that can perform complex tasks, make decisions, and adapt to changing business requirements."
              },
              {
                icon: <FaChartLine className="text-4xl" />,
                title: "R&D Solutions",
                description: "Custom AI research and development services to create innovative solutions tailored to your specific industry needs."
              }
            ].map((service, index) => (
              <div key={index} className="experimental-card group">
                <div className="relative p-8 rounded-2xl bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 hover:border-[#035D9D]/50 transition-all duration-500 hover:scale-105">
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#035D9D]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <div className="relative z-10">
                    <div className="text-[#035D9D] mb-6 group-hover:scale-110 transition-transform duration-300">
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-4 group-hover:text-[#035D9D] transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Why Choose Us - Timeline Style (From ServicePageVariant2) */}
      <section ref={addToRefs} className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-[#020D19] via-[#011222] to-[#053969]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="experimental-card text-4xl md:text-6xl font-bold mb-6 text-white">
              Why Choose Our
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#035D9D] to-[#03388F]">AI Solutions?</span>
            </h2>
          </div>

          <div className="relative">
            {/* Central Timeline Line */}
            <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-[#035D9D] to-[#03388F] opacity-30"></div>
            
            <div className="space-y-12">
              {[
                {
                  icon: <FaShieldAlt className="text-3xl" />,
                  title: "Enterprise-Grade Security",
                  description: "Military-level encryption and compliance with GDPR, HIPAA, and SOC 2 standards ensure your data remains protected.",
                  side: "left"
                },
                {
                  icon: <FaClock className="text-3xl" />,
                  title: "Lightning-Fast Deployment",
                  description: "Our proven methodology ensures rapid implementation without disrupting your existing operations.",
                  side: "right"
                },
                {
                  icon: <FaUsers className="text-3xl" />,
                  title: "Dedicated Expert Team",
                  description: "Work directly with AI specialists, data scientists, and engineers who understand your industry.",
                  side: "left"
                },
                {
                  icon: <FaAward className="text-3xl" />,
                  title: "Proven Track Record",
                  description: "Over 500+ successful AI implementations across various industries with measurable ROI improvements.",
                  side: "right"
                }
              ].map((item, index) => (
                <div key={index} className={`experimental-card flex items-center ${item.side === 'right' ? 'lg:flex-row-reverse' : ''}`}>
                  <div className="lg:w-1/2 lg:px-8">
                    <div className="relative p-8 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg border border-white/20 rounded-2xl">
                      <div className="flex items-start space-x-4">
                        <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-[#035D9D] to-[#03388F] rounded-xl flex items-center justify-center text-white shadow-lg">
                          {item.icon}
                        </div>
                        <div>
                          <h3 className="text-xl font-bold mb-3 text-white">{item.title}</h3>
                          <p className="text-gray-300 leading-relaxed">{item.description}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Timeline dot */}
                  <div className="hidden lg:flex flex-shrink-0 w-6 h-6 bg-gradient-to-br from-[#035D9D] to-[#03388F] rounded-full shadow-lg floating-element"></div>
                  
                  <div className="hidden lg:block lg:w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Technologies - Powered by the Best (From ServicePageVariant4) */}
      <section ref={addToRefs} className="py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#020D19] to-[#011222]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
            <h2 className="experimental-card text-5xl md:text-7xl font-black mb-8 text-white">
              POWERED BY
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#035D9D] to-[#03388F]">
                THE BEST
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {[
              { icon: <FaPython className="text-6xl" />, name: "Python", color: "from-yellow-400 to-yellow-600" },
              { icon: <SiTensorflow className="text-6xl" />, name: "TensorFlow", color: "from-orange-400 to-orange-600" },
              { icon: <SiPytorch className="text-6xl" />, name: "PyTorch", color: "from-red-400 to-red-600" },
              { icon: <SiOpenai className="text-6xl" />, name: "OpenAI", color: "from-green-400 to-green-600" },  
              { icon: <FaReact className="text-6xl" />, name: "React", color: "from-blue-400 to-blue-600" },
              { icon: <SiDocker className="text-6xl" />, name: "Docker", color: "from-blue-500 to-blue-700" },
              { icon: <FaAws className="text-6xl" />, name: "AWS", color: "from-orange-500 to-orange-700" },
              { icon: <FaGoogle className="text-6xl" />, name: "Google Cloud", color: "from-red-500 to-red-700" },
              { icon: <FaMicrosoft className="text-6xl" />, name: "Azure", color: "from-blue-600 to-blue-800" },
              { icon: <SiMongodb className="text-6xl" />, name: "MongoDB", color: "from-green-500 to-green-700" },
              { icon: <SiPostgresql className="text-6xl" />, name: "PostgreSQL", color: "from-blue-500 to-indigo-600" },
              { icon: <FaBrain className="text-6xl" />, name: "Custom AI", color: "from-purple-500 to-purple-700" }
            ].map((tech, index) => (
              <div key={index} className="experimental-card group text-center">
                <div className="relative p-8 bg-white/5 rounded-3xl hover:bg-white/10 hover:shadow-2xl transition-all duration-500 group-hover:scale-110 border border-white/10 hover:border-[#035D9D]/50 overflow-hidden backdrop-blur-sm">
                  {/* Gradient overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${tech.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                  
                  <div className="relative z-10">
                    <div className="text-[#035D9D] mb-4 group-hover:scale-125 transition-transform duration-300">
                      {tech.icon}
                    </div>
                    <p className="text-lg font-bold text-white group-hover:text-[#035D9D] transition-colors duration-300">
                      {tech.name}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      
    </div>
  );
};

export default ServicePageVariant5; 