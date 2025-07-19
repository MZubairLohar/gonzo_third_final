// 'use client';
// import { useEffect, useState } from 'react';

// export default function CustomCursor() {
//   const [position, setPosition] = useState({ x: 0, y: 0 });
//   const [isPointer, setIsPointer] = useState(false);

//   useEffect(() => {
//     const moveCursor = (e) => {
//       setPosition({ x: e.clientX, y: e.clientY });
      
//       // Detect if hovering over clickable elements
//       const target = e.target;
//       setIsPointer(
//         window.getComputedStyle(target).cursor === 'pointer' ||
//         target.tagName === 'A' ||
//         target.tagName === 'BUTTON'
//       );
//     };

//     window.addEventListener('mousemove', moveCursor);
//     return () => window.removeEventListener('mousemove', moveCursor);
//   }, []);

//   return (
//     <div className="fixed pointer-events-none z-50 ml-7 mt-7" 
//          style={{
//            left: `${position.x}px`,
//            top: `${position.y}px`,
//            transform: 'translate(-50%, -50%)'
//          }}>
//       <img 
//         src={isPointer ? '/cursor2.png' : '/cursor2.png'}
//         alt=""
//         className="w-20 h-20"
//       />
//     </div>
//   );
// }

'use client';
import { useEffect, useState } from 'react';

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    // Hide cursor if screen width is less than 768px (mobile/tablet)
    const handleResize = () => {
      setShowCursor(window.innerWidth >= 768);
    };

    handleResize(); // Initial check
    window.addEventListener('resize', handleResize);

    const moveCursor = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });

      const target = e.target;
      setIsPointer(
        window.getComputedStyle(target).cursor === 'pointer' ||
        target.tagName === 'A' ||
        target.tagName === 'BUTTON'
      );
    };

    window.addEventListener('mousemove', moveCursor);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  if (!showCursor) return null;

  return (
    <div
      className="fixed pointer-events-none z-50 ml-7 mt-7"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        transform: 'translate(-50%, -50%)'
      }}
    >
      <img
        src={isPointer ? '/cursor2.png' : '/cursor2.png'}
        alt=""
        className="w-20 h-20"
      />
    </div>
  );
}
