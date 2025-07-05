"use client";

import Image from "next/image";
import React, { useState } from "react";
import { Timeline } from "@/app/components/ui/timeline";
import { motion } from "framer-motion";

export function TimelineDemo() {
  const data = [
    {
      title: "2024",
      content: (
        <div className="relative">
          {/* Glassy card container */}
          <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 shadow-xl">
            <p className="text-white text-sm md:text-base font-normal mb-8">
              Built and launched <span className="text-[#035D9D] font-semibold">Aceternity UI</span> and Aceternity UI Pro from scratch
            </p>
            <div className="grid grid-cols-2 gap-4">
              {[
                "https://assets.aceternity.com/templates/startup-1.webp",
                "https://assets.aceternity.com/templates/startup-2.webp",
                "https://assets.aceternity.com/templates/startup-3.webp",
                "https://assets.aceternity.com/templates/startup-4.webp",
              ].map((src, idx) => (
                <div key={idx} className="group relative overflow-hidden rounded-xl">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#035D9D]/20 to-[#03388F]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <Image
                    src={src}
                    alt="startup template"
                    width={500}
                    height={500}
                    className="rounded-xl object-cover h-20 md:h-44 lg:h-60 w-full transform group-hover:scale-105 transition-transform duration-500 shadow-2xl"
                  />
                  <div className="absolute inset-0 ring-1 ring-white/20 rounded-xl" />
                </div>
              ))}
            </div>
          </div>
          {/* Glowing accent */}
          <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#035D9D] rounded-full filter blur-[80px] opacity-30" />
        </div>
      ),
    },
    {
      title: "Early 2023",
      content: (
        <div className="relative">
          <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 shadow-xl">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-2 h-2 bg-[#035D9D] rounded-full animate-pulse" />
              <span className="text-[#035D9D] text-sm font-semibold uppercase tracking-wider">Project Highlights</span>
            </div>
            <p className="text-white text-sm md:text-base font-normal mb-4">
              Revolutionizing web design with cutting-edge components and templates.
            </p>
            <p className="text-gray-300 text-sm md:text-base font-normal mb-8">
              Creating beautiful, responsive designs that push the boundaries of modern web development.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {[
                { src: "https://assets.aceternity.com/pro/hero-sections.png", title: "Hero Sections" },
                { src: "https://assets.aceternity.com/features-section.png", title: "Features" },
                { src: "https://assets.aceternity.com/pro/bento-grids.png", title: "Bento Grids" },
                { src: "https://assets.aceternity.com/cards.png", title: "Cards" },
              ].map((item, idx) => (
                <div key={idx} className="group relative">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
                  <div className="absolute bottom-2 left-2 text-white text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                    {item.title}
                  </div>
                  <Image
                    src={item.src}
                    alt={item.title}
                    width={500}
                    height={500}
                    className="rounded-xl object-cover h-20 md:h-44 lg:h-60 w-full transform group-hover:scale-105 transition-all duration-500 shadow-2xl"
                  />
                  <div className="absolute inset-0 ring-1 ring-white/20 rounded-xl" />
                </div>
              ))}
            </div>
          </div>
          <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-[#03388F] rounded-full filter blur-[100px] opacity-25" />
        </div>
      ),
    },
    {
      title: "Changelog",
      content: (
        <div className="relative">
          <div className="bg-gradient-to-br from-[#035D9D]/10 to-[#03388F]/10 backdrop-blur-lg rounded-2xl p-6 border border-[#035D9D]/20 shadow-xl">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-white text-lg font-bold">Latest Updates</h3>
              <span className="px-3 py-1 bg-[#035D9D]/20 text-[#035D9D] text-xs font-semibold rounded-full border border-[#035D9D]/30">
                5 New Components
              </span>
            </div>
            <div className="space-y-3 mb-8">
              {[
                "Card grid component",
                "Startup template Aceternity",
                "Advanced file upload",
                "Interactive dashboard elements",
                "Premium UI kit release"
              ].map((item, idx) => (
                <div key={idx} className="flex gap-3 items-center text-gray-300 text-sm md:text-base group">
                  <div className="w-6 h-6 rounded-full bg-gradient-to-br from-[#035D9D] to-[#03388F] flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="group-hover:text-white transition-colors duration-300">{item}</span>
                </div>
              ))}
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                "https://assets.aceternity.com/pro/hero-sections.png",
                "https://assets.aceternity.com/features-section.png",
                "https://assets.aceternity.com/pro/bento-grids.png",
                "https://assets.aceternity.com/cards.png",
              ].map((src, idx) => (
                <div key={idx} className="relative group overflow-hidden rounded-xl">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#035D9D]/40 to-[#03388F]/40 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
                  <Image
                    src={src}
                    alt="component preview"
                    width={500}
                    height={500}
                    className="rounded-xl object-cover h-20 md:h-44 lg:h-60 w-full transform group-hover:scale-110 transition-transform duration-500 shadow-2xl"
                  />
                  <div className="absolute inset-0 ring-1 ring-[#035D9D]/30 rounded-xl" />
                </div>
              ))}
            </div>
          </div>
          <div className="absolute top-1/2 -right-20 w-60 h-60 bg-gradient-to-br from-[#035D9D] to-[#03388F] rounded-full filter blur-[120px] opacity-20" />
        </div>
      ),
    },
  ];
  
  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Enhanced background with multiple layers */}
      <div className="absolute inset-0 bg-black" />
      
      {/* Animated gradient background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#020D19] via-[#011222] to-[#053969] opacity-90" />
        <div className="absolute inset-0 bg-gradient-to-tr from-[#053969] via-transparent to-[#020D19] opacity-50" />
      </div>
      
      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px),
                           linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
          backgroundSize: "50px 50px",
        }}
      />
      
      {/* Floating orbs for depth */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#035D9D] rounded-full filter blur-[200px] opacity-10 animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-[#03388F] rounded-full filter blur-[150px] opacity-10 animate-pulse" style={{ animationDelay: '2s' }} />
      <div className="absolute top-3/4 right-1/3 w-80 h-80 bg-[#053969] rounded-full filter blur-[180px] opacity-10 animate-pulse" style={{ animationDelay: '4s' }} />
      
      {/* Content wrapper */}
      <div className="relative z-10 w-full">
        <Timeline data={data} />
      </div>
    </div>
  );
}

