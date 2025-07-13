// import React from 'react'

// const HowToBuy = () => {
//   return (
//     <div className='h-screen w-full bg-black items-center justify-center'>
//         {[...Array(20)].map((_, i) => (
//         <div key={i} 
//              className="absolute rounded-full bg-[#a62122] opacity-70"
//              style={{
//                width: `${Math.random() * 6 + 2}px`,
//                height: `${Math.random() * 6 + 2}px`,
//                left: `${Math.random() * 100}%`,
//                top: `${Math.random() * 100}%`,
//                animation: `float ${Math.random() * 10 + 10}s linear infinite`,
//                animationDelay: `${Math.random() * 5}s`
//              }} />
//       ))}
//       <div className='grid grid-cols-3 items-center justify-center place-content-center content-center'>
//              {/* Card 1 */}
//              <div className='w-52 h-64 p-8 bg-[#a62122] rounded-4xl place-content-center content-center'>
//                 <div>
//                     <img src="/dota.png" className='h-32 w-32' />
//                 </div>
//                 <div className='grid grid-rows-2'>
//                     <h1>Connect</h1>
//                     <p>My wallet Connect</p>
//                 </div>
//              </div>
//              {/* Card 2 */}
//              <div className='w-52 h-64 p-8 bg-[#a62122] rounded-4xl items-center justify-center place-content-center'>
//                 <div>
//                     <img src="/dota.png" className='h-32 w-32' />
//                 </div>
//                 <div className='grid grid-rows-2'>
//                     <h1>Connect</h1>
//                     <p>My wallet Connect</p>
//                 </div>
//              </div>
//              {/* Card 3 */}
//              <div className='w-52 h-64 p-8 bg-[#a62122] rounded-4xl place-content-center'>
//                 <div>
//                     <img src="/dota.png" className='h-32 w-32' />
//                 </div>
//                 <div className='grid grid-rows-2'>
//                     <h1>Connect</h1>
//                     <p>My wallet Connect</p>
//                 </div>
//              </div>
//       </div>
//     </div>
//   )
// }

// export default HowToBuy

import React from 'react'

