import axios from "axios";
import React, { createContext, useContext, useEffect, useState } from "react";
import { useQuery } from "react-query";
import { useAdminAuth } from "./AdminAuthProvider";
import { useSocketContext } from "./SocketIO";
import { Howl, Howler } from "howler";
import sound from "../assets/sounds/notification.wav";

export const BlogCommentNotificationContext = createContext();

export const useBlogCommentNotification = () =>
  useContext(BlogCommentNotificationContext);

export const GetAllBlogCommentNoti = ({ children }) => {
  const [blogCommentNotfi, setBlogCommentNotfi] = useState([]);
  const [newNotification, setNewNotification] = useState([]);
  const { isAdminAuthenticated } = useAdminAuth();
  const { socket } = useSocketContext();
  const [audioEnabled, setAudioEnabled] = useState(false);
  const [notificationSound, setNotificationSound] = useState(null);

  const getCommentNotificaionts = useQuery(
    "getBlogCommentNotification",
    async () => {
      const response = await axios.get(
        "http://localhost:3000/admin/get_blog_comments_notification",
        {
          withCredentials: true,
        }
      );
      return response.data;
    },
    {
      enabled: isAdminAuthenticated,
      retry: 3,
      staleTime: 10000,
      onSuccess: (data) => {
        setBlogCommentNotfi(data);
      },
      onError: (error) => {
        console.error("Error fetching testimonial data:", error);
      },
    }
  );

  useEffect(() => {
    if (audioEnabled) {
      const soundInstance = new Howl({
        src: [sound],
        preload: true,
        onplayerror: () => {
          console.error(
            "Audio playback failed. Ensure user interaction has occurred."
          );
        },
      });
      setNotificationSound(soundInstance);
    }
  }, [audioEnabled, sound]);

  useEffect(() => {
    if (socket && notificationSound) {
      const handleNewCommentNotification = (notification) => {
        setBlogCommentNotfi((prev) => [...prev, notification]);
        setNewNotification(notification);
        notificationSound.play();
      };

      socket.on("newCommentNotification", handleNewCommentNotification);

      return () => {
        socket.off("newCommentNotification", handleNewCommentNotification);
      };
    }
  }, [socket, notificationSound]);

  useEffect(() => {
    return () => {
      if (notificationSound) {
        notificationSound.unload();
      }
    };
  }, [notificationSound]);

  useEffect(() => {
    if (blogCommentNotfi) {
      setAudioEnabled(true);
    }
  }, [blogCommentNotfi]);

  return (
    <BlogCommentNotificationContext.Provider
      value={{
        blogCommentNotfi,
        setBlogCommentNotfi,
        newNotification,
        enableAudio: () => setAudioEnabled(true),
      }}
    >
      {children}
    </BlogCommentNotificationContext.Provider>
  );
};
