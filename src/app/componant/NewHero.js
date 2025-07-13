// "use client";
// import { useEffect, useRef, useState } from 'react';
// import dynamic from 'next/dynamic';

// // Lazy load Navbar and Hero components
// const Navbar = dynamic(() => import('./Navbar'), {
//   loading: () => <div className="h-16 bg-transparent" />,
//   ssr: false
// });

// const Hero = dynamic(() => import('./Hero'), {
//   loading: () => <div className="h-64 bg-transparent" />,
//   ssr: false
// });

// export default function NewHero() {
//   const videoRef = useRef(null);
//   const [isVideoReady, setIsVideoReady] = useState(false);
//   const [showFallback, setShowFallback] = useState(false);
//   const [needsInteraction, setNeedsInteraction] = useState(false);

//   useEffect(() => {
//     // Improved mobile-friendly preloading
//     const preloadVideo = async () => {
//       try {
//         // Mobile browsers often block preload, so we need a different approach
//         if (typeof window !== 'undefined' && window.matchMedia('(max-width: 768px)').matches) {
//           // On mobile, just set ready state and let the video element handle loading
//           setIsVideoReady(true);
//           return;
//         }

//         // Desktop preload logic
//         const video = document.createElement('video');
//         video.src = '/C3.mp4';
//         video.preload = 'auto';
//         video.muted = true;
//         video.playsInline = true;
        
//         await new Promise((resolve, reject) => {
//           video.onloadeddata = resolve;
//           video.onerror = reject;
//           // Temporarily add to DOM for iOS
//           video.style.position = 'fixed';
//           video.style.opacity = '0';
//           video.style.pointerEvents = 'none';
//           document.body.appendChild(video);
//           setTimeout(() => {
//             document.body.removeChild(video);
//             resolve();
//           }, 1000);
//         });
        
//         setIsVideoReady(true);
//       } catch (error) {
//         console.error('Video preload failed:', error);
//         setIsVideoReady(true); // Still try to show video even if preload fails
//       }
//     };

//     preloadVideo();
//   }, []);

//   useEffect(() => {
//     if (!isVideoReady || !videoRef.current) return;

//     const video = videoRef.current;
    
//     const handlePlay = () => {
//       // iOS requires direct user interaction for video.play()
//       video.play()
//         .then(() => {
//           setNeedsInteraction(false);
//         })
//         .catch(error => {
//           console.log("Playback failed:", error);
//           setNeedsInteraction(true);
//         });
//     };

//     // Mobile-specific playback strategy
//     if (typeof window !== 'undefined' && window.matchMedia('(max-width: 768px)').matches) {
//       // On mobile, wait for component to be visible
//       const observer = new IntersectionObserver((entries) => {
//         entries.forEach(entry => {
//           if (entry.isIntersecting) {
//             handlePlay();
//             observer.disconnect();
//           }
//         });
//       }, { threshold: 0.1 });

//       observer.observe(video);
//       return () => observer.disconnect();
//     } else {
//       // Desktop playback attempt
//       handlePlay();
//     }

//     // Cleanup
//     return () => {
//       if (videoRef.current) {
//         videoRef.current.pause();
//         videoRef.current.removeAttribute('src');
//         videoRef.current.load();
//       }
//     };
//   }, [isVideoReady]);

//   if (showFallback) {
//     return (
//       <div className="relative w-full h-[467px] md:h-screen bg-gradient-to-b from-[#1a1a2e] to-[#16213e]">
//         <div className="relative rounded-md">
//           <Navbar />
//           <Hero />
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="relative w-full lg:h-screen md:h-screen h-[467px] overflow-hidden z-0">
//       {/* Video container with mobile-specific attributes */}
//       <div className="absolute top-0 left-0 w-full h-full">
//         {isVideoReady && (
//           <video
//             ref={videoRef}
//             autoPlay
//             loop
//             muted
//             playsInline
//             webkit-playsinline="true" // iOS specific
//             x-webkit-airplay="allow" // iOS specific
//             preload="auto"
//             className="w-full h-full object-cover opacity-20"
//             disablePictureInPicture // Better mobile performance
//             disableRemotePlayback // Better mobile performance
//           >
//             <source src="/C3.mp4" type="video/mp4" />
//             <source src="/C3.webm" type="video/webm" /> {/* Add WebM format for better compatibility */}
//             Your browser does not support HTML5 video.
//           </video>
//         )}
        
//         {needsInteraction && (
//           <button
//             onClick={() => {
//               videoRef.current?.play()
//                 .then(() => setNeedsInteraction(false))
//                 .catch(e => console.log("Still can't play:", e));
//             }}
//             className="fixed bottom-4 left-4 bg-[#f8b447] text-[#a62122] px-4 py-2 rounded z-50 font-bold"
//           >
//             Play Video
//           </button>
//         )}
//       </div>
      
