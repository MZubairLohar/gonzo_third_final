"use client";
import { useState } from "react";
import Link from "next/link";
import ScrollNavigationLink from "./ScrollNavigationLink";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleNavbar = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-transparent w-full top-0 start-0 font-custom border-b border-[#ffffff10] ">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto px-4 py-3">
        {/* Logo */}
        <div className="flex items-center justify-between w-full md:w-auto">
          <Link href="/" className="flex items-center space-x-3">
            <img src="/dota.png" className="h-10 md:h-12" alt="Logo" />
            <div className="text-xl md:text-2xl font-semibold text-white tracking-wider">
              <span className="text-[#f8b447]">Dancing</span>
              <span className="text-[#a62122]">Machine</span>
            </div>
          </Link>

          {/* Mobile menu button */}
          <button
            onClick={toggleNavbar}
            className="inline-flex items-center p-2 w-10 h-10 justify-center rounded-lg md:hidden focus:outline-none"
            aria-expanded={isOpen}
          >
            <svg
              className="w-5 h-5 text-[#f8b447]"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>

        {/* Navigation Links */}
        <div className={`${isOpen ? "block" : "hidden"} w-full md:flex md:items-center md:w-auto`}>
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium rounded-lg md:flex-row md:space-x-6 lg:space-x-8 md:mt-0 items-center">
            <li>
              <Link
                href="/"
                className="block py-6 px-2 text-[#f8b447] font-bold hover:text-[#a62122] transition-colors duration-200 active:text-[#a62122] focus:text-[#a62122] outline-none"
                onClick={() => setIsOpen(false)}
                tabIndex={0}
              >
                Home
              </Link>
            </li>
            <li 
                className="block py-6 px-2 text-[#f8b447] font-bold hover:text-[#a62122] transition-colors duration-200 active:text-[#a62122] focus:text-[#a62122] outline-none"
            >
              <ScrollNavigationLink to="sectionTwo" setIsOpen={setIsOpen}>
                About
              </ScrollNavigationLink>
            </li>
            <li
                className="block py-6 px-2 text-[#f8b447] font-bold hover:text-[#a62122] transition-colors duration-200 active:text-[#a62122] focus:text-[#a62122] outline-none"
            >
              <ScrollNavigationLink to="sectionThree" setIsOpen={setIsOpen}>
                How to Buy
              </ScrollNavigationLink>
            </li>
            <li
                className="block py-6 px-2 text-[#f8b447] font-bold hover:text-[#a62122] transition-colors duration-200 active:text-[#a62122] focus:text-[#a62122] outline-none"
            >
              <ScrollNavigationLink to="Tokenomics" setIsOpen={setIsOpen}>
                Tokenomics
              </ScrollNavigationLink>
            </li>
            <li
                className="block py-6 px-2 text-[#f8b447] font-bold hover:text-[#a62122] transition-colors duration-200 active:text-[#a62122] focus:text-[#a62122] outline-none"
            >
              <ScrollNavigationLink to="roadmap" setIsOpen={setIsOpen}>
                RoadMap
              </ScrollNavigationLink>
            </li>
            <li className="mt-2 md:mt-0">
              <Link href="/trade" tabIndex={0} onClick={() => setIsOpen(false)}>
                <span
                  className="px-2 py-6 md:px-6 md:py-2 bg-[#a62122] hover:bg-white text-white hover:text-[#a62122] rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-[#f8b447]/30 active:bg-white focus:bg-white outline-none cursor-pointer"
                  role="button"
                  tabIndex={0}
                >
                  Buy
                </span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}



    // <nav className="bg-transparent w-full z-50 top-0 start-0 font-custom border-b border-[#ffffff10] ">
    //   <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto px-4 py-3">
    //     {/* Logo */}
    //     <div className="flex items-center justify-between w-full md:w-auto">
    //       <Link href="/" className="flex items-center space-x-3">
    //         <img src="/dota.png" className="h-10 md:h-12" alt="Logo" />
    //         <div className="text-xl md:text-2xl font-semibold text-white tracking-wider">
    //           <span className="text-[#f8b447]">Dancing</span>
    //           <span className="text-[#a62122]">Machine</span>
    //         </div>
    //       </Link>

    //       {/* Mobile menu button */}
    //       <button
    //         onClick={toggleNavbar}
    //         className="inline-flex items-center p-2 w-10 h-10 justify-center rounded-lg md:hidden focus:outline-none"
    //         aria-expanded={isOpen}
    //       >
    //         <svg
    //           className="w-5 h-5 text-[#f8b447]"
    //           xmlns="http://www.w3.org/2000/svg"
    //           fill="none"
    //           viewBox="0 0 17 14"
    //         >
    //           <path
    //             stroke="currentColor"
    //             strokeLinecap="round"
    //             strokeLinejoin="round"
    //             strokeWidth="2"
    //             d="M1 1h15M1 7h15M1 13h15"
    //           />
    //         </svg>
    //       </button>
    //     </div>

    //     {/* Navigation Links */}
    //     <div className={`${isOpen ? "block" : "hidden"} w-full md:flex md:items-center md:w-auto`}>
    //       <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium rounded-lg md:flex-row md:space-x-6 lg:space-x-8 md:mt-0 items-center">
    //         <li>
    //           <Link
    //             href="/"
    //             className="block py-2 px-3 text-[#f8b447] font-bold hover:text-[#a62122] transition-colors duration-200"
    //             onClick={() => setIsOpen(false)}
    //           >
    //             Home
    //           </Link>
    //         </li>
    //         <li>
    //           <ScrollNavigationLink to="sectionTwo" setIsOpen={setIsOpen}>
    //             About
    //           </ScrollNavigationLink>
    //         </li>
    //         <li>
    //           <ScrollNavigationLink to="sectionThree" setIsOpen={setIsOpen}>
    //             How to Buy
    //           </ScrollNavigationLink>
    //         </li>
    //         <li>
    //           <ScrollNavigationLink to="Tokenomics" setIsOpen={setIsOpen}>
    //             Tokenomics
    //           </ScrollNavigationLink>
    //         </li>
    //         <li>
    //           <ScrollNavigationLink to="roadmap" setIsOpen={setIsOpen}>
    //             RoadMap
    //           </ScrollNavigationLink>
    //         </li>
    //         <li className="mt-2 md:mt-0">
    //           <Link href="/trade">
    //             <button className="px-4 py-2 md:px-6 md:py-2 bg-[#a62122] hover:bg-white text-white hover:text-[#a62122] rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-[#f8b447]/30">
    //               Buy
    //             </button>
    //           </Link>
    //         </li>
    //       </ul>
    //     </div>
    //   </div>
    // </nav>