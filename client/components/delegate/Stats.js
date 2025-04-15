"use client";

import { Card, CardHeader, CardBody } from "@heroui/react";
import { useSelector } from "react-redux";

export default function Stats() {
  const vp = useSelector((state) => state.user.vp);
  return (
    <Card className="text-white shadow-none border border-[var(--foreground)] p-2">
      <CardHeader className="flex flex-col items-start">
        <div className="text-2xl font-bold">Delegation Stats</div>
        <p className="text-muted-foreground">
          Current Melra AI delegation metrics
        </p>
      </CardHeader>
      <CardBody className="space-y-8">
        <div className="grid grid-cols-2 gap-4">
          <div className="rounded-lg border-[var(--foreground)] border p-4 text-center">
            <div className="text-2xl font-bold">
              {vp ? Number(vp).toFixed(2) : "0"}
            </div>
            <div className="text-xs text-muted-foreground">
              Total Voting Power
            </div>
          </div>
          <div className="rounded-lg border-[var(--foreground)] border p-4 text-center">
            <div className="text-2xl font-bold">3,287</div>
            <div className="text-xs text-muted-foreground">
              Unique Delegators
            </div>
          </div>
        </div>

        <div>
          <h4 className="mb-2 text-sm font-medium">Recent Delegators</h4>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-muted-foreground">0x1a2...3b4c</span>
              <span>50,000 tokens</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">0x5d6...7e8f</span>
              <span>120,000 tokens</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">0x9g0...1h2i</span>
              <span>75,000 tokens</span>
            </div>
          </div>
        </div>
      </CardBody>
    </Card>
  );
}
