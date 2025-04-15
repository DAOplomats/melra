"use client";

import {
  Button,
  Dropdown,
  DropdownTrigger,
  DropdownItem,
  DropdownMenu,
} from "@heroui/react";
import { usePrivy } from "@privy-io/react-auth";
import { LogOut } from "lucide-react";
import { useAccount, useDisconnect } from "wagmi";

export default function WalletCard() {
  const account = useAccount();
  const { disconnect } = useDisconnect();
  const { ready, connectWallet } = usePrivy();

  return account.status === "connected" ? (
    <>
      <Dropdown className="">
        <DropdownTrigger>
          <Button
            className="h-fit p-3 py-2 rounded-xl text-[var(--foreground)] border border-[var(--foreground)]"
            variant="outline"
            size="sm"
          >
            <div className="flex items-center space-x-2">
              <p>
                {ready &&
                  account.address.slice(0, 6) +
                    "..." +
                    account.address.slice(-4)}
              </p>
            </div>
          </Button>
        </DropdownTrigger>

        <DropdownMenu
          aria-label="Static Actions"
          className="font-inter border border-[var(--foreground)] rounded-lg"
          onAction={(key) => {
            if (key === "disconnect") {
              disconnect();
            }
          }}
        >
          <DropdownItem
            key="disconnect"
            className="text-danger flex items-center gap-2"
          >
            <div className="font-inter font-bold text-xs flex items-center gap-2">
              <LogOut className="w-3 h-3" /> Disconnect
            </div>
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </>
  ) : (
    <Button
      variant="outline"
      size="sm"
      className="text-[var(--foreground)] border border-[var(--foreground)]"
      onPress={() => {
        if (ready) {
          connectWallet();
        }
      }}
    >
      Connect Wallet
    </Button>
  );
}
