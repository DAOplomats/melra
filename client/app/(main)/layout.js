"use client";

import MelraProvider from "@/providers/MelraProvider";
import WalletProvider from "@/providers/WalletProvider";

export default function Layout({ children }) {
  return (
    <MelraProvider>
      <WalletProvider>
        <div className={`flex flex-col min-h-screen font-inter`}>
          {children}
        </div>
      </WalletProvider>
    </MelraProvider>
  );
}
