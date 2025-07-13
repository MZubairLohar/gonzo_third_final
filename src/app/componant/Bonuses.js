"use client";
import { useRef, useEffect } from 'react';

const Bonuses = () => {
  const carouselRef = useRef(null);

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    let animationId;
    let rotation = 0;

    const animate = () => {
      rotation += 0.2;
      carousel.style.transform = `perspective(1000px) rotateX(70deg) rotateZ(${rotation}deg)`;
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <div className="relative h-screen w-full overflow-hidden bg-black flex items-center justify-center">
      {/* Enhanced Floating Particles */}
      {[...Array(30)].map((_, i) => (
        <div 
          key={i} 
          className="absolute rounded-full z-0"
          style={{
            width: `${Math.random() * 8 + 4}px`,
            height: `${Math.random() * 8 + 4}px`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animation: `float ${Math.random() * 8 + 4}s linear infinite`,
            animationDelay: `${Math.random() * 3}s`,
            background: `radial-gradient(circle, #f8b447 ${Math.random() * 30 + 20}%, #a62122 100%)`,
            filter: `blur(${Math.random() * 2 + 1}px)`,
            opacity: Math.random() * 0.4 + 0.2,
            willChange: 'transform'
          }} 
        />
      ))}

      {/* 3D Glass Card Container */}
      <div className="relative z-20 w-full max-w-3xl mx-4 px-2 sm:px-4">
        {/* Floating Logo - Responsive */}
        <div className="relative z-30 flex justify-center -mb-6 sm:-mb-8 md:-mb-10">
          <div className="relative w-32 h-24 sm:w-40 sm:h-28 md:w-48 md:h-32">
            <img 
              src='/cursor.png' 
              alt="Gonzo Logo"
              className="w-full h-full object-contain transform group-hover:scale-110 transition-transform duration-500"
              style={{
                filter: 'drop-shadow(0 5px 15px rgba(248, 180, 71, 0.7))'
              }}
            />
            {/* Glow effect */}
            <div className="absolute inset-0 bg-[#f8b447] rounded-full mix-blend-screen opacity-20 blur-xl"></div>
          </div>
        </div>

        {/* Main 3D Card - Responsive */}
        <div className="relative bg-white/5 backdrop-blur-lg sm:backdrop-blur-xl rounded-2xl sm:rounded-3xl border border-[#f8b447]/30 shadow-lg sm:shadow-2xl overflow-hidden transform-style-preserve-3d">
          {/* Card Lighting Effects */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(248,180,71,0.1)_0%,_transparent_70%)]"></div>
          <div className="absolute top-0 right-0 w-20 sm:w-24 md:w-32 h-20 sm:h-24 md:h-32 bg-[#f8b447]/10 rounded-bl-full"></div>
          
          {/* Card Content - Responsive */}
          <div className="relative z-10 p-4 sm:p-6 md:p-8">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-5 md:mb-6 text-center">
              <span className="text-[#f8b447]">Bonuses</span>
              <span className="text-white mx-1 sm:mx-2">&</span>
              <span className="text-[#a62122]">Referrals</span>
            </h1>
            
            <p className="text-base sm:text-lg text-white/80 text-center mb-6 sm:mb-7 md:mb-8">
              Ready for Whales and influencers!
            </p>

            <div className="text-center mb-6 sm:mb-7 md:mb-8">
              <h2 className="text-xl sm:text-2xl text-[#f8b447] mb-3 sm:mb-4">Purchase via Referral</h2>
              
              {/* 3D Pricing Tiers - Responsive */}
              <div className="grid grid-cols-1 gap-4 sm:gap-5 md:gap-6 sm:grid-cols-2">
                {/* Tier 1 */}
                <div className="transform transition-all duration-300 sm:duration-500 hover:translate-y-1 sm:hover:translate-y-2 hover:shadow-md sm:hover:shadow-lg">
                  <div className="bg-gradient-to-br from-[#a62122]/30 to-[#a62122]/10 border border-[#f8b447]/20 rounded-t-xl sm:rounded-t-2xl p-3 sm:p-4">
                    <h3 className="text-lg sm:text-xl font-bold text-white">$0 ~ $5000</h3>
                  </div>
                  <div className="bg-gradient-to-br from-[#f8b447]/30 to-[#f8b447]/10 border border-[#f8b447]/20 rounded-b-xl sm:rounded-b-2xl p-4 sm:p-6">
                    <p className="text-xl sm:text-2xl font-bold text-white">3% <span className="text-[#f8b447]">Gonzo</span></p>
                  </div>
                </div>
                
                {/* Tier 2 */}
                <div className="transform transition-all duration-300 sm:duration-500 hover:translate-y-1 sm:hover:translate-y-2 hover:shadow-md sm:hover:shadow-lg">
                  <div className="bg-gradient-to-br from-[#a62122]/30 to-[#a62122]/10 border border-[#f8b447]/20 rounded-t-xl sm:rounded-t-2xl p-3 sm:p-4">
                    <h3 className="text-lg sm:text-xl font-bold text-white">$5000 ~ More</h3>
                  </div>
                  <div className="bg-gradient-to-br from-[#f8b447]/30 to-[#f8b447]/10 border border-[#f8b447]/20 rounded-b-xl sm:rounded-b-2xl p-4 sm:p-6">
                    <p className="text-xl sm:text-2xl font-bold text-white">5% <span className="text-[#f8b447]">Gonzo</span></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* 3D Edge Highlight - Responsive */}
          <div className="absolute inset-0 rounded-2xl sm:rounded-3xl pointer-events-none overflow-hidden">
            <div className="absolute top-0 right-0 w-16 sm:w-20 h-16 sm:h-20 bg-gradient-to-br from-white/30 to-transparent rounded-bl-2xl sm:rounded-bl-3xl"></div>
          </div>
        </div>
      </div>
     
    </div>
  );
};

