'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { EnvelopeIcon, PhoneIcon, MapPinIcon } from '@heroicons/react/24/outline';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  
  const [submitted, setSubmitted] = useState(false);
  
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
    rootMargin: '-50px 0px',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would normally handle the form submission to your backend
    console.log('Form submitted:', formData);
    setSubmitted(true);
    // Reset form after submission
    setTimeout(() => {
      setFormData({ name: '', email: '', subject: '', message: '' });
      setSubmitted(false);
    }, 5000);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const contactMethods = [
    {
      icon: EnvelopeIcon,
      title: 'Email',
      value: 'contact@devhexa.com',
      gradient: 'from-[#035D9D] to-[#03388F]'
    },
    {
      icon: PhoneIcon,
      title: 'Phone',
      value: '+1 (123) 456-7890',
      gradient: 'from-[#03388F] to-[#035D9D]'
    },
    {
      icon: MapPinIcon,
      title: 'Address',
      value: 'DevHexa HQ, Tech Valley',
      gradient: 'from-[#035D9D] to-[#03388F]'
    }
  ];

  return (
    <section className="relative py-20 bg-gradient-to-b from-[#101D26] to-gray-950 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="absolute w-[700px] h-[700px] bg-[#035D9D]/10 rounded-full blur-3xl -top-48 -left-48"
        />
        <motion.div 
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="absolute w-[600px] h-[600px] bg-[#03388F]/10 rounded-full blur-3xl -bottom-32 -right-32"
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.h2
            variants={itemVariants}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4"
          >
            Get In Touch
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-lg text-gray-300 max-w-2xl mx-auto"
          >
            Have a project in mind? Contact us today and let&apos;s create something amazing together.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="bg-gradient-to-br from-[#101D26]/80 to-[#053969]/50 backdrop-blur-sm p-8 rounded-3xl border border-gray-800 shadow-xl"
          >
            <motion.h3 
              variants={itemVariants}
              className="text-2xl font-bold text-white mb-6"
            >
              Send us a message
            </motion.h3>
            
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-gradient-to-r from-[#035D9D] to-[#03388F] p-6 rounded-xl text-white text-center"
              >
                <h4 className="text-xl font-semibold mb-2">Message Sent!</h4>
                <p>Thank you for reaching out. We&apos;ll get back to you shortly.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="space-y-4">
                  <motion.div variants={itemVariants}>
                    <input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full bg-[#101D26]/70 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#035D9D] transition-all"
                    />
                  </motion.div>
                  
                  <motion.div variants={itemVariants}>
                    <input
                      type="email"
                      name="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full bg-[#101D26]/70 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#035D9D] transition-all"
                    />
                  </motion.div>
                  
                  <motion.div variants={itemVariants}>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full bg-[#101D26]/70 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#035D9D] transition-all appearance-none"
                      style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' fill=\'none\' viewBox=\'0 0 20 20\'%3E%3Cpath stroke=\'%239ca3af\' stroke-linecap=\'round\' stroke-linejoin=\'round\' stroke-width=\'1.5\' d=\'M6 8l4 4 4-4\'/%3E%3C/svg%3E")', backgroundRepeat: 'no-repeat', backgroundPosition: 'right 1rem center', backgroundSize: '1.5em 1.5em' }}
                    >
                      <option className='bg-gray-900' value="" disabled selected>Select Service</option>
                      <option className='bg-gray-900' value="Web Development">Web Development</option>
                      <option className='bg-gray-900' value="Mobile Apps">Mobile Apps</option>
                      <option className='bg-gray-900' value="Cloud Solutions">Cloud Solutions</option>
                      <option className='bg-gray-900' value="AI Integration">AI Integration</option>
                      <option className='bg-gray-900' value="Other">Other</option>
                    </select>
                  </motion.div>
                  
                  <motion.div variants={itemVariants}>
                    <textarea
                      name="message"
                      placeholder="Your Message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full bg-[#101D26]/70 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#035D9D] transition-all resize-none"
                    ></textarea>
                  </motion.div>
                  
                  <motion.div variants={itemVariants} className="pt-2">
                    <button
                      type="submit"
                      className="w-full bg-gradient-to-r from-[#035D9D] to-[#03388F] hover:from-[#03388F] hover:to-[#035D9D] text-white font-medium py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-[#035D9D]"
                    >
                      Send Message
                    </button>
                  </motion.div>
                </div>
              </form>
            )}
          </motion.div>
          
          {/* Contact Info */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="space-y-6"
          >
            {/* Contact Methods */}
            <div className="space-y-4">
              {contactMethods.map((method) => (
                <motion.div
                  key={method.title}
                  variants={itemVariants}
                  className="flex items-center space-x-4 bg-[#101D26]/50 backdrop-blur-sm p-5 rounded-2xl border border-gray-800 hover:border-[#035D9D]/50 transition-all duration-300"
                >
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${method.gradient} p-2`}>
                    <method.icon className="w-full h-full text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-white">{method.title}</h4>
                    <p className="text-gray-300">{method.value}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            
            {/* Map Placeholder */}
            <motion.div
              variants={itemVariants}
              className="mt-8 rounded-3xl overflow-hidden border border-gray-800 h-[300px] bg-[#101D26]/50 relative"
            >
              {/* This is a placeholder for a map, you could integrate Google Maps or another map service here */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#053969]/20 to-[#101D26]/80 flex items-center justify-center">
                <div className="text-center p-8">
                  <MapPinIcon className="w-16 h-16 text-[#035D9D] mx-auto mb-4" />
                  <h4 className="text-xl font-bold text-white mb-2">Our Location</h4>
                  <p className="text-gray-300">
                    Interactive map will be integrated here. <br />
                    Visit us at our headquarters in Tech Valley
                  </p>
                </div>
              </div>
            </motion.div>
            
            {/* Social Media Links */}
            <motion.div variants={itemVariants} className="flex justify-center space-x-4 pt-4">
              {['facebook', 'twitter', 'instagram', 'linkedin', 'github'].map((social) => (
                <a
                  key={social}
                  href={`#${social}`}
                  className="w-10 h-10 rounded-full bg-[#101D26]/70 border border-gray-700 flex items-center justify-center text-white hover:bg-gradient-to-r hover:from-[#035D9D] hover:to-[#03388F] hover:border-transparent transition-all duration-300"
                >
                  <span className="sr-only">{social}</span>
                  {/* Replace with actual social media icons */}
                  <div className="w-5 h-5">{social[0].toUpperCase()}</div>
                </a>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection; 