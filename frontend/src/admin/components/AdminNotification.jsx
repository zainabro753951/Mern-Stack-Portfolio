import React, { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { useBlogCommentNotification } from "../../Context/GetAllBlogCommentNoti";
import { useQuery } from "react-query";
import { formatDistanceToNow } from "date-fns";
import axios from "axios";

const AdminNotification = ({ isNotiOpen, NotiRef }) => {
  const { blogCommentNotfi } = useBlogCommentNotification();
  const backendUrl = import.meta.env.VITE_BACKEND_URL;

  const [blogCommentData, setBlogCommentData] = useState([]);
  const navigate = useNavigate();

  // Ek single useQuery hook use karen
  const getAllBlogCommentData = useQuery(
    "getAllBlogCommentData",
    async () => {
      // Sabhi comments ke data ko ek saath fetch karen
      const promises = blogCommentNotfi.map((commentNoti) => {
        if (commentNoti.commentId && commentNoti.userId) {
          return axios.get(
            `${backendUrl}/admin/get_all_blog_comment_data`,
            {
              params: {
                commentId: commentNoti.commentId,
                userId: commentNoti.userId,
              },
              withCredentials: true,
            }
          );
        }
        return null;
      });

      // Sabhi promises ko resolve karen
      const responses = await Promise.all(promises.filter(Boolean));
      return responses.map((response) => response.data);
    },
    {
      enabled: blogCommentNotfi.some(
        (commentNoti) => !!commentNoti.commentId && !!commentNoti.userId
      ),
      retry: 3,
      retryDelay: 1000,
      onSuccess: (data) => {
        setBlogCommentData(data);
      },
      onError: (error) => {
        console.error("Error fetching data:", error);
      },
    }
  );

  const handleNotificationClick = (comment) => {
    const url = `/blog/${comment.blog.slug}/${comment.blog._id}?commentId=${comment.comment}`;

    return navigate(url);
  };

  return (
    <div
      ref={NotiRef}
      className={`absolute flex max-h-[100vw] md:-translate-x-[58.5%]  xs:-translate-x-[45%] flex-col z-40 ${
        isNotiOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }  transition-all duration-300 items-center justify-center`}
    >
      <img
        className="rotate-180 md:translate-y-2 md:block xs:hidden w-[2.5vw]"
        src="/imgs/notification.png"
        alt=""
      />
      <div className="bg-gray-200 md:w-[25vw] flex flex-col gap-3 max-h-[70vh] overflow-x-auto xs:w-[60vw] rounded-md relative z-40 p-3">
        {blogCommentData.length > 0
          ? blogCommentData.map((data) => {
              const createdAt = new Date(data.data.createdAt); // Yeh aapka createdAt timestamp hai
              const timeAgo = formatDistanceToNow(createdAt, {
                addSuffix: true,
              });

              return (
                <div
                  onClick={() =>
                    handleNotificationClick({
                      blog: data.data.blogId,
                      comment: data.data._id,
                    })
                  }
                  id="toast-notification"
                  className="w-full max-w-xs p-4 h-full text-gray-900 bg-white rounded-lg shadow-sm dark:bg-gray-800 dark:text-gray-300"
                  role="alert"
                >
                  <div className="flex items-center mb-3">
                    <span className="mb-1 text-sm font-semibold text-gray-900 dark:text-white">
                      New notification
                    </span>
                  </div>
                  <div className="flex items-center">
                    <div className="relative inline-block shrink-0">
                      <img
                        className="w-12 h-12 rounded-full"
                        src={`${backendUrl}/${data.data.userId.profilePicture}`}
                        alt="Jese Leos image"
                      />
                      <span className="absolute bottom-0 right-0 inline-flex items-center justify-center w-6 h-6 bg-blue-600 rounded-full">
                        <svg
                          className="w-3 h-3 text-white"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 18"
                          fill="currentColor"
                        >
                          <path
                            d="M18 4H16V9C16 10.0609 15.5786 11.0783 14.8284 11.8284C14.0783 12.5786 13.0609 13 12 13H9L6.846 14.615C7.17993 14.8628 7.58418 14.9977 8 15H11.667L15.4 17.8C15.5731 17.9298 15.7836 18 16 18C16.2652 18 16.5196 17.8946 16.7071 17.7071C16.8946 17.5196 17 17.2652 17 17V15H18C18.5304 15 19.0391 14.7893 19.4142 14.4142C19.7893 14.0391 20 13.5304 20 13V6C20 5.46957 19.7893 4.96086 19.4142 4.58579C19.0391 4.21071 18.5304 4 18 4Z"
                            fill="currentColor"
                          />
                          <path
                            d="M12 0H2C1.46957 0 0.960859 0.210714 0.585786 0.585786C0.210714 0.960859 0 1.46957 0 2V9C0 9.53043 0.210714 10.0391 0.585786 10.4142C0.960859 10.7893 1.46957 11 2 11H3V13C3 13.1857 3.05171 13.3678 3.14935 13.5257C3.24698 13.6837 3.38668 13.8114 3.55279 13.8944C3.71889 13.9775 3.90484 14.0126 4.08981 13.996C4.27477 13.9793 4.45143 13.9114 4.6 13.8L8.333 11H12C12.5304 11 13.0391 10.7893 13.4142 10.4142C13.7893 10.0391 14 9.53043 14 9V2C14 1.46957 13.7893 0.960859 13.4142 0.585786C13.0391 0.210714 12.5304 0 12 0Z"
                            fill="currentColor"
                          />
                        </svg>
                        <span className="sr-only">Message icon</span>
                      </span>
                    </div>
                    <div className="ms-3 text-sm font-normal">
                      <div className="text-sm font-semibold text-gray-900 dark:text-white">
                        {data.data.userId.firstName +
                          " " +
                          data.data.userId.lastName}
                      </div>
                      <div className="text-sm font-normal">
                        {data.data.comment}
                      </div>
                      <span className="text-xs font-medium text-blue-600 dark:text-blue-500">
                        {timeAgo}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })
          : ""}
      </div>
    </div>
  );
};

export default AdminNotification;
