import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import DashboardLeft from "../../components/DashboardLeft";
import AdminHeader from "../../components/AdminHeader";
import { useBlogPosts } from "../../../Context/GetBlogs";

const EditBlogs = () => {
  const { slug, id } = useParams();
  const { blogPosts } = useBlogPosts();
  const [SelectedBlogPost, setSelectedBlogPost] = useState({});
  const [tags, setTags] = useState([]);
  const [keywords, setKeywords] = useState([]);
  const publishDate = new Date(SelectedBlogPost.date).toLocaleDateString();
  const backendUrl = import.meta.env.VITE_BACKEND_URL;

  useEffect(() => {
    const blogPost = blogPosts.find(
      (post) => post.slug === slug || post.id === id
    );
    if (blogPost) {
      setSelectedBlogPost(blogPost);
    }
  }, [blogPosts, slug, id]);

  console.log(SelectedBlogPost);
  useEffect(() => {
    if (SelectedBlogPost.tags) {
      const tags = SelectedBlogPost.tags.toString().split(",");
      setTags(tags);
    }
    if (SelectedBlogPost.seoKeywords) {
      const keywords = SelectedBlogPost.seoKeywords.toString().split(",");
      setKeywords(keywords);
    }
  }, [SelectedBlogPost.tags, SelectedBlogPost.seoKeywords]);
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/admin/edit-blogs/blog", { state: SelectedBlogPost });
  };

  return (
    <div className="h-screen w-full overflow-hidden flex md:p-2 gap-2 bg-gray-200">
      <DashboardLeft />
      <div
        id="dashboardRight"
        className="lg:w-[75vw] md:w-[70vw] xs:w-[100%] h-full bg-[#F9FBFF] md:rounded-[50px] overflow-auto"
      >
        <AdminHeader />
        <div className="px-5">
          <h1 className="lg:text-[1.8vw] md:text-[2.8vw] xs:text-[4.5vw] font-semibold  font-lexend_deca pb-3">
            View Blog
          </h1>
          <p className="lg:text-[1.2vw] md:text-[2.2vw] xs:text-[3.4vw] font-jost text-gray-500">
            Your educational journey is a key part of who you are and where
            you're headed. Here, you can view the milestones of your academic
            achievements, showcasing the degrees, institutions, and experiences
            that have shaped your knowledge and skills. Whether it’s your first
            degree or the latest qualification, each step is a building block
            towards your future success. Take a moment to reflect on the hard
            work, dedication, and passion that have fueled your learning path.
          </p>
        </div>
        <div className="py-10 px-5">
          <h2 className="text-2xl font-semibold font-lexend_deca">Blog</h2>
          <div className="max-w-[100%]">
            <div class="relative">
              <div className="w-full grid lg:grid-cols-2 py-[3vw] lg:gap-[1.4vw] md:gap-[2.4vw] xs:gap-[3.8vw]">
                <div className="w-full lg:h-[25vw] md:h-[50vw]">
                  <img
                    className="w-full h-full object-cover rounded-md"
                    src={`${backendUrl}/${SelectedBlogPost.featuredImage}`}
                    alt=""
                  />
                </div>
                <div>
                  <h1 className="lg:text-[2.4vw] md:text-[3.4vw] xs:text-[4.3vw] lg:leading-[2.9vw] md:leading-[3.9vw] xs:leading-[4.8vw] font-semibold font-lexend_deca pb-3">
                    {SelectedBlogPost.title}
                  </h1>
                  <p className="lg:text-[1.2vw] md:text-[2.2vw] xs:text-[3.4vw] font-jost text-gray-500">
                    {SelectedBlogPost.description}
                  </p>
                </div>
              </div>
              <div className="flex w-full justify-between items-center px-[5vw]">
                <div className="flex flex-col text-center">
                  <p className="lg:text-[1.3vw] md:text-[2.3vw] sm:text-[2.9vw] xs:text-[3.9vw] font-semibold  font-lexend_deca">
                    Author Name
                  </p>
                  <p className="lg:text-[1.3vw] md:text-[2.3vw] sm:text-[2.9vw] xs:text-[3.9vw] font-jost text-gray-500">
                    {SelectedBlogPost.author}
                  </p>
                </div>
                <div className="flex flex-col text-center">
                  <p className="lg:text-[1.3vw] md:text-[2.3vw] sm:text-[2.9vw] xs:text-[3.9vw] font-semibold font-lexend_deca">
                    Catagory
                  </p>
                  <p className="lg:text-[1.3vw] md:text-[2.3vw] sm:text-[2.9vw] xs:text-[3.9vw] font-jost text-gray-500">
                    {SelectedBlogPost.category}
                  </p>
                </div>
                <div className="flex flex-col text-center">
                  <p className="lg:text-[1.3vw] md:text-[2.3vw] sm:text-[2.9vw] xs:text-[3.9vw] font-semibold font-lexend_deca">
                    Publish Date
                  </p>
                  <p className="lg:text-[1.2vw] md:text-[2.2vw] xs:text-[3.4vw] font-jost text-gray-500">
                    {publishDate}
                  </p>
                </div>
              </div>
              <div
                className="w-full py-[3vw]"
                dangerouslySetInnerHTML={{ __html: SelectedBlogPost.content }}
              ></div>
              <div className="w-full grid lg:grid-cols-2 gap-[5vw]">
                <div className="flex flex-col gap-5">
                  <p className="lg:text-[1.3vw] md:text-[2.3vw] sm:text-[2.9vw] xs:text-[3.9vw] font-semibold font-lexend_deca">
                    Tags
                  </p>
                  <div className="w-full flex flex-wrap gap-3 items-center">
                    {tags.length > 0
                      ? tags.map((item) => {
                          return (
                            <div className="lg:py-[0.7vw] md:py-[1.5vw] xs:py-[2.5vw] lg:px-[2vw] md:px-[3vw] xs:px-[3.5vw] lg:text-[1.2vw] md:text-[2.2vw] xs:text-[3.4vw] border border-gray-400 flex gap-3 items-center rounded-lg">
                              {item}
                            </div>
                          );
                        })
                      : "No tags found"}
                  </div>
                </div>
                <div className="flex flex-col gap-5">
                  <p className="lg:text-[1.3vw] md:text-[2.3vw] sm:text-[2.9vw] xs:text-[3.9vw] font-semibold font-lexend_deca">
                    SEO Keywords
                  </p>
                  <div className="w-full flex flex-wrap gap-3 items-center">
                    {keywords.length > 0
                      ? keywords.map((item) => {
                          return (
                            <div className="lg:py-[0.7vw] md:py-[1.5vw] xs:py-[2.5vw] lg:px-[2vw] md:px-[3vw] xs:px-[3.5vw] lg:text-[1.2vw] md:text-[2.2vw] xs:text-[3.4vw] border border-gray-400 flex gap-3 items-center rounded-lg">
                              {item}
                            </div>
                          );
                        })
                      : "No keywords found"}
                  </div>
                </div>
              </div>
              <div className="py-[4vw] w-ful">
                <h1 className="lg:text-[2.4vw] md:text-[3.4vw] xs:text-[4.3vw] lg:leading-[2.9vw] md:leading-[3.9vw] xs:leading-[4.8vw] font-semibold font-lexend_deca pb-3">
                  {SelectedBlogPost.seoTitle}
                </h1>
                <p className="lg:text-[1.2vw] md:text-[2.2vw] xs:text-[3.4vw] font-jost text-gray-500">
                  {SelectedBlogPost.metaDescription}
                </p>
              </div>
              <div>
                <p className="lg:text-[1.3vw] md:text-[2.3vw] sm:text-[2.9vw] xs:text-[3.9vw] font-semibold font-lexend_deca">
                  {SelectedBlogPost.allowComments
                    ? "Customer Comments this post"
                    : "Customer does not comments this post"}
                </p>
                <p className="lg:text-[1.3vw] md:text-[2.3vw] sm:text-[2.9vw] xs:text-[3.9vw] font-semibold font-lexend_deca">
                  {SelectedBlogPost.socialMediaSharing
                    ? "This post is shareable!"
                    : "This post is not shareable!"}
                </p>
                <div className="py-[2vw] w-full flex items-center">
                  <span
                    to={`/admin/edit`}
                    onClick={handleNavigate}
                    type="button"
                    class="focus:outline-none text-white cursor-pointer bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-[0.4vw] lg:text-[1.2vw] md:text-[2.2vw] xs:text-[3.4vw] lg:px-[1.5vw] md:px-[2.5vw] xs:px-[3.9vw] py-[0.5vw] me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                  >
                    Edit
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditBlogs;
