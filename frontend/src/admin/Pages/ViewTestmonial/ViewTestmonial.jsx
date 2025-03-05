import React from "react";
import { ToastContainer } from "react-toastify";
import DashboardLeft from "../../components/DashboardLeft";
import AdminHeader from "../../components/AdminHeader";
import { Link } from "react-router-dom";

const ViewTestmonial = () => {
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
                    class="px-[2vw] py-[2.8vw] lg:text-[1.2vw] md:text-[2.2vw] whitespace-nowrap"
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
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 border-gray-200">
                  <th
                    scope="row"
                    class="px-[2vw] py-[2.8vw] lg:text-[1.2vw] md:text-[2.2vw] font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    Apple MacBook Pro 17"
                  </th>
                  <td class="px-[2vw] py-[2.8vw] lg:text-[1.2vw] md:text-[2.2vw]">
                    Silver
                  </td>
                  <td class="px-[2vw] py-[2.8vw] lg:text-[1.2vw] md:text-[2.2vw]">
                    Laptop
                  </td>
                  <td class="px-[2vw] py-[2.8vw] lg:text-[1.2vw] md:text-[2.2vw]">
                    $2999
                  </td>
                  <td class="px-[2vw] py-[2.8vw] lg:text-[1.2vw] md:text-[2.2vw]">
                    <a
                      href="#"
                      class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                    >
                      Edit
                    </a>
                  </td>
                </tr>
                <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 border-gray-200">
                  <th
                    scope="row"
                    class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    Microsoft Surface Pro
                  </th>
                  <td class="px-6 py-4">White</td>
                  <td class="px-6 py-4">Laptop PC</td>
                  <td class="px-6 py-4">$1999</td>
                  <td class="px-6 py-4">
                    <a
                      href="#"
                      class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                    >
                      Edit
                    </a>
                  </td>
                </tr>
                <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 border-gray-200">
                  <th
                    scope="row"
                    class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    Magic Mouse 2
                  </th>
                  <td class="px-6 py-4">Black</td>
                  <td class="px-6 py-4">Accessories</td>
                  <td class="px-6 py-4">$99</td>
                  <td class="px-6 py-4">
                    <a
                      href="#"
                      class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                    >
                      Edit
                    </a>
                  </td>
                </tr>
                <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 border-gray-200">
                  <th
                    scope="row"
                    class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    Google Pixel Phone
                  </th>
                  <td class="px-6 py-4">Gray</td>
                  <td class="px-6 py-4">Phone</td>
                  <td class="px-6 py-4">$799</td>
                  <td class="px-6 py-4">
                    <a
                      href="#"
                      class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                    >
                      Edit
                    </a>
                  </td>
                </tr>
                <tr>
                  <th
                    scope="row"
                    class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    Apple Watch 5
                  </th>
                  <td class="px-6 py-4">Red</td>
                  <td class="px-6 py-4">Wearables</td>
                  <td class="px-6 py-4">$999</td>
                  <td class="px-6 py-4">
                    <a
                      href="#"
                      class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                    >
                      Edit
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewTestmonial;
