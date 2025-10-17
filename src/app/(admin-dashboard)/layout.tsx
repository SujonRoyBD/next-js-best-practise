import React from "react";
import Sidebar from "./dashbord/_components/sidebar";
import DashboardHeader from "./dashbord/_components/dashboard-header";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <DashboardHeader />
      <div className="w-full flex">
        <div>
          <Sidebar />
        </div>
        <main>{children}</main>
      </div>
    </div>
  );
};

export default DashboardLayout;