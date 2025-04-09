import React, { useEffect, useState } from "react";
import { RxCross2 } from "react-icons/rx";
import axios from "axios";
import { IoWarning } from "react-icons/io5";
import HireMeBtn from "../../../../components/HireMeBtn";
import { useMutation } from "@tanstack/react-query";
import { toast, ToastContainer } from "react-toastify";
const AddAboutForm = () => {
  const backendUrl = import.meta.env.VITE_BACKEND_URL;
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [aboutHeadline, setAboutHeadline] = useState("");
  const [location, setLocation] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [education, setEducation] = useState("");
  const [about, setAbout] = useState("");
  const [email, setEmail] = useState("");
  const [profileImg, setProfileImg] = useState(null);
  const [hobbies, setHobbies] = useState("");
  const [emptyHobby, setEmptyHobby] = useState("");
  const [moreHobbies, setMoreHobbies] = useState([]);
  const [linkedIn, setLinkedIn] = useState("");
  const [facebook, setFacebook] = useState("");
  const [instagram, setInstagram] = useState("");
  const [behance, setBehance] = useState("");

  const addHobbies = () => {
    if (hobbies.trim() !== "") {
      setMoreHobbies([...moreHobbies, hobbies]);
      setHobbies("");
    } else {
      setEmptyHobby("Hobby field cannot be empty");
    }
  };

  const handleDelete = (index) => {
    const deletedHobbies = moreHobbies.filter((_, i) => i !== index);
    setMoreHobbies(deletedHobbies);
  };

  const mutation = useMutation({
    mutationFn: (formData) => {
      return axios.post(`${backendUrl}/admin/add_about`, formData, {
        withCredentials: true,
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
    },
  });

  const handleAbout = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("firstName", firstName);
    formData.append("lastName", lastName);
    formData.append("aboutHeadline", aboutHeadline);
    formData.append("location", location);
    formData.append("phoneNumber", phoneNumber);
    formData.append("education", education);
    formData.append("about", about);
    formData.append("email", email);
    formData.append("profileImg", profileImg);
    formData.append("hobbies", moreHobbies);
    formData.append("linkedIn", linkedIn);
    formData.append("facebook", facebook);
    formData.append("instagram", instagram);
    formData.append("behance", behance);
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
      setAboutHeadline("");
      setLocation("");
      setPhoneNumber("");
      setEducation("");
      setAbout("");
      setEmail("");
      setProfileImg(null);
      setMoreHobbies([]);
      setLinkedIn("");
      setFacebook("");
      setInstagram("");
      setBehance("");

      toast.success("Form submitted successfully", {
        position: "top-right",
        autoClose: 5000,
        theme: "dark",
        style: { width: "100%" },
      });
    }
  }, [mutation.isSuccess]);

  return (
    <form
      onSubmit={handleAbout}
      encType="multipart/form-data"
      className="w-full h-fit py-10 xs:px-5 lg:px-8"
    >
      <ToastContainer />
      <div className="grid md:grid-cols-2 xs:grid-cols-1 gap-4 w-full h-full">
        <div className="w-full flex flex-col gap-4">
          <div className="flex flex-col gap-1">
            <label
              htmlFor="firstName"
              className="lg:text-[1.2vw] md:text-[2.2vw] xs:text-[3.4vw] font-lexend_deca"
            >
              First Name
            </label>
            <input
              className="py-[0.8vw] xs:px-2 md:px-5 lg:text-[1.2vw] md:text-[2.2vw] xs:text-[3.4vw] md:rounded-[0.8vw] xs:rounded-[1.8vw] border border-gray-400 outline-none lg:placeholder:text-[1.1vw] md:placeholder:text-[2.1vw] sm:placeholder:text-[2.7vw] xs:placeholder:text-[3vw] focus:border-themeBlue"
              type="text"
              value={firstName}
              required
              onChange={(e) => setFirstName(e.target.value)}
              placeholder="Enter your about headline"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label
              htmlFor="about-headline"
              className="lg:text-[1.2vw] md:text-[2.2vw] xs:text-[3.4vw] font-lexend_deca"
            >
              About Headline
            </label>
            <input
              className="py-[0.8vw] xs:px-2 md:px-5 lg:text-[1.2vw] md:text-[2.2vw] xs:text-[3.4vw] md:rounded-[0.8vw] xs:rounded-[1.8vw] border border-gray-400 outline-none lg:placeholder:text-[1.1vw] md:placeholder:text-[2.1vw] sm:placeholder:text-[2.7vw] xs:placeholder:text-[3vw] focus:border-themeBlue"
              type="text"
              value={aboutHeadline}
              required
              onChange={(e) => setAboutHeadline(e.target.value)}
              placeholder="Enter your about headline"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label
              htmlFor="about-headline"
              className="lg:text-[1.2vw] md:text-[2.2vw] xs:text-[3.4vw] font-lexend_deca "
            >
              Phone Number
            </label>
            <input
              className="py-[0.8vw] xs:px-2 md:px-5 lg:text-[1.2vw] md:text-[2.2vw] xs:text-[3.4vw] md:rounded-[0.8vw] xs:rounded-[1.8vw] border border-gray-400 outline-none lg:placeholder:text-[1.1vw] md:placeholder:text-[2.1vw] sm:placeholder:text-[2.7vw] xs:placeholder:text-[3vw] focus:border-themeBlue"
              type="number"
              value={phoneNumber}
              required
              onChange={(e) => setPhoneNumber(e.target.value)}
              placeholder="Enter your phone number"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label
              htmlFor="about-headline"
              className="lg:text-[1.2vw] md:text-[2.2vw] xs:text-[3.4vw] font-lexend_deca "
            >
              About
            </label>
            <textarea
              className="py-[0.8vw] xs:px-2 md:px-5 lg:text-[1.2vw] md:text-[2.2vw] xs:text-[3.4vw] md:rounded-[0.8vw] xs:rounded-[1.8vw] border border-gray-400 outline-none lg:placeholder:text-[1.1vw] md:placeholder:text-[2.1vw] sm:placeholder:text-[2.7vw] xs:placeholder:text-[3vw] focus:border-themeBlue"
              type="text"
              rows={5}
              value={about}
              required
              onChange={(e) => setAbout(e.target.value)}
              placeholder="Enter your about"
            ></textarea>
          </div>
          <div>
            <label className="block mb-2 lg:text-[1.2vw] md:text-[2.2vw] xs:text-[3.4vw] font-medium text-gray-900 dark:text-white">
              Upload file
            </label>
            <div className="flex flex-col">
              <input
                hidden
                type="file"
                accept="image/*"
                name="profileImg"
                required
                onChange={(e) => setProfileImg(e.target.files[0])}
                id="featuredImage"
              />
              <label
                htmlFor="featuredImage"
                className="w-full flex cursor-pointer items-center justify-center rounded-md overflow-hidden"
              >
                <div className="lg:text-[1.2vw] lg:py-[0.7vw] md:py-[1.7vw] xs:py-[2.5vw] w-[30%] flex items-center justify-center text-white bg-black  md:text-[2.2vw] sm:text-[2.8vw] xs:text-[3.2vw]">
                  <label className="cursor-pointer" htmlFor="featuredImage">
                    Choose File
                  </label>
                </div>

                <label
                  htmlFor="featuredImage"
                  className="w-[80%] lg:text-[1.1vw] md:text-[2.1vw] xs:text-[3.3vw] cursor-pointer lg:py-[0.8vw] px-[1.1vw] md:py-[1.8vw] xs:py-[2.6vw] bg-gray-200"
                >
                  {profileImg ? profileImg.name : "No file choosen"}
                </label>
              </label>
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col gap-4">
          <div className="flex flex-col gap-1">
            <label
              htmlFor="lastName"
              className="lg:text-[1.2vw] md:text-[2.2vw] xs:text-[3.4vw] font-lexend_deca"
            >
              Last Name
            </label>
            <input
              className="py-[0.8vw] xs:px-2 md:px-5 lg:text-[1.2vw] md:text-[2.2vw] xs:text-[3.4vw] md:rounded-[0.8vw] xs:rounded-[1.8vw] border border-gray-400 outline-none lg:placeholder:text-[1.1vw] md:placeholder:text-[2.1vw] sm:placeholder:text-[2.7vw] xs:placeholder:text-[3vw] focus:border-themeBlue"
              type="text"
              value={lastName}
              required
              onChange={(e) => setLastName(e.target.value)}
              placeholder="Enter your about headline"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label
              htmlFor="about-headline"
              className="lg:text-[1.2vw] md:text-[2.2vw] xs:text-[3.4vw] font-lexend_deca "
            >
              Location
            </label>
            <input
              className="py-[0.8vw] xs:px-2 md:px-5 lg:text-[1.2vw] md:text-[2.2vw] xs:text-[3.4vw] md:rounded-[0.8vw] xs:rounded-[1.8vw] border border-gray-400 outline-none lg:placeholder:text-[1.1vw] md:placeholder:text-[2.1vw] sm:placeholder:text-[2.7vw] xs:placeholder:text-[3vw] focus:border-themeBlue"
              type="text"
              value={location}
              required
              onChange={(e) => setLocation(e.target.value)}
              placeholder="Enter your current location"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label
              htmlFor="about-headline"
              className="lg:text-[1.2vw] md:text-[2.2vw] xs:text-[3.4vw] font-lexend_deca "
            >
              Education
            </label>
            <input
              className="py-[0.8vw] xs:px-2 md:px-5 lg:text-[1.2vw] md:text-[2.2vw] xs:text-[3.4vw] md:rounded-[0.8vw] xs:rounded-[1.8vw] border border-gray-400 outline-none lg:placeholder:text-[1.1vw] md:placeholder:text-[2.1vw] sm:placeholder:text-[2.7vw] xs:placeholder:text-[3vw] focus:border-themeBlue"
              type="text"
              value={education}
              required
              onChange={(e) => setEducation(e.target.value)}
              placeholder="Enter your education"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label
              htmlFor="about-headline"
              className="lg:text-[1.2vw] md:text-[2.2vw] xs:text-[3.4vw] font-lexend_deca "
            >
              Hobbies
            </label>
            <div className="w-full flex items-center">
              <input
                className="w-full xs:px-2 md:px-5 py-[0.8vw] lg:text-[1.2vw] md:text-[2.2vw] xs:text-[3.4vw] rounded-l-lg border border-gray-400 outline-none lg:placeholder:text-[1.1vw] md:placeholder:text-[2.1vw] sm:placeholder:text-[2.7vw] xs:placeholder:text-[3vw] focus:border-themeBlue"
                type="text"
                placeholder="Enter your current location"
                value={hobbies}
                onChange={(e) => setHobbies(e.target.value)}
              />
              <span
                onClick={addHobbies}
                className="bg-themeBlue rounded-r-lg xs:p-2 md:p-3 cursor-pointer text-white lg:text-[1.2vw] md:text-[2.2vw] xs:text-[3.4vw] font-lexend_deca"
              >
                Add
              </span>
            </div>
            <div>
              {emptyHobby ? (
                <p className="flex lg:text-[1.2vw] md:text-[2.2vw] xs:text-[3.4vw] items-center gap-1 text-red-500">
                  <span>
                    <IoWarning />
                  </span>
                  {emptyHobby}
                </p>
              ) : (
                ""
              )}
            </div>
          </div>
          <div className="w-full flex flex-wrap gap-2 items-center">
            {moreHobbies.length > 0
              ? moreHobbies.map((hobby, idx) => {
                  return (
                    <div
                      key={idx}
                      className="p-2 border border-gray-400 flex gap-3 items-center md:rounded-[0.8vw] xs:rounded-[1.8vw]"
                    >
                      {hobby}
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
          <div className="flex flex-col gap-1">
            <label
              htmlFor="about-headline"
              className="lg:text-[1.2vw] md:text-[2.2vw] xs:text-[3.4vw] font-lexend_deca "
            >
              Email
            </label>
            <input
              className="py-[0.8vw] xs:px-2 md:px-5 lg:text-[1.2vw] md:text-[2.2vw] xs:text-[3.4vw] md:rounded-[0.8vw] xs:rounded-[1.8vw] border border-gray-400 outline-none lg:placeholder:text-[1.1vw] md:placeholder:text-[2.1vw] sm:placeholder:text-[2.7vw] xs:placeholder:text-[3vw] focus:border-themeBlue"
              type="text"
              value={email}
              required
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
            />
          </div>
        </div>
      </div>
      <div className="w-full lg:py-[1.5vw] md:py-[2.3vw] xs:py-[3vw]">
        <h3 className="lg:text-[1.8vw] md:text-[2.8vw] lg:pb-[1.4vw] md:pb-[2.1vw] xs:pb-[2.6vw] xs:text-[4.5vw] font-semibold font-lexend_deca">
          Social Media Links
        </h3>
        <div className="grid md:grid-cols-2 xs:grid-cols-1 gap-4 w-full h-full">
          <div className="flex flex-col gap-1">
            <label
              htmlFor="about-headline"
              className="lg:text-[1.2vw] md:text-[2.2vw] xs:text-[3.4vw] font-lexend_deca "
            >
              LinkedIn Profile Link
            </label>
            <input
              type="url"
              placeholder="Enter your linkedin profile link"
              value={linkedIn}
              onChange={(e) => setLinkedIn(e.target.value)}
              className="py-[0.8vw] xs:px-2wmd:-full md:rounded-[0.8vw] xs:rounded-[1.8vw]   font-jost placeholder:text-gray-500 border-gray-200 border px-5 lg:text-[1.2vw] md:text-[2.2vw] xs:text-[3.4vw] outline-none lg:placeholder:text-[1.1vw] md:placeholder:text-[2.1vw] sm:placeholder:text-[2.7vw] xs:placeholder:text-[3vw] focus:border-themeBlue"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label
              htmlFor="about-headline"
              className="lg:text-[1.2vw] md:text-[2.2vw] xs:text-[3.4vw] font-lexend_deca "
            >
              Facebook Profile Link
            </label>
            <input
              type="url"
              value={facebook}
              onChange={(e) => setFacebook(e.target.value)}
              placeholder="Enter your facebook profile link"
              className="py-[0.8vw] xs:px-2wmd:-full md:rounded-[0.8vw] xs:rounded-[1.8vw]   font-jost placeholder:text-gray-500 border-gray-200 border px-5 lg:text-[1.2vw] md:text-[2.2vw] xs:text-[3.4vw] outline-none lg:placeholder:text-[1.1vw] md:placeholder:text-[2.1vw] sm:placeholder:text-[2.7vw] xs:placeholder:text-[3vw] focus:border-themeBlue"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label
              htmlFor="about-headline"
              className="lg:text-[1.2vw] md:text-[2.2vw] xs:text-[3.4vw] font-lexend_deca "
            >
              Behance Profile Link
            </label>
            <input
              type="url"
              value={behance}
              onChange={(e) => setBehance(e.target.value)}
              placeholder="Enter your Behance profile link"
              className="py-[0.8vw] xs:px-2wmd:-full md:rounded-[0.8vw] xs:rounded-[1.8vw]   font-jost placeholder:text-gray-500 border-gray-200 border px-5 lg:text-[1.2vw] md:text-[2.2vw] xs:text-[3.4vw] outline-none lg:placeholder:text-[1.1vw] md:placeholder:text-[2.1vw] sm:placeholder:text-[2.7vw] xs:placeholder:text-[3vw] focus:border-themeBlue"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label
              htmlFor="about-headline"
              className="lg:text-[1.2vw] md:text-[2.2vw] xs:text-[3.4vw] font-lexend_deca "
            >
              Instagram Profile Link
            </label>
            <input
              type="url"
              value={instagram}
              onChange={(e) => setInstagram(e.target.value)}
              placeholder="Enter your Instagram profile link"
              className="py-[0.8vw] xs:px-2wmd:-full md:rounded-[0.8vw] xs:rounded-[1.8vw]   font-jost placeholder:text-gray-500 border-gray-200 border px-5 lg:text-[1.2vw] md:text-[2.2vw] xs:text-[3.4vw] outline-none lg:placeholder:text-[1.1vw] md:placeholder:text-[2.1vw] sm:placeholder:text-[2.7vw] xs:placeholder:text-[3vw] focus:border-themeBlue"
            />
          </div>
        </div>
      </div>
      <div>
        <button>
          <HireMeBtn text={"Submit"} isLoading={mutation.isLoading} />
        </button>
      </div>
    </form>
  );
};

export default AddAboutForm;
