// src/main.jsx or src/index.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import "./index.css";
import { router } from "./routes/Router";
import { Toaster } from "react-hot-toast";
import "./i18n";
import { BlogProvider } from "./context/BlogContext";
import { LanguageProvider } from "./components/LanguageContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <LanguageProvider>
      <BlogProvider>
        <>
          <RouterProvider router={router} />
          <Toaster position="top-right" reverseOrder={false} />
        </>
      </BlogProvider>
    </LanguageProvider>
  </React.StrictMode>
);
