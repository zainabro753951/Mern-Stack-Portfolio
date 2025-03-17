import React from "react";

const Comments = ({ content, idx, totalObjects, lastComment, logedInUser }) => {
  return (
    <div ref={idx === totalObjects ? lastComment : null} className="flex gap-2">
      <div className="w-[3vw] h-[3vw] overflow-hidden rounded-full">
        <img
          className="w-full h-full object-cover"
          src={
            logedInUser
              ? `http://localhost:3000/${logedInUser.profilePicture}`
              : ""
          }
          alt=""
        />
      </div>
      <div className="p-[0.6vw] bg-gray-300 leading-0 rounded-[0.8vw]">
        <p className="lg:text-[1.3vw] md:text-[2.3vw] xs:text-[3.5vw] font-jost text-gray-800 leading-0">
          {logedInUser
            ? `${logedInUser.firstName} ${logedInUser.lastName}`
            : "name"}
        </p>
        <p className="lg:text-[1.2vw] md:text-[2.2vw] xs:text-[3.4vw] font-jost text-gray-500  leading-0">
          {content.comment}
        </p>
      </div>
    </div>
  );
};

export default Comments;
