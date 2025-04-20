"use client";

import { Card, CardBody, CardHeader, CardFooter } from "@heroui/react";
import { Button } from "@heroui/react";
import { CheckCircle, Clock, ArrowRight, X } from "lucide-react";
import { useSelector } from "react-redux";
import { formatDistance } from "date-fns";
import { useRouter } from "next/navigation";

export default function Misc() {
  const recentProposals = useSelector((state) => state.user.recentProposals);
  const router = useRouter();
  return (
    <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3 mt-6">
      <Card className="lg:col-span-2 text-white shadow-sm border-[var(--foreground)] border p-2">
        <CardHeader className="flex flex-row items-center justify-between">
          <div>
            <div className="text-2xl font-bold">Recent Proposals</div>
            <p className="text-base text-muted-foreground">
              Latest proposals from Arbitrum Governance
            </p>
          </div>
          <Button
            variant="outline"
            size="sm"
            className="text-[var(--foreground)] border border-[var(--foreground)]"
            onPress={() => router.push("/proposals")}
          >
            View All
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </CardHeader>
        <CardBody>
          <div className="space-y-4">
            {recentProposals?.map((proposal, index) => (
              <div
                key={index}
                className="flex items-center gap-2 justify-between border-[var(--foreground)] pb-4"
                style={{
                  borderBottom:
                    index === recentProposals.length - 1
                      ? "none"
                      : "1px solid var(--foreground)",
                }}
              >
                <div>
                  <div className="font-medium line-clamp-1">
                    {proposal.title}
                  </div>
                  <div className="text-sm text-muted-foreground line-clamp-1">
                    {proposal.shortDescription}
                  </div>
                </div>
                <div className="flex items-center justify-end gap-2 flex-1">
                  {proposal.decisions[0].status === "decided" && (
                    <div className="flex items-center gap-1">
                      <CheckCircle className="h-4 w-4" />
                      <span className="text-sm font-medium">
                        {
                          proposal.choices[
                            proposal.decisions[0].primaryDecision - 1
                          ]
                        }
                      </span>
                    </div>
                  )}

                  {proposal.decisions[0].status !== "decided" && (
                    <div className="flex items-center gap-1 text-muted-foreground border border-[var(--foreground)] rounded-md px-2 py-1">
                      <span className="text-sm capitalize">
                        {" "}
                        {proposal.decisions[0].status}
                      </span>
                    </div>
                  )}

                  <div className="flex items-center gap-1 text-muted-foreground truncate">
                    <Clock className="h-4 w-4" />
                    <span className="text-sm">
                      {proposal.endDate * 1000 - Date.now() > 0
                        ? formatDistance(proposal.endDate * 1000, Date.now()) +
                          " left"
                        : "Ended"}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {recentProposals.length === 0 && (
            <div className="flex items-center justify-center flex-1 flex-col gap-5">
              <div className="border-[var(--foreground)] border flex items-center justify-center p-2 rounded-md">
                <X className="h-4 w-4" />
              </div>
              <p className="text-muted-foreground">No recent proposals found</p>
            </div>
          )}
        </CardBody>
      </Card>
      <Card className="text-white shadow-none border border-[var(--foreground)] p-2">
        <CardHeader className="flex flex-col items-start">
          <div className="text-2xl font-bold">Delegate to Melra</div>
          <p className=" text-muted-foreground ">
            Let Melra vote on your behalf
          </p>
        </CardHeader>
        <CardBody className="-mt-2">
          <div className="space-y-4">
            <div className="rounded-lg border border-[var(--foreground)] p-4">
              <div className="font-medium">Why delegate to Melra?</div>
              <ul className="mt-2 space-y-2 text-sm text-muted-foreground">
                <li>• Data-driven decision making</li>
                <li>• Transparent reasoning for all votes</li>
                <li>• 24/7 proposal monitoring</li>
                <li>• Aligned with community values</li>
              </ul>
            </div>
          </div>
        </CardBody>
        <CardFooter>
          <Button
            className="text-black bg-[var(--foreground)] w-full"
            variant="outline"
            onPress={() => router.push("/delegate")}
          >
            Delegate Now
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
