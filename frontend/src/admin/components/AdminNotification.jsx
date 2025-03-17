import React, { useEffect, useState } from "react";
import { useSocketContext } from "../../Context/SocketIO";
import { Howl } from "howler";
import sound from "../../assets/sounds/notification.wav";
import { toast, ToastContainer } from "react-toastify";

export const useGetNotification = () => {
  const { socket } = useSocketContext();
  const [audioEnabled, setAudioEnabled] = useState(false);
  const [notificationSound, setNotificationSound] = useState(null);
  const [notifications, setNotifications] = useState([]);

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
  }, [audioEnabled]);

  useEffect(() => {
    if (socket && notificationSound) {
      const handleAllNotifications = (pendingNotifications) => {
        setNotifications(pendingNotifications);
      };

      const handleNewCommentNotification = (notification) => {
        setNotifications(notification);
        notificationSound.play();
      };

      socket.on("newCommentNotification", handleNewCommentNotification);

      return () => {
        socket.off("newCommentNotification", handleNewCommentNotification);
      };
    }
  }, [socket, notificationSound]);

  return { enableAudio: () => setAudioEnabled(true), notifications };
};