export default Bonuses;
      // <div className="relative z-20 w-full max-w-3xl mx-4">
      //   {/* Floating Logo */}
      //   <div className="relative z-30 flex justify-center -mb-10">
      //     <div className="relative w-48 h-32">
      //       <img 
      //         src='/cursor.png' 
      //         alt="Gonzo Logo"
      //         className="w-full h-full object-contain transform group-hover:scale-110 transition-transform duration-500"
      //         style={{
      //           filter: 'drop-shadow(0 5px 15px rgba(248, 180, 71, 0.7))'
      //         }}
      //       />
      //       {/* Glow effect */}
      //       <div className="absolute inset-0 bg-[#f8b447] rounded-full mix-blend-screen opacity-20 blur-xl"></div>
      //     </div>
      //   </div>

      //   {/* Main 3D Card */}
      //   <div className="relative bg-white/5 backdrop-blur-xl rounded-3xl border border-[#f8b447]/30 shadow-2xl overflow-hidden transform-style-preserve-3d">
      //     {/* Card Lighting Effects */}
      //     <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(248,180,71,0.1)_0%,_transparent_70%)]"></div>
      //     <div className="absolute top-0 right-0 w-32 h-32 bg-[#f8b447]/10 rounded-bl-full"></div>
          
      //     {/* Card Content */}
      //     <div className="relative z-10 p-8">
      //       <h1 className="text-4xl font-bold mb-6 text-center">
      //         <span className="text-[#f8b447]">Bonuses</span>
      //         <span className="text-white mx-2">&</span>
      //         <span className="text-[#a62122]">Referrals</span>
      //       </h1>
            
      //       <p className="text-lg text-white/80 text-center mb-8">
      //         Ready for Whales and influencers!
      //       </p>

      //       <div className="text-center mb-8">
      //         <h2 className="text-2xl text-[#f8b447] mb-4">Purchase via Referral</h2>
              
      //         {/* 3D Pricing Tiers */}
      //         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      //           {/* Tier 1 */}
      //           <div className="transform transition-all duration-500 hover:translate-y-2 hover:shadow-lg">
      //             <div className="bg-gradient-to-br from-[#a62122]/30 to-[#a62122]/10 border border-[#f8b447]/20 rounded-t-2xl p-4">
      //               <h3 className="text-xl font-bold text-white">$0 ~ $5000</h3>
      //             </div>
      //             <div className="bg-gradient-to-br from-[#f8b447]/30 to-[#f8b447]/10 border border-[#f8b447]/20 rounded-b-2xl p-6">
      //               <p className="text-2xl font-bold text-white">3% <span className="text-[#f8b447]">Gonzo</span></p>
      //             </div>
      //           </div>
                
      //           {/* Tier 2 */}
      //           <div className="transform transition-all duration-500 hover:translate-y-2 hover:shadow-lg">
      //             <div className="bg-gradient-to-br from-[#a62122]/30 to-[#a62122]/10 border border-[#f8b447]/20 rounded-t-2xl p-4">
      //               <h3 className="text-xl font-bold text-white">$5000 ~ More</h3>
      //             </div>
      //             <div className="bg-gradient-to-br from-[#f8b447]/30 to-[#f8b447]/10 border border-[#f8b447]/20 rounded-b-2xl p-6">
      //               <p className="text-2xl font-bold text-white">5% <span className="text-[#f8b447]">Gonzo</span></p>
      //             </div>
      //           </div>
      //         </div>
      //       </div>
      //     </div>
          
      //     {/* 3D Edge Highlight */}
      //     <div className="absolute inset-0 rounded-3xl pointer-events-none overflow-hidden">
      //       <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-white/30 to-transparent rounded-bl-3xl"></div>
      //     </div>
      //   </div>
      // </div>