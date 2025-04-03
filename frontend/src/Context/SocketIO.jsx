import React, {
  createContext,
  useEffect,
  useState,
  useContext,
  useRef,
} from "react";
import { io } from "socket.io-client";
import { useUserAuth } from "./UserAuthProvider.jsx";
import { useAdminAuth } from "./AdminAuthProvider.jsx";

const SocketContext = createContext();
export const useSocketContext = () => {
  return useContext(SocketContext);
};

export const SocketProvider = ({ children }) => {
  const [socket, setSocket] = useState(null);
  const [isConnected, setIsConnected] = useState(false);
  const [isConnecting, setIsConnecting] = useState(false);
  const { isUserAuthenticated } = useUserAuth();
  const { isAdminAuthenticated } = useAdminAuth();
  const socketRef = useRef(null); // Ref to track the current socket instance
  const backendUrl = import.meta.env.VITE_BACKEND_URL;

  // Effect to handle socket connection
  useEffect(() => {
    if (isUserAuthenticated && !socketRef.current) {
      setIsConnecting(true);
      // Initialize the socket connection
      const socketInstance = io(backendUrl, {
        withCredentials: true,
        transports: ["websocket", "polling"],
      });

      // Set the socket state and ref
      setSocket(socketInstance);
      socketRef.current = socketInstance;

      // Handle connection event
      socketInstance.on("connect", () => {
        console.log("Socket connected, ID:", socketInstance.id);
        setIsConnected(true);
        setIsConnecting(false);

        // Emit setAdminSocketId event if admin is authenticated
        if (isAdminAuthenticated) {
          socketInstance.emit("setAdminSocketId");
          console.log("setAdminSocketId event emitted");
        }
      });

      // Handle disconnection event
      socketInstance.on("disconnect", () => {
        console.log("Socket disconnected");
        setIsConnected(false);
      });

      // Handle errors
      socketInstance.on("error", (error) => {
        console.error("Socket error:", error);
      });
    }
  }, [isUserAuthenticated, isAdminAuthenticated]);

  // Effect to handle admin authentication change
  useEffect(() => {
    if (socketRef.current && isAdminAuthenticated && isConnected) {
      // Emit setAdminSocketId event if admin is authenticated
      socketRef.current.emit("setAdminSocketId");
      console.log("setAdminSocketId event emitted");
    }
  }, [isAdminAuthenticated, isConnected]);

  // Effect to handle user logout
  useEffect(() => {
    if (!isUserAuthenticated && socketRef.current) {
      // Close the socket connection
      socketRef.current.close();
      socketRef.current = null;
      setSocket(null); // Reset the socket state
      setIsConnected(false); // Reset connection status
    }
  }, [isUserAuthenticated]);

  return (
    <SocketContext.Provider value={{ socket, isConnected, isConnecting }}>
      {children}
    </SocketContext.Provider>
  );
};
