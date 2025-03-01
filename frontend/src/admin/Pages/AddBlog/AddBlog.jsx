import React, { useEffect, useState } from "react";
import DashboardLeft from "../../components/DashboardLeft";
import AdminHeader from "../../components/AdminHeader";
import HireMeBtn from "../../../components/HireMeBtn";
import axios from "axios";
import RichTextEditor from "../../components/RichText";
import { RxCross2 } from "react-icons/rx";
import { IoWarning } from "react-icons/io5";
import { useParams } from "react-router-dom";

const AddBlog = () => {
  const [blogTitle, setBlogTitle] = useState("");
  const [blogContent, setBlogContent] = useState("");
  const [tag, setTag] = useState("");
  const [blogTags, setBlogTags] = useState([]);
  const [slugUrl, setSlugUrl] = useState("");
  const [error, setError] = useState("");

  // ========== generate Slug URL ===========
  useEffect(() => {
    if (blogTitle) {
      const slug = blogTitle.toLowerCase().replace(/\s+/g, "-");
      setSlugUrl(slug);
    }
  }, [blogTitle, setSlugUrl]);

  const addTags = () => {
    if (!tag.trim()) {
      return setError("Please fill the required tags field!");
    }
    const existingTag = blogTags.find(
      (item) => item.toLowerCase() === tag.toLowerCase()
    );
    if (existingTag) {
      setError("This tag already exists");
    } else {
      setBlogTags([...blogTags, tag]);
      setTag("");
    }
  };
  console.log(blogTags);

  const handleDelete = (index) => {
    let deletedHobbies = blogTags.filter((_, i) => i !== index);
    setBlogTags(deletedHobbies);
  };

  let handleEudcationStatus = (e) => {
    setEduStatus(e.target.value);
  };
  //   let handleSubmitEudcation = (e) => {
  //     e.preventDefault();
  //     let resp = axios.post(
  //       "http://localhost:3000/admin/add_education",
  //       {
  //         degree,
  //         fieldOfStudy,
  //         instituteName,
  //         location,
  //         startDate,
  //         endDate,
  //         eduStatus,
  //         grade,
  //         certificate,
  //       },
  //       { withCredentials: true }
  //     );
  //   };
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
            Add Blogs
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
            Blog
          </h2>
          <form
            method="post"
            className="flex flex-col lg:text-[1.1vw] md:text-[2.1vw] sm:text-[2.7vw] xs:text-[3vw] pb-10 gap-3"
          >
            {/* Blog Title */}

            <div className="flex flex-col gap-1 w-full">
              <label className="lg:text-[1.1vw] md:text-[2.1vw] sm:text-[2.7vw] xs:text-[3vw] font-lexend_deca">
                Blog Title*
              </label>
              <input
                className="lg:py-[0.8vw] md:py-[1.5vw] xs:py-[2vw] w-full px-5 rounded-lg border border-gray-400 outline-none lg:placeholder:text-[1.1vw] md:placeholder:text-[2.1vw] sm:placeholder:text-[2.7vw] xs:placeholder:text-[3vw] focus:border-themeBlue"
                type="text"
                value={blogTitle}
                required
                onChange={(e) => setBlogTitle(e.target.value)}
                placeholder="Enter your Blog Title"
              />
            </div>

            {/* Blog Content */}

            <div className="flex flex-col gap-1 w-full">
              <RichTextEditor
                blogContent={blogContent}
                setBlogContent={setBlogContent}
              />
            </div>

            {/* Blog Auther */}

            <div className="flex items-center gap-3 xs:flex-col md:flex-row">
              <div className="flex flex-col gap-1 w-full">
                <label
                  htmlFor="author"
                  className="lg:text-[1.1vw] md:text-[2.1vw] sm:text-[2.7vw] xs:text-[3vw] font-lexend_deca"
                >
                  Author*
                </label>
                <input
                  className="lg:py-[0.8vw] md:py-[1.5vw] xs:py-[2vw] w-full px-5 rounded-lg border border-gray-400 outline-none lg:placeholder:text-[1.1vw] md:placeholder:text-[2.1vw] sm:placeholder:text-[2.7vw] xs:placeholder:text-[3vw] focus:border-themeBlue"
                  type="text"
                  id="author"
                  required
                  placeholder="Enter author name of blog"
                />
              </div>

              {/* Blog Catagory */}

              <div className="flex flex-col gap-1 w-full">
                <label
                  htmlFor="catagory"
                  className="lg:text-[1.1vw] md:text-[2.1vw] sm:text-[2.7vw] xs:text-[3vw] font-lexend_deca"
                >
                  Catagory*
                </label>
                <select
                  className="lg:py-[0.8vw] md:py-[1.5vw] xs:py-[2vw] w-full px-5 rounded-lg border border-gray-400 outline-none lg:placeholder:text-[1.1vw] md:placeholder:text-[2.1vw] sm:placeholder:text-[2.7vw] xs:placeholder:text-[3vw] focus:border-themeBlue"
                  name=""
                  id="catagory"
                >
                  <option value="" disabled>
                    Select any Catagory
                  </option>
                  <option value="Blogging">Blogging</option>
                  <option value="Travel">Travel</option>
                  <option value="Marketing">Marketing</option>
                  <option value="Music">Music</option>
                  <option value="Sports">Sports</option>
                  <option value="Alternative topics">Alternative topics</option>
                  <option value="Business blogs">Business blogs</option>
                  <option value="Exercise">Exercise</option>
                  <option value="Lifestyle">Lifestyle</option>
                  <option value="Movie blogger">Movie blogger</option>
                  <option value="News">News</option>
                  <option value="Political blogger">Political blogger</option>
                  <option value="Tech">Tech</option>
                </select>
              </div>
            </div>

            {/* Blog Date */}

            <div className="flex items-center gap-3 xs:flex-col md:flex-row">
              <div className="flex flex-col gap-1 w-full">
                <label
                  htmlFor="date"
                  className="lg:text-[1.1vw] md:text-[2.1vw] sm:text-[2.7vw] xs:text-[3vw] font-lexend_deca"
                >
                  Publish Date*
                </label>
                <input
                  className="lg:py-[0.8vw] md:py-[1.5vw] xs:py-[2vw] w-full px-5 rounded-lg border border-gray-400 outline-none lg:placeholder:text-[1.1vw] md:placeholder:text-[2.1vw] sm:placeholder:text-[2.7vw] xs:placeholder:text-[3vw] focus:border-themeBlue"
                  type="date"
                  value={blogTitle}
                  required
                  id="date"
                  onChange={(e) => setBlogTitle(e.target.value)}
                  placeholder="Enter publish date"
                />
              </div>

              {/* Blog Tags */}

              <div className="flex w-full flex-col gap-3">
                <div className="flex w-full flex-col gap-1">
                  <label
                    htmlFor="tags"
                    className="lg:text-[1.1vw] md:text-[2.1vw] sm:text-[2.7vw] xs:text-[3vw] font-lexend_deca "
                  >
                    Tags*
                  </label>
                  <div className="w-full flex">
                    <input
                      className="w-full px-5 lg:text-[1.1vw] md:text-[2.1vw] sm:text-[2.7vw] xs:text-[3vw] rounded-l-lg border border-gray-400 outline-none lg:placeholder:text-[1.1vw] md:placeholder:text-[2.1vw] sm:placeholder:text-[2.7vw] xs:placeholder:text-[3vw] focus:border-themeBlue"
                      type="text"
                      placeholder="Enter your current location"
                      value={tag}
                      id="tags"
                      required
                      onChange={(e) => setTag(e.target.value)}
                    />
                    <span
                      onClick={addTags}
                      className="bg-themeBlue rounded-r-lg p-3 cursor-pointer text-white lg:text-[1.1vw] md:text-[2.1vw] sm:text-[2.7vw] xs:text-[3vw] font-lexend_deca"
                    >
                      Add
                    </span>
                  </div>
                  <div>
                    {error ? (
                      <p className="flex lg:text-[1.1vw] md:text-[2.1vw] sm:text-[2.7vw] xs:text-[3vw] items-center gap-1 text-red-500">
                        <span>
                          <IoWarning />
                        </span>
                        {error}
                      </p>
                    ) : (
                      ""
                    )}
                  </div>
                </div>
                <div className="w-full flex flex-wrap gap-2 items-center">
                  {blogTags.length > 0
                    ? blogTags.map((hobby, idx) => {
                        return (
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
                        );
                      })
                    : null}
                </div>
              </div>
            </div>
            <div className="flex items-center gap-3 xs:flex-col md:flex-row">
              {/* Featured Images */}

              <div className="flex flex-col gap-1 w-full">
                <label
                  htmlFor="featuredImage"
                  className="lg:text-[1.1vw] md:text-[2.1vw] sm:text-[2.7vw] xs:text-[3vw] font-lexend_deca"
                >
                  Featured Image*
                </label>
                <input
                  className="w-full rounded-md bg-slate-200 lg:text-[1.1vw] md:text-[2.1vw] sm:text-[2.7vw] xs:text-[3vw]"
                  type="file"
                  accept=".jpg,.png,.jpeg"
                  required
                  id="featuredImage"
                  onChange={(e) => setBlogTitle(e.target.files[0])}
                />
              </div>

              {/* Slug Url */}

              <div className="flex flex-col gap-1 w-full">
                <label
                  htmlFor="Slug Url"
                  className="lg:text-[1.1vw] md:text-[2.1vw] sm:text-[2.7vw] xs:text-[3vw] font-lexend_deca"
                >
                  Slug Url*
                </label>
                <input
                  className="lg:py-[0.8vw] md:py-[1.5vw] xs:py-[2vw] w-full px-5 rounded-lg border border-gray-400 outline-none lg:placeholder:text-[1.1vw] md:placeholder:text-[2.1vw] sm:placeholder:text-[2.7vw] xs:placeholder:text-[3vw] focus:border-themeBlue"
                  type="url"
                  value={slugUrl}
                  required
                  id="date"
                  onChange={(e) => setSlugUrl(e.target.value)}
                  placeholder="Enter publish date"
                />
              </div>
            </div>

            {/* Blog Discription */}

            <div className="flex flex-col gap-1 w-full">
              <label
                htmlFor="blogDisc"
                className="lg:text-[1.1vw] md:text-[2.1vw] sm:text-[2.7vw] xs:text-[3vw] font-lexend_deca"
              >
                Blog Discription*
              </label>
              <textarea
                className="lg:py-[0.8vw] md:py-[1.5vw] xs:py-[2vw] w-full px-5 rounded-lg border border-gray-400 outline-none lg:placeholder:text-[1.1vw] md:placeholder:text-[2.1vw] sm:placeholder:text-[2.7vw] xs:placeholder:text-[3vw] focus:border-themeBlue"
                value={blogTitle}
                required
                rows={6}
                id="blogDisc"
                onChange={(e) => setBlogTitle(e.target.value)}
                placeholder="Enter your meta discription"
              ></textarea>
            </div>

            {/* Meta Discription */}

            <div className="flex flex-col gap-1 w-full">
              <label
                htmlFor="metaDisc"
                className="lg:text-[1.1vw] md:text-[2.1vw] sm:text-[2.7vw] xs:text-[3vw] font-lexend_deca"
              >
                Meta Discription*
              </label>
              <textarea
                className="lg:py-[0.8vw] md:py-[1.5vw] xs:py-[2vw] w-full px-5 rounded-lg border border-gray-400 outline-none lg:placeholder:text-[1.1vw] md:placeholder:text-[2.1vw] sm:placeholder:text-[2.7vw] xs:placeholder:text-[3vw] focus:border-themeBlue"
                value={blogTitle}
                required
                rows={6}
                id="metaDisc"
                onChange={(e) => setBlogTitle(e.target.value)}
                placeholder="Enter your meta discription"
              ></textarea>
            </div>
            <div className="flex flex-col gap-1 w-full">
              <label
                htmlFor="author"
                className="lg:text-[1.1vw] md:text-[2.1vw] sm:text-[2.7vw] xs:text-[3vw] font-lexend_deca"
              >
                Author*
              </label>
              <input
                className="lg:py-[0.8vw] md:py-[1.5vw] xs:py-[2vw] w-full px-5 rounded-lg border border-gray-400 outline-none lg:placeholder:text-[1.1vw] md:placeholder:text-[2.1vw] sm:placeholder:text-[2.7vw] xs:placeholder:text-[3vw] focus:border-themeBlue"
                type="text"
                id="author"
                required
                placeholder="Enter author name of blog"
              />
            </div>
            <div>
              <input
                type="checkbox"
                required
                aria-required="true"
                className="mr-2 rounded-[4px]"
              />
              Allow users to comment on this post
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

export default AddBlog;