// Enhanced Portfolio Section Variant
interface PortfolioProject {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  technologies: string[];
  link?: string;
  featured?: boolean;
  year: string;
}

const portfolioProjects: PortfolioProject[] = [
  {
    id: 1,
    title: "E-Commerce Platform Redesign",
    category: "Web Development",
    description: "Complete overhaul of an e-commerce platform with modern UI/UX, improving conversion rates by 40%",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Stripe"],
    link: "#",
    featured: true,
    year: "2024"
  },
  {
    id: 2,
    title: "Mobile Banking Application",
    category: "Mobile Development",
    description: "Secure banking app with biometric authentication and real-time transaction tracking",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=600&fit=crop",
    technologies: ["React Native", "Node.js", "MongoDB", "JWT"],
    link: "#",
    featured: true,
    year: "2024"
  },
  {
    id: 3,
    title: "Healthcare Dashboard",
    category: "UI/UX Design",
    description: "Analytics dashboard for healthcare providers with intuitive data visualization",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=600&fit=crop",
    technologies: ["Figma", "React", "D3.js", "Chart.js"],
    link: "#",
    year: "2023"
  },
  {
    id: 4,
    title: "Brand Identity System",
    category: "Branding",
    description: "Complete brand identity including logo, color palette, and design guidelines",
    image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=800&h=600&fit=crop",
    technologies: ["Adobe Creative Suite", "Figma", "Brand Strategy"],
    link: "#",
    year: "2023"
  },
  {
    id: 5,
    title: "AI-Powered Analytics Platform",
    category: "Web Development",
    description: "Machine learning platform for business intelligence and automated reporting",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
    technologies: ["Python", "TensorFlow", "React", "AWS"],
    link: "#",
    featured: true,
    year: "2023"
  },
  {
    id: 6,
    title: "Real Estate Mobile App",
    category: "Mobile Development",
    description: "Property listing app with AR viewing and mortgage calculator integration",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop",
    technologies: ["Flutter", "Firebase", "Google Maps API", "ARCore"],
    link: "#",
    year: "2023"
  }
];

