import React from "react";
import OptimizedImage from "../../../Common/OptimiseImage";

const ProjectDetails = ({ project }) => {
  const backendUrl = import.meta.env.VITE_BACKEND_URL;
  const createdAt = new Date(project?.createdAt).toLocaleDateString();
  return (
    <div className="md:max-w-[80vw] md:min-h-screen md:px-[0.5vw] xs:px-[1vw] relative mx-auto flex flex-col items-center md:gap-[15vw] justify-center md:py-[2vw] xs:py-[3vw]">
      <div className="w-full h-full">
        <OptimizedImage
          src={`${backendUrl.slice(0, -4)}/${project?.poster}`}
          className={
            "w-full md:h-screen xs:h-[50vh] border-[0.5vw] border-white md:rounded-[1.5vw] xs:rounded-[2.5vw] md:absolute -top-[28%] object-cover"
          }
        />
      </div>
      <div className=" text-start w-full">
        <h2 className="md:text-[4vw] sm:text-[5vw] xs:text-[6vw] font-lexend_deca font-semibold">
          Overview
        </h2>
        <p className="md:py-[1vw] sm:py-[2vw] xs:py-[3vw] md:text-[1.3vw] sm:text-[2.3vw] xs:text-[3.3vw] font-jost text-gray-600">
          {project?.projectDescription}
        </p>

        <div className="flex items-center justify-between md:py-[1.5vw] sm:py-[2.5vw] xs:py-[3.5vw]">
          <div className="text-center flex flex-col items-center justify-center">
            <h3 className="md:text-[1.8vw] sm:text-[2.8vw] xs:text-[3.8vw] font-semibold font-lexend_deca">
              Project Type
            </h3>
            <p className="md:text-[1.3vw] sm:text-[2.3vw] xs:text-[3.3vw] font-jost text-gray-600">
              {project?.projectType}
            </p>
          </div>
          <div className="text-center flex flex-col items-center justify-center">
            <h3 className="md:text-[1.8vw] sm:text-[2.8vw] xs:text-[3.8vw] font-semibold font-lexend_deca">
              Project Categroy
            </h3>
            <p className="md:text-[1.3vw] sm:text-[2.3vw] xs:text-[3.3vw]  font-jost text-gray-600">
              {project?.projectCategory}
            </p>
          </div>

          <div className="text-center flex flex-col items-center justify-center">
            <h3 className="md:text-[1.8vw] sm:text-[2.8vw] xs:text-[3.8vw] font-semibold font-lexend_deca">
              Publish Date
            </h3>
            <p className="md:text-[1.3vw] sm:text-[2.3vw] xs:text-[3.3vw]  font-jost text-gray-600">
              {createdAt}
            </p>
          </div>
        </div>

        <OptimizedImage
          src={
            project?.screenshots &&
            `${backendUrl.slice(0, -4)}/${project?.screenshots[0]}`
          }
          className={
            "w-full md:h-[35vw] xs:h-[50vw] border-[0.5vw] border-white md:rounded-[1.5vw] xs:rounded-[2.5vw] object-cover "
          }
        />
        <p className="md:py-[1vw] xs:py-[2vw] md:text-[1.3vw] sm:text-[2.3vw] xs:text-[3.3vw]  font-jost text-gray-600">
          {project?.projectDescription2}
        </p>
        <p className="md:py-[1vw] xs:py-[2vw] md:text-[1.3vw] sm:text-[2.3vw] xs:text-[3.3vw]  font-jost text-gray-600">
          {project?.projectDescription2}
        </p>
      </div>
    </div>
  );
};

export default ProjectDetails;
