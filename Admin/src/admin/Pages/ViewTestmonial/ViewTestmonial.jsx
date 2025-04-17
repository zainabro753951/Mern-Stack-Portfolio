import React from "react";
import { ToastContainer } from "react-toastify";
import DashboardLeft from "../../components/DashboardLeft";
import AdminHeader from "../../components/AdminHeader";
import { Link } from "react-router-dom";
import { useTestimonial } from "../../../Context/GetTestimonial";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

const ViewTestmonial = () => {
  const client = useQueryClient();
  const { testimonialData, setTestimonialData } = useTestimonial();
  const backendUrl = import.meta.env.VITE_BACKEND_URL;

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
      client.invalidateQueries({ queryKey: ["testimonialData"] });
      const newTesti = data.data.result;
      setTestimonialData(
        (prev) =>
          prev &&
          prev.map((item) =>
            item._id === newTesti._id ? { ...item, newTesti } : item
          )
      );
    },
  });

  const handleDeleteTesti = (id) => {
    if (id) {
      mutation.mutate(id);
    }
  };

  console.log(testimonialData);

  return (
    <div className="h-screen w-full overflow-hidden flex md:p-2 gap-2 bg-gray-200">
      <ToastContainer />
      <DashboardLeft />
      <div
        id="dashboardRight"
        className="lg:w-[75vw] md:w-[70vw] xs:w-[100%] h-full bg-[#F9FBFF] relative md:rounded-[50px] overflow-auto"
      >
        <AdminHeader />
        <div className="px-5">
          <h1 className="lg:text-[2.4vw] md:text-[3.4vw] xs:text-[5.5vw] font-semibold font-lexend_deca pb-3">
            View About
          </h1>
          <p className="lg:text-[1.2vw] md:text-[2.2vw] xs:text-[3.4vw] font-jost text-gray-500">
            I continuously embrace new challenges and opportunities throughout
            my professional journey. My focus has always been on enhancing my
            skills and providing innovative solutions.
          </p>
        </div>
        <div className="pt-24 w-full px-4">
          <div class="relative overflow-x-auto  shadow-md sm:rounded-lg">
            <table class="w-full lg:text-[1.2vw] md:text-[2.2vw] xs:text-[3.4vw] text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th
                    scope="col"
                    class="px-[2vw] py-[2.8vw] lg:text-[1.2vw] md:text-[2.2vw] whitespace-nowrap"
                  >
                    Profile Image
                  </th>
                  <th
                    scope="col"
                    class="px-[2vw] py-[2.8vw] lg:text-[1.2vw] md:text-[2.2vw] whitespace-nowrap"
                  >
                    Name
                  </th>
                  <th
                    scope="col"
                    class="px-[2vw] py-[2.8vw] lg:text-[1.2vw] md:text-[2.2vw] whitespace-nowrap"
                  >
                    Desigination
                  </th>
                  <th
                    scope="col"
                    class="px-[2vw] py-[2.8vw] lg:text-[1.2vw] md:text-[2.2vw] whitespace-nowrap"
                  >
                    Company/Orginization
                  </th>
                  <th
                    scope="col"
                    class="px-[2vw] py-[2.8vw] lg:text-[1.2vw] md:text-[2.2vw]  max-w-[15vw]"
                  >
                    Message
                  </th>
                  <th
                    scope="col"
                    class="px-[2vw] py-[2.8vw] lg:text-[1.2vw] md:text-[2.2vw] whitespace-nowrap"
                  >
                    Rating
                  </th>
                  <th
                    scope="col"
                    class="px-[2vw] py-[2.8vw] lg:text-[1.2vw] md:text-[2.2vw] whitespace-nowrap"
                  >
                    Date
                  </th>
                  <th
                    scope="col"
                    class="px-[2vw] py-[2.8vw] lg:text-[1.2vw] md:text-[2.2vw] whitespace-nowrap"
                  >
                    Created At
                  </th>
                  <th
                    scope="col"
                    class="px-[2vw] py-[2.8vw] lg:text-[1.2vw] md:text-[2.2vw] whitespace-nowrap"
                  >
                    Updated At
                  </th>
                  <th
                    scope="col"
                    class="px-[2vw] py-[2.8vw] lg:text-[1.2vw] md:text-[2.2vw] whitespace-nowrap"
                  >
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {!testimonialData.isDeleted
                  ? testimonialData?.map((data, idx) => {
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
                            class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200"
                          >
                            <th
                              scope="row"
                              class="px-[2vw] xs:py-[2.8vw] md:py-[0.3vw] lg:text-[1.2vw] font-medium text-gray-900 whitespace-nowrap dark:text-white"
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
                              class="px-[2vw] xs:py-[2.8vw] md:py-[0.3vw] lg:text-[1.2vw] font-medium text-gray-900 whitespace-nowrap dark:text-white"
                            >
                              {data.name}
                            </th>

                            <td class="px-[2vw] xs:py-[2.8vw] md:py-[0.3vw] lg:text-[1.2vw] whitespace-nowrap">
                              {data.designation}
                            </td>
                            <td class="px-[2vw] xs:py-[2.8vw] md:py-[0.3vw] lg:text-[1.2vw] whitespace-nowrap">
                              {data.company}
                            </td>
                            <td class="px-[2vw] xs:py-[2.8vw] md:py-[0.3vw] lg:text-[1.2vw] max-w-[15vw] overflow-hidden">
                              {data.message}
                            </td>
                            <td class="px-[2vw] xs:py-[2.8vw] md:py-[0.3vw] lg:text-[1.2vw] whitespace-nowrap">
                              {data.company}
                            </td>
                            <td class="px-[2vw] xs:py-[2.8vw] md:py-[0.3vw] lg:text-[1.2vw] whitespace-nowrap">
                              {date}
                            </td>
                            <td class="px-[2vw] xs:py-[2.8vw] md:py-[0.3vw] lg:text-[1.2vw] whitespace-nowrap">
                              {createdAt}
                            </td>
                            <td class="px-[2vw] xs:py-[2.8vw] md:py-[0.3vw] lg:text-[1.2vw] whitespace-nowrap">
                              {updatedAt}
                            </td>
                            <td className="px-[2vw] xs:py-[2.8vw] md:py-[0.3vw] lg:text-[1.2vw] h-full">
                              <div className="flex gap-3 items-center">
                                <Link
                                  to={`/admin/edit-testimonial/${data._id}`}
                                  type="button"
                                  class="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-[0.4vw] lg:text-[1.2vw] md:text-[2.2vw] xs:text-[3.4vw] lg:px-[1.5vw] md:px-[2.5vw] xs:px-[3.9vw] py-[0.5vw] me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                                >
                                  Edit
                                </Link>
                                <button
                                  onClick={() => handleDeleteTesti(data._id)}
                                  class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-[0.4vw] lg:text-[1.2vw] md:text-[2.2vw] xs:text-[3.4vw] lg:px-[1.5vw] md:px-[2.5vw] xs:px-[3.9vw] py-[0.5vw] me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
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
  );
};

export default ViewTestmonial;
