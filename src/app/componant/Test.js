


// "use client";
// import { useRef, useEffect } from 'react';

// const GifCarousel = () => {
//   const carouselRef = useRef(null);
//   const gifs = [
//     '/C6.gif',
//     '/C8.gif',
//     '/C7.gif',
//     '/C5.gif',
//   ];

//   useEffect(() => {
//     const carousel = carouselRef.current;
//     if (!carousel) return;

//     let animationId;
//     let rotation = 0;

//     const animate = () => {
//       rotation += 0.2; // Smooth rotation speed
//       carousel.style.transform = `perspective(1000px) rotateX(70deg) rotateZ(${rotation}deg)`;
//       animationId = requestAnimationFrame(animate);
//     };

//     animationId = requestAnimationFrame(animate);

//     return () => {
//       cancelAnimationFrame(animationId);
//     };
//   }, []);

//     useEffect(() => {
//       gifs.forEach(gif => {
//         new Image().src = gif;
//       });
//     }, []);

//   return (
//     <div className="relative h-screen w-screen md:w-full lg:w-full overflow-hidden bg-black flex items-center justify-center -mt-52">

//       {/* Small background spheres */}
//       {[...Array(20)].map((_, i) => (
//         <div key={i} 
//              className="absolute rounded-full bg-[#a62122] opacity-70"
//              style={{
//                width: `${Math.random() * 6 + 2}px`,
//                height: `${Math.random() * 6 + 2}px`,
//                left: `${Math.random() * 100}%`,
//                top: `${Math.random() * 100}%`,
//                animation: `float ${Math.random() * 10 + 10}s linear infinite`,
//                animationDelay: `${Math.random() * 4}s`
//              }} />
//       ))}
        
//       {/* GIF Carousel - Front Layer */}
//       <div 
//         ref={carouselRef} 
//         className="absolute z-20 w-44 md:w-screen lg:w-screen h-72 flex items-center justify-center transform-style-preserve-3d mt-20"
//       >
//         {gifs.map((gif, i) => (
//           <div 
//             key={i}
//             className="absolute w-20 h-40 lg:w-64 lg:h-80 md:w-64 md:h-80 bg-transparent transform-style-preserve-3d pt-4"
//             style={{
//               transform: `
//                 rotateZ(${360/4 * i}deg)
//                 rotateX(70deg)
//                 translateY(120px)
//                 translateZ(280px)
//                 rotateZ(180deg)
//               `,
//             }}
//           >
//             <div className="relative w-full h-full overflow-hidden rounded-xl border-4 border-[#a62122]/30">
//               <img
//                 src={gif}
//                 alt="Carousel GIF"
//                 className=" w-screen md:w-full lg:w-full h-full object-cover brightness-75 hover:brightness-100 transition-all duration-300 border-4 border-[#a62122]"
//               />
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Heading - Top Layer */}
      
//     </div>
//   );
// };

// export default GifCarousel;



"use client";
import { useRef, useEffect, useState } from 'react';

const GifCarousel = () => {
  const carouselRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);
  const gifs = [
    '/C6.gif',
    '/C8.gif',
    '/C7.gif',
    '/C5.gif',
  ];

  // Check for mobile devices on mount and resize
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Initial check
    checkIfMobile();

    // Add event listener for resize
    window.addEventListener('resize', checkIfMobile);

    return () => {
      window.removeEventListener('resize', checkIfMobile);
    };
  }, []);

  // Animation effect
  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    let animationId;
    let rotation = 0;

    const animate = () => {
      rotation += 0.2; // Smooth rotation speed
      const rotateXAngle = isMobile ? 50 : 70;
      carousel.style.transform = `perspective(1000px) rotateX(${rotateXAngle}deg) rotateZ(${rotation}deg)`;
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationId);
    };
  }, [isMobile]);

  // Preload GIFs
  useEffect(() => {
    gifs.forEach(gif => {
      new Image().src = gif;
    });
  }, []);

  return (
    <div className="relative h-[640px] md:h-screen lg:h-screen w-screen md:w-full lg:w-full overflow-hidden bg-black flex items-center justify-center mt-[120%] md:mt-20 lg:mt-[50%]">
      {/* Small background spheres */}
      {[...Array(20)].map((_, i) => (
        <div key={i} 
             className="absolute rounded-full bg-[#a62122] opacity-70"
             style={{
               width: `${Math.random() * 6 + 2}px`,
               height: `${Math.random() * 6 + 2}px`,
               left: `${Math.random() * 100}%`,
               top: `${Math.random() * 100}%`,
               animation: `float ${Math.random() * 10 + 10}s linear infinite`,
               animationDelay: `${Math.random() * 4}s`
             }} />
      ))}
        
      {/* GIF Carousel - Front Layer */}
      <div 
        ref={carouselRef} 
        className="absolute z-20 w-44 md:w-screen lg:w-screen h-72 flex items-center justify-center transform-style-preserve-3d "
      >
        {gifs.map((gif, i) => (
          <div 
            key={i}
            className="absolute w-20 h-40 lg:w-64 lg:h-80 md:w-64 md:h-80 bg-transparent transform-style-preserve-3d pt-4"
            style={{
              transform: `
                rotateZ(${360/4 * i}deg)
                rotateX(${isMobile ? 50 : 80}deg)
                translateY(${isMobile ? 80 : 120}px)
                translateZ(${isMobile ? 200 : 280}px)
                rotateZ(180deg)
              `,
            }}
          >
            <div className="relative w-full h-full overflow-hidden rounded-xl border-4 border-[#a62122]/30">
              <img
                src={gif}
                alt="Carousel GIF"
                className="w-screen md:w-full lg:w-full h-full object-cover brightness-75 hover:brightness-100 transition-all duration-300 border-4 border-[#a62122]"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GifCarousel;