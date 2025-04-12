"use client";

import { useState } from "react";
import { Clock, ThumbsDown, ThumbsUp } from "lucide-react";
import Badge from "../ui/Badge";
import { Button } from "@heroui/react";

// Sample proposal data
const proposals = [
  {
    id: "prop-1",
    title: "Treasury Expansion",
    description:
      "Increase treasury allocation by 5% to fund new development initiatives",
    status: "active",
    timeLeft: "2 days",
    decision: "for",
    reasoning:
      "The proposal aligns with the DAO's growth strategy. Analysis of the current treasury shows sufficient reserves, and the 5% increase is sustainable. The development initiatives outlined have a high potential ROI based on historical data from similar projects.",
    votes: {
      for: 65,
      against: 25,
      abstain: 10,
    },
  },
  {
    id: "prop-2",
    title: "Protocol Upgrade",
    description: "Implement new security features to enhance protocol safety",
    status: "active",
    timeLeft: "5 days",
    decision: "for",
    reasoning:
      "Security analysis indicates the proposed features would significantly reduce vulnerability to common attack vectors. The implementation cost is reasonable compared to the potential risk mitigation. Community sentiment strongly favors increased security measures.",
    votes: {
      for: 82,
      against: 12,
      abstain: 6,
    },
  },
  {
    id: "prop-3",
    title: "Governance Change",
    description: "Modify voting threshold requirements from 4% to 3%",
    status: "active",
    timeLeft: "1 day",
    decision: "against",
    reasoning:
      "Lowering the threshold could lead to governance capture by smaller stakeholders. Historical data shows the current 4% threshold has provided adequate proposal throughput while ensuring sufficient consensus. The problem statement lacks evidence that the current threshold is causing governance stagnation.",
    votes: {
      for: 42,
      against: 53,
      abstain: 5,
    },
  },
  {
    id: "prop-4",
    title: "Community Fund Allocation",
    description: "Allocate 100,000 tokens to community development initiatives",
    status: "completed",
    result: "passed",
    decision: "for",
    reasoning:
      "The community initiatives outlined have clear KPIs and accountability mechanisms. Previous similar allocations have shown positive ROI in terms of community growth and engagement. The requested amount represents a reasonable percentage of the total community fund.",
    votes: {
      for: 72,
      against: 18,
      abstain: 10,
    },
  },
  {
    id: "prop-5",
    title: "Partnership with DeFi Protocol",
    description: "Strategic partnership with LiquidSwap to enhance liquidity",
    status: "completed",
    result: "passed",
    decision: "for",
    reasoning:
      "LiquidSwap has demonstrated strong security practices and reliable performance. The partnership terms are favorable and align with our liquidity strategy. Market analysis indicates potential for significant TVL increase through this integration.",
    votes: {
      for: 68,
      against: 22,
      abstain: 10,
    },
  },
];

export function List() {
  const [selectedProposal, setSelectedProposal] = useState(null);
  const [dialogOpen, setDialogOpen] = useState(false);

  const handleViewReasoning = (proposal) => {
    setSelectedProposal(proposal);
    setDialogOpen(true);
  };

  return (
    <div className="space-y-4 mt-6">
      {proposals.map((proposal) => (
        <div
          key={proposal.id}
          className="flex flex-col space-y-2 rounded-lg border p-4"
        >
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 sm:gap-0">
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <h3 className="font-medium">{proposal.title}</h3>
                {proposal.status === "active" ? (
                  <Badge
                    variant="outline"
                    className="bg-blue-50 text-blue-700 hover:bg-blue-50"
                  >
                    Active
                  </Badge>
                ) : (
                  <Badge
                    variant="outline"
                    className={
                      proposal.result === "passed"
                        ? "bg-green-50 text-green-700 hover:bg-green-50"
                        : "bg-red-50 text-red-700 hover:bg-red-50"
                    }
                  >
                    {proposal.result === "passed" ? "Passed" : "Failed"}
                  </Badge>
                )}
              </div>
              <p className="mt-1 text-sm text-muted-foreground">
                {proposal.description}
              </p>
            </div>
            <div className="flex items-center">
              {proposal.decision === "for" ? (
                <Badge className="bg-green-100 text-green-800 hover:bg-green-100">
                  <ThumbsUp className="mr-1 h-3 w-3" />
                  For
                </Badge>
              ) : (
                <Badge className="bg-red-100 text-red-800 hover:bg-red-100">
                  <ThumbsDown className="mr-1 h-3 w-3" />
                  Against
                </Badge>
              )}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-0">
            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
              {proposal.status === "active" && (
                <div className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  <span>{proposal.timeLeft} left</span>
                </div>
              )}
              <div className="flex flex-wrap items-center gap-2">
                <div className="flex items-center gap-1">
                  <ThumbsUp className="h-3 w-3 text-green-500" />
                  <span>{proposal.votes.for}%</span>
                </div>
                <div className="flex items-center gap-1">
                  <ThumbsDown className="h-3 w-3 text-red-500" />
                  <span>{proposal.votes.against}%</span>
                </div>
                <div className="flex items-center gap-1">
                  <span className="text-gray-400">Abstain:</span>
                  <span>{proposal.votes.abstain}%</span>
                </div>
              </div>
            </div>
            <Button
              className="text-black bg-[var(--foreground)]"
              variant="outline"
            >
              View Reasoning
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
}
