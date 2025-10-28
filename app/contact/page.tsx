"use client";
import React, { useState } from 'react';
import { Select, SelectTrigger, SelectContent, SelectItem, SelectValue } from "@/app/components/ui/select";

const SERVICES = [
  "Website Design & Development",
  "Branding & Graphic Design",
  "Digital Marketing Services",
  "Creative Content Building",
  "Cloud Computing Services",
  "ERP for Businesses",
  "Motion Graphics",
  "Mobile Application Development"
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      service: '',
      message: ''
    });
  };

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#020D19] via-[#011222] to-[#053969] opacity-70"></div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Primary gradient orbs */}
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-primary/20 to-primary-dark/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/3 -left-40 w-96 h-96 bg-gradient-to-br from-primary-darker/15 to-primary/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute -bottom-40 right-1/4 w-72 h-72 bg-gradient-to-br from-primary-dark/20 to-primary-darker/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
        
        {/* Grid overlay */}
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px),
                           linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      {/* Main Contact Section */}
      <section className="px-4 sm:px-8 py-8 lg:py-10 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center px-4 py-2 bg-gradient-to-r from-primary/10 to-primary-dark/10 rounded-full border border-primary/20 mb-6 backdrop-blur-sm">
              <p className="text-sm font-medium tracking-[0.2em] text-primary">
                CONTACT
              </p>
            </div>
            <h1 className="text-4xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent">
              Get In Touch
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-primary-dark mx-auto rounded-full"></div>
          </div>

          {/* Content Grid */}
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-16 lg:px-20">
            {/* Left Side - Contact Information */}
            <div className="space-y-8">
              <div>
                <p className="text-gray-300 text-lg leading-relaxed mb-12">
                  Any question? Reach out to us and we'll get back to you shortly.
                </p>

                {/* Contact Details */}
                <div className="space-y-8">
                  {/* Email */}
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary-dark rounded-full flex items-center justify-center">
                      <svg 
                        className="w-6 h-6 text-white" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path 
                          strokeLinecap="round" 
                          strokeLinejoin="round" 
                          strokeWidth={2} 
                          d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" 
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="text-white text-lg">hello@devhexa.com</p>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary-dark rounded-full flex items-center justify-center">
                      <svg 
                        className="w-6 h-6 text-white" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path 
                          strokeLinecap="round" 
                          strokeLinejoin="round" 
                          strokeWidth={2} 
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" 
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="text-white text-lg">+49 (160) 3386-507</p>
                    </div>
                  </div>
                </div>

                {/* Locations Section */}
                <div className="mt-12">
                  <h3 className="text-lg font-semibold text-white mb-6">Our Locations</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {/* Berlin */}
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-primary to-primary-dark rounded-full flex items-center justify-center flex-shrink-0">
                        <svg 
                          className="w-5 h-5 text-white" 
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                            strokeWidth={2} 
                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" 
                          />
                          <path 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                            strokeWidth={2} 
                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" 
                          />
                        </svg>
                      </div>
                      <div>
                        <p className="text-white text-base">Berlin, Germany</p>
                      </div>
                    </div>

                    {/* London */}
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-primary to-primary-dark rounded-full flex items-center justify-center flex-shrink-0">
                        <svg 
                          className="w-5 h-5 text-white" 
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                            strokeWidth={2} 
                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" 
                          />
                          <path 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                            strokeWidth={2} 
                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" 
                          />
                        </svg>
                      </div>
                      <div>
                        <p className="text-white text-base">London, UK</p>
                      </div>
                    </div>

                    {/* Islamabad */}
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-primary to-primary-dark rounded-full flex items-center justify-center flex-shrink-0">
                        <svg 
                          className="w-5 h-5 text-white" 
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                            strokeWidth={2} 
                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" 
                          />
                          <path 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                            strokeWidth={2} 
                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" 
                          />
                        </svg>
                      </div>
                      <div>
                        <p className="text-white text-base">Islamabad, Pakistan</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Contact Form */}
            <div>
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Full Name */}
                <div className="relative">
                  <input
                    type="text"
                    name="fullName"
                    placeholder=" "
                    value={formData.fullName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-0 py-4 bg-transparent border-0 border-b border-gray-600 text-white placeholder-transparent focus:outline-none focus:border-primary transition-all duration-300 peer"
                  />
                  <label className="absolute left-0 -top-3.5 text-gray-400 text-sm transition-all duration-300 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-4 peer-focus:-top-3.5 peer-focus:text-primary peer-focus:text-sm">
                    Full Name
                  </label>
                </div>

                {/* Email Address */}
                <div className="relative">
                  <input
                    type="email"
                    name="email"
                    placeholder=" "
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-0 py-4 bg-transparent border-0 border-b border-gray-600 text-white placeholder-transparent focus:outline-none focus:border-primary transition-all duration-300 peer"
                  />
                  <label className="absolute left-0 -top-3.5 text-gray-400 text-sm transition-all duration-300 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-4 peer-focus:-top-3.5 peer-focus:text-primary peer-focus:text-sm">
                    Email Address
                  </label>
                </div>

                {/* Phone Number */}
                <div className="relative">
                  <input
                    type="tel"
                    name="phone"
                    placeholder=" "
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full px-0 py-4 bg-transparent border-0 border-b border-gray-600 text-white placeholder-transparent focus:outline-none focus:border-primary transition-all duration-300 peer"
                  />
                  <label className="absolute left-0 -top-3.5 text-gray-400 text-sm transition-all duration-300 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-4 peer-focus:-top-3.5 peer-focus:text-primary peer-focus:text-sm">
                    Phone Number
                  </label>
                </div>

                {/* Service Selection */}
                <div className="relative">
                  <Select onValueChange={(value: any) => setFormData(prev => ({ ...prev, service: value }))}>
                    <SelectTrigger className="w-full px-2 py-4 border-0 border-b border-gray-600 text-base text-gray-400 focus:outline-none focus:border-primary transition-all duration-300 appearance-none peer">
                      <SelectValue placeholder="Select a Service" />
                    </SelectTrigger>
                    <SelectContent
                      className="backdrop-blur-sm bg-primary/10 border border-primary/40 shadow-lg rounded-lg"
                    >
                    {SERVICES.map((service) => (
                        <SelectItem key={service} value={service}>
                          {service}
                        </SelectItem>
                    ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Message */}
                <div className="relative">
                  <textarea
                    name="message"
                    placeholder=" "
                    rows={2}
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    className="w-full px-0 py-4 bg-transparent border-0 border-b border-gray-600 text-white placeholder-transparent focus:outline-none focus:border-primary transition-all duration-300 resize-none peer"
                  />
                  <label className="absolute left-0 -top-3.5 text-gray-400 text-sm transition-all duration-300 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-4 peer-focus:-top-3.5 peer-focus:text-primary peer-focus:text-sm">
                    Your Message
                  </label>
                </div>

                {/* Submit Button */}
                <div className="pt-8">
                  <button
                    type="submit"
                    className="px-8 py-3 bg-gradient-to-r from-primary to-primary-dark hover:from-primary-dark hover:to-primary-darker text-white font-medium rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-primary/25"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
