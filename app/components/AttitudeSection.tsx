'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const stats = [
  {
    number: "20+",
    label: "Projects"
  },
  {
    number: "25,000",
    label: "Lines of code"
  },
  {
    number: "10+",
    label: "Satisfied Clients"
  }
];

const AttitudeSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
    rootMargin: '-50px 0px',
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
    <section className="relative py-12 bg-black overflow-hidden">
      {/* Accent decoration */}
      <div className="absolute left-0 top-1/2 transform -translate-y-1/2">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="w-4 h-20 bg-red-600 rounded-r-full"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
        >
          {/* Left column - Title */}
          <motion.div variants={itemVariants}>
            <h2 className="text-5xl sm:text-6xl md:text-7xl font-bold text-white leading-tight">
              Our<br />
              Can Do<br />
              Attitude
            </h2>
          </motion.div>

          {/* Right column - Text */}
          <motion.div variants={itemVariants} className="space-y-6">
            <p className="text-white text-lg">
              Hexa Flow has made major changes in the process to complete each project. We are not limited to a single industry 
              which has allowed us to create a vast portfolio. Our quality oriented working standard has allowed us to cater to 
              regions all over the world.
            </p>
            <p className="text-white text-lg">
              This has allowed us to become a market leader in software services while also maintaining a strong position in 
              many other services. The need to be creative at all times has allowed our project managers to create long lasting 
              relationships with many businesses. We love to go the extra mile for our clients if it means an increase in the level of 
              satisfaction for their project.
            </p>
          </motion.div>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-gray-800 pt-16"
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              variants={itemVariants}
              className="text-center"
            >
              <div className="text-6xl font-bold text-white mb-2">
                {stat.number}
              </div>
              <div className="text-gray-400 text-xl">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AttitudeSection; 