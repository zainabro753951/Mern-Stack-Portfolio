import React, { useEffect, useState } from "react";
import DashboardLeft from "../../components/DashboardLeft.jsx";
import { toast, ToastContainer } from "react-toastify";
import AdminHeader from "../../components/AdminHeader.jsx";
import { useMutation } from "react-query";
import RichTextEditor from "../../components/RichText.jsx";
import HireMeBtn from "../../../components/HireMeBtn.jsx";
import { useLocation } from "react-router-dom";
import { RxCross2 } from "react-icons/rx";
import axios from "axios";
import { useBlogPosts } from "../../../Context/GetBlogs.jsx";

const EditBlogForm = () => {
  const { setBlogPosts } = useBlogPosts();
  const location = useLocation();
  const [blogData, setBlogData] = useState(null);
  useEffect(() => {
    if (location) {
      const SelectedBlogPost = location.state;
      setBlogData(SelectedBlogPost);
    }
  }, [location]);

  const formatedPublishDate = blogData
    ? new Date(blogData.date).toISOString().split("T")[0]
    : "";
  console.log(formatedPublishDate);

  const [blogTitle, setBlogTitle] = useState(blogData ? blogData.title : "");
  const [blogContent, setBlogContent] = useState(
    blogData ? blogData.content : ""
  );
  const [author, setAuthor] = useState(blogData ? blogData.author : "");
  const [catagory, setCatagory] = useState(blogData ? blogData.category : "");
  const [publishDate, setPublishDate] = useState(formatedPublishDate);
  const [tag, setTag] = useState("");
  const [blogTags, setBlogTags] = useState(blogData ? blogData.tags : []);
  const [featuredImage, setFeaturedImage] = useState(
    blogData ? blogData.featuredImage : ""
  );
  const [oldFeaturedImage, setOldFeaturedImage] = useState(
    blogData ? blogData.featuredImage : ""
  );
  const [slugUrl, setSlugUrl] = useState(blogData ? blogData.slug : "");
  const [blogDiscription, setBlogDiscription] = useState(
    blogData ? blogData.description : ""
  );
  const [metaDiscription, setMetaDiscription] = useState(
    blogData ? blogData.metaDescription : ""
  );
  const [seoTitle, setSeoTitle] = useState(blogData ? blogData.seoTitle : "");
  const [seoKeyword, setSeoKeyword] = useState("");
  const [seoKeywords, setSeoKeywords] = useState(
    blogData ? blogData.seoKeywords : []
  );
  const [isUserCommit, setisUserCommit] = useState(false);
  const [isSharing, setIsSharing] = useState(false);
  const [error, setError] = useState("");
  const [keywordError, setKeywordError] = useState("");

  //   =========== inserting Data in useStates to show input fields ===================
  useEffect(() => {
    if (blogData) {
      setBlogTitle(blogData.title);
      setBlogContent(blogData.content);
      setAuthor(blogData.author);
      setCatagory(blogData.category);
      setPublishDate(formatedPublishDate);
      const tags = blogData.tags.toString().split(",");
      setBlogTags(tags);
      setOldFeaturedImage(blogData.featuredImage);
      setFeaturedImage(blogData.featuredImage);
      setMetaDiscription(blogData.metaDescription);
      setBlogDiscription(blogData.description);
      setSeoTitle(blogData.seoTitle);
      const keywords = blogData.seoKeywords.toString().split(",");
      setSeoKeywords(keywords);
      setisUserCommit(blogData.allowComments ? true : false);
      setIsSharing(blogData.socialMediaSharing ? true : false);
    }
  }, [blogData]);

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

  const handleDelete = (index) => {
    let deletedHobbies = blogTags.filter((_, i) => i !== index);
    setBlogTags(deletedHobbies);
  };

  const addKeywords = () => {
    if (!seoKeyword.trim()) {
      return setKeywordError("Please fill the required tags field!");
    }
    const existingKeywords = seoKeywords.find(
      (item) => item.toLowerCase() === seoKeyword.toLowerCase()
    );
    if (existingKeywords) {
      setKeywordError("This tag already exists");
    } else {
      setSeoKeywords([...seoKeywords, seoKeyword]);
      setSeoKeyword("");
    }
  };

  const deleteKeywords = (index) => {
    let deletedKeywords = seoKeywords.filter((_, i) => i !== index);
    setSeoKeywords(deletedKeywords);
  };

  const mutation = useMutation((formData) => {
    const response = axios.put(
      "http://localhost:3000/admin/update_blog",
      formData,
      {
        withCredentials: true,
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    return response;
  });

  const submitBlog = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("blogId", blogData._id);
    formData.append("title", blogTitle);
    formData.append("content", blogContent);
    formData.append("author", author);
    formData.append("date", publishDate);
    formData.append("category", catagory);
    formData.append("tags", blogTags);
    formData.append("featuredImage", featuredImage);
    formData.append("oldFeaturedImage", blogData.featuredImage);
    formData.append("slug", slugUrl);
    formData.append("metaDescription", metaDiscription);
    formData.append("allowComments", isUserCommit);
    formData.append("seoTitle", seoTitle);
    formData.append("seoKeywords", seoKeywords);
    formData.append("description", blogDiscription);
    formData.append("socialMediaSharing", isSharing);
    mutation.mutate(formData);
  };

  useEffect(() => {
    if (mutation.isError) {
      toast.error(
        mutation.error.response
          ? mutation.error.response.data.message
          : mutation.error.message,
        {
          position: "top-right",
          autoClose: 5000,
          theme: "dark",
          style: { width: "130%" },
        }
      );
    }
  }, [mutation.isError]);

  useEffect(() => {
    setFeaturedImage("");
    if (mutation.isSuccess) {
      console.log(mutation.data.data.allBlogs);
      setBlogPosts(mutation.data.data.allBlogs);
      setBlogData(mutation.data.data.updatedBlog);

      toast.success("Blog added successfully!", {
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
          <h1 className="lg:text-[2.4vw] md:text-[3.4vw] xs:text-[5.5vw] font-semibold font-lexend_deca pb-3">
            Update Blog
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
            Blog
          </h2>
          <form
            method="post"
            onSubmit={submitBlog}
            enctype="multipart/form-data"
            className="flex flex-col lg:text-[1.2vw] md:text-[2.2vw] xs:text-[3.4vw] pb-10 gap-3"
          >
            {/* Blog Title */}

            <div className="flex flex-col gap-1 w-full">
              <label className="lg:text-[1.2vw] md:text-[2.2vw] xs:text-[3.4vw] font-lexend_deca">
                Blog Title*
              </label>
              <input
                className="py-[0.8vw] w-full xs:px-2 md:px-5 xs:rounded-md md:rounded-lg border border-gray-400 outline-none lg:placeholder:text-[1.1vw] md:placeholder:text-[2.1vw] sm:placeholder:text-[2.7vw] xs:placeholder:text-[3vw] focus:border-themeBlue"
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
                <label className="lg:text-[1.2vw] md:text-[2.2vw] xs:text-[3.4vw] font-lexend_deca">
                  Author*
                </label>
                <input
                  className="py-[0.8vw] w-full xs:px-2 md:px-5 xs:rounded-md md:rounded-lg border border-gray-400 outline-none lg:placeholder:text-[1.1vw] md:placeholder:text-[2.1vw] sm:placeholder:text-[2.7vw] xs:placeholder:text-[3vw] focus:border-themeBlue"
                  type="text"
                  value={author}
                  onChange={(e) => setAuthor(e.target.value)}
                  required
                  placeholder="Enter author name of blog"
                />
              </div>

              {/* Blog Catagory */}

              <div className="flex flex-col gap-1 w-full">
                <label
                  htmlFor="catagory"
                  className="lg:text-[1.2vw] md:text-[2.2vw] xs:text-[3.4vw] font-lexend_deca"
                >
                  Catagory*
                </label>
                <select
                  className="py-[0.8vw] w-full xs:px-2 md:px-5 xs:rounded-md md:rounded-lg border border-gray-400 outline-none lg:placeholder:text-[1.1vw] md:placeholder:text-[2.1vw] sm:placeholder:text-[2.7vw] xs:placeholder:text-[3vw] focus:border-themeBlue"
                  value={catagory}
                  onChange={(e) => setCatagory(e.target.value)}
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
                <label className="lg:text-[1.2vw] md:text-[2.2vw] xs:text-[3.4vw] font-lexend_deca">
                  Publish Date*
                </label>
                <input
                  className="py-[0.8vw] w-full xs:px-2 md:px-5 xs:rounded-md md:rounded-lg border border-gray-400 outline-none lg:placeholder:text-[1.1vw] md:placeholder:text-[2.1vw] sm:placeholder:text-[2.7vw] xs:placeholder:text-[3vw] focus:border-themeBlue"
                  type="date"
                  required
                  value={publishDate}
                  onChange={(e) => setPublishDate(e.target.value)}
                  placeholder="Enter publish date"
                />
              </div>

              {/* Blog Tags */}

              <div
                className={`flex w-full flex-col ${
                  blogTags.length > 0 ? "gap-3" : "gap-0"
                }`}
              >
                <div className="flex w-full flex-col gap-1">
                  <label
                    htmlFor="tags"
                    className="lg:text-[1.2vw] md:text-[2.2vw] xs:text-[3.4vw] font-lexend_deca "
                  >
                    Tags*
                  </label>
                  <div className="w-full flex items-center">
                    <input
                      className="w-full xs:px-2 py-[0.9vw] md:px-5 lg:text-[1.2vw] md:text-[2.2vw] xs:text-[3.4vw] rounded-l-lg border border-gray-400 outline-none lg:placeholder:text-[1.1vw] md:placeholder:text-[2.1vw] sm:placeholder:text-[2.7vw] xs:placeholder:text-[3vw] focus:border-themeBlue"
                      type="text"
                      placeholder="Enter your current location"
                      value={tag}
                      id="tags"
                      onChange={(e) => setTag(e.target.value)}
                    />
                    <span
                      onClick={addTags}
                      className="bg-themeBlue rounded-r-lg xs:p-2 md:p-3 cursor-pointer text-white lg:text-[1.2vw] md:text-[2.2vw] xs:text-[3.4vw] font-lexend_deca"
                    >
                      Add
                    </span>
                  </div>
                  <div>
                    {error ? (
                      <p className="flex lg:text-[1.2vw] md:text-[2.2vw] xs:text-[3.4vw] items-center gap-1 text-red-500">
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
                <label className="lg:text-[1.2vw] md:text-[2.2vw] xs:text-[3.4vw] font-lexend_deca">
                  Featured Image*
                </label>
                <div className="flex flex-col">
                  <input
                    hidden
                    type="file"
                    id="featuredImage"
                    accept="image/*"
                    name="featuredImage"
                    onChange={(e) => setFeaturedImage(e.target.files[0])}
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
                      className="w-[80%] cursor-pointer lg:py-[0.8vw] px-[1.1vw] md:py-[1.8vw] xs:py-[2.6vw] bg-gray-200"
                    >
                      {featuredImage ? featuredImage.name : "No file choosen"}
                    </label>
                  </label>
                </div>
              </div>

              {/* Slug Url */}

              <div className="flex flex-col gap-1 w-full">
                <label className="lg:text-[1.2vw] md:text-[2.2vw] xs:text-[3.4vw] font-lexend_deca">
                  Slug Url*
                </label>
                <input
                  className="py-[0.8vw] w-full xs:px-2 md:px-5 xs:rounded-md md:rounded-lg border border-gray-400 outline-none lg:placeholder:text-[1.1vw] md:placeholder:text-[2.1vw] sm:placeholder:text-[2.7vw] xs:placeholder:text-[3vw] focus:border-themeBlue"
                  type="text"
                  required
                  id="date"
                  value={slugUrl}
                  onChange={(e) => setSlugUrl(e.target.value)}
                  placeholder="Enter publish date"
                />
              </div>
            </div>

            {/* Blog Discription */}

            <div className="flex flex-col gap-1 w-full">
              <label className="lg:text-[1.2vw] md:text-[2.2vw] xs:text-[3.4vw] font-lexend_deca">
                Blog Discription*
              </label>
              <textarea
                className="py-[0.8vw] w-full xs:px-2 md:px-5 xs:rounded-md md:rounded-lg border border-gray-400 outline-none lg:placeholder:text-[1.1vw] md:placeholder:text-[2.1vw] sm:placeholder:text-[2.7vw] xs:placeholder:text-[3vw] focus:border-themeBlue"
                value={blogDiscription}
                required
                rows={6}
                onChange={(e) => setBlogDiscription(e.target.value)}
                placeholder="Enter your meta discription"
              ></textarea>
            </div>

            {/* Meta Discription */}

            <div className="flex flex-col gap-1 w-full">
              <label className="lg:text-[1.2vw] md:text-[2.2vw] xs:text-[3.4vw] font-lexend_deca">
                Meta Discription*
              </label>
              <textarea
                className="py-[0.8vw] w-full xs:px-2 md:px-5 xs:rounded-md md:rounded-lg border border-gray-400 outline-none lg:placeholder:text-[1.1vw] md:placeholder:text-[2.1vw] sm:placeholder:text-[2.7vw] xs:placeholder:text-[3vw] focus:border-themeBlue"
                value={metaDiscription}
                required
                rows={6}
                onChange={(e) => setMetaDiscription(e.target.value)}
                placeholder="Enter your meta discription"
              ></textarea>
            </div>

            {/* SEO Titles */}

            <div className="flex items-center gap-3 xs:flex-col md:flex-row">
              <div className="flex flex-col gap-1 w-full">
                <label className="lg:text-[1.2vw] md:text-[2.2vw] xs:text-[3.4vw] font-lexend_deca">
                  Seo Title*
                </label>
                <input
                  className="py-[0.8vw] w-full xs:px-2 md:px-5 xs:rounded-md md:rounded-lg border border-gray-400 outline-none lg:placeholder:text-[1.1vw] md:placeholder:text-[2.1vw] sm:placeholder:text-[2.7vw] xs:placeholder:text-[3vw] focus:border-themeBlue"
                  type="text"
                  required
                  value={seoTitle}
                  onChange={(e) => setSeoTitle(e.target.value)}
                  placeholder="Enter author name of blog"
                />
              </div>

              {/* SEO Keywords */}

              <div
                className={`flex w-full flex-col ${
                  blogTags.length > 0 ? "gap-3" : "gap-0"
                }`}
              >
                <div className="flex w-full flex-col gap-1">
                  <label className="lg:text-[1.2vw] md:text-[2.2vw] xs:text-[3.4vw] font-lexend_deca ">
                    SEO Keywords*
                  </label>
                  <div className="w-full flex items-center">
                    <input
                      className="w-full xs:px-2 md:px-5 py-[0.9vw] lg:text-[1.2vw] md:text-[2.2vw] xs:text-[3.4vw] rounded-l-lg border border-gray-400 outline-none lg:placeholder:text-[1.1vw] md:placeholder:text-[2.1vw] sm:placeholder:text-[2.7vw] xs:placeholder:text-[3vw] focus:border-themeBlue"
                      type="text"
                      placeholder="Enter your keyword here"
                      value={seoKeyword}
                      onChange={(e) => setSeoKeyword(e.target.value)}
                    />
                    <span
                      onClick={addKeywords}
                      className="bg-themeBlue rounded-r-lg xs:p-2 md:p-3 cursor-pointer text-white lg:text-[1.2vw] md:text-[2.2vw] xs:text-[3.4vw] font-lexend_deca"
                    >
                      Add
                    </span>
                  </div>
                  <div>
                    {keywordError ? (
                      <p className="flex lg:text-[1.2vw] md:text-[2.2vw] xs:text-[3.4vw] items-center gap-1 text-red-500">
                        <span>
                          <IoWarning />
                        </span>
                        {keywordError}
                      </p>
                    ) : (
                      ""
                    )}
                  </div>
                </div>
                <div className="w-full flex flex-wrap gap-2 items-center">
                  {seoKeywords.length > 0
                    ? seoKeywords.map((keyword, idx) => {
                        return (
                          <div
                            key={idx}
                            className="p-2 border border-gray-400 flex gap-3 items-center rounded-lg"
                          >
                            {keyword}
                            <span
                              onClick={() => deleteKeywords(idx)}
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
            <div>
              <input
                type="checkbox"
                id="isUserCommit"
                checked={isUserCommit}
                aria-required="true"
                onChange={(e) => setisUserCommit(e.target.checked)}
                className="mr-2 rounded-[4px]"
              />
              <label htmlFor="isUserCommit">
                Allow users to comment on this post
              </label>
            </div>
            <div>
              <input
                type="checkbox"
                id="isSharing"
                aria-required="true"
                checked={isSharing}
                onChange={(e) => setIsSharing(e.target.checked)}
                className="mr-2 rounded-[4px]"
              />
              <label htmlFor="isSharing">Allow users to share this post</label>
            </div>
            <button className="my-8 mr-auto">
              <HireMeBtn text={"Update Education"} />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditBlogForm;
