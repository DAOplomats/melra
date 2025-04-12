"use client";

import { Button } from "@heroui/react";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function DelegateNavbar() {
  return (
    <header className="sticky top-0 z-10 border-b border-[var(--foreground)] bg-background">
      <div className="container flex h-16 items-center justify-between py-4">
        <div className="flex items-center gap-2">
          <Link
            href="/dashboard"
            className="border-[var(--foreground)] border rounded-md p-1"
          >
            <ArrowLeft className="h-5 w-5" />
          </Link>
          <h1 className="text-xl font-bold">Delegate</h1>
        </div>

        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="sm"
            className="text-[var(--foreground)] border border-[var(--foreground)]"
          >
            Connect Wallet
          </Button>
        </div>
      </div>
    </header>
  );
}
