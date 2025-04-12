"use client";

import { Card, CardBody, CardHeader, CardFooter } from "@heroui/react";
import { Button } from "@heroui/react";
import { CheckCircle, Clock, ArrowRight } from "lucide-react";

export default function Misc() {
  return (
    <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3 mt-6">
      <Card className="lg:col-span-2 text-white shadow-sm border-[var(--foreground)] border p-2">
        <CardHeader className="flex flex-row items-center justify-between">
          <div>
            <div className="text-2xl font-bold">Active Proposals</div>
            <p className="text-base text-muted-foreground">
              Proposals currently being voted on
            </p>
          </div>
          <Button
            variant="outline"
            size="sm"
            className="text-[var(--foreground)] border border-[var(--foreground)]"
          >
            View All
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </CardHeader>
        <CardBody>
          <div className="space-y-4">
            <div className="flex items-center justify-between border-b border-[var(--foreground)] pb-4">
              <div>
                <div className="font-medium">Treasury Expansion</div>
                <div className="text-sm text-muted-foreground">
                  Increase treasury allocation by 5%
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1 text-green-500">
                  <CheckCircle className="h-4 w-4" />
                  <span className="text-sm font-medium">For</span>
                </div>
                <div className="flex items-center gap-1 text-muted-foreground">
                  <Clock className="h-4 w-4" />
                  <span className="text-sm">2d left</span>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between border-b border-[var(--foreground)] pb-4">
              <div>
                <div className="font-medium">Protocol Upgrade</div>
                <div className="text-sm text-muted-foreground">
                  Implement new security features
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1 text-green-500">
                  <CheckCircle className="h-4 w-4" />
                  <span className="text-sm font-medium">For</span>
                </div>
                <div className="flex items-center gap-1 text-muted-foreground">
                  <Clock className="h-4 w-4" />
                  <span className="text-sm">5d left</span>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <div className="font-medium">Governance Change</div>
                <div className="text-sm text-muted-foreground">
                  Modify voting threshold requirements
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1 text-red-500">
                  <CheckCircle className="h-4 w-4" />
                  <span className="text-sm font-medium">Against</span>
                </div>
                <div className="flex items-center gap-1 text-muted-foreground">
                  <Clock className="h-4 w-4" />
                  <span className="text-sm">1d left</span>
                </div>
              </div>
            </div>
          </div>
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
          >
            Delegate Now
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