//       {/* Fallback background when video not ready */}
//       {!isVideoReady && (
//         <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-[#1a1a2e] to-[#16213e] animate-pulse" />
//       )}
      
//       <div className="relative rounded-md">
//         <Navbar />
//         <Hero />
//       </div>
//     </div>
//   );
// }

// "use client";
// import { useEffect, useRef, useState } from 'react';
// import dynamic from 'next/dynamic';

// // Lazy load components
// const Navbar = dynamic(() => import('./Navbar'), {
//   loading: () => <div className="h-16 bg-transparent" />
// });

// const Hero = dynamic(() => import('./Hero'), {
//   loading: () => <div className="h-64 bg-transparent" />
// });

// export default function NewHero() {
//   const videoRef = useRef(null);
//   const [needsInteraction, setNeedsInteraction] = useState(false);
//   const [isVideoReady, setIsVideoReady] = useState(false);

//   // Video initialization and playback handling
//   useEffect(() => {
//     if (!videoRef.current) return;

//     const video = videoRef.current;
    
//     // Required attributes for mobile playback
//     video.muted = true;
//     video.playsInline = true;
//     video.preload = "auto";
//     video.loop = true;
    
//     const handleCanPlay = () => {
//       setIsVideoReady(true);
//       attemptPlayback();
//     };

//     video.addEventListener('canplay', handleCanPlay);
//     video.addEventListener('loadeddata', handleCanPlay);
//     video.load();

//     return () => {
//       video.removeEventListener('canplay', handleCanPlay);
//       video.removeEventListener('loadeddata', handleCanPlay);
//     };
//   }, []);

//   // Attempt playback with interaction fallback
//   const attemptPlayback = () => {
//     if (!videoRef.current) return;

//     videoRef.current.play()
//       .then(() => {
//         setNeedsInteraction(false);
//       })
//       .catch(error => {
//         console.log("Playback requires interaction:", error);
//         setNeedsInteraction(true);
//       });
//   };

//   // Handle user interaction for iOS
//   const handleUserInteraction = () => {
//     attemptPlayback();
//     document.removeEventListener('click', handleUserInteraction);
//     document.removeEventListener('touchstart', handleUserInteraction);
//   };

//   useEffect(() => {
//     if (needsInteraction) {
//       document.addEventListener('click', handleUserInteraction);
//       document.addEventListener('touchstart', handleUserInteraction);
//     }

//     return () => {
//       document.removeEventListener('click', handleUserInteraction);
//       document.removeEventListener('touchstart', handleUserInteraction);
//     };
//   }, [needsInteraction]);

//   return (
//     <div className="relative w-full lg:h-screen md:h-screen h-[467px] overflow-hidden z-0">
//       {/* Video container */}
//       <div className="absolute top-0 left-0 w-full h-full">
//         <video
//           ref={videoRef}
//           autoPlay
//           loop
//           muted
//           playsInline
//           className="w-full h-full object-cover opacity-20"
//           disablePictureInPicture
//         >
//           <source src="/C3.mp4" type="video/mp4" />
//           <source src="/C3.webm" type="video/webm" />
//           Your browser does not support HTML5 video.
//         </video>
        
//         {needsInteraction && (
//           <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-30 z-40">
//             <button
//               onClick={handleUserInteraction}
//               className="bg-[#f8b447] text-[#a62122] px-6 py-3 rounded-lg z-50 font-bold text-lg shadow-lg"
//             >
//               Tap to Play Background Video
//             </button>
//           </div>
//         )}
//       </div>
      
//       {/* Loading state */}
//       {!isVideoReady && (
//         <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-[#1a1a2e] to-[#16213e] animate-pulse" />
//       )}
      
//       <div className="relative rounded-md">
//         <Navbar />
//         <Hero />
//       </div>
//     </div>
//   );
// }
"use client";
import { useState } from 'react';
import dynamic from 'next/dynamic';

// Lazy load components
const Navbar = dynamic(() => import('./Navbar'), {
  loading: () => <div className="h-16 bg-transparent" />
});

const Hero = dynamic(() => import('./Hero'), {
  loading: () => <div className="h-64 bg-transparent" />
});

export default function NewHero() {
  const [isGifLoaded, setIsGifLoaded] = useState(false);

  return (
    <div className="relative w-full lg:h-screen md:h-screen h-[467px] overflow-hidden z-0">
      {/* GIF container */}
      <div className="absolute top-0 left-0 w-full h-full">
        <img
          src="/C3.gif" // Replace with your GIF path
          alt="Background"
          className={`w-full h-full object-cover opacity-20 ${isGifLoaded ? 'block' : 'hidden'}`}
          onLoad={() => setIsGifLoaded(true)}
        />
        
        {/* Fallback in case GIF fails to load */}
        {!isGifLoaded && (
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-[#1a1a2e] to-[#16213e]" />
        )}
      </div>
      
      <div className="relative rounded-md">
        <Navbar />
        <Hero />
      </div>
    </div>
  );
}