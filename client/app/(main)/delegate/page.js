import Benefits from "@/components/delegate/Benefits";
import DelegateBox from "@/components/delegate/DelegateBox";
import DelegateNavbar from "@/components/delegate/DelegateNavbar";
import Stats from "@/components/delegate/Stats";

export default function Delegate() {
  return (
    <>
      <DelegateNavbar />

      <main className="flex-1">
        <div className="container py-6">
          <div className="mb-6 flex flex-col gap-2">
            <h1 className="text-3xl font-bold tracking-tight">
              Delegate to <span className="font-tino text-4xl">Melra</span>
            </h1>
            <p className="text-muted-foreground">
              Delegate your voting power to Melra for data-driven governance
              decisions
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <DelegateBox />

            <div className="space-y-6">
              <Stats />
              <Benefits />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
