import React, { useEffect, useRef, useState } from "react";
import Comments from "./Comments";

const AllComentsPop = ({
  allBlogComments,
  isCommentOpen,
  blogId,
  logedInUser,
}) => {
  const [thisBlogComments, setthisBlogComments] = useState([]);
  const lastComment = useRef(null);

  // Filter comments based on the blogId whenever blogId or allBlogComments changes
  useEffect(() => {
    if (blogId && allBlogComments) {
      const filteredComments = allBlogComments.filter(
        (comment) => comment.blogId === blogId
      );
      setthisBlogComments(filteredComments);
    }
  }, [blogId, allBlogComments]);

  // Scroll to the last comment when comments change or when the comment popup opens
  useEffect(() => {
    if (isCommentOpen) {
      // Wait for the next render cycle to ensure all elements are rendered
      setTimeout(() => {
        if (lastComment.current) {
          lastComment.current.scrollIntoView({
            behavior: "smooth",
            block: "end",
          });
        }
      }, 100);
    }
  }, [thisBlogComments, isCommentOpen]); // Watching for comments change and popup open

  return (
    <div className="w-full h-full flex flex-col gap-3 overflow-auto">
      {thisBlogComments.map((comment, idx) => {
        return (
          <Comments
            logedInUser={logedInUser}
            lastComment={lastComment}
            totalObjects={thisBlogComments.length - 1}
            idx={idx}
            key={idx}
            content={comment}
          />
        );
      })}
    </div>
  );
};

export default AllComentsPop;
