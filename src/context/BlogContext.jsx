import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

export const BlogContext = createContext();

export const BlogProvider = ({ children }) => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get("https://mts-blog-backend1.onrender.com/blogs")
      .then(res => {
        setBlogs(res.data);
        setLoading(false);
      })
      .catch(error => {
        console.error("Blog fetch error:", error);
        setLoading(false);
      });
  }, []);

  return (
    <BlogContext.Provider value={{ blogs, loading }}>
      {children}
    </BlogContext.Provider>
  );
};
