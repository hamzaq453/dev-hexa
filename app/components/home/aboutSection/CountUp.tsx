"use client";
import React, { useEffect, useState, useRef } from "react";
import { useInView } from "framer-motion";

interface CountUpProps {
  end: number;
  duration?: number; // in ms
  className?: string;
}

const CountUp: React.FC<CountUpProps> = ({ end, duration = 1200, className }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { 
    once: true, // Only trigger once
    amount: 0.3 // Trigger when 30% of the element is visible
  });

  useEffect(() => {
    if (!isInView) return;

    // Reset count to 0 when starting animation
    setCount(0);
    
    let startTimestamp: number | null = null;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      const currentCount = Math.floor(progress * end);
      
      setCount(currentCount);
      
      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      } else {
        setCount(end); // Ensure we end exactly at the target value
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [isInView, end, duration]);

  return <span ref={ref} className={className}>{count}</span>;
};

export default CountUp; 