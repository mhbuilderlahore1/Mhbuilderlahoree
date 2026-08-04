import AdminHeader from "@/components/admin/Header";
import Sidebar from "@/components/admin/Sidebar";
import Card from "@/components/admin/dashboard/Card";

export default function AdminPage() {
  return (
    <>
      <AdminHeader />

      <Sidebar />

      <main>

        <h1>Dashboard</h1>

        <Card title="Pages" total={0} />
        <Card title="Posts" total={0} />
        <Card title="Projects" total={0} />
        <Card title="Products" total={0} />
        <Card title="Gallery" total={0} />
        <Card title="Messages" total={0} />

      </main>
    </>
  );
}