const categories = ["All", "Web Development", "Mobile Development", "UI/UX Design", "Branding"];

export function PortfolioSectionEnhanced() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const filteredProjects = selectedCategory === "All" 
    ? portfolioProjects 
    : portfolioProjects.filter(project => project.category === selectedCategory);

  return (
    <section className="relative min-h-screen w-full bg-black overflow-hidden">
      {/* Background elements matching the theme */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px),
                           linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }}
      />
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#020D19] via-[#011222] to-[#053969] opacity-70" />
      
      {/* Animated glowing orbs */}
      <div className="absolute top-20 right-1/4 w-96 h-96 bg-[#035D9D] rounded-full filter blur-[200px] opacity-20 animate-pulse" />
      <div className="absolute bottom-20 left-1/4 w-64 h-64 bg-[#03388F] rounded-full filter blur-[150px] opacity-15 animate-pulse" style={{ animationDelay: '2s' }} />

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#035D9D] to-[#03388F]">Portfolio</span>
          </h2>
          <p className="text-gray-300 text-sm sm:text-base md:text-lg max-w-2xl mx-auto">
            Showcasing our best work and innovative solutions that have transformed businesses
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4 mb-12 sm:mb-16"
        >
          {categories.map((category, index) => (
            <motion.button
              key={category}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 sm:px-6 py-2 sm:py-3 rounded-full text-xs sm:text-sm md:text-base font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? "bg-gradient-to-r from-[#035D9D] to-[#03388F] text-white shadow-lg shadow-[#035D9D]/30"
                  : "bg-white/5 text-gray-300 hover:bg-white/10 hover:text-white border border-white/10 backdrop-blur-sm"
              }`}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
              className={`group relative rounded-2xl overflow-hidden bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border transition-all duration-500 ${
                project.featured 
                  ? 'border-[#035D9D]/50 shadow-lg shadow-[#035D9D]/20' 
                  : 'border-white/10 hover:border-[#035D9D]/30'
              }`}
            >
              {/* Featured Badge */}
              {project.featured && (
                <div className="absolute top-4 right-4 z-20 px-3 py-1 bg-gradient-to-r from-[#035D9D] to-[#03388F] rounded-full">
                  <span className="text-xs text-white font-semibold">Featured</span>
                </div>
              )}

              {/* Image Container */}
              <div className="relative h-48 sm:h-56 lg:h-64 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={800}
                  height={600}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
                
                {/* Year Badge */}
                <div className="absolute bottom-4 left-4 px-3 py-1 bg-black/50 backdrop-blur-md rounded-lg border border-white/20">
                  <span className="text-xs sm:text-sm text-white/90">{project.year}</span>
                </div>

                {/* Hover Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br from-[#035D9D]/90 to-[#03388F]/90 backdrop-blur-sm flex items-center justify-center transition-opacity duration-300 ${
                  hoveredProject === project.id ? 'opacity-100' : 'opacity-0'
                }`}>
                  <a
                    href={project.link}
                    className="px-6 py-3 bg-white text-[#035D9D] font-semibold rounded-full hover:scale-105 transition-transform duration-300"
                  >
                    View Project
                  </a>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-[#035D9D] transition-colors duration-300">
                    {project.title}
                  </h3>
                </div>
                
                <p className="text-xs sm:text-sm text-[#035D9D] font-medium mb-2">
                  {project.category}
                </p>
                
                <p className="text-sm text-gray-300 mb-4 line-clamp-2">
                  {project.description}
                </p>
                
                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 text-xs bg-[#035D9D]/10 text-[#035D9D] rounded-md border border-[#035D9D]/20 backdrop-blur-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <a
            href="#"
            className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#035D9D] to-[#03388F] text-white font-semibold rounded-full hover:shadow-lg hover:shadow-[#035D9D]/30 transition-all duration-300"
          >
            View All Projects
            <svg
              className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}