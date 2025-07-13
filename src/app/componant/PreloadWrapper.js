// components/PreloadWrapper.jsx
"use client";
import { useEffect, useState } from 'react';

export default function PreloadWrapper({ children }) {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const preloadResources = async () => {
      try {
        // Preload critical images
        await Promise.all([
          preloadImage('/frames/Dancing Running Man/Dancing Running Man.00000.png'),
          preloadImage('/dota.png'),
          // Add other critical image paths here
        ]);

        // Preload components
        const components = [
          import('./AboutUs'),
          import('./NewHero'),
          import('./Test'),
          // Add all other components
        ];
        await Promise.all(components.map(component => component));

        setIsLoaded(true);
      } catch (error) {
        console.error('Preloading failed:', error);
        setIsLoaded(true); // Still show page even if preloading fails
      }
    };

    const preloadImage = (src) => {
      return new Promise((resolve) => {
        const img = new Image();
        img.src = src;
        img.onload = resolve;
        img.onerror = resolve;
      });
    };

    preloadResources();
  }, []);

  if (!isLoaded) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-[#1a1a2e] z-50">
        <div className="text-[#f8b447] text-xl font-bold animate-pulse text-center">
            <img src='/dota.png' className='h-44 w-52' />
          Loading Gonzo...
        </div>
      </div>
    );
  }

  return children;
}