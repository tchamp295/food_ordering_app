import Navbar from "@/components/admin/Navbar";
import Sidebar from "@/components/admin/Sidebar";

const AdminLayout = ({children}) => {
  return (
    <div className="min-h-screen flex bg-gray-100">
      <Sidebar />
      <div className="flex-1">
        <Navbar />
        <main className="p-6">{children}</main>
      </div>
    </div>
  );
};

export default AdminLayout;
