import {Outlet} from "react-router"
import {SideBarDashboard} from "./Sidebar"

export const DashboardLayot = () => {
    return (
      <>
        <div className="flex h-screen overflow-hidden">
          {/* Sidebar */}
          <SideBarDashboard />
  
          {/* Main Content */}
          <main className="flex-1 p-6 overflow-auto">
            <Outlet />
          </main>
        </div>
      </>
    );
  };