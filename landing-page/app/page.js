import Header from "@/components/Header";
import Philosophy from "@/components/Philosophy";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <Header />
        <Philosophy />
      </main>
    </div>
  );
}
