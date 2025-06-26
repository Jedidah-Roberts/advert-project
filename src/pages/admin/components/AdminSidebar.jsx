import K from "../../../constants";
import { NavLink } from "react-router";
import { LogOut, UserCircle2, Settings2 } from "lucide-react";

const AdminSidebar = () => {
  const handleLogout = () => {
    const confirm = window.confirm("Are you sure you want to logout?");
    if (confirm) {
      localStorage.removeItem("accessToken");
      window.location.href = "/login"; // Or use navigate()
    }
  };

  return (
    <div className="bg-white shadow-md w-72 h-screen fixed left-0 top-0 p-6 flex flex-col justify-between z-50 border-r border-orange-200 font-sans text-gray-800">
      {/* Logo */}
      <div className="flex items-center justify-center mb-10">
        <span className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-pink-500 tracking-wide">
          CodeFeast
        </span>
      </div>

      {/* Main Nav */}
      <nav className="flex flex-col gap-4">
        {K.ADMINLINKS.map(({ icon, text, path }) => (
          <NavLink
            key={text}
            to={path}
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-3 rounded-lg text-base font-medium transition-all duration-200 ${
                isActive
                  ? "bg-orange-500 text-white shadow-md"
                  : "text-gray-600 hover:bg-orange-100 hover:text-orange-600"
              }`
            }
            end
          >
            <span className="text-xl text-gray-500">{icon}</span>
            <span>{text}</span>
          </NavLink>
        ))}
      </nav>

      {/* Profile + Settings */}
      <div className="mt-8 border-t border-orange-100 pt-6 space-y-4">
        <NavLink
          to="/vendor/profile"
          className={({ isActive }) =>
            `flex items-center gap-3 px-4 py-2 rounded-lg text-base font-medium transition-all duration-200 ${
              isActive
                ? "bg-orange-500 text-white shadow-md"
                : "text-gray-600 hover:bg-orange-100 hover:text-orange-600"
            }`
          }
        >
          <UserCircle2 size={20} className="text-gray-500" />
          <span>Profile</span>
        </NavLink>

        <NavLink
          to="/vendor/settings"
          className={({ isActive }) =>
            `flex items-center gap-3 px-4 py-2 rounded-lg text-base font-medium transition-all duration-200 ${
              isActive
                ? "bg-orange-500 text-white shadow-md"
                : "text-gray-600 hover:bg-orange-100 hover:text-orange-600"
            }`
          }
        >
          <Settings2 size={20} className="text-gray-500" />
          <span>Settings</span>
        </NavLink>

        <button
          onClick={handleLogout}
          className="flex items-center gap-2 px-4 py-2 rounded-lg text-red-500 text-base hover:bg-red-100 transition-all"
        >
          <LogOut size={18} />
          <span>Logout</span>
        </button>
      </div>

      {/* Footer */}
      <div className="mt-6 text-xs text-center text-gray-400">
        &copy; 2025 G.arnish
      </div>
    </div>
  );
};

export default AdminSidebar;
