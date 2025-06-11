import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function News() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("https://mts-blog-backend.onrender.com/blogs");
        const result = await res.json();
        console.log("Full API Response:", result);

        if (Array.isArray(result)) {
          setData(result);
        } else if (Array.isArray(result.blogs)) {
          setData(result.blogs);
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
    <div className="mt-20 w-full bg-white shadow-md rounded-lg pb-14">
      <h1 className="text-3xl font-bold mb-6 text-center"> Latest News</h1>
      <div className="w-full max-w-[1400px] px-4 mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* News 1 - First blog */}
        <div>
          <div>
            {data[0] && (
              <>
                <div className="bg-blue-50 p-2">
                  <img
                    className="w-full h-40 sm:h-48 lg:h-35 object-cover overflow-hidden transition-all duration-300 hover:scale-105"
                    src={
                      data[0].imageUrl ||
                      "https://source.unsplash.com/600x400/?blog"
                    }
                    alt={data[0].title}
                  />
                  <div className="p-2">
                    <Link
                      to={`/blogs/${data[0]._id}`}
                      className="text-lg font-semibold text-gray-800 mb-1 hover:text-blue-600 transition-colors duration-200"
                    >
                      {data[0].title}
                    </Link>
                  </div>
                </div>

                <div className=" bg-blue-50 p-2 mt-4">
                  <img
                    className="w-full h-40 sm:h-48 lg:h-34 object-cover overflow-hidden transition-all duration-300 hover:scale-105"
                    src={
                      data[1].imageUrl ||
                      "https://source.unsplash.com/600x400/?blog"
                    }
                    alt={data[1].title}
                  />
                  <div className="p-2">
                    <Link
                      to={`/blogs/${data[1]._id}`}
                      className="text-lg font-semibold text-gray-800 mb-1 hover:text-blue-600 transition-colors duration-200"
                    >
                      {data[1].title}
                    </Link>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
        {/* News 2 */}
        <div>
          <div>
            {data[0] && (
              <>
                <div className="flex flex-col sm:flex-row bg-blue-50 p-2 border-b-1 gap-2">
                  <img
                     className="w-full h-20 object-cover overflow-hidden transition-all duration-300 hover:scale-105"
                    src={
                      data[2]?.imageUrl ||
                      "https://source.unsplash.com/600x400/?blog"
                    }
                    alt={data[2]?.title}
                  />
                  <div className="p-1">
                    <Link
                      to={`/blogs/${data[2]?._id}`}
                      className="text-md font-semibold text-gray-800 mb-1 hover:text-blue-600 transition-colors duration-200"
                    >
                      {data[2]?.title}
                    </Link>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row bg-blue-50 p-2 border-b-1 mt-4 gap-2">
                  <img
                     className="w-full h-20 object-cover overflow-hidden transition-all duration-300 hover:scale-105"
                    src={
                      data[3]?.imageUrl ||
                      "https://source.unsplash.com/600x400/?blog"
                    }
                    alt={data[3]?.title}
                  />
                  <div className="p-1">
                    <Link
                      to={`/blogs/${data[3]?._id}`}
                      className="text-md font-semibold text-gray-800 mb-1 hover:text-blue-600 transition-colors duration-200"
                    >
                      {data[3]?.title}
                    </Link>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row bg-blue-50 p-2 border-b-1 mt-4 gap-2">
                  <img
                     className="w-full h-20 object-cover overflow-hidden transition-all duration-300 hover:scale-105"
                    src={
                      data[4]?.imageUrl ||
                      "https://source.unsplash.com/600x400/?blog"
                    }
                    alt={data[4]?.title}
                  />
                  <div className="p-1">
                    <Link
                      to={`/blogs/${data[4]?._id}`}
                      className="text-md font-semibold text-gray-800 mb-1 hover:text-blue-600 transition-colors duration-200"
                    >
                      {data[4]?.title}
                    </Link>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row bg-blue-50 p-2 border-b-1 mt-4 gap-2">
                  <img
                     className="w-full h-20 object-cover overflow-hidden transition-all duration-300 hover:scale-105"
                    src={
                      data[0]?.imageUrl ||
                      "https://source.unsplash.com/600x400/?blog"
                    }
                    alt={data[0]?.title}
                  />
                  <div className="p-1">
                    <Link
                      to={`/blogs/${data[0]?._id}`}
                      className="text-md font-semibold text-gray-800 mb-1 hover:text-blue-600 transition-colors duration-200"
                    >
                      {data[0]?.title}
                    </Link>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
        {/* News 3 */}
        <div>
          <div>
            {data[0] && (
              <>
                <div className="flex flex-col sm:flex-row bg-blue-50 p-2 border-b-1 gap-2">
                  <img
                     className="w-full h-20 object-cover overflow-hidden transition-all duration-300 hover:scale-105"
                    src={
                      data[2]?.imageUrl ||
                      "https://source.unsplash.com/600x400/?blog"
                    }
                    alt={data[2]?.title}
                  />
                  <div className="p-1">
                    <Link
                      to={`/blogs/${data[2]?._id}`}
                      className="text-md font-semibold text-gray-800 mb-1 hover:text-blue-600 transition-colors duration-200"
                    >
                      {data[2]?.title}
                    </Link>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row bg-blue-50 p-2 border-b-1 mt-4 gap-2">
                  <img
                     className="w-full h-20 object-cover overflow-hidden transition-all duration-300 hover:scale-105"
                    src={
                      data[3]?.imageUrl ||
                      "https://source.unsplash.com/600x400/?blog"
                    }
                    alt={data[3]?.title}
                  />
                  <div className="p-1">
                    <Link
                      to={`/blogs/${data[3]?._id}`}
                      className="text-md font-semibold text-gray-800 mb-1 hover:text-blue-600 transition-colors duration-200"
                    >
                      {data[3]?.title}
                    </Link>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row bg-blue-50 p-2 border-b-1 mt-4 gap-2">
                  <img
                     className="w-full h-20 object-cover overflow-hidden transition-all duration-300 hover:scale-105"
                    src={
                      data[4]?.imageUrl ||
                      "https://source.unsplash.com/600x400/?blog"
                    }
                    alt={data[4]?.title}
                  />
                  <div className="p-1">
                    <Link
                      to={`/blogs/${data[4]?._id}`}
                      className="text-md font-semibold text-gray-800 mb-1 hover:text-blue-600 transition-colors duration-200"
                    >
                      {data[4]?.title}
                    </Link>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row bg-blue-50 p-2 border-b-1 mt-4 gap-2">
                  <img
                     className="w-full h-20 object-cover overflow-hidden transition-all duration-300 hover:scale-105"
                    src={
                      data[0]?.imageUrl ||
                      "https://source.unsplash.com/600x400/?blog"
                    }
                    alt={data[0]?.title}
                  />
                  <div className="p-1">
                    <Link
                      to={`/blogs/${data[0]?._id}`}
                      className="text-md font-semibold text-gray-800 mb-1 hover:text-blue-600 transition-colors duration-200"
                    >
                      {data[0]?.title}
                    </Link>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
        {/* News 4 */}
        <div>
          <div>
            {data[0] && (
              <>
                <div className="flex flex-col sm:flex-row bg-blue-50 p-2 border-b-1 gap-2">
                  <img
                    className="w-full h-20 object-cover overflow-hidden transition-all duration-300 hover:scale-105"
                    src={
                      data[2]?.imageUrl ||
                      "https://source.unsplash.com/600x400/?blog"
                    }
                    alt={data[2]?.title}
                  />
                  <div className="p-1">
                    <Link
                      to={`/blogs/${data[2]?._id}`}
                      className="text-md font-semibold text-gray-800 mb-1 hover:text-blue-600 transition-colors duration-200"
                    >
                      {data[2]?.title}
                    </Link>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row bg-blue-50 p-2 border-b-1 mt-4 gap-2">
                  <img
                     className="w-full h-20 object-cover overflow-hidden transition-all duration-300 hover:scale-105"
                    src={
                      data[3]?.imageUrl ||
                      "https://source.unsplash.com/600x400/?blog"
                    }
                    alt={data[3]?.title}
                  />
                  <div className="p-1">
                    <Link
                      to={`/blogs/${data[3]?._id}`}
                      className="text-md font-semibold text-gray-800 mb-1 hover:text-blue-600 transition-colors duration-200"
                    >
                      {data[3]?.title}
                    </Link>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row bg-blue-50 p-2 border-b-1 mt-4 gap-2">
                  <img
                     className="w-full h-20 object-cover overflow-hidden transition-all duration-300 hover:scale-105"
                    src={
                      data[4]?.imageUrl ||
                      "https://source.unsplash.com/600x400/?blog"
                    }
                    alt={data[4]?.title}
                  />
                  <div className="p-1">
                    <Link
                      to={`/blogs/${data[4]?._id}`}
                      className="text-md font-semibold text-gray-800 mb-1 hover:text-blue-600 transition-colors duration-200"
                    >
                      {data[4]?.title}
                    </Link>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row bg-blue-50 p-2 border-b-1 mt-4 gap-2">
                  <img
                     className="w-full h-20 object-cover overflow-hidden transition-all duration-300 hover:scale-105"
                    src={
                      data[0]?.imageUrl ||
                      "https://source.unsplash.com/600x400/?blog"
                    }
                    alt={data[0]?.title}
                  />
                  <div className="p-1">
                    <Link
                      to={`/blogs/${data[0]?._id}`}
                      className="text-md font-semibold text-gray-800 mb-1 hover:text-blue-600 transition-colors duration-200"
                    >
                      {data[0]?.title}
                    </Link>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>{" "}
      </div>
    </div>
  );
}

export default News;
