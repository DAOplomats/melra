import { Tinos } from "next/font/google";

import "./globals.css";

import UiProvider from "@/providers/UiProvider";

const tino = Tinos({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-tino",
});

export const metadata = {
  title: "Melra",
  description: "The Sovereign Delegate",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${tino.variable} antialiased overflow-x-hidden font-tino`}
        suppressHydrationWarning
      >
        <UiProvider>{children}</UiProvider>
      </body>
    </html>
  );
}
