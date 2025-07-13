'use client';
import { useEffect, useState } from 'react';

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);

  useEffect(() => {
    const moveCursor = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      
      // Detect if hovering over clickable elements
      const target = e.target;
      setIsPointer(
        window.getComputedStyle(target).cursor === 'pointer' ||
        target.tagName === 'A' ||
        target.tagName === 'BUTTON'
      );
    };

    window.addEventListener('mousemove', moveCursor);
    return () => window.removeEventListener('mousemove', moveCursor);
  }, []);

  return (
    <div className="fixed pointer-events-none z-50" 
         style={{
           left: `${position.x}px`,
           top: `${position.y}px`,
           transform: 'translate(-50%, -50%)'
         }}>
      <img 
        src={isPointer ? '/cursor.png' : '/cursor.png'}
        alt=""
        className="w-32 h-20"
      />
    </div>
  );
}