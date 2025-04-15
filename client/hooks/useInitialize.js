"use client";

import {
  setIsInitializing,
  setMelraAddress,
  setVp,
} from "@/redux/slice/UserSlice";
import axios from "axios";
import { useDispatch } from "react-redux";
import { toast } from "sonner";

export default function useInitialize() {
  const dispatch = useDispatch();

  const loadMelraAddress = async () => {
    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/utils/address/arbitrum`
      );

      if (response.data.success) {
        dispatch(setMelraAddress(response.data.address));
        return response.data.address;
      } else {
        toast.error("Failed to load Melra address");
        return null;
      }
    } catch (error) {
      console.error("Error loading Melra address:", error);
      return null;
    }
  };

  const loadVp = async (address) => {
    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/dao/vp/arbitrum/${address}`
      );

      if (response.data.success) {
        dispatch(setVp(response.data.votingPower));
      } else {
        toast.error("Failed to load VP");
        return null;
      }
    } catch (error) {
      console.error("Error loading VP:", error);
      return null;
    }
  };

  const initialize = async () => {
    try {
      dispatch(setIsInitializing(true));

      const address = await loadMelraAddress();

      if (address) {
        await loadVp(address);
      }
    } catch (error) {
      console.error("Error initializing:", error);
      toast.error("Failed to initialize");
    } finally {
      dispatch(setIsInitializing(false));
    }
  };

  return {
    loadMelraAddress,
    loadVp,
    initialize,
  };
}
