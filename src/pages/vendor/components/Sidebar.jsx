import K from "../../../constants";
import { Link, NavLink, useNavigate } from "react-router";
import {
  LogOut,
  UserCircle2,
  Settings2,
  X,
} from "lucide-react";

const Sidebar = ({ isOpen, setIsOpen }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    navigate("/login");
  };

  return (
    <>
      
      <div
        className={`fixed inset-0 bg-black/40 z-40 transition-opacity duration-300 ${
          isOpen ? "block md:hidden" : "hidden"
        }`}
        onClick={() => setIsOpen(false)}
      />

     
      <div
        className={`fixed top-0 left-0 z-50 h-full w-72 bg-white border-r border-orange-200 shadow-md flex flex-col justify-between p-6 font-sans transition-transform duration-300
          ${isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}
        `}
      >
        
        <div className="flex items-center justify-between mb-10">
          <Link to="/">
            <span className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-purple-700 tracking-wide">
              CodeFeast
            </span>
          </Link>
          
          <button
            className="md:hidden text-gray-600"
            onClick={() => setIsOpen(false)}
          >
            <X size={22} />
          </button>
        </div>

       
        <nav className="flex flex-col gap-3">
          {K.NAVLINKS.map(({ icon, text, path }) => (
            <NavLink
              key={text}
              to={path}
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-3 rounded-lg text-base font-medium transition-all duration-200 ${
                  isActive
                    ? "bg-gradient-to-r from-orange-500 to-purple-700 text-white shadow-md"
                    : "text-gray-600 hover:bg-orange-100 hover:text-orange-600 hover:shadow"
                }`
              }
              end
              onClick={() => setIsOpen(false)} // close on mobile
            >
              <span className="text-xl text-gray-500">{icon}</span>
              <span>{text}</span>
            </NavLink>
          ))}
        </nav>

       
        <div className="mt-8 border-t border-orange-100 pt-6 space-y-3">
          <NavLink
            to="/vendor/profile"
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-2 rounded-lg text-base font-medium transition-all duration-200 ${
                isActive
                  ? "bg-orange-500 text-white shadow-md"
                  : "text-gray-600 hover:bg-orange-100 hover:text-orange-600 hover:shadow"
              }`
            }
            onClick={() => setIsOpen(false)}
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
                  : "text-gray-600 hover:bg-orange-100 hover:text-orange-600 hover:shadow"
              }`
            }
            onClick={() => setIsOpen(false)}
          >
            <Settings2 size={20} className="text-gray-500" />
            <span>Settings</span>
          </NavLink>

          <button
            onClick={handleLogout}
            className="flex items-center gap-2 px-4 py-2 rounded-lg text-red-500 text-base hover:bg-red-100 hover:shadow transition-all duration-200"
          >
            <LogOut size={18} className="text-red-500" />
            <span>Logout</span>
          </button>
        </div>

       
        <div className="mt-6 text-xs text-center text-gray-400">
          &copy; 2025 CodeFeast
        </div>
      </div>
    </>
  );
};

export default Sidebar;
