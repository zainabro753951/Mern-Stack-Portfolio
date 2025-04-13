import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { AboutDataProvider } from "./Context/GetAboutData.jsx";
import { SideBarToggle } from "./Context/SideBarToggle.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { TestimonialProvider } from "./Context/GetTestimonial.jsx";
import GetProject from "./Context/GetProject.jsx";
import { LenisProvider } from "./Context/lenisProvider.jsx";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 2,
      retryDelay: 5000,
      staleTime: 5 * 60 * 1000, // 5 Minutes stale time for caching
      refetchOnReconnect: false,
      refetchOnMount: false,
      refetchOnWindowFocus: false,
    },
  },
});
createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <GetProject>
        <TestimonialProvider>
          <AboutDataProvider>
            <SideBarToggle>
              <StrictMode>
                <LenisProvider>
                  <App />
                </LenisProvider>
              </StrictMode>
            </SideBarToggle>
          </AboutDataProvider>
        </TestimonialProvider>
      </GetProject>
    </QueryClientProvider>
  </BrowserRouter>
);
