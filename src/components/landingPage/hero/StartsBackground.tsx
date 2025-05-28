import React from 'react';

const StarsBackground = () => (
  <svg 
    width="416" 
    height="190" 
    viewBox="0 0 416 190" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    className="stars-background" // Add className for styling
    preserveAspectRatio="none" // Optional: for responsive behavior
    aria-hidden="true" // For accessibility
  >
    {/* Stars */}
    <g opacity="0.25" filter="url(#filter0_f_2024_2269)">
      <circle cx="216.687" cy="86.914" r="0.560" fill="white"/>
    </g>
    <g opacity="0.75" filter="url(#filter1_f_2024_2269)">
      <circle cx="295.541" cy="92.21" r="0.569" fill="white"/>
    </g>
    {/* More stars... (you can keep all the stars or optimize further) */}
    
    {/* Glow effects */}
    <g style={{mixBlendMode: 'plus-lighter'}} opacity="0.22">
      <g style={{mixBlendMode: 'plus-lighter'}} filter="url(#filter28_f_2024_2269)">
        <ellipse cx="162.713" cy="101.333" rx="87.447" ry="12.667" fill="white"/>
      </g>
      <g style={{mixBlendMode: 'plus-lighter'}} filter="url(#filter29_f_2024_2269)">
        <ellipse cx="137.699" cy="96.267" rx="46.497" ry="12.667" fill="#92A2F7"/>
      </g>
      {/* More glow effects... */}
    </g>

    {/* Filters - moved to bottom */}
    <defs>
      <filter id="filter0_f_2024_2269" x="214.127" y="84.354" width="5.121" height="5.121" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
        <feFlood floodOpacity="0" result="BackgroundImageFix"/>
        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
        <feGaussianBlur stdDeviation="1" result="effect1_foregroundBlur_2024_2269"/>
      </filter>
      {/* More filters... */}
    </defs>
  </svg>
);

export default StarsBackground;