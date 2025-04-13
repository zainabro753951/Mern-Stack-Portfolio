import React, { useEffect, useState } from "react";
import DashboardLeft from "../../components/DashboardLeft";
import AdminHeader from "../../components/AdminHeader";
import GetEducation from "../../../Context/GetEducation";
import HireMeBtn from "../../../components/HireMeBtn";
import { Link } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import { PulseLoader } from "react-spinners";

const ViewEducationPage = () => {
  const { educationData, setEducationData, isLoading } = GetEducation();
  const backendUrl = import.meta.env.VITE_BACKEND_URL;
  // Creating Mutation of Deleting
  const mutation = useMutation((id) => {
    const response = axios.delete(
      `${backendUrl}/admin/delete_education/${id}`,
      {
        withCredentials: true,
      }
    );
    return response;
  });

  // Deleting Education data
  const handleDeleteEducationData = (id) => {
    mutation.mutate(id);
  };

  useEffect(() => {
    if (mutation.isError) {
      toast.error(mutation.error.response.data.message, {
        position: "top-right",
        autoClose: 5000,
        theme: "dark",
        style: { width: "100%" },
      });
    }
  }, [mutation.isError]);

  useEffect(() => {
    if (mutation.isSuccess) {
      setEducationData(mutation.data.data.remainingEducations);
      toast.success("Education Deleted Successfully!", {
        position: "top-right",
        autoClose: 5000,
        theme: "dark",
        style: { width: "130%" },
      });
    }
  }, [mutation.isSuccess]);

  return (
    <div className="h-screen w-full overflow-hidden flex md:p-2 gap-2 bg-gray-200">
      <DashboardLeft />
      <div
        id="dashboardRight"
        className="lg:w-[75vw] md:w-[70vw] xs:w-[100%] h-full bg-[#F9FBFF] md:rounded-[50px] overflow-auto"
      >
        <AdminHeader />
        <div className="px-5">
          <ToastContainer />
          <h1 className="lg:text-[1.8vw] md:text-[2.8vw] xs:text-[4.5vw] font-semibold  font-lexend_deca pb-3">
            View Education
          </h1>
          <p className="lg:text-[1.2vw] md:text-[2.2vw] xs:text-[3.4vw] font-jost text-gray-500">
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
          <h2 className="lg:text-[1.5vw] md:text-[2.5vw] xs:text-[3.5vw] font-semibold font-lexend_deca">
            Education
          </h2>
          <div className="flex flex-col gap-10">
            <div>
              <div>
                <div className="relative  overflow-x-auto">
                  {isLoading || mutation.isLoading ? (
                    <div className="w-full py-[3vw] flex items-center justify-center">
                      <PulseLoader color="#F4C430" size={16} />
                    </div>
                  ) : (
                    <table className="w-full lg:text-[1.2vw] md:text-[2.2vw] text-center xs:text-[3.4vw] rtl:text-right text-gray-500 dark:text-gray-400">
                      <thead className="text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                          <th
                            scope="col"
                            className="px-[2vw] xs:py-[2.8vw] md:py-[0.3vw] lg:text-[1.2vw] md:text-[2.2vw] xs:text-[3.2vw] whitespace-nowrap"
                          >
                            Degree/Qualification
                          </th>
                          <th
                            scope="col"
                            className="px-[2vw] xs:py-[2.8vw] md:py-[0.3vw] lg:text-[1.2vw] md:text-[2.2vw] xs:text-[3.2vw] whitespace-nowrap"
                          >
                            Field of Study
                          </th>
                          <th
                            scope="col"
                            className="px-[2vw] xs:py-[2.8vw] md:py-[0.3vw] lg:text-[1.2vw] md:text-[2.2vw] xs:text-[3.2vw] whitespace-nowrap"
                          >
                            Institute Name
                          </th>
                          <th
                            scope="col"
                            className="px-[2vw] xs:py-[2.8vw] md:py-[0.3vw] lg:text-[1.2vw] md:text-[2.2vw] xs:text-[3.2vw] whitespace-nowrap"
                          >
                            Location
                          </th>
                          <th
                            scope="col"
                            className="px-[2vw] xs:py-[2.8vw] md:py-[0.3vw] lg:text-[1.2vw] md:text-[2.2vw] xs:text-[3.2vw] whitespace-nowrap"
                          >
                            Start Date
                          </th>
                          <th
                            scope="col"
                            className="px-[2vw] xs:py-[2.8vw] md:py-[0.3vw] lg:text-[1.2vw] md:text-[2.2vw] xs:text-[3.2vw] whitespace-nowrap"
                          >
                            End Date
                          </th>
                          <th
                            scope="col"
                            className="px-[2vw] xs:py-[2.8vw] md:py-[0.3vw] lg:text-[1.2vw] md:text-[2.2vw] xs:text-[3.2vw] whitespace-nowrap"
                          >
                            Education Status
                          </th>
                          <th
                            scope="col"
                            className="px-[2vw] xs:py-[2.8vw] md:py-[0.3vw] lg:text-[1.2vw] md:text-[2.2vw] xs:text-[3.2vw] whitespace-nowrap"
                          >
                            Grade/Percentage
                          </th>
                          <th
                            scope="col"
                            className="px-[2vw] xs:py-[2.8vw] md:py-[0.3vw] lg:text-[1.2vw] md:text-[2.2vw] xs:text-[3.2vw] whitespace-nowrap"
                          >
                            Certification
                          </th>
                          <th
                            scope="col"
                            className="px-[2vw] xs:py-[2.8vw] md:py-[0.3vw] lg:text-[1.2vw] md:text-[2.2vw] xs:text-[3.2vw] whitespace-nowrap"
                          >
                            Created At
                          </th>
                          <th
                            scope="col"
                            className="px-[2vw] xs:py-[2.8vw] md:py-[0.3vw] lg:text-[1.2vw] md:text-[2.2vw] xs:text-[3.2vw] whitespace-nowrap"
                          >
                            Updated At
                          </th>
                          <th
                            className="px-[2vw] xs:py-[2.8vw] md:py-[0.3vw] whitespace-nowrap"
                            scope="col"
                          >
                            Action
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {educationData
                          ? educationData.map((items, idx) => {
                              let startDate = new Date(
                                items.startDate
                              ).toLocaleDateString();
                              let endDate = new Date(
                                items.endDate
                              ).toLocaleDateString();
                              let createdAt = new Date(
                                items.createdAt
                              ).toLocaleString();
                              let updatedAt = new Date(
                                items.updatedAt
                              ).toLocaleString();
                              return (
                                <tr
                                  key={idx}
                                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200"
                                >
                                  <th
                                    scope="row"
                                    className="px-[2vw] xs:py-[2.8vw] md:py-[0.3vw] lg:text-[1.2vw] font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                  >
                                    {items.degree}
                                  </th>

                                  <td className="px-[2vw] xs:py-[2.8vw] md:py-[0.3vw] lg:text-[1.2vw] whitespace-nowrap">
                                    {items.fieldOfStudy}
                                  </td>
                                  <td className="px-[2vw] xs:py-[2.8vw] md:py-[0.3vw] lg:text-[1.2vw] whitespace-nowrap">
                                    {items.instituteName}
                                  </td>
                                  <td className="px-[2vw] xs:py-[2.8vw] md:py-[0.3vw] lg:text-[1.2vw] whitespace-nowrap">
                                    {items.location}
                                  </td>
                                  <td className="px-[2vw] xs:py-[2.8vw] md:py-[0.3vw] lg:text-[1.2vw] whitespace-nowrap">
                                    {startDate}
                                  </td>
                                  <td className="px-[2vw] xs:py-[2.8vw] md:py-[0.3vw] lg:text-[1.2vw] whitespace-nowrap">
                                    {endDate}
                                  </td>
                                  <td className="px-[2vw] xs:py-[2.8vw] md:py-[0.3vw] lg:text-[1.2vw] whitespace-nowrap">
                                    {items.eduStatus}
                                  </td>
                                  <td className="px-[2vw] xs:py-[2.8vw] md:py-[0.3vw] lg:text-[1.2vw] whitespace-nowrap">
                                    {items.grade}
                                  </td>
                                  <td className="px-[2vw] xs:py-[2.8vw] md:py-[0.3vw] lg:text-[1.2vw] whitespace-nowrap">
                                    {items.certification
                                      ? items.certification
                                      : "No certified"}
                                  </td>
                                  <td className="px-[2vw] xs:py-[2.8vw] md:py-[0.3vw] lg:text-[1.2vw] whitespace-nowrap">
                                    {createdAt}
                                  </td>
                                  <td className="px-[2vw] xs:py-[2.8vw] md:py-[0.3vw] lg:text-[1.2vw] whitespace-nowrap">
                                    {updatedAt}
                                  </td>
                                  <td className="px-[2vw] xs:py-[2.8vw] md:py-[0.3vw] lg:text-[1.2vw] whitespace-nowrap flex items-center gap-3 justify-center">
                                    <Link
                                      to={`/admin/edit-education/${items._id}`}
                                      type="button"
                                      className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-[0.4vw] lg:text-[1.2vw] md:text-[2.2vw] xs:text-[3.4vw] lg:px-[1.5vw] md:px-[2.5vw] xs:px-[3.9vw] py-[0.5vw] me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                                    >
                                      Edit
                                    </Link>
                                    <button
                                      onClick={() =>
                                        handleDeleteEducationData(items._id)
                                      }
                                      className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-[0.4vw] lg:text-[1.2vw] md:text-[2.2vw] xs:text-[3.4vw] lg:px-[1.5vw] md:px-[2.5vw] xs:px-[3.9vw] py-[0.5vw] me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
                                    >
                                      Delete
                                    </button>
                                  </td>
                                </tr>
                              );
                            })
                          : null}
                      </tbody>
                    </table>
                  )}
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
