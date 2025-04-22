"use client";

import axios from "axios";
import { toast } from "sonner";

export default function useTally() {
  const getVotesTally = async (proposalId) => {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/utils/tally/voteStats/${proposalId}`
    );

    if (response.data.success) {
      const voteStats = response.data.voteStats;

      const scores = voteStats.map((stats) => Number(stats.votesCount));
      const choices = voteStats.map((stats) => stats.type);

      return {
        choices,
        scores,
      };
    } else {
      toast.error("Failed to load votes");
      return null;
    }
  };

  return {
    getVotesTally,
  };
}
