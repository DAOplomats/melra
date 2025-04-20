import axios from "axios";

export default function useSnapshot() {
  const getScores = async (proposalId) => {
    const query = `
    query Proposals {
      proposals(
        first: 1,
        skip: 0,
        where: {
          space_in: ["${process.env.NEXT_PUBLIC_SPACE_ID}"],
          id: "${proposalId}"
        },
        orderBy: "created",
        orderDirection: desc
      ) {
        choices
        scores
      }
    }
  `;

    const response = await axios.post(
      process.env.NEXT_PUBLIC_SNAPSHOT_API_URL,
      { query },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const proposals = response.data.data.proposals;

    if (proposals.length === 0) {
      return null;
    }

    return proposals[0];
  };

  return {
    getScores,
  };
}
