import React, { useContext, useEffect, useState } from "react";
import ShareLinks from "./ShareLinks";
import DOMPurify from "dompurify";
import { SlLike } from "react-icons/sl";
import { GoComment } from "react-icons/go";
import Button from "../../../../components/Button";
import LeaveCommentPop from "./LeaveCommentPop";
import { useComments } from "../../../../Context/GetAllBlogComments";
import { useMutation } from "react-query";
import axios from "axios";
import { useSocketContext } from "../../../../Context/SocketIO";
import { LikesContext } from "../../../../Context/GetAllBlogLikes";
import { useUserAuth } from "../../../../Context/UserAuthProvider";

const BlogContent = ({ content }) => {
  const { isUserAuthenticated } = useUserAuth();
  const [isCommentOpen, setIsCommentOpen] = useState(false);
  const [like, setLike] = useState(false);
  const { allBlogComments } = useComments();
  const blogId = content._id;
  const [totalCommentsOfThisPost, setTotalCommentsOfThisPost] = useState(0);
  const { socket } = useSocketContext();
  const [selectedCommentId, setSelectedCommentId] = useState("");
  const backendUrl = import.meta.env.VITE_BACKEND_URL;

  const { likes, setLikes } = useContext(LikesContext);

  useEffect(() => {
    if (blogId && allBlogComments) {
      const filteredComments = allBlogComments.filter(
        (comment) => comment.blogId === blogId
      );
      setTotalCommentsOfThisPost(filteredComments.length);
    }
  }, [blogId, allBlogComments]);

  const mutation = useMutation(
    async (likeData) => {
      const response = await axios.post(
        `${backendUrl}/user/like/blogLikes`,
        likeData,
        {
          withCredentials: true,
        }
      );
      return response;
    },
    {
      onSuccess: (data) => {
        setLikes(data.data.updatedBlog.likes);
      },
    }
  );

  useEffect(() => {
    if (isUserAuthenticated || socket) {
      const handleNewCommentEvent = (data) => {
        setLikes(data.likes);
      };
      socket.on("newLikes", handleNewCommentEvent);
      return () => {
        socket.off("newLikes");
      };
    }
  }, [isUserAuthenticated, socket]);

  const addLike = () => {
    if (blogId) {
      mutation.mutate({ blogId, like });
    }
  };

  const getLikeMutation = useMutation(
    async (blogId) => {
      const response = await axios.get(
        `${backendUrl}/user/like/getBlogLikes/${blogId}`,
        {
          withCredentials: true,
        }
      );
      return response;
    },
    {
      onSuccess: (data) => {
        const [likes] = data.data;
        setLikes(likes.likes);
      },
      onError: (error) => {
        console.log(error);
      },
    }
  );

  useEffect(() => {
    if (blogId) {
      getLikeMutation.mutate(blogId);
    }
  }, [blogId]);

  const handleLike = () => {
    setLike(!like);
    addLike();
  };

  useEffect(() => {
    // URL se comment ID extract karen
    const queryParams = new URLSearchParams(location.search);
    const commentId = queryParams.get("commentId");
    console.log(commentId);

    if (commentId) {
      setSelectedCommentId(commentId);
    }
  }, [location]);

  useEffect(() => {
    if (selectedCommentId) {
      const response = axios.put("");

      const commentElement = document.getElementById(
        `comment-${selectedCommentId}`
      );
      setIsCommentOpen(true);
      if (commentElement) {
        commentElement.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [selectedCommentId]);

  return (
    <>
      <div className="bg-[#f9fbff]">
        <div className="flex gap-[5vw]">
          <ShareLinks />
          <div>
            <div
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(content.content),
              }}
            ></div>
            <div className="w-full py-[2vw]">
              <div className="flex gap-2">
                <Button
                  addLike={addLike}
                  setLike={setLike}
                  icon={<SlLike />}
                  text={"Likes"}
                  quantity={likes.length}
                />
                <Button
                  setIsCommentOpen={setIsCommentOpen}
                  icon={<GoComment />}
                  text={"Comments"}
                  quantity={totalCommentsOfThisPost}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <LeaveCommentPop
        blogId={content ? content._id : null}
        isCommentOpen={isCommentOpen}
        selectedCommentId={selectedCommentId}
        setIsCommentOpen={setIsCommentOpen}
      />
    </>
  );
};

export default BlogContent;
