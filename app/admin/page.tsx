export default function AdminPage() {
import AdminHeader from "@/components/admin/Header";
import Sidebar from "@/components/admin/Sidebar";

export default function AdminPage() {
  return (
    <>
      <AdminHeader />

      <Sidebar />

      <main>

        <h2>Dashboard</h2>

        <p>
          Welcome to MHBuilder CMS
        </p>

      </main>

    </>
  );
}
