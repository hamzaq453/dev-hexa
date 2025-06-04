"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

export function PortfolioSectionEnhanced() {
  const timelineData = [
    {
      year: "2024",
      title: "Digital Transformation",
      description: "Leading innovative digital solutions and transformative web experiences",
      projects: [
        {
          image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop",
          title: "E-Commerce Platform",
          category: "Web Development",
          tech: ["Next.js", "React", "Node.js"]
        },
        {
          image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&h=500&fit=crop",
          title: "Analytics Dashboard",
          category: "UI/UX Design",
          tech: ["Figma", "TailwindCSS", "TypeScript"]
        }
      ]
    },
    {
      year: "2023",
      title: "Mobile Innovation",
      description: "Pioneering mobile solutions with cutting-edge technologies",
      projects: [
        {
          image: "https://images.unsplash.com/photo-1555421689-491a97ff2040?w=800&h=500&fit=crop",
          title: "Mobile Banking App",
          category: "App Development",
          tech: ["React Native", "Firebase", "Redux"]
        },
        {
          image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop",
          title: "AI Integration",
          category: "Machine Learning",
          tech: ["Python", "TensorFlow", "AWS"]
        }
      ]
    },
    {
      year: "2022",
      title: "Brand Evolution",
      description: "Creating memorable brand experiences and digital identities",
      projects: [
        {
          image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&h=500&fit=crop",
          title: "Corporate Rebranding",
          category: "Brand Design",
          tech: ["Adobe CC", "Brand Strategy", "UI Design"]
        },
        {
          image: "https://images.unsplash.com/photo-1559028012-481c04fa702d?w=800&h=500&fit=crop",
          title: "Marketing Platform",
          category: "Web Development",
          tech: ["Vue.js", "GraphQL", "Node.js"]
        }
      ]
    }
  ];

  return (
    <section className="relative min-h-screen w-full bg-black overflow-hidden py-20">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[#020D19] to-black" />
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.02]" />
      <div className="absolute inset-0 bg-gradient-to-tr from-[#035D9D]/10 via-transparent to-[#03388F]/10" />
      
      {/* Subtle animated orbs */}
      <div className="absolute top-1/4 -right-1/4 w-1/2 h-1/2 bg-[#035D9D]/20 rounded-full blur-[128px] animate-pulse" />
      <div className="absolute bottom-1/4 -left-1/4 w-1/2 h-1/2 bg-[#03388F]/20 rounded-full blur-[128px] animate-pulse delay-1000" />

      {/* Content Container */}
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-white">Our </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#035D9D] to-[#03388F]">
              Journey
            </span>
          </h2>
          <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto">
            Transforming ideas into digital excellence, one milestone at a time
          </p>
        </motion.div>

        {/* Timeline Content */}
        <div className="space-y-32">
          {timelineData.map((period, index) => (
            <motion.div
              key={period.year}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Year Marker */}
              <div className="absolute -left-4 md:-left-8 top-0 flex items-center">
                <div className="relative">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#035D9D] to-[#03388F] flex items-center justify-center">
                    <div className="text-white font-bold">{period.year}</div>
                  </div>
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#035D9D] to-[#03388F] blur-lg opacity-50 animate-pulse" />
                </div>
                <div className="h-px w-8 bg-gradient-to-r from-[#035D9D] to-transparent" />
              </div>

              {/* Period Content */}
              <div className="ml-20 md:ml-24">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">{period.title}</h3>
                <p className="text-gray-400 mb-8">{period.description}</p>

                {/* Projects Grid */}
                <div className="grid md:grid-cols-2 gap-6">
                  {period.projects.map((project, projectIndex) => (
                    <motion.div
                      key={project.title}
                      initial={{ opacity: 0, x: projectIndex % 2 === 0 ? -20 : 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.2 + projectIndex * 0.1 }}
                      viewport={{ once: true }}
                      className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 backdrop-blur-sm"
                    >
                      {/* Project Image */}
                      <div className="relative h-48 overflow-hidden">
                        <Image
                          src={project.image}
                          alt={project.title}
                          width={800}
                          height={500}
                          className="object-cover w-full h-full transform group-hover:scale-110 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                        
                        {/* Category Badge */}
                        <div className="absolute top-4 right-4">
                          <div className="px-3 py-1 rounded-full text-xs font-medium bg-[#035D9D]/90 text-white backdrop-blur-sm">
                            {project.category}
                          </div>
                        </div>
                      </div>

                      {/* Project Info */}
                      <div className="p-6">
                        <h4 className="text-xl font-semibold text-white mb-3 group-hover:text-[#035D9D] transition-colors duration-300">
                          {project.title}
                        </h4>
                        
                        {/* Tech Stack */}
                        <div className="flex flex-wrap gap-2">
                          {project.tech.map((tech) => (
                            <span
                              key={tech}
                              className="px-2 py-1 text-xs rounded-md bg-white/5 text-gray-300 border border-white/10"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Hover Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-br from-[#035D9D]/80 to-[#03388F]/80 opacity-0 group-hover:opacity-20 transition-opacity duration-500" />
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Vertical Timeline Line */}
              {index < timelineData.length - 1 && (
                <div className="absolute left-4 md:left-8 top-16 bottom-0 w-px bg-gradient-to-b from-[#035D9D] to-transparent" />
              )}
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-[#035D9D] to-[#03388F] text-white font-semibold hover:shadow-lg hover:shadow-[#035D9D]/50 transition-all duration-300"
          >
            Start Your Project
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