import React, { useState } from "react";
import { Link } from "react-router-dom";
import AdminHeader from "../../components/AdminHeader";
import DashboardLeft from "../../components/DashboardLeft";
import { useTestimonial } from "../../../Context/GetTestimonial";
import GetAllUsers from "../../../Context/GetAllUsers";
import GetProjectCounts from "../../../Context/GetProjectCounts";
import getBlogCounts from "../../../Context/getBlogCounts";

const HomeDashboard = () => {
  const backendUrl = import.meta.env.VITE_BACKEND_URL;

  const { testimonialData, setTestimonialData } = useTestimonial();
  const { users } = GetAllUsers();
  const { deletedProjects, availableProjects } = GetProjectCounts();
  const { deletedBlogs, availableBlogs } = getBlogCounts();

  return (
    <>
      <div className="h-screen w-full overflow-hidden flex md:p-2 gap-2 bg-gray-200">
        <DashboardLeft />
        <div className="lg:w-[75vw] md:w-[70vw] overflow-auto xs:w-[100%] h-full bg-[#F9FBFF] md:rounded-[50px]">
          <AdminHeader />
          <div className="w-full grid lg:grid-cols-4 sm:grid-cols-4 gap-3 xs:grid-cols-1 px-[2vw] place-items-center">
            <div className="md:p-[3vw] xs:p-[4.5vw] bg-green-500 md:text-[1.5vw] xs:text-[2.5vw] lg:text-[1.2vw] text-center font-lexend_deca md:rounded-[1vw] xs:rounded-[2vw] text-white">
              <span className="md:text-[3vw] xs:text-[5.5vw] font-medium">
                {availableProjects ? availableProjects : 0}
              </span>{" "}
              <br /> Project Added
            </div>
            <div className="md:p-[3vw] xs:p-[4.5vw] bg-red-500 md:text-[1.5vw] xs:text-[2.5vw] lg:text-[1.2vw] text-center font-lexend_deca md:rounded-[1vw] xs:rounded-[2vw] text-white">
              <span className="md:text-[3vw] xs:text-[5.5vw] font-medium">
                {deletedProjects ? deletedProjects : 0}
              </span>{" "}
              <br /> Project Deleted
            </div>
            <div className="md:p-[3vw] xs:p-[4.5vw] bg-blue-500 md:text-[1.5vw] xs:text-[2.5vw] lg:text-[1.2vw] text-center font-lexend_deca md:rounded-[1vw] xs:rounded-[2vw] text-white">
              <span className="md:text-[3vw] xs:text-[5.5vw] font-medium">
                {availableBlogs ? availableBlogs : 0}
              </span>{" "}
              <br /> Blogs Added
            </div>
            <div className="md:p-[3vw] xs:p-[4.5vw] bg-yellow-500 md:text-[1.5vw] xs:text-[2.5vw] lg:text-[1.2vw] text-center font-lexend_deca md:rounded-[1vw] xs:rounded-[2vw] text-white">
              <span className="md:text-[3vw] xs:text-[5.5vw] font-medium">
                {deletedBlogs ? deletedBlogs : 0}
              </span>{" "}
              <br /> Blogs Deleted
            </div>
          </div>
          <div className="mt-3 grid grid-cols-2 md:gap-[2vw] xs:gap-[3vw]">
            <div className="w-full">
              <div className="w-full relative overflow-x-auto">
                <table className="w-full lg:text-[1.2vw] md:text-[2.2vw] xs:text-[3.4vw] text-left rtl:text-right ">
                  <thead className="text-xs  uppercase bg-white border border-gray-200">
                    <tr>
                      <th
                        scope="col"
                        className="px-[2vw] py-[2.8vw] lg:text-[1.2vw] md:text-[2.2vw] whitespace-nowrap"
                      >
                        Profile Image
                      </th>
                      <th
                        scope="col"
                        className="px-[2vw] py-[2.8vw] lg:text-[1.2vw] md:text-[2.2vw] whitespace-nowrap"
                      >
                        First Name
                      </th>
                      <th
                        scope="col"
                        className="px-[2vw] py-[2.8vw] lg:text-[1.2vw] md:text-[2.2vw] whitespace-nowrap"
                      >
                        Last Name
                      </th>
                      <th
                        scope="col"
                        className="px-[2vw] py-[2.8vw] lg:text-[1.2vw] md:text-[2.2vw] whitespace-nowrap"
                      >
                        Email
                      </th>
                      <th
                        scope="col"
                        className="px-[2vw] py-[2.8vw] lg:text-[1.2vw] md:text-[2.2vw]  max-w-[15vw]"
                      >
                        isVerified
                      </th>
                      <th
                        scope="col"
                        className="px-[2vw] py-[2.8vw] lg:text-[1.2vw] md:text-[2.2vw] whitespace-nowrap"
                      >
                        Created At
                      </th>
                      <th
                        scope="col"
                        className="px-[2vw] py-[2.8vw] lg:text-[1.2vw] md:text-[2.2vw] whitespace-nowrap"
                      >
                        Updated At
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {users
                      ? users.map((item, idx) => {
                          const createdAt = new Date(
                            item.createdAt
                          ).toLocaleDateString();
                          const updatedAt = new Date(
                            item.updatedAt
                          ).toLocaleDateString();
                          return (
                            <tr
                              key={idx}
                              className="bg-white border-b text-black border-gray-200"
                            >
                              <td
                                scope="row"
                                className="px-[2vw] xs:py-[2.8vw] md:py-[0.3vw] lg:text-[1.2vw] font-medium whitespace-nowrap "
                              >
                                {item.profilePicture ? (
                                  <img
                                    className="lg:w-[3vw] md:w-[4vw] xs:w-[5vw] lg:h-[3vw] md:h-[4vw] xs:h-[5vw] rounded-full"
                                    src={`${backendUrl}/${item.profilePicture}`}
                                    alt=""
                                  />
                                ) : (
                                  "No Profile Image"
                                )}
                              </td>
                              <td
                                scope="row"
                                className="px-[2vw] xs:py-[2.8vw] md:py-[0.3vw] lg:text-[1.2vw] font-medium whitespace-nowrap "
                              >
                                {item.firstName}
                              </td>
                              <td
                                scope="row"
                                className="px-[2vw] xs:py-[2.8vw] md:py-[0.3vw] lg:text-[1.2vw] font-medium whitespace-nowrap "
                              >
                                {item.lastName}
                              </td>
                              <td
                                scope="row"
                                className="px-[2vw] xs:py-[2.8vw] md:py-[0.3vw] lg:text-[1.2vw] font-medium whitespace-nowrap "
                              >
                                {item.email}
                              </td>
                              <td
                                scope="row"
                                className={`px-[2vw] xs:py-[2.8vw] md:py-[0.3vw] lg:text-[1.2vw] font-medium whitespace-nowrap  `}
                              >
                                <span
                                  className={`${
                                    item.isVerified
                                      ? "text-green-600 bg-green-200"
                                      : "text-red-600 bg-red-200"
                                  } md:py-[0.4vw] xs:py-[1vw] md:px-[1vw] xs:px-[2vw] md:rounded-[0.5vw] xs:rounded-[1vw]`}
                                >
                                  {item.isVerified
                                    ? "Verified"
                                    : "Not Verified"}
                                </span>
                              </td>
                              <td
                                scope="row"
                                className="px-[2vw] xs:py-[2.8vw] md:py-[0.3vw] lg:text-[1.2vw] font-medium whitespace-nowrap "
                              >
                                {createdAt}
                              </td>
                              <td
                                scope="row"
                                className="px-[2vw] xs:py-[2.8vw] md:py-[0.3vw] lg:text-[1.2vw] font-medium whitespace-nowrap "
                              >
                                {updatedAt}
                              </td>
                            </tr>
                          );
                        })
                      : ""}
                  </tbody>
                </table>
              </div>
            </div>
            <div className="w-full h-full">
              <div className="w-full overflow-x-auto">
                <table className="w-full lg:text-[1.2vw] md:text-[2.2vw] xs:text-[3.4vw] text-left rtl:text-right text-gray-500 dark:text-gray-400">
                  <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                      <th
                        scope="col"
                        className="px-[2vw] py-[2.8vw] lg:text-[1.2vw] md:text-[2.2vw] whitespace-nowrap"
                      >
                        Profile Image
                      </th>
                      <th
                        scope="col"
                        className="px-[2vw] py-[2.8vw] lg:text-[1.2vw] md:text-[2.2vw] whitespace-nowrap"
                      >
                        Name
                      </th>
                      <th
                        scope="col"
                        className="px-[2vw] py-[2.8vw] lg:text-[1.2vw] md:text-[2.2vw] whitespace-nowrap"
                      >
                        Desigination
                      </th>
                      <th
                        scope="col"
                        className="px-[2vw] py-[2.8vw] lg:text-[1.2vw] md:text-[2.2vw] whitespace-nowrap"
                      >
                        Company/Orginization
                      </th>
                      <th
                        scope="col"
                        className="px-[2vw] py-[2.8vw] lg:text-[1.2vw] md:text-[2.2vw]  max-w-[15vw]"
                      >
                        Message
                      </th>
                      <th
                        scope="col"
                        className="px-[2vw] py-[2.8vw] lg:text-[1.2vw] md:text-[2.2vw] whitespace-nowrap"
                      >
                        Rating
                      </th>
                      <th
                        scope="col"
                        className="px-[2vw] py-[2.8vw] lg:text-[1.2vw] md:text-[2.2vw] whitespace-nowrap"
                      >
                        Date
                      </th>
                      <th
                        scope="col"
                        className="px-[2vw] py-[2.8vw] lg:text-[1.2vw] md:text-[2.2vw] whitespace-nowrap"
                      >
                        Created At
                      </th>
                      <th
                        scope="col"
                        className="px-[2vw] py-[2.8vw] lg:text-[1.2vw] md:text-[2.2vw] whitespace-nowrap"
                      >
                        Updated At
                      </th>
                      <th
                        scope="col"
                        className="px-[2vw] py-[2.8vw] lg:text-[1.2vw] md:text-[2.2vw] whitespace-nowrap"
                      >
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {testimonialData
                      ? testimonialData.map((data, idx) => {
                          const createdAt = new Date(
                            data.createdAt
                          ).toLocaleDateString();
                          const updatedAt = new Date(
                            data.updatedAt
                          ).toLocaleDateString();
                          const date = new Date(data.date).toLocaleDateString();
                          if (!data.isDeleted) {
                            return (
                              <tr
                                key={idx}
                                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200"
                              >
                                <th
                                  scope="row"
                                  className="px-[2vw] xs:py-[2.8vw] md:py-[0.3vw] lg:text-[1.2vw] font-medium whitespace-nowrap dark:text-white"
                                >
                                  {data.profileImg ? (
                                    <img
                                      className="w-[3vw] h-[3vw] rounded-full"
                                      src={`${backendUrl}/${data.profileImg}`}
                                      alt=""
                                    />
                                  ) : (
                                    ""
                                  )}
                                </th>
                                <th
                                  scope="row"
                                  className="px-[2vw] xs:py-[2.8vw] md:py-[0.3vw] lg:text-[1.2vw] font-medium whitespace-nowrap dark:text-white"
                                >
                                  {data.name}
                                </th>

                                <td className="px-[2vw] xs:py-[2.8vw] md:py-[0.3vw] lg:text-[1.2vw] whitespace-nowrap">
                                  {data.designation}
                                </td>
                                <td className="px-[2vw] xs:py-[2.8vw] md:py-[0.3vw] lg:text-[1.2vw] whitespace-nowrap">
                                  {data.company}
                                </td>
                                <td className="px-[2vw] xs:py-[2.8vw] md:py-[0.3vw] lg:text-[1.2vw] max-w-[15vw] overflow-hidden">
                                  {data.message}
                                </td>
                                <td className="px-[2vw] xs:py-[2.8vw] md:py-[0.3vw] lg:text-[1.2vw] whitespace-nowrap">
                                  {data.company}
                                </td>
                                <td className="px-[2vw] xs:py-[2.8vw] md:py-[0.3vw] lg:text-[1.2vw] whitespace-nowrap">
                                  {date}
                                </td>
                                <td className="px-[2vw] xs:py-[2.8vw] md:py-[0.3vw] lg:text-[1.2vw] whitespace-nowrap">
                                  {createdAt}
                                </td>
                                <td className="px-[2vw] xs:py-[2.8vw] md:py-[0.3vw] lg:text-[1.2vw] whitespace-nowrap">
                                  {updatedAt}
                                </td>
                                <td className="px-[2vw] xs:py-[2.8vw] md:py-[0.3vw] lg:text-[1.2vw] h-full">
                                  <div className="flex gap-3 items-center">
                                    <Link
                                      to={`/admin/edit-testimonial/${data._id}`}
                                      type="button"
                                      className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-[0.4vw] lg:text-[1.2vw] md:text-[2.2vw] xs:text-[3.4vw] lg:px-[1.5vw] md:px-[2.5vw] xs:px-[3.9vw] py-[0.5vw] me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                                    >
                                      Edit
                                    </Link>
                                    <button
                                      onClick={() =>
                                        handleDeleteTesti(data._id)
                                      }
                                      className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-[0.4vw] lg:text-[1.2vw] md:text-[2.2vw] xs:text-[3.4vw] lg:px-[1.5vw] md:px-[2.5vw] xs:px-[3.9vw] py-[0.5vw] me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
                                    >
                                      Delete
                                    </button>
                                  </div>
                                </td>
                              </tr>
                            );
                          }
                        })
                      : ""}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeDashboard;
