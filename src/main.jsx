import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import "./index.css";
import { router } from "./routes/Router";
import { Toaster } from "react-hot-toast";
import "./i18n";
import { BlogProvider } from "./context/BlogContext";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>

    <BlogProvider>
      <>
        <RouterProvider router={router} />
        <Toaster position="top-right" reverseOrder={false} />
      </>
    </BlogProvider>

  </React.StrictMode>
);
