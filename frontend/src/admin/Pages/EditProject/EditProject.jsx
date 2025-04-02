import React, { useEffect, useState } from "react";
import DashboardLeft from "../../components/DashboardLeft";
import AdminHeader from "../../components/AdminHeader";
import { Link, Navigate, useNavigate, useParams } from "react-router-dom";
import { useProjects } from "../../../Context/GetProject";

const EditProject = () => {
  const { id, projectSlug } = useParams();
  const { projects, setProjects } = useProjects();
  const [project, setproject] = useState({});
  const [projectTags, setprojectTags] = useState([]);
  const [seoKeywords, setSeoKeywords] = useState([]);
  const backendUrl = import.meta.env.VITE_BACKEND_URL;

  const navigate = useNavigate();

  useEffect(() => {
    if (projects && id && projectSlug) {
      const project = projects.find(
        (project) => project._id === id || project.projectSlug === projectSlug
      );

      if (!project) {
        navigate("/admin/view-project");
      }
      setproject(project);
    }
  }, [projects, id, projectSlug]);

  const publishDate = new Date(project.createdAt).toLocaleDateString();

  useEffect(() => {
    if (project.tags) {
      setprojectTags(project.tags.toString().split(","));
    }
  }, [project.tags]);

  useEffect(() => {
    if (project.seoKeywords) {
      setSeoKeywords(project.seoKeywords.toString().split(","));
    }
  }, [project.seoKeywords]);

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
            View All Project
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
            <div class="relative">
              <div className="w-full grid lg:grid-cols-2 py-[3vw] lg:gap-[1.4vw] md:gap-[2.4vw] xs:gap-[3.8vw]">
                <div className="w-full lg:h-[25vw] md:h-[50vw]">
                  <img
                    className="w-full h-full object-cover rounded-md"
                    src={`${backendUrl}/${project.poster}`}
                    alt=""
                  />
                </div>
                <div>
                  <h1 className="lg:text-[2.4vw] md:text-[3.4vw] xs:text-[4.3vw] lg:leading-[2.9vw] md:leading-[3.9vw] xs:leading-[4.8vw] font-semibold font-lexend_deca pb-3">
                    {project.projectName}
                  </h1>
                  <p className="lg:text-[1.2vw] md:text-[2.2vw] xs:text-[3.4vw] font-jost text-gray-500">
                    Donec quam felis, ultricies nec, pellentesque eu, pretium
                    quis, sem. Nulla consequat massa quis enim. Donec pede
                    justo, fringilla vel, aliquet nec, vulputate eget, arcu. In
                    enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.
                    Donec quam felis, ultricies nec, pellentesque eu, pretium
                    quis, sem. Nulla consequat massa quis enim. Donec pede
                    justo, fringilla vel, aliquet nec, vulputate eget, arcu. In
                    enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.
                    Donec quam felis, ultricies nec, pellentesque eu, pretium
                    quis, sem. Nulla consequat massa quis enim. Donec pede
                    justo, fringilla vel, aliquet nec, vulputate eget, arcu. In
                    enim justo, rhoncus ut, imperdiet a, venenatis vitae,
                  </p>
                </div>
              </div>
              <div className="flex w-full justify-between items-center px-[5vw]">
                <div className="flex flex-col text-center">
                  <p className="lg:text-[1.3vw] md:text-[2.3vw] sm:text-[2.9vw] xs:text-[3.9vw] font-semibold font-lexend_deca">
                    Project Type
                  </p>
                  <p className="lg:text-[1.2vw] md:text-[2.2vw] xs:text-[3.4vw] font-jost text-gray-500">
                    {project.projectType}
                  </p>
                </div>
                <div className="flex flex-col text-center">
                  <p className="lg:text-[1.3vw] md:text-[2.3vw] sm:text-[2.9vw] xs:text-[3.9vw] font-semibold font-lexend_deca">
                    Project Catagory
                  </p>
                  <p className="lg:text-[1.2vw] md:text-[2.2vw] xs:text-[3.4vw] font-jost text-gray-500">
                    {project.projectCategory}
                  </p>
                </div>
                <div className="flex flex-col text-center">
                  <p className="lg:text-[1.3vw] md:text-[2.3vw] sm:text-[2.9vw] xs:text-[3.9vw] font-semibold font-lexend_deca">
                    Publish Date
                  </p>
                  <p className="lg:text-[1.2vw] md:text-[2.2vw] xs:text-[3.4vw] font-jost text-gray-500">
                    {publishDate}
                  </p>
                </div>
              </div>
              <div className="w-full py-[3vw] grid md:grid-cols-2 gap-4">
                {project.screenshots
                  ? project.screenshots.map((img) => {
                      return (
                        <img
                          className="w-full lg:h-[30vw] md:h-[40vw] xs:h-[50vw] object-cover rounded-md"
                          src={`${backendUrl}/${img}`}
                          alt=""
                        />
                      );
                    })
                  : ""}
              </div>

              <div className="w-full grid lg:grid-cols-2 gap-[5vw]">
                <div className="flex flex-col gap-5">
                  <p className="lg:text-[1.3vw] md:text-[2.3vw] sm:text-[2.9vw] xs:text-[3.9vw] font-semibold font-lexend_deca">
                    Tags
                  </p>
                  <div className="w-full flex flex-wrap gap-3 items-center">
                    {projectTags
                      ? projectTags.map((tag) => {
                          return (
                            <div className="lg:py-[0.7vw] md:py-[1.5vw] xs:py-[2.5vw] lg:px-[2vw] md:px-[3vw] xs:px-[3.5vw] lg:text-[1.2vw] md:text-[2.2vw] xs:text-[3.4vw] border border-gray-400 flex gap-3 items-center rounded-lg">
                              {tag}
                            </div>
                          );
                        })
                      : ""}
                  </div>
                </div>
                <div className="flex flex-col gap-5">
                  <p className="lg:text-[1.3vw] md:text-[2.3vw] sm:text-[2.9vw] xs:text-[3.9vw] font-semibold font-lexend_deca">
                    SEO Keywords
                  </p>
                  <div className="w-full flex flex-wrap gap-3 items-center">
                    {seoKeywords
                      ? seoKeywords.map((keyword) => {
                          return (
                            <div className="lg:py-[0.7vw] md:py-[1.5vw] xs:py-[2.5vw] lg:px-[2vw] md:px-[3vw] xs:px-[3.5vw] lg:text-[1.2vw] md:text-[2.2vw] xs:text-[3.4vw] border border-gray-400 flex gap-3 items-center rounded-lg">
                              {keyword}
                            </div>
                          );
                        })
                      : ""}
                  </div>
                </div>
              </div>
              <div className="py-[4vw] w-ful">
                <h1 className="lg:text-[2.4vw] md:text-[3.4vw] xs:text-[4.3vw] lg:leading-[2.9vw] md:leading-[3.9vw] xs:leading-[4.8vw] font-semibold font-lexend_deca pb-3">
                  {project.seoTitle}
                </h1>
                <p className="lg:text-[1.2vw] md:text-[2.2vw] xs:text-[3.4vw] font-jost text-gray-500">
                  {project.metaDescription}
                </p>
              </div>
              <div>
                <div className="py-[2vw] w-full flex items-center">
                  <Link
                    to={`/admin/edit-project/${project._id}`}
                    type="button"
                    class="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-[0.4vw] lg:text-[1.2vw] md:text-[2.2vw] xs:text-[3.4vw] lg:px-[1.5vw] md:px-[2.5vw] xs:px-[3.9vw] py-[0.5vw] me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                  >
                    Edit
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditProject;
