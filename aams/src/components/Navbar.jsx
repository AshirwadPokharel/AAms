import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const menuItems = [
  { name: "Home", path: "/" },
  { name: "AAMS", path: "/aams" },
  { name: "Features", path: "/features" },
  { name: "Demo", path: "/demo" },
  { name: "Pricing", path: "/pricing" },
  { name: "Download", path: "/download" },
  { name: "FAQ", path: "/faq" },
  { name: "Support", path: "/support" },
];

const Navbar = () => {
  const [showMenuDropdown, setShowMenuDropdown] = useState(false);
  const navigate = useNavigate();

  const handleHomeClick = () => {
    setShowMenuDropdown((prev) => !prev); // Toggle menu
  };

  const handleMenuItemClick = (path) => {
    navigate(path);
    setShowMenuDropdown(false); // Hide menu after clicking any item
  };

  return (
    <nav className="bg-blue-600 text-white px-6 py-4 shadow relative z-50">
      <div className="flex items-center gap-6">
        {/* Home button to toggle dropdown */}
        <button
          onClick={handleHomeClick}
          className="font-semibold hover:underline"
        >
          Home
        </button>

        {/* Show dropdown only when toggled ON */}
        {showMenuDropdown && (
          <ul className="absolute top-16 left-6 w-48 bg-white text-black rounded shadow-lg z-50">
            {menuItems.map((item) => (
              <li
                key={item.name}
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                onClick={() => handleMenuItemClick(item.path)}
              >
                {item.name}
              </li>
            ))}
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
