import AdminHeader from "@/components/admin/Header";
import Sidebar from "@/components/admin/Sidebar";
import StatsCard from "@/components/admin/dashboard/StatsCard";
import QuickMenu from "@/components/admin/dashboard/QuickMenu";

export default function AdminPage() {
  return (
    <>
      <AdminHeader />
      <Sidebar />

      <main>

        <h1>MHBuilder CMS Dashboard</h1>

        <StatsCard
          title="Pages"
          value={0}
        />

        <StatsCard
          title="Posts"
          value={0}
        />

        <StatsCard
          title="Projects"
          value={0}
        />

        <QuickMenu />

      </main>

    </>
  );
}
