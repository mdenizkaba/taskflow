"use client"
import React, { useEffect, useState } from "react";

const COLORS = ["star-color-white"];
const SPEEDS = ["animate-star-slow", "animate-star", "animate-star-fast"];

const getRandom = (min: number, max: number) => Math.random() * (max - min) + min;

const RandomStars = ({ count = 50, width = 400, height = 30 }: {
  count?: number;
  width?: number;
  height?: number;
}) => {
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
    const color = COLORS[Math.floor(Math.random() * COLORS.length)];
    const speed = SPEEDS[Math.floor(Math.random() * SPEEDS.length)];

    return (
      <div
        key={i}
        className={`absolute rounded-full ${speed} ${color}`}
        style={{
          left: `${left}px`,
          top: `${top}px`,
          width: `${size}px`,
          height: `${size}px`,
          transform: `translateX(var(--move-x))`,
          "--move-x": moveX
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