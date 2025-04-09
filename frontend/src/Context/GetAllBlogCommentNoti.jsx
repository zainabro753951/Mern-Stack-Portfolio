import axios from "axios";
import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useAdminAuth } from "./AdminAuthProvider";
import { useSocketContext } from "./SocketIO";
import { Howl } from "howler";
import sound from "../assets/sounds/notification.wav";

export const BlogCommentNotificationContext = createContext();

export const useBlogCommentNotification = () => {
  const context = useContext(BlogCommentNotificationContext);
  if (!context) {
    throw new Error(
      "useBlogCommentNotification must be used within a BlogCommentNotificationProvider"
    );
  }
  return context;
};

export const BlogCommentNotificationProvider = ({ children }) => {
  const backendUrl = import.meta.env.VITE_BACKEND_URL;
  const queryClient = useQueryClient();
  const { isAdminAuthenticated } = useAdminAuth();
  const { socket } = useSocketContext();
  const [audioEnabled, setAudioEnabled] = useState(false);
  const [notificationSound, setNotificationSound] = useState(null);
  const [newNotification, setNewNotification] = useState(null);

  // Main query for notifications with optimized caching
  const {
    data: blogCommentNotfi = [],
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["getBlogCommentNotification"],
    queryFn: async () => {
      try {
        const response = await axios.get(
          `${backendUrl}/admin/get_blog_comments_notification`,
          {
            withCredentials: true,
            // Add timeout to prevent hanging requests
            timeout: 10000,
          }
        );
        return response.data || [];
      } catch (err) {
        // Return cached data if available when request fails
        const cachedData = queryClient.getQueryData([
          "getBlogCommentNotification",
        ]);
        return cachedData || [];
      }
    },
    enabled: isAdminAuthenticated,
    // Add background update throttling
    notifyOnChangeProps: ["data", "error"], // Only re-render when these change
  });

  // Initialize audio - optimized to load only when needed
  useEffect(() => {
    if (!audioEnabled) return;

    const soundInstance = new Howl({
      src: [sound],
      volume: 0.5,
      preload: true,
      html5: true,
      onloaderror: () => {
        console.error("Audio loading failed");
        setAudioEnabled(false); // Disable audio if loading fails
      },
      onplayerror: () => {
        console.error("Audio playback failed");
      },
    });

    setNotificationSound(soundInstance);

    return () => {
      if (soundInstance) {
        soundInstance.unload();
      }
    };
  }, [audioEnabled]);

  // Optimized socket event handling with debouncing
  useEffect(() => {
    if (!socket || !notificationSound) return;

    let debounceTimer;
    const pendingUpdates = [];

    const processUpdates = () => {
      if (pendingUpdates.length > 0) {
        queryClient.setQueryData(["getBlogCommentNotification"], (old) => [
          ...(old || []),
          ...pendingUpdates,
        ]);

        // Only show the latest notification
        setNewNotification(pendingUpdates[pendingUpdates.length - 1]);

        if (audioEnabled) {
          notificationSound.play();
        }

        pendingUpdates.length = 0; // Clear the array
      }
    };

    const handleNewCommentNotification = (notification) => {
      pendingUpdates.push(notification);

      // Debounce to prevent rapid updates
      clearTimeout(debounceTimer);
      debounceTimer = setTimeout(processUpdates, 500);
    };

    socket.on("newCommentNotification", handleNewCommentNotification);

    return () => {
      socket.off("newCommentNotification", handleNewCommentNotification);
      clearTimeout(debounceTimer);
    };
  }, [socket, notificationSound, queryClient, audioEnabled]);

  // Memoized context value with additional controls
  const contextValue = useMemo(
    () => ({
      blogCommentNotfi,
      newNotification,
      isLoading,
      isError,
      error,
      enableAudio: () => setAudioEnabled(true),
      disableAudio: () => setAudioEnabled(false),
      clearNewNotification: () => setNewNotification(null),
      // Add manual refresh capability
      manualRefresh: async () => {
        await queryClient.invalidateQueries({
          queryKey: ["getBlogCommentNotification"],
        });
      },
    }),
    [blogCommentNotfi, newNotification, isLoading, isError, error, queryClient]
  );

  return (
    <BlogCommentNotificationContext.Provider value={contextValue}>
      {children}
    </BlogCommentNotificationContext.Provider>
  );
};
