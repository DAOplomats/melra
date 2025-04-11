import Misc from "@/components/dashboard/Misc";
import Navbar from "@/components/dashboard/Navbar";
import { RecentActivity } from "@/components/dashboard/RecentActivity";
import Stats from "@/components/dashboard/Stats";

export default function Dashboard() {
  return (
    <>
      <Navbar />

      <div className="flex-1">
        <div className="container py-6">
          <Stats />
          <Misc />
          <RecentActivity />
        </div>
      </div>
    </>
  );
}
