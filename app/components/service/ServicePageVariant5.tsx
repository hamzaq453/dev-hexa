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
  SiPostgresql,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiFlutter,
  SiSwift,
  SiKotlin,
  SiFirebase,
  SiHubspot,
  SiMailchimp,
  SiAdobephotoshop,
  SiFigma,
  SiStackoverflow,
  SiAnilist,
  SiIndeed
} from "react-icons/si";
import { 
  FaNodeJs,
  FaLinkedin,
  FaGithub,
  FaFacebook
} from "react-icons/fa";
import DepartmentService from "./DepartmentService";
import { Service } from "@/lib/types/service";

// Register GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface ServicePageVariant5Props {
  service: Service;
}

const ServicePageVariant5 = ({ service }: ServicePageVariant5Props) => {
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
        className="relative h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8"
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

        <div className="relative z-10 pb-16 text-center max-w-6xl mx-auto">
          <motion.div
            className="bold-entrance"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-[#035D9D] to-[#03388F] rounded-full mb-3 floating-element">
              <FaBrain className="text-3xl text-white" />
            </div>
          </motion.div>
          
          <h1 className="bold-entrance text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            {service.heroTitle.split(' ').slice(0, -1).join(' ')}
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#035D9D] to-[#03388F]">
              {service.heroTitle.split(' ').slice(-1).join(' ')}
            </span>
          </h1>
          
          <p className="bold-entrance text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            {service.heroSubtitle}
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
      <DepartmentService service={service} />
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
            <h2 className="experimental-card leading-tight text-4xl md:text-6xl font-bold mb-6 text-white">
            Transforming Ideas into
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#035D9D] to-[#03388F]">Scalable Solutions</span>
            </h2>
          </div>

          <div className="relative">
            {/* Central Timeline Line */}
            <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-[#035D9D] to-[#03388F] opacity-30"></div>
            
            <div className="space-y-12">
              {service.features.map((feature, index) => {
                // Dynamic icon mapping
                const getIcon = (iconName: string) => {
                  const iconMap: { [key: string]: React.ReactNode } = {
                    FaShieldAlt: <FaShieldAlt className="text-3xl" />,
                    FaClock: <FaClock className="text-3xl" />,
                    FaUsers: <FaUsers className="text-3xl" />,
                    FaAward: <FaAward className="text-3xl" />,
                    FaChartLine: <FaChartLine className="text-3xl" />,
                    FaCog: <FaCog className="text-3xl" />,
                    FaRobot: <FaRobot className="text-3xl" />,
                    FaBrain: <FaBrain className="text-3xl" />
                  };
                  return iconMap[iconName] || <FaAward className="text-3xl" />;
                };

                return (
                <div key={index} className={`experimental-card flex items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                  <div className="lg:w-1/2 lg:px-8">
                    <div className="relative p-6 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg border border-white/20 rounded-2xl">
                      <div className="flex items-start space-x-4">
                        <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-[#035D9D] to-[#03388F] rounded-xl flex items-center justify-center text-white shadow-lg">
                          {getIcon(feature.icon)}
                        </div>
                        <div>
                          <h3 className="text-xl font-bold mb-3 text-white">{feature.title}</h3>
                          <p className="text-gray-300 leading-relaxed">{feature.description}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Timeline dot */}
                  <div className="hidden lg:flex flex-shrink-0 w-6 h-6 bg-gradient-to-br from-[#035D9D] to-[#03388F] rounded-full shadow-lg floating-element"></div>
                  
                  <div className="hidden lg:block lg:w-1/2"></div>
                </div>
                );
              })}
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
            {service.technologies.map((tech, index) => {
              // Dynamic icon mapping for technologies
              const getTechIcon = (iconName: string) => {
                const techIconMap: { [key: string]: React.ReactNode } = {
                  FaPython: <FaPython className="text-6xl" />,
                  SiTensorflow: <SiTensorflow className="text-6xl" />,
                  SiPytorch: <SiPytorch className="text-6xl" />,
                  SiOpenai: <SiOpenai className="text-6xl" />,
                  FaReact: <FaReact className="text-6xl" />,
                  SiDocker: <SiDocker className="text-6xl" />,
                  FaAws: <FaAws className="text-6xl" />,
                  FaGoogle: <FaGoogle className="text-6xl" />,
                  FaMicrosoft: <FaMicrosoft className="text-6xl" />,
                  SiMongodb: <SiMongodb className="text-6xl" />,
                  SiPostgresql: <SiPostgresql className="text-6xl" />,
                  FaBrain: <FaBrain className="text-6xl" />,
                  SiNextdotjs: <SiNextdotjs className="text-6xl" />,
                  SiTypescript: <SiTypescript className="text-6xl" />,
                  SiTailwindcss: <SiTailwindcss className="text-6xl" />,
                  FaNodeJs: <FaNodeJs className="text-6xl" />,
                  SiFlutter: <SiFlutter className="text-6xl" />,
                  SiSwift: <SiSwift className="text-6xl" />,
                  SiKotlin: <SiKotlin className="text-6xl" />,
                  SiFirebase: <SiFirebase className="text-6xl" />,
                  SiHubspot: <SiHubspot className="text-6xl" />,
                  SiMailchimp: <SiMailchimp className="text-6xl" />,
                  SiAdobephotoshop: <SiAdobephotoshop className="text-6xl" />,
                  SiFigma: <SiFigma className="text-6xl" />,
                  FaLinkedin: <FaLinkedin className="text-6xl" />,
                  FaGithub: <FaGithub className="text-6xl" />,
                  SiStackoverflow: <SiStackoverflow className="text-6xl" />,
                  SiAnilist: <SiAnilist className="text-6xl" />,
                  SiIndeed: <SiIndeed className="text-6xl" />,
                  FaUsers: <FaUsers className="text-6xl" />,
                  FaFacebook: <FaFacebook className="text-6xl" />
                };
                return techIconMap[iconName] || <FaBrain className="text-6xl" />;
              };

              return (
              <div key={index} className="experimental-card group text-center">
                <div className="relative p-8 bg-white/5 rounded-3xl hover:bg-white/10 hover:shadow-2xl transition-all duration-500 group-hover:scale-110 border border-white/10 hover:border-[#035D9D]/50 overflow-hidden backdrop-blur-sm">
                  {/* Gradient overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${tech.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                  
                  <div className="relative z-10">
                    <div className="text-[#035D9D] mb-4 group-hover:scale-125 transition-transform duration-300">
                      {getTechIcon(tech.icon)}
                    </div>
                    <p className="text-lg font-bold text-white group-hover:text-[#035D9D] transition-colors duration-300">
                      {tech.name}
                    </p>
                  </div>
                </div>
              </div>
              );
            })}
          </div>
        </div>
      </section>

      
    </div>
  );
};

export default ServicePageVariant5; 