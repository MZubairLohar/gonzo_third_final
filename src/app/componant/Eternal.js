import GifCarousel from "./Test";


const Eternal = () => {
  return (
    // <div className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-black">
    <div className="relative h-screen w-full  flex items-center justify-center bg-black">
      {/* 3D Gradient Sphere */}
      {/* <div className="relative w-64 h-64 md:w-96 md:h-96 rounded-full 
                    [background:radial-gradient(circle_at_center,_#a62122_0%,_#7a0a0a_50%,_#3d0000_100%)]
                    shadow-[0_0_60px_20px_#a6212240]
                    transform-style-preserve-3d
                    animate-float">
        
        <div className="absolute inset-0 rounded-full 
                      [background:radial-gradient(circle_at_center,_#ff4d4d20_0%,_transparent_70%)]
                      mix-blend-screen" />
        
        <div className="absolute top-1/4 left-1/4 w-1/3 h-1/3 rounded-full 
                      bg-white/30 blur-xl
                      transform rotate-45" />
        
        <div className="absolute inset-0 rounded-full 
                      [box-shadow:inset_0_0_30px_10px_#ff6b6b40]
                      mix-blend-overlay" />
      </div> */}

      {/* Floating Heading - Positioned in 3D space */}
      <div className="absolute z-10 text-center transform translate-z-50"
           style={{
             transform: 'perspective(1000px) translateZ(50px)'
           }}>
        <h1 className="text-6xl md:text-8xl font-bold 
                      bg-gradient-to-r from-[#f8b447] to-[#a62122] 
                      bg-clip-text text-transparent
                      drop-shadow-[0_2px_10px_rgba(248,180,71,0.5)]
                      animate-text-float -mt-44">
          THE ETERNAL DANCE
        </h1>
      </div>
      
      {/* Floating Particles */}
      {[...Array(20)].map((_, i) => (
        <div key={i} 
             className="absolute rounded-full bg-[#a62122] opacity-70"
             style={{
               width: `${Math.random() * 6 + 2}px`,
               height: `${Math.random() * 6 + 2}px`,
               left: `${Math.random() * 100}%`,
               top: `${Math.random() * 100}%`,
               animation: `float ${Math.random() * 50 + 10}s linear infinite`,
               animationDelay: `${Math.random() * 6}s`
             }} />
      ))}
        <GifCarousel/>
    </div>
  );
};

export default Eternal;

// "use client";
// import { useRef, useEffect } from 'react';
// import Circle from "./Circle"

// const EternalDanceCarousel = () => {
//   const carouselRef = useRef(null);
//   const videos = ['/C6.mp4', '/C8.mp4', '/C7.mp4', '/C5.mp4'];

//   useEffect(() => {
//     const carousel = carouselRef.current;
//     if (!carousel) return;

//     let animationId;
//     let rotation = 0;

//     const animate = () => {
//       rotation += 0.2;
//       carousel.style.transform = `perspective(1000px) rotateX(70deg) rotateZ(${rotation}deg)`;
//       animationId = requestAnimationFrame(animate);
//     };

//     animationId = requestAnimationFrame(animate);
//     return () => cancelAnimationFrame(animationId);
//   }, []);

//   return (
//     <div id="sectionThree" className="relative h-64 md:h-screen lg:h-screen w-screen md:w-full lg:w-full overflow-hidden bg-black  ">
//       {/* Floating Particles */}
//       {[...Array(40)].map((_, i) => (
//         <div 
//           key={i}
//           className="absolute rounded-full z-0"
//           style={{
//             width: `${Math.random() * 6 + 2}px`,
//             height: `${Math.random() * 6 + 2}px`,
//             left: `${Math.random() * 100}%`,
//             top: `${Math.random() * 100}%`,
//             background: `radial-gradient(circle, #f8b447 ${Math.random() * 30 + 20}%, #a62122 100%)`,
//             animation: `float ${Math.random() * 20 + 10}s linear infinite`,
//             animationDelay: `${Math.random() * 5}s`,
//             filter: 'blur(0.5px)',
//             opacity: Math.random() * 0.4 + 0.2
//           }} 
//         />
//       ))}

//       {/* 3D Sphere */}
//       {/* <div className="absolute top-2 left-1/4 transform -translate-x-1/2 -translate-y-3/4 
//                     w-40 h-40 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-80 lg:h-80 xl:w-96 xl:h-96 rounded-full 
//                     [background:radial-gradient(circle_at_center,_#a62122_0%,_#7a0a0a_50%,_#3d0000_100%)]
//                     shadow-[0_0_60px_20px_#a6212240]
//                     transform-style-preserve-3d
//                     animate-float z-10">
//         <div className="absolute inset-0 rounded-full 
//                       [background:radial-gradient(circle_at_center,_#ff4d4d20_0%,_transparent_70%)]
//                       mix-blend-screen" />
//         <div className="absolute top-1/4 left-1/4 w-1/3 h-1/3 rounded-full 
//                       bg-white/30 blur-xl
//                       transform rotate-45" />
//       </div> */}
//       <Circle />
//       {/* 3D Video Carousel */}
//       <div 
//         ref={carouselRef} 
//         className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
//                   w-full h-48 sm:h-56 md:h-64 lg:h-72 xl:h-80 flex items-center justify-center 
//                   transform-style-preserve-3d z-20 mt-20"
//       >
       
//       </div>

//       {/* Heading */}
//       <div className="absolute top-1/4 left-0 right-0 text-center z-30 px-4 "
//            style={{ transform: 'perspective(1000px) translateZ(50px)' }}>
//         <h1 className="text-3xl md:text-8xl lg:text-7xl xl:text-8xl font-bold 
//                       bg-gradient-to-r from-[#f8b447] to-[#a62122] 
//                       bg-clip-text text-transparent
//                       drop-shadow-[0_2px_10px_rgba(248,180,71,0.5)]
//                       animate-text-float   ">
//           THE ETERNAL DANCE
//         </h1>
//       </div>

//     </div>
//   );
// };

// export default EternalDanceCarousel;