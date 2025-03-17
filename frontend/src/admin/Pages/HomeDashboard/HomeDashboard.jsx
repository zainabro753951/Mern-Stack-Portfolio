import React from "react";
import AdminHeader from "../../components/AdminHeader";
import DashboardLeft from "../../components/DashboardLeft";
const HomeDashboard = () => {
  return (
    <>
      <div className="h-screen w-full overflow-hidden flex md:p-2 gap-2 bg-gray-200">
        <DashboardLeft />
        <div className="lg:w-[75vw] md:w-[70vw] xs:w-[100%] h-full bg-[#F9FBFF] md:rounded-[50px]">
          <AdminHeader />
          <div className="w-full grid lg:grid-cols-4 sm:grid-cols-4 gap-3 xs:grid-cols-1 px-[2vw] place-items-center">
            <div className="md:p-[3vw] xs:p-[4.5vw] bg-green-500 text-center font-lexend_deca md:rounded-[1vw] xs:rounded-[2vw] text-white">
              <span className="md:text-[3vw] xs:text-[5.5vw] font-medium">
                45
              </span>{" "}
              <br /> Project Added
            </div>
            <div className="md:p-[3vw] xs:p-[4.5vw] bg-red-500 text-center font-lexend_deca md:rounded-[1vw] xs:rounded-[2vw] text-white">
              <span className="md:text-[3vw] xs:text-[5.5vw] font-medium">
                2
              </span>{" "}
              <br /> Project Deleted
            </div>
            <div className="md:p-[3vw] xs:p-[4.5vw] bg-blue-500 text-center font-lexend_deca md:rounded-[1vw] xs:rounded-[2vw] text-white">
              <span className="md:text-[3vw] xs:text-[5.5vw] font-medium">
                8
              </span>{" "}
              <br /> Blogs Added
            </div>
            <div className="md:p-[3vw] xs:p-[4.5vw] bg-yellow-300 text-center font-lexend_deca md:rounded-[1vw] xs:rounded-[2vw] text-white">
              <span className="md:text-[3vw] xs:text-[5.5vw] font-medium">
                0
              </span>{" "}
              <br /> Blogs Deleted
            </div>
          </div>
          <div className="mt-3"></div>
        </div>
      </div>
    </>
  );
};

export default HomeDashboard;
