"use client";
import React from "react";

const RoadMap =()=> {
  return (
    <div id="roadmap" className="relative min-h-screen w-full overflow-hidden bg-black font-custom tracking-widest px-4 sm:px-6 md:px-8 lg:px-20 py-8 sm:py-10">
        {/* Floating Particles - Enhanced for mobile */}
        {[...Array(30)].map((_, i) => (
          <div 
            key={i} 
            className="absolute rounded-full z-0"
            style={{
              width: `${Math.random() * 8 + 2}px`,
              height: `${Math.random() * 8 + 2}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background: `radial-gradient(circle, #f8b447 ${Math.random() * 30 + 20}%, #a62122 100%)`,
              animation: `float ${Math.random() * 15 + 10}s linear infinite`,
              animationDelay: `${Math.random() * 5}s`,
              filter: 'blur(1px)',
              opacity: Math.random() * 0.4 + 0.3
            }} 
          />
        ))}
        
        {/* 3D Heading - Maintains exact size on mobile */}
        <div className="relative z-10 text-center mt-8 sm:mt-10">
          <h1 className="text-6xl sm:text-7xl md:text-8xl font-extrabold 
                        bg-gradient-to-b from-[#f8b447] to-[#a62122] 
                        bg-clip-text text-transparent
                        [text-shadow:_0_5px_15px_rgba(248,180,71,0.4)]
                        animate-float-slow">
            ROADMAP
          </h1>
        </div>

        {/* 3D Timeline - Desktop layout on mobile */}
        <div className="relative z-10 mx-0 sm:mx-4 md:mx-8 lg:mx-10 mt-12 sm:mt-16">
          <div className="bg-black/30 backdrop-blur-lg p-4 sm:p-6 rounded-3xl border border-[#f8b447]/30 shadow-2xl">
            <div className="flex flex-col grid-cols-9 p-2 mx-auto md:grid">
              {/* Week 1 */}
              <div className="flex md:contents flex-row-reverse">
                <div className="relative w-full p-4 sm:p-6 my-4 sm:my-6 text-white bg-gradient-to-br from-[#a62122]/40 to-[#a62122]/10 rounded-2xl col-start-1 col-end-5 mr-auto md:mr-0 md:ml-auto border border-[#f8b447]/20 shadow-lg transform transition-all hover:scale-105 hover:translate-x-2">
                  <h3 className="text-lg sm:text-xl font-bold text-[#f8b447]">Week: 1</h3>
                  <p className="mt-2 text-sm sm:text-base leading-6">Presale Meme Initiation of Dancing Machine in this phase users will receive 2x</p>
                  {/* <span className="absolute text-xs sm:text-sm text-[#f8b447] -top-4 sm:-top-5 left-2 whitespace-nowrap">Coming soon...</span> */}
                </div>
                <div className="relative col-start-5 col-end-6 mr-4 sm:mr-7 md:mx-auto">
                  <div className="flex items-center justify-center w-4 sm:w-6 h-full">
                    <div className="w-1 h-full bg-gradient-to-b from-[#f8b447] to-[#a62122] rounded-t-full"></div>
                  </div>
                  <div className="absolute w-4 h-4 sm:w-6 sm:h-6 -mt-2 sm:-mt-3 bg-[#f8b447] border-2 sm:border-4 border-[#a62122] rounded-full top-1/2 shadow-lg"></div>
                </div>
              </div>

              {/* Week 2 */}
              <div className="flex md:contents">
                <div className="relative col-start-5 col-end-6 mr-4 sm:mr-7 md:mx-auto">
                  <div className="flex items-center justify-center w-4 sm:w-6 h-full">
                    <div className="w-1 h-full bg-gradient-to-b from-[#f8b447] to-[#a62122]"></div>
                  </div>
                  <div className="absolute w-4 h-4 sm:w-6 sm:h-6 -mt-2 sm:-mt-3 bg-[#f8b447] border-2 sm:border-4 border-[#a62122] rounded-full top-1/2 shadow-lg"></div>
                </div>
                <div className="relative w-full p-4 sm:p-6 my-4 sm:my-6 text-white bg-gradient-to-br from-[#f8b447]/40 to-[#f8b447]/10 rounded-2xl col-start-6 col-end-10 mr-auto border border-[#a62122]/20 shadow-lg transform transition-all hover:scale-105 hover:-translate-x-2">
                  <h3 className="text-lg sm:text-xl font-bold text-[#a62122]">Week: 2</h3>
                  <p className="mt-2 text-sm sm:text-base leading-6">Second week of Dancing Machine, users will receive 1.75x</p>
                  {/* <span className="absolute text-xs sm:text-sm text-[#f8b447] -top-4 sm:-top-5 left-2 whitespace-nowrap">Date 2</span> */}
                </div>
              </div>

              {/* Week 3 */}
              <div className="flex md:contents flex-row-reverse">
                <div className="relative w-full p-4 sm:p-6 my-4 sm:my-6 text-white bg-gradient-to-br from-[#a62122]/40 to-[#a62122]/10 rounded-2xl col-start-1 col-end-5 mr-auto md:mr-0 md:ml-auto border border-[#f8b447]/20 shadow-lg transform transition-all hover:scale-105 hover:translate-x-2">
                  <h3 className="text-lg sm:text-xl font-bold text-[#f8b447]">Week: 3</h3>
                  <p className="mt-2 text-sm sm:text-base leading-6">Third week of Dancing Machine, users will receive 1.5x</p>
                  {/* <span className="absolute text-xs sm:text-sm text-[#f8b447] -top-4 sm:-top-5 left-2 whitespace-nowrap">Date 3</span> */}
                </div>
                <div className="relative col-start-5 col-end-6 mr-4 sm:mr-7 md:mx-auto">
                  <div className="flex items-center justify-center w-4 sm:w-6 h-full">
                    <div className="w-1 h-full bg-gradient-to-b from-[#f8b447] to-[#a62122] rounded-b-full"></div>
                  </div>
                  <div className="absolute w-4 h-4 sm:w-6 sm:h-6 -mt-2 sm:-mt-3 bg-[#f8b447] border-2 sm:border-4 border-[#a62122] rounded-full top-1/2 shadow-lg"></div>
                </div>
              </div>
              {/* Week 4 */}
              <div className="flex md:contents">
                <div className="relative col-start-5 col-end-6 mr-4 sm:mr-7 md:mx-auto">
                  <div className="flex items-center justify-center w-4 sm:w-6 h-full">
                    <div className="w-1 h-full bg-gradient-to-b from-[#f8b447] to-[#a62122]"></div>
                  </div>
                  <div className="absolute w-4 h-4 sm:w-6 sm:h-6 -mt-2 sm:-mt-3 bg-[#f8b447] border-2 sm:border-4 border-[#a62122] rounded-full top-1/2 shadow-lg"></div>
                </div>
                <div className="relative w-full p-4 sm:p-6 my-4 sm:my-6 text-white bg-gradient-to-br from-[#f8b447]/40 to-[#f8b447]/10 rounded-2xl col-start-6 col-end-10 mr-auto border border-[#a62122]/20 shadow-lg transform transition-all hover:scale-105 hover:-translate-x-2">
                  <h3 className="text-lg sm:text-xl font-bold text-[#a62122]">Week: 4</h3>
                  <p className="mt-2 text-sm sm:text-base leading-6">Forth week of Dancing Machine, users will receive 1.25x</p>
                  {/* <span className="absolute text-xs sm:text-sm text-[#f8b447] -top-4 sm:-top-5 left-2 whitespace-nowrap">Date 2</span> */}
                </div>
              </div>
              {/* Week 5 */}
              <div className="flex md:contents flex-row-reverse">
                <div className="relative w-full p-4 sm:p-6 my-4 sm:my-6 text-white bg-gradient-to-br from-[#a62122]/40 to-[#a62122]/10 rounded-2xl col-start-1 col-end-5 mr-auto md:mr-0 md:ml-auto border border-[#f8b447]/20 shadow-lg transform transition-all hover:scale-105 hover:translate-x-2">
                  <h3 className="text-lg sm:text-xl font-bold text-[#f8b447]">Week: 5</h3>
                  <p className="mt-2 text-sm sm:text-base leading-6">Presale Withdrawal Initiation of Dancing Machine in this phase users will be able to Withdraw 1/4 of Their Tokens</p>
                  {/* <span className="absolute text-xs sm:text-sm text-[#f8b447] -top-4 sm:-top-5 left-2 whitespace-nowrap">Coming soon...</span> */}
                </div>
                <div className="relative col-start-5 col-end-6 mr-4 sm:mr-7 md:mx-auto">
                  <div className="flex items-center justify-center w-4 sm:w-6 h-full">
                    <div className="w-1 h-full bg-gradient-to-b from-[#f8b447] to-[#a62122] rounded-t-full"></div>
                  </div>
                  <div className="absolute w-4 h-4 sm:w-6 sm:h-6 -mt-2 sm:-mt-3 bg-[#f8b447] border-2 sm:border-4 border-[#a62122] rounded-full top-1/2 shadow-lg"></div>
                </div>
              </div>
               {/* Week 6 */}
              <div className="flex md:contents">
                <div className="relative col-start-5 col-end-6 mr-4 sm:mr-7 md:mx-auto">
                  <div className="flex items-center justify-center w-4 sm:w-6 h-full">
                    <div className="w-1 h-full bg-gradient-to-b from-[#f8b447] to-[#a62122]"></div>
                  </div>
                  <div className="absolute w-4 h-4 sm:w-6 sm:h-6 -mt-2 sm:-mt-3 bg-[#f8b447] border-2 sm:border-4 border-[#a62122] rounded-full top-1/2 shadow-lg"></div>
                </div>
                <div className="relative w-full p-4 sm:p-6 my-4 sm:my-6 text-white bg-gradient-to-br from-[#f8b447]/40 to-[#f8b447]/10 rounded-2xl col-start-6 col-end-10 mr-auto border border-[#a62122]/20 shadow-lg transform transition-all hover:scale-105 hover:-translate-x-2">
                  <h3 className="text-lg sm:text-xl font-bold text-[#a62122]">Week: 6</h3>
                  <p className="mt-2 text-sm sm:text-base leading-6">Sixth week of Dancing Machine, users will be able to withdraw 1/4th more</p>
                  {/* <span className="absolute text-xs sm:text-sm text-[#f8b447] -top-4 sm:-top-5 left-2 whitespace-nowrap">Date 2</span> */}
                </div>
              </div>

              {/* Week 7 */}
              <div className="flex md:contents flex-row-reverse">
                <div className="relative w-full p-4 sm:p-6 my-4 sm:my-6 text-white bg-gradient-to-br from-[#a62122]/40 to-[#a62122]/10 rounded-2xl col-start-1 col-end-5 mr-auto md:mr-0 md:ml-auto border border-[#f8b447]/20 shadow-lg transform transition-all hover:scale-105 hover:translate-x-2">
                  <h3 className="text-lg sm:text-xl font-bold text-[#f8b447]">Week: 7</h3>
                  <p className="mt-2 text-sm sm:text-base leading-6">User will be able to Withdraw 1/4 of Their Tokens</p>
                  {/* <span className="absolute text-xs sm:text-sm text-[#f8b447] -top-4 sm:-top-5 left-2 whitespace-nowrap">Coming soon...</span> */}
                </div>
                <div className="relative col-start-5 col-end-6 mr-4 sm:mr-7 md:mx-auto">
                  <div className="flex items-center justify-center w-4 sm:w-6 h-full">
                    <div className="w-1 h-full bg-gradient-to-b from-[#f8b447] to-[#a62122] rounded-t-full"></div>
                  </div>
                  <div className="absolute w-4 h-4 sm:w-6 sm:h-6 -mt-2 sm:-mt-3 bg-[#f8b447] border-2 sm:border-4 border-[#a62122] rounded-full top-1/2 shadow-lg"></div>
                </div>
              </div>
               {/* Week 8 */}
              <div className="flex md:contents">
                <div className="relative col-start-5 col-end-6 mr-4 sm:mr-7 md:mx-auto">
                  <div className="flex items-center justify-center w-4 sm:w-6 h-full">
                    <div className="w-1 h-full bg-gradient-to-b from-[#f8b447] to-[#a62122]"></div>
                  </div>
                  <div className="absolute w-4 h-4 sm:w-6 sm:h-6 -mt-2 sm:-mt-3 bg-[#f8b447] border-2 sm:border-4 border-[#a62122] rounded-full top-1/2 shadow-lg"></div>
                </div>
                <div className="relative w-full p-4 sm:p-6 my-4 sm:my-6 text-white bg-gradient-to-br from-[#f8b447]/40 to-[#f8b447]/10 rounded-2xl col-start-6 col-end-10 mr-auto border border-[#a62122]/20 shadow-lg transform transition-all hover:scale-105 hover:-translate-x-2">
                  <h3 className="text-lg sm:text-xl font-bold text-[#a62122]">Week: 8</h3>
                  <p className="mt-2 text-sm sm:text-base leading-6">Final week Users will be able to withdraw remaining 1/4th </p>
                  {/* <span className="absolute text-xs sm:text-sm text-[#f8b447] -top-4 sm:-top-5 left-2 whitespace-nowrap">Date 2</span> */}
                </div>
              </div>
              {/* Week 9 */}
              <div className="flex md:contents flex-row-reverse">
                <div className="relative w-full p-4 sm:p-6 my-4 sm:my-6 text-white bg-gradient-to-br from-[#a62122]/40 to-[#a62122]/10 rounded-2xl col-start-1 col-end-5 mr-auto md:mr-0 md:ml-auto border border-[#f8b447]/20 shadow-lg transform transition-all hover:scale-105 hover:translate-x-2">
                  <h3 className="text-lg sm:text-xl font-bold text-[#f8b447]">Week: 9</h3>
                  <p className="mt-2 text-sm sm:text-base leading-6">User who are not able to withdraw any tokens during distrubution they will be able to Withdraw all of Their Tokens at once</p>
                  {/* <span className="absolute text-xs sm:text-sm text-[#f8b447] -top-4 sm:-top-5 left-2 whitespace-nowrap">Coming soon...</span> */}
                </div>
                <div className="relative col-start-5 col-end-6 mr-4 sm:mr-7 md:mx-auto">
                  <div className="flex items-center justify-center w-4 sm:w-6 h-full">
                    <div className="w-1 h-full bg-gradient-to-b from-[#f8b447] to-[#a62122] rounded-t-full"></div>
                  </div>
                  <div className="absolute w-4 h-4 sm:w-6 sm:h-6 -mt-2 sm:-mt-3 bg-[#f8b447] border-2 sm:border-4 border-[#a62122] rounded-full top-1/2 shadow-lg"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}

export default RoadMap;