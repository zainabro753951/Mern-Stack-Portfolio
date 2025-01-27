import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./Context/AuthProvider.jsx";
import { AdminDataProvider } from "./Context/GetAdminData.jsx";
import { GetAboutProvider } from "./Context/GetAboutData.jsx";
createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <AuthProvider>
      <GetAboutProvider>
        <AdminDataProvider>
          <StrictMode>
            <App />
          </StrictMode>
        </AdminDataProvider>
      </GetAboutProvider>
    </AuthProvider>
  </BrowserRouter>
);
