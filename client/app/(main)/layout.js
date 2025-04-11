"use client";

import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Layout({ children }) {
  return (
    <div className={`flex flex-col min-h-screen ${inter.className}`}>
      {children}
    </div>
  );
}
