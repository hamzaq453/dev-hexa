"use client";

import React from "react";
import Image from "next/image";

interface TestimonialData {
  id: number;
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  avatar: string;
}

const testimonials: TestimonialData[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "CTO",
    company: "TechFlow Solutions",
    content: "DevHexa transformed our digital presence completely. Their team delivered a stunning website that perfectly represents our brand and has significantly increased our conversion rates.",
    rating: 5,
    avatar: "/aboutpic1.jpeg"
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Marketing Director",
    company: "GrowthLab Inc",
    content: "The mobile app they developed for us exceeded all expectations. The user experience is seamless, and our customer engagement has improved by 300% since launch.",
    rating: 5,
    avatar: "/aboutpic2.jpeg"
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Founder",
    company: "InnovateCorp",
    content: "Working with DevHexa was a game-changer for our startup. Their expertise in cloud solutions helped us scale efficiently while maintaining top-notch security.",
    rating: 5,
    avatar: "/aboutpic3.jpeg"
  },
  {
    id: 4,
    name: "David Thompson",
    role: "CEO",
    company: "Digital Dynamics",
    content: "Their branding and design work gave our company a fresh, modern look. The attention to detail and creative approach made all the difference in our market positioning.",
    rating: 5,
    avatar: "/aboutpic1.jpeg"
  },
  {
    id: 5,
    name: "Lisa Wang",
    role: "Product Manager",
    company: "NextGen Systems",
    content: "The ERP solution they implemented streamlined our operations beyond our expectations. The team's technical expertise and support throughout the project was exceptional.",
    rating: 5,
    avatar: "/aboutpic2.jpeg"
  },
  {
    id: 6,
    name: "James Wilson",
    role: "Operations Head",
    company: "ScaleUp Ventures",
    content: "DevHexa's digital marketing strategies boosted our online presence dramatically. Our lead generation increased by 250% within the first quarter.",
    rating: 5,
    avatar: "/aboutpic3.jpeg"
  }
];

const StarRating = ({ rating }: { rating: number }) => {
  return (
    <div className="flex items-center space-x-1">
      {[...Array(5)].map((_, index) => (
        <svg
          key={index}
          className={`w-4 h-4 ${index < rating ? 'text-yellow-400' : 'text-gray-600'}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
};

const TestimonialVariant1 = () => {
  return (
    <section className="relative min-h-screen w-full bg-black overflow-hidden py-28">
      {/* Background with your color scheme */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#020D19] via-[#011222] to-[#053969] opacity-70" />
        
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px),
                             linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
            backgroundSize: "40px 40px",
          }}
        />
        
        {/* Glowing orbs */}
        <div className="absolute top-20 right-1/4 w-96 h-96 bg-[#035D9D] rounded-full filter blur-[200px] opacity-20 animate-pulse" />
        <div className="absolute bottom-20 left-1/4 w-64 h-64 bg-[#03388F] rounded-full filter blur-[150px] opacity-15 animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center px-4 py-2 bg-gradient-to-r from-primary/10 to-primary-dark/10 rounded-full border border-primary/20 mb-6 backdrop-blur-sm">
            <p className="text-sm font-medium tracking-[0.2em] text-primary">
              TESTIMONIALS
            </p>
          </div>
          <h2 className="text-4xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent">
            What Our Clients Say
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-primary-dark mx-auto rounded-full mb-6"></div>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto leading-relaxed">
            Don't just take our word for it. Here's what our satisfied clients have to say about their experience working with DevHexa.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="group relative bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-xl rounded-2xl p-6 border border-gray-700/50 hover:border-primary/30 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-2"
            >
              {/* Quote icon */}
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-gradient-to-br from-primary to-primary-dark rounded-full flex items-center justify-center shadow-lg">
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
                </svg>
              </div>

              {/* Content */}
              <div className="pt-4">
                <StarRating rating={testimonial.rating} />
                <p className="text-gray-300 mt-4 mb-6 leading-relaxed text-sm">
                  "{testimonial.content}"
                </p>
                
                {/* Author info */}
                <div className="flex items-center space-x-4">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden ring-2 ring-primary/20">
                    <Image
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold text-sm">{testimonial.name}</h4>
                    <p className="text-gray-400 text-xs">{testimonial.role} at {testimonial.company}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialVariant1; 