// import React, { useState } from "react";
// import axios from "axios";

// const AddBlog = () => {
//     const [blog, setBlog] = useState({
//         title: "",
//         category: "",
//         content: "",
//         imageUrl: "",
//         author: "",
//         summary: "",
//     });

//     const formattedDate = new Date().toLocaleDateString("en-US", {
//         year: "numeric",
//         month: "long",
//         day: "numeric",
//     });

//     const handleChange = (e) => {
//         setBlog({
//             ...blog,
//             [e.target.name]: e.target.value,
//         });
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         const today = new Date().toISOString().split("T")[0];

//         const blogWithDate = {
//             ...blog,
//             date: today,
//         };

//         try {
//             const res = await axios.post("https://mts-blog-backend.onrender.com/blogs", blogWithDate);
//             alert("✅ Blog created successfully!");
//             console.log(res.data);
//             setBlog({
//                 title: "",
//                 category: "",
//                 content: "",
//                 imageUrl: "",
//                 author: "",
//                 summary: "",
//             });
//         } catch (err) {
//             alert("❌ Failed to create blog");
//             console.error(err);
//         }
//     };

//     return (
//         <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
//             <div className="w-full max-w-2xl bg-white shadow-lg rounded-2xl p-8">
//                 <h2 className="text-3xl font-semibold text-gray-800 mb-1">📝 Add New Blog</h2>
//                 <p className="text-sm text-gray-500 mb-6">📅 {formattedDate}</p>

//                 <form onSubmit={handleSubmit} className="space-y-5">
//                     <div>
//                         <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
//                         <input
//                             type="text"
//                             name="title"
//                             value={blog.title}
//                             onChange={handleChange}
//                             className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                             placeholder="Enter blog title"
//                             required
//                         />
//                     </div>
//                     <div>
//                         <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
//                         <input
//                             type="text"
//                             name="category"
//                             value={blog.category}
//                             onChange={handleChange}
//                             className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                             placeholder="Enter category"
//                             required
//                         />
//                     </div>
//                     <div>
//                         <label className="block text-sm font-medium text-gray-700 mb-1">Image URL</label>
//                         <input
//                             type="text"
//                             name="imageUrl"
//                             value={blog.imageUrl}
//                             onChange={handleChange}
//                             className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                             placeholder="https://example.com/image.jpg"
//                         />
//                     </div>
//                     <div>
//                         <label className="block text-sm font-medium text-gray-700 mb-1">Author</label>
//                         <input
//                             type="text"
//                             name="author"
//                             value={blog.author}
//                             onChange={handleChange}
//                             className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                             placeholder="Author name"
//                         />
//                     </div>
//                     <div>
//                         <label className="block text-sm font-medium text-gray-700 mb-1">Summary</label>
//                         <textarea
//                             name="summary"
//                             value={blog.summary}
//                             onChange={handleChange}
//                             rows="3"
//                             className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                             placeholder="Short summary of the blog"
//                         />
//                     </div>
//                     <div>
//                         <label className="block text-sm font-medium text-gray-700 mb-1">Content</label>
//                         <textarea
//                             name="content"
//                             value={blog.content}
//                             onChange={handleChange}
//                             rows="6"
//                             className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                             placeholder="Full blog content here"
//                             required
//                         />
//                     </div>
//                     <div className="pt-4">
//                         <button
//                             type="submit"
//                             className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition duration-300 font-semibold"
//                         >
//                             ✅ Submit Blog
//                         </button>
//                     </div>
//                 </form>
//             </div>
//         </div>
//     );
// };

// export default AddBlog;
