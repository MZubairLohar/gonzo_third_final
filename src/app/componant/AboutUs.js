// "use client";
// import { useRef, useEffect, useState } from 'react';

// const AboutUs = () => {
//   const containerRef = useRef(null);
//   const contentRef = useRef(null);
//   const [isVisible, setIsVisible] = useState(false);
//   const [scrollProgress, setScrollProgress] = useState(0);

//   useEffect(() => {
//     // Intersection Observer for content visibility
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         setIsVisible(entry.isIntersecting);
//       },
//       {
//         root: null,
//         rootMargin: '1px',
//         threshold: 0.1
//       }
//     );

//     if (containerRef.current) {
//       observer.observe(containerRef.current);
//     }

//     // Simple scroll handler for opacity effects
//     const handleScroll = () => {
//       const scrollTop = window.scrollY || window.pageYOffset;
//       const containerTop = containerRef.current?.offsetTop || 0;
//       const containerHeight = containerRef.current?.offsetHeight || 1;
      
//       // Calculate how far we've scrolled into the container (0 to 1)
       
//       const progress = Math.min(Math.max((scrollTop - containerTop) / containerHeight, 0), 1);
//       setScrollProgress(progress);
//     };

//     window.addEventListener("scroll", handleScroll, { passive: true });

//     return () => {
//       observer.disconnect();
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   // Calculate opacity based on scroll progress
//   const contentOpacity = 1 - Math.min(scrollProgress * 1.5, 1);

//   return (
//     <div
//       id="sectionTwo"
//       className='relative h-[1290px] w-screen -z-20'
//       ref={containerRef}
//     > 
//       {/* GIF background */}
//       <img
//         src="/C4.gif" // Replace with your GIF path
//         alt="Background"
//         className='relative h-[1290px] w-full object-cover opacity-30 -z-20'

//       />
      
//       {isVisible && (
//         <div 
//           ref={contentRef}
//           className="sticky top-0 left-0 right-0 bottom-0 flex items-center justify-center"
//           style={{ opacity: contentOpacity }}
//         >
//           <div className="flex flex-col p-8 rounded-lg shadow-lg text-center items-center justify-center">
//             <div>
//               <img 
//                 src='/cursor.png' 
//                 alt="Gonzo Logo" 
//                 className="max-w-72 h-44 -mb-8 mx-auto z-10" 
//               />
//             </div>
//             <div className="flex 
//                 flex-col items-center rounded-4xl 
//                 -mt-6 pt-8 px-8 pb-8
//                 bg-white/10 backdrop-blur-xl 
//                 rounded-b-4xl rounded-t-[2rem]
//                 border border-white/20 border-t-0
//                 shadow-lg
//                  -z-10
//               ">
//               <h1 className="text-xl lg:text-3xl md:text-3xl font-bold mb-4 z-20 text-[#f8b447]">
//                 About <a className='text-[#a62122]'>Gonzo</a>
//               </h1>
//               <div className="text-sm md:text-lg lg:text-lg max-w-2xl">
//                 <a className='text-[#a62122] font-bold'>Gonzo </a>the <a className='text-[#f8b447]'>Dancing</a> machine is stepping onto the Dancing floor to redefine the game, bringing energy, style, and unstoppable moves! While the Inus and other meme tokens scramble to keep up, <a className='text-[#a62122] font-bold'>Gonzo</a> Token is here to dominate the pitch and take the crown. The wait is over—<a className='text-[#a62122] font-bold'>Gonzo</a> Token is gearing up for its presale debut, and it's packed with unbeatable features: <a className='text-[#f8b447] font-bold'>0% taxes</a>, a renounced contract, and boundless potential for growth. This isn't just a token; it's a revolution powered by the spirit of <a className='text-[#a62122] font-bold'>Gonzo</a> the Dancing Machine. Get ready to feel the power, see the moves, and join the success story that's about to unfold. <a className='text-[#a62122] font-bold'>Gonzo</a> is here to rise, and the charts will never look the same. <a className='text-[#f8b447] font-bold'>Stay tuned!</a> 🚀
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </div> 
//   );
// };

