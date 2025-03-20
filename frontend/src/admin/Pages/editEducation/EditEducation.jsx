import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DashboardLeft from "../../components/DashboardLeft";
import AdminHeader from "../../components/AdminHeader";
import HireMeBtn from "../../../components/HireMeBtn";
import GetEducation from "../../../Context/GetEducation";
import axios from "axios";
import { useMutation } from "react-query";
import { toast, ToastContainer } from "react-toastify";

const EditEducation = () => {
  let { id } = useParams();
  const { educationData, setEducationData, isLoading, isError, error } =
    GetEducation();
  const [degree, setDegree] = useState("");
  const [fieldOfStudy, setFieldOfStudy] = useState("");
  const [instituteName, setInstituteName] = useState("");
  const [location, setLocation] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [eduStatus, setEduStatus] = useState("");
  const [grade, setGrade] = useState("");
  const [certificate, setCertificate] = useState("");

  useEffect(() => {
    if (educationData) {
      educationData.map((edu) => {
        let startDate = new Date(edu.startDate).toISOString().split("T")[0];
        let endDate = new Date(edu.endDate).toISOString().split("T")[0];
        if (edu._id === id) {
          setDegree(edu.degree);
          setFieldOfStudy(edu.fieldOfStudy);
          setInstituteName(edu.instituteName);
          setLocation(edu.location);
          setStartDate(startDate);
          setEndDate(endDate);
          setEduStatus(edu.eduStatus);
          setGrade(edu.grade);
          setCertificate(edu.certificate);
        }
      });
    }
  }, [educationData]);

  let handleEudcationStatus = (e) => {
    setEduStatus(e.target.value);
  };

  // ========== Create mutation ============
  const mutation = useMutation((editEducation) => {
    const response = axios.put(
      "http://localhost:3000/admin/update_education",
      editEducation,
      {
        withCredentials: true,
      }
    );
    return response;
  });

  let handleEditEducation = (e) => {
    e.preventDefault();
    mutation.mutate({
      eduId: id,
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
      let newObjectOfEducation = mutation.data.data.result;

      setEducationData((prevData) =>
        prevData._id === newObjectOfEducation._id ? newObjectOfEducation : ""
      );
      toast.success("About updated successfully!", {
        position: "top-right",
        autoClose: 5000,
        theme: "dark",
        style: { width: "100%" },
      });
    }
  }, [mutation.isSuccess]);

  return (
    <div className="h-screen w-full overflow-hidden flex p-2 gap-2 bg-gray-200">
      <DashboardLeft />
      <div
        id="dashboardRight"
        className="lg:w-[75vw] md:w-[70vw] xs:w-[100%] h-full bg-[#F9FBFF] rounded-[50px] overflow-auto"
      >
        <AdminHeader />
        <div className="px-5">
          <ToastContainer />
          <h1 className="lg:text-[1.8vw] md:text-[2.8vw] xs:text-[4.5vw] font-semibold font-lexend_deca pb-3">
            Edit Education
          </h1>
          <p className="lg:text-[1.1vw] md:text-[2.1vw] sm:text-[2.7vw] xs:text-[3vw] font-jost text-gray-500">
            On this page, you can add detailed information to introduce yourself
            or provide relevant details about the organization. Begin by
            entering a headline that best represents the purpose or main idea.
            Add your contact details, including the phone number, to make it
            easy for others to reach out. You can also provide a short
            description in the 'About' section to explain who you are, your
            mission, or your business. In the 'Location' field, specify the
            address or place associated with the project or individual. You can
            share your hobbies, personal interests, and passions, along with
            uploading an image to give it a personal touch. Lastly, include your
            educational background to give viewers an insight into your
            qualifications and expertise.
          </p>
        </div>
        <div className="px-5">
          <h2 className="lg:text-[1.8vw] md:text-[2.8vw] xs:text-[4.4vw] font-semibold font-lexend_deca py-5">
            Education
          </h2>
          <form
            onSubmit={handleEditEducation}
            method="post"
            className="flex flex-col pb-10 gap-3"
          >
            <div className="flex md:flex-row xs:flex-col items-center gap-3">
              <div className="flex flex-col gap-1 w-full">
                <label
                  htmlFor="about-headline"
                  className="lg:text-[1.1vw] md:text-[2.1vw] sm:text-[2.7vw] font-lexend_deca"
                >
                  Degree/qualification*
                </label>
                <input
                  className="lg:py-[0.8vw] md:py-[1.5vw] xs:py-[2vw] lg:text-[1.1vw] md:text-[2.1vw] sm:text-[2.7vw] xs:text-[3vw] w-full px-5 rounded-lg border border-gray-400 outline-none focus:border-themeBlue"
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
                  className="lg:text-[1.1vw] md:text-[2.1vw] sm:text-[2.7vw] font-lexend_deca"
                >
                  Field of Study*
                </label>
                <input
                  className="lg:py-[0.8vw] md:py-[1.5vw] xs:py-[2vw] lg:text-[1.1vw] md:text-[2.1vw] sm:text-[2.7vw] xs:text-[3vw] w-full px-5 rounded-lg border border-gray-400 outline-none focus:border-themeBlue"
                  type="text"
                  value={fieldOfStudy}
                  required
                  onChange={(e) => setFieldOfStudy(e.target.value)}
                  placeholder="Enter your field of study"
                />
              </div>
            </div>
            <div className="flex items-center gap-3 md:flex-row xs:flex-col">
              <div className="flex flex-col gap-1 w-full">
                <label
                  htmlFor="about-headline"
                  className="lg:text-[1.1vw] md:text-[2.1vw] sm:text-[2.7vw] font-lexend_deca"
                >
                  Institute Name*
                </label>
                <input
                  className="lg:py-[0.8vw] md:py-[1.5vw] xs:py-[2vw] lg:text-[1.1vw] md:text-[2.1vw] sm:text-[2.7vw] xs:text-[3vw] w-full px-5 rounded-lg border border-gray-400 outline-none focus:border-themeBlue"
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
                  className="lg:text-[1.1vw] md:text-[2.1vw] sm:text-[2.7vw] font-lexend_deca"
                >
                  Location*
                </label>
                <input
                  className="lg:py-[0.8vw] md:py-[1.5vw] xs:py-[2vw] lg:text-[1.1vw] md:text-[2.1vw] sm:text-[2.7vw] xs:text-[3vw] w-full px-5 rounded-lg border border-gray-400 outline-none focus:border-themeBlue"
                  type="text"
                  value={location}
                  required
                  onChange={(e) => setLocation(e.target.value)}
                  placeholder="Enter your curent location"
                />
              </div>
            </div>
            <div className="flex items-center gap-3 md:flex-row xs:flex-col">
              <div className="flex flex-col gap-1 w-full">
                <label
                  htmlFor="about-headline"
                  className="lg:text-[1.1vw] md:text-[2.1vw] sm:text-[2.7vw] font-lexend_deca"
                >
                  Start Date*
                </label>
                <input
                  className="lg:py-[0.8vw] md:py-[1.5vw] xs:py-[2vw] lg:text-[1.1vw] md:text-[2.1vw] sm:text-[2.7vw] xs:text-[3vw] w-full px-5 rounded-lg border border-gray-400 outline-none focus:border-themeBlue"
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
                  className="lg:text-[1.1vw] md:text-[2.1vw] sm:text-[2.7vw] font-lexend_deca"
                >
                  End Date*
                </label>
                <input
                  className="lg:py-[0.8vw] md:py-[1.5vw] xs:py-[2vw] lg:text-[1.1vw] md:text-[2.1vw] sm:text-[2.7vw] xs:text-[3vw] w-full px-5 rounded-lg border border-gray-400 outline-none focus:border-themeBlue"
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
            <div className="flex items-center gap-3 md:flex-row xs:flex-col">
              <div className="flex flex-col gap-1 w-full">
                <label
                  htmlFor="about-headline"
                  className="lg:text-[1.1vw] md:text-[2.1vw] sm:text-[2.7vw] font-lexend_deca"
                >
                  Grade/Percentage*
                </label>
                <input
                  className="lg:py-[0.8vw] md:py-[1.5vw] xs:py-[2vw] lg:text-[1.1vw] md:text-[2.1vw] sm:text-[2.7vw] xs:text-[3vw] w-full px-5 rounded-lg border border-gray-400 outline-none focus:border-themeBlue"
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
                  className="lg:text-[1.1vw] md:text-[2.1vw] sm:text-[2.7vw] font-lexend_deca"
                >
                  Certifications*
                </label>
                <input
                  className="lg:py-[0.8vw] md:py-[1.5vw] xs:py-[2vw] lg:text-[1.1vw] md:text-[2.1vw] sm:text-[2.7vw] xs:text-[3vw] w-full px-5 rounded-lg border border-gray-400 outline-none focus:border-themeBlue"
                  type="text"
                  value={certificate}
                  onChange={(e) => setCertificate(e.target.value)}
                  placeholder="Enter your any relavent certification name"
                />
              </div>
            </div>
            <button className="my-8 mr-auto">
              <HireMeBtn
                isLoading={mutation.isLoading}
                text={"Add Education"}
              />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditEducation;
