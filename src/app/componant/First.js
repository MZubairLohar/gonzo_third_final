import React from 'react';
import Navbar from './Navbar';

const First = () => {
    return (
        <div className="relative">
        <Navbar />
        <video 
            src="/C2.mp4" 
            autoPlay 
            loop 
            muted 
            playsInline
            className="w-full h-screen object-cover brightness-50 contrast-125 opacity-85" 
            // brightness-50 = ~50% opacity
            // contrast-125 enhances visibility
        />
        </div>
    );
};

export default First;
