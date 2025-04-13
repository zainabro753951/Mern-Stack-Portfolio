// import React, {
//   createContext,
//   useEffect,
//   useState,
//   useContext,
//   useRef,
//   useCallback,
// } from "react";
// import { io } from "socket.io-client";
// import { useUserAuth } from "./UserAuthProvider.jsx";
// import { useAdminAuth } from "./AdminAuthProvider.jsx";

// const SocketContext = createContext();

// // Custom hook for consuming the context
// export const useSocketContext = () => {
//   const context = useContext(SocketContext);
//   if (!context) {
//     throw new Error("useSocketContext must be used within a SocketProvider");
//   }
//   return context;
// };

// export const SocketProvider = ({ children }) => {
//   const [socket, setSocket] = useState(null);
//   const [isConnected, setIsConnected] = useState(false);
//   const [isConnecting, setIsConnecting] = useState(false);
//   const [connectionError, setConnectionError] = useState(null);
//   const { isUserAuthenticated } = useUserAuth();
//   const { isAdminAuthenticated } = useAdminAuth();
//   const socketRef = useRef(null);
//   const reconnectAttempts = useRef(0);
//   const maxReconnectAttempts = 5;
//   const backendUrl = import.meta.env.VITE_BACKEND_URL;

//   // Cleanup socket connection
//   const cleanupSocket = useCallback(() => {
//     if (socketRef.current) {
//       socketRef.current.off("connect");
//       socketRef.current.off("disconnect");
//       socketRef.current.off("error");
//       socketRef.current.disconnect();
//       socketRef.current = null;
//       setSocket(null);
//       setIsConnected(false);
//       setIsConnecting(false);
//     }
//   }, []);

//   // Initialize socket connection
//   const initializeSocket = useCallback(() => {
//     if (!isUserAuthenticated || socketRef.current) return;

//     setIsConnecting(true);
//     setConnectionError(null);

//     const socketInstance = io(backendUrl, {
//       withCredentials: true,
//       transports: ["websocket"],
//       autoConnect: true,
//       reconnection: true,
//       reconnectionAttempts: maxReconnectAttempts,
//       reconnectionDelay: 1000,
//       reconnectionDelayMax: 5000,
//       randomizationFactor: 0.5,
//       timeout: 20000,
//       path: "/socket.io/",
//       query: {
//         clientType: isAdminAuthenticated ? "admin" : "user",
//       },
//     });

//     const onConnect = () => {
//       console.log("Socket connected, ID:", socketInstance.id);
//       reconnectAttempts.current = 0;
//       setIsConnected(true);
//       setIsConnecting(false);

//       if (isAdminAuthenticated) {
//         socketInstance.emit("setAdminSocketId");
//         console.log("setAdminSocketId event emitted");
//       }
//     };

//     const onDisconnect = (reason) => {
//       console.log("Socket disconnected:", reason);
//       setIsConnected(false);

//       if (reason === "io server disconnect") {
//         // The server explicitly disconnected, need to manually reconnect
//         setTimeout(() => {
//           socketInstance.connect();
//         }, 1000);
//       }
//     };

//     const onError = (error) => {
//       console.error("Socket error:", error);
//       setConnectionError(error);
//       reconnectAttempts.current += 1;

//       if (reconnectAttempts.current >= maxReconnectAttempts) {
//         setIsConnecting(false);
//       }
//     };

//     const onReconnectAttempt = (attempt) => {
//       console.log(`Reconnection attempt ${attempt}/${maxReconnectAttempts}`);
//     };

//     const onReconnectFailed = () => {
//       console.error("Max reconnection attempts reached");
//       setIsConnecting(false);
//       setConnectionError(new Error("Could not connect to server"));
//     };

//     socketInstance.on("connect", onConnect);
//     socketInstance.on("disconnect", onDisconnect);
//     socketInstance.on("error", onError);
//     socketInstance.on("reconnect_attempt", onReconnectAttempt);
//     socketInstance.on("reconnect_failed", onReconnectFailed);

//     setSocket(socketInstance);
//     socketRef.current = socketInstance;

//     return () => {
//       socketInstance.off("connect", onConnect);
//       socketInstance.off("disconnect", onDisconnect);
//       socketInstance.off("error", onError);
//       socketInstance.off("reconnect_attempt", onReconnectAttempt);
//       socketInstance.off("reconnect_failed", onReconnectFailed);
//     };
//   }, [isUserAuthenticated, isAdminAuthenticated, backendUrl]);

//   // Effect to handle socket connection lifecycle
//   useEffect(() => {
//     if (isUserAuthenticated) {
//       initializeSocket();
//     } else {
//       cleanupSocket();
//     }

//     return cleanupSocket;
//   }, [isUserAuthenticated, initializeSocket, cleanupSocket]);

//   // Effect to handle admin authentication changes
//   useEffect(() => {
//     if (socketRef.current && isAdminAuthenticated && isConnected) {
//       socketRef.current.emit("setAdminSocketId");
//       console.log("setAdminSocketId event emitted (admin auth change)");
//     }
//   }, [isAdminAuthenticated, isConnected]);

//   // Add ping/pong monitoring in production
//   useEffect(() => {
//     if (!socketRef.current || !isConnected) return;

//     const pingInterval = setInterval(() => {
//       if (socketRef.current) {
//         const start = Date.now();
//         socketRef.current.emit("ping", () => {
//           const latency = Date.now() - start;
//           console.debug(`Latency: ${latency}ms`);
//         });
//       }
//     }, 30000); // Ping every 30 seconds

//     return () => clearInterval(pingInterval);
//   }, [isConnected]);

//   return (
//     <SocketContext.Provider
//       value={{
//         socket,
//         isConnected,
//         isConnecting,
//         connectionError,
//         reconnect: initializeSocket,
//       }}
//     >
//       {children}
//     </SocketContext.Provider>
//   );
// };
