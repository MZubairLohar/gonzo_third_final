"use client";
import { useEffect, useRef } from 'react';
import Navbar from './Navbar';
import Hero from './Hero';

export default function VideoHeader() {
  const videoRef = useRef(null);

  useEffect(() => {
    // Force play in browsers that block autoplay
    const attemptPlay = () => {
      videoRef.current?.play()
        .catch(error => {
          console.log("Playback failed:", error);
          // Add a play button for manual activation
          const playButton = document.createElement('button');
          playButton.innerHTML = 'Play Video';
          playButton.className = 'fixed bottom-4 left-4 bg-white text-black px-4 py-2 rounded z-50';
          playButton.onclick = () => {
            videoRef.current.play();
            playButton.remove();
          };
          document.body.appendChild(playButton);
        });
    };

    attemptPlay();
  }, []);

  return (
    // <div className="relative w-full h-screen overflow-hidden">
    //   {/* Video element with absolute positioning */}
    //   <video
    //     ref={videoRef}
    //     autoPlay
    //     loop
    //     muted
    //     playsInline
    //     className="absolute top-0 left-0 w-full h-full object-cover opacity-20"
    //   >
    //     {/* Correct path - no "public" in the path */}
    //     <source src="/C4.mp4" type="video/mp4" />
    //     Your browser does not support HTML5 video.
    //   </video>

    //   {/* Optional overlay */}
    //   <div className="absolute inset-0 bg-black/30 z-10"></div>
      
    //   {/* Your Navbar */}
    //   <div className="relative z-20">
    //     <Navbar />
    //     <Hero />
    //   </div>
    // </div>
    <div className="relative w-full h-screen overflow-hidden">
      {/* Video element */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover opacity-20"
        // className={`absolute top-0 left-0 w-full h-full object-cover opacity-20 ${
        //   isMobile ? 'scale-110' : '' // Slightly zoomed on mobile
        // }`}
        // Mobile-specific optimizations
        onTouchStart={(e) => {
          e.preventDefault();
          videoRef.current?.play().catch(e => console.log("Mobile play failed:", e));
        }}
        disablePictureInPicture
        disableRemotePlayback
      >
        <source src="/C4.mp4" type="video/mp4" />
        Your browser does not support HTML5 video.
      </video>

      {/* Overlay with responsive opacity */}
      {/* <div className="absolute inset-0 bg-black/30 md:bg-black/20 z-10"></div> */}
      
      {/* Content container with responsive padding */}
      <div className="relative z-20 h-full flex flex-col">
        <Navbar />
        <div className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8">
          <Hero />
        </div>
      </div>
    </div>
  );
}