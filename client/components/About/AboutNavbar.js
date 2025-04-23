import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import WalletCard from "../ui/WalletCard";

export default function AboutNavbar() {
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
          <h1 className="text-xl font-bold">About</h1>
        </div>

        <div className="flex items-center gap-2">
          <WalletCard />
        </div>
      </div>
    </header>
  );
}
