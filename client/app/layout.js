import { Tinos, Inter } from "next/font/google";

import "./globals.css";

import UiProvider from "@/providers/UiProvider";
import Privy from "@/providers/Privy";
import ReduxProvider from "@/providers/ReduxProvider";
import { Toaster } from "sonner";

const tino = Tinos({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-tino",
});

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata = {
  title: "Melra",
  description: "The Sovereign Delegate",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${tino.variable} ${inter.variable} antialiased overflow-x-hidden font-tino`}
        suppressHydrationWarning
      >
        <ReduxProvider>
          <Privy>
            <Toaster
              position="bottom-center"
              richColors
              toastOptions={{
                className: `flex items-center justify-center text-center border rounded-lg ${inter.className}`,
                style: {
                  color: "white",
                  backgroundColor: "var(--background)",
                  borderColor: "var(--foreground)",
                  borderRadius: "10px",
                },
              }}
            />
            <UiProvider>{children}</UiProvider>
          </Privy>
        </ReduxProvider>
      </body>
    </html>
  );
}
