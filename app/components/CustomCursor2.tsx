'use client';

import { useEffect, useState, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  size: number;
  color: string;
  speedX: number;
  speedY: number;
  life: number;
}

const CustomCursor2 = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [particles, setParticles] = useState<Particle[]>([]);
  const lastPosition = useRef({ x: -100, y: -100 });

  useEffect(() => {
    document.body.style.cursor = 'none';
    
    const addEventListeners = () => {
      document.addEventListener('mousemove', onMouseMove);
      document.addEventListener('mouseover', onMouseOver);
      document.addEventListener('mouseout', onMouseOut);
    };

    const removeEventListeners = () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseover', onMouseOver);
      document.removeEventListener('mouseout', onMouseOut);
    };

    const onMouseMove = (e: MouseEvent) => {
      const newPosition = { x: e.clientX, y: e.clientY };
      setPosition(newPosition);

      // Create particles based on movement
      if (Math.abs(newPosition.x - lastPosition.current.x) > 5 || 
          Math.abs(newPosition.y - lastPosition.current.y) > 5) {
        const newParticle: Particle = {
          x: lastPosition.current.x,
          y: lastPosition.current.y,
          size: Math.random() * 4 + 2,
          color: `hsl(${Math.random() * 60 + 200}, 100%, 50%)`,
          speedX: (newPosition.x - lastPosition.current.x) * 0.1,
          speedY: (newPosition.y - lastPosition.current.y) * 0.1,
          life: 1
        };
        setParticles(prev => [...prev, newParticle]);
      }

      lastPosition.current = newPosition;
    };

    const onMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName.toLowerCase() === 'a' ||
        target.tagName.toLowerCase() === 'button' ||
        target.closest('a') ||
        target.closest('button') ||
        getComputedStyle(target).cursor === 'pointer'
      ) {
        setIsHovered(true);
      }
    };

    const onMouseOut = () => {
      setIsHovered(false);
    };

    // Particle animation
    const animateParticles = () => {
      setParticles(prev => 
        prev
          .map(particle => ({
            ...particle,
            x: particle.x + particle.speedX,
            y: particle.y + particle.speedY,
            life: particle.life - 0.02,
            size: particle.size * 0.95
          }))
          .filter(particle => particle.life > 0)
      );
    };

    const animationFrame = setInterval(animateParticles, 16);
    addEventListeners();

    return () => {
      removeEventListeners();
      clearInterval(animationFrame);
    };
  }, []);

  return (
    <>
      {/* Main cursor */}
      <div
        style={{
          backgroundColor: '#4A90E2',
          height: isHovered ? 16 : 12,
          width: isHovered ? 16 : 12,
          borderRadius: '50%',
          position: 'fixed',
          top: 0,
          left: 0,
          pointerEvents: 'none',
          zIndex: 9999,
          transform: `translate(${position.x - (isHovered ? 8 : 6)}px, ${position.y - (isHovered ? 8 : 6)}px)`,
          transition: 'all 0.2s ease-out',
          mixBlendMode: 'difference',
        }}
      />
      {/* Particles */}
      {particles.map((particle, index) => (
        <div
          key={index}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: particle.size,
            height: particle.size,
            backgroundColor: particle.color,
            borderRadius: '50%',
            pointerEvents: 'none',
            zIndex: 9998,
            transform: `translate(${particle.x}px, ${particle.y}px)`,
            opacity: particle.life,
            transition: 'opacity 0.1s linear',
          }}
        />
      ))}
    </>
  );
};

export default CustomCursor2; 