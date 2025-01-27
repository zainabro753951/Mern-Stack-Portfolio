import React from "react";
import AdminHeader from "../../components/AdminHeader";
import DashboardLeft from "../../components/DashboardLeft";
const HomeDashboard = () => {
  return (
    <div className="h-screen w-full overflow-hidden flex p-2 gap-2 bg-gray-200">
      <DashboardLeft />
      <div className="w-[75%] h-full bg-[#F9FBFF] rounded-[50px]">
        <AdminHeader />
      </div>
    </div>
  );
};

export default HomeDashboard;
