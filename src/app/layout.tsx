"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThirdwebProvider } from "thirdweb/react";
import CustomCursor from "./componant/CustomCursor";

const inter = Inter({ subsets: ["latin"] });


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">

      <body className={inter.className} 
      >
        <link rel="icon" href="/favicon.png" />
        <ThirdwebProvider >
          {children}
          <CustomCursor />
        </ThirdwebProvider>
      </body>
    </html>
  );
}