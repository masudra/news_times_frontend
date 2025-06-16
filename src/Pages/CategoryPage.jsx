import { Link, Navigate, useParams } from "react-router-dom";
import { useContext, useMemo } from "react";
import { BlogContext } from "../context/BlogContext";
import LoadingSpinner from "../components/LoadingSpinner";


const CategoryPage = () => {
    const { name } = useParams();
    const { blogs, loading } = useContext(BlogContext);

    const filteredPosts = useMemo(() => {
        return blogs
            .filter(post => post.category?.toLowerCase() === name?.toLowerCase())
            .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    }, [blogs, name]);

    const slicedPosts = useMemo(() => filteredPosts.slice(0, 20), [filteredPosts]);


    if (loading) return <LoadingSpinner />;

    // ✅ If no posts found for this category, go to 404
    if (!loading && filteredPosts.length === 0) {
        return <Navigate to="*" />;
    }

    return (
        <div>
            <div
                className=" w-full bg-white shadow-md rounded-lg pb-10">
                <h1 className="text-5xl font-bold my-10 text-center">Category: {name}</h1>

                <div
                    className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
                    {slicedPosts.map((post, i) => (
                        <div
                            key={i}
                            className="flex bg-blue-50 p-2 border-b-1 border-red-700 mt-4  rounded-md"                        >
                            <img
                                className="lg:min-w-14 lg:max-w-34 w-full h-20 object-cover overflow-hidden transition-all duration-300 hover:scale-105"
                                src={
                                    post?.imageUrl || "https://source.unsplash.com/600x400/?blog"
                                }
                                alt={post?.title}
                            />
                            <div className="p-2">
                                <Link
                                    to={`/blogs/${post?._id}`}
                                    className="text-md font-semibold text-gray-800 mb-1 hover:text-blue-600 transition-colors duration-200"
                                >
                                    {post?.title?.split(" ").slice(0, 4).join(" ") + "..."}
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>

    );
};

export default CategoryPage;
