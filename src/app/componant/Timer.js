// "use client";

// import { useState } from 'react';
// import FrameAnimation from "./FrameAnimation";
// import { useEffect } from 'react';

// // Lazy load components
// // const Navbar = dynamic(() => import('./Navbar'), {
// //   loading: () => <div className="h-16 bg-transparent" />
// // });
//     function CountdownTimer() {
//         const targetDate = new Date("2025-08-10").getTime();
//         const [timeLeft, setTimeLeft] = useState(targetDate - Date.now());

//         useEffect(() => {
//             const interval = setInterval(() => {
//                 setTimeLeft(targetDate - Date.now());
//             }, 1000);
//             return () => clearInterval(interval);
//         }, [targetDate]);

//         if (timeLeft <= 0) {
//             return <span className="text-3xl font-bold text-red-500">Times up!</span>;
//         }

//         const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
//         const hours = Math.floor((timeLeft / (1000 * 60 * 60)) % 24);
//         const minutes = Math.floor((timeLeft / (1000 * 60)) % 60);
//         const seconds = Math.floor((timeLeft / 1000) % 60);

//         return (
//             <div className=" text-center text-4xl md:text-8xl lg:text-9xl -mt-10 md:-mt-10 lg:-mt-10 font-bold text-[#a62122] opacity-100">
//                 {days}<a className='text-[#f8b447]'>D</a> {hours}<a className='text-[#f8b447]'>H</a> {minutes}<a className='text-[#f8b447]'>M</a> {seconds}<a className='text-[#f8b447]'>S</a>
//             </div>
//         );
//     }



// export default function Timer() {
//     const [isGifLoaded, setIsGifLoaded] = useState(false);
    
//   return (
//      <div className="relative w-full h-screen lg:h-screen md:h-screen overflow-hidden z-0">
//       {/* GIF container */}
//       <div className="absolute top-0 left-0 w-full h-full">
//         <img
//           src="/C3.gif" // Replace with your GIF path
//           alt="Background"
//           className={`w-full h-full object-cover opacity-25 ${isGifLoaded ? 'block' : 'hidden'}`}
//           onLoad={() => setIsGifLoaded(true)}
//         />
        
//         {/* Fallback in case GIF fails to load */}
//         {!isGifLoaded && (
//           <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-[#1a1a2e] to-[#16213e]" />
//         )}
//       </div>
//         <div className="min-h-screen grid place-items-center">
//             {/* <div className='text-center  text-7xl md:text-8xl lg:text-9xl mt-10 md:-mt-10 lg:-mt-10 font-bold text-[#a62122] opacity-100 -mb-20'>
//                 <h1 className="bg-gradient-to-r py-3 from-[#f8b447] to-[#a62122] bg-clip-text text-transparent drop-shadow-[0_2px_10px_rgba(248,180,71,0.5)] animate-text-float">
//                     Coming Soon
//                 </h1>
//                  <div>
//                     <CountdownTimer  />
//                 </div>
//             </div> */}
//             <div className="flex flex-col items-center justify-center min-h-[80vh] text-center relative z-10">
//                 <div className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-transparent bg-gradient-to-br from-[#ffce51] via-[#ff7252] to-[#a62122] bg-clip-text drop-shadow-[0_5px_25px_rgba(255,114,82,0.5)] transform hover:scale-105 transition-transform duration-500 animate-text-float perspective-800">
//                     <h1 className="transform rotate-x-3 rotate-y-2">
//                     Coming Soon
//                     </h1>
//                 </div>

//                 <div className="mt-6 text-white text-lg md:text-xl font-medium bg-[#a62122]/80 px-6 py-3 rounded-xl shadow-lg backdrop-blur-md border border-[#ffce51]/20">
//                     <CountdownTimer />
//                 </div>
//             </div>
//             <div className="flex flex-col items-center space-y-6">
//                 <div className="w-full max-w-64 h-44 md:h-[420px] md:w-full md:max-w-[580px] lg:w-full lg:max-w-[580px] overflow-hidden ml-72 md:ml-44 lg:ml-44 -mt-72 md:mt-0 lg:-mt-20  " >
//                 <FrameAnimation className="w-full h-full " />
//                 </div>
//                 {/* <div>
//                 <CountdownTimer  />
//                 </div> */}
//             </div>
//             <button className="absolute bottom-10 left-1/2 transform -translate-x-1/2 bg-[#f8b447] text-black px-6 py-3 rounded-lg shadow-lg hover:bg-[#a62122] transition-colors duration-300">
//                 <a href="https://t.me/+0b1k2d4f6Yw5YjI0" target="_blank" rel="noopener noreferrer" className="text-lg font-semibold">
//                     Join Our Telegram
//                 </a>
//             </button>
//         </div>

      
//     </div>

    
//   );
// }


