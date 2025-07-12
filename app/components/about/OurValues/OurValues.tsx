"use client";
import React from "react";
import { motion } from "framer-motion";

const OurValues: React.FC = () => {
  const features = [
    {
      id: 1,
      tag: "FEATURE 1",
      title: "Product analytics",
      description:
        "Get detailed reports on how your products or services views and interact above user operations vision",
    },
    {
      id: 2,
      tag: "FEATURE 2",
      title: "Multiple integrations",
      description:
        "Integrate with third party tool and get extra access right with your current subscription",
    },
    {
      id: 3,
      tag: "FEATURE 3",
      title: "Product analytics",
      description:
        "Get detailed reports on how your products or services views and interact above user operations vision",
    },
    {
      id: 4,
      tag: "FEATURE 4",
      title: "Product analytics",
      description:
        "Get detailed reports on how your products or services views and interact above user operations vision",
    },
  ];

  return (
    <section className="relative w-full py-24 bg-background text-foreground overflow-hidden">
      {/* Ultra-Enhanced Background System */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Multi-layer sophisticated gradient base */}
        <div className="absolute inset-0 bg-gradient-to-br from-background via-primary/8 to-background" />
        <div className="absolute inset-0 bg-gradient-to-tr from-primary-darker/6 via-transparent to-primary/6" />
        <div className="absolute inset-0 bg-gradient-to-bl from-transparent via-primary-dark/4 to-primary-darker/8" />

        {/* Large floating gradient orbs with enhanced effects */}
        <motion.div
          animate={{
            scale: [1, 1.4, 1.2, 1],
            opacity: [0.4, 0.7, 0.5, 0.4],
            x: [-60, 80, -40, -60],
            y: [-40, 50, -20, -40],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/6 right-1/6 w-[500px] h-[500px] bg-gradient-conic from-primary/15 via-primary-dark/10 to-primary-darker/6 rounded-full blur-3xl"
        />

        <motion.div
          animate={{
            scale: [1, 1.5, 1.3, 1],
            opacity: [0.3, 0.6, 0.4, 0.3],
            x: [50, -70, 30, 50],
            y: [30, -40, 20, 30],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 8,
          }}
          className="absolute bottom-1/6 left-1/6 w-[420px] h-[420px] bg-gradient-conic from-primary-dark/12 via-primary/8 to-primary-darker/10 rounded-full blur-3xl"
        />

        {/* Additional medium orbs */}
        <motion.div
          animate={{
            scale: [1, 1.3, 1.1, 1],
            opacity: [0.2, 0.5, 0.3, 0.2],
            x: [-30, 40, -15, -30],
            y: [20, -25, 10, 20],
            rotate: [0, 270, 180],
          }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 5,
          }}
          className="absolute top-1/3 left-1/4 w-[280px] h-[280px] bg-gradient-radial from-primary/8 via-primary-dark/5 to-transparent rounded-full blur-2xl"
        />

        <motion.div
          animate={{
            scale: [1, 1.2, 1.4, 1],
            opacity: [0.25, 0.4, 0.6, 0.25],
            x: [25, -35, 45, 25],
            y: [-20, 30, -10, -20],
            rotate: [180, 90, 360],
          }}
          transition={{
            duration: 28,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 12,
          }}
          className="absolute bottom-1/3 right-1/4 w-[320px] h-[320px] bg-gradient-radial from-primary-dark/6 via-primary/4 to-transparent rounded-full blur-2xl"
        />

        {/* Enhanced animated grid pattern */}
        <motion.div
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
            opacity: [0.02, 0.04, 0.02],
          }}
          transition={{
            duration: 40,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute inset-0"
          style={{
            backgroundImage: `
              radial-gradient(circle at 2px 2px, rgba(3, 93, 157, 0.4) 1px, transparent 1px),
              linear-gradient(rgba(3, 93, 157, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(3, 93, 157, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: "50px 50px, 50px 50px, 50px 50px",
          }}
        />

        {/* Animated mesh overlay */}
        <motion.div
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
            opacity: [0.015, 0.03, 0.015],
          }}
          transition={{
            duration: 45,
            repeat: Infinity,
            ease: "linear",
            delay: 20,
          }}
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(45deg, rgba(3, 93, 157, 0.05) 1px, transparent 1px),
              linear-gradient(-45deg, rgba(3, 56, 143, 0.05) 1px, transparent 1px)
            `,
            backgroundSize: "80px 80px, 80px 80px",
          }}
        />

        {/* Enhanced floating particles system */}
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [-30, -100, -30],
              x: [-15, 15, -15],
              opacity: [0.1, 0.8, 0.1],
              scale: [0.8, 1.4, 0.8],
            }}
            transition={{
              duration: 12 + i * 1.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 1.8,
            }}
            className="absolute w-2 h-2 bg-primary/40 rounded-full blur-sm"
            style={{
              left: `${10 + i * 8}%`,
              top: `${20 + i * 6}%`,
            }}
          />
        ))}

        {/* Floating light dots */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={`light-${i}`}
            animate={{
              y: [0, -50, 0],
              x: [0, 25, 0],
              opacity: [0.3, 0.9, 0.3],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 15 + i * 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 3,
            }}
            className="absolute w-1 h-1 bg-primary/50 rounded-full"
            style={{
              left: `${20 + i * 10}%`,
              top: `${30 + i * 5}%`,
              filter: "blur(0.5px)",
            }}
          />
        ))}

        {/* Subtle animated rays */}
        <motion.div
          animate={{
            rotate: [0, 360],
            opacity: [0.02, 0.06, 0.02],
          }}
          transition={{
            duration: 60,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute inset-0"
          style={{
            background: `conic-gradient(from 0deg at 30% 70%, 
              transparent 0deg, 
              rgba(3, 93, 157, 0.08) 45deg, 
              transparent 90deg, 
              rgba(3, 56, 143, 0.06) 135deg, 
              transparent 180deg, 
              rgba(5, 57, 105, 0.04) 225deg, 
              transparent 270deg, 
              rgba(3, 93, 157, 0.05) 315deg, 
              transparent 360deg)`,
          }}
        />

        {/* Additional premium floating orbs */}
        <motion.div
          animate={{
            scale: [1, 1.8, 1.1, 1],
            opacity: [0.2, 0.4, 0.3, 0.2],
            x: [-25, 35, -10, -25],
            y: [15, -20, 25, 15],
            rotate: [0, 720, 360],
          }}
          transition={{
            duration: 35,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 15
          }}
          className="absolute top-1/2 left-1/6 w-[280px] h-[280px] bg-gradient-conic from-primary/6 via-primary-dark/4 to-primary-darker/6 rounded-full blur-3xl"
        />

        <motion.div
          animate={{
            scale: [1, 1.5, 1.8, 1],
            opacity: [0.15, 0.45, 0.25, 0.15],
            x: [20, -30, 40, 20],
            y: [-15, 25, -5, -15],
            rotate: [360, 0, 540],
          }}
          transition={{
            duration: 32,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 18
          }}
          className="absolute top-2/3 right-1/5 w-[300px] h-[300px] bg-gradient-conic from-primary-darker/5 via-primary/3 to-primary-dark/7 rounded-full blur-3xl"
        />

        {/* Enhanced hexagonal pattern */}
        <motion.div
          animate={{
            backgroundPosition: ["0% 0%", "200% 200%", "0% 0%"],
            opacity: [0.02, 0.05, 0.02],
          }}
          transition={{
            duration: 50,
            repeat: Infinity,
            ease: "linear",
            delay: 25
          }}
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(30deg, rgba(3, 93, 157, 0.06) 1px, transparent 1px),
              linear-gradient(150deg, rgba(3, 56, 143, 0.06) 1px, transparent 1px),
              linear-gradient(270deg, rgba(5, 57, 105, 0.04) 1px, transparent 1px)
            `,
            backgroundSize: '100px 100px, 100px 100px, 100px 100px'
          }}
        />

        {/* Enhanced floating particles constellation */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={`extra-${i}`}
            animate={{
              y: [-35, -120, -35],
              x: [-18, 18, -18],
              opacity: [0.1, 0.9, 0.1],
              scale: [0.7, 1.6, 0.7],
            }}
            transition={{
              duration: 11 + i * 1.2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: (i + 12) * 1.5
            }}
            className="absolute w-2 h-2 bg-primary/50 rounded-full blur-sm"
            style={{
              left: `${85 - i * 6}%`,
              top: `${70 - i * 5}%`,
            }}
          />
        ))}

        {/* Floating star-like constellation */}
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={`star-${i}`}
            animate={{
              rotate: [0, 360],
              scale: [0.5, 1.2, 0.5],
              opacity: [0.1, 0.6, 0.1],
            }}
            transition={{
              duration: 20 + i * 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 4
            }}
            className="absolute w-1 h-1"
            style={{
              left: `${25 + i * 8}%`,
              top: `${35 + i * 6}%`,
              background: `radial-gradient(circle, rgba(3, 93, 157, 0.8) 0%, transparent 70%)`,
              borderRadius: '50%',
            }}
          />
        ))}

        {/* Enhanced animated rays with multiple layers */}
        <motion.div
          animate={{
            rotate: [360, 0],
            opacity: [0.02, 0.06, 0.02],
          }}
          transition={{
            duration: 70,
            repeat: Infinity,
            ease: "linear",
            delay: 30
          }}
          className="absolute inset-0"
          style={{
            background: `conic-gradient(from 180deg at 75% 25%, 
              transparent 0deg, 
              rgba(3, 93, 157, 0.06) 45deg, 
              transparent 90deg, 
              rgba(3, 56, 143, 0.04) 135deg, 
              transparent 180deg, 
              rgba(5, 57, 105, 0.05) 225deg, 
              transparent 270deg, 
              rgba(3, 93, 157, 0.04) 315deg, 
              transparent 360deg)`
          }}
        />

        {/* Pulsing energy waves */}
        <motion.div
          animate={{
            scale: [1, 2.5, 1],
            opacity: [0, 0.15, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] border border-primary/20 rounded-full"
        />

        <motion.div
          animate={{
            scale: [1, 3, 1],
            opacity: [0, 0.1, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 4
          }}
          className="absolute top-1/3 right-1/3 w-[150px] h-[150px] border border-primary-dark/15 rounded-full"
        />

        {/* Floating nebula-like effects */}
        <motion.div
          animate={{
            scale: [1, 1.6, 1.2, 1],
            opacity: [0.1, 0.3, 0.2, 0.1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 45,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/4 right-1/6 w-[400px] h-[200px] bg-gradient-to-r from-primary/8 via-primary-dark/4 to-transparent rounded-full blur-3xl transform rotate-45"
        />

        <motion.div
          animate={{
            scale: [1, 1.4, 1.7, 1],
            opacity: [0.08, 0.25, 0.15, 0.08],
            rotate: [180, 360, 540],
          }}
          transition={{
            duration: 38,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 20
          }}
          className="absolute bottom-1/4 left-1/8 w-[350px] h-[180px] bg-gradient-to-l from-primary-dark/6 via-primary/3 to-transparent rounded-full blur-3xl transform -rotate-45"
        />

        {/* Dynamic aurora-like effects */}
        <motion.div
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%", "50% 50%", "0% 0%"],
            opacity: [0.02, 0.08, 0.05, 0.02],
          }}
          transition={{
            duration: 60,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(ellipse 800px 400px at 20% 30%, rgba(3, 93, 157, 0.06) 0%, transparent 50%),
              radial-gradient(ellipse 600px 300px at 80% 70%, rgba(3, 56, 143, 0.04) 0%, transparent 50%),
              radial-gradient(ellipse 400px 600px at 40% 80%, rgba(5, 57, 105, 0.05) 0%, transparent 50%)
            `
          }}
        />

        {/* Enhanced depth creating shadow layers */}
        <div className="absolute inset-0 bg-gradient-to-t from-background/25 via-transparent to-background/15" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/3 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/10 via-transparent to-background/10" />
        <div className="absolute inset-0 bg-gradient-to-l from-transparent via-primary/2 to-transparent" />
        
        {/* Ultra-Premium Cinematic Effects */}
        
        {/* Floating plasma orbs with enhanced physics */}
        <motion.div
          animate={{
            scale: [1, 2.2, 1.6, 1],
            opacity: [0.1, 0.5, 0.3, 0.1],
            x: [-40, 60, -20, -40],
            y: [30, -45, 35, 30],
            rotate: [0, 540, 270, 0],
          }}
          transition={{
            duration: 42,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 22
          }}
          className="absolute top-1/5 left-1/8 w-[360px] h-[360px] bg-gradient-conic from-primary/8 via-primary-dark/5 to-primary-darker/8 rounded-full blur-4xl"
        />

        <motion.div
          animate={{
            scale: [1, 1.9, 2.1, 1],
            opacity: [0.08, 0.4, 0.2, 0.08],
            x: [35, -55, 45, 35],
            y: [-25, 40, -15, -25],
            rotate: [180, 0, 720, 180],
          }}
          transition={{
            duration: 38,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 25
          }}
          className="absolute bottom-1/5 right-1/8 w-[320px] h-[320px] bg-gradient-conic from-primary-darker/6 via-primary/4 to-primary-dark/7 rounded-full blur-4xl"
        />

        {/* Advanced morphing gradient fields */}
        <motion.div
          animate={{
            backgroundPosition: ["0% 0%", "300% 300%", "150% 150%", "0% 0%"],
            opacity: [0.03, 0.12, 0.08, 0.03],
            scale: [1, 1.3, 1.1, 1],
          }}
          transition={{
            duration: 80,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute inset-0"
          style={{
            background: `
              conic-gradient(from 45deg at 15% 25%, rgba(3, 93, 157, 0.08) 0deg, transparent 120deg),
              conic-gradient(from 225deg at 85% 75%, rgba(3, 56, 143, 0.06) 60deg, transparent 180deg),
              conic-gradient(from 135deg at 50% 50%, rgba(5, 57, 105, 0.04) 90deg, transparent 270deg)
            `
          }}
        />

        {/* Prismatic light beams */}
        <motion.div
          animate={{
            rotate: [0, 720],
            opacity: [0.01, 0.08, 0.04, 0.01],
            scale: [0.8, 1.4, 1.1, 0.8],
          }}
          transition={{
            duration: 90,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute inset-0"
          style={{
            background: `
              linear-gradient(15deg, transparent 0%, rgba(3, 93, 157, 0.04) 20%, transparent 40%),
              linear-gradient(75deg, transparent 20%, rgba(3, 56, 143, 0.03) 50%, transparent 80%),
              linear-gradient(135deg, transparent 40%, rgba(5, 57, 105, 0.02) 70%, transparent 100%),
              linear-gradient(195deg, transparent 10%, rgba(3, 93, 157, 0.03) 60%, transparent 90%)
            `
          }}
        />

        {/* Dynamic constellation patterns */}
        {[...Array(18)].map((_, i) => (
          <motion.div
            key={`constellation-${i}`}
            animate={{
              y: [-40, -150, -40],
              x: [-20, 20, -20],
              opacity: [0.05, 1, 0.05],
              scale: [0.5, 2, 0.5],
              rotate: [0, 360, 720],
            }}
            transition={{
              duration: 15 + i * 2.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 2.2
            }}
            className="absolute w-1.5 h-1.5 bg-primary/60 rounded-full"
            style={{
              left: `${5 + i * 5.2}%`,
              top: `${10 + (i % 3) * 25}%`,
              filter: 'blur(0.2px)',
              boxShadow: `0 0 ${4 + i}px rgba(3, 93, 157, 0.6)`
            }}
          />
        ))}

        {/* Quantum field distortions */}
        <motion.div
          animate={{
            backgroundPosition: ["0% 0%", "400% 400%", "200% 200%", "0% 0%"],
            opacity: [0.015, 0.06, 0.04, 0.015],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 120,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(ellipse 1200px 600px at 10% 20%, rgba(3, 93, 157, 0.04) 0%, transparent 60%),
              radial-gradient(ellipse 800px 900px at 90% 80%, rgba(3, 56, 143, 0.03) 0%, transparent 70%),
              radial-gradient(ellipse 600px 400px at 30% 90%, rgba(5, 57, 105, 0.02) 0%, transparent 50%),
              radial-gradient(ellipse 900px 500px at 70% 10%, rgba(3, 93, 157, 0.025) 0%, transparent 65%)
            `
          }}
        />

        {/* Pulsing energy matrices */}
        <motion.div
          animate={{
            scale: [1, 4, 2, 1],
            opacity: [0, 0.2, 0.1, 0],
            rotate: [0, 90, 180, 270, 360],
          }}
          transition={{
            duration: 16,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/4 left-1/4 w-[100px] h-[100px] border border-primary/25 rounded-full"
        />

        <motion.div
          animate={{
            scale: [1, 3.5, 1.8, 1],
            opacity: [0, 0.15, 0.08, 0],
            rotate: [360, 270, 180, 90, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 8
          }}
          className="absolute bottom-1/4 right-1/4 w-[120px] h-[120px] border border-primary-dark/20 rounded-full"
        />

        <motion.div
          animate={{
            scale: [1, 5, 2.5, 1],
            opacity: [0, 0.12, 0.06, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 24,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 12
          }}
          className="absolute top-2/3 left-2/3 w-[80px] h-[80px] border border-primary-darker/15 rounded-full"
        />

        {/* Advanced light vortex */}
        <motion.div
          animate={{
            rotate: [0, 1440],
            scale: [0.5, 2, 1, 0.5],
            opacity: [0.02, 0.1, 0.06, 0.02],
          }}
          transition={{
            duration: 100,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px]"
          style={{
            background: `
              conic-gradient(from 0deg, 
                transparent 0deg, 
                rgba(3, 93, 157, 0.06) 30deg, 
                transparent 60deg, 
                rgba(3, 56, 143, 0.04) 90deg, 
                transparent 120deg, 
                rgba(5, 57, 105, 0.05) 150deg, 
                transparent 180deg, 
                rgba(3, 93, 157, 0.03) 210deg, 
                transparent 240deg, 
                rgba(3, 56, 143, 0.04) 270deg, 
                transparent 300deg, 
                rgba(5, 57, 105, 0.02) 330deg, 
                transparent 360deg)
            `,
            borderRadius: '50%',
            filter: 'blur(4px)'
          }}
        />

        {/* Floating geometric shapes */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={`geo-${i}`}
            animate={{
              y: [-30, -80, -30],
              x: [-15, 15, -15],
              rotate: [0, 360, 720],
              opacity: [0.1, 0.5, 0.1],
              scale: [0.8, 1.5, 0.8],
            }}
            transition={{
              duration: 25 + i * 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 5
            }}
            className="absolute w-2 h-2 border border-primary/30 rounded-full"
            style={{
              left: `${20 + i * 10}%`,
              top: `${25 + i * 8}%`,
              filter: 'blur(1px)',
              transform: i % 2 === 0 ? 'rotate(45deg)' : 'rotate(0deg)'
            }}
          />
        ))}

        {/* Holographic interference patterns */}
        <motion.div
          animate={{
            backgroundPosition: ["0% 0%", "500% 500%", "250% 250%", "0% 0%"],
            opacity: [0.01, 0.05, 0.03, 0.01],
          }}
          transition={{
            duration: 150,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute inset-0"
          style={{
            backgroundImage: `
              repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(3, 93, 157, 0.02) 2px, rgba(3, 93, 157, 0.02) 4px),
              repeating-linear-gradient(60deg, transparent, transparent 3px, rgba(3, 56, 143, 0.015) 3px, rgba(3, 56, 143, 0.015) 6px),
              repeating-linear-gradient(120deg, transparent, transparent 2.5px, rgba(5, 57, 105, 0.01) 2.5px, rgba(5, 57, 105, 0.01) 5px)
            `,
          }}
        />

        {/* Atmospheric depth enhancers */}
        <div className="absolute inset-0 bg-gradient-to-t from-background/35 via-transparent to-background/20" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/4 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/15 via-transparent to-background/15" />
        <div className="absolute inset-0 bg-gradient-to-l from-transparent via-primary/3 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-br from-background/10 via-transparent to-primary/2" />
        <div className="absolute inset-0 bg-gradient-to-tl from-primary/2 via-transparent to-background/10" />
        
        {/* Final cinematic overlay */}
        <div className="absolute inset-0 bg-gradient-radial from-transparent via-primary/2 to-background/8" />
        <div className="absolute inset-0 bg-gradient-conic from-transparent via-primary/1 to-transparent" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        {/* Enhanced Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
          className="text-center mb-20 relative"
        >
          {/* Header background glow */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent blur-3xl" />

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight max-w-4xl mx-auto mb-6"
          >
            <span className="inline-block relative">
              <motion.span
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="text-transparent bg-clip-text bg-gradient-to-r from-foreground via-primary to-foreground"
                style={{
                  backgroundSize: "200% 200%",
                }}
              >
                Our Values
              </motion.span>
              <motion.div
                animate={{
                  scaleX: [0, 1, 0],
                  opacity: [0, 0.6, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1.5,
                }}
                className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-primary/60 to-primary-dark/60 rounded-full"
              />
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
            viewport={{ once: true }}
            className="text-lg text-foreground/70 max-w-2xl mx-auto leading-relaxed"
          >
            Explore what sets us apart and drives exceptional results for our
            clients
          </motion.p>
        </motion.div>

        {/* Enhanced Timeline Section */}
        <div className="relative max-w-5xl mx-auto">
          {/* Enhanced Vertical Timeline Line */}
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            transition={{ duration: 1.5, ease: "easeOut", delay: 0.6 }}
            viewport={{ once: true }}
            className="absolute left-1/2 transform -translate-x-1/2 top-20 bottom-8 w-px bg-gradient-to-b from-primary/40 via-primary/60 to-primary/20 origin-top"
          />

          {/* Animated glow effect for timeline */}
          <motion.div
            animate={{
              opacity: [0.3, 0.8, 0.3],
              scaleY: [0.8, 1.2, 0.8],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute left-1/2 transform -translate-x-1/2 top-20 bottom-8 w-1 bg-gradient-to-b from-primary/20 via-primary/30 to-primary/10 blur-sm"
          />

          {/* Timeline Items */}
          <div className="space-y-20">
            {features.map((feature, index) => (
              <motion.div
                key={feature.id}
                initial={{ opacity: 0, y: 40, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{
                  duration: 0.8,
                  ease: [0.22, 1, 0.36, 1],
                  delay: 0.3 * index,
                }}
                viewport={{ once: true }}
                className="relative group"
              >
                {/* Desktop Layout */}
                <div className="hidden md:flex items-center">
                  {/* Left Side - Tag and Title */}
                  <motion.div
                    initial={{ opacity: 0, x: -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{
                      duration: 0.6,
                      ease: "easeOut",
                      delay: 0.4 * index,
                    }}
                    viewport={{ once: true }}
                    className="w-1/2 pr-16 text-right"
                  >
                    <div className="relative inline-block mb-1">
                      <motion.div
                        animate={{
                          backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: index * 1.5,
                        }}
                        className="inline-block px-4 py-2 rounded-full bg-gradient-to-br from-primary to-primary-dark group-hover:from-primary-dark group-hover:to-primary-darker border border-primary/30 backdrop-blur-md mb-3 shadow-lg shadow-primary/20"
                      >
                        <span className="text-xs text-white font-medium tracking-wider">
                          {feature.tag}
                        </span>
                      </motion.div>
                    </div>

                    <motion.h3
                      className="text-xl font-bold text-foreground group-hover:text-primary transition-all duration-500"
                      whileHover={{ scale: 1.05 }}
                    >
                      <span className="relative">
                        {feature.title}
                        <motion.div
                          className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-primary/60 to-primary-dark/60 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                          layoutId={`desktop-underline-${feature.id}`}
                        />
                      </span>
                    </motion.h3>
                  </motion.div>

                  {/* Enhanced Center Timeline Node */}
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{
                      duration: 0.5,
                      ease: [0.22, 1, 0.36, 1],
                      delay: 0.5 * index,
                    }}
                    viewport={{ once: true }}
                    className="relative flex-shrink-0 z-20"
                  >
                    <div
                      className={`w-4 h-4 rounded-full border-2 border-primary/40 ${
                        index === 0
                          ? "bg-gradient-to-br from-primary to-primary-dark"
                          : "bg-background border-primary/60"
                      } shadow-lg shadow-primary/30 transition-all duration-500 group-hover:scale-125 group-hover:shadow-primary/50`}
                    >
                      <motion.div
                        animate={{
                          scale: [1, 1.2, 1],
                          opacity: [0.8, 1, 0.8],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: index * 0.5,
                        }}
                        className={`w-full h-full rounded-full ${
                          index === 0
                            ? "bg-gradient-to-br from-primary to-primary-dark"
                            : "bg-primary/20"
                        }`}
                      />
                    </div>

                    {/* Node glow effect */}
                    <motion.div
                      animate={{
                        scale: [1, 1.5, 1],
                        opacity: [0, 0.6, 0],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: index * 1,
                      }}
                      className="absolute inset-0 bg-primary/30 rounded-full blur-md -z-10"
                    />
                  </motion.div>

                  {/* Right Side - Description */}
                  <motion.div
                    initial={{ opacity: 0, x: 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{
                      duration: 0.6,
                      ease: "easeOut",
                      delay: 0.6 * index,
                    }}
                    viewport={{ once: true }}
                    className="w-1/2 pl-12"
                  >
                    <div className="relative bg-gradient-to-br from-white/8 via-white/5 to-white/3 backdrop-blur-md rounded-2xl p-8 border border-white/15 hover:border-primary/40 transition-all duration-700 hover:bg-gradient-to-br hover:from-white/12 hover:via-white/8 hover:to-white/5 group-hover:shadow-2xl group-hover:shadow-primary/20 hover:scale-[1.02] overflow-hidden">
                      {/* Enhanced background effects */}
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-primary-dark/3 to-primary-darker/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-primary/2 to-transparent opacity-50" />

                      {/* Floating inner particles */}
                      <div className="absolute inset-0 overflow-hidden rounded-2xl">
                        {[...Array(6)].map((_, i) => (
                          <motion.div
                            key={i}
                            animate={{
                              y: [-10, -30, -10],
                              x: [-5, 5, -5],
                              opacity: [0.1, 0.4, 0.1],
                              scale: [0.8, 1.2, 0.8],
                            }}
                            transition={{
                              duration: 8 + i,
                              repeat: Infinity,
                              ease: "easeInOut",
                              delay: i * 1.5,
                            }}
                            className="absolute w-1 h-1 bg-primary/30 rounded-full blur-[0.5px]"
                            style={{
                              left: `${20 + i * 15}%`,
                              top: `${30 + i * 10}%`,
                            }}
                          />
                        ))}
                      </div>

                      <p className="relative z-10 text-foreground/85 leading-relaxed group-hover:text-foreground/95 transition-colors duration-500 text-[15px]">
                        {feature.description}
                      </p>

                      {/* Enhanced glow effects */}
                      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary/6 via-primary-dark/6 to-primary-darker/6 opacity-0 group-hover:opacity-100 blur-2xl transition-opacity duration-700 -z-10" />
                      <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-primary/3 via-primary-dark/3 to-primary-darker/3 opacity-0 group-hover:opacity-60 blur-xl transition-opacity duration-700 -z-20" />

                      {/* Shimmer effect */}
                      <motion.div
                        animate={{
                          x: [-100, 200],
                          opacity: [0, 0.3, 0],
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: index * 2,
                        }}
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/10 to-transparent skew-x-12 opacity-0 group-hover:opacity-100"
                      />
                    </div>
                  </motion.div>
                </div>

                {/* Enhanced Mobile Layout */}
                <div className="md:hidden">
                  <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{
                      duration: 0.6,
                      ease: "easeOut",
                      delay: 0.3 * index,
                    }}
                    viewport={{ once: true }}
                    className="flex items-start bg-gradient-to-br from-white/8 via-white/5 to-white/3 backdrop-blur-md rounded-2xl p-6 border border-white/15 hover:border-primary/40 transition-all duration-700 hover:bg-gradient-to-br hover:from-white/12 hover:via-white/8 hover:to-white/5 hover:shadow-xl hover:shadow-primary/15 hover:scale-[1.02] overflow-hidden"
                  >
                    {/* Timeline Node */}
                    <div className="flex-shrink-0 mt-1 mr-6">
                      <div
                        className={`w-4 h-4 rounded-full border-2 border-primary/40 ${
                          index === 0
                            ? "bg-gradient-to-br from-primary to-primary-dark"
                            : "bg-background border-primary/60"
                        } shadow-lg shadow-primary/30`}
                      >
                        <motion.div
                          animate={{
                            scale: [1, 1.2, 1],
                            opacity: [0.8, 1, 0.8],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: index * 0.5,
                          }}
                          className={`w-full h-full rounded-full ${
                            index === 0
                              ? "bg-gradient-to-br from-primary to-primary-dark"
                              : "bg-primary/20"
                          }`}
                        />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <div className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-primary/20 via-primary-dark/15 to-primary/10 border border-primary/30 backdrop-blur-md mb-3 shadow-lg shadow-primary/20">
                        <span className="text-xs text-primary font-medium tracking-wider">
                          {feature.tag}
                        </span>
                      </div>

                      <h3 className="text-xl font-bold text-foreground mb-3">
                        {feature.title}
                      </h3>

                      <p className="text-foreground/80 leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Timeline End Decoration */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
              delay: 1.2,
            }}
            viewport={{ once: true }}
            className="flex justify-center mt-20"
          >
            <div className="w-6 h-6 bg-gradient-to-br from-primary/30 to-primary-dark/20 rounded-full border border-primary/30 backdrop-blur-sm">
              <motion.div
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.6, 1, 0.6],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="w-full h-full bg-gradient-to-br from-primary/40 to-primary-dark/30 rounded-full"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default OurValues;