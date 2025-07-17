"use client";

// import Image from "next/image";
// import { ConnectButton } from "thirdweb/react";
// import thirdwebIcon from "@public/thirdweb.svg";
// import { client } from "./client";
// import { darkTheme } from "thirdweb/react";
// import { createWallet } from "thirdweb/wallets";
import { Suspense, lazy } from 'react';
import PreloadWrapper from './componant/PreloadWrapper';


// Lazy load non-critical components
const AboutUs = lazy(() => import('./componant/AboutUs'));
const NewHero = lazy(() => import('./componant/NewHero'));
const Test = lazy(() => import('./componant/Test'));
const Eternal = lazy(() => import('./componant/Eternal'));
const HowToBuy = lazy(() => import('./componant/HowToBuy'));
const Tokenomics = lazy(() => import('./componant/Tokenomics'));
const Bonuses = lazy(() => import('./componant/Bonuses'));
const RoadMap = lazy(() => import('./componant/RoadMap'));
const Bottom = lazy(() => import('./componant/Bottom'));
const Timer = lazy(() => import('./componant/Timer'));



export default function Home() {
  return (
    <PreloadWrapper>
      <Suspense fallback={null}>
        <Timer />
      </Suspense>
    </PreloadWrapper>
  );
}
      //  <div>
      //   <Suspense fallback={null}>
      //     <NewHero />
      //   </Suspense>
      //   <Suspense fallback={null}>
      //     <AboutUs />
      //   </Suspense>
      //   <Suspense fallback={null}>
      //     <Eternal />
      //   </Suspense>
      //   {/* <Suspense fallback={null}>
      //     <Test />
      //   </Suspense> */}
      //   <Suspense fallback={null}>
      //     <HowToBuy />
      //   </Suspense>
      //   <Suspense fallback={null}>
      //     <Tokenomics />
      //   </Suspense>
      //   {/* <Suspense fallback={null}>
      //     <Bonuses />
      //   </Suspense> */}
      //   <Suspense fallback={null}>
      //     <RoadMap />
      //   </Suspense>
      //   <Suspense fallback={null}>
      //     <Bottom />
      //   </Suspense>
      // </div>

