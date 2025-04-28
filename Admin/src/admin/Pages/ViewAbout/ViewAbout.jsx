import React, { useState, useEffect } from "react";
import DashboardLeft from "../../components/DashboardLeft";
import AdminHeader from "../../components/AdminHeader";
import { IoCameraReverse, IoLocationSharp } from "react-icons/io5";
import { MdAdminPanelSettings, MdEdit } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
import { useAboutData } from "../../../Context/GetAboutData.jsx";
import { IoWarning } from "react-icons/io5";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import { useMutation } from "@tanstack/react-query";
// Popup component for editing the values

// Main component
const ViewAbout = () => {
  const backendUrl = import.meta.env.VITE_BACKEND_URL;
  const { aboutData, isLoading, setAboutData } = useAboutData();
  const [firstName, setFirstName] = useState(
    aboutData ? aboutData.firstName : ""
  );
  const [lastName, setLastName] = useState(aboutData ? aboutData.lastName : "");
  const [aboutHeadline, setAboutHeadline] = useState(
    aboutData ? aboutData.aboutHeadline : ""
  );
  const [location, setLocation] = useState(aboutData ? aboutData.location : "");
  const [education, setEducation] = useState(
    aboutData ? aboutData.education : ""
  );
  const [email, setEmail] = useState(aboutData ? aboutData.email : "");
  const [facebook, setFacebook] = useState(aboutData ? aboutData.facebook : "");
  const [linkedIn, setLinkedIn] = useState(aboutData ? aboutData.linkedIn : "");
  const [instagram, setInstagram] = useState(
    aboutData ? aboutData.behance : ""
  );
  const [behance, setBehance] = useState(aboutData ? aboutData.instagram : "");
  const [hobbies, setHobbies] = useState("");
  const [phoneNumber, setPhoneNumber] = useState(
    aboutData ? aboutData.phoneNumber : ""
  );
  const [profileImg, setProfileImg] = useState(
    aboutData ? aboutData.profileImg : ""
  );
  const [imagePreview, setImagePreview] = useState(
    aboutData ? `${backendUrl}/${aboutData.profileImg}` : ""
  );

  const [about, setAbout] = useState(aboutData ? aboutData.about : "");
  const [emptyHobby, setEmptyHobby] = useState("");
  const [moreHobbies, setMoreHobbies] = useState([]);

  const addHobbies = () => {
    if (hobbies.length > 0) {
      // Check if hobby already exists before adding
      if (!moreHobbies.includes(hobbies)) {
        setMoreHobbies((prevHobbies) => [...prevHobbies, hobbies]);
        setHobbies("");
        setEmptyHobby(""); // Reset any error message
      } else {
        setEmptyHobby("Hobby already added.");
      }
    } else {
      setEmptyHobby("Hobby field cannot be empty.");
    }
  };

  const handleDelete = (index) => {
    setMoreHobbies(moreHobbies.filter((_, i) => i !== index));
  };

  useEffect(() => {
    if (aboutData) {
      setFirstName(aboutData.firstName);
      setLastName(aboutData.lastName);
      setLocation(aboutData.location);
      setEducation(aboutData.education);
      setPhoneNumber(aboutData.phoneNumber);
      setAbout(aboutData.about);
      setEmail(aboutData.email);
      setFacebook(aboutData.facebook);
      setInstagram(aboutData.instagram);
      setBehance(aboutData.behance);
      setLinkedIn(aboutData.linkedIn);
      setProfileImg(aboutData.profileImg);
      setImagePreview(`${backendUrl}/${aboutData.profileImg}`);
      setAboutHeadline(aboutData.aboutHeadline);
      if (aboutData.hobbies && aboutData.hobbies.length > 0) {
        aboutData.hobbies.filter((item) => {
          setMoreHobbies(item.split(","));
        }); // Correctly initializing hobbies
      }
    }
  }, [aboutData]);

  const mutation = useMutation({
    mutationFn: (formData) => {
      const response = axios.put(`${backendUrl}/admin/update_about`, formData, {
        withCredentials: true,
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      return response;
    },
  });
  const handleSave = (e) => {
    e.preventDefault();
    try {
      let formData = new FormData();
      formData.append("aboutId", aboutData ? aboutData._id : "");
      formData.append("aboutHeadline", aboutHeadline);
      formData.append("location", location);
      formData.append("education", education);
      formData.append("about", about);
      formData.append("phoneNumber", phoneNumber);
      formData.append("email", email);
      formData.append("facebook", facebook);
      formData.append("instagram", instagram);
      formData.append("linkedIn", linkedIn);
      formData.append("behance", behance);
      formData.append("profileImg", profileImg);
      formData.append("oldProfileImg", aboutData ? aboutData.profileImg : "");
      formData.append("hobbies", moreHobbies);
      if (moreHobbies.length > 0) {
        mutation.mutate(formData);
      } else {
        setEmptyHobby("Hobby fields is required!");
      }
    } catch (error) {
      console.error("Error saving about data:", error);
    }
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
      setAboutData(mutation.data.data);
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
        className="lg:w-[75vw] md:w-[70vw] xs:w-[100%] h-full bg-[#F9FBFF] relative md:rounded-[50px] overflow-auto"
      >
        <AdminHeader />
        <div className="px-5">
          <ToastContainer />
          <h1 className="lg:text-[2.4vw] md:text-[3.4vw] xs:text-[5.5vw] font-semibold font-lexend_deca pb-3">
            View About
          </h1>
          <p className="lg:text-[1.1vw] md:text-[2.1vw] sm:text-[2.7vw] xs:text-[3vw] font-jost text-gray-500">
            I continuously embrace new challenges and opportunities throughout
            my professional journey. My focus has always been on enhancing my
            skills and providing innovative solutions.
          </p>
        </div>
        <div className="pt-24 w-full px-4">
          <form
            method="post"
            encType="multipart/form-data"
            onSubmit={handleSave}
            className="w-full xs:flex flex-col md:items-start xs:items-center gap-3"
          >
            <div className="lg:w-[20vw] md:w-[30vw] xs:w-[40vw] relative lg:h-[20vw] md:h-[30vw] xs:h-[40vw]">
              <img
                className="w-full h-full object-cover object-top bg-purple-600 rounded-full"
                src={imagePreview}
                alt="Me"
              />
              <label
                htmlFor="profileImg"
                className="lg:w-[3vw] md:w-[4vw] xs:w-[5.5vw] lg:h-[3vw] lg:text-[1.2vw] md:text-[2.2vw] xs:text-[3.5vw] md:h-[4vw] xs:h-[5.5vw] flex absolute  bottom-[5%] right-[6%]  cursor-pointer items-center justify-center bg-themePurple shadow-md rounded-full text-white"
              >
                <input
                  className="hidden"
                  onChange={(e) => {
                    const file = e.target.files[0];
                    if (file) {
                      setProfileImg(file);
                      setImagePreview(URL.createObjectURL(file)); // Update the image preview
                    }
                  }}
                  type="file"
                  id="profileImg"
                />
                <IoCameraReverse />
              </label>
            </div>
            <div className="w-full col-span-2">
              <h2 className="lg:text-[1.4vw] md:text-[2.7vw] xs:text-[4vw] font-semibold pb-5 font-lexend_deca">
                About Me
              </h2>
              <div className="grid md:grid-cols-2 gap-5 w-full">
                <div className="flex items-center gap-4 border-y border-gray-200 rounded-2xl p-2 w-full">
                  <div className="flex w-full flex-col font-jost">
                    <h4 className="font-semibold lg:text-[1.2vw] md:text-[2.2vw] xs:text-[3.4vw]">
                      First Name
                    </h4>
                    <input
                      type="text"
                      className="w-full bg-transparent lg:text-[1.2vw] md:text-[2.2vw] xs:text-[3.4vw] border-none"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                    />
                  </div>
                </div>
                <div className="flex items-center gap-4 border-y border-gray-200 rounded-2xl p-2 w-full">
                  <div className="flex w-full flex-col font-jost">
                    <h4 className="font-semibold lg:text-[1.2vw] md:text-[2.2vw] xs:text-[3.4vw]">
                      Last Name
                    </h4>
                    <input
                      type="text"
                      className="w-full bg-transparent lg:text-[1.2vw] md:text-[2.2vw] xs:text-[3.4vw] border-none"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                    />
                  </div>
                </div>
                <div className="flex items-center gap-4 border-y border-gray-200 rounded-2xl p-2 w-full">
                  <div className="flex w-full flex-col font-jost">
                    <h4 className="font-semibold lg:text-[1.2vw] md:text-[2.2vw] xs:text-[3.4vw]">
                      About Headline
                    </h4>
                    <input
                      type="text"
                      className="w-full bg-transparent lg:text-[1.2vw] md:text-[2.2vw] xs:text-[3.4vw] border-none"
                      value={aboutHeadline}
                      onChange={(e) => setAboutHeadline(e.target.value)}
                    />
                  </div>
                </div>
                <div className="flex items-center gap-4 border-y border-gray-200 rounded-2xl p-2 w-full">
                  <div className="flex w-full flex-col font-jost">
                    <h4 className="font-semibold lg:text-[1.2vw] md:text-[2.2vw] xs:text-[3.4vw]">
                      Location
                    </h4>
                    <input
                      type="text"
                      className="w-full bg-transparent lg:text-[1.2vw] md:text-[2.2vw] xs:text-[3.4vw] border-none"
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                    />
                  </div>
                </div>
                <div className="flex items-center gap-4 border-y border-gray-200 rounded-2xl p-2 w-full">
                  <div className="flex w-full flex-col font-jost">
                    <h4 className="font-semibold lg:text-[1.2vw] md:text-[2.2vw] xs:text-[3.4vw]">
                      Phone Number
                    </h4>
                    <input
                      type="number"
                      className="w-full bg-transparent lg:text-[1.2vw] md:text-[2.2vw] xs:text-[3.4vw] border-none"
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                    />
                  </div>
                </div>
                <div className="flex items-center gap-4 border-y border-gray-200 rounded-2xl p-2 w-full">
                  <div className="flex w-full flex-col font-jost">
                    <h4 className="font-semibold lg:text-[1.2vw] md:text-[2.2vw] xs:text-[3.4vw]">
                      Education
                    </h4>
                    <input
                      type="text"
                      className="w-full bg-transparent lg:text-[1.2vw] md:text-[2.2vw] xs:text-[3.4vw] border-none"
                      value={education}
                      onChange={(e) => setEducation(e.target.value)}
                    />
                  </div>
                </div>
                <div className="flex items-center gap-4 border-y border-gray-200 rounded-2xl p-2 w-full">
                  <div className="flex w-full flex-col font-jost">
                    <h4 className="font-semibold lg:text-[1.2vw] md:text-[2.2vw] xs:text-[3.4vw]">
                      About
                    </h4>
                    <textarea
                      className="w-full h-fit bg-transparent lg:text-[1.2vw] md:text-[2.2vw] xs:text-[3.4vw] border-none"
                      value={about}
                      rows={8}
                      onChange={(e) => setAbout(e.target.value)}
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-1">
                  <label
                    htmlFor="about-headline"
                    className="lg:text-[1.2vw] md:text-[2.2vw] xs:text-[3.4vw] font-lexend_deca"
                  >
                    Hobbies
                  </label>
                  <div className="w-full flex">
                    <input
                      className="w-full md:px-5 xs:px-2 lg:text-[1.2vw] py-[0.8vw] md:text-[2.2vw] xs:text-[3.4vw] rounded-l-lg border border-gray-400 outline-none focus:border-themeBlue"
                      type="text"
                      placeholder="Enter your current hobby"
                      value={hobbies}
                      onChange={(e) => {
                        setHobbies(e.target.value);
                        setEmptyHobby("");
                      }}
                    />
                    <span
                      onClick={addHobbies}
                      className="bg-themeBlue rounded-r-lg p-3 cursor-pointer text-white lg:text-[1.1vw] md:text-[2.1vw] sm:text-[2.7vw] xs:text-[3vw] font-lexend_deca"
                    >
                      Add
                    </span>
                  </div>
                  <div>
                    {emptyHobby && (
                      <p className="flex items-center gap-1 text-red-500">
                        <span className="text-xl">
                          <IoWarning />
                        </span>
                        {emptyHobby}
                      </p>
                    )}
                  </div>
                  <div className="w-full flex  flex-wrap gap-2 items-center">
                    {moreHobbies.length > 0 &&
                      moreHobbies.map((hobby, idx) => (
                        <div
                          key={idx}
                          className="lg:py-[0.7vw] md:py-[1.5vw] xs:py-[2.5vw] lg:px-[2vw] md:px-[3vw] xs:px-[3.5vw] lg:text-[1.2vw] md:text-[2.2vw] xs:text-[3.4vw] border border-gray-400 flex gap-3 items-center rounded-lg"
                        >
                          {hobby}
                          <span
                            onClick={() => handleDelete(idx)}
                            className="cursor-pointer text-themeBlue"
                          >
                            <RxCross2 />
                          </span>
                        </div>
                      ))}
                  </div>
                </div>
                <div className="flex items-center gap-4 border-y border-gray-200 rounded-2xl p-2 w-full">
                  <div className="flex w-full flex-col font-jost">
                    <h4 className="font-semibold lg:text-[1.2vw] md:text-[2.2vw] xs:text-[3.4vw]">
                      Email
                    </h4>
                    <input
                      type="email"
                      className="w-full bg-transparent lg:text-[1.2vw] md:text-[2.2vw] xs:text-[3.4vw] border-none"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                </div>
                <div className="flex items-center gap-4 border-y border-gray-200 rounded-2xl p-2 w-full">
                  <div className="flex w-full flex-col font-jost">
                    <h4 className="font-semibold lg:text-[1.2vw] md:text-[2.2vw] xs:text-[3.4vw]">
                      Instagram Link
                    </h4>
                    <input
                      type="url"
                      className="w-full bg-transparent lg:text-[1.2vw] md:text-[2.2vw] xs:text-[3.4vw] border-none"
                      value={instagram}
                      onChange={(e) => setInstagram(e.target.value)}
                    />
                  </div>
                </div>
                <div className="flex items-center gap-4 border-y border-gray-200 rounded-2xl p-2 w-full">
                  <div className="flex w-full flex-col font-jost">
                    <h4 className="font-semibold lg:text-[1.2vw] md:text-[2.2vw] xs:text-[3.4vw]">
                      Facebook Link
                    </h4>
                    <input
                      type="url"
                      className="w-full bg-transparent lg:text-[1.2vw] md:text-[2.2vw] xs:text-[3.4vw] border-none"
                      value={facebook}
                      onChange={(e) => setFacebook(e.target.value)}
                    />
                  </div>
                </div>
                <div className="flex items-center gap-4 border-y border-gray-200 rounded-2xl p-2 w-full">
                  <div className="flex w-full flex-col font-jost">
                    <h4 className="font-semibold lg:text-[1.2vw] md:text-[2.2vw] xs:text-[3.4vw]">
                      Behance Link
                    </h4>
                    <input
                      type="url"
                      className="w-full bg-transparent lg:text-[1.2vw] md:text-[2.2vw] xs:text-[3.4vw] border-none"
                      value={behance}
                      onChange={(e) => setBehance(e.target.value)}
                    />
                  </div>
                </div>
                <div className="flex items-center gap-4 border-y border-gray-200 rounded-2xl p-2 w-full">
                  <div className="flex w-full flex-col font-jost">
                    <h4 className="font-semibold lg:text-[1.2vw] md:text-[2.2vw] xs:text-[3.4vw]">
                      LinkedIn Link
                    </h4>
                    <input
                      type="url"
                      className="w-full bg-transparent lg:text-[1.2vw] md:text-[2.2vw] xs:text-[3.4vw] border-none"
                      value={linkedIn}
                      onChange={(e) => setLinkedIn(e.target.value)}
                    />
                  </div>
                </div>
              </div>
              <div className="w-full py-[2vw] flex items-center gap-5">
                <button className="flex items-center gap-3 lg:py-[1vw] md:py-[1.5vw] xs:py-[2.3vw] lg:px-[2vw] md:px-[3.5vw] xs:px-[5.1vw] rounded-lg bg-themeBlue text-white lg:text-[1.1vw] md:text-[2.1vw] sm:text-[2.7vw] xs:text-[3vw] font-jost">
                  <span>Save</span>
                  <span className="lg:text-[1.2vw] md:text-[2.2vw] xs:text-[3.4vw]">
                    <FaRegEdit />
                  </span>
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ViewAbout;
