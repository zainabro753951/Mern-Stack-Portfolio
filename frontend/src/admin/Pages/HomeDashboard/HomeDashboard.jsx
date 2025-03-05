import React from "react";
import AdminHeader from "../../components/AdminHeader";
import DashboardLeft from "../../components/DashboardLeft";
const HomeDashboard = () => {
  return (
    <div className="h-screen w-full overflow-hidden flex md:p-2 gap-2 bg-gray-200">
      <DashboardLeft />
      <div className="lg:w-[75vw] md:w-[70vw] xs:w-[100%] h-full bg-[#F9FBFF] md:rounded-[50px]">
        <AdminHeader />
      </div>
    </div>
  );
};

export default HomeDashboard;
