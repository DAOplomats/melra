"use client";

import { createConfig } from "@privy-io/wagmi";
import { mainnet, arbitrum } from "viem/chains";
import { http } from "wagmi";

export const config = createConfig({
  chains: [mainnet, arbitrum],
  transports: {
    [mainnet.id]: http(),
    [arbitrum.id]: http(),
  },
});
