"use client";

import { Card, CardHeader, CardBody } from "@heroui/react";
import { useSelector } from "react-redux";

export default function Stats() {
  const vp = useSelector((state) => state.user.vp);
  const delegatorsCount = useSelector((state) => state.user.delegatorsCount);
  const recentDelegations = useSelector(
    (state) => state.user.recentDelegations
  );
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
            <div className="text-2xl font-bold">
              {delegatorsCount ? Number(delegatorsCount).toFixed(0) : "0"}
            </div>
            <div className="text-xs text-muted-foreground">
              Unique Delegators
            </div>
          </div>
        </div>

        <div>
          <h4 className="mb-2 text-sm font-medium">Recent Delegators</h4>
          <div className="space-y-2 text-sm">
            {recentDelegations &&
              recentDelegations.map((delegator) => (
                <div
                  key={delegator.walletAddress}
                  className="flex justify-between"
                >
                  <span className="text-muted-foreground">
                    {delegator.walletAddress.slice(0, 6) +
                      "..." +
                      delegator.walletAddress.slice(-4)}
                  </span>
                  <span>
                    {(Number(delegator.tokens) / 10 ** 18).toFixed(2)} ARB
                  </span>
                </div>
              ))}
          </div>
        </div>
      </CardBody>
    </Card>
  );
}
