import React, { useEffect, useState } from "react";
import BlogHero from "./components/BlogHero";
import Header from "../../components/Header";
import MobileHeader from "../../components/MobileHeader";
import CustomeCursor from "../../components/CustomeCursor";
import BlogComming from "./components/BlogComming";
import AllBlogs from "./components/AllBlogs";
import { useNavigate, useParams } from "react-router-dom";
import Footer from "../../components/Footer";
import { useBlogPosts } from "../../Context/GetBlogs";

const BlogPage = () => {
  const { categoryName } = useParams();
  const { blogPosts, isLoading, isError } = useBlogPosts();
  const [mainBlogs, setMainBlogs] = useState(null);
  const [heroBlog, setHeroBlog] = useState(null);
  console.log(blogPosts);

  useEffect(() => {
    if (categoryName === "all") {
      if (blogPosts) {
        setHeroBlog(blogPosts[0]);
        setMainBlogs(blogPosts);
      }
    } else {
      if (blogPosts) {
        const filteredBlogs = blogPosts.filter(
          (blog) =>
            blog.category.toLowerCase().trim().split(" ").join("-") ===
            categoryName
        );
        console.log(filteredBlogs);
        setHeroBlog(filteredBlogs[0]);

        setMainBlogs(filteredBlogs);
      }
    }
  }, [categoryName, heroBlog]);
  console.log(blogPosts);

  return (
    <>
      <Header />
      <MobileHeader />
      <CustomeCursor />
      {blogPosts.length > 0 || isLoading ? (
        <>
          <BlogHero content={heroBlog} isLoading={isLoading} />
          <AllBlogs blogPosts={mainBlogs} isLoading={isLoading} />
          <Footer footerText={"Have a project"} text={"Lets Talk"} />
        </>
      ) : (
        <BlogComming />
      )}
    </>
  );
};

export default BlogPage;