"use client";

import { useEffect, useState } from "react";
import FrameAnimation from "./FrameAnimation";

function CountdownTimer() {
  const targetDate = new Date("2025-08-10T00:00:00Z").getTime();
  const [timeLeft, setTimeLeft] = useState(targetDate - Date.now());

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(targetDate - Date.now());
    }, 1000);
    return () => clearInterval(interval);
  }, [targetDate]);

  if (timeLeft <= 0) {
    return (
      <span className="text-3xl font-bold text-red-500">Time's up!</span>
    );
  }

  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeLeft / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((timeLeft / (1000 * 60)) % 60);
  const seconds = Math.floor((timeLeft / 1000) % 60);

  return (
    <div className="text-white text-2xl md:text-4xl font-bold space-x-1">
      {days}
      <span className="text-[#f8b447]">D</span> {hours}
      <span className="text-[#f8b447]">H</span> {minutes}
      <span className="text-[#f8b447]">M</span> {seconds}
      <span className="text-[#f8b447]">S</span>
    </div>
  );
}

export default function Timer() {
  const [isGifLoaded, setIsGifLoaded] = useState(false);

  return (
    <div className="relative w-full h-screen overflow-hidden z-0 flex items-center justify-center px-4">
      {/* Background */}
      <img
        src="/C3.gif"
        alt="Background"
        className={`absolute inset-0 w-full h-full object-cover opacity-20 ${
          isGifLoaded ? "block" : "hidden"
        }`}
        onLoad={() => setIsGifLoaded(true)}
      />
      {!isGifLoaded && (
        <div className="absolute inset-0 bg-gradient-to-b from-[#1a1a2e] to-[#16213e]" />
      )}

        {/* 3D Banner */}
        {/* <div className="grid grid-rows-1 md:grid-rows-2 lg:grid-rows-2 gap-8 items-center justify-center w-full max-w-7xl mx-auto relative z-10">
            <div className="relative z-10 rounded-3xl backdrop-blur-md bg-[#ffffff0a] border border-[#f8b44750] shadow-[0_25px_60px_rgba(255,114,82,0.4)] px-8 py-10 md:px-16 md:py-12 text-center transform hover:scale-105 transition-transform duration-700 perspective-1000">
              
                <div className="transform-gpu rotate-x-[8deg] rotate-y-[-4deg]">
                <h1 className="text-transparent text-4xl md:text-6xl lg:text-7xl font-extrabold bg-gradient-to-br from-[#f8b447] via-[#ff7252] to-[#a62122] bg-clip-text drop-shadow-[0_5px_25px_rgba(255,114,82,0.5)] animate-text-float py-2">
                    Coming Soon
                </h1>

                <div className="mt-6">
                    <CountdownTimer />
                </div>
                </div>
            </div>
            <div className="w-full max-w-64 h-44 md:h-[420px] md:w-full md:max-w-[580px] lg:w-full lg:max-w-[580px] overflow-hidden ml-72 md:ml-44 lg:ml-44 -mt-72 md:mt-0 lg:-mt-20  " >
                <FrameAnimation className="w-full h-full " />
            </div>
        </div> */}
        <div className="w-full max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-1 gap-10 items-center relative z-10">
            {/* Banner Section */}
            <div className="relative z-10 rounded-3xl backdrop-blur-md bg-[#ffffff0a] border border-[#f8b44750] shadow-[0_25px_60px_rgba(255,114,82,0.4)] px-6 py-10 md:px-10 md:py-12 text-center transform hover:scale-105 transition-transform duration-700">
                <div className="transform-gpu rotate-x-[8deg] rotate-y-[-4deg]">
                <h1 className="text-transparent text-4xl md:text-6xl lg:text-7xl font-extrabold bg-gradient-to-br from-[#f8b447] via-[#ff7252] to-[#a62122] bg-clip-text drop-shadow-[0_5px_25px_rgba(255,114,82,0.5)] animate-text-float py-2">
                    Coming Soon
                </h1>
                <div className="mt-6">
                    <CountdownTimer />
                </div>
                </div>
            </div>

            {/* Animation Section */}
                {/* <div className="w-full h-[220px] sm:h-[300px] md:h-[360px] lg:h-[420px]  justify-center items-center">
                    <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg h-full  self-center">
                    <FrameAnimation className="w-full h-full" />
                    </div>
                </div> */}
                <div className="w-full h-[220px] sm:h-[300px] md:h-[360px] lg:h-[420px] flex justify-center items-center ml-[48%] md:ml-[10%] lg:ml-[10%]">
                    <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg h-full">
                        <FrameAnimation className="w-full h-full" />
                    </div>
                </div>
            </div>

    </div>
  );
}

