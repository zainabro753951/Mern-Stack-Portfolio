import React, { useEffect, useState } from "react";
import DashboardLeft from "../../components/DashboardLeft";
import AdminHeader from "../../components/AdminHeader";
import HireMeBtn from "../../../components/HireMeBtn";
import { IoWarning } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import { useProjects } from "../../../Context/GetProject";
import { useParams } from "react-router-dom";

const EditProjectFrom = () => {
  const backendUrl = import.meta.env.VITE_BACKEND_URL;
  const { projects, setProjects } = useProjects();
  const [project, setProject] = useState({});
  const { id } = useParams();

  useEffect(() => {
    if (projects && projects.length > 0) {
      const project = projects.find((project) => project._id === id);
      if (project) {
        setProject(project);
      }
    }
  }, [projects, id]);

  const technologies = [
    "Select Technology",
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Angular",
    "Vue.js",
    "Node.js",
    "Express.js",
    "Tailwind CSS",
    "Bootstrap",
    "SASS",
    "LESS",
    "TypeScript",
    "jQuery",
    "Django",
    "Flask",
    "Ruby on Rails",
    "Laravel",
    "Spring Boot",
    "ASP.NET",
    "PHP",
    "Python",
    "Java",
    "C#",
    "C++",
    "C",
    "Go (Golang)",
    "Rust",
    "Kotlin",
    "Swift",
    "Objective-C",
    "Perl",
    "Ruby",
    "Scala",
    "Haskell",
    "Elixir",
    "Erlang",
    "Dart",
    "Flutter",
    "React Native",
    "Xamarin",
    "Ionic",
    "Electron",
    "Next.js",
    "Nuxt.js",
    "Gatsby",
    "GraphQL",
    "REST API",
  ];

  const videoExtensions = [
    ".mp4", // MPEG-4
    ".mkv", // Matroska Video
    ".avi", // Audio Video Interleave
    ".mov", // QuickTime Movie
    ".wmv", // Windows Media Video
    ".flv", // Flash Video
    ".webm", // WebM
    ".mpeg", // MPEG Video
    ".mpg", // MPEG Video
    ".3gp", // 3GPP Multimedia File
    ".m4v", // iTunes Video File
  ];
  const [projectName, setProjectName] = useState(project?.projectName || "");
  const [projectSlug, setProjectSlug] = useState(project?.projectSlug || "");
  const [projectDescription, setProjectDescription] = useState(
    project?.projectDescription || ""
  );
  const [projectDescription2, setProjectDescription2] = useState(
    project?.projectDescription2 || ""
  );
  const [projectDescription3, setProjectDescription3] = useState(
    project?.projectDescription3 || ""
  );
  const [projectType, setProjectType] = useState(project?.projectType || "");
  const [projectUrl, setProjectUrl] = useState(project?.projectUrl || "");
  const [projetScreenShots, setProjetScreenShots] = useState([]);
  const [oldProjectScreenShots, setoldProjectScreenShots] = useState([]);
  const [projectPoster, setProjectPoster] = useState(project?.poster || "");
  const [oldProjectPoster, setOldProjectPoster] = useState(
    project?.poster || ""
  );
  const [projectVideo, setProjectVideo] = useState(project?.video || "");
  const [oldProjectVideo, setOldProjectVideo] = useState(project?.video || "");
  const [githubUrl, setgithubUrl] = useState(project?.githubUrl || "");
  const [metaDescription, setMetaDescription] = useState(
    project?.metaDescription || ""
  );
  const [projectCategory, setprojectCategory] = useState(
    project?.projectCategory || ""
  );
  const [seoTitle, setseoTitle] = useState(project?.seoTitle || "");
  const [projectTags, setProjectTags] = useState([]);
  const [tag, setTag] = useState("");
  const [proError, setProError] = useState("");
  const [seoError, setSeoError] = useState("");
  const [techError, setTechSeoError] = useState("");
  const [keyword, setKeyword] = useState("");
  const [seoKewords, setSeoKewords] = useState([]);
  const [techStack, setTechStack] = useState("");
  const [techStacks, setTechStacks] = useState([]);

  // ========== Generating Slug Urls ==========
  useEffect(() => {
    if (projectName) {
      const slug = projectName.toLowerCase().replace(/\s+/g, "-");
      setProjectSlug(slug);
    }
  }, [projectName, setProjectSlug]);

  //  =============== Add Project All Tags and Keywords ===============
  useEffect(() => {
    if (project) {
      const tags = project.tags?.toString().split(",");
      const keywords = project.seoKeywords?.toString().split(",");
      const techStacks = project.techStacks?.toString().split(",");

      setProjectTags(tags || []);
      setSeoKewords(keywords || []);
      setTechStacks(techStacks || []);
    }
  }, [project]);

  // ============== Fill All Fields ==============
  useEffect(() => {
    if (project) {
      setProjectName(project.projectName || "");
      setProjectDescription(project.projectDescription || "");
      setProjectDescription2(project.projectDescription2 || "");
      setProjectDescription3(project.projectDescription3 || "");
      setProjectPoster(project.poster || "");
      setOldProjectPoster(project.poster || "");
      setProjectVideo(project.video || "");
      setOldProjectVideo(project.video || "");
      setProjetScreenShots(project.screenshots || []);
      setoldProjectScreenShots(project.screenshots || []);
      setgithubUrl(project.githubUrl || "");
      setMetaDescription(project.metaDescription || "");
      setprojectCategory(project.projectCategory || "");
      setseoTitle(project.seoTitle || "");
      setProjectType(project.projectUrl || "");
      setProjectUrl(project.projectUrl || "");
    }
  }, [project]);

  // ========== Add Project Tags ============
  const addProjectTags = () => {
    if (!tag.trim()) {
      return setProError("Please fill the required tags field!");
    }
    const existingTag = projectTags.find(
      (item) => item.toLowerCase() === tag.toLowerCase()
    );
    if (existingTag) {
      setProError("This tag already exists");
    } else {
      setProjectTags([...projectTags, tag]);
      setProError("");
      setTag("");
    }
  };

  // ========== Delete Project Tags ============
  const handleDelete = (index) => {
    let deletedProjectTags = projectTags.filter((_, i) => i !== index);
    setProjectTags(deletedProjectTags);
  };

  // ========== Add Seo Keywords ============
  const addSeoKeywords = () => {
    if (!keyword.trim()) {
      return setSeoError("Please fill the required tags field!");
    }
    const existingKeyword = seoKewords.find(
      (item) => item.toLowerCase() === keyword.toLowerCase()
    );
    if (existingKeyword) {
      setSeoError("This tag already exists");
    } else {
      setSeoKewords([...seoKewords, keyword]);
      setSeoError("");
      setKeyword("");
    }
  };

  // ========== Delete Seo Keywords ============
  const deletSeo = (index) => {
    let deletedSeo = seoKewords.filter((_, i) => i !== index);
    setSeoKewords(deletedSeo);
  };

  // ========== Add Tech Stacks ============
  const addTechStack = () => {
    if (!techStack.trim()) {
      return setTechSeoError("Please fill the required tags field!");
    }
    const existingtechStack = techStacks.find(
      (item) => item.toLowerCase() === techStack.toLowerCase()
    );
    if (existingtechStack) {
      setTechSeoError("This tag already exists");
    } else {
      setTechStacks([...techStacks, techStack]);
      setTechSeoError("");
      setTechStack("");
    }
  };

  // ========== Delete Tech Stacks ============
  const deleteTechStack = (index) => {
    let deletedSeo = techStacks.filter((_, i) => i !== index);
    setTechStacks(deletedSeo);
  };

  // ========== Create Mutation ============
  const mutation = useMutation({
    mutationFn: (FormData) => {
      const response = axios.put(
        `${backendUrl}/admin/update_project/${id}`,
        FormData,
        {
          withCredentials: true,
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      return response;
    },
  });

  // ========== Handel Submit of project form ============
  const handleSubmitOfProject = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("projectName", projectName);
    formData.append("projectSlug", projectSlug);
    formData.append("projectDescription", projectDescription);
    formData.append("projectDescription2", projectDescription2);
    formData.append("projectDescription3", projectDescription3);
    formData.append("techStacks", techStacks);
    formData.append("projectType", projectType);
    formData.append("projectUrl", projectUrl);
    formData.append("githubUrl", githubUrl);
    formData.append("poster", projectPoster);
    formData.append("oldPoster", oldProjectPoster);
    formData.append("video", projectVideo);
    formData.append("oldVideo", oldProjectVideo);
    for (let file of projetScreenShots) {
      formData.append("screenshots", file);
    }
    for (let file of oldProjectScreenShots) {
      formData.append("oldScreenshots", file);
    }
    formData.append("tags", projectTags);
    formData.append("projectCategory", projectCategory);
    formData.append("seoTitle", seoTitle);
    formData.append("metaDescription", metaDescription);
    formData.append("seoKeywords", seoKewords);
    mutation.mutate(formData);
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
      const updatedProject = mutation.data.data;
      setProjects((prev) => {
        return prev.map((item) =>
          item._id === updatedProject._id
            ? { ...item, ...updatedProject }
            : item
        );
      });
      toast.success("About updated successfully!", {
        position: "top-right",
        autoClose: 5000,
        theme: "dark",
        style: { width: "100%" },
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
          <h1 className="lg:text-[2.4vw] md:text-[3.4vw] xs:text-[5.5vw] font-semibold font-lexend_deca pb-3">
            Add Projects
          </h1>
          <p className="lg:text-[1.2vw] md:text-[2.2vw] xs:text-[3.4vw] font-jost text-gray-500">
            Education is a journey that not only enriches our knowledge but also
            empowers us with skills and experiences that help us grow and
            achieve our goals. Sharing your educational background is an
            important way to showcase the steps, degrees, and milestones that
            have shaped your personal and professional growth. We encourage you
            to take this opportunity to share your unique learning experiences,
            qualifications, and the moments that matter most to you. Every step,
            every degree, and every challenge is a part of your story that
            brings you closer to realizing your dreams.
          </p>
        </div>
        <div className="px-5">
          <h2 className="lg:text-[1.8vw] md:text-[2.8vw] xs:text-[4.4vw] font-semibold font-lexend_deca py-5">
            Project
          </h2>
          <form
            method="post"
            encType="multipart/form-data"
            onSubmit={handleSubmitOfProject}
            className=" lg:text-[1.1vw] flex flex-col  md:text-[2.1vw] sm:text-[2.7vw] xs:text-[3vw] pb-10 gap-3"
          >
            <div className="w-full flex md:flex-row xs:flex-col gap-3">
              {/* Project Name */}

              <div className="flex flex-col gap-1 w-full">
                <label
                  htmlFor="about-headline"
                  className="lg:text-[1.2vw] md:text-[2.2vw] xs:text-[3.4vw] font-lexend_deca"
                >
                  Project Name*
                </label>
                <input
                  className="py-[0.8vw] w-full xs:px-2 md:px-5 xs:rounded-md md:rounded-lg border border-gray-400 outline-none lg:placeholder:text-[1.1vw] md:placeholder:text-[2.1vw] sm:placeholder:text-[2.7vw] xs:placeholder:text-[3vw] focus:border-themeBlue"
                  type="text"
                  value={projectName}
                  onChange={(e) => setProjectName(e.target.value)}
                  required
                  placeholder="Enter your degree or qualification"
                />
              </div>

              {/* Project Slug Url */}

              <div className="flex flex-col gap-1 w-full">
                <label
                  htmlFor="about-headline"
                  className="lg:text-[1.2vw] md:text-[2.2vw] xs:text-[3.4vw] font-lexend_deca"
                >
                  Project Slug Url
                </label>
                <input
                  className="py-[0.8vw] w-full xs:px-2 md:px-5 xs:rounded-md md:rounded-lg border border-gray-400 outline-none lg:placeholder:text-[1.1vw] md:placeholder:text-[2.1vw] sm:placeholder:text-[2.7vw] xs:placeholder:text-[3vw] focus:border-themeBlue"
                  type="text"
                  value={projectSlug}
                  onChange={(e) => setProjectSlug(e.target.value)}
                  required
                  placeholder="Enter your degree or qualification"
                />
              </div>
            </div>

            {/* Project Discription */}

            <div className="flex flex-col gap-1 w-full">
              <label
                htmlFor="about-headline"
                className="lg:text-[1.2vw] md:text-[2.2vw] xs:text-[3.4vw] font-lexend_deca"
              >
                Project Discription*
              </label>
              <textarea
                className="py-[0.8vw] w-full xs:px-2 md:px-5 xs:rounded-md md:rounded-lg border border-gray-400 outline-none lg:placeholder:text-[1.1vw] md:placeholder:text-[2.1vw] sm:placeholder:text-[2.7vw] xs:placeholder:text-[3vw] focus:border-themeBlue"
                rows={7}
                value={projectDescription}
                onChange={(e) => setProjectDescription(e.target.value)}
                required
                placeholder="Enter your degree or qualification"
              ></textarea>
            </div>

            {/* Project Discription 2*/}

            <div className="flex flex-col gap-1 w-full">
              <label className="lg:text-[1.2vw] md:text-[2.2vw] xs:text-[3.4vw] font-lexend_deca">
                Project Discription*
              </label>
              <textarea
                className="py-[0.8vw] w-full xs:px-2 md:px-5 xs:rounded-md md:rounded-lg border border-gray-400 outline-none lg:placeholder:text-[1.1vw] md:placeholder:text-[2.1vw] sm:placeholder:text-[2.7vw] xs:placeholder:text-[3vw] focus:border-themeBlue"
                rows={7}
                value={projectDescription2}
                onChange={(e) => setProjectDescription2(e.target.value)}
                required
                placeholder="Enter your project description 2"
              ></textarea>
            </div>

            {/* Project Discription 3*/}

            <div className="flex flex-col gap-1 w-full">
              <label className="lg:text-[1.2vw] md:text-[2.2vw] xs:text-[3.4vw] font-lexend_deca">
                Project Discription*
              </label>
              <textarea
                className="py-[0.8vw] w-full xs:px-2 md:px-5 xs:rounded-md md:rounded-lg border border-gray-400 outline-none lg:placeholder:text-[1.1vw] md:placeholder:text-[2.1vw] sm:placeholder:text-[2.7vw] xs:placeholder:text-[3vw] focus:border-themeBlue"
                rows={7}
                value={projectDescription3}
                onChange={(e) => setProjectDescription3(e.target.value)}
                required
                placeholder="Enter your project description 2"
              ></textarea>
            </div>

            <div className="w-full flex md:flex-row xs:flex-col gap-3">
              {/* Tech Stack */}

              <div className="w-full flex flex-col gap-3">
                <div className="flex flex-col gap-1 w-full">
                  <label
                    htmlFor="about-headline"
                    className="lg:text-[1.2vw] md:text-[2.2vw] xs:text-[3.4vw] font-lexend_deca"
                  >
                    Tech Stack*
                  </label>
                  <div className="w-full flex items-center rounded-lg border border-gray-400 overflow-hidden">
                    <select
                      className="lg:py-[0.8vw] md:py-[1.5vw] xs:py-[2vw] w-full px-5  lg:text-[1.2vw] md:text-[2.2vw] xs:text-[3.4vw] border-none outline-none lg:placeholder:text-[1.1vw] md:placeholder:text-[2.1vw] sm:placeholder:text-[2.7vw] xs:placeholder:text-[3vw] focus:border-themeBlue"
                      type="text"
                      value={techStack}
                      onChange={(e) => setTechStack(e.target.value)}
                    >
                      {/* Step 2: Map function ka istemal karein */}
                      {technologies.map((tech, index) => (
                        <option
                          className="lg:text-[1.2vw] md:text-[2.2vw] xs:text-[3.4vw]"
                          key={index}
                          disabled={techStacks.find((item) =>
                            item === tech ? true : false
                          )}
                          value={tech}
                        >
                          {tech}
                        </option>
                      ))}
                    </select>
                    <span
                      onClick={addTechStack}
                      className="bg-themeBlue rounded-r-lg p-3 cursor-pointer text-white lg:text-[1.2vw] md:text-[2.2vw] xs:text-[3.4vw] font-lexend_deca"
                    >
                      Add
                    </span>
                  </div>
                  <div>
                    {techError ? (
                      <p className="flex lg:text-[1.2vw] md:text-[2.2vw] xs:text-[3.4vw] items-center gap-1 text-red-500">
                        <span>
                          <IoWarning />
                        </span>
                        {techError}
                      </p>
                    ) : (
                      ""
                    )}
                  </div>
                </div>
                <div className="w-full flex flex-wrap gap-2 items-center">
                  {techStacks.length > 0
                    ? techStacks.map((tag, idx) => {
                        return (
                          <div
                            key={idx}
                            className="p-2 border border-gray-400 flex gap-3 items-center rounded-lg"
                          >
                            {tag}
                            <span
                              onClick={() => deleteTechStack(idx)}
                              className="cursor-pointer text-themeBlue"
                            >
                              <RxCross2 />
                            </span>
                          </div>
                        );
                      })
                    : null}
                </div>
              </div>

              {/* Project Type */}

              <div className="flex flex-col gap-1 w-full">
                <label
                  htmlFor="about-headline"
                  className="lg:text-[1.2vw] md:text-[2.2vw] xs:text-[3.4vw] font-lexend_deca"
                >
                  Project Type*
                </label>
                <input
                  className="py-[0.8vw] w-full xs:px-2 md:px-5 xs:rounded-md md:rounded-lg border border-gray-400 outline-none lg:placeholder:text-[1.1vw] md:placeholder:text-[2.1vw] sm:placeholder:text-[2.7vw] xs:placeholder:text-[3vw] focus:border-themeBlue"
                  type="text"
                  value={projectType}
                  onChange={(e) => setProjectType(e.target.value)}
                  required
                  placeholder="eg. Website"
                />
              </div>
            </div>

            <div className="w-full flex md:flex-row xs:flex-col gap-3">
              {/* Live Demo Url */}

              <div className="flex flex-col gap-1 w-full">
                <label
                  htmlFor="about-headline"
                  className="lg:text-[1.2vw] md:text-[2.2vw] xs:text-[3.4vw] font-lexend_deca"
                >
                  Live Demo Url*
                </label>
                <input
                  className="py-[0.8vw] w-full xs:px-2 md:px-5 xs:rounded-md md:rounded-lg border border-gray-400 outline-none lg:placeholder:text-[1.1vw] md:placeholder:text-[2.1vw] sm:placeholder:text-[2.7vw] xs:placeholder:text-[3vw] focus:border-themeBlue"
                  type="url"
                  value={projectUrl}
                  onChange={(e) => setProjectUrl(e.target.value)}
                  required
                  placeholder="https://example.com"
                />
              </div>

              {/* Github Demo Url */}

              <div className="flex flex-col gap-1 w-full">
                <label
                  htmlFor="about-headline"
                  className="lg:text-[1.2vw] md:text-[2.2vw] xs:text-[3.4vw] font-lexend_deca"
                >
                  GitHub Demo Url*
                </label>
                <input
                  className="py-[0.8vw] w-full xs:px-2 md:px-5 xs:rounded-md md:rounded-lg border border-gray-400 outline-none lg:placeholder:text-[1.1vw] md:placeholder:text-[2.1vw] sm:placeholder:text-[2.7vw] xs:placeholder:text-[3vw] focus:border-themeBlue"
                  type="url"
                  value={githubUrl}
                  onChange={(e) => setgithubUrl(e.target.value)}
                  required
                  placeholder="https://gitexample.com"
                />
              </div>
            </div>

            <div className="w-full grid xs:grid-cols-1 gap-3 lg:grid-cols-2">
              {/* Project Screenshots */}

              <div className="flex flex-col gap-1 w-full">
                <label className="lg:text-[1.2vw] md:text-[2.2vw] xs:text-[3.4vw] font-lexend_deca">
                  Project Screenshots*
                </label>
                <div className="flex flex-col">
                  <input
                    hidden
                    type="file"
                    name="screenshots"
                    onChange={(e) => {
                      const selectedFiles = Array.from(e.target.files); // Convert FileList to Array
                      setProjetScreenShots(selectedFiles);
                    }}
                    accept="image/*"
                    multiple
                    id="projectScreenShots"
                  />
                  <label
                    htmlFor="projectScreenShots"
                    className="w-full flex cursor-pointer items-center justify-center rounded-md overflow-hidden"
                  >
                    <div className="lg:text-[1.2vw] lg:py-[0.7vw]  md:py-[1.7vw] xs:py-[2.5vw] max-w-[30%] w-[30%] flex items-center justify-center text-white bg-black  md:text-[2.2vw] sm:text-[2.8vw] xs:text-[3.2vw]">
                      <label
                        className="cursor-pointer"
                        htmlFor="projectScreenShots"
                      >
                        Choose File
                      </label>
                    </div>
                    <div className="w-[70%] cursor-pointer lg:py-[0.8vw] overflow-hidden px-[1.1vw] md:py-[1.8vw] xs:py-[2.6vw] bg-gray-200">
                      {projetScreenShots.length > 0
                        ? projetScreenShots.map((items, index) => (
                            <span
                              key={index}
                              className="mr-2 whitespace-nowrap overflow-hidden"
                            >
                              {items.name}
                            </span>
                          ))
                        : "No file choosen"}
                    </div>
                  </label>
                </div>
              </div>

              {/* Project Video */}

              <div className="flex flex-col gap-1 w-full">
                <label
                  htmlFor="project-video"
                  className="lg:text-[1.2vw] md:text-[2.2vw] xs:text-[3.4vw] font-lexend_deca"
                >
                  Project Video*
                </label>
                <div className="flex flex-col">
                  <input
                    hidden
                    type="file"
                    name="video"
                    onChange={(e) => setProjectVideo(e.target.files[0])}
                    accept={videoExtensions}
                    id="projectVideo"
                  />
                  <label
                    htmlFor="projectVideo"
                    className="w-full flex cursor-pointer items-center justify-center rounded-md overflow-hidden"
                  >
                    <div className="lg:text-[1.2vw] lg:py-[0.7vw] md:py-[1.7vw] xs:py-[2.5vw] w-[30%] flex items-center justify-center text-white bg-black  md:text-[2.2vw] sm:text-[2.8vw] xs:text-[3.2vw]">
                      <label className="cursor-pointer" htmlFor="projectVideo">
                        Choose File
                      </label>
                    </div>

                    <label
                      htmlFor="projectVideo"
                      className="w-[70%] cursor-pointer lg:py-[0.8vw] overflow-hidden px-[1.1vw] md:py-[1.8vw] xs:py-[2.6vw] bg-gray-200"
                    >
                      {projectVideo ? (
                        <span className="mr-2 whitespace-nowrap overflow-hidden">
                          {projectVideo.name}
                        </span>
                      ) : (
                        "No file choosen"
                      )}
                    </label>
                  </label>
                </div>
              </div>
            </div>

            {/* Project Poster */}

            <div className="flex flex-col gap-1 w-full">
              <label
                htmlFor="project-screenshots"
                className="lg:text-[1.2vw] md:text-[2.2vw] xs:text-[3.4vw] font-lexend_deca"
              >
                Project Poster*
              </label>
              <div className="flex flex-col">
                <input
                  hidden
                  type="file"
                  name="poster"
                  onChange={(e) => setProjectPoster(e.target.files[0])}
                  accept="image/*"
                  id="projectPoster"
                />
                <label
                  htmlFor="projectPoster"
                  className="w-full flex cursor-pointer items-center justify-center rounded-md overflow-hidden"
                >
                  <div className="lg:text-[1.2vw] lg:py-[0.7vw] md:py-[1.7vw] xs:py-[2.5vw] w-[30%] flex items-center justify-center text-white bg-black  md:text-[2.2vw] sm:text-[2.8vw] xs:text-[3.2vw]">
                    <label className="cursor-pointer" htmlFor="projectPoster">
                      Choose File
                    </label>
                  </div>

                  <label
                    htmlFor="projectPoster"
                    className="w-[80%] cursor-pointer lg:py-[0.8vw] overflow-hidden px-[1.1vw] md:py-[1.8vw] xs:py-[2.6vw] bg-gray-200"
                  >
                    {projectPoster ? (
                      <span className="mr-2 whitespace-nowrap overflow-hidden">
                        {projectPoster.name}
                      </span>
                    ) : (
                      "No file choosen"
                    )}
                  </label>
                </label>
              </div>
            </div>

            {/* Project Tags */}

            <div
              className={`flex w-full flex-col ${
                projectTags.length > 0 ? "gap-3" : "gap-0"
              }`}
            >
              <div className="flex w-full flex-col gap-1">
                <label
                  htmlFor="tags"
                  className="lg:text-[1.2vw] md:text-[2.2vw] xs:text-[3.4vw] font-lexend_deca "
                >
                  Tags*
                </label>
                <div className="w-full flex">
                  <input
                    className="w-full px-5 lg:text-[1.2vw] md:text-[2.2vw] xs:text-[3.4vw] rounded-l-lg border border-gray-400 outline-none lg:placeholder:text-[1.1vw] md:placeholder:text-[2.1vw] sm:placeholder:text-[2.7vw] xs:placeholder:text-[3vw] focus:border-themeBlue"
                    type="text"
                    placeholder="Enter your current location"
                    value={tag}
                    id="tags"
                    onChange={(e) => setTag(e.target.value)}
                  />
                  <span
                    onClick={addProjectTags}
                    className="bg-themeBlue rounded-r-lg p-3 cursor-pointer text-white lg:text-[1.2vw] md:text-[2.2vw] xs:text-[3.4vw] font-lexend_deca"
                  >
                    Add
                  </span>
                </div>
                <div>
                  {proError ? (
                    <p className="flex lg:text-[1.2vw] md:text-[2.2vw] xs:text-[3.4vw] items-center gap-1 text-red-500">
                      <span>
                        <IoWarning />
                      </span>
                      {proError}
                    </p>
                  ) : (
                    ""
                  )}
                </div>
              </div>
              <div className="w-full flex flex-wrap gap-2 items-center">
                {projectTags.length > 0
                  ? projectTags.map((tag, idx) => {
                      return (
                        <div
                          key={idx}
                          className="p-2 border border-gray-400 flex gap-3 items-center rounded-lg"
                        >
                          {tag}
                          <span
                            onClick={() => handleDelete(idx)}
                            className="cursor-pointer text-themeBlue"
                          >
                            <RxCross2 />
                          </span>
                        </div>
                      );
                    })
                  : null}
              </div>
            </div>

            {/* Meta Discription */}

            <div className="flex flex-col gap-1 w-full">
              <label
                htmlFor="metaDisc"
                className="lg:text-[1.2vw] md:text-[2.2vw] xs:text-[3.4vw] font-lexend_deca"
              >
                Meta Discription*
              </label>
              <textarea
                className="py-[0.8vw] w-full xs:px-2 md:px-5 xs:rounded-md md:rounded-lg border border-gray-400 outline-none lg:placeholder:text-[1.1vw] md:placeholder:text-[2.1vw] sm:placeholder:text-[2.7vw] xs:placeholder:text-[3vw] focus:border-themeBlue"
                required
                rows={6}
                value={metaDescription}
                onChange={(e) => setMetaDescription(e.target.value)}
                id="metaDisc"
                placeholder="Enter your meta discription"
              ></textarea>
            </div>

            <div className="flex md:flex-row xs:flex-col gap-3 w-full">
              {/* Project Category */}

              <div className="flex flex-col gap-1 w-full">
                <label
                  htmlFor="about-headline"
                  className="lg:text-[1.2vw] md:text-[2.2vw] xs:text-[3.4vw] font-lexend_deca"
                >
                  Project Category*
                </label>
                <select
                  className="py-[0.8vw] w-full xs:px-2 md:px-5 xs:rounded-md md:rounded-lg border border-gray-400 outline-none lg:placeholder:text-[1.1vw] md:placeholder:text-[2.1vw] sm:placeholder:text-[2.7vw] xs:placeholder:text-[3vw] focus:border-themeBlue"
                  type="text"
                  value={projectCategory}
                  onChange={(e) => setprojectCategory(e.target.value)}
                  required
                >
                  <option value="">Select Category</option>
                  <option
                    className="lg:text-[1.2vw] md:text-[2.2vw] xs:text-[3.4vw]"
                    value="E-Commerce"
                  >
                    E-Commerce
                  </option>
                  <option
                    className="lg:text-[1.2vw] md:text-[2.2vw] xs:text-[3.4vw]"
                    value="Portfolio"
                  >
                    Portfolio
                  </option>
                  <option
                    className="lg:text-[1.2vw] md:text-[2.2vw] xs:text-[3.4vw]"
                    value="Blog"
                  >
                    Blog
                  </option>
                  <option
                    className="lg:text-[1.2vw] md:text-[2.2vw] xs:text-[3.4vw]"
                    value="SaaS"
                  >
                    SaaS
                  </option>
                  <option
                    className="lg:text-[1.2vw] md:text-[2.2vw] xs:text-[3.4vw]"
                    value="Dashboard"
                  >
                    Dashboard
                  </option>
                </select>
              </div>

              {/* SEO Titles */}

              <div className="flex items-center w-full gap-3 flex-col">
                <div className="flex flex-col gap-1 w-full">
                  <label
                    htmlFor="seoTitle"
                    className="lg:text-[1.2vw] md:text-[2.2vw] xs:text-[3.4vw] font-lexend_deca"
                  >
                    Seo Title*
                  </label>
                  <input
                    className="py-[0.8vw] w-full xs:px-2 md:px-5 xs:rounded-md md:rounded-lg border border-gray-400 outline-none lg:placeholder:text-[1.1vw] md:placeholder:text-[2.1vw] sm:placeholder:text-[2.7vw] xs:placeholder:text-[3vw] focus:border-themeBlue"
                    type="text"
                    id="seoTitle"
                    value={seoTitle}
                    onChange={(e) => setseoTitle(e.target.value)}
                    required
                    placeholder="Enter author name of blog"
                  />
                </div>
              </div>
            </div>

            {/* SEO Keywords */}

            <div
              className={`flex w-full flex-col ${
                seoKewords.length > 0 ? "gap-3" : "gap-0"
              }`}
            >
              <div className="flex w-full flex-col gap-1">
                <label className="lg:text-[1.2vw] md:text-[2.2vw] xs:text-[3.4vw] font-lexend_deca ">
                  SEO Keywords*
                </label>
                <div className="w-full flex">
                  <input
                    className="w-full px-5 lg:text-[1.2vw] md:text-[2.2vw] xs:text-[3.4vw] rounded-l-lg border border-gray-400 outline-none lg:placeholder:text-[1.1vw] md:placeholder:text-[2.1vw] sm:placeholder:text-[2.7vw] xs:placeholder:text-[3vw] focus:border-themeBlue"
                    type="text"
                    placeholder="Enter your keyword here"
                    value={keyword}
                    onChange={(e) => setKeyword(e.target.value)}
                  />
                  <span
                    onClick={addSeoKeywords}
                    className="bg-themeBlue rounded-r-lg p-3 cursor-pointer text-white lg:text-[1.2vw] md:text-[2.2vw] xs:text-[3.4vw] font-lexend_deca"
                  >
                    Add
                  </span>
                </div>
                <div>
                  {seoError ? (
                    <p className="flex lg:text-[1.2vw] md:text-[2.2vw] xs:text-[3.4vw] items-center gap-1 text-red-500">
                      <span>
                        <IoWarning />
                      </span>
                      {seoError}
                    </p>
                  ) : (
                    ""
                  )}
                </div>
              </div>
              <div className="w-full flex flex-wrap gap-2 items-center">
                {seoKewords.length > 0
                  ? seoKewords.map((keyword, idx) => {
                      return (
                        <div
                          key={idx}
                          className="p-2 border border-gray-400 flex gap-3 items-center rounded-lg"
                        >
                          {keyword}
                          <span
                            onClick={() => deletSeo(idx)}
                            className="cursor-pointer text-themeBlue"
                          >
                            <RxCross2 />
                          </span>
                        </div>
                      );
                    })
                  : null}
              </div>
            </div>
            <button className="my-8 mr-auto">
              <HireMeBtn text={"Add Project"} />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditProjectFrom;
