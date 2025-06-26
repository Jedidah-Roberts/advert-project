import { useState } from "react";
import K from "../../../constants";
import { Link, NavLink } from "react-router";
import { ChevronDown, Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  return (
    <header className="bg-white/90 backdrop-blur-md shadow-md fixed top-0 left-0 w-full z-50 border-b border-gray-200 font-sans">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
       
        <Link
          to="/"
          className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-purple-700 tracking-wide"
        >
          CodeFeast
        </Link>

       
        <nav className="hidden md:flex items-center space-x-8">
          {K.USERLINKS.map(({ text, path, children, dropdown }) => (
            <div key={text} className="relative group">
              <div className="flex items-center gap-1 text-base font-medium text-gray-700 hover:text-purple-700 transition cursor-pointer">
                <NavLink
                  to={path}
                  className={({ isActive }) =>
                    `transition duration-200 border-b-2 border-transparent hover:border-purple-500 ${
                      isActive
                        ? "text-purple-700 font-bold border-purple-500"
                        : ""
                    }`
                  }
                  end
                >
                  {text}
                </NavLink>
                {dropdown && (
                  <ChevronDown className="w-4 h-4 group-hover:rotate-180 transition-transform duration-300" />
                )}
              </div>

              {dropdown && children && (
                <div className="absolute left-0 mt-3 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 pointer-events-none group-hover:pointer-events-auto transition-all duration-300 ease-in-out bg-white shadow-xl rounded-md border min-w-[180px] z-50">
                  {children.map((child, index) => (
                    <Link
                      key={index}
                      to={child.path}
                      className="block px-5 py-2 text-sm text-gray-700 hover:bg-purple-100 hover:text-purple-700 transition"
                    >
                      {child.text}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        
        <div className="hidden md:flex items-center gap-3">
          <Link to="/sign-up">
            <button className="border border-amber-600 text-amber-600 hover:bg-amber-100 px-5 py-2 rounded-lg font-semibold transition-all duration-300">
              Sign Up
            </button>
          </Link>
          <Link to="/login">
            <button className="bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white px-5 py-2 rounded-lg font-semibold shadow-md transition-all duration-300">
              Login
            </button>
          </Link>
          <Link
            to="/dashboard"
            className="text-sm text-gray-500 underline hover:text-orange-600 transition duration-200"
          >
            Vendor Login
          </Link>
        </div>

        
        <button
          className="md:hidden text-gray-700"
          onClick={() => setIsMobileOpen(!isMobileOpen)}
        >
          {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

     
      {isMobileOpen && (
        <div className="md:hidden px-6 pb-6 pt-2 space-y-4 bg-white shadow-sm">
          {K.USERLINKS.map(({ text, path, dropdown, children }) => (
            <div key={text}>
              <NavLink
                to={path}
                className={({ isActive }) =>
                  `block py-2 text-base font-medium border-b border-gray-200 ${
                    isActive ? "text-orange-600 font-bold" : "text-gray-700"
                  }`
                }
                end
              >
                {text}
              </NavLink>
              {dropdown && children && (
                <div className="ml-3 mt-1 space-y-1">
                  {children.map((child, idx) => (
                    <Link
                      key={idx}
                      to={child.path}
                      className="block text-sm text-gray-600 hover:text-orange-500 transition"
                    >
                      • {child.text}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}

          <div className="pt-4 space-y-2 border-t border-gray-200">
            <Link to="/sign-up" className="block text-orange-600 font-semibold">
              Sign Up
            </Link>
            <Link to="/login" className="block text-orange-600 font-semibold">
              Login
            </Link>
            <Link
              to="/dashboard"
              className="block text-sm text-gray-500 underline hover:text-orange-600"
            >
              Vendor Login
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
