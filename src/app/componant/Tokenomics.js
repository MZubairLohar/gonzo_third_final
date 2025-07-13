"use client";
const Tokenomics = () => {
    return (
        <div id="Tokenomics" className="relative h-screen w-full overflow-hidden">

            {/* Background GIF */}
            <img 
                src="/C4.gif" 
                alt="Background animation"
                className="absolute w-full h-full object-cover brightness-50 contrast-125 opacity-85"
                loading="eager"
            />
            {/* 3D Heading - Tokenomics (now properly layered) */}
            <div className="absolute top-10 md:top-20 left-0 right-0 text-center z-10 pointer-events-none">
                <h1 className="text-3xl md:text-8xl lg:text-9xl font-extrabold 
                            bg-gradient-to-b from-[#f8b447] to-[#a62122] 
                            bg-clip-text text-transparent
                            [text-shadow:_0_5px_15px_rgba(248,180,71,0.4)]
                            animate-float-slow mt-10 lg:mt-0 md:mt-0">
                    TOKENOMICS
                </h1>
            </div>

            {/* Main Content Grid */}
            <div className="relative h-full w-full flex items-center justify-center p-4 md:p-8 pt-24 md:pt-32 lg:ml-44">
                <div className="w-full max-w-2xl md:max-w-6xl lg:max-w-6xl grid grid-cols-2 lg:grid-cols-2 gap-2 z-20">
                    {/* Left Column - Token Info */}
                    <div className=" w-44 md:w-full lg:w-full h-64 sm:h-72 md:h-80 bg-white/5 backdrop-blur-2xl border border-[#f8b447]/20 rounded-2xl md:rounded-3xl p-4 sm:p-6 md:p-8 shadow-xl md:shadow-2xl">
                    <div className="mb-4 sm:mb-6 md:mb-8">
                        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#f8b447] mb-2 text-center">Total Supply</h2>
                        <p className="text-xl sm:text-4xl md:text-6xl font-extrabold text-white text-center mt-8 sm:mt-10 md:mt-14">
                        <span className="text-[#f8b447]">2,</span>
                        <span className="text-white">000,</span>
                        <span className="text-[#f8b447]">000,</span>
                        <span className="text-white">000</span>
                        </p>
                        <h4 className="text-lg sm:text-xl md:text-2xl text-[#a62122] text-center font-extrabold mt-6 sm:mt-8 md:mt-11 animate-pulse">NO TAXES</h4>
                    </div>
                    </div>

                    {/* Right Column - GIF Container */}
                    <div className="relative flex justify-center lg:justify-start">
                    <div className="backdrop-blur-sm border-2 border-[#f8b447]/30 rounded-xl md:rounded-2xl lg:rounded-3xl overflow-hidden shadow-lg md:shadow-xl lg:shadow-2xl"
                        style={{ 
                            aspectRatio: '9/16', 
                            width: '80%',
                            maxWidth: '200px',
                            height: 'auto',
                            maxHeight: '47vh'
                        }}>
                        <div className="absolute inset-0 flex items-center justify-center">
                        <div className="absolute w-full h-full bg-[#a62122]/10 z-10"></div>
                        <img 
                            src="/C5.gif" 
                            alt="Animated content"
                            className="w-full h-full object-cover brightness-90"
                            loading="eager"
                        />
                        </div>
                    </div>
                    </div>
                </div>
                </div>
        </div>
    );
};

export default Tokenomics;
            // <div className="relative h-full w-full flex items-center justify-center p-4 md:p-8 pt-24 md:pt-32 ml-44">
            //     <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-6 z-20">
            //         {/* Left Column - Token Info */}
            //         <div className="h-80 bg-white/5 backdrop-blur-2xl border border-[#f8b447]/20 rounded-3xl p-6 md:p-8 shadow-2xl">
            //             <div className="mb-6 md:mb-8">
            //                 <h2 className="text-2xl md:text-3xl font-bold text-[#f8b447] mb-2 text-center">Total Supply</h2>
            //                 <p className="text-4xl md:text-6xl font-extrabold text-white text-center mt-14 ">
            //                     <span className="text-[#f8b447]">2,</span>
            //                     <span className="text-white">000,</span>
            //                     <span className="text-[#f8b447]">000,</span>
            //                     <span className="text-white">000</span>
            //                 </p>
            //                 <h4 className="text-xl md:text-2xl text-[#a62122] text-center font-extrabold mt-11 animate-pulse">NO TAXES</h4>
            //             </div>
            //         </div>
            //             <div className="relative backdrop-blur-sm border-2 border-[#f8b447]/30 rounded-xl sm:rounded-2xl md:rounded-3xl overflow-hidden shadow-lg sm:shadow-xl md:shadow-2xl"
            //                 style={{ aspectRatio: '5/16', maxHeight: '47vh', width: '35%' }}>
            //                 <div className="absolute inset-0 flex items-center justify-center">
            //                     <div className="absolute w-full h-full bg-[#a62122]/10 z-10"></div>
            //                     <img 
            //                     src="/C5.gif" 
            //                     alt="Animated content"
            //                     className="w-full h-full object-cover brightness-90"
            //                     loading="eager"
            //                     />
            //                 </div>
            //             </div>
            //     </div>
            // </div>



