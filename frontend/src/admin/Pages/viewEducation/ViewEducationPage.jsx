import React, { useEffect, useState } from "react";
import DashboardLeft from "../../components/DashboardLeft";
import AdminHeader from "../../components/AdminHeader";
import GetEducation from "../../../Context/GetEducation";
import HireMeBtn from "../../../components/HireMeBtn";
import { Link } from "react-router-dom";

const ViewEducationPage = () => {
  const { getEducation, setGetEducation } = GetEducation();
  return (
    <div className="h-screen w-full overflow-hidden flex p-2 gap-2 bg-gray-200">
      <DashboardLeft />
      <div
        id="dashboardRight"
        className="w-[75%] h-full bg-[#F9FBFF] rounded-[50px] overflow-auto"
      >
        <AdminHeader />
        <div className="px-5">
          <h1 className="text-3xl font-semibold font-lexend_deca pb-3">
            View Education
          </h1>
          <p className="text-lg font-jost text-gray-500">
            Your educational journey is a key part of who you are and where
            you're headed. Here, you can view the milestones of your academic
            achievements, showcasing the degrees, institutions, and experiences
            that have shaped your knowledge and skills. Whether it’s your first
            degree or the latest qualification, each step is a building block
            towards your future success. Take a moment to reflect on the hard
            work, dedication, and passion that have fueled your learning path.
          </p>
        </div>
        <div className="py-10 px-5">
          <h2 className="text-2xl font-semibold font-lexend_deca">Education</h2>
          <div className="flex flex-col gap-10 ">
            {getEducation
              ? getEducation.map((items, idx) => {
                  let startDate = new Date(
                    items.startDate
                  ).toLocaleDateString();
                  let endDate = new Date(items.endDate).toLocaleDateString();
                  return (
                    <div
                      key={idx}
                      className="w-full flex flex-col gap-3 py-4 border-y border-gray-400 rounded-lg"
                    >
                      <div className="flex items-center gap-3 w-full">
                        <div className="flex items-center gap-4 border-y border-gray-200 rounded-2xl p-2 w-full">
                          <div className="flex w-full flex-col font-jost">
                            <h4 className="font-semibold">
                              Degree/Qualification
                            </h4>
                            <p className="w-full py-2 bg-transparent border-none">
                              {items.degree}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center gap-4 border-y border-gray-200 rounded-2xl p-2 w-full">
                          <div className="flex w-full flex-col font-jost">
                            <h4 className="font-semibold">Field of Study</h4>
                            <p className="w-full py-2 bg-transparent border-none">
                              {items.fieldOfStudy}
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-3 w-full">
                        <div className="flex items-center gap-4 border-y border-gray-200 rounded-2xl p-2 w-full">
                          <div className="flex w-full flex-col font-jost">
                            <h4 className="font-semibold">Institute name</h4>
                            <p className="w-full py-2 bg-transparent border-none">
                              {items.instituteName}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center gap-4 border-y border-gray-200 rounded-2xl p-2 w-full">
                          <div className="flex w-full flex-col font-jost">
                            <h4 className="font-semibold">Location</h4>
                            <p className="w-full py-2 bg-transparent border-none">
                              {items.location}
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-3 w-full">
                        <div className="flex items-center gap-4 border-y border-gray-200 rounded-2xl p-2 w-full">
                          <div className="flex w-full flex-col font-jost">
                            <h4 className="font-semibold">Start Date</h4>
                            <p className="w-full py-2 bg-transparent border-none">
                              {startDate}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center gap-4 border-y border-gray-200 rounded-2xl p-2 w-full">
                          <div className="flex w-full flex-col font-jost">
                            <h4 className="font-semibold">End Date</h4>
                            <p className="w-full py-2 bg-transparent border-none">
                              {endDate}
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-3 w-full">
                        <div className="flex items-center gap-4 border-y border-gray-200 rounded-2xl p-2 w-full">
                          <div className="flex w-full flex-col font-jost">
                            <h4 className="font-semibold">Grade</h4>
                            <p className="w-full py-2 bg-transparent border-none">
                              {items.grade}
                            </p>
                          </div>
                        </div>
                        {items.certificate !== "" ? (
                          <div className="flex items-center gap-4 border-y border-gray-200 rounded-2xl p-2 w-full">
                            <div className="flex w-full flex-col font-jost">
                              <h4 className="font-semibold">Certificate</h4>
                              <p className="w-full py-2 bg-transparent border-none">
                                {items.certificate}
                              </p>
                            </div>
                          </div>
                        ) : (
                          ""
                        )}
                      </div>
                      <div className="flex items-center gap-4 border-y border-gray-200 rounded-2xl p-2 w-full">
                        <div className="flex w-full flex-col font-jost">
                          <h4 className="font-semibold">Education Status</h4>
                          <p className="w-full py-2 bg-transparent border-none">
                            {items.eduStatus}
                          </p>
                        </div>
                      </div>
                      <Link
                        to={`/admin/editEducation/${items._id}`}
                        className="mt-4 mr-auto px-2"
                      >
                        <HireMeBtn text={"Edit Education"} />
                      </Link>
                    </div>
                  );
                })
              : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewEducationPage;
