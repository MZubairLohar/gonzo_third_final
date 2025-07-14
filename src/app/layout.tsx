"use client";
// import type { Metadata } from "next";
// import { Inter } from "next/font/google";
// import "./globals.css";
// import { ThirdwebProvider } from "thirdweb/react";
// import { defineChain } from "thirdweb";
// import { client  } from "./client";
// import { ethereum } from "thirdweb/chains";

//   const ganacheChain = defineChain({
//     id: 1337,
//     rpc: "http://127.0.0.1:7545",
//     nativeCurrency: {
//       name: "Ether",
//       symbol: "ETH",
//       decimals: 18,
//     },
//   });

// const inter = Inter({ subsets: ["latin"] });


// export const metadata: Metadata = {
//   title: "Gonzo",
//   description:
//     "Gonzo The Dancing Machine",
//   icons: {
//     icon: "/favicon.png", // path inside /public
//   },
// };

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html lang="en">
//       <body className={inter.className}>
//          <link rel="icon" href="/favicon.png" />
//           <ThirdwebProvider 
//             // activeChain ={ethereum as any}
//             // client={client as any}
//             // supportedChains={ganacheChain} 
//             client={client as any}
//             activeChain={ethereum as any}
//             supportedChains={[ganacheChain] as any}
//             >

//           {children}
//         </ThirdwebProvider>
//       </body>
//     </html>
//   );
// }
// import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThirdwebProvider } from "thirdweb/react";
import { defineChain } from "thirdweb";
import { client } from "./client";
import { ethereum } from "thirdweb/chains";

const ganacheChain = defineChain({
  id: 1337,
  rpc: "http://127.0.0.1:7545",
  nativeCurrency: {
    name: "Ether",
    symbol: "ETH",
    decimals: 18,
  },
});

const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "Gonzo",
//   description: "Gonzo The Dancing Machine",
//   icons: {
//     icon: "/favicon.png",
//   },
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <link rel="icon" href="/favicon.png" />
        <ThirdwebProvider
          client={client}
          initialChain={ethereum}
          supportedChains={[ganacheChain]}
        >
          {children}
        </ThirdwebProvider>
      </body>
    </html>
  );
}