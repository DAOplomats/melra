"use client";

import { Card, CardHeader, CardFooter, CardBody } from "@heroui/react";
import { Button } from "@heroui/react";

export default function DelegateBox() {
  return (
    <Card className="text-white shadow-none border border-[var(--foreground)] p-6">
      <CardHeader className="flex flex-col items-start p-0 mb-5">
        <div className="text-2xl font-bold">Delegate Your Voting Power</div>
        <div className="">
          Your tokens remain in your wallet while Melra votes on your behalf
        </div>
      </CardHeader>
      <div className="flex-1 flex flex-col justify-end">
        <CardBody className="space-y-4 border border-[var(--foreground)] flex-none rounded-lg">
          <div className="rounded-lg bg-muted p-4">
            <h4 className="mb-2 text-sm font-medium">Delegation Summary</h4>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Delegate To:</span>
                <span className="font-medium">Melra</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Voting Power:</span>
                <span className="font-medium">1 token = 1 vote</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Gas Fee (est.):</span>
                <span className="font-medium">~0.002 ETH</span>
              </div>
            </div>
          </div>
        </CardBody>
        <CardFooter className="flex flex-col gap-2 p-0 mt-5">
          <Button
            className="text-black bg-[var(--foreground)] w-full"
            variant="outline"
          >
            Delegate to Melra
          </Button>
          <p className="text-center text-xs text-muted-foreground">
            You can undelegate at any time
          </p>
        </CardFooter>
      </div>
    </Card>
  );
}
