// src/context/BlogContext.jsx
import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import { LanguageContext } from "../components/LanguageContext";

export const BlogContext = createContext();

export const BlogProvider = ({ children }) => {
  const { language } = useContext(LanguageContext);
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    axios.get(`https://mts-blog-backend1.onrender.com/blogs?lang=${language}`)
      .then(res => {
        setBlogs(res.data);
        setLoading(false);
      })
      .catch(error => {
        console.error("Blog fetch error:", error);
        setLoading(false);
      });
  }, [language]);

  return (
    <BlogContext.Provider value={{ blogs, loading }}>
      {children}
    </BlogContext.Provider>
  );
};
