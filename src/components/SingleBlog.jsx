import React, { useContext, useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";
import LoadingSpinner from "../components/LoadingSpinner";
import { BlogContext } from "../context/BlogContext";
import { useTranslation } from "react-i18next";

const SingleBlog = () => {
  const { id } = useParams();
  const { blogs, loading } = useContext(BlogContext);
  const blog = blogs.find((b) => b._id === id);
  const recentPosts = [...blogs].reverse().slice(0, 5);
  const trendingPosts = [...blogs].sort(() => 0.5 - Math.random()).slice(0, 5);
    const { t } = useTranslation();

  if (loading) return <LoadingSpinner />;

  if (!blog) return <div className="text-center py-10 text-2xl text-red-700">{t("blogNotFound")}</div>;

  return (
    <div className="max-w-full lg:max-w-[1400px] mx-auto p-4 min-h-screen">
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_3fr_1fr] gap-4 h-full">

        {/* Left Sidebar - only for desktop */}
        <div className="hidden lg:block">

          <div className="bg-gray-50 p-4 rounded space-y-4 w-full">
            <h2 className="text-2xl font-semibold mb-3 p-4  shadow shadow-red-400">📌 {t("recentPosts")}</h2>
            {loading ? (
              <LoadingSpinner />
            ) : (
              recentPosts.map((post) => (
                <Link
                  to={`/blogs/${post._id}`}
                  key={post._id}
                  className="flex items-center justify-between bg-white rounded-lg shadow hover:shadow-md transition overflow-hidden p-2"
                >
                  <div className="w-2/3 pr-3">
                    <h3 className="font-medium text-sm text-gray-800">
                      {post.title.length > 50
                        ? post.title.slice(0, 50) + "..."
                        : post.title}
                    </h3>
                  </div>
                  {post.imageUrl && (
                    <div className="w-1/3">
                      <img
                        src={post.imageUrl}
                        alt={post.title}
                        className="w-full h-16 object-cover rounded"
                      />
                    </div>
                  )}
                </Link>
              ))
            )}
          </div>
        </div>

        {/* Main Blog Content */}
        <div className="bg-white p-6 rounded shadow overflow-y-auto h-full">
          <Link
            to="/"
            className="text-blue-600 hover:underline mb-4 inline-block"
          >
            ← Back to Blogs
          </Link>
          <h1 className="text-3xl font-bold mb-4">{blog.title}</h1>
          <p className="text-gray-600 mb-2">
            <span className="font-semibold">{blog.category}</span> ·{" "}
            {new Date(blog.date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>
          <p className="text-gray-700 mb-4 italic">By {blog.author}</p>
          {blog.imageUrl && (
            <img
              src={blog.imageUrl}
              alt={blog.title}
              className="w-full max-h-96 object-cover rounded mb-6"
            />
          )}
          <p className="text-gray-800 whitespace-pre-line mb-6">
            {blog.content}
          </p>


        </div>

        {/* Right Sidebar - only for desktop */}
        <div>

          <div className="hidden lg:block">
            <div className="bg-gray-50 p-4 rounded space-y-4">
              <h2 className="text-2xl font-semibold mb-3 p-4  shadow shadow-red-400">🔥{t("trendingPosts")}</h2>
              {loading ? (
                <LoadingSpinner />
              ) : (
                trendingPosts.map((trendpost) => (
                  <Link
                    to={`/blogs/${trendpost._id}`}
                    key={trendpost._id}
                    className="flex items-center justify-between bg-white rounded-lg shadow hover:shadow-md transition overflow-hidden p-2"
                  >
                    <div className="w-2/3 pr-3">
                      <h3 className="font-medium text-sm text-gray-800">
                        {trendpost.title.length > 50
                          ? trendpost.title.slice(0, 50) + "..."
                          : trendpost.title}
                      </h3>
                    </div>
                    {trendpost.imageUrl && (
                      <div className="w-1/3">
                        <img
                          src={trendpost.imageUrl}
                          alt={trendpost.title}
                          className="w-full h-16 object-cover rounded"
                        />
                      </div>
                    )}
                  </Link>
                ))
              )}

            </div>


          </div>

          <div className="hidden lg:block mt-4">
            <div className=" p-4 rounded space-y-4 shadow shadow-red-400">
              <h2 className="text-2xl font-semibold mb-3 p-">{t("shareThisBlog")}:</h2>
              {/* Social share icons */}
              <div className="mt-6">
                <div className="flex space-x-4 text-2xl text-gray-600">
                  <a
                    href={`https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-blue-600"
                  >
                    <FaFacebook />
                  </a>
                  <a
                    href={`https://twitter.com/intent/tweet?url=${window.location.href}&text=${blog.title}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-sky-500"
                  >
                    <FaTwitter />
                  </a>
                  <a
                    href={`https://www.linkedin.com/shareArticle?mini=true&url=${window.location.href}&title=${blog.title}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-blue-800"
                  >
                    <FaLinkedin />
                  </a>
                </div>
              </div>
            </div>



          </div>


        </div>



      </div>

      {/* Mobile & Tab: Recent + Trending */}
      <div className="block lg:hidden mt-10 space-y-8">
        {/* Recent Posts */}
        <div className="bg-gray-50 p-4 rounded space-y-4">
          <h2 className="text-xl font-semibold mb-3">📌{t("recentPosts")}</h2>
          {loading ? (
            <LoadingSpinner />) : (
            recentPosts.map((post) => (
              <Link
                to={`/blogs/${post._id}`}
                key={post._id}
                className="flex items-center justify-between bg-white rounded-lg shadow hover:shadow-md transition overflow-hidden p-2"
              >
                <div className="w-2/3 pr-3">
                  <h3 className="font-medium text-sm text-gray-800">
                    {post.title.length > 50
                      ? post.title.slice(0, 50) + "..."
                      : post.title}
                  </h3>
                </div>
                {post.imageUrl && (
                  <div className="w-1/3">
                    <img
                      src={post.imageUrl}
                      alt={post.title}
                      className="w-full h-16 object-cover rounded"
                    />
                  </div>
                )}
              </Link>
            ))
          )}
        </div>

        {/* Trending Posts */}
        <div className="bg-gray-50 p-4 rounded space-y-4">
          <h2 className="text-xl font-semibold mb-3">🔥 {t("trendingPosts")}</h2>
          {loading ? (
            <LoadingSpinner />) : (
            trendingPosts.map((trendpost) => (
              <Link
                to={`/blogs/${trendpost._id}`}
                key={trendpost._id}
                className="flex items-center justify-between bg-white rounded-lg shadow hover:shadow-md transition overflow-hidden p-2"
              >
                <div className="w-2/3 pr-3">
                  <h3 className="font-medium text-sm text-gray-800">
                    {trendpost.title.length > 50
                      ? trendpost.title.slice(0, 50) + "..."
                      : trendpost.title}
                  </h3>
                </div>
                {trendpost.imageUrl && (
                  <div className="w-1/3">
                    <img
                      src={trendpost.imageUrl}
                      alt={trendpost.title}
                      className="w-full h-16 object-cover rounded"
                    />
                  </div>
                )}
              </Link>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default SingleBlog;