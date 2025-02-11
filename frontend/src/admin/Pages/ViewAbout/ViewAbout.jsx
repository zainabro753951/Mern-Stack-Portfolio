import React, { useState, useEffect } from "react";
import DashboardLeft from "../../components/DashboardLeft";
import AdminHeader from "../../components/AdminHeader";
import { IoCameraReverse, IoLocationSharp } from "react-icons/io5";
import { MdAdminPanelSettings, MdEdit } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
import { GetAboutData } from "../../../Context/GetAboutData.jsx";
import { IoWarning } from "react-icons/io5";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";

// Popup component for editing the values

// Main component
const ViewAbout = () => {
  const { aboutData, setAboutData } = GetAboutData();

  const [aboutHeadline, setAboutHeadline] = useState(
    aboutData ? aboutData.aboutHeadline : ""
  );
  const [location, setLocation] = useState(aboutData ? aboutData.location : "");
  const [education, setEducation] = useState(
    aboutData ? aboutData.education : ""
  );
  const [email, setEmail] = useState(aboutData ? aboutData.email : "");
  const [hobbies, setHobbies] = useState("");
  const [phoneNumber, setPhoneNumber] = useState(
    aboutData ? aboutData.phoneNumber : ""
  );
  const [profileImg, setProfileImg] = useState(
    aboutData ? aboutData.profileImg : ""
  );
  const [imagePreview, setImagePreview] = useState(
    profileImg ? `http://localhost:3000/${profileImg}` : ""
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
      setLocation(aboutData.location);
      setEducation(aboutData.education);
      setPhoneNumber(aboutData.phoneNumber);
      setAbout(aboutData.about);
      setEmail(aboutData.email);
      setProfileImg(aboutData.profileImg);
      setImagePreview(`http://localhost:3000/${profileImg}`);
      setAboutHeadline(aboutData.aboutHeadline);
      if (aboutData.hobbies && aboutData.hobbies.length > 0) {
        aboutData.hobbies.filter((item) => {
          setMoreHobbies(item.split(","));
        }); // Correctly initializing hobbies
      }
    }
  }, [aboutData]);

  const handleSave = async (e) => {
    e.preventDefault();
    if (aboutHeadline) {
      try {
        let formData = new FormData();
        formData.append("aboutId", aboutData ? aboutData._id : "");
        formData.append("aboutHeadline", aboutHeadline);
        formData.append("location", location);
        formData.append("education", education);
        formData.append("about", about);
        formData.append("phoneNumber", phoneNumber);
        formData.append("email", email);
        formData.append("profileImg", profileImg);
        formData.append("oldProfileImg", aboutData ? aboutData.profileImg : "");
        formData.append("hobbies", moreHobbies);
        if (moreHobbies.length > 0) {
          const response = await axios.post(
            "/api/admin/update_about",
            formData,
            {
              withCredentials: true,
            }
          );
          if (response.data) {
            setAboutData(response.data);
            toast.success("About data has been updated successfully", {
              theme: "dark",
              autoClose: 3000,
              closeButton: false,
            });
          }
        } else {
          setEmptyHobby("Hobby fields is required!");
        }
      } catch (error) {
        console.error("Error saving about data:", error);
      }
    }
  };

  return (
    <div className="h-screen w-full overflow-hidden flex p-2 gap-2 bg-gray-200">
      <ToastContainer />
      <DashboardLeft />
      <div
        id="dashboardRight"
        className="w-[75%] h-full bg-[#F9FBFF] relative rounded-[50px] overflow-auto"
      >
        <AdminHeader />
        <div className="px-5">
          <h1 className="text-3xl font-semibold font-lexend_deca pb-3">
            View About
          </h1>
          <p className="text-lg font-jost text-gray-500">
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
            className="w-full grid grid-cols-3 items-center gap-3"
          >
            <div className="w-[300px] relative h-[300px]">
              <img
                className="w-full h-full object-cover object-top bg-purple-600 rounded-full"
                src={imagePreview}
                alt="Me"
              />
              <label
                htmlFor="profileImg"
                className="w-10 h-10 flex absolute bottom-10 right-4 cursor-pointer items-center justify-center bg-themePurple shadow-md rounded-full text-white"
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
              <h2 className="text-2xl font-semibold pb-5 font-lexend_deca">
                About Me
              </h2>
              <div className="grid grid-cols-2 gap-5 w-full">
                <div className="flex items-center gap-4 border-y border-gray-200 rounded-2xl p-2 w-full">
                  <div className="flex w-full flex-col font-jost">
                    <h4 className="font-semibold">About Headline</h4>
                    <input
                      type="text"
                      className="w-full bg-transparent border-none"
                      value={aboutHeadline}
                      onChange={(e) => setAboutHeadline(e.target.value)}
                    />
                  </div>
                </div>
                <div className="flex items-center gap-4 border-y border-gray-200 rounded-2xl p-2 w-full">
                  <div className="flex w-full flex-col font-jost">
                    <h4 className="font-semibold">Location</h4>
                    <input
                      type="text"
                      className="w-full bg-transparent border-none"
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                    />
                  </div>
                </div>
                <div className="flex items-center gap-4 border-y border-gray-200 rounded-2xl p-2 w-full">
                  <div className="flex w-full flex-col font-jost">
                    <h4 className="font-semibold">Phone Number</h4>
                    <input
                      type="number"
                      className="w-full bg-transparent border-none"
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                    />
                  </div>
                </div>
                <div className="flex items-center gap-4 border-y border-gray-200 rounded-2xl p-2 w-full">
                  <div className="flex w-full flex-col font-jost">
                    <h4 className="font-semibold">Education</h4>
                    <input
                      type="text"
                      className="w-full bg-transparent border-none"
                      value={education}
                      onChange={(e) => setEducation(e.target.value)}
                    />
                  </div>
                </div>
                <div className="flex items-center gap-4 border-y border-gray-200 rounded-2xl p-2 w-full">
                  <div className="flex w-full flex-col font-jost">
                    <h4 className="font-semibold">About</h4>
                    <textarea
                      className="w-full h-fit bg-transparent border-none"
                      value={about}
                      rows={8}
                      onChange={(e) => setAbout(e.target.value)}
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-1">
                  <label
                    htmlFor="about-headline"
                    className="text-xl font-lexend_deca"
                  >
                    Hobbies
                  </label>
                  <div className="w-full flex">
                    <input
                      className="w-full px-5 rounded-l-lg border border-gray-400 outline-none focus:border-themeBlue"
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
                      className="bg-themeBlue rounded-r-lg p-3 cursor-pointer text-white text-lg font-lexend_deca"
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
                  <div className="w-full flex flex-wrap gap-2 items-center">
                    {moreHobbies.length > 0 &&
                      moreHobbies.map((hobby, idx) => (
                        <div
                          key={idx}
                          className="p-2 border border-gray-400 flex gap-3 items-center rounded-lg"
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
                    <h4 className="font-semibold">Email</h4>
                    <input
                      type="email"
                      className="w-full bg-transparent border-none"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                </div>
              </div>
              <div className="w-full py-10 flex items-center gap-5">
                <button className="flex items-center gap-3 py-3 px-8 rounded-lg bg-themeBlue text-white text-lg font-jost">
                  <span>Save</span>
                  <span className="text-xl">
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
