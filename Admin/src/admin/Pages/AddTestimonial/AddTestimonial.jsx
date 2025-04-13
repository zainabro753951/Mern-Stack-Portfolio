import React, { useEffect, useState } from "react";
import DashboardLeft from "../../components/DashboardLeft";
import AdminHeader from "../../components/AdminHeader";
import HireMeBtn from "../../../components/HireMeBtn";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import { useTestimonial } from "../../../Context/GetTestimonial";

const AddTestimonial = () => {
  const backendUrl = import.meta.env.VITE_BACKEND_URL;
  const { setTestimonialData } = useTestimonial();
  const [name, setName] = useState("");
  const [designation, setDesignation] = useState("");
  const [company, setCompany] = useState("");
  const [rating, setRating] = useState("");
  const [message, setMessage] = useState("");
  const [profileImg, setProfileImg] = useState("");
  const [date, setDate] = useState("");

  const mutation = useMutation({
    mutationFn: (formData) => {
      const response = axios.post(
        `${backendUrl}/admin/add_testimonial`,
        formData,
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

  const handleTestiSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", name);
    formData.append("designation", designation);
    formData.append("company", company);
    formData.append("rating", rating);
    formData.append("message", message);
    formData.append("profileImg", profileImg);
    formData.append("date", date);
    mutation.mutate(formData);
  };

  useEffect(() => {
    if (mutation.isError) {
      toast.error(mutation.error.response.data.message, {
        position: "top-right",
        autoClose: 5000,
        theme: "dark",
        style: { width: "130%" },
      });
    }
  }, [mutation.isError]);

  useEffect(() => {
    if (mutation.isSuccess) {
      setName("");
      setCompany("");
      setDate("");
      setDesignation();
      setProfileImg("");
      setRating("");
      console.log(mutation.data.data);
      setTestimonialData((prev) => [...prev, mutation.data.data]);
      toast.success("Form submitted successfully!", {
        position: "top-right",
        autoClose: 5000,
        theme: "dark",
        style: { width: "130%" },
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
          <h1 className="lg:text-[1.8vw] md:text-[2.8vw] xs:text-[4.5vw] font-semibold font-lexend_deca pb-3">
            Add Testmonial
          </h1>
          <p className="lg:text-[1.2vw] md:text-[2.2vw] xs:text-[3.4vw] font-jost text-gray-500">
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
        <div className="w-full">
          <form
            encType="multipart/form-data"
            onSubmit={handleTestiSubmit}
            className="w-full py-10 lg:text-[1.2vw] md:text-[2.2vw] xs:text-[3.4vw] xs:px-5 md:px-8"
          >
            <div className="grid  gap-4 w-full h-full">
              <div className="flex items-center xs:flex-col md:flex-row w-full gap-3">
                <div className="flex flex-col w-full gap-1">
                  <label
                    htmlFor="about-headline"
                    className="lg:text-[1.2vw] md:text-[2.2vw] xs:text-[3.4vw] font-lexend_deca"
                  >
                    Name
                  </label>
                  <input
                    className="py-[0.8vw] w-full xs:px-2 md:px-5 lg:text-[1.2vw] md:text-[2.2vw] xs:text-[3.4vw] xs:rounded-md md:rounded-lg border border-gray-400 outline-none lg:placeholder:text-[1.1vw] md:placeholder:text-[2.1vw] sm:placeholder:text-[2.7vw] xs:placeholder:text-[3vw] focus:border-themeBlue"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    placeholder="John Deo"
                  />
                </div>
                <div className="flex flex-col w-full gap-1">
                  <label
                    htmlFor="about-headline"
                    className="lg:text-[1.2vw] md:text-[2.2vw] xs:text-[3.4vw] font-lexend_deca"
                  >
                    Designation/Role
                  </label>
                  <input
                    className="py-[0.8vw] w-full xs:px-2 md:px-5 lg:text-[1.2vw] md:text-[2.2vw] xs:text-[3.4vw] xs:rounded-md md:rounded-lg border border-gray-400 outline-none lg:placeholder:text-[1.1vw] md:placeholder:text-[2.1vw] sm:placeholder:text-[2.7vw] xs:placeholder:text-[3vw] focus:border-themeBlue"
                    type="text"
                    value={designation}
                    onChange={(e) => setDesignation(e.target.value)}
                    required
                    placeholder="John Deo"
                  />
                </div>
              </div>
              <div className="flex items-center xs:flex-col gap-3 md:flex-row w-full">
                <div className="flex w-full flex-col gap-1">
                  <label
                    htmlFor="about-headline"
                    className="lg:text-[1.2vw] md:text-[2.2vw] xs:text-[3.4vw] font-lexend_deca"
                  >
                    Company/Organization
                  </label>
                  <input
                    className="py-[0.8vw] w-full xs:px-2 md:px-5 lg:text-[1.2vw] md:text-[2.2vw] xs:text-[3.4vw] xs:rounded-md md:rounded-lg border border-gray-400 outline-none lg:placeholder:text-[1.1vw] md:placeholder:text-[2.1vw] sm:placeholder:text-[2.7vw] xs:placeholder:text-[3vw] focus:border-themeBlue"
                    type="text"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    required
                    placeholder="John Deo"
                  />
                </div>
                <div className="flex w-full flex-col gap-1">
                  <label
                    htmlFor="about-headline"
                    className="lg:text-[1.2vw] md:text-[2.2vw] xs:text-[3.4vw] font-lexend_deca"
                  >
                    Rating
                  </label>
                  <input
                    className="py-[0.8vw] w-full xs:px-2 md:px-5 lg:text-[1.2vw] md:text-[2.2vw] xs:text-[3.4vw] xs:rounded-md md:rounded-lg border border-gray-400 outline-none lg:placeholder:text-[1.1vw] md:placeholder:text-[2.1vw] sm:placeholder:text-[2.7vw] xs:placeholder:text-[3vw] focus:border-themeBlue"
                    type="number"
                    value={rating}
                    onChange={(e) => setRating(e.target.value)}
                    required
                    placeholder="John Deo"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-1 w-full">
                <label className="lg:text-[1.2vw] md:text-[2.2vw] xs:text-[3.4vw] font-lexend_deca">
                  Message*
                </label>
                <textarea
                  className="py-[0.8vw] w-full xs:px-2 md:px-5 xs:rounded-md md:rounded-lg border border-gray-400 outline-none lg:placeholder:text-[1.1vw] md:placeholder:text-[2.1vw] sm:placeholder:text-[2.7vw] xs:placeholder:text-[3vw] focus:border-themeBlue"
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows={6}
                  placeholder="Enter your meta discription"
                ></textarea>
              </div>
              <div className="flex items-center xs:flex-col md:flex-row w-full gap-3">
                <div className="flex flex-col gap-1 w-full">
                  <label className="lg:text-[1.2vw] md:text-[2.2vw] xs:text-[3.4vw] font-lexend_deca">
                    profile Image
                  </label>
                  <div className="flex flex-col">
                    <input
                      hidden
                      type="file"
                      name="profileImg"
                      onChange={(e) => setProfileImg(e.target.files[0])}
                      accept="image/*"
                      id="profileImage"
                    />
                    <label
                      htmlFor="profileImage"
                      className="w-full flex cursor-pointer items-center justify-center rounded-md overflow-hidden"
                    >
                      <div className="lg:text-[1.2vw] lg:py-[0.7vw] md:py-[1.7vw] xs:py-[2.5vw] w-[30%] flex items-center justify-center text-white bg-black  md:text-[2.2vw] sm:text-[2.8vw] xs:text-[3.2vw]">
                        <label
                          className="cursor-pointer"
                          htmlFor="profileImage"
                        >
                          Choose File
                        </label>
                      </div>
                      <label
                        htmlFor="profileImage"
                        className="w-[80%] cursor-pointer lg:py-[0.8vw] px-[1.1vw] md:py-[1.8vw] xs:py-[2.6vw] bg-gray-200"
                      >
                        {profileImg ? profileImg.name : "No file choosen"}
                      </label>
                    </label>
                  </div>
                </div>
                <div className="flex flex-col w-full gap-1">
                  <label
                    htmlFor="about-headline"
                    className="lg:text-[1.2vw] md:text-[2.2vw] xs:text-[3.4vw] font-lexend_deca"
                  >
                    Date
                  </label>
                  <input
                    className="py-[0.8vw] xs:px-2 md:px-5 lg:text-[1.2vw] md:text-[2.2vw] xs:text-[3.4vw] xs:rounded-md md:rounded-lg border border-gray-400 outline-none lg:placeholder:text-[1.1vw] md:placeholder:text-[2.1vw] sm:placeholder:text-[2.7vw] xs:placeholder:text-[3vw] focus:border-themeBlue"
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    required
                    placeholder="John Deo"
                  />
                </div>
              </div>
            </div>
            <div className="py-[3vw]">
              <a>
                <HireMeBtn isLoading={mutation.isLoading} text={"Submit"} />
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddTestimonial;
