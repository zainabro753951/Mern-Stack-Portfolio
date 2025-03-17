import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { AdminDataProvider } from "./Context/GetAdminData.jsx";
import { GetAboutProvider } from "./Context/GetAboutData.jsx";
import { AdminAuthProvider } from "./Context/AdminAuthProvider.jsx";
import { SideBarToggle } from "./Context/SideBarToggle.jsx";
import { QueryClient, QueryClientProvider } from "react-query";
import { GetBlogs } from "./Context/GetBlogs.jsx";
import { SocketProvider } from "./Context/SocketIO.jsx";
import { UserAuthProvider } from "./Context/UserAuthProvider.jsx";
import { GetTestimonial } from "./Context/GetTestimonial.jsx";
import GetProject from "./Context/GetProject.jsx";
import { GetAllBlogComments } from "./Context/GetAllBlogComments.jsx";
import { GetAllBlogLikes } from "./Context/GetAllBlogLikes.jsx";
import { GetAllBlogCommentNoti } from "./Context/GetAllBlogCommentNoti.jsx";
import { GetChatBotConversation } from "./Context/GetChatBotConversation.jsx";

const queryClient = new QueryClient();
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
                    <GetAllBlogCommentNoti>
                      <GetAllBlogLikes>
                        <GetTestimonial>
                          <GetAboutProvider>
                            <SideBarToggle>
                              <GetChatBotConversation>
                                <StrictMode>
                                  <App />
                                </StrictMode>
                              </GetChatBotConversation>
                            </SideBarToggle>
                          </GetAboutProvider>
                        </GetTestimonial>
                      </GetAllBlogLikes>
                    </GetAllBlogCommentNoti>
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
