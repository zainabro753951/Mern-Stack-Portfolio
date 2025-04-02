import React, { useState } from "react";
import { Link } from "react-router-dom";
import DashboardLeft from "../../components/DashboardLeft";
import AdminHeader from "../../components/AdminHeader";
import { useProjects } from "../../../Context/GetProject";

const ViewProject = () => {
  const { projects, setProjects } = useProjects();
  const backendUrl = import.meta.env.VITE_BACKEND_URL;

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
            View Project
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
          <h2 className="text-2xl font-semibold font-lexend_deca">Project</h2>
          <div className="max-w-[100%]">
            {projects
              ? projects.map((project, idx) => {
                  const createdAt = new Date(
                    project.createdAt
                  ).toLocaleDateString();
                  const updatedAt = new Date(
                    project.updatedAt
                  ).toLocaleDateString();
                  return (
                    <div class="w-full py-[1.5vw] my-[2vw] bg-themeGolden/30 transition-all duration-300 hover:border-themeBlue md:border-2 xs:border border-themeGolden hover:bg-themeGolden/50   px-5 rounded-lg ">
                      <div className="w-full grid lg:grid-cols-2 py-[3vw] lg:gap-[1.4vw] md:gap-[2.4vw] xs:gap-[3.8vw]">
                        <Link
                          to={`/admin/view-project/${project.projectSlug}/${project._id}`}
                          className="w-full lg:h-[25vw] md:h-[50vw]"
                        >
                          <img
                            id="blogImg"
                            onMouseEnter={() =>
                              (document.getElementById(
                                "blogLink"
                              ).style.textDecoration = "underline")
                            }
                            onMouseLeave={() =>
                              (document.getElementById(
                                "blogLink"
                              ).style.textDecoration = "none")
                            }
                            className="w-full h-full object-cover rounded-md"
                            src={`${backendUrl}/${project.poster}`}
                            alt=""
                          />
                        </Link>
                        <div>
                          <Link
                            id="blogLink"
                            to={""}
                            className="lg:text-[2.4vw] md:text-[3.4vw] xs:text-[4.3vw] lg:leading-[2.9vw] md:leading-[3.9vw] xs:leading-[4.8vw] font-semibold font-lexend_deca pb-3"
                          >
                            {project.projectName}
                          </Link>
                          <p className="lg:text-[1.2vw] py-[1.5vw] md:text-[2.2vw] xs:text-[3.4vw] font-jost text-gray-500">
                            {project.projectDescription}
                          </p>
                          <div className="flex items-center justify-around text-center w-full ">
                            <div className="flex flex-col">
                              <h3 className="lg:text-[1.3vw] md:text-[2.3vw] font-semibold xs:text-[3.3vw]">
                                Created At
                              </h3>
                              <p className="lg:text-[1.2vw]  md:text-[2.2vw] xs:text-[3.4vw] font-jost text-gray-500">
                                {createdAt}
                              </p>
                            </div>
                            <div className="flex flex-col">
                              <h3 className="lg:text-[1.3vw] md:text-[2.3vw] font-semibold xs:text-[3.3vw]">
                                Updated At
                              </h3>
                              <p className="lg:text-[1.2vw]  md:text-[2.2vw] xs:text-[3.4vw] font-jost text-gray-500">
                                {updatedAt}
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center gap-3 py-[2vw]">
                          <button
                            onClick={() => handleDeleteEducationData(post._id)}
                            class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-[0.4vw] lg:text-[1.2vw] md:text-[2.2vw] xs:text-[3.4vw] lg:px-[1.5vw] md:px-[2.5vw] xs:px-[3.9vw] py-[0.5vw] me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
                          >
                            Delete
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })
              : ""}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewProject;
