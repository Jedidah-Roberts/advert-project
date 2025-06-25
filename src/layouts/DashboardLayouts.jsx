import { Outlet, useNavigate } from "react-router";
import Sidebar from "../pages/vendor/components/Sidebar";
import { useEffect } from "react";

const DashboardLayout = () => {
  const navigate = useNavigate();

  // useEffect(() => {
  //   //retrieve from local storage
  //   const token = localStorage.getItem("accessToken");

  //   //if there's no token,take them to login
  //   if (!token) {
  //     navigate("/login");
  //   }
  // }, []);
  return (
    <div className="flex">
      <Sidebar />
      <main className="ml-72 w-full p-6 min-h-screen bg-gray-100">
        <Outlet />
      </main>
    </div>
  );
};

export default DashboardLayout;
