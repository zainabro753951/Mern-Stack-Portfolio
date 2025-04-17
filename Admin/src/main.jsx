import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AdminAuthProvider } from "./Context/AdminAuthProvider.jsx";
import { AdminDataProvider } from "./Context/GetAdminData.jsx";
import { AboutDataProvider } from "./Context/GetAboutData.jsx";
import { TestimonialProvider } from "./Context/GetTestimonial.jsx";
import { SideBarToggle } from "./Context/SideBarToggle.jsx";
import ProjectProvider from "./Context/GetProject.jsx";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60, // 5 minutes
      refetchOnMount: false,
      refetchOnReconnect: false,
      refetchOnWindowFocus: false,
      notifyOnChangeProps: ["data", "error"],
    },
  },
});
createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <QueryClientProvider client={queryClient}>
      <AdminAuthProvider>
        <AdminDataProvider>
          <AboutDataProvider>
            <TestimonialProvider>
              <ProjectProvider>
                <SideBarToggle>
                  <StrictMode>
                    <App />
                  </StrictMode>
                </SideBarToggle>
              </ProjectProvider>
            </TestimonialProvider>
          </AboutDataProvider>
        </AdminDataProvider>
      </AdminAuthProvider>
    </QueryClientProvider>
  </BrowserRouter>
);
