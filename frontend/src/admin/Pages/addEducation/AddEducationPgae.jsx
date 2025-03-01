import React, { useState } from "react";
import DashboardLeft from "../../components/DashboardLeft";
import AdminHeader from "../../components/AdminHeader";
import HireMeBtn from "../../../components/HireMeBtn";
import axios from "axios";

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
  let handleSubmitEudcation = (e) => {
    e.preventDefault();
    let resp = axios.post(
      "http://localhost:3000/admin/add_education",
      {
        degree,
        fieldOfStudy,
        instituteName,
        location,
        startDate,
        endDate,
        eduStatus,
        grade,
        certificate,
      },
      { withCredentials: true }
    );
  };
  return (
    <div className="h-screen w-full overflow-hidden flex p-2 gap-2 bg-gray-200">
      <DashboardLeft />
      <div
        id="dashboardRight"
        className="lg:w-[75vw] md:w-[70vw] xs:w-[100%] h-full bg-[#F9FBFF] rounded-[50px] overflow-auto"
      >
        <AdminHeader />
        <div className="px-5">
          <h1 className="lg:text-[2.4vw] md:text-[3.4vw] xs:text-[5.5vw] font-semibold font-lexend_deca pb-3">
            Add Education
          </h1>
          <p className="lg:text-[1.1vw] md:text-[2.1vw] sm:text-[2.7vw] xs:text-[3vw] font-jost text-gray-500">
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
            className="flex flex-col lg:text-[1.1vw] md:text-[2.1vw] sm:text-[2.7vw] xs:text-[3vw] pb-10 gap-3"
          >
            <div className="flex items-center gap-3 xs:flex-col md:flex-row">
              <div className="flex flex-col gap-1 w-full">
                <label
                  htmlFor="about-headline"
                  className="lg:text-[1.1vw] md:text-[2.1vw] sm:text-[2.7vw] xs:text-[3vw] font-lexend_deca"
                >
                  Degree/qualification*
                </label>
                <input
                  className="lg:py-[0.8vw] md:py-[1.5vw] xs:py-[2vw] w-full px-5 rounded-lg border border-gray-400 outline-none lg:placeholder:text-[1.1vw] md:placeholder:text-[2.1vw] sm:placeholder:text-[2.7vw] xs:placeholder:text-[3vw] focus:border-themeBlue"
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
                  className="lg:text-[1.1vw] md:text-[2.1vw] sm:text-[2.7vw] xs:text-[3vw] font-lexend_deca"
                >
                  Field of Study*
                </label>
                <input
                  className="lg:py-[0.8vw] md:py-[1.5vw] xs:py-[2vw] w-full px-5 rounded-lg border border-gray-400 outline-none lg:placeholder:text-[1.1vw] md:placeholder:text-[2.1vw] sm:placeholder:text-[2.7vw] xs:placeholder:text-[3vw] focus:border-themeBlue"
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
                  className="lg:text-[1.1vw] md:text-[2.1vw] sm:text-[2.7vw] xs:text-[3vw] font-lexend_deca"
                >
                  Institute Name*
                </label>
                <input
                  className="lg:py-[0.8vw] md:py-[1.5vw] xs:py-[2vw] w-full px-5 rounded-lg border border-gray-400 outline-none lg:placeholder:text-[1.1vw] md:placeholder:text-[2.1vw] sm:placeholder:text-[2.7vw] xs:placeholder:text-[3vw] focus:border-themeBlue"
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
                  className="lg:text-[1.1vw] md:text-[2.1vw] sm:text-[2.7vw] xs:text-[3vw] font-lexend_deca"
                >
                  Location*
                </label>
                <input
                  className="lg:py-[0.8vw] md:py-[1.5vw] xs:py-[2vw] w-full px-5 rounded-lg border border-gray-400 outline-none lg:placeholder:text-[1.1vw] md:placeholder:text-[2.1vw] sm:placeholder:text-[2.7vw] xs:placeholder:text-[3vw] focus:border-themeBlue"
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
                  className="lg:text-[1.1vw] md:text-[2.1vw] sm:text-[2.7vw] xs:text-[3vw] font-lexend_deca"
                >
                  Start Date*
                </label>
                <input
                  className="lg:py-[0.8vw] md:py-[1.5vw] xs:py-[2vw] w-full px-5 rounded-lg border border-gray-400 outline-none lg:placeholder:text-[1.1vw] md:placeholder:text-[2.1vw] sm:placeholder:text-[2.7vw] xs:placeholder:text-[3vw] focus:border-themeBlue"
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
                  className="lg:text-[1.1vw] md:text-[2.1vw] sm:text-[2.7vw] xs:text-[3vw] font-lexend_deca"
                >
                  End Date*
                </label>
                <input
                  className="lg:py-[0.8vw] md:py-[1.5vw] xs:py-[2vw] w-full px-5 rounded-lg border border-gray-400 outline-none lg:placeholder:text-[1.1vw] md:placeholder:text-[2.1vw] sm:placeholder:text-[2.7vw] xs:placeholder:text-[3vw] focus:border-themeBlue"
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
                <legend class="text-xl font-semibold font-lexend_deca text-gray-700">
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
                  className="lg:text-[1.1vw] md:text-[2.1vw] sm:text-[2.7vw] xs:text-[3vw] font-lexend_deca"
                >
                  Grade/Percentage*
                </label>
                <input
                  className="lg:py-[0.8vw] md:py-[1.5vw] xs:py-[2vw] w-full px-5 rounded-lg border border-gray-400 outline-none lg:placeholder:text-[1.1vw] md:placeholder:text-[2.1vw] sm:placeholder:text-[2.7vw] xs:placeholder:text-[3vw] focus:border-themeBlue"
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
                  className="lg:text-[1.1vw] md:text-[2.1vw] sm:text-[2.7vw] xs:text-[3vw] font-lexend_deca"
                >
                  Certifications*
                </label>
                <input
                  className="lg:py-[0.8vw] md:py-[1.5vw] xs:py-[2vw] w-full px-5 rounded-lg border border-gray-400 outline-none lg:placeholder:text-[1.1vw] md:placeholder:text-[2.1vw] sm:placeholder:text-[2.7vw] xs:placeholder:text-[3vw] focus:border-themeBlue"
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
