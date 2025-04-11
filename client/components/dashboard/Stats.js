"use client";

import { Card, CardHeader, CardBody } from "@heroui/react";
import { BarChart3, Users, CheckCircle } from "lucide-react";

export default function Stats() {
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
            <div className="text-2xl font-bold">127</div>
            <p className="text-xs text-muted-foreground">
              +5 new proposals this week
            </p>
          </CardBody>
        </Card>
        <Card className="text-white shadow-none border border-[var(--foreground)] p-2">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <div className="text-sm font-medium">Delegated Voting Power</div>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardBody>
            <div className="text-2xl font-bold">1.2M</div>
            <p className="text-xs text-muted-foreground">
              +12% from last month
            </p>
          </CardBody>
        </Card>
        <Card className="text-white shadow-none border border-[var(--foreground)] p-2">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <div className="text-sm font-medium">Decision Accuracy</div>
            <CheckCircle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardBody>
            <div className="text-2xl font-bold">94.3%</div>
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
            <div className="text-2xl font-bold">3,287</div>
            <p className="text-xs text-muted-foreground">
              +156 new delegators this week
            </p>
          </CardBody>
        </Card>
      </div>
    </div>
  );
}
