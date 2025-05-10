'use client';

import { useEffect, useState, useRef } from 'react';

interface TrailPoint {
  x: number;
  y: number;
  timestamp: number;
}

const CustomCursor3 = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [trail, setTrail] = useState<TrailPoint[]>([]);
  const lastUpdate = useRef(0);

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
      const now = Date.now();
      if (now - lastUpdate.current > 16) { // Limit to ~60fps
        setPosition({ x: e.clientX, y: e.clientY });
        setTrail(prev => {
          const newTrail = [
            { x: e.clientX, y: e.clientY, timestamp: now },
            ...prev
          ].slice(0, 20); // Keep last 20 points
          return newTrail;
        });
        lastUpdate.current = now;
      }
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

    // Clean up old trail points
    const cleanupInterval = setInterval(() => {
      const now = Date.now();
      setTrail(prev => prev.filter(point => now - point.timestamp < 500));
    }, 100);

    addEventListeners();
    return () => {
      removeEventListeners();
      clearInterval(cleanupInterval);
    };
  }, []);

  return (
    <>
      {/* Gradient trail */}
      <svg
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          pointerEvents: 'none',
          zIndex: 9998,
        }}
      >
        <defs>
          <linearGradient id="cursorGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#FF6B6B" />
            <stop offset="50%" stopColor="#4ECDC4" />
            <stop offset="100%" stopColor="#45B7D1" />
          </linearGradient>
        </defs>
        {trail.length > 1 && (
          <path
            d={`M ${trail.map(point => `${point.x},${point.y}`).join(' L ')}`}
            stroke="url(#cursorGradient)"
            strokeWidth={isHovered ? 4 : 2}
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{
              transition: 'stroke-width 0.2s ease-out',
            }}
          />
        )}
      </svg>
      
      {/* Main cursor */}
      <div
        style={{
          backgroundColor: '#FF6B6B',
          height: isHovered ? 20 : 16,
          width: isHovered ? 20 : 16,
          borderRadius: '50%',
          position: 'fixed',
          top: 0,
          left: 0,
          pointerEvents: 'none',
          zIndex: 9999,
          transform: `translate(${position.x - (isHovered ? 10 : 8)}px, ${position.y - (isHovered ? 10 : 8)}px)`,
          transition: 'all 0.2s ease-out',
          boxShadow: '0 0 20px rgba(255, 107, 107, 0.5)',
          background: 'linear-gradient(45deg, #FF6B6B, #4ECDC4)',
        }}
      />
    </>
  );
};

export default CustomCursor3; 