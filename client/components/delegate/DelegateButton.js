"use client";

import { Button } from "@heroui/react";
import { usePrivy } from "@privy-io/react-auth";
import { useAccount, useSwitchChain } from "wagmi";
import { useState } from "react";
import useWallet from "@/hooks/useWallet";
import { useSelector } from "react-redux";

export default function DelegateButton() {
  const { isConnected, chainId } = useAccount();
  const { connectWallet } = usePrivy();
  const { switchChain } = useSwitchChain();
  const [isDelegating, setIsDelegating] = useState(false);
  const { delegate } = useWallet();
  const hasDelegated = useSelector((state) => state.wallet.hasDelegated);

  return (
    <>
      {isConnected && chainId === 42161 && (
        <Button
          className="text-black bg-[var(--foreground)] w-full"
          variant="outline"
          onPress={() => delegate(setIsDelegating)}
          isDisabled={isDelegating || hasDelegated}
        >
          {isDelegating ? "Delegating..." : "Delegate to Melra"}
        </Button>
      )}

      {!isConnected && (
        <Button
          className="text-black bg-[var(--foreground)] w-full"
          variant="outline"
          onPress={connectWallet}
        >
          Connect Wallet
        </Button>
      )}

      {isConnected && chainId !== 42161 && (
        <Button
          className="text-black bg-[var(--foreground)] w-full"
          variant="outline"
          onPress={() => switchChain({ chainId: 42161 })}
        >
          Switch to Arbitrum One
        </Button>
      )}
    </>
  );
}