// export default AboutUs;

   "use client";
   import { useRef, useEffect, useState } from 'react';

   const AboutUs = () => {
     const containerRef = useRef(null);
     const contentRef = useRef(null);
     const [isVisible, setIsVisible] = useState(false);
     const [scrollProgress, setScrollProgress] = useState(0);

     useEffect(() => {
       const observer = new IntersectionObserver(
         ([entry]) => {
           setIsVisible(entry.isIntersecting);
         },
         {
           root: null,
           rootMargin: '100px',
           threshold: 0.05
         }
       );

       if (containerRef.current) {
         observer.observe(containerRef.current);
       }

       const handleScroll = () => {
         const scrollTop = window.scrollY || window.pageYOffset;
         const containerTop = containerRef.current?.offsetTop || 0;
         const containerHeight = containerRef.current?.offsetHeight || 1;
         const progress = Math.min(
           Math.max((scrollTop - containerTop) / containerHeight, 0),
           1
         );
         setScrollProgress(progress);
       };

       window.addEventListener("scroll", handleScroll, { passive: true });

       return () => {
         observer.disconnect();
         window.removeEventListener("scroll", handleScroll);
       };
     }, []);

     const contentOpacity = 1 - Math.min(scrollProgress * 1.5, 1);

     return (
       <div
         id="sectionTwo"
         className="relative  h-full w-full overflow-x-hidden -z-20"
         ref={containerRef}
       >
         <img
           src="/C4.gif"
           alt="Background"
          //  className="absolute h-full w-full object-cover opacity-30"
           className="absolute h-full w-full object-cover opacity-30"
         />
         {isVisible && (
           <div
             ref={contentRef}
             className="sticky top-10 flex items-center rounded-lg justify-center min-h-[50vh] px-4 z-30"
             style={{ opacity: contentOpacity }}
           >
             <div className="flex flex-col p-4 sm:p-8 rounded-lg shadow-lg text-center items-center justify-center max-w-full">
               <div>
                 <img
                   src="/cursor.png"
                   alt="Gonzo Logo"
                   className="max-w-[150px] h-auto mx-auto z-10"
                 />
               </div>
               <div
                 className="flex flex-col items-center rounded-4xl 
                            mt-4 pt-6 px-4 pb-6
                            bg-white/10 backdrop-blur-xl 
                            rounded-b-4xl rounded-t-[2rem]
                            border border-white/20 border-t-0
                            shadow-lg -z-10"
               >
                 <h1 className="text-lg sm:text-xl md:text-3xl font-bold mb-4 z-20 text-[#f8b447]">
                   About <a className="text-[#a62122]">Gonzo</a>
                 </h1>
                 <div className="text-xs sm:text-sm md:text-lg max-w-[90vw] sm:max-w-2xl">
                   <a className="text-[#a62122] font-bold">Gonzo </a>the{" "}
                   <a className="text-[#f8b447]">Dancing</a> machine is stepping onto
                   the Dancing floor to redefine the game, bringing energy, style, and
                   unstoppable moves! While the Inus and other meme tokens scramble to
                   keep up, <a className="text-[#a62122] font-bold">Gonzo</a> Token
                   is here to dominate the pitch and take the crown. The wait is
                   over—<a className="text-[#a62122] font-bold">Gonzo</a> Token is
                   gearing up for its presale debut, and it s packed with unbeatable
                   features: <a className="text-[#f8b447] font-bold">0% taxes</a>, a
                   renounced contract, and boundless potential for growth. This isn t
                   just a token; it s a revolution powered by the spirit of{" "}
                   <a className="text-[#a62122] font-bold">Gonzo</a> the Dancing
                   Machine. Get ready to feel the power, see the moves, and join the
                   success story that s about to unfold.{" "}
                   <a className="text-[#a62122] font-bold">Gonzo</a> is here to rise,
                   and the charts will never look the same.{" "}
                   <a className="text-[#f8b447] font-bold">Stay tuned!</a> 🚀
                 </div>
               </div>
             </div>
           </div>
         )}
       </div>
     );
   };

   export default AboutUs;
  


//    "use client";
// import { useRef, useEffect, useState } from 'react';

