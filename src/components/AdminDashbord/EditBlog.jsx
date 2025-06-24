import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export default function EditBlog() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [blog, setBlog] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!id) return;

        fetch(`https://news-times-backend.onrender.com/blogs/${id}`)
            .then(res => res.json())
            .then(data => {
                setBlog(data);
                setLoading(false);
            })
            .catch(err => {
                toast.error("Failed to load blog");
                setLoading(false);
            });
    }, [id]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setBlog(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const res = await fetch(`https://news-times-backend.onrender.com/blogs/${id}`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(blog),
            });

            const result = await res.json();

            if (res.ok) {
                toast.success("Blog updated successfully!");
                navigate("/admin/blogs");
            } else {
                toast.error(result.message || "Failed to update blog");
            }
        } catch (error) {
            toast.error("Error updating blog");
        }
    };

    if (loading) return <div className="p-6">Loading blog...</div>;
    if (!blog) return <div className="p-6">Blog not found.</div>;

    return (
        <div className="p-6 max-w-xl mx-auto">
            <h2 className="text-2xl font-semibold mb-4">Edit Blog</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <input
                    type="text"
                    name="title"
                    value={blog.title || ''}
                    onChange={handleChange}
                    className="w-full p-2 border rounded"
                    placeholder="Title"
                    required
                />
                <input
                    type="text"
                    name="category"
                    value={blog.category || ''}
                    onChange={handleChange}
                    className="w-full p-2 border rounded"
                    placeholder="Category"
                    required
                />
                <input
                    type="text"
                    name="author"
                    value={blog.author || ''}
                    onChange={handleChange}
                    className="w-full p-2 border rounded"
                    placeholder="Author"
                />
                <textarea
                    name="content"
                    value={blog.content || ''}
                    onChange={handleChange}
                    className="w-full p-2 border rounded h-32"
                    placeholder="Content"
                ></textarea>
                <button
                    type="submit"
                    className="bg-black text-white px-4 py-2 rounded"
                >
                    Save Changes
                </button>
            </form>
        </div>
    );
}
