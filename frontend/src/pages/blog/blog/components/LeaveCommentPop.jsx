import React, { useEffect, useState } from "react";
import CommentInputAvator from "./CommentInputAvator";
import AllComentsPop from "./AllComentsPop";
import { RxCross2 } from "react-icons/rx";
import { useComments } from "../../../../Context/GetAllBlogComments";

const LeaveCommentPop = ({ setIsCommentOpen, isCommentOpen, blogId }) => {
  const { allBlogComments, setAllBlogComments } = useComments();
  const [logedInUser, setlogedInUser] = useState({});
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("logedInUser"));
    setlogedInUser(user);
  }, []);

  return (
    <div
      className={`w-full min-h-screen ${
        isCommentOpen
          ? "bg-black/70 pointer-events-auto"
          : "pointer-events-none bg-transparent"
      } z-50 overflow-hidden flex items-center transition-all duration-500 justify-center fixed top-0 left-0`}
    >
      <div
        className={`w-[50%] h-[90vh] ${
          isCommentOpen ? "scale-100" : "scale-0"
        } overflow-hidden lg:rounded-[0.7vw] transition-all duration-500 md:rounded-[1.2vw] xs:rounded-[1.8vw] flex flex-col relative p-[2vw] bg-white`}
        style={{ boxShadow: "0 0 10px #e6e6e6" }}
      >
        <div
          onClick={() => setIsCommentOpen(false)}
          className="lg:w-[3vw] md:w-[4vw] xs:w-[5.3vw] lg:h-[3vw] md:h-[4vw] xs:h-[5.3vw] lg:text-[1.4vw] md:text-[2.4vw] xs:text-[3.5vw] bg-white border rounded-full  top-5 flex items-center absolute cursor-pointer justify-center border-gray-700"
        >
          <RxCross2 />
        </div>
        <AllComentsPop
          logedInUser={logedInUser}
          isCommentOpen={isCommentOpen}
          allBlogComments={allBlogComments}
          blogId={blogId}
        />
        <CommentInputAvator
          logedInUser={logedInUser}
          setAllBlogComments={setAllBlogComments}
          blogId={blogId}
        />
      </div>
    </div>
  );
};

export default LeaveCommentPop;
