import React, { useState } from "react";
import axios from "axios";

const AddBlog = () => {
    const [blog, setBlog] = useState({
        title: "",
        category: "",
        content: "",
        imageUrl: "",
        author: "",
        summary: "",
    });

    const [uploading, setUploading] = useState(false);

    const imgbbApiKey = "2e9ccc73a7d46f02f4c32104024a62b9"; 

    const formattedDate = new Date().toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
    });

    const handleChange = (e) => {
        setBlog({
            ...blog,
            [e.target.name]: e.target.value,
        });
    };

    const handleImageUpload = async (e) => {
        const file = e.target.files[0];
        if (!file) return;

        const formData = new FormData();
        formData.append("image", file);

        setUploading(true);
        try {
            const res = await axios.post(
                `https://api.imgbb.com/1/upload?key=${imgbbApiKey}`,
                formData
            );
            const imageUrl = res.data.data.url;
            setBlog((prev) => ({ ...prev, imageUrl }));
            alert("✅ Image uploaded successfully!");
        } catch (err) {
            console.error("❌ Image upload failed:", err);
            alert("❌ Failed to upload image.");
        } finally {
            setUploading(false);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const today = new Date().toISOString().split("T")[0];

        const blogWithDate = {
            ...blog,
            date: today,
        };

        try {
            const res = await axios.post("https://mts-blog-backend1.onrender.com/blogs", blogWithDate);
            alert("✅ Blog created successfully!");
            console.log(res.data);
            setBlog({
                title: "",
                category: "",
                content: "",
                imageUrl: "",
                author: "",
                summary: "",
            });
        } catch (err) {
            alert("❌ Failed to create blog");
            console.error(err);
        }
    };

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
            <div className="w-full max-w-2xl bg-white shadow-lg rounded-2xl p-8">
                <h2 className="text-3xl font-semibold text-gray-800 mb-1">📝 Add New Blog</h2>
                <p className="text-sm text-gray-500 mb-6">📅 {formattedDate}</p>

                <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
                        <input
                            type="text"
                            name="title"
                            value={blog.title}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Enter blog title"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
                        <input
                            type="text"
                            name="category"
                            value={blog.category}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Enter category"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Upload Image</label>
                        <input
                            type="file"
                            accept="image/*"
                            onChange={handleImageUpload}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md"
                        />
                        {uploading && <p className="text-sm text-blue-500 mt-2">Uploading image...</p>}
                        {blog.imageUrl && (
                            <img
                                src={blog.imageUrl}
                                alt="Uploaded Preview"
                                className="mt-3 rounded-md w-full h-auto"
                            />
                        )}
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Author</label>
                        <input
                            type="text"
                            name="author"
                            value={blog.author}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Author name"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Summary</label>
                        <textarea
                            name="summary"
                            value={blog.summary}
                            onChange={handleChange}
                            rows="3"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Short summary of the blog"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Content</label>
                        <textarea
                            name="content"
                            value={blog.content}
                            onChange={handleChange}
                            rows="6"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Full blog content here"
                            required
                        />
                    </div>
                    <div className="pt-4">
                        <button
                            type="submit"
                            className="w-full bg-red-600 text-white py-3 rounded-md hover:bg-red-700 transition duration-300 font-semibold"
                            disabled={uploading}
                        >
                             Submit Blog
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddBlog;
