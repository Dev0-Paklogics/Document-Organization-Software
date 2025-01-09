import {Outlet} from "react-router"
import {SideBarDashboard} from "./Sidebar"
import {DashboardNavbar} from "./Navbar";

export const DashboardLayot = () => {
    return (
      <>
        <div className="flex h-screen overflow-hidden">
          {/* Sidebar */}
          <SideBarDashboard />
  
          {/* Main Content */}
          <main className="flex-1  overflow-auto">
          <DashboardNavbar/>
            <Outlet />
          </main>
        </div>
      </>
    );
  };