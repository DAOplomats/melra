"use client";

import axios from "axios";
import { useDispatch } from "react-redux";
import { useAccount } from "wagmi";
import { useSelector } from "react-redux";
import { toast } from "sonner";
import {
  setBalance,
  setHasDelegated,
  setIsLoading,
} from "@/redux/slice/walletSlice";
import { useEthersSigner } from "@/lib/ethersSigner";
import useInitialize from "./useInitialize";

export default function useWallet() {
  const dispatch = useDispatch();
  const { address } = useAccount();
  const melraAddress = useSelector((state) => state.user.melraAddress);
  const { isConnected } = useAccount();
  const signer = useEthersSigner();
  const { loadVp } = useInitialize();

  const checkDelegation = async () => {
    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/dao/delegates/arbitrum/${address}`
      );

      if (response.data.success) {
        const hasDelegated = response.data.delegates === melraAddress;
        dispatch(setHasDelegated(hasDelegated));
      } else {
        toast.error("Failed to load Delegation");
        dispatch(setHasDelegated(false));
        return null;
      }
    } catch (error) {
      console.error("Error loading Delegation:", error);
      toast.error("Failed to load Delegation");
      dispatch(setHasDelegated(false));
      return null;
    }
  };

  const checkBalance = async () => {
    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/dao/balance/arbitrum/${address}`
      );

      if (response.data.success) {
        dispatch(setBalance(response.data.balance));
      } else {
        toast.error("Failed to load Balance");
        dispatch(setBalance(false));
        return null;
      }
    } catch (error) {
      console.error("Error loading Balance:", error);
      toast.error("Failed to load Balance");
      dispatch(setBalance(false));
      return null;
    }
  };

  const initializeWallet = async () => {
    try {
      dispatch(setIsLoading(true));
      await checkDelegation();
      await checkBalance();
    } catch (error) {
      console.error("Error initializing wallet:", error);
      toast.error("Failed to initialize wallet");
    } finally {
      dispatch(setIsLoading(false));
    }
  };

  const delegate = async (setIsDelegating) => {
    try {
      setIsDelegating(true);

      if (!isConnected) {
        toast.error("Please connect your wallet");
        return;
      }

      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/dao/delegateData/arbitrum/${melraAddress}`
      );

      if (response.data.success) {
        const delegateData = response.data;

        const tx = {
          to: delegateData.contractAddress,
          from: address,
          data: delegateData.delegatePayload,
          gasLimit: 1000000,
        };

        const txResponse = await signer.sendTransaction(tx);

        const receipt = await txResponse.wait();

        toast.success("Transaction sent Successfully");

        const verificationResponse = await axios.post(
          `${process.env.NEXT_PUBLIC_API_URL}/dao/verifyDelegation/arbitrum/${receipt.transactionHash}`
        );

        if (verificationResponse.data.success) {
          toast.success("Delegation Indexed successfully");
          dispatch(setHasDelegated(true));
          await loadVp(melraAddress);
        } else {
          toast.error("Failed to Index Delegation");
          dispatch(setHasDelegated(false));
          return null;
        }
      } else {
        throw new Error(response.data.message);
      }
    } catch (error) {
      console.error("Error delegating:", error);
      toast.error("Failed to delegate");
      dispatch(setHasDelegated(false));
      return null;
    } finally {
      setIsDelegating(false);
    }
  };

  return {
    checkDelegation,
    checkBalance,
    initializeWallet,
    delegate,
  };
}
