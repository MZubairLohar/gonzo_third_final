// "use client";
// import { useState, useEffect } from "react";

// export default function FrameAnimation() {
//   const [currentFrame, setCurrentFrame] = useState(0);
//   const [isLoading, setIsLoading] = useState(true);
//   const totalFrames = 220; // 00000 to 00419
//   const fps = 24;

//   // Preload images
//   useEffect(() => {
//     const preloadImages = async () => {
//       const loadPromises = [];
//       for (let i = 0; i < 10; i++) { // Preload first 10 frames
//         loadPromises.push(new Promise((resolve) => {
//           const img = new Image();
//           img.src = getFramePath(i);
//           img.onload = resolve;
//         }));
//       }
//       await Promise.all(loadPromises);
//       setIsLoading(false);
      
//       // Continue loading remaining frames in background
//       for (let i = 10; i < totalFrames; i++) {
//         new Image().src = getFramePath(i);
//       }
//     };

//     preloadImages();
//   }, []);

//   // Animation loop
//   useEffect(() => {
//     if (isLoading) return;

//     let startTime = null;
//     let requestId = null;

//     const animate = (timestamp) => {
//       if (!startTime) startTime = timestamp;
//       const elapsed = timestamp - startTime;
//       const targetFrame = Math.floor((elapsed / 1000) * fps) % totalFrames;

//       setCurrentFrame(targetFrame);
//       requestId = requestAnimationFrame(animate);
//     };

//     requestId = requestAnimationFrame(animate);
//     return () => cancelAnimationFrame(requestId);
//   }, [isLoading, fps, totalFrames]);

//   // Format frame number with leading zeros
//   const getFramePath = (frameNum) => {
//     const paddedNum = String(frameNum).padStart(5, '0');
//     return `/frames/Dancing Running Man/Dancing Running Man.${paddedNum}.png`;
//   };



//   return (
//     <div className={`relative w-full max-w-[580px] `}>
//       {isLoading ? (
//         <div className="w-full h-full bg-gray-800 flex items-center justify-center rounded-xl">
//         </div>
//       ) : (
//         <img
//           src={getFramePath(currentFrame)}
//           alt="Dancing Running Man Animation"
//           className="md:w-[870px] md:h-[500px] w-[390px] h-[260px] object-cover lg:-ml-64 -ml-56"
//         />
//       )}
//     </div>
//   );
// }

"use client";
import { useState, useEffect } from "react";

export default function FrameAnimation() {
  const [currentFrame, setCurrentFrame] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [framesLoaded, setFramesLoaded] = useState(0);
  const totalFrames = 220;
  const fps = 24;
  const preloadBatchSize = 20; // Load frames in batches

  // Optimized preloading with progress tracking
  useEffect(() => {
    let isMounted = true;
    const loadedImages = new Set();

    const loadImageBatch = async (start, end) => {
      const promises = [];
      for (let i = start; i <= end && i < totalFrames; i++) {
        if (!loadedImages.has(i)) {
          promises.push(
            new Promise((resolve) => {
              const img = new Image();
              img.src = getFramePath(i);
              img.onload = () => {
                if (isMounted) {
                  loadedImages.add(i);
                  setFramesLoaded(prev => prev + 1);
                }
                resolve();
              };
              img.onerror = resolve; // Continue even if some frames fail
            })
          );
        }
      }
      await Promise.all(promises);
    };

    const preloadImages = async () => {
      // Load first batch for immediate display
      await loadImageBatch(0, preloadBatchSize - 1);
      
      if (isMounted) {
        setIsLoading(false);
        
        // Continue loading remaining frames in background
        for (let i = preloadBatchSize; i < totalFrames; i += preloadBatchSize) {
          loadImageBatch(i, i + preloadBatchSize - 1);
        }
      }
    };

    preloadImages();

    return () => {
      isMounted = false;
    };
  }, []);

  // Smooth animation loop
  useEffect(() => {
    if (isLoading) return;

    let requestId;
    let frameCount = 0;
    let lastTimestamp = performance.now();

    const animate = (timestamp) => {
      const delta = timestamp - lastTimestamp;
      lastTimestamp = timestamp;

      // Calculate frame advancement based on actual time passed
      frameCount += (delta / 1000) * fps;
      const targetFrame = Math.floor(frameCount) % totalFrames;

      setCurrentFrame(targetFrame);
      requestId = requestAnimationFrame(animate);
    };

    requestId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(requestId);
  }, [isLoading, fps, totalFrames]);

  // Memoized frame path calculation
  const getFramePath = (frameNum) => {
    const paddedNum = String(frameNum).padStart(5, '0');
    return `/frames/Dancing Running Man/Dancing Running Man.${paddedNum}.png`;
  };

  // Calculate loading progress
  const loadingProgress = Math.min(Math.floor((framesLoaded / totalFrames) * 100), 100);

  return (
    <div className="relative w-full max-w-[580px]">
      {isLoading ? (
        <img
          src="/frames/Dancing Running Man/Dancing Running Man.00000.png"
          alt="Dancing Running Man Animation"
          className="md:w-[870px] md:h-[500px] w-[390px] h-[260px] object-cover lg:-ml-64 -ml-56"
          loading="eager" // Force eager loading for visible frames
        />
      ) : (
        <img
          src={getFramePath(currentFrame)}
          alt="Dancing Running Man Animation"
          className="md:w-[870px] md:h-[500px] w-[390px] h-[260px] object-cover lg:-ml-64 -ml-56"
          loading="eager" // Force eager loading for visible frames
        />
      )}
    </div>
  );
}