"use client";

import {
  setDelegatorsCount,
  setIsInitializing,
  setMelraAddress,
  setRecentActivities,
  setRecentDelegations,
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
        await loadDelegatorsCount();
        await loadDelegators();
        await loadRecentActivities();
      }
    } catch (error) {
      console.error("Error initializing:", error);
      toast.error("Failed to initialize");
    } finally {
      dispatch(setIsInitializing(false));
    }
  };

  const loadDelegatorsCount = async () => {
    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/utils/delegators/count/arbitrum`
      );

      if (response.data.success) {
        dispatch(setDelegatorsCount(response.data.count));
      } else {
        toast.error("Failed to load Delegators Count");
        return null;
      }
    } catch (error) {
      console.error("Error loading Delegators Count:", error);
      return null;
    }
  };

  const loadDelegators = async () => {
    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/utils/delegators/recent/arbitrum/3`
      );

      if (response.data.success) {
        dispatch(setRecentDelegations(response.data.delegations));
      } else {
        toast.error("Failed to load Delegators");
        return null;
      }
    } catch (error) {
      console.error("Error loading Delegators:", error);
      return null;
    }
  };

  const loadRecentActivities = async () => {
    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/utils/activity/recent/arbitrum/3`
      );

      if (response.data.success) {
        dispatch(setRecentActivities(response.data.activities));
      } else {
        toast.error("Failed to load Recent Activities");
        return null;
      }
    } catch (error) {
      console.error("Error loading Recent Activities:", error);
      return null;
    }
  };

  return {
    loadMelraAddress,
    loadVp,
    initialize,
    loadDelegatorsCount,
    loadDelegators,
    loadRecentActivities,
  };
}
