// Menu.jsx
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Logo from "/media/Images/Finexa.png";

const menuItems = [
  { id: 2, label: "Orders", path: "/app/orders" },
  { id: 3, label: "Holdings", path: "/app/holdings" },
  { id: 4, label: "Positions", path: "/app/positions" },
  { id: 5, label: "Funds", path: "/app/funds" },
];

const Menu = () => {
  const [selectedMenu, setSelectedMenu] = useState(0);
  const [isProfileDropDownOpen, setIsProfileDropDownOpen] = useState(false);
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
  };

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  return (
    <div className="flex items-center gap-10">
      {/* Logo */}
      <Link to="/" className="flex items-center gap-2">
        <img src={Logo} alt="Logo" className="w-28 object-contain" />
      </Link>

      {/* Menus */}
      <ul className="flex space-x-12 ">
        {menuItems.map((item) => (
          <li key={item.id}>
            <Link
              to={item.path}
              onClick={() => setSelectedMenu(item.id)}
              className={`relative text-md font-semibold transition duration-200 pb-1 ${
                selectedMenu === item.id
                  ? "text-fuchsia-600 after:absolute after:left-0 after:bottom-0 after:w-full after:h-[2px] after:bg-fuchsia-800"
                  : "text-gray-700 hover:text-fuchsia-500"
              }`}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>

      {/* Profile */}
      <div className="relative ml-10">
        <button
          onClick={() => setIsProfileDropDownOpen((prev) => !prev)}
          className="flex items-center gap-2 focus:outline-none"
        >
          <div className="bg-gradient-to-br from-pink-600 to-fuchsia-500 text-white text-sm font-bold rounded-full w-9 h-9 flex items-center justify-center shadow-sm">
            {user ? user.username.charAt(0).toUpperCase() : "FU"}
          </div>

          <span className="text-gray-800 font-semibold text-sm flex items-center gap-1">
            {user ? user.username : "Guest"}
            <ChevronDown
              size={16}
              className={`transition-transform ${
                isProfileDropDownOpen ? "rotate-180" : "rotate-0"
              }`}
            />
          </span>
        </button>

        {/* Dropdown */}
        {isProfileDropDownOpen && (
          <div className="absolute left-0 mt-3 w-44 bg-white shadow-lg border rounded-lg overflow-hidden animate-fade-in">
            <ul className="text-sm text-gray-700">
              <li
                className="px-4 py-2 hover:bg-red-50 text-red-600 cursor-pointer"
                onClick={handleLogout}
              >
                Logout
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Menu;
