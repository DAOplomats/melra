"use client";

import { Card, CardHeader, CardBody } from "@heroui/react";
import { BarChart3, Users, CheckCircle } from "lucide-react";
import { useSelector } from "react-redux";

export default function Stats() {
  const snapshot = useSelector((state) => state.user.snapshot);
  const vp = useSelector((state) => state.user.vp);
  const delegatorsCount = useSelector((state) => state.user.delegatorsCount);
  return (
    <div className="grid gap-6">
      <div className="flex flex-col gap-1">
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
        <p className="">
          Overview of Melra's decision-making and delegation status
        </p>
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 ">
        <Card className="text-white shadow-none border border-[var(--foreground)] p-2">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <div className="text-sm font-medium">Total Proposals</div>
            <BarChart3 className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardBody>
            <div className="text-2xl font-bold">{snapshot?.proposalCount}</div>
            <p className="text-xs text-muted-foreground">
              {snapshot?.proposalCount - snapshot?.snapshot?.totalProposals} new
              proposals this month
            </p>
          </CardBody>
        </Card>
        <Card className="text-white shadow-none border border-[var(--foreground)] p-2">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <div className="text-sm font-medium">Delegated Voting Power</div>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardBody>
            <div className="text-2xl font-bold">{vp && vp.toFixed(2)}</div>
            <p className="text-xs text-muted-foreground">
              {vp > snapshot?.snapshot?.votingPower
                ? "+"
                : vp < snapshot?.snapshot?.votingPower
                ? "-"
                : ""}
              {vp &&
                (
                  ((Number(vp) - Number(snapshot?.snapshot?.votingPower)) /
                    Number(snapshot?.snapshot?.votingPower)) *
                  100
                ).toFixed(2)}
              {"% "}
              from last month
            </p>
          </CardBody>
        </Card>
        <Card className="text-white shadow-none border border-[var(--foreground)] p-2">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <div className="text-sm font-medium">Decision Accuracy</div>
            <CheckCircle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardBody>
            <div className="text-2xl font-bold">{snapshot?.feedback}%</div>
            <p className="text-xs text-muted-foreground">
              Based on community feedback
            </p>
          </CardBody>
        </Card>
        <Card className="text-white shadow-none border border-[var(--foreground)] p-2">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <div className="text-sm font-medium">Active Delegators</div>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardBody>
            <div className="text-2xl font-bold">
              {delegatorsCount && delegatorsCount.toFixed(0)}
            </div>
            <p className="text-xs text-muted-foreground">
              {delegatorsCount &&
                (delegatorsCount - snapshot?.snapshot?.delegatorsCount).toFixed(
                  0
                )}{" "}
              new delegators this month
            </p>
          </CardBody>
        </Card>
      </div>
    </div>
  );
}
