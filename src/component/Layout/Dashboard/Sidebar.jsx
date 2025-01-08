import { Link } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";
import DashbordIcon1 from "assets/icons/dashboard-icon1.png"
import DocManagment from "assets/icons/Layer_1.png"
import SumariesIcon from "assets/icons/Summarie-Icon.png"
import UserProfile from "assets/icons/User-profile-Icon.png"
import DocOverview from "assets/icons/Document-Overview-Icon.png"
import Setting from "assets/icons/Settings-Icon.png"
import Logout from "assets/icons/Logout-Icon.png"
import { FaWallet, FaShoppingCart, FaCrown } from "react-icons/fa";

const sidebarList = [
  {
    name: "Dashboard",
    icon: DashbordIcon1,
    link: "/",
  },
  {
    name: "Document Management",
    icon: DocManagment,
    link: "/wdkwdk",
  },
  {
    name: "Summaries",
    icon: SumariesIcon,
    link: "/amsodk",
  },
  {
    name: "User Profile",
    icon: UserProfile,
    link: "/userProfile",
  },
  {
    name: "Document Overview",
    icon: DocOverview,
    link: "/docoverviww",
  },
  {
    name: "Settings",
    icon: Setting,
    link: "/setting",
  },
  {
    name: "Logout",
    icon: Logout,
    link: "/Logout",
  },
];

export const SideBarDashboard = () => {
    return (
      <aside className="w-64 bg-blue-600 text-white h-full flex flex-col overflow-hidden">
        <div className="p-6 text-lg font-bold border-b border-blue-500">
          Logo Here
        </div>
  
        <nav className="flex-1 overflow-auto">
          <ul className="space-y-2">
            {sidebarList.map((item, index) => (
              <li key={index}>
                <Link
                  to={item.link}
                  className="flex items-center py-3 px-6 hover:bg-blue-700 cursor-pointer"
                >
                  <span className="text-xl mr-3">{item.icon}</span>
                  <span>{item.name}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
  
        <div className="py-4 px-6 border-t border-blue-500">
          <button className="w-full text-left hover:bg-blue-700 py-2 rounded">
            Help Center
          </button>
        </div>
      </aside>
    );
  };
  
