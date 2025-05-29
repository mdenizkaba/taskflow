'use client'

import React, { useEffect, useState } from "react";

const SPEEDS = ["animate-star-slow", "animate-star", "animate-star-fast"];

const getRandom = (min: number, max: number) => Math.random() * (max - min) + min;

interface RandomStarsProps {
  count?: number;
  width?: number;
  height?: number;
}

const RandomStars: React.FC<RandomStarsProps> = ({ count = 50, width = 400, height = 30 }) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return (
      <div 
        className="relative overflow-hidden" 
        style={{ width: `${width}px`, height: `${height}px` }}
      />
    );
  }

  const stars = Array.from({ length: count }).map((_, i) => {
    const left = getRandom(0, width);
    const top = getRandom(0, height);
    const size = getRandom(0.5, 1) * 2;
    const moveX = `${getRandom(-3, 3)}px`;
    const speed = SPEEDS[Math.floor(Math.random() * SPEEDS.length)];

    return (
      <div
        key={i}
        className={`absolute rounded-full ${speed} bg-white`}
        style={{
          left: `${left}px`,
          top: `${top}px`,
          width: `${size}px`,
          height: `${size}px`,
          transform: `translateX(var(--move-x))`,
          "--move-x": moveX,
        } as React.CSSProperties}
      />
    );
  });

  return (
    <div 
      className="relative overflow-hidden"
      style={{ width: `${width}px`, height: `${height}px` }}
    >
      {stars}
    </div>
  );
};

export default RandomStars;
