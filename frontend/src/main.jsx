import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { AdminDataProvider } from "./Context/GetAdminData.jsx";
import { AboutDataProvider } from "./Context/GetAboutData.jsx";
import { AdminAuthProvider } from "./Context/AdminAuthProvider.jsx";
import { SideBarToggle } from "./Context/SideBarToggle.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { GetBlogs } from "./Context/GetBlogs.jsx";
import { SocketProvider } from "./Context/SocketIO.jsx";
import { UserAuthProvider } from "./Context/UserAuthProvider.jsx";
import { TestimonialProvider } from "./Context/GetTestimonial.jsx";
import GetProject from "./Context/GetProject.jsx";
import { GetAllBlogComments } from "./Context/GetAllBlogComments.jsx";
import { GetAllBlogLikes } from "./Context/GetAllBlogLikes.jsx";
import { BlogCommentNotificationProvider } from "./Context/GetAllBlogCommentNoti.jsx";
import { GetChatBotConversation } from "./Context/GetChatBotConversation.jsx";
import { LenisProvider } from "./Context/lenisProvider.jsx";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 2,
      retryDelay: 5000,
      staleTime: 5 * 60 * 1000, // 5 Minutes stale time for caching
      cacheTime: 30 * 60 * 10000,
      refetchOnReconnect: false,
      refetchOnMount: false,
      refetchOnWindowFocus: false,
    },
  },
});
createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <QueryClientProvider client={queryClient}>
      <UserAuthProvider>
        <AdminAuthProvider>
          <SocketProvider>
            <AdminDataProvider>
              <GetProject>
                <GetBlogs>
                  <GetAllBlogComments>
                    <BlogCommentNotificationProvider>
                      <GetAllBlogLikes>
                        <TestimonialProvider>
                          <AboutDataProvider>
                            <SideBarToggle>
                              <GetChatBotConversation>
                                <StrictMode>
                                  <LenisProvider>
                                    <App />
                                  </LenisProvider>
                                </StrictMode>
                              </GetChatBotConversation>
                            </SideBarToggle>
                          </AboutDataProvider>
                        </TestimonialProvider>
                      </GetAllBlogLikes>
                    </BlogCommentNotificationProvider>
                  </GetAllBlogComments>
                </GetBlogs>
              </GetProject>
            </AdminDataProvider>
          </SocketProvider>
        </AdminAuthProvider>
      </UserAuthProvider>
    </QueryClientProvider>
  </BrowserRouter>
);
