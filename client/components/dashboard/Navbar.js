import Link from "next/link";
import WalletCard from "../ui/WalletCard";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-[var(--foreground)] bg-[var(--background)]">
      <div className="container flex h-16 items-center justify-between py-4">
        <div className="flex items-center gap-2">
          <h1 className="text-2xl font-bold font-tino">Melra</h1>
        </div>
        <nav className="hidden md:flex items-center gap-6">
          <Link href="/dashboard" className="text-sm font-medium">
            Dashboard
          </Link>
          <Link
            href="/proposals"
            className="text-sm font-medium text-muted-foreground"
          >
            Proposals
          </Link>
          <Link
            href="/delegate"
            className="text-sm font-medium text-muted-foreground"
          >
            Delegate
          </Link>
        </nav>
        <div className="flex items-center gap-2">
          <WalletCard />
        </div>
      </div>
    </header>
  );
}
