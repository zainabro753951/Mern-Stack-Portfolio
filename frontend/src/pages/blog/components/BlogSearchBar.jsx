import React, { useEffect, useState } from "react";
import { GoSearch } from "react-icons/go";
const BlogSearchBar = ({ blogPosts, setFilteredBlogPosts }) => {
  const [searchQuery, setSearchQuery] = useState("");
  useEffect(() => {
    if (blogPosts) {
      const filtered = blogPosts.filter((post) =>
        Object.values(post).some((value) =>
          String(value).toLowerCase().includes(searchQuery.toLowerCase())
        )
      );
      setFilteredBlogPosts(filtered);
    }
  }, [searchQuery, blogPosts]);

  // Handle search input change
  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className="w-full flex flex-wrap xs:gap-4 md:gap-0 md:flex-row xs:flex-row-reverse items-center justify-between">
      <h2 className="lg:text-[2.7vw] md:text-[3.7vw] xs:text-[4.2vw] lg:leading-[3.2vw] md:leading-[4.2vw] xs:leading-[4.8vw] font-semibold font-lexend_deca">
        Recent Articles
      </h2>
      <div className="flex lg:rounded-[0.4vw] md:rounded-[0.8vw] xs:rounded-[1.5vw] lg:w-[25vw] md:w-[30vw] w-full overflow-hidden">
        <input
          type="search"
          placeholder="Search..."
          value={searchQuery}
          onChange={handleSearch}
          className="lg:py-[1.2vw] md:py-[2.2vw] xs:py-[3.2vw] md:rounded-l-[0.8vw] lg:rounded-l-[0.4vw] xs:rounded-l-[1.5vw] w-full lg:text-[1.3vw]  md:text-[2.3vw] xs:text-[3.6vw] font-jost placeholder:text-gray-500 border-gray-100 border px-5 outline-none focus:border-themeBlue"
        />
        <div className="lg:py-[1.2vw] md:py-[2.2vw] flex items-center justify-center relative xs:py-[3.2vw] bg-themeBlue lg:px-[2.3vw] md:px-[3.3vw] xs:px-[5.5vw]">
          <input type="submit" className="" value="" />
          <GoSearch className="absolute text-white lg:text-[2vw] md:text-[3vw] xs:text-[4.5vw]" />
        </div>
      </div>
    </div>
  );
};

export default BlogSearchBar;
