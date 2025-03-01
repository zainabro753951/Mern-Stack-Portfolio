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
        className="lg:w-[75vw] md:w-[70vw] xs:w-[100%] h-full bg-[#F9FBFF] rounded-[50px] overflow-auto"
      >
        <AdminHeader />
        <div className="px-5">
          <h1 className="lg:text-[1.8vw] md:text-[2.8vw] xs:text-[4.5vw] font-semibold  font-lexend_deca pb-3">
            View Education
          </h1>
          <p className="lg:text-[1.1vw] md:text-[2.1vw] sm:text-[2.7vw] xs:text-[3vw] font-jost text-gray-500">
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
            <div>
              <div>
                <div class="relative overflow-x-auto text-center">
                  <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                      <tr>
                        <th scope="col" class="px-6 py-3 whitespace-nowrap">
                          Degree/Qualification
                        </th>
                        <th scope="col" class="px-6 py-3 whitespace-nowrap">
                          Field of Study
                        </th>
                        <th scope="col" class="px-6 py-3 whitespace-nowrap">
                          Institute Name
                        </th>
                        <th scope="col" class="px-6 py-3 whitespace-nowrap">
                          Location
                        </th>
                        <th scope="col" class="px-6 py-3 whitespace-nowrap">
                          Start Date
                        </th>
                        <th scope="col" class="px-6 py-3 whitespace-nowrap">
                          End Date
                        </th>
                        <th scope="col" class="px-6 py-3 whitespace-nowrap">
                          Education Status
                        </th>
                        <th scope="col" class="px-6 py-3 whitespace-nowrap">
                          Grade/Percentage
                        </th>
                        <th scope="col" class="px-6 py-3 whitespace-nowrap">
                          Certification
                        </th>
                        <th className="px-6 py-3 whitespace-nowrap" scope="col">
                          Action
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {getEducation
                        ? getEducation.map((items, idx) => {
                            let startDate = new Date(
                              items.startDate
                            ).toLocaleDateString();
                            let endDate = new Date(
                              items.endDate
                            ).toLocaleDateString();
                            return (
                              <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
                                <th
                                  scope="row"
                                  class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                >
                                  {items.degree}
                                </th>

                                <td class="px-6 py-4 whitespace-nowrap">
                                  {items.fieldOfStudy}
                                </td>
                                <td class="px-6 py-4 whitespace-nowrap">
                                  {items.instituteName}
                                </td>
                                <td class="px-6 py-4 whitespace-nowrap">
                                  {items.location}
                                </td>
                                <td class="px-6 py-4 whitespace-nowrap">
                                  {startDate}
                                </td>
                                <td class="px-6 py-4 whitespace-nowrap">
                                  {endDate}
                                </td>
                                <td class="px-6 py-4 whitespace-nowrap">
                                  {items.eduStatus}
                                </td>
                                <td class="px-6 py-4 whitespace-nowrap">
                                  {items.grade}
                                </td>
                                <td class="px-6 py-4 whitespace-nowrap">
                                  {items.certification
                                    ? items.certification
                                    : "No certified"}
                                </td>
                                <td>
                                  <Link
                                    to={`/admin/editEducation/${items._id}`}
                                    type="button"
                                    class="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-[1.5vw] py-[0.5vw] me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                                  >
                                    Edit
                                  </Link>
                                  <Link
                                    to={`/admin/editEducation/${items._id}`}
                                    type="button"
                                    class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-[1.5vw] py-[0.5vw] me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
                                  >
                                    Delete
                                  </Link>
                                </td>
                              </tr>
                            );
                          })
                        : null}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewEducationPage;
