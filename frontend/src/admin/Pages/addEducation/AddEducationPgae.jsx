import React, { useEffect, useState } from "react";
import DashboardLeft from "../../components/DashboardLeft";
import AdminHeader from "../../components/AdminHeader";
import HireMeBtn from "../../../components/HireMeBtn";
import axios from "axios";
import { useMutation } from "react-query";
import { toast, ToastContainer } from "react-toastify";

const AddEducationPgae = () => {
  const [degree, setDegree] = useState("");
  const [fieldOfStudy, setFieldOfStudy] = useState("");
  const [instituteName, setInstituteName] = useState("");
  const [location, setLocation] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [eduStatus, setEduStatus] = useState("");
  const [grade, setGrade] = useState("");
  const [certificate, setCertificate] = useState("");
  let handleEudcationStatus = (e) => {
    setEduStatus(e.target.value);
  };

  const Mutation = useMutation((education) => {
    return axios.post(
      "http://localhost:3000/admin/add_education",
      {
        education,
      },
      { withCredentials: true }
    );
  });

  let handleSubmitEudcation = (e) => {
    e.preventDefault();
    Mutation.mutate({
      degree,
      fieldOfStudy,
      instituteName,
      location,
      startDate,
      endDate,
      eduStatus,
      grade,
      certificate,
    });
  };

  useEffect(() => {
    if (Mutation.isError) {
      toast.error(Mutation.error.response.data.message, {
        position: "top-right",
        autoClose: 5000,
        theme: "dark",
        style: { width: "100%" },
      });
    }
  }, [Mutation.isError]);

  useEffect(() => {
    if (Mutation.isSuccess) {
      toast.success("Education form submitted successfully!", {
        position: "top-right",
        autoClose: 5000,
        theme: "dark",
        style: { width: "100%" },
      });
    }
  }, [Mutation.isSuccess]);

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
            Add Education
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
            Education
          </h2>
          <form
            onSubmit={handleSubmitEudcation}
            method="post"
            className="flex flex-col lg:text-[1.2vw] md:text-[2.2vw] xs:text-[3.4vw] pb-10 gap-3"
          >
            <div className="flex items-center gap-3 xs:flex-col md:flex-row">
              <div className="flex flex-col gap-1 w-full">
                <label
                  htmlFor="about-headline"
                  className="lg:text-[1.2vw] md:text-[2.2vw] xs:text-[3.4vw] font-lexend_deca"
                >
                  Degree/qualification*
                </label>
                <input
                  className="py-[0.8vw] w-full xs:px-2 md:px-5 xs:rounded-md md:rounded-lg border border-gray-400 outline-none lg:placeholder:text-[1.1vw] md:placeholder:text-[2.1vw] sm:placeholder:text-[2.7vw] xs:placeholder:text-[3vw] focus:border-themeBlue"
                  type="text"
                  value={degree}
                  required
                  onChange={(e) => setDegree(e.target.value)}
                  placeholder="Enter your degree or qualification"
                />
              </div>
              <div className="flex flex-col gap-1 w-full">
                <label
                  htmlFor="about-headline"
                  className="lg:text-[1.2vw] md:text-[2.2vw] xs:text-[3.4vw] font-lexend_deca"
                >
                  Field of Study*
                </label>
                <input
                  className="py-[0.8vw] w-full xs:px-2 md:px-5 xs:rounded-md md:rounded-lg border border-gray-400 outline-none lg:placeholder:text-[1.1vw] md:placeholder:text-[2.1vw] sm:placeholder:text-[2.7vw] xs:placeholder:text-[3vw] focus:border-themeBlue"
                  type="text"
                  value={fieldOfStudy}
                  required
                  onChange={(e) => setFieldOfStudy(e.target.value)}
                  placeholder="Enter your field of study"
                />
              </div>
            </div>
            <div className="flex items-center gap-3 xs:flex-col md:flex-row">
              <div className="flex flex-col gap-1 w-full">
                <label
                  htmlFor="about-headline"
                  className="lg:text-[1.2vw] md:text-[2.2vw] xs:text-[3.4vw] font-lexend_deca"
                >
                  Institute Name*
                </label>
                <input
                  className="py-[0.8vw] w-full xs:px-2 md:px-5 xs:rounded-md md:rounded-lg border border-gray-400 outline-none lg:placeholder:text-[1.1vw] md:placeholder:text-[2.1vw] sm:placeholder:text-[2.7vw] xs:placeholder:text-[3vw] focus:border-themeBlue"
                  type="text"
                  value={instituteName}
                  required
                  onChange={(e) => setInstituteName(e.target.value)}
                  placeholder="Enter your institute name"
                />
              </div>
              <div className="flex flex-col gap-1 w-full">
                <label
                  htmlFor="about-headline"
                  className="lg:text-[1.2vw] md:text-[2.2vw] xs:text-[3.4vw] font-lexend_deca"
                >
                  Location*
                </label>
                <input
                  className="py-[0.8vw] w-full xs:px-2 md:px-5 xs:rounded-md md:rounded-lg border border-gray-400 outline-none lg:placeholder:text-[1.1vw] md:placeholder:text-[2.1vw] sm:placeholder:text-[2.7vw] xs:placeholder:text-[3vw] focus:border-themeBlue"
                  type="text"
                  value={location}
                  required
                  onChange={(e) => setLocation(e.target.value)}
                  placeholder="Enter your curent location"
                />
              </div>
            </div>
            <div className="flex items-center gap-3 xs:flex-col md:flex-row">
              <div className="flex flex-col gap-1 w-full">
                <label
                  htmlFor="about-headline"
                  className="lg:text-[1.2vw]  md:text-[2.2vw] xs:text-[3.4vw] font-lexend_deca"
                >
                  Start Date*
                </label>
                <input
                  className="lg:py-[0.8vw] md:py-[1.5vw] xs:py-[2vw] lg:text-[1.2vw] md:text-[2.2vw] xs:text-[3.4vw] w-full px-5 rounded-lg border border-gray-400 outline-none lg:placeholder:text-[1.1vw] md:placeholder:text-[2.1vw] sm:placeholder:text-[2.7vw] xs:placeholder:text-[3vw] focus:border-themeBlue"
                  type="date"
                  value={startDate}
                  required
                  onChange={(e) => setStartDate(e.target.value)}
                  placeholder="Enter start date of your degree program"
                />
              </div>
              <div className="flex flex-col gap-1 w-full">
                <label
                  htmlFor="about-headline"
                  className="lg:text-[1.2vw] md:text-[2.2vw] xs:text-[3.4vw] font-lexend_deca"
                >
                  End Date*
                </label>
                <input
                  className="lg:py-[0.8vw] md:py-[1.5vw] xs:py-[2vw] w-full px-5 lg:text-[1.2vw] md:text-[2.2vw] xs:text-[3.4vw] rounded-lg border border-gray-400 outline-none lg:placeholder:text-[1.1vw] md:placeholder:text-[2.1vw] sm:placeholder:text-[2.7vw] xs:placeholder:text-[3vw] focus:border-themeBlue"
                  type="date"
                  value={endDate}
                  required
                  onChange={(e) => setEndDate(e.target.value)}
                  placeholder="Enter end date of your degree program"
                />
              </div>
            </div>
            <div>
              <fieldset class="border border-gray-800 px-4 pb-4 rounded-lg">
                <legend class="lg:text-[1.5vw] md:text-[2.5vw] xs:text-[4vw] font-semibold font-lexend_deca text-gray-700">
                  Education Status
                </legend>
                <div class="flex space-x-6 mt-4">
                  <label class="flex items-center">
                    <input
                      type="radio"
                      name="eduStatus"
                      value="Ongoing"
                      checked={eduStatus === "Ongoing"}
                      onChange={handleEudcationStatus}
                      class="mr-2"
                    />
                    Ongoing
                  </label>
                  <label class="flex items-center">
                    <input
                      type="radio"
                      name="eduStatus"
                      value="Completed"
                      checked={eduStatus === "Completed"}
                      onChange={handleEudcationStatus}
                      class="mr-2"
                    />
                    Completed
                  </label>
                </div>
              </fieldset>
            </div>
            <div className="flex items-center gap-3 xs:flex-col md:flex-row">
              <div className="flex flex-col gap-1 w-full">
                <label
                  htmlFor="about-headline"
                  className="lg:text-[1.2vw] md:text-[2.2vw] xs:text-[3.4vw] font-lexend_deca"
                >
                  Grade/Percentage*
                </label>
                <input
                  className="py-[0.8vw] w-full xs:px-2 md:px-5 xs:rounded-md md:rounded-lg border border-gray-400 outline-none lg:placeholder:text-[1.1vw] md:placeholder:text-[2.1vw] sm:placeholder:text-[2.7vw] xs:placeholder:text-[3vw] focus:border-themeBlue"
                  type="text"
                  value={grade}
                  required
                  onChange={(e) => setGrade(e.target.value)}
                  placeholder="Enter your grade or percentage"
                />
              </div>
              <div className="flex flex-col gap-1 w-full">
                <label
                  htmlFor="about-headline"
                  className="lg:text-[1.2vw] md:text-[2.2vw] xs:text-[3.4vw] font-lexend_deca"
                >
                  Certifications*
                </label>
                <input
                  className="py-[0.8vw] w-full xs:px-2 md:px-5 xs:rounded-md md:rounded-lg border border-gray-400 outline-none lg:placeholder:text-[1.1vw] md:placeholder:text-[2.1vw] sm:placeholder:text-[2.7vw] xs:placeholder:text-[3vw] focus:border-themeBlue"
                  type="text"
                  value={certificate}
                  onChange={(e) => setCertificate(e.target.value)}
                  placeholder="Enter your any relavent certification name"
                />
              </div>
            </div>
            <button className="my-8 mr-auto">
              <HireMeBtn text={"Add Education"} />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddEducationPgae;
