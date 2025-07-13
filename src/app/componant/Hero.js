"use client";

import FrameAnimation from "./FrameAnimation";


export default function Hero() {
  return (
    <div className="absolute w-full h-full left-20 lg:px-8 lg:py-24 md:mt-32 lg:-mt-10 mt-10 lg:-ml-10 z-0 ">
        <div className=" grid grid-cols-2 lg:grid-cols-2 gap-3 lg:max-w-7xl lg:ml-44 ml-18 mx-auto items-center lg:w-full w-[520px]">
        {/* Text Content */}
          <div className="md:w-18 w-32 lg:w-full lg:pr-16 xl:pr-24 text-center lg:text-left ">
            <div className="text-gray-900 font-extrabold tracking-wide text-4xl lg:text-5xl text-[10px]">
              <div className="block text-[#f8b447]">Gonzo</div>
              <div className="block text-white">The 
              <a className="text-[#a62122]" > Dancing </a> 
              Machine</div>
            </div>
            
            <p className=" text-[#a62122] font-medium text-[6px] lg:text-xl lg:mt-6 ">
              Hodl it to Get Rich. Introducing Treasure of <a className='text-white font-bold'>Gonzo</a>, the most
              meme-worthy memecoin in the galaxy. It's time for <a className='text-white font-bold'>Gonzo</a> to show the
              world who is the greatest meme coin that ever existed!
            </p>

            <div className="flex flex-col sm:flex-row gap-2 lg:mt-8 justify-center lg:justify-start text-[6px]">
              <a className="flex items-center justify-center py-3 lg:text-base font-black hover:text-white text-[#f8b447] transition-colors">
                How To Buy 
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 ml-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </a>
              <a
                href="/trade"
                className="flex items-center justify-center text-[6px] lg:px-6 lg:py-3 lg:text-base font-semibold bg-transparent hover:bg-[#a62122] text-white hover:text-white rounded-md transition-colors border border-[#a62122] hover:border-white"
              >
                Buy Now
              </a>
            </div>
          </div>
          {/* Animation - Fixed aspect ratio container */}
          <div className=" lg:w-full w-full lg:max-w-[580px] mx-auto lg:mx-0 lg:ml-16 md:-ml-20 -ml-8 ">
            <FrameAnimation className="w-full h-full " />
          </div>
        </div>
    </div>
  );
}

