export default function Block() {
  return (
    <div
      className="flex flex-col w-[350px] mt-10"
      style={{
        opacity: 0.3,
      }}
    >
      <div className="flex w-full gap-2 items-center">
        <div className="border border-[var(--foreground)] border-t border-b-0 border-r-0 rounded-tl-lg w-2 h-2"></div>
        <p className="text-xs mb-2">TMC ARB Recommendation</p>
        <div className="border border-[var(--foreground)] border-t border-b-0 border-l-0 flex-1 rounded-tr-lg w-20 h-2"></div>
      </div>
      <div className="flex flex-col w-full gap-2 border border-[var(--foreground)] text-xs p-3 px-4 pb-5 rounded-br-lg rounded-bl-lg -mt-3 border-t-0">
        he TMC recommends a YES vote to deploy a stablecoin strategy for 15M
        ARB. This involves converting the ARB to stablecoins and allocating them
        to three partners (Karpatkey, Avantgarde & Myso, Gauntlet) for
        management using established low-risk protocols with an expected yield
        of 8-12%. Each manager would receive a 33% equal split. This vote is
        separate from a planned vote regarding ARB token strategy. If approved,
        the foundation would convert 15M ARB into stablecoins, If not approved,
        the ARB will not be converted. A full report will be available three
        months after. The selection was based on experience, risk management,
        alignment with DAO goals, expected returns, and transparency.
        <div className="text-[var(--background)] w-full text-xs flex justify-end items-center">
          <div className="p-1 font-bold rounded-md px-2 bg-[var(--foreground)] opacity-70">
            FOR
          </div>
        </div>
      </div>
    </div>
  );
}
