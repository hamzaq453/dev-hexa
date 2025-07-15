"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaStar } from "react-icons/fa";

const testimonialData = [
  {
    id: 1,
    name: "Lorem Ipsum",
    role: "Lorem ipsum dolor",
    image: "/aboutpic1.jpeg",
    rating: 5,
    quote:
      "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    id: 2,
    name: "Lorem Ipsum",
    role: "Lorem ipsum dolor",
    image: "/aboutpic2.jpeg",
    rating: 5,
    quote:
      "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    id: 3,
    name: "Lorem Ipsum",
    role: "Lorem ipsum dolor",
    image: "/aboutpic3.jpeg",
    rating: 5,
    quote:
      "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    id: 4,
    name: "Lorem Ipsum",
    role: "Lorem ipsum dolor",
    image: "/aboutpic1.jpeg",
    rating: 5,
    quote:
      "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    id: 5,
    name: "Lorem Ipsum",
    role: "Lorem ipsum dolor",
    image: "/aboutpic2.jpeg",
    rating: 5,
    quote:
      "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    id: 6,
    name: "Lorem Ipsum",
    role: "Lorem ipsum dolor",
    image: "/aboutpic3.jpeg",
    rating: 5,
    quote:
      "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
];

export default function TestimonialVariant3() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-advance slides
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonialData.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
    // Resume auto-play after 10 seconds
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const currentTestimonial = testimonialData[currentSlide];

  return (
    <section className="py-20 bg-[#060606] relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#035D9D]/5 to-[#061C48]/10" />

      {/* Glowing Orbs */}
      <div className="absolute top-1/4 -left-32 w-64 h-64 bg-[#035D9D]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -right-32 w-64 h-64 bg-[#03388F]/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-[#035D9D] font-medium mb-4 tracking-wider uppercase"
          >
            Testimonial
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            Our Clients Feedback
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-gray-400 max-w-2xl mx-auto"
          >
            Quis autem vel eum iure reprehenderit in voluptate velit esse cillum
            dolore eu fugiat nulla pariatur.
          </motion.p>
        </div>

        {/* Testimonial Cards Container */}
        <div className="max-w-6xl mx-auto mb-12">
          <div className="relative h-[350px] md:h-[280px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
                  {/* Current Testimonial */}
                  <div className="bg-[#101D26]/80 backdrop-blur-sm border border-[#035D9D]/20 rounded-2xl p-4 relative group hover:border-[#035D9D]/40 transition-all duration-300 flex h-48 md:h-56 ">
                    {/* User Image and Content Layout */}
                    <div className="h-full w-36 rounded-lg overflow-hidden border-2 border-[#035D9D]/30 flex-shrink-0 self-center">
                      <img
                        src={currentTestimonial.image}
                        alt={currentTestimonial.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1 flex flex-col justify-center ml-6">
                      {/* <h4 className="text-xl font-bold text-white mb-3">
                        You have right place
                      </h4> */}
                      <div className="flex items-center gap-1 mb-3">
                        {[...Array(currentTestimonial.rating)].map((_, i) => (
                          <FaStar key={i} className="text-[#035D9D] text-lg" />
                        ))}
                      </div>
                      <p className="text-gray-300 text-sm leading-relaxed mb-4">
                        {currentTestimonial.quote}
                      </p>
                      {/* Stars */}
                      
                      {/* Author Info */}
                      <div>
                        <h5 className="text-white font-semibold text-lg">
                          {currentTestimonial.name}
                        </h5>
                        <p className="text-gray-400 text-sm">
                          {currentTestimonial.role}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Next Testimonial Preview */}
                  <div className="bg-[#101D26]/60 backdrop-blur-sm border border-[#035D9D]/10 rounded-2xl p-4 relative opacity-70 hover:opacity-100 transition-all duration-300 flex h-48 md:h-56">
                    {/* User Image and Content Layout */}
                    <div className="h-full w-36 rounded-lg overflow-hidden border-2 border-[#035D9D]/30 flex-shrink-0 self-center">
                      <img
                        src={
                          testimonialData[
                            (currentSlide + 1) % testimonialData.length
                          ].image
                        }
                        alt={
                          testimonialData[
                            (currentSlide + 1) % testimonialData.length
                          ].name
                        }
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1 flex flex-col justify-center ml-6">
                      {/* <h4 className="text-xl font-bold text-white mb-3">
                        You have right place
                      </h4> */}
                      <div className="flex items-center gap-1 mb-3">
                        {[...Array(currentTestimonial.rating)].map((_, i) => (
                          <FaStar key={i} className="text-[#035D9D] text-lg" />
                        ))}
                      </div>
                      <p className="text-gray-300 text-sm leading-relaxed mb-4">
                        {currentTestimonial.quote}
                      </p>
                      {/* Stars */}
                      
                      {/* Author Info */}
                      <div>
                        <h5 className="text-white font-semibold text-lg">
                          {currentTestimonial.name}
                        </h5>
                        <p className="text-gray-400 text-sm">
                          {currentTestimonial.role}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center items-center gap-3">
          {testimonialData.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-3 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? "bg-[#035D9D] w-8"
                  : "bg-gray-600 hover:bg-gray-500 w-3"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
