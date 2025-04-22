'use client';

import { useEffect, useState } from 'react';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [trailPosition, setTrailPosition] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    // Add cursor styles to body
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
      // Immediate update for the dot
      setPosition({ x: e.clientX, y: e.clientY });
      
      // Delayed update for the trailing circle
      requestAnimationFrame(() => {
        setTrailPosition({ x: e.clientX, y: e.clientY });
      });
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

    addEventListeners();
    return () => removeEventListeners();
  }, []);

  return (
    <>
      {/* Cursor Dot */}
      <div
        style={{
          backgroundColor: '#035D9D',
          height: 8,
          width: 8,
          borderRadius: '50%',
          position: 'fixed',
          top: 0,
          left: 0,
          pointerEvents: 'none',
          zIndex: 9999,
          transform: `translate(${position.x - 4}px, ${position.y - 4}px)`,
          opacity: isHovered ? 0 : 1,
          transition: 'opacity 0.15s ease-in-out',
        }}
      />
      {/* Cursor Ring */}
      <div
        style={{
          border: '2px solid #035D9D',
          height: isHovered ? 48 : 40,
          width: isHovered ? 48 : 40,
          borderRadius: '50%',
          position: 'fixed',
          top: 0,
          left: 0,
          pointerEvents: 'none',
          zIndex: 9998,
          transform: `translate(${trailPosition.x - (isHovered ? 24 : 20)}px, ${trailPosition.y - (isHovered ? 24 : 20)}px)`,
          transition: 'transform 0.3s cubic-bezier(0.33, 1, 0.68, 1), width 0.2s ease-out, height 0.2s ease-out',
        }}
      />
    </>
  );
};

export default CustomCursor; 