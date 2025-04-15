"use client";

import useWallet from "@/hooks/useWallet";
import { setBalance, setHasDelegated } from "@/redux/slice/walletSlice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useAccount } from "wagmi";

export default function WalletProvider({ children }) {
  const melraAddress = useSelector((state) => state.user.melraAddress);
  const { isConnected } = useAccount();
  const dispatch = useDispatch();
  const { initializeWallet } = useWallet();

  useEffect(() => {
    if (isConnected && melraAddress) {
      initializeWallet();
    } else {
      dispatch(setHasDelegated(false));
      dispatch(setBalance(false));
    }
  }, [isConnected, melraAddress]);
  return <>{children}</>;
}
