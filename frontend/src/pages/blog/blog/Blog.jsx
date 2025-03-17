import React, { useEffect, useState } from "react";
import Header from "../../../components/Header";
import MobileHeader from "../../../components/MobileHeader";
import CustomeCursor from "../../../components/CustomeCursor";
import Hero from "./components/Hero";
import BlogContent from "./components/BlogContent";
import { useParams } from "react-router-dom";
import { useBlogPosts } from "../../../Context/GetBlogs";
import Footer from "../../../components/Footer";

const Blog = () => {
  const { blogSlug, blogId } = useParams();
  const { blogPosts } = useBlogPosts();
  const [activeBlog, setActiveBlog] = useState(null);
  useEffect(() => {
    if (blogPosts) {
      const blog = blogPosts.find(
        (blog) => blog._id === blogId || blog.slug === blogSlug
      );
      setActiveBlog(blog);
    }
  }, [blogPosts]);
  return (
    <>
      <Header />
      <MobileHeader />
      <CustomeCursor />
      <Hero content={activeBlog} />
      <Footer footerText={"Have a Project"} text={"Let's Talk"} />
    </>
  );
};

export default Blog;
