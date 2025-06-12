import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home";
import SingleBlog from "../components/SingleBlog";
import AdminLayout from "../components/AdminDashbord/AdminLayout";
import AllBlogs from "../components/AdminDashbord/AllBlogs";
import AddBlog from "../components/AdminDashbord/AddBlog";
import EditBlog from "../components/AdminDashbord/EditBlog";
import Sports from "../Pages/Sports";
import Entertainment from "../Pages/Entertainment";
import Donate from "../Pages/Donate";
import StripeCheckout from "../components/Stripe/StripeCheckout";
import Register from "../components/Auth/Register";
import Login from "../components/Auth/Login";

// Admin Layout & Pages

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },

      {
        path: "/blogs/:id",
        element: <SingleBlog />,
      },
      {
        path: "/donate",
        element: <Donate />,
      },
      {
        path: "/donate/stripe",
        element: <StripeCheckout />,
      },
      {
        path: "/sports",
        element: <Sports />,
      },
      {
        path: "/entertainment",
        element: <Entertainment />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/login",
        element: <Login />,
      },

      {
        path: "*",
        element: (
          <div className="text-center py-20 text-red-600 text-xl">
            404 - Page Not Found
          </div>
        ),
      },
    ],
  },
  {
    path: "/admin",
    element: <AdminLayout />,
    children: [
      {
        path: "/admin/blogs",
        element: <AllBlogs />,
      },
      {
        path: "/admin/add-blog",
        element: <AddBlog />,
      },
      {
        path: "/admin/blogs/edit/:id",
        element: <EditBlog />,
      },
    ],
  },
]);
