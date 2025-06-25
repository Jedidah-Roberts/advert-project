import AdminSidebar from "../pages/admin/components/AdminSidebar";
import { Outlet } from "react-router";

const AdminLayouts = ({ children }) => {
  return (
    <div className="flex">
      <AdminSidebar />
      <main className="ml-72 w-full p-6 min-h-screen bg-gray-100">
        <Outlet />
      </main>
    </div>
  );
};

export default AdminLayouts;
