import React, { useState } from "react";
import { Link } from "react-router-dom";
import AdminHeader from "../../components/AdminHeader";
import DashboardLeft from "../../components/DashboardLeft";
import { useTestimonial } from "../../../Context/GetTestimonial";
import GetProjectCounts from "../../../Context/GetProjectCounts";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

const HomeDashboard = () => {
  const backendUrl = import.meta.env.VITE_BACKEND_URL;
  const client = useQueryClient();
  const { testimonialData, setTestimonialData } = useTestimonial();
  const { deletedProjects, availableProjects } = GetProjectCounts();

  // Create mutation for deleting testimonial data
  const mutation = useMutation({
    mutationFn: (id) => {
      const response = axios.put(
        `${backendUrl}/admin/delete_testimonial/${id}`,
        null,
        {
          withCredentials: true,
        }
      );
      return response;
    },

    onSuccess: (data) => {
      console.log(data);
      client.invalidateQueries({ queryKey: ["testimonialData"] });
      const newTesti = data.data.result;
      setTestimonialData(
        (prev) =>
          prev &&
          prev.map((item) =>
            item._id === newTesti._id ? { ...item, ...newTesti } : item
          )
      );
    },
    onError: (error) => {
      console.log(error);
    },
  });

  const handleDeleteTesti = (id) => {
    console.log(id);
    if (id) {
      mutation.mutate(id);
    }
  };

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
          </div>
          <div className="mt-3 w-full">
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
                                      to={`/edit-testimonial/${data._id}`}
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
