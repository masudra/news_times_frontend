import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import { BlogContext } from "../../context/BlogContext";

export default function AllBlogs() {
  const { blogs, loading } = useContext(BlogContext);

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this blog?");
    if (!confirmDelete) return;

    try {
      const res = await fetch(`http://localhost:5000/blogs/${id}`, {
        method: "DELETE",
      });

      if (res.ok) {
        setBlogs(prev => prev.filter(blog => blog._id !== id));
        toast.success("Blog deleted successfully");
      } else {
        toast.error("Failed to delete the blog.");
      }
    } catch (error) {
      console.error("Error deleting blog:", error);
      toast.error("Something went wrong");
    }
  };

  return (
    <div className="p-6 bg-white min-h-screen text-black rounded-lg shadow-md">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-xl font-semibold">Article Management</h1>
        <div className="flex items-center gap-2">
          <input
            type="text"
            placeholder="Search articles..."
            className="px-3 py-1.5 rounded border border-gray-300 text-sm focus:outline-none"
          />
          <button className="bg-gray-200 text-black px-4 py-1.5 rounded text-sm">
            Filter ▼
          </button>
          <button className="bg-black text-white px-4 py-1.5 rounded text-sm font-medium">
            <Link to="/admin/add-blog" className="flex items-center gap-2 hover:underline">
              + Add Article
            </Link>

          </button>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm">
          <thead className="border-b border-gray-300 bg-gray-100">
            <tr className="text-gray-600">
              <th className="px-2 py-2">Title</th>
              <th className="px-2 py-2">Category</th>
              <th className="px-2 py-2">Published</th>
              <th className="px-2 py-2">Author</th>
              <th className="px-2 py-2">Views</th>
              <th className="px-2 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <tr>
                <td colSpan="6" className="text-center py-6">Loading blogs...</td>
              </tr>
            ) : blogs.length === 0 ? (
              <tr>
                <td colSpan="6" className="text-center py-6 text-gray-500">No articles found</td>
              </tr>
            ) : (
              blogs.map(blog => (
                <tr key={blog._id} className="border-b border-gray-200 hover:bg-gray-100">
                  <td className="px-2 py-2">{blog.title}</td>
                  <td className="px-2 py-2">{blog.category}</td>
                  <td className="px-2 py-2">{blog.date}</td>
                  <td className="px-2 py-2">{blog.author}</td>
                  <td className="px-2 py-2">{blog.views || 0}</td>
                  <td className="px-2 py-2 space-x-3">
                    <Link to={`/admin/blogs/edit/${blog._id}`} className="text-blue-600 hover:underline">Edit</Link>
                    <button onClick={() => handleDelete(blog._id)} className="text-red-600 hover:underline">Delete</button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
