import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const BlogCard = () => {
  const [blogs, setBlogs] = useState([]);
  const [sortOption, setSortOption] = useState("latest");
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await axios.get("https://mts-blog-backend1.onrender.com/blogs");
        setBlogs(res.data);
      } catch (err) {
        console.error("Failed to fetch blogs", err);
      }
    };

    fetchBlogs();
  }, []);

  const categories = ["all", ...new Set(blogs.map((b) => b.category))];

  const filteredBlogs =
    categoryFilter === "all"
      ? blogs
      : blogs.filter((blog) => blog.category === categoryFilter);

  const sortedBlogs = [...filteredBlogs].sort((a, b) => {
    const dateA = new Date(a.date || 0);
    const dateB = new Date(b.date || 0);
    const titleA = a.title?.toLowerCase() || "";
    const titleB = b.title?.toLowerCase() || "";
    const popA = a.popularity || 0;
    const popB = b.popularity || 0;

    switch (sortOption) {
      case "oldest":
        return dateA - dateB;
      case "az":
        return titleA.localeCompare(titleB);
      case "popular":
        return popB - popA;
      case "latest":
      default:
        return dateB - dateA;
    }
  });

  const totalPages = Math.ceil(sortedBlogs.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedBlogs = sortedBlogs.slice(startIndex, startIndex + itemsPerPage);

  const goToPage = (page) => {
    if (page >= 1 && page <= totalPages) setCurrentPage(page);
  };

  const getVisiblePages = () => {
    const pages = [];

    if (totalPages <= 3) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else {
      if (currentPage === 1) {
        pages.push(1, 2, 3);
      } else if (currentPage === totalPages) {
        pages.push(totalPages - 2, totalPages - 1, totalPages);
      } else {
        pages.push(currentPage - 1, currentPage, currentPage + 1);
      }
    }

    return pages.filter((page) => page >= 1 && page <= totalPages);
  };

  return (
    <div className="max-w-[1400px] mx-auto px-4 py-8">
      <h1 className="text-5xl font-bold  text-center">All News</h1>

      {/* Filters */}
      <div className="mb-6 flex justify-between space-x-4 flex-wrap">
        <div>
          <label htmlFor="category" className="mr-2 font-medium text-gray-700">
            Filter by Category:
          </label>
          <select
            id="category"
            value={categoryFilter}
            onChange={(e) => {
              setCategoryFilter(e.target.value);
              setCurrentPage(1);
            }}
            className="border border-gray-300 rounded px-3 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat.charAt(0).toUpperCase() + cat.slice(1)}
              </option>
            ))}
          </select>
        </div>

        {/* Sort */}
        <div>
          <label htmlFor="sort" className="mr-2 font-medium text-gray-700">
            Sort by:
          </label>
          <select
            id="sort"
            value={sortOption}
            onChange={(e) => {
              setSortOption(e.target.value);
              setCurrentPage(1);
            }}
            className="border border-gray-300 rounded px-3 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="latest">Latest</option>
            <option value="oldest">Oldest</option>
            <option value="az">A to Z</option>
            <option value="popular">Popular</option>
          </select>
        </div>
      </div>

      {/* Blog Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {paginatedBlogs.map((blog) => (
          <div
            key={blog._id}
            className="bg-white rounded-md shadow-md overflow-hidden hover:shadow-xl transition-all duration-300"
          >
            <img
              className="w-full h-48 object-cover"
              src={blog.imageUrl || "https://source.unsplash.com/600x400/?blog"}
              alt={blog.title}
            />
            <div className="p-4">

              <Link
                to={`/blogs/${blog._id}`}
                className=" text-xl font-semibold text-gray-800  hover:text-blue-600 transition-colors duration-200"
              >
                {blog.title}
              </Link>
              <p className="text-gray-500 text-sm mb-2">
                <span className="font-medium">{blog.category}</span> ·{" "}
                {new Date(blog.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                })}
              </p>
              <p className="text-gray-700 text-sm line-clamp-3">{blog.summary}</p>
              <div className="mt-4 flex justify-between items-center">
                <span className="text-sm text-gray-600">👤 {blog.author}</span>
                <Link
                  to={`/blogs/${blog._id}`}
                  className="text-red-700 hover:underline text-sm"
                >
                  Read More
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="mt-8 flex justify-center space-x-2 flex-wrap">
        <button
          onClick={() => goToPage(currentPage - 1)}
          disabled={currentPage === 1}
          className={`px-3 py-1 rounded border ${currentPage === 1
            ? "cursor-not-allowed border-gray-300 text-gray-400"
            : "border-red-700 text-red-700 hover:bg-red-700 hover:text-white"
            }`}
        >
          Prev
        </button>

        {getVisiblePages().map((pageNum) => (
          <button
            key={pageNum}
            onClick={() => goToPage(pageNum)}
            className={`px-3 py-1 rounded border ${pageNum === currentPage
              ? "bg-red-700 text-white border-red-700"
              : "border-gray-300 text-gray-700 hover:bg-blue-100"
              }`}
          >
            {pageNum}
          </button>
        ))}

        <button
          onClick={() => goToPage(currentPage + 1)}
          disabled={currentPage === totalPages}
          className={`px-3 py-1 rounded border ${currentPage === totalPages
            ? "cursor-not-allowed border-gray-300 text-gray-400"
            : "border-red-700 text-red-700 hover:bg-red-700 hover:text-white"
            }`}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default BlogCard;
