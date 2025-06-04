"use client";
import React, { useEffect, useState } from "react";

interface CountUpProps {
  end: number;
  duration?: number; // in ms
  className?: string;
}

const CountUp: React.FC<CountUpProps> = ({ end, duration = 1200, className }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = end / (duration / 16);
    let frame: number;

    const animate = () => {
      start += increment;
      if (start < end) {
        setCount(Math.floor(start));
        frame = requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };
    animate();
    return () => cancelAnimationFrame(frame);
  }, [end, duration]);

  return <span className={className}>{count}</span>;
};

export default CountUp; 