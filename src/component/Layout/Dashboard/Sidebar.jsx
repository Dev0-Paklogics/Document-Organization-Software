import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";
import { RxDashboard } from "react-icons/rx";
import { IoIosDocument } from "react-icons/io";
import { MdSummarize } from "react-icons/md";
import { MdEditDocument } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { HiDocumentSearch } from "react-icons/hi";
import { IoSettingsSharp } from "react-icons/io5";
import { TbLogout } from "react-icons/tb";
import { IoIosHelpCircle } from "react-icons/io";
import { FaWallet, FaShoppingCart, FaCrown } from "react-icons/fa";

const sidebarList = [
  {
    name: "Dashboard",
    icon: <RxDashboard />,
    link: "/",
  },
  {
    name: "Document Management",
    icon: <IoIosDocument />,
    link: "/document-managment",
  },
  {
    name: "Summaries",
    icon: <MdEditDocument />,
    link: "/document-summeries",
  },
  {
    name: "User Profile",
    icon: <FaUser />,
    link: "/profile-update",
  },
  {
    name: "Document Overview",
    icon: <HiDocumentSearch />,
    link: "/document-overview",
  },
  {
    name: "Settings",
    icon: <IoSettingsSharp />,
    link: "/setting",
  },
  {
    name: "Logout",
    icon: <TbLogout />,
    link: "/logout",
  },
  {
    name: "Help Center",
    icon: <IoIosHelpCircle />,
    link: "/help-center",
  },
];

export const SideBarDashboard = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(true); // State to toggle sidebar

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex">
      {/* Hamburger Icon */}
      <button
        className="lg:hidden p-4 text-white"
        onClick={handleToggle}
      >
        <span className="text-3xl text-gray-600">&#9776;</span> 
      </button>

      {/* Sidebar */}
      <aside
        className={`w-80 custom-scrollbar overflow-y-auto text-white h-full flex flex-col border-r-2 transition-all ${
          isOpen ? "block" : "hidden"
        } lg:block`} 
      >
        <div className="p-6 text-[#378AF2] text-[36px] font-bold">Logo Here</div>

        <nav className="flex-1">
          <ul className="space-y-2">
            {sidebarList.map((item, index) => {
              const isActive = location.pathname === item.link;

              return (
                <li key={index}>
                  <Link
                    to={item.link}
                    className={`flex items-center py-3 px-6 rounded-r-full cursor-pointer ${
                      isActive
                        ? "bg-[#378AF2] text-white h-[53px] w-72"
                        : "text-gray-400"
                    }`}
                  >
                    <span className="mr-4">
                      {React.cloneElement(item.icon, {
                        color: isActive ? "white" : "#3A8EF6",
                        size: 20,
                      })}
                    </span>
                    <span className="text-[18px]">{item.name}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </aside>
    </div>
  );
};
