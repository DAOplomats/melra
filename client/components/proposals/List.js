"use client";
import { CheckCircle, Clock } from "lucide-react";
import Badge from "../ui/Badge";
import { Button } from "@heroui/react";
import { useSelector } from "react-redux";
import { formatDistance } from "date-fns";

export function List({ tab }) {
  const recentProposals = useSelector((state) => state.user.recentProposals);
  const filteredProposals = recentProposals.filter(
    (proposal) =>
      tab === "all" ||
      (tab === "active" && proposal.endDate * 1000 - Date.now() > 0) ||
      (tab === "completed" && proposal.endDate * 1000 - Date.now() <= 0)
  );
  return (
    <div className="space-y-4 mt-6">
      {filteredProposals.map((proposal) => (
        <div
          key={proposal.id}
          className="flex flex-col space-y-2 rounded-lg border border-[var(--foreground)] p-4"
        >
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 sm:gap-0">
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <h3 className="font-medium">{proposal.title}</h3>
                {proposal.endDate * 1000 - Date.now() > 0 ? (
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
                {proposal.shortDescription}
              </p>
            </div>
            <div className="flex items-center">
              {proposal.decisions[0].status === "decided" && (
                <Badge className="bg-[var(--foreground)] text-black gap-1">
                  <CheckCircle className="h-4 w-4" />
                  <span className="text-sm font-normal">
                    {
                      proposal.choices[
                        proposal.decisions[0].primaryDecision - 1
                      ]
                    }
                  </span>
                </Badge>
              )}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-0">
            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                {proposal.endDate * 1000 - Date.now() > 0
                  ? formatDistance(proposal.endDate * 1000, Date.now()) +
                    " left"
                  : "Ended"}
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
