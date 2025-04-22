'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { CodeBracketIcon, DevicePhoneMobileIcon, CloudIcon, CpuChipIcon } from '@heroicons/react/24/outline';

const services = [
  {
    title: "Web Development",
    description: "Crafting responsive, high-performance websites with modern technologies and best practices.",
    icon: CodeBracketIcon,
    color: "from-[#035D9D] to-[#03388F]"
  },
  {
    title: "Mobile Apps",
    description: "Building cross-platform mobile applications that deliver seamless user experiences.",
    icon: DevicePhoneMobileIcon,
    color: "from-[#03388F] to-[#035D9D]"
  },
  {
    title: "Cloud Solutions",
    description: "Implementing scalable cloud infrastructure and services for optimal performance.",
    icon: CloudIcon,
    color: "from-[#035D9D] to-[#03388F]"
  },
  {
    title: "AI Integration",
    description: "Leveraging artificial intelligence to enhance business processes and user experiences.",
    icon: CpuChipIcon,
    color: "from-[#03388F] to-[#035D9D]"
  }
];

const ServicesSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.2,
    rootMargin: '-100px 0px',
  });

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

  return (
    <section className="relative py-20 bg-gradient-to-b from-[#053969] to-[#101D26] overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="absolute w-[600px] h-[600px] bg-[#035D9D]/10 rounded-full blur-3xl -top-48 -right-48"
        />
        <motion.div 
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.4, 0.3],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="absolute w-[500px] h-[500px] bg-[#03388F]/10 rounded-full blur-3xl -bottom-32 -left-32"
        />
      </div>

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
            Our Services
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-lg text-gray-400 max-w-2xl mx-auto"
          >
            Comprehensive digital solutions tailored to your business needs
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="group relative bg-[#101D26]/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-800 hover:border-[#035D9D]/50 transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#035D9D]/10 to-[#03388F]/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="relative z-10">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${service.color} p-2 mb-4`}>
                  <service.icon className="w-full h-full text-white" />
                </div>
                
                <h3 className="text-xl font-semibold text-white mb-2">
                  {service.title}
                </h3>
                
                <p className="text-gray-400">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {[
            { number: "100+", label: "Projects Completed" },
            { number: "50+", label: "Happy Clients" },
            { number: "10+", label: "Years Experience" },
            { number: "24/7", label: "Support" }
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              variants={itemVariants}
              className="text-center"
            >
              <div className="text-4xl font-bold text-white mb-2">
                {stat.number}
              </div>
              <div className="text-gray-400">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection; 