// const AboutUs = () => {
//  const containerRef = useRef(null);
//      const contentRef = useRef(null);
//      const [isVisible, setIsVisible] = useState(true);
//      const [scrollProgress, setScrollProgress] = useState(0);

//      useEffect(() => {
//        const observer = new IntersectionObserver(
//          ([entry]) => {
//            setIsVisible(entry.isIntersecting);
//          },
//          {
//            root: null,
//            rootMargin: '100px',
//            threshold: 0.05
//          }
//        );

//        if (containerRef.current) {
//          observer.observe(containerRef.current);
//        }

//        const handleScroll = () => {
//          const scrollTop = window.scrollY || window.pageYOffset;
//          const containerTop = containerRef.current?.offsetTop || 0;
//          const containerHeight = containerRef.current?.offsetHeight || 1;
//          const progress = Math.min(
//            Math.max((scrollTop - containerTop) / containerHeight, 0),
//            1
//          );
//          setScrollProgress(progress);
//        };

//        window.addEventListener("scroll", handleScroll, { passive: true });

//        return () => {
//          observer.disconnect();
//          window.removeEventListener("scroll", handleScroll);
//        };
//      }, []);

//      const contentOpacity = 1 - Math.min(scrollProgress * 1.5, 2);
//     //  const contentOpacity = 1;

//   return (
//     <div
//       id="sectionTwo"
//       className='relative h-[1290px] w-screen '
//       ref={containerRef}
//     > 
//       {/* GIF background */}
//       <img
//         src="/C4.gif" // Replace with your GIF path
//         alt="Background"
//         className='relative h-[1290px] w-full object-cover opacity-30 '
//       />
//       {isVisible && (
//            <div
//              ref={contentRef}
//              className="sticky  flex items-center justify-center min-h-[50vh] px-4 z-30"
//              style={{ opacity: contentOpacity }}
//            >
//              <div className="flex flex-col p-4 sm:p-8 rounded-lg shadow-lg text-center items-center justify-center max-w-full">
//                <div>
//                  <img
//                    src="/cursor.png"
//                    alt="Gonzo Logo"
//                    className="max-w-[150px] h-auto mx-auto z-10"
//                  />
//                </div>
//                <div
//                  className="flex flex-col items-center rounded-4xl 
//                             mt-4 pt-6 px-4 pb-6
//                             bg-white/10 backdrop-blur-xl 
//                             rounded-b-4xl rounded-t-[2rem]
//                             border border-white/20 border-t-0
//                             shadow-lg -z-10"
//                >
//                  <h1 className="text-lg sm:text-xl md:text-3xl font-bold mb-4 z-20 text-[#f8b447]">
//                    About <a className="text-[#a62122]">Gonzo</a>
//                  </h1>
//                  <div className="text-xs sm:text-sm md:text-lg max-w-[90vw] sm:max-w-2xl">
//                    <a className="text-[#a62122] font-bold">Gonzo </a>the{" "}
//                    <a className="text-[#f8b447]">Dancing</a> machine is stepping onto
//                    the Dancing floor to redefine the game, bringing energy, style, and
//                    unstoppable moves! While the Inus and other meme tokens scramble to
//                    keep up, <a className="text-[#a62122] font-bold">Gonzo</a> Token
//                    is here to dominate the pitch and take the crown. The wait is
//                    over—<a className="text-[#a62122] font-bold">Gonzo</a> Token is
//                    gearing up for its presale debut, and it's packed with unbeatable
//                    features: <a className="text-[#f8b447] font-bold">0% taxes</a>, a
//                    renounced contract, and boundless potential for growth. This isn't
//                    just a token; it's a revolution powered by the spirit of{" "}
//                    <a className="text-[#a62122] font-bold">Gonzo</a> the Dancing
//                    Machine. Get ready to feel the power, see the moves, and join the
//                    success story that's about to unfold.{" "}
//                    <a className="text-[#a62122] font-bold">Gonzo</a> is here to rise,
//                    and the charts will never look the same.{" "}
//                    <a className="text-[#f8b447] font-bold">Stay tuned!</a> 🚀
//                  </div>
//                </div>
//              </div>
//            </div>
//          )}
//     </div> 
//   );
// };


//    export default AboutUs;