import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { AdminDataProvider } from "./Context/GetAdminData.jsx";
import { GetAboutProvider } from "./Context/GetAboutData.jsx";
import { AdminAuthProvider } from "./Context/AdminAuthProvider.jsx";
import { SideBarToggle } from "./Context/SideBarToggle.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <AdminAuthProvider>
      <AdminDataProvider>
        <GetAboutProvider>
          <SideBarToggle>
            <StrictMode>
              <App />
            </StrictMode>
          </SideBarToggle>
        </GetAboutProvider>
      </AdminDataProvider>
    </AdminAuthProvider>
  </BrowserRouter>
);
