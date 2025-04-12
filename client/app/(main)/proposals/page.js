import ProposalList from "@/components/proposals/ProposalList";
import ProposalNavbar from "@/components/proposals/ProposalNavbar";

export default function Proposals() {
  return (
    <>
      <ProposalNavbar />

      <main className="flex-1">
        <div className="container py-6">
          <div className="mb-6 flex flex-col gap-2">
            <h1 className="text-3xl font-bold tracking-tight">All Proposals</h1>
            <p className="text-muted-foreground">
              Browse all proposals and see how Melra has voted
            </p>
          </div>

          <div className="mb-6 flex flex-col gap-4">
            <ProposalList />
          </div>
        </div>
      </main>
    </>
  );
}
