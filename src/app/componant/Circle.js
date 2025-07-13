import React from "react";

const Circle = () => {
  return (
    <div className="relative w-full h-screen">
      <div
        className="absolute top-2 left-[28%] md:left-[36%] lg:left-[36%]  transform -translate-x-1/2 -translate-y-3/4 
                   w-40 h-40 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-80 lg:h-80 xl:w-96 xl:h-96 rounded-full 
                   [background:radial-gradient(circle_at_center,_#a62122_0%,_#7a0a0a_50%,_#3d0000_100%)]
                   shadow-[0_0_60px_20px_#a6212240]
                   transform-style-preserve-3d
                   animate-float z-10"
      >
        <div
          className="absolute inset-0 rounded-full 
                     [background:radial-gradient(circle_at_center,_#ff4d4d20_0%,_transparent_70%)]
                     mix-blend-screen"
        />
        <div
          className="absolute top-1/4 left-1/4 w-1/3 h-1/3 rounded-full 
                     bg-white/30 blur-xl
                     transform rotate-45"
        />
      </div>
    </div>
  );
};

export default Circle;