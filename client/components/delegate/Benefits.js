"use client";

import { Card, CardHeader, CardBody } from "@heroui/react";

export default function Benefits() {
  return (
    <Card className="text-white shadow-none border border-[var(--foreground)] p-2">
      <CardHeader className="flex flex-col items-start">
        <div className="text-2xl font-bold">Why Delegate to Melra?</div>
        <div className="text-muted-foreground">
          Benefits of algorithmic governance
        </div>
      </CardHeader>
      <CardBody className="space-y-4">
        <div className="space-y-4">
          <div className="flex gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-full text-white border border-[var(--foreground)]">
              1
            </div>
            <div className="flex-1">
              <h4 className="font-medium">Data-Driven Decisions</h4>
              <p className="text-sm text-muted-foreground">
                Melra analyzes on-chain data, market conditions, and historical
                outcomes to make optimal decisions.
              </p>
            </div>
          </div>

          <div className="flex gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-full text-white border border-[var(--foreground)]">
              2
            </div>
            <div className="flex-1">
              <h4 className="font-medium">Full Transparency</h4>
              <p className="text-sm text-muted-foreground">
                Every decision includes detailed reasoning that explains exactly
                why Melra voted the way it did.
              </p>
            </div>
          </div>

          <div className="flex gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-full text-white border border-[var(--foreground)]">
              3
            </div>
            <div className="flex-1">
              <h4 className="font-medium">24/7 Participation</h4>
              <p className="text-sm text-muted-foreground">
                Never miss a proposal vote. Melra actively monitors and
                participates in all governance activities.
              </p>
            </div>
          </div>

          <div className="flex gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-full text-white border border-[var(--foreground)]">
              4
            </div>
            <div className="flex-1">
              <h4 className="font-medium">Community Alignment</h4>
              <p className="text-sm text-muted-foreground">
                Melra's decision framework is designed to align with long-term
                community interests and protocol health.
              </p>
            </div>
          </div>
        </div>
      </CardBody>
    </Card>
  );
}
