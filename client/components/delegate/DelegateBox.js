"use client";

import { Card, CardHeader, CardFooter, CardBody } from "@heroui/react";
import { CopyIcon, Loader2 } from "lucide-react";
import { useSelector } from "react-redux";
import { toast } from "sonner";
import { useAccount } from "wagmi";
import DelegateButton from "./DelegateButton";

export default function DelegateBox() {
  const { address } = useAccount();
  const melraAddress = useSelector((state) => state.user.melraAddress);
  const hasDelegated = useSelector((state) => state.wallet.hasDelegated);
  const balance = useSelector((state) => state.wallet.balance);
  const isLoading = useSelector((state) => state.wallet.isLoading);

  return (
    <Card className="text-white shadow-none border border-[var(--foreground)] p-6">
      <CardHeader className="flex flex-col items-start p-0 mb-5">
        <div className="text-2xl font-bold">Delegate Your Voting Power</div>
        <div className="">Delegate your entire voting power to Melra AI</div>
      </CardHeader>

      <div className="flex-1 flex flex-col justify-end">
        <CardBody className="space-y-4 border border-[var(--foreground)] flex-none rounded-lg mb-4">
          <div className="rounded-lg bg-muted p-4">
            <h4 className="mb-2 text-sm font-medium">Your Delegation Status</h4>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Current Status:</span>
                <span
                  className="font-medium flex items-center gap-2"
                  style={{
                    color: !hasDelegated ? "#FF0000" : "#00ff00",
                  }}
                >
                  {isLoading ? (
                    <Loader2 className="animate-spin h-4 w-4 text-white" />
                  ) : (
                    ""
                  )}
                  {!isLoading && (
                    <span>{hasDelegated ? "Delegated" : "Not Delegated"}</span>
                  )}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">
                  Available Voting Power:
                </span>
                <span className="font-medium flex items-center gap-2">
                  {isLoading ? (
                    <Loader2 className="animate-spin h-4 w-4" />
                  ) : (
                    ""
                  )}
                  {!isLoading && (
                    <span>
                      {balance ? Number(balance / 10 ** 18).toFixed(2) : "0"}{" "}
                      ARB
                    </span>
                  )}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Wallet Address</span>
                <span className="font-medium">
                  {address
                    ? address.slice(0, 6) + "..." + address.slice(-4)
                    : "Not connected"}
                </span>
              </div>
            </div>
          </div>
        </CardBody>

        <CardBody className="space-y-4 border border-[var(--foreground)] flex-none rounded-lg mb-4">
          <div className="rounded-lg p-4">
            <h4 className="mb-2 text-base font-medium">
              Delegation Information
            </h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Delegation transfers your entire voting power to Melra</li>
              <li>• Your tokens remain in your wallet and are not locked</li>
              <li>• You can undelegate at any time</li>
              <li>• Gas fees apply for delegation and undelegation</li>
            </ul>
          </div>
        </CardBody>

        <CardBody className="space-y-4 border border-[var(--foreground)] flex-none rounded-lg">
          <div className="rounded-lg bg-muted p-4">
            <h4 className="mb-2 text-sm font-medium">Delegation Summary</h4>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Delegate To:</span>
                <div className="font-medium flex items-center gap-2 font-tino">
                  Melra
                  <div className="border border-[var(--foreground)] rounded-md px-1 text-sm font-inter">
                    {melraAddress &&
                      melraAddress.slice(0, 6) + "..." + melraAddress.slice(-4)}
                  </div>
                  <CopyIcon
                    className="cursor-pointer h-4 w-4"
                    onClick={() => {
                      navigator.clipboard.writeText(melraAddress);
                      toast.success("Copied to clipboard");
                    }}
                  />
                </div>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Voting Power:</span>
                <span className="font-medium">1 Arb = 1 vote</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Gas Fee (est.):</span>
                <span className="font-medium">~0.0002 arbETH</span>
              </div>
            </div>
          </div>
        </CardBody>

        <CardFooter className="flex flex-col gap-2 p-0 mt-5">
          <DelegateButton />
          <p className="text-center text-xs text-muted-foreground">
            You can undelegate at any time
          </p>
        </CardFooter>
      </div>
    </Card>
  );
}
