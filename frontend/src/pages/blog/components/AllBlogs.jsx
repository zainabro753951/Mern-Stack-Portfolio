import React, { useState } from "react";
import BlogSearchBar from "./BlogSearchBar";
import CategroyFilter from "./CategroyFilter";
import BlogPop from "./BlogPop";

const AllBlogs = ({ blogPosts }) => {
  const [filteredBlogPosts, setFilteredBlogPosts] = useState(null);

  return (
    <div className="bg-[#f9fbff]">
      <div className="md:max-w-[80%] px-3 min-h-screen mx-auto lg:py-[5vw] md:py-[8vw] xs:py-[10vw]">
        <BlogSearchBar
          blogPosts={blogPosts}
          setFilteredBlogPosts={setFilteredBlogPosts}
        />
        <div className="lg:py-[1.6vw] md:py-[2vw] xs:flex-row-reverse md:flex-row xs:py-[2.7vw] flex md:flex-nowrap xs:flex-wrap gap-[5vw]">
          <CategroyFilter />
          <div className="w-full h-screen">
            <BlogPop
              filteredBlogPosts={filteredBlogPosts}
              blogPosts={blogPosts}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllBlogs;
