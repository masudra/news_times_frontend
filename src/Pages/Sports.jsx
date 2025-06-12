import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Sports() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("https://mts-blog-backend1.onrender.com/blogs");
        const result = await res.json();
        console.log("Full API Response:", result);

        const blogs = Array.isArray(result) ? result : result.blogs;

        if (Array.isArray(blogs)) {
          // Filter by "Sports" category
          const sportsBlogs = blogs.filter(blog => blog.category === "Sports");
          setData(sportsBlogs);
        } else {
          console.warn("Unexpected data format:", result);
        }
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    };

    fetchData();
  }, []);


  return (
    <div className="mt-12 w-full bg-white shadow-md rounded-lg pb-14">
      <h1 className="text-3xl font-bold mb-6 text-center">Sports</h1>
      <div className="w-full max-w-[1400px] px-4 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1fr_2fr_1fr] gap-4">
        {/* News 1 - First blog */}
        <div>
          <div>
            {data[0] && (
              <>
                <div className="flex flex-col sm:flex-row bg-blue-50 p-2 border-b-1 gap-2">
                  <img
                    className="w-full h-20 object-cover overflow-hidden transition-all duration-300 hover:scale-105"
                    src={
                      data[data.length - 1]?.imageUrl ||
                      "https://source.unsplash.com/600x400/?blog"
                    }
                    alt={data[data.length - 1]?.title}
                  />
                  <div className="p-2">
                    <Link
                      to={`/blogs/${data[data.length - 1]._id}`}
                      className="text-md font-semibold text-gray-800 mb-1 hover:text-blue-600 transition-colors duration-200"
                    >
                      {data[data.length - 1].title}
                    </Link>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row bg-blue-50 p-2 border-b-1 mt-4 gap-2">
                  <img
                    className="w-full h-20 object-cover overflow-hidden transition-all duration-300 hover:scale-105"
                    src={
                      data[data.length - 2]?.imageUrl ||
                      "https://source.unsplash.com/600x400/?blog"
                    }
                    alt={data[data.length - 2]?.title}
                  />
                  <div className="p-2">
                    <Link
                      to={`/blogs/${data[data.length - 2]._id}`}
                      className="text-md font-semibold text-gray-800 mb-1 hover:text-blue-600 transition-colors duration-200"
                    >
                      {data[data.length - 2].title}
                    </Link>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row bg-blue-50 p-2 border-b-1 mt-4 gap-2">
                  <img
                    className="w-full h-20 object-cover overflow-hidden transition-all duration-300 hover:scale-105"
                    src={
                      data[data.length - 3]?.imageUrl ||
                      "https://source.unsplash.com/600x400/?blog"
                    }
                    alt={data[data.length - 3]?.title}
                  />
                  <div className="p-2">
                    <Link
                      to={`/blogs/${data[data.length - 3]._id}`}
                      className="text-md font-semibold text-gray-800 mb-1 hover:text-blue-600 transition-colors duration-200"
                    >
                      {data[data.length - 3].title}
                    </Link>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row bg-blue-50 p-2 border-b-1 mt-4 gap-2">
                  <img
                    className="w-full h-20 object-cover overflow-hidden transition-all duration-300 hover:scale-105"
                    src={
                      data[data.length - 4]?.imageUrl ||
                      "https://source.unsplash.com/600x400/?blog"
                    }
                    alt={data[data.length - 4]?.title}
                  />
                  <div className="p-2">
                    <Link
                      to={`/blogs/${data[data.length - 4]._id}`}
                      className="text-md font-semibold text-gray-800 mb-1 hover:text-blue-600 transition-colors duration-200"
                    >
                      {data[data.length - 4].title}
                    </Link>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>

        {/* News 2 - Second blog */}
        <div>
          <div>
            {data[0] && (
              <>
                <div className="bg-blue-50 p-2">
                  <img
                    className="w-full h-64 sm:h-72 lg:h-80 object-cover overflow-hidden transition-all duration-300 hover:scale-105"
                    src={
                      data[data.length - 5]?.imageUrl ||
                      "https://source.unsplash.com/600x400/?blog"
                    }
                    alt={data[data.length - 5]?.title}
                  />
                  <div className="p-2">
                    <Link
                      to={`/blogs/${data[data.length - 5]._id}`}
                      className="text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-800 mb-1 hover:text-blue-600 transition-colors duration-200"
                    >
                      {data[data.length - 5].title}
                    </Link>
                  </div>
                  <p className="text-gray-700 text-sm line-clamp-3">
                    {data[data.length - 5].summary}
                  </p>
                </div>
              </>
            )}
          </div>
        </div>

        {/* News 3 - Third blog */}
        <div>
          <div>
            {data[0] && (
              <>
                <div className="flex flex-col sm:flex-row bg-blue-50 p-2 border-b-1 gap-2">
                  <img
                    className="w-full h-20 object-cover overflow-hidden transition-all duration-300 hover:scale-105"
                    src={
                      data[data.length - 6]?.imageUrl ||
                      "https://source.unsplash.com/600x400/?blog"
                    }
                    alt={data[data.length - 6]?.title}
                  />
                  <div className="p-2">
                    <Link
                      to={`/blogs/${data[data.length - 6]._id}`}
                      className="text-md font-semibold text-gray-800 mb-1 hover:text-blue-600 transition-colors duration-200"
                    >
                      {data[data.length - 6].title}
                    </Link>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row bg-blue-50 p-2 border-b-1 mt-4 gap-2">
                  <img
                    className="w-full h-20 object-cover overflow-hidden transition-all duration-300 hover:scale-105"
                    src={
                      data[data.length - 7]?.imageUrl ||
                      "https://source.unsplash.com/600x400/?blog"
                    }
                    alt={data[data.length - 7]?.title}
                  />
                  <div className="p-2">
                    <Link
                      to={`/blogs/${data[data.length - 7]._id}`}
                      className="text-md font-semibold text-gray-800 mb-1 hover:text-blue-600 transition-colors duration-200"
                    >
                      {data[data.length - 7].title}
                    </Link>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row bg-blue-50 p-2 border-b-1 mt-4 gap-2">
                  <img
                    className="w-full h-20 object-cover overflow-hidden transition-all duration-300 hover:scale-105"
                    src={
                      data[data.length - 8]?.imageUrl ||
                      "https://source.unsplash.com/600x400/?blog"
                    }
                    alt={data[data.length - 8]?.title}
                  />
                  <div className="p-2">
                    <Link
                      to={`/blogs/${data[data.length - 8]._id}`}
                      className="text-md font-semibold text-gray-800 mb-1 hover:text-blue-600 transition-colors duration-200"
                    >
                      {data[data.length - 8].title}
                    </Link>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row bg-blue-50 p-2 border-b-1 mt-4 gap-2">
                  <img
                    className="w-full h-20 object-cover overflow-hidden transition-all duration-300 hover:scale-105"
                    src={
                      data[data.length - 9]?.imageUrl ||
                      "https://source.unsplash.com/600x400/?blog"
                    }
                    alt={data[data.length - 9]?.title}
                  />
                  <div className="p-2">
                    <Link
                      to={`/blogs/${data[data.length - 9]._id}`}
                      className="text-md font-semibold text-gray-800 mb-1 hover:text-blue-600 transition-colors duration-200"
                    >
                      {data[data.length - 9].title}
                    </Link>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sports;