const HowToBuy = () => {

    const handleClick = () => {
        window.location.href = "/trade";
    }
  return (
    <div id="sectionThree" className='relative h-56 w-screen md:h-screen md:w-screen lg:h-screen lg:w-screen bg-black items-center justify-center md:mt-[14%] lg:mt-32 lg:-mb-20'>
      {/* Floating particles background */}
      {[...Array(20)].map((_, i) => (
        <div key={i} 
             className="absolute rounded-full bg-[#a62122] opacity-70"
             style={{
               width: `${Math.random() * 6 + 2}px`,
               height: `${Math.random() * 6 + 2}px`,
               left: `${Math.random() * 100}%`,
               top: `${Math.random() * 100}%`,
               animation: `float ${Math.random() * 15 + 10}s linear infinite`,
               animationDelay: `${Math.random() * 3}s`
             }} />
      ))}

      {/* Centered cards grid */}
       <h1 className='text-center text-4xl md:text-6xl lg:text-6xl text-[#f8b447] font-black'>How To Buy</h1>
       {/* <div className="relative z-10 flex flex-row items-center gap-4 p-4 overflow-x-auto no-scrollbar whitespace-nowrap"> */}
        <div className="relative z-10 flex flex-row items-center justify-center gap-4 p-4 overflow-x-auto no-scrollbar whitespace-nowrap">

        {/* <div className="relative z-10 flex flex-row flex-wrap items-center justify-center gap-2 p-4 sm:gap-3 md:gap-3"> */}
            {/* Card 1 */}
            <div 
                className="relative w-28 h-36 xs:w-32 xs:h-44 sm:w-40 sm:h-56 md:w-48 md:h-64 lg:w-56 lg:h-80 group perspective-1000"
                onClick={handleClick}
                >
                {/* 3D Card Container */}
                <div className="relative w-full h-full transition-all duration-700 transform-style-preserve-3d group-hover:-rotate-y-15">
                {/* Front Face */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#a62122] to-[#7a0a0a] rounded-xl sm:rounded-2xl p-2 xs:p-3 sm:p-4 flex flex-col items-center justify-center space-y-1 xs:space-y-2 sm:space-y-3 border-2 border-[#f8b447]/30 shadow-lg sm:shadow-xl overflow-hidden">
                    {/* Glow Effect */}
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#ff4d4d20_0%,_transparent_70%)] mix-blend-overlay" />
                    
                    {/* Image with 3D lift effect */}
                    <div className="relative h-20 w-16 xs:h-24 xs:w-20 sm:h-32 sm:w-24 md:h-40 md:w-32 flex items-center justify-center p-1 xs:p-2 sm:p-3 rounded-xl bg-[#00000030] backdrop-blur-sm border border-[#f8b447]/20 transform translate-z-20 group-hover:translate-z-30 transition-transform duration-500">
                    <img 
                        src="/howToBuy1.png" 
                        className="h-full w-full object-contain transition-all duration-500 transform group-hover:scale-110 sm:group-hover:scale-125 group-hover:rotate-6 drop-shadow-lg" 
                        alt="Connect Wallet"
                    />
                    </div>
                    
                    {/* Text floating above */}
                    <div className="relative text-center space-y-0.5 xs:space-y-1 group-hover:scale-110 sm:group-hover:scale-125 group-hover:-rotate-3 drop-shadow-lg transform translate-z-30">
                    <h1 className="text-xs xs:text-sm sm:text-base md:text-lg font-bold text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">Connect Wallet</h1>
                    <p className="text-[0.6rem] xs:text-xs text-white/80 bg-black/20 px-1 xs:px-2 py-0.5 rounded-full backdrop-blur-sm">
                        Connect Your Wallet 
                    </p>
                    </div>
                    
                    {/* Reflective edge */}
                    <div className="absolute inset-0 rounded-xl sm:rounded-2xl pointer-events-none overflow-hidden">
                    <div className="absolute top-0 right-0 w-8 h-8 xs:w-10 xs:h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-white/30 to-transparent rounded-bl-xl sm:rounded-bl-2xl" />
                    </div>
                </div>
                

                </div>
            </div>

            {/* Card 2 */}
            <div 
                className="relative w-28 h-36 xs:w-32 xs:h-44 sm:w-40 sm:h-56 md:w-48 md:h-64 lg:w-56 lg:h-80 group perspective-1000"
                 onClick={handleClick}    
            >
                {/* 3D Card Container */}
                <div className="relative w-full h-full transition-all duration-700 transform-style-preserve-3d group-hover:rotate-y-15">
                {/* Front Face */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#a62122] to-[#7a0a0a] rounded-xl sm:rounded-2xl p-2 xs:p-3 sm:p-4 flex flex-col items-center justify-center space-y-1 xs:space-y-2 sm:space-y-3 border-2 border-[#f8b447]/30 shadow-lg sm:shadow-xl overflow-hidden">
                    {/* Glow Effect */}
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#ff4d4d20_0%,_transparent_70%)] mix-blend-overlay" />
                    
                    {/* Image with 3D lift effect */}
                    <div className="relative h-20 w-16 xs:h-24 xs:w-20 sm:h-32 sm:w-24 md:h-40 md:w-32 flex items-center justify-center p-1 xs:p-2 sm:p-3 rounded-xl bg-[#00000030] backdrop-blur-sm border border-[#f8b447]/20 transform translate-z-20 group-hover:translate-z-30 transition-transform duration-500">
                    <img 
                        src="/howToBuy2.png" 
                        className="h-full w-full object-contain transition-all duration-500 transform group-hover:scale-110 sm:group-hover:scale-125 group-hover:-rotate-6 drop-shadow-lg" 
                        alt="Swap Tokens"
                    />
                    </div>
                    
                    {/* Text floating above */}
                    <div className="relative text-center space-y-0.5 xs:space-y-1 group-hover:scale-110 sm:group-hover:scale-125 group-hover:rotate-3 drop-shadow-lg transform translate-z-30">
                    <h1 className="text-xs xs:text-sm sm:text-base md:text-lg font-bold text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">SWAP</h1>
                    <p className="text-[0.6rem] xs:text-xs text-white/80 bg-black/20 px-1 xs:px-2 py-0.5 rounded-full backdrop-blur-sm">
                        Exchange tokens
                    </p>
                    </div>
                    
                    {/* Reflective edge */}
                    <div className="absolute inset-0 rounded-xl sm:rounded-2xl pointer-events-none overflow-hidden">
                    <div className="absolute top-0 right-0 w-8 h-8 xs:w-10 xs:h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-white/30 to-transparent rounded-bl-xl sm:rounded-bl-2xl" />
                    </div>
                </div>
                </div>
            </div>

            {/* Card 3 */}
            <div 
                className="relative w-28 h-36 xs:w-32 xs:h-44 sm:w-40 sm:h-56 md:w-48 md:h-64 lg:w-56 lg:h-80 group perspective-1000"
                 onClick={handleClick}
            >
                {/* 3D Card Container */}
                <div className="relative w-full h-full transition-all duration-700 transform-style-preserve-3d group-hover:-rotate-y-15">
                {/* Front Face */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#a62122] to-[#7a0a0a] rounded-xl sm:rounded-2xl p-2 xs:p-3 sm:p-4 flex flex-col items-center justify-center space-y-1 xs:space-y-2 sm:space-y-3 border-2 border-[#f8b447]/30 shadow-lg sm:shadow-xl overflow-hidden">
                    {/* Glow Effect */}
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#ff4d4d20_0%,_transparent_70%)] mix-blend-overlay" />
                    
                    {/* Image with 3D lift effect */}
                    <div className="relative h-20 w-16 xs:h-24 xs:w-20 sm:h-32 sm:w-24 md:h-40 md:w-32 flex items-center justify-center p-1 xs:p-2 sm:p-3 rounded-xl bg-[#00000030] backdrop-blur-sm border border-[#f8b447]/20 transform translate-z-20 group-hover:translate-z-30 transition-transform duration-500">
                    <img 
                        src="BuyPage.png" 
                        className="h-full w-full object-contain transition-all duration-500 transform group-hover:scale-110 sm:group-hover:scale-125 group-hover:rotate-6 drop-shadow-lg" 
                        alt="Connect Wallet"
                    />
                    </div>
                    
                    {/* Text floating above */}
                    <div className="relative text-center space-y-0.5 xs:space-y-1 group-hover:scale-110 sm:group-hover:scale-125 group-hover:-rotate-3 drop-shadow-lg transform translate-z-30">
                    <h1 className="text-xs xs:text-sm sm:text-base md:text-lg font-bold text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">Connect Wallet</h1>
                    <p className="text-[0.6rem] xs:text-xs text-white/80 bg-black/20 px-1 xs:px-2 py-0.5 rounded-full backdrop-blur-sm">
                        Connect Your Wallet 
                    </p>
                    </div>
                    
                    {/* Reflective edge */}
                    <div className="absolute inset-0 rounded-xl sm:rounded-2xl pointer-events-none overflow-hidden">
                    <div className="absolute top-0 right-0 w-8 h-8 xs:w-10 xs:h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-white/30 to-transparent rounded-bl-xl sm:rounded-bl-2xl" />
                    </div>
                </div>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default HowToBuy;