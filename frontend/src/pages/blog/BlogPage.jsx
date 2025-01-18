import React from "react";
import BlogHero from "./components/BlogHero";
import Header from "../../components/Header";
import MobileHeader from "../../components/MobileHeader";
import CustomeCursor from "../../components/CustomeCursor";

const BlogPage = () => {
  return (
    <>
      <Header />
      <MobileHeader />
      <CustomeCursor />
      <BlogHero />
    </>
  );
};

export default BlogPage;
