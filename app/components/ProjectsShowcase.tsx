'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';
import Link from 'next/link';

const projects = [
  {
    title: "GuttaBaby Apparel",
    description: "Web Design - Web Development - Logo Design",
    image: "/project1.jpg",
    link: "/projects/guttababy",
    color: "from-purple-600/20 to-blue-600/20"
  },
  {
    title: "Lucky Aces",
    description: "Branding - Website Design - Development - Social Media",
    image: "/project2.jpeg",
    link: "/projects/luckyaces",
    color: "from-green-600/20 to-blue-600/20"
  },
  {
    title: "Mystic Marguerite",
    description: "Web Design - Development - Branding",
    image: "/project3.jpg",
    link: "/projects/mystic",
    color: "from-pink-600/20 to-purple-600/20"
  }
];

const ProjectsShowcase = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="relative py-20 bg-[#101D26] overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-[800px] h-[800px] bg-[#035D9D]/5 rounded-full blur-3xl -top-96 -right-96 rotate-45"></div>
        <div className="absolute w-[600px] h-[600px] bg-[#03388F]/5 rounded-full blur-3xl -bottom-64 -left-64 rotate-12"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Explore our latest work and see how we help businesses transform their digital presence
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`group relative overflow-hidden rounded-2xl ${
                index === 2 ? 'lg:col-span-2 flex justify-center' : ''
              }`}
            >
              <Link href={project.link} className={index === 2 ? 'w-[584px] rounded-2xl overflow-hidden' : 'w-full'}>
                <div className="relative aspect-[16/9] overflow-hidden w-full h-full">
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-20 group-hover:opacity-30 transition-opacity duration-300`} />
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    priority={index === 0}
                    className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  
                  <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                    >
                      <h3 className="text-2xl font-bold text-white mb-2">
                        {project.title}
                      </h3>
                      <p className="text-gray-300 text-sm">
                        {project.description}
                      </p>
                    </motion.div>
                  </div>

                  <motion.div
                    className="absolute top-4 right-4 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    whileHover={{ scale: 1.05 }}
                  >
                    <span className="text-white text-sm font-medium">View Project</span>
                  </motion.div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <Link 
            href="/projects"
            className="inline-flex items-center justify-center px-8 py-3 border-2 border-[#035D9D] text-white rounded-full font-medium hover:bg-[#035D9D]/10 transition-colors duration-300"
          >
            View All Projects
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsShowcase; 