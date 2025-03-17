import React, { useEffect, useState } from "react";
import Button from "../../../../components/Button";
import { IoSend } from "react-icons/io5";
import { useMutation } from "react-query";
import axios from "axios";
import { useUserAuth } from "../../../../Context/UserAuthProvider";
import { useSocketContext } from "../../../../Context/SocketIO";

const CommentInputAvator = ({ blogId, setAllBlogComments, logedInUser }) => {
  const { isUserAuthenticated } = useUserAuth();
  const { socket } = useSocketContext();
  const [comment, setComment] = useState(null);
  const [error, setError] = useState("");

  // Create Mutation of Sending Comments /user/blog/comment
  const mutation = useMutation(
    async (commentData) => {
      try {
        const response = await axios.post(
          "http://localhost:3000/user/blog/comment",
          commentData,
          {
            withCredentials: true,
          }
        );
        return response.data;
      } catch (error) {
        throw error;
      }
    },
    {
      enabled: isUserAuthenticated,
      retry: 3,
      onSuccess: (data) => {
        setComment("");
      },
      onError: (error) => {
        console.error(error);
        setError("Failed to send comment");
      },
      onMutate: () => {
        setError("");
      },
    }
  );

  useEffect(() => {
    if (isUserAuthenticated || socket) {
      const handleNewCommentEvent = (data) => {
        console.log(data);
        setAllBlogComments((prevComments) => [...prevComments, data]);
      };
      socket.on("newBlogComments", handleNewCommentEvent);
      setComment("");
      return () => {
        socket.off("newBlogComments");
      };
    }
  }, [isUserAuthenticated, socket]);

  const handleCommentSend = (e) => {
    e.preventDefault();
    if (!comment) {
      setError("This field is required");
    }

    mutation.mutate({ blogId, comment });
  };

  return (
    <div className="w-full lg:pt-[1.5vw] md:pt-[2vw] flex gap-2 items-center">
      <div className="w-[3vw] h-[3vw] overflow-hidden rounded-full">
        <img
          className="w-full h-full object-cover"
          src={
            logedInUser
              ? `http://localhost:3000${logedInUser.profilePicture}`
              : ""
          }
          alt=""
        />
      </div>
      <form onSubmit={handleCommentSend} className="w-full flex">
        <input
          type="text"
          className="lg:py-[0.7vw] md:py-[1.2vw] xs:py-[1.8vw] w-full rounded-l-full border border-gray-400 lg:text-[1.2vw] px-2 md:text-[2.2vw] xs:text-[3.4vw]"
          value={comment}
          required
          onChange={(e) => setComment(e.target.value)}
          placeholder={error ? error : "Leave your comment..."}
        />
        <button className="h-full lg:py-[0.9vw] md:py-[1.4vw] xs:py-[2vw] px-[1.2vw] bg-slate-300 rounded-r-full cursor-pointer">
          <IoSend className="text-[1.8vw]  text-gray-700" />
        </button>
      </form>
    </div>
  );
};

export default CommentInputAvator;
