import React, { useState } from "react";
import axios from "axios";

const AddBlog = () => {
    const [blog, setBlog] = useState({
        title: { en: "", bn: "" },
        category: { en: "", bn: "" },
        content: { en: "", bn: "" },
        imageUrl: "",
        author: "",
    });

    const [uploading, setUploading] = useState(false);

    const imgbbApiKey = "2e9ccc73a7d46f02f4c32104024a62b9";

    const formattedDate = new Date().toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        const [field, lang] = name.split(".");

        if (lang) {
            setBlog((prev) => ({
                ...prev,
                [field]: { ...prev[field], [lang]: value },
            }));
        } else {
            setBlog((prev) => ({ ...prev, [name]: value }));
        }
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
        const now = new Date().toISOString();

        const blogWithDate = {
            ...blog,
            date: now,
        };

        try {
            const res = await axios.post("https://mts-blog-backend1.onrender.com/blogs", blogWithDate);
            alert("✅ Blog created successfully!");
            console.log(res.data);
            setBlog({
                title: { en: "", bn: "" },
                category: { en: "", bn: "" },
                content: { en: "", bn: "" },
                imageUrl: "",
                author: "",
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
                    {/* Title */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Title (English)</label>
                        <input
                            type="text"
                            name="title.en"
                            value={blog.title.en}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md"
                            placeholder="Enter blog title in English"
                            required
                        />
                        <label className="block text-sm font-medium text-gray-700 mt-3 mb-1">Title (Bangla)</label>
                        <input
                            type="text"
                            name="title.bn"
                            value={blog.title.bn}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md"
                            placeholder="Enter blog title in Bangla"
                            required
                        />
                    </div>

                    {/* Category */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Category (English)</label>
                        <input
                            type="text"
                            name="category.en"
                            value={blog.category.en}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md"
                            placeholder="Enter category in English"
                            required
                        />
                        <label className="block text-sm font-medium text-gray-700 mt-3 mb-1">Category (Bangla)</label>
                        <input
                            type="text"
                            name="category.bn"
                            value={blog.category.bn}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md"
                            placeholder="Enter category in Bangla"
                            required
                        />
                    </div>

                    {/* Upload Image */}
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

                    {/* Author */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Author</label>
                        <input
                            type="text"
                            name="author"
                            value={blog.author}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md"
                            placeholder="Author name"
                        />
                    </div>

                    {/* Content */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Content (English)</label>
                        <textarea
                            name="content.en"
                            value={blog.content.en}
                            onChange={handleChange}
                            rows="5"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md"
                            placeholder="Full blog content in English"
                            required
                        />
                        <label className="block text-sm font-medium text-gray-700 mt-3 mb-1">Content (Bangla)</label>
                        <textarea
                            name="content.bn"
                            value={blog.content.bn}
                            onChange={handleChange}
                            rows="5"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md"
                            placeholder="Full blog content in Bangla"
                            required
                        />
                    </div>

                    {/* Submit Button */}
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
