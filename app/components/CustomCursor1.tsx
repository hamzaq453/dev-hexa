'use client';

import { useEffect, useState } from 'react';

const CustomCursor1 = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [magneticOffset, setMagneticOffset] = useState({ x: 0, y: 0 });

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
      setPosition({ x: e.clientX, y: e.clientY });
      
      // Magnetic effect calculation
      const target = e.target as HTMLElement;
      if (target.tagName.toLowerCase() === 'a' || target.tagName.toLowerCase() === 'button') {
        const rect = target.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        
        const distanceX = e.clientX - centerX;
        const distanceY = e.clientY - centerY;
        
        setMagneticOffset({
          x: -distanceX * 0.2,
          y: -distanceY * 0.2
        });
      } else {
        setMagneticOffset({ x: 0, y: 0 });
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
      setMagneticOffset({ x: 0, y: 0 });
    };

    addEventListeners();
    return () => removeEventListeners();
  }, []);

  return (
    <>
      {/* Main cursor */}
      <div
        style={{
          backgroundColor: '#FF3366',
          height: isHovered ? 12 : 8,
          width: isHovered ? 12 : 8,
          borderRadius: '50%',
          position: 'fixed',
          top: 0,
          left: 0,
          pointerEvents: 'none',
          zIndex: 9999,
          transform: `translate(${position.x - (isHovered ? 6 : 4) + magneticOffset.x}px, ${position.y - (isHovered ? 6 : 4) + magneticOffset.y}px)`,
          transition: 'all 0.3s cubic-bezier(0.33, 1, 0.68, 1)',
          boxShadow: isHovered ? '0 0 20px rgba(255, 51, 102, 0.5)' : 'none',
        }}
      />
      {/* Trailing effect */}
      <div
        style={{
          border: '2px solid #FF3366',
          height: isHovered ? 60 : 40,
          width: isHovered ? 60 : 40,
          borderRadius: '50%',
          position: 'fixed',
          top: 0,
          left: 0,
          pointerEvents: 'none',
          zIndex: 9998,
          transform: `translate(${position.x - (isHovered ? 30 : 20) + magneticOffset.x * 0.5}px, ${position.y - (isHovered ? 30 : 20) + magneticOffset.y * 0.5}px)`,
          transition: 'all 0.3s cubic-bezier(0.33, 1, 0.68, 1)',
          opacity: 0.5,
        }}
      />
    </>
  );
};

export default CustomCursor1; 