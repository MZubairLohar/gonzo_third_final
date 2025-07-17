"use client";

import { useState } from 'react';
import FrameAnimation from "./FrameAnimation";
import { useEffect } from 'react';

// Lazy load components
// const Navbar = dynamic(() => import('./Navbar'), {
//   loading: () => <div className="h-16 bg-transparent" />
// });
    function CountdownTimer() {
        const targetDate = new Date("2025-07-17").getTime();
        const [timeLeft, setTimeLeft] = useState(targetDate - Date.now());

        useEffect(() => {
            const interval = setInterval(() => {
                setTimeLeft(targetDate - Date.now());
            }, 1000);
            return () => clearInterval(interval);
        }, [targetDate]);

        if (timeLeft <= 0) {
            return <span className="text-3xl font-bold text-red-500">Times up!</span>;
        }

        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeLeft / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((timeLeft / (1000 * 60)) % 60);
        const seconds = Math.floor((timeLeft / 1000) % 60);

        return (
            <div className=" text-center text-7xl md:text-8xl lg:text-9xl -mt-44 md:-mt-10 lg:-mt-10 font-bold text-[#a62122] opacity-100">
                {days}<a className='text-[#f8b447]'>D</a> {hours}<a className='text-[#f8b447]'>H</a> {minutes}<a className='text-[#f8b447]'>M</a> {seconds}<a className='text-[#f8b447]'>S</a>
            </div>
        );
    }



export default function Timer() {
    const [isGifLoaded, setIsGifLoaded] = useState(false);
    
  return (
     <div className="relative w-full h-screen lg:h-screen md:h-screen   overflow-hidden z-0">
      {/* GIF container */}
      <div className="absolute top-0 left-0 w-full h-full">
        <img
          src="/C3.gif" // Replace with your GIF path
          alt="Background"
          className={`w-full h-full object-cover opacity-25 ${isGifLoaded ? 'block' : 'hidden'}`}
          onLoad={() => setIsGifLoaded(true)}
        />
        
        {/* Fallback in case GIF fails to load */}
        {!isGifLoaded && (
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-[#1a1a2e] to-[#16213e]" />
        )}
      </div>
        <div className="min-h-screen grid place-items-center">
            <div className='text-center  text-7xl md:text-8xl lg:text-9xl mt-10 md:-mt-10 lg:-mt-10 font-bold text-[#a62122] opacity-100 -mb-20'>
                <h1 className="bg-gradient-to-r py-3 from-[#f8b447] to-[#a62122] bg-clip-text text-transparent drop-shadow-[0_2px_10px_rgba(248,180,71,0.5)] animate-text-float">
                    Coming Soon
                </h1>
            </div>
            <div className="flex flex-col items-center space-y-6">
                <div className="w-full max-w-[580px] h-[220px] md:h-[420px] md:w-full md:max-w-[580px] lg:w-full lg:max-w-[580px] overflow-hidden ml-72 md:ml-44 lg:ml-44 -mt-72 md:mt-0 lg:-mt-20  " >
                <FrameAnimation className="w-full h-full " />
                </div>
                <div>
                <CountdownTimer  />
                </div>
            </div>
        </div>

      
    </div>

    
  );
}

    //   <div className=" grid grid-cols-1 items-center justify-center  relative rounded-md">
    //         <div className=" lg:w-full w-full lg:max-w-[580px] self-center overflow-hidden">
    //             <FrameAnimation className="w-full h-full " />
    //         </div>
    //         <div> 
    //             <CountdownTimer targetDate={Date.now() + 10 * 24 * 60 * 60 * 1000} />
    //         </div>

    //         {/* Animation - Fixed aspect ratio container */}
    //   </div